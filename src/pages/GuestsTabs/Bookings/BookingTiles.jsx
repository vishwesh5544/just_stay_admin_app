import CardComponent from "../../../components/Cards/CardComponent";
import { BookingTilesArr } from "../../../utils/Constant/GuestBooking";

const BookingTiles = () => {
  return(
    <>
      <div className="flex justify-between gap-4">
        {
          BookingTilesArr.map((booking) => {
            const Icon = booking.symbol
            return <CardComponent
              title={booking.title}
              totalNumber={booking.totalNumber}
              isIcon={true}
              symbolIcon={<Icon className={booking.fontTitleColor}/>}
              borderColor={booking.borderColor}
              bgColor={booking.bgColor}
              fontTitleColor={booking.fontTitleColor}
            />
          })
        }
      </div>
    </>
  )
}

export default BookingTiles;