import { Vehicule } from "../../../../Domain/entities/Vehicule";

export interface IVehiculeInputPort {
  handle: (vehicule: Vehicule) => void;
}
