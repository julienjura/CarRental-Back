import { Model } from "../../../../Domain/entities/Model";

export interface IModelInputPort {
  handle: (model?: Model) => Promise<void>;
}
