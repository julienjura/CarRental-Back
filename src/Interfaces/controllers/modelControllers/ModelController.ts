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
import { GetAllModels } from '../../../Application/useCases/getAllModels';
import { ModelsJSONPresenter } from '../../presenters/modelPresenters/ModelsJSONPresenter';


export class ModelController {

    private _createModel: CreateModel;
    private _getModels: GetAllModels;

    private _modelPresenter : ModelJSONPresenter;
    private _modelsPresenter : ModelsJSONPresenter;

    constructor(repository: IModelRepository) {
        this._modelPresenter = new ModelJSONPresenter();
        this._modelsPresenter = new ModelsJSONPresenter();
        
        this._createModel = new CreateModel(repository, this._modelPresenter);
        this._getModels = new GetAllModels(repository, this._modelsPresenter);
    }

    create(request: Request, response: Response) {
        //this.createModel(request.body);
    }

    async getAll(request: Request, response: Response) {
        await this.getAllModel();
        response.render('home', { models: this._modelsPresenter.value});
    }

    createModel = async (data: { name: string; brand: string; pictureURL: string }): Promise<ControllerResponse> => {
        try {
            const newModel = new Model(data.name, data.brand, data.pictureURL);
            await this._createModel.handle(newModel);
            return { success: true, message: "new model added." };
        } catch (e) {
            console.log((e as Error).message);
            return { success: false, message: (e as Error).message };
        }
    };

    getAllModel = async () => {
        await this._getModels.handle();
    };
}