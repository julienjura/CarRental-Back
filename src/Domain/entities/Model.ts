import { ValueOrEntityObject } from "../types";
import { Name, PictureURL } from "../ValueObjects";

interface IModel {
  name: Name;
  brand: Name;
  picture: PictureURL;
}
export class Model implements ValueOrEntityObject<IModel> {
  private _value: IModel;
  constructor(name?: string, brand?: string, pictureURL?: string) {
    this._value = {
      name: new Name(name),
      brand: new Name(brand),
      picture: new PictureURL(pictureURL),
    };
  }
  get name() {
    return this._value.name;
  }
  get brand() {
    return this._value.brand;
  }
  get picture() {
    return this._value.picture;
  }
  isEqual = (other: unknown) => {
    if (
      other instanceof Model &&
      other.name.isEqual(this.name) &&
      other.brand.isEqual(this.brand) &&
      other.picture.isEqual(this.picture)
    )
      return true;
    return false;
  };
}
