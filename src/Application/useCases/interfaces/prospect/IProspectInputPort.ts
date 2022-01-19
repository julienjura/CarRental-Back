import { Prospect } from "../../../../Domain/entities/Prospect";

export interface IProspectInputPort {
  handle: (prospect: Prospect) => void;
}
