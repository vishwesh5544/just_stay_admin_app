import { LuHotel, LuCheck, LuClock, LuShieldCheck, LuStar, LuMapPin, LuPhone, LuEye } from "react-icons/lu"
import CardComponent from "../components/Cards/CardComponent"
import PageHeading from "../components/PageHeading/PageHeading"
import HotelFilters from "../components/HotelManagement/HotelFilters"
import TableComponent from "../components/BasicComponent/TableComponent"
import { FaRegEdit } from "react-icons/fa"
import { BsThreeDots } from "react-icons/bs"
import HotelManagementDrawer from "./HotelManagementDrawer"
import { useState } from "react"

const HotalManagement = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hotelCards = [
    {
      title: "Total Hotels",
      totalNumber: "1,234",
      borderColor: "border-[#E5E7EB]",
      bgColor: "bg-white",
      fontTitleColor: "text-[#4A5565]",
      icon: LuHotel,
      iconClass: "text-[#4A5565]"
    },
    {
      title: "Active",
      totalNumber: "1,156",
      borderColor: "border-[#B9F8CF]",
      bgColor: "bg-gradient-to-bl from-[#F0FDF4] to-[#DCFCE7]",
      fontTitleColor: "text-[#00A63E]",
      icon: LuCheck,
      iconClass: "text-[#00A63E]"
    },
    {
      title: "Pending",
      totalNumber: "34",
      borderColor: "border-[#FFF085]",
      bgColor: "bg-gradient-to-bl from-[#FEFCE8] to-[#FEF9C2]",
      fontTitleColor: "text-[#A65F00]",
      icon: LuClock,
      iconClass: "text-[#A65F00]"
    },
    {
      title: "Hourly Enabled",
      totalNumber: "456",
      borderColor: "border-[#BEDBFF]",
      bgColor: "bg-gradient-to-bl from-[#EFF6FF] to-[#DBEAFE]",
      fontTitleColor: "text-[#1447E6]",
      icon: LuClock,
      iconClass: "text-blue-600"
    },
    {
      title: "goSafe Certified",
      totalNumber: "678",
      borderColor: "border-[#B9F8CF]",
      bgColor: "bg-gradient-to-bl from-[#F0FDFA] to-[#CBFBF1]",
      fontTitleColor: "text-[#008236]",
      icon: LuShieldCheck,
      iconClass: "text-emerald-600"
    },
    {
      title: "Avg Rating",
      totalNumber: "4.3★",
      borderColor: "border-[#E2C4FF]",
      bgColor: "bg-gradient-to-bl from-[#FAF5FF] to-[#F3E8FF]",
      fontTitleColor: "text-[#7C3AED]",
      icon: LuStar,
      iconClass: "text-purple-500"
    }
  ]

  const columns = [
    {
      header: "Hotel",
      accessor: "hotel",
      render: (value, row) => (
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-teal-50 text-teal-600 grid place-items-center border border-teal-100">
            <LuHotel size={16} />
          </div>
          <div>
            <p className="font-poppins font-medium text-[14px] leading-5">{value}</p>
            <p className="font-poppins text-[12px] leading-4 text-[#6A7282]">{row.hotelMeta}</p>
          </div>
        </div>
      )
    },
    {
      header: "Location",
      accessor: "city",
      render: (value, row) => (
        <div className="flex items-center gap-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-gray-600 border border-gray-200">
            <LuMapPin size={14} />
          </span>
          <div>
            <p className="font-poppins font-medium text-[14px] leading-5">{value}</p>
            <p className="font-poppins text-[12px] leading-4 text-[#6A7282]">{row.state}</p>
          </div>
        </div>
      )
    },
    {
      header: "Owner",
      accessor: "owner",
      render: (value, row) => (
        <div>
          <p className="font-poppins font-medium text-[14px] leading-5">{value}</p>
          <p className="font-poppins text-[12px] leading-4 text-[#6A7282] inline-flex items-center gap-1">
            <LuPhone size={12} className="text-gray-500" />
            {row.phone}
          </p>
        </div>
      )
    },
    {
      header: "Rooms",
      accessor: "rooms",
      render: (value, row) => (
        <div>
          <p className="font-poppins font-medium text-[14px] leading-5">{value} Rooms</p>
          <p className="font-poppins text-[12px] leading-4 text-[#6A7282]">{row.occupancy}% Occupied</p>
        </div>
      )
    },
    {
      header: "Status",
      accessor: "status",
      render: (value, row) => (
        <div className="flex items-center gap-2">
          <span className={`px-2.5 py-1 text-[12px] rounded-full border ${
            value === 'Active'
              ? 'bg-green-100 text-green-700 border-[#B9F8CF]'
              : 'bg-yellow-50 text-amber-700 border-amber-200'
          }`}>{value}</span>
          <span className={`px-2.5 py-1 text-[12px] rounded-full border ${
            row.kyc === 'Verified'
              ? 'bg-green-100 text-green-700 border-[#B9F8CF]'
              : 'bg-red-50 text-red-700 border-red-200'
          }`}>{row.kyc}</span>
        </div>
      )
    },
    {
      header: "Rating",
      accessor: "rating",
      render: (value, row) => (
        <div>
          <p className="font-poppins font-medium text-[14px] leading-5 inline-flex items-center gap-1">
            <span className="text-amber-500"><LuStar size={14} /></span>
            {value}
          </p>
          <p className="font-poppins text-[12px] leading-4 text-[#6A7282]">{row.reviews} reviews</p>
        </div>
      )
    },
    {
      header: "Features",
      accessor: "features",
      render: (_, row) => (
        <div className="flex items-center gap-2">
          {row.features?.map((f) => (
            <span
              key={f}
              className={`px-2 py-1 text-[12px] rounded-lg border ${
                f === 'Hourly'
                  ? 'bg-blue-50 text-blue-700 border-blue-200'
                  : 'bg-green-50 text-emerald-700 border-emerald-200'
              }`}
            >
              {f}
            </span>
          ))}
        </div>
      )
    },
    {
      header: "Performance",
      accessor: "bookings",
      render: (value, row) => (
        <div>
          <p className="font-poppins font-medium text-[14px] leading-5">{value} Bookings</p>
          <p className="font-poppins text-[12px] leading-4 text-[#6A7282]">{row.revenue}</p>
        </div>
      )
    },
    {
      header: "Actions",
      accessor: "actions",
      render: () => (
        <div className="flex items-center gap-3 text-gray-500">
          <button className="hover:text-blue-600" aria-label="View" onClick={(e) => e.stopPropagation()}><LuEye size={16} /></button>
          <button className="hover:text-blue-600" aria-label="Edit" onClick={(e) => e.stopPropagation()}><FaRegEdit size={16} /></button>
          <button className="hover:text-blue-600" aria-label="More" onClick={(e) => e.stopPropagation()}><BsThreeDots size={16} /></button>
        </div>
      )
    }
  ]

  const data = [
    {
      hotel: "Hotel Taj Palace",
      hotelMeta: "Hotel • 5★ • ID: HTL001",
      city: "Mumbai",
      state: "Maharashtra",
      owner: "Vikram Hotels Pvt Ltd",
      phone: "+91 98756 43210",
      rooms: 45,
      occupancy: 82,
      status: "Active",
      kyc: "Verified",
      rating: 4.5,
      reviews: 234,
      features: ["Hourly", "goSafe"],
      bookings: 456,
      revenue: "₹25.0L Revenue"
    },
    {
      hotel: "Grand Plaza Hotel",
      hotelMeta: "Hotel • 4★ • ID: HTL002",
      city: "Delhi",
      state: "Delhi",
      owner: "Luxury Stays Group",
      phone: "+91 87654 32109",
      rooms: 38,
      occupancy: 75,
      status: "Active",
      kyc: "Verified",
      rating: 4.2,
      reviews: 187,
      features: ["goSafe"],
      bookings: 342,
      revenue: "₹18.0L Revenue"
    },
    {
      hotel: "Comfort Villa Retreat",
      hotelMeta: "Villa • 4★ • ID: HTL003",
      city: "Goa",
      state: "Goa",
      owner: "Comfort Inn Properties",
      phone: "+91 76543 21098",
      rooms: 12,
      occupancy: 65,
      status: "Pending",
      kyc: "Unverified",
      rating: 4.6,
      reviews: 89,
      features: [],
      bookings: 125,
      revenue: "₹9.5L Revenue"
    },
    {
      hotel: "Seaside Heritage",
      hotelMeta: "Resort • 5★ • ID: HTL004",
      city: "Chennai",
      state: "Tamil Nadu",
      owner: "Bayfront Hospitality",
      phone: "+91 90210 11122",
      rooms: 60,
      occupancy: 71,
      status: "Active",
      kyc: "Verified",
      rating: 4.7,
      reviews: 412,
      features: ["goSafe"],
      bookings: 512,
      revenue: "₹32.4L Revenue"
    },
    {
      hotel: "Royal Greens Inn",
      hotelMeta: "Hotel • 3★ • ID: HTL005",
      city: "Jaipur",
      state: "Rajasthan",
      owner: "Royal Stays",
      phone: "+91 98111 22334",
      rooms: 28,
      occupancy: 58,
      status: "Active",
      kyc: "Verified",
      rating: 4.1,
      reviews: 143,
      features: ["Hourly"],
      bookings: 208,
      revenue: "₹11.6L Revenue"
    },
    {
      hotel: "Cityscape Suites",
      hotelMeta: "Hotel • 4★ • ID: HTL006",
      city: "Bengaluru",
      state: "Karnataka",
      owner: "UrbanNest Hotels",
      phone: "+91 99001 22334",
      rooms: 52,
      occupancy: 69,
      status: "Pending",
      kyc: "Unverified",
      rating: 4.3,
      reviews: 201,
      features: [],
      bookings: 296,
      revenue: "₹17.8L Revenue"
    }
  ]
  return(
    <>
      <div className="p-6">
        <PageHeading
          title={"Hotel Management"}
          subTitle={"Manage all hotel properties and listings"}
        />
      </div>
      <div className="flex gap-4 pt-8">
        {
          hotelCards.map((item) => (
            <CardComponent
              key={item.title}
              title={item.title}
              totalNumber={item.totalNumber}
              borderColor={item.borderColor}
              bgColor={item.bgColor}
              fontTitleColor={item.fontTitleColor}
              isIcon
              symbolIcon={<item.icon size={18} className={item.iconClass} />}
            />
          ))
        }
      </div>

      <div className="p-6 my-6 border border-gray-200 rounded-2xl">
        <HotelFilters />
      </div>

      <div >
        <TableComponent columns={columns} data={data} onRowClick={() => setIsOpen(true)} />
        <HotelManagementDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  )
}

export default HotalManagement