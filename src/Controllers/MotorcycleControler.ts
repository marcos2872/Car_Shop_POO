import { Request, Response } from 'express';
import MotoService from '../Services/MotorcycleService';

// const INVALID_MONGOID_MESSAGE = 'Invalid mongo id';

export default class MotoController {
  private _MotoService: MotoService;
  constructor() {
    this._MotoService = new MotoService();
  }

  createCar = async (req: Request, res: Response) => {
    const moto = req.body;
    try {
      const newMoto = await this._MotoService.createMoto(moto);
      return res.status(201).json(newMoto);
    } catch (error) {
      return res.status(500).json((error as Error).message);
    }
  };
}