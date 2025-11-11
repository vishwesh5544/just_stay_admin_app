import { LuBuilding, LuUserPlus, LuWallet, LuUserCheck, LuCircleCheckBig, LuClock } from "react-icons/lu";

const StatusPill = ({ status }) => {
  const isCompleted = status === "Completed";
  const base = "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium";
  return (
    <span className={`${base} ${isCompleted ? "bg-[#DCFCE7] text-[#00A63E]" : "bg-[#FEF3C7] text-[#B45309]"}`}>
      {isCompleted ? <LuCircleCheckBig className="mr-1" /> : <LuClock className="mr-1" />}
      {status}
    </span>
  );
};

const ActivityItem = ({ icon: Icon, iconBg, iconColor, title, status, subtitle, meta, amount }) => {
  return (
    <div className="flex items-start justify-between rounded-2xl bg-[#F8FAFC] px-4 py-4">
      <div className="flex items-start gap-3">
        <div className={`mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl ${iconBg}`}>
          <Icon className={`text-[20px] ${iconColor}`} />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <p className="text-[14px] font-semibold text-[#101828]">{title}</p>
            {status && <StatusPill status={status} />}
          </div>
          <p className="text-[13px] text-[#4A5565]">{subtitle}</p>
          <p className="text-[13px] text-[#98A2B3]">{meta}</p>
        </div>
      </div>
      {amount && <div className="text-right text-[14px] font-semibold text-[#101828]">{amount}</div>}
    </div>
  );
};

const RecentActivity = () => {
  const items = [
    {
      icon: LuBuilding,
      iconBg: "bg-[#CBFBF1]",
      iconColor: "text-[#009689]",
      title: "New Booking",
      status: "Completed",
      subtitle: "Hotel Taj Palace - Room 205",
      meta: "Rahul Sharma • 2 minutes ago",
      amount: "₹8,500",
    },
    {
      icon: LuUserPlus,
      iconBg: "bg-[#DBEAFE]",
      iconColor: "text-[#155DFC]",
      title: "New User Registration",
      status: "Pending",
      subtitle: "Guest account created",
      meta: "Priya Patel • 15 minutes ago",
    },
    {
      icon: LuWallet,
      iconBg: "bg-[#F3E8FF]",
      iconColor: "text-[#7C3AED]",
      title: "Withdrawal Request",
      status: "Pending",
      subtitle: "Hotel Grand Plaza",
      meta: "Amit Kumar • 1 hour ago",
      amount: "₹45,000",
    },
    {
      icon: LuBuilding,
      iconBg: "bg-[#CBFBF1]",
      iconColor: "text-[#009689]",
      title: "Hourly Booking",
      status: "Completed",
      subtitle: "Hotel Comfort Inn – 4 hours",
      meta: "Sneha Reddy • 2 hours ago",
      amount: "₹2,400",
    },
    {
      icon: LuUserCheck,
      iconBg: "bg-[#FFEDD4]",
      iconColor: "text-[#F54900]",
      title: "Verification Submitted",
      status: "Pending",
      subtitle: "PAN & Aadhaar documents",
      meta: "Vikram Singh • 3 hours ago",
    },
    {
      icon: LuBuilding,
      iconBg: "bg-[#CBFBF1]",
      iconColor: "text-[#009689]",
      title: "New Booking",
      status: "Completed",
      subtitle: "Hotel Blue Heaven – Suite",
      meta: "Anita Desai • 4 hours ago",
      amount: "₹12,000",
    },
  ];

  return (
    <section className="mt-8">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h2 className="text-[20px] font-semibold text-[#101828]">Recent Activity</h2>
          <p className="text-[14px] text-[#98A2B3]">Latest bookings, sign-ups, and withdrawals</p>
        </div>
        <button className="rounded-lg border border-[#E2E8F0] px-3 py-2 text-[14px] font-medium text-[#101828] hover:bg-[#F8FAFC]">View All</button>
      </div>

      <div className="mt-8">
        {items.map((it, idx) => (
          <ActivityItem key={idx} {...it} />
        ))}
      </div>
    </section>
  );
};

export default RecentActivity;
