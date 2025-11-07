import { LuLayoutDashboard, LuUsers, LuHotel, LuDollarSign, LuSettings } from 'react-icons/lu';
import { FaUserCheck } from 'react-icons/fa6';
import { FiFileText } from 'react-icons/fi';
import { FaRegChartBar } from 'react-icons/fa';
import { MdOutlineChatBubble } from 'react-icons/md';
import { BsCalendar4 } from 'react-icons/bs';

export const NavBarConfig = [{
  title: "Dashboard",
  icon: LuLayoutDashboard,
  url: "/"
},
{
  title: "Guests Management",
  icon: LuUsers,
  url: "/guests-management"
},
{
  title: "Hotels Management",
  icon: LuHotel,
  url: "/hotel-management"
},
{
  title: "Verification",
  icon: FaUserCheck,
  url: "/verification"
},
{
  title: "Booking Management",
  icon: BsCalendar4,
  url: "/booking-management"
},
{
  title: "Content Management",
  icon: FiFileText,
  url: "/content-management"
},
{
  title: "Financial Oversight",
  icon: LuDollarSign,
  url: "/finacial-management"
},
{
  title: "Analytics",
  icon: FaRegChartBar,
  url: "/analytics-report"

},
{
  title: "System Config",
  icon: LuSettings,
  url: ""
},
{
  title: "Customer Support",
  icon: MdOutlineChatBubble,
  url: ""
}
]