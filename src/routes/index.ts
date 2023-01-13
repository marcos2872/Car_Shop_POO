import { Router } from 'express';
import CarControler from '../Controllers/CarControler';
import MotoController from '../Controllers/MotorcycleControler';

const route = Router();

const carControler = new CarControler();
const motoControler = new MotoController();

route.get('/cars/:id', carControler.findCarsById);
route.get('/cars', carControler.findCars);
route.put('/cars/:id', carControler.updateCar);
route.post('/cars', carControler.createCar);

route.get('/motorcycles/:id', motoControler.findMotoById);
route.get('/motorcycles', motoControler.findMoto);
route.post('/motorcycles', motoControler.createCar);

export default route;
