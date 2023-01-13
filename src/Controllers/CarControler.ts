import { Request, Response } from 'express';
import CarService from '../Services/CarService';

// const INVALID_MONGOID_ERROR_MESSAGE = 'Invalid Mongo id';
// const INVALID_MONGOID_MESSAGE = 'Invalid mongo id';

export default class CarController {
  private _CarService: CarService;
  constructor(carService: CarService) {
    this._CarService = carService;
  }

  public createCar = async (req: Request, res: Response) => {
    const car = req.body;
    try {
      const newCar = await this._CarService.createCar(car);
      return res.status(201).json(newCar);
    } catch (error) {
      return res.status(500).json((error as Error).message);
    }
  };
}