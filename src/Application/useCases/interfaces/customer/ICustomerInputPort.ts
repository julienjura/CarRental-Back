import { Customer } from "../../../../Domain/entities/Customer";

export interface ICustomerInputPort {
  handle: (customer: Customer) => void;
}
