import { Model } from "../../../../Domain/entities/Model";

export interface IModelOutputPort {
  present: (model: Model) => void;
}

export interface IModelsOutputPort {
  present: (models: Model[]) => void;
}

export default IModelOutputPort;
