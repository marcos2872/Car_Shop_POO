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
}