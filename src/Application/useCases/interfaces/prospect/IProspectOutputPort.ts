import { Prospect } from "../../../../Domain/entities/Prospect";

export interface IProspectOutputPort {
  present: (prospect: Prospect) => void;
}
