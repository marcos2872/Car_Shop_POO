import { Router } from 'express';
import CarControler from '../Controllers/CarControler';
import CarService from '../Services/CarService';

const route = Router();

const carService = new CarService();
const carControler = new CarControler(carService);

route.post('/cars', carControler.createCar);

export default route;