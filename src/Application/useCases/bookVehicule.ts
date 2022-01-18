import { Booking } from "../../Domain/Aggregates/Booking";
import { Prospect } from "../../Domain/entities/Prospect";
import { CheckVehiculeAvailability } from "./checkVehiculeAvailability";
import { IBookingInputPort } from "./interfaces/booking/IBookingInputPort";
import { IBookingOutputPort } from "./interfaces/booking/IBookingOutputPort";
import { IBookingRepository } from "./interfaces/booking/IBookingRepository";

export class BookVehicule implements IBookingInputPort {
  private _bookingsRepository: IBookingRepository;
  private _presenter: IBookingOutputPort;
  private _checkVehiculeAvailability: CheckVehiculeAvailability;
  constructor(
    bookingsRepository: IBookingRepository,
    presenter: IBookingOutputPort,
    checkVehiculeAvailability: CheckVehiculeAvailability
  ) {
    this._bookingsRepository = bookingsRepository;
    this._presenter = presenter;
    this._checkVehiculeAvailability = checkVehiculeAvailability;
  }
  handle = async (booking: Booking) => {
    if (booking.customer.value instanceof Prospect)
      throw new Error(
        "You should create a Customer account to book a vehicle."
      );
    await this._checkVehiculeAvailability.handle(booking);
    await this._bookingsRepository.create(booking);
    this._presenter.present(booking);
  };
}
