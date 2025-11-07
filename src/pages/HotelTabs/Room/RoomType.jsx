import { FaPlus } from 'react-icons/fa';
import { TbBed, TbChartBar } from "react-icons/tb";
import CardComponent from "../../../components/Cards/CardComponent";
import Container from '../../../components/BasicComponent/Container';
import RoomTypeCard from "./RoomTypeCard";
const RoomType = () => {
  return(
    <>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <p className="font-medium text-[14px] leading-5 tracking-[0px]">Room Type & Configuration</p>
          <button 
            className="bg-[#0F766E]
            text-white
            px-4 py-2
            rounded-md
            flex items-center gap-2
            text-[14px]
            leading-5
            tracking-[0px]
            font-medium
            ">
            <FaPlus />
            Add Room Type
          </button>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-4 my-4">
            <CardComponent
            title="Total Rooms"
            totalNumber={45}
            isIcon={true}
            symbolIcon={<TbBed className="text-[#155DFC]" />}
            borderColor="border-[#BEDBFF]"
            bgColor="bg-[linear-gradient(135deg,#EFF6FF_0%,#DBEAFE_100%)]"
            fontTitleColor="text-[#155DFC]"
            />
            <CardComponent
            title="Occupancy Rate"
            totalNumber={"82%"}
            isIcon={true}
            symbolIcon={<TbChartBar className="text-[#008236]" />}
            borderColor="border-[#B9F8CF]"
            bgColor="bg-[linear-gradient(135deg,#F0FDF4_0%,#DCFCE7_100%)]"
            fontTitleColor="text-[#008236]"
            />
          </div>

          <div>
            <div>
              {[
                {
                  name: "Deluxe Room",
                  rooms: 15,
                  available: 8,
                  size: "280 sq ft",
                  beds: "1 King",
                  occupancy: "2 Adults",
                  dailyRate: "₹3500",
                  hourlyBooking: { available: true, price: 1200, duration: "3hrs" },
                },
                {
                  name: "Super Deluxe",
                  rooms: 10,
                  available: 4,
                  size: "320 sq ft",
                  beds: "1 King + 1 Single",
                  occupancy: "3 Adults",
                  dailyRate: "₹4800",
                  hourlyBooking: { available: false },
                },
              ].map((r, idx) => (
                <div key={idx} className="mb-4">
                  <RoomTypeCard {...r} onEdit={() => {}} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
        
    </>
  )
}

export default RoomType