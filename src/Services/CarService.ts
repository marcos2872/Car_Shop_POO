import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/CarModel';

export default class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  async createCar(obj: ICar) {
    const carModel = new CarModel();

    const newCar = await carModel.create({ ...obj, status: obj.status || false });
    
    return this.createCarDomain(newCar);
  }
}