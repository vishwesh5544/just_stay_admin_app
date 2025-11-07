import AccountStatistics from "./Profile/AccountStatistics";
import PersonalInfo from "./Profile/PersonalInfo";
import VerificationStatus from "./Profile/VerificationStatus";


const GuestsProfile = () => {
  return(
    <>
      <div className="flex gap-4">
        <div className="w-full bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
          <PersonalInfo />
        </div>
        <div className="w-full bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
          <VerificationStatus />
        </div>
      </div>
      <div className="my-4 p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
        <AccountStatistics />
      </div>
    </>
  )
}

export default GuestsProfile;