import { LuSparkles, LuBuilding2 } from 'react-icons/lu';
import { BiTimeFive } from 'react-icons/bi';
import ProgressBar from '../../../components/BasicComponent/ProgressBarComponent';

const HotelType = () => {
  const progressData = [
    { label: "Luxury", Icon: LuSparkles, percentage: 35, color: "#d946ef" },
    { label: "Budget", Icon: LuBuilding2, percentage: 40, color: "#2563eb" },
    { label: "Hourly Booking", Icon: BiTimeFive, percentage: 25, color: "#14b8a6" },
  ];
  return(
    <>
      <p className="font-poppins font-medium text-[14px] leading-5 tracking-[0px] text-[#101828] mb-8">Preferred Hotel Types</p>
      <div className="w-full mx-auto">
        {progressData.map((item) => (
          <ProgressBar
            key={item.label}
            label={item.label}
            Icon={item.Icon}
            percentage={item.percentage}
            color={item.color}
          />
        ))}
      </div>
    </>
  )
}

export default HotelType;