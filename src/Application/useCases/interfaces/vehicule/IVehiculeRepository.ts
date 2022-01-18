import { Vehicule } from "../../../../Domain/entities/Vehicule";

export interface IVehiculeRepository {
  create: (vehicule: Vehicule) => Promise<void>;
  update: (vehicule: Vehicule) => Promise<void>;
  getById: (id: string) => Promise<Vehicule>;
  getAll: () => Promise<Vehicule[]>;
}
