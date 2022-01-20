import { IModelRepository } from "../../../Application/useCases/interfaces/model/IModelRepository";
import { Model } from "../../../Domain/entities/Model";

interface IModelDTO {
  name: string;
  brand: string;
  picture: string;
}

export class ModelRepository implements IModelRepository {
  private _models: IModelDTO[];
  constructor() {
    this._models = [];
  }
  private domainToDTO = (model: Model): IModelDTO => ({
    name: model.name.value,
    brand: model.brand.value,
    picture: model.picture.value
  });
  private dtoToDomain = (model: IModelDTO): Model =>
    new Model(model.name, model.brand, model.picture);
  create = async (model: Model) => {
    const alreadyExistingModel = this._models.find(
      (m) => m.name === model.name.value && m.brand === model.brand.value && m.picture === model.picture.value
    );
    if (alreadyExistingModel)
      throw new Error(
        `A model already exists with name ${model.name.value} and brand ${model.brand.value}`
      );
    this._models.push(this.domainToDTO(model));
  };
  remove = async (model: Model) => {
    const alreadyExistingModel = this._models.find(
      (m) => m.name === model.name.value && m.brand === model.brand.value && m.picture === model.picture.value
    );
    if (!alreadyExistingModel)
      throw new Error(
        `No model exists with following attributes : name ${model.name.value}, brand ${model.brand.value}, picture ${model.picture.value} `
      );
    this._models = this._models.filter(
      (m) => !(m.name === model.name.value && m.brand === model.brand.value && m.picture === model.picture.value)
    );
  };
  getAll = async () => this._models.map((m) => this.dtoToDomain(m));
}
