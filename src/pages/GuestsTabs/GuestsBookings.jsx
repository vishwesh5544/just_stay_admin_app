import BookingPattern from "./Bookings/BookingPattern";
import BookingTiles from "./Bookings/BookingTiles";
import BookingTimeline from "./Bookings/BookingTimeline";
import HotelType from "./Bookings/HotelType";
import RecentBookings from "./Bookings/RecentBookings";

const GuestsBookings = () => {
  return(
    <>
      <div className="w-full">
        <BookingTiles />
      </div>
      <div className="border border-gray-200 rounded-2xl mt-4 p-4">
        <BookingTimeline />
      </div>
      <div className="border border-gray-200 rounded-2xl mt-4 p-4">
        <HotelType />
      </div>
      <div className="border border-gray-200 rounded-2xl mt-4 p-4">
        <BookingPattern />
      </div>
      <div className="border border-gray-200 rounded-2xl mt-4 p-4">
        <RecentBookings />
      </div>
    </>
  )
}

export default GuestsBookings;