import { Booking } from "../../../../Domain/Aggregates/Booking";

export interface IBookingOutputPort {
  present: (booking: Booking) => void;
}
