import { IModelOutputPort } from "../../../Application/useCases/interfaces/model/IModelOutputPort";
import { Model } from "../../../Domain/entities/Model";

export class ModelJSONPresenter implements IModelOutputPort {
  private _json: { name: string; brand: string } = { name: "", brand: "" };
  get value() {
    return this._json;
  }
  present = (model: Model) => {
    this._json = {
      name: model.name.value,
      brand: model.brand.value,
    };
  };
}
