import { Router } from 'express';
import CarControler from '../Controllers/CarControler';
import MotoController from '../Controllers/MotorcycleControler';

const route = Router();

const carControler = new CarControler();
const motoControler = new MotoController();

route.get('/cars/:id', carControler.findCarsById);
route.put('/cars/:id', carControler.updateCar);
route.get('/cars', carControler.findCars);
route.post('/cars', carControler.createCar);

route.post('/motorcycles', motoControler.createCar);

export default route;
