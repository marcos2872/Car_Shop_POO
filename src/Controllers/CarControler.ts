import { Request, Response } from 'express';
import CarService from '../Services/CarService';

// const INVALID_MONGOID_ERROR_MESSAGE = 'Invalid Mongo id';
const INVALID_MONGOID_MESSAGE = 'Invalid mongo id';

export default class CarController {
  private _CarService: CarService;
  constructor(carService: CarService) {
    this._CarService = carService;
  }

  async createCar(req: Request, res: Response) {
    const car = req.body;
    try {
      const newCar = await this._CarService.createCar(car);
      return res.status(201).json(newCar);
    } catch (error) {
      return res.status(500).json((error as Error).message);
    }
  }

  async findCars(_req: Request, res: Response) {
    try {
      const allCars = await this._CarService.findCars();
      
      return res.status(200).json(allCars);
    } catch (error) {
      return res.status(500).json((error as Error).message);
    }
  }

  async findCarsById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const carId = await this._CarService.findCarsById(id);
      if (!carId) {
        return res.status(404).json({ message: 'Car not found' });
      }
      return res.status(200).json(carId);
    } catch (error) {
      return res.status(422).json({ message: INVALID_MONGOID_MESSAGE });
    }
  }
}