import path  from 'path';
import express from 'express';

import { ModelController } from "../controllers/modelControllers/ModelController";

export const carRentalRouter = express.Router();

const prefix = "/";

carRentalRouter.get(`${prefix}`, (request, response) => { ModelController.getAll(request, response) });
carRentalRouter.post(`${prefix}`, (request, response) => { ModelController.create(request, response) });

