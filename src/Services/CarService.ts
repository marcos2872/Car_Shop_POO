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

  async findCars() {
    const carModel = new CarModel();

    const allCars = await carModel.find();

    return allCars.map((curr) => ({
      id: curr._id,
      model: curr.model,
      year: curr.year,
      color: curr.color,
      status: curr.status,
      buyValue: curr.buyValue,
      doorsQty: curr.doorsQty,
      seatsQty: curr.seatsQty,
    }));
  }

  async findCarsById(id: string) {
    const carModel = new CarModel();

    const carsById = await carModel.findById(id);

    return carsById ? { ...carsById, id: carsById._id } : null;
  }
}