import { Vehicule } from "../../Domain/entities/Vehicule";
import { IVehiculeInputPort } from "./interfaces/vehicule/IVehiculeInputPort";
import { IVehiculeOutputPort } from "./interfaces/vehicule/IVehiculeOutputPort";
import { IVehiculeRepository } from "./interfaces/vehicule/IVehiculeRepository";

export class UpdateVehicule implements IVehiculeInputPort {
  private _repository: IVehiculeRepository;
  private _presenter: IVehiculeOutputPort;
  constructor(repository: IVehiculeRepository, presenter: IVehiculeOutputPort) {
    this._repository = repository;
    this._presenter = presenter;
  }
  handle = async (vehicule: Vehicule) => {
    await this._repository.update(vehicule);
    this._presenter.present(vehicule);
  };
}
