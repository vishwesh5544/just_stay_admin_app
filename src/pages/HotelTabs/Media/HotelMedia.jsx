import Container from "../../../components/BasicComponent/Container";
import CardComponent from "../../../components/Cards/CardComponent";
import { LuImage, LuClock, LuUpload } from "react-icons/lu";
import { FiCheckCircle } from 'react-icons/fi';
import HotelImages from "./HotelImages";
import HotelVideo from "./HotelVideo";


const HotelMedia = ({ stats }) => {
  const data = {
    total: 28,
    approved: 24,
    pending: 4,
    minRequired: 15,
    ...stats,
  };

  return (
    <>
      <div>
        <div className="flex justify-between mb-3">
          <p className="text-[#101828] text-[14px] leading-7 font-semibold">Media Management</p>
          <button className="bg-[#0F766E] text-white px-3 py-2 rounded-md text-[13px] leading-5 font-medium inline-flex items-center gap-2">
            <LuUpload />
            Upload Images
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <CardComponent
              title="Total Images"
              totalNumber={data.total}
              isIcon={true}
              symbolIcon={<LuImage className="text-[#7C3AED]" />}
              borderColor="border-[#E9D5FF]"
              bgColor="bg-[linear-gradient(135deg,#F5F3FF_0%,#F3E8FF_100%)]"
              fontTitleColor="text-[#7C3AED]"
              minRequired={data.minRequired}
            />
          </div>

          <CardComponent
            title="Approved"
            totalNumber={data.approved}
            isIcon={true}
            symbolIcon={<FiCheckCircle className="text-[#155DFC]" />}
            borderColor="border-[#BEDBFF]"
            bgColor="bg-[linear-gradient(135deg,#EFF6FF_0%,#DBEAFE_100%)]"
            fontTitleColor="text-[#155DFC]"
          />

          <CardComponent
            title="Pending Review"
            totalNumber={data.pending}
            isIcon={true}
            symbolIcon={<LuClock className="text-[#EA580C]" />}
            borderColor="border-[#FED7AA]"
            bgColor="bg-[linear-gradient(135deg,#FFF7ED_0%,#FFEDD5_100%)]"
            fontTitleColor="text-[#EA580C]"
          />
        </div>
        
        <div className="mt-6">
          <Container title={"Hotel Images"}>
            <HotelImages images={[]} />
          </Container>
        </div>

        <div className="mt-6">
          <Container title={"Virtual Tours & Videos"}>
            <HotelVideo videoUrl={""} onSelect={() => {}} />
          </Container>
        </div>
      </div>
    </>
  );
};

export default HotelMedia;