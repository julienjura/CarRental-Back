import { Booking } from "../../../../Domain/Aggregates/Booking";

export interface IBookingInputPort {
  handle: (booking: Booking) => Promise<void>;
}
