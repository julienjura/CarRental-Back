import { Vehicule } from "../../../../Domain/entities/Vehicule";

export interface IVehiculeOutputPort {
  present: (vehicule: Vehicule) => void;
}
