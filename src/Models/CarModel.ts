import { Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import AbstractModel from './AbstractModel';

export default class CarModel extends AbstractModel<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
      id: { type: String },
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    super(schema, 'Car');
  }
}