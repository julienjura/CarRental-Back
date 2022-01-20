import path  from 'path';
import express, { Response, Request } from 'express';

import { ModelController } from "../controllers/modelControllers/ModelController";
import { ModelRepository } from '../../Infrastructure/repositories/model/modelRepository';

export const carRentalRouter = express.Router();

const prefix = "/";

const modelRepository = new ModelRepository();
const modelController = new ModelController(modelRepository);

// Mock some data
modelController.createModel({ name: "A3", brand: "Audi", pictureURL: "audi-a3.jpeg" });
modelController.createModel({ name: "Juke", brand: "Nissan", pictureURL: "nissan-juke.png" });
modelController.createModel({ name: "DS3", brand: "Citroen", pictureURL: "citroen-ds3-cabrio.jpeg" });

carRentalRouter.get(`${prefix}`, (request: Request, response: Response) => { modelController.getAll(request, response) });
carRentalRouter.post(`${prefix}`, (request: Request, response: Response) => { modelController.create(request, response) });

