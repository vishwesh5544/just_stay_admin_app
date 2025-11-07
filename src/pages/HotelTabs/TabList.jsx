import HotelProfile from "./Profile/HotelProfile";
import HotelRoom from "./Room/HotelRoom";
import HotelMedia from "./Media/HotelMedia";
import HotelDocument from "./Documents/HotelDocument";
import HotelPerformance from "./Performance/HotelPerformance";
import HotelReview from "./Reviews/HotelReview";

export const TabList = [[
  {
    label: "Profile",
    content: <HotelProfile />
  },
  { label: "Rooms", content: <HotelRoom /> },
  { label: "Media", content: <HotelMedia /> },
  { label: "Documents", content: <HotelDocument /> },
  { label: "Performance", content: <HotelPerformance /> },
  { label: "Reviews", content: <HotelReview />}
]]
