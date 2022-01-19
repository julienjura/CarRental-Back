import path  from 'path';
import express from 'express';
import { Response, Request } from "express";
import fs from 'fs';
import { request } from 'http';

import { IModelRepository } from '../../../Application/useCases/interfaces/model/IModelRepository';
import CreateModel from '../../../Application/useCases/createModel';
import { ModelJSONPresenter } from '../../presenters/modelPresenters/ModelJSONPresenter';
import { ControllerResponse } from '../types'; 
import { Model } from '../../../Domain/entities/Model';


export class ModelController {

    private _createModel: CreateModel;
    private _presenter : ModelJSONPresenter;

    constructor(repository: IModelRepository) {
        this._presenter = new ModelJSONPresenter();
        this._createModel = new CreateModel(repository, this._presenter);
    }

    create(request: Request, response: Response) {
        //this.createModel(request.body);
    }

    getAll(request: Request, response: Response) {

    }

    createModel = async (data: { name: string; brand: string; }): Promise<ControllerResponse> => {
        try {
            const newModel = new Model(data.name, data.brand);
            await this._createModel.handle(newModel);
            return { success: true, message: "new model added." };
        } catch (e) {
            console.log((e as Error).message);
            return { success: false, message: (e as Error).message };
        }
    };
}