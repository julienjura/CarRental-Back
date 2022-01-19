import { IModelInputPort } from "./interfaces/model/IModelInputPort";
import { IModelsOutputPort } from "./interfaces/model/IModelOutputPort";
import { IModelRepository } from "./interfaces/model/IModelRepository";

export class GetAllModels implements IModelInputPort {
  private _repository: IModelRepository;
  private _presenter: IModelsOutputPort;
  constructor(repository: IModelRepository, presenter: IModelsOutputPort) {
    this._repository = repository;
    this._presenter = presenter;
  }
  handle = async () => {
    const response = await this._repository.getAll();
    console.log(JSON.stringify(response));
    this._presenter.present(response);
  };
}
