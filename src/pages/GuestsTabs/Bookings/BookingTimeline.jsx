import BookingCardComponent from "../../../components/Cards/BookingCardComponent"
import { BookingTimelineArr } from "../../../utils/Constant/GuestBooking"

const BookingTimeline = () => {
  return(
    <>
      <p className="font-poppins font-medium text-[14px] leading-5 tracking-[0px] text-[#101828]">Booking Timeline</p>
      <div className="flex gap-4 mt-6">
        {BookingTimelineArr.map((item) => {
          const Icon = item.symbol
          return <BookingCardComponent
          title={"Upcoming"}
          isIcon={true}
          symbolIcon={<Icon className={`${item.fontTitleColor} mb-1`} />}
          totalNumber={"2"}
          borderColor={item.borderColor}
          bgColor={item.bgColor}
          fontTitleColor={item.fontTitleColor}
        />
        })}
      </div>
    </>
  )
}

export default BookingTimeline