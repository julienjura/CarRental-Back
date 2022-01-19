import { Customer } from "../../../../Domain/entities/Customer";

export interface ICustomerOutputPort {
  present: (customer: Customer) => void;
}
