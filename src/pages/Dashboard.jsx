import PageHeading from "../components/PageHeading/PageHeading";
import BookingActivityCard from "./Dashboard/BookingActivityCard";
import DashbordTill from "./Dashboard/DahsbordTill";
import RecentActivity from "./Dashboard/RecentActivity";
import RecentChart from "./Dashboard/RecentChart";

const Dashboard = () => {
  return (
    <>
      <div>
        <PageHeading title="Dashboard & Overview"
          subTitle="Welcome back! Here's what's happening with your platform today."
        />
      </div>
      <div>
        <DashbordTill />
      </div>
      <div>
        <RecentChart />
      </div>
      <div>
        <RecentActivity />
      </div>
      <div>
        <BookingActivityCard />
      </div>
    </>
  );
};

export default Dashboard;