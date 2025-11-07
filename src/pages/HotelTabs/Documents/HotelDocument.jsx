import { LuUpload } from "react-icons/lu"
import VerificationStatus from "./VerificationStatus"

const HotelDocument = () => {
  return (
    <>
      <div className="flex justify-between mb-3">
        <p className="text-[#101828] text-[14px] leading-7 font-semibold">
          Documents & Verification
        </p>
        <button className="bg-[#0F766E] text-white px-3 py-2 rounded-md text-[13px] leading-5 font-medium inline-flex items-center gap-2">
          <LuUpload />
          Upload Documents
        </button>
      </div>

      <div>
        <VerificationStatus />
      </div>
    </>
  )
}

export default HotelDocument