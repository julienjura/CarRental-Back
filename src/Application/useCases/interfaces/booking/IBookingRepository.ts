import { Booking } from "../../../../Domain/Aggregates/Booking";

export interface IBookingRepository {
  create: (booking: Booking) => Promise<void>;
  remove: (booking: Booking) => Promise<void>;
  getAll: () => Promise<Booking[]>;
  getBookingById: (id: string) => Promise<Booking>;
}
