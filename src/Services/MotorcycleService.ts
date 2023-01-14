import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotoModel from '../Models/MotorcycleModel';

export default class MotoService {
  private createMotoDomain(moto: IMotorcycle | null): Motorcycle | null {
    if (moto) {
      return new Motorcycle(moto);
    }
    return null;
  }

  async createMoto(obj: IMotorcycle) {
    const motoModel = new MotoModel();

    const newMoto = await motoModel.create({ ...obj, status: obj.status || false });
    
    return this.createMotoDomain(newMoto);
  }

  async findMoto() {
    const motoModel = new MotoModel();

    const allMoto = await motoModel.find();

    return allMoto.map((curr) => ({
      id: curr._id,
      model: curr.model,
      year: curr.year,
      color: curr.color,
      status: curr.status,
      buyValue: curr.buyValue,
      category: curr.category,
      engineCapacity: curr.engineCapacity,
    }));
  }

  async findMotoById(id: string) {
    const motoModel = new MotoModel();

    const moto = await motoModel.findById(id);

    return moto ? {
      id: moto._id,
      model: moto.model,
      year: moto.year,
      color: moto.color,
      status: moto.status,
      buyValue: moto.buyValue,
      category: moto.category,
      engineCapacity: moto.engineCapacity,
    } : null;
  }

  async updateMoto(id: string, obj:IMotorcycle) {
    const motoModel = new MotoModel();

    const moto = await motoModel.update(id, obj);

    return moto ? {
      id: moto._id,
      model: moto.model,
      year: moto.year,
      color: moto.color,
      status: moto.status,
      buyValue: moto.buyValue,
      category: moto.category,
      engineCapacity: moto.engineCapacity,
    } : null;
  }

  async deleteMotoById(id: string) {
    const motoModel = new MotoModel();
    const moto = await this.findMotoById(id);
    if (!moto) {
      return { message: 'Motorcycle not found' };
    }
    await motoModel.delete(id);
    return null;
  }
}