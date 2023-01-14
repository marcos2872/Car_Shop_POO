import { Request, Response } from 'express';
import MotoService from '../Services/MotorcycleService';

const INVALID_MONGOID_MESSAGE = 'Invalid mongo id';

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

  findMoto = async (_req: Request, res: Response) => {
    try {
      const moto = await this._MotoService.findMoto();
      return res.status(200).json(moto);
    } catch (error) {
      return res.status(500).json((error as Error).message);
    }
  };

  findMotoById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const moto = await this._MotoService.findMotoById(id);
      if (!moto) {
        return res.status(404).json({ message: 'Motorcycle not found' });
      }
      return res.status(200).json(moto);
    } catch (error) {
      return res.status(422).json({ message: INVALID_MONGOID_MESSAGE });
    }
  };

  updateMoto = async (req: Request, res: Response) => {
    const { id } = req.params;
    const moto = req.body;
    try {
      const updated = await this._MotoService.updateMoto(id, moto);
      if (!updated) {
        return res.status(404).json({ message: 'Motorcycle not found' });
      }
      return res.status(200).json(updated);
    } catch (error) {
      return res.status(422).json({ message: INVALID_MONGOID_MESSAGE });
    }
  };
}
