import BookingCardComponent from "../../../components/Cards/BookingCardComponent";

const BookingPattern = () => {
  const patternList = [
    {
      label: "Daily Average",
      value: "0.15",
      subLabel: "bookings/day"
    },
    {
      label: "Weekly Average",
      value: "0.15",
      subLabel: "bookings/day"
    },
    {
      label: "Daily Average",
      value: "0.15",
      subLabel: "bookings/day"
    },
  ]
  return(
    <>
      <div className="flex gap-4">
        {
          patternList.map((pattern) => (
            <BookingCardComponent
              title={pattern.label}
              subTitle={pattern.subLabel}
              totalNumber={pattern.value}
              bgColor="bg-[#F9FAFB]"
              borderColor="border-[#F9FAFB]"
            />
          ))
        }
      </div>
    </>
  )
}

export default BookingPattern;