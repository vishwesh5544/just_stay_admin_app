import { useMemo, useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { LuUserCheck, LuWallet, LuCircleAlert, LuBuilding, LuArrowUpRight } from "react-icons/lu";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler, Legend);

const Toggle = ({ value, onChange }) => {
  const options = ["Daily", "Weekly", "Monthly"];
  return (
    <div className="flex gap-2">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className={`rounded-lg px-3 py-1.5 text-[13px] font-medium border ${
            value === opt ? "bg-[#E9FBF3] text-[#00A63E] border-[#CFF6E1]" : "bg-white text-[#475467] border-[#E2E8F0]"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
};

const QuickAction = ({ icon: Icon, title, subtitle, bg, color }) => (
  <button className={`flex w-full items-center justify-between rounded-2xl px-4 py-4 ${bg}`}>
    <div className="flex items-center gap-3">
      <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${bg}`}>
        <Icon className={`text-[20px] ${color}`} />
      </div>
      <div className="text-left">
        <p className="text-[14px] font-semibold text-[#101828]">{title}</p>
        <p className="text-[13px] text-[#667085]">{subtitle}</p>
      </div>
    </div>
    <LuArrowUpRight className="text-[#98A2B3]" />
  </button>
);

const RecentChart = () => {
  const [range, setRange] = useState("Daily");
  const canvasRef = useRef(null);

  const labelsMap = {
    Daily: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    Weekly: ["W1", "W2", "W3", "W4", "W5", "W6", "W7"],
    Monthly: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  };

  const dataMap = {
    Daily: [45_000, 51_000, 48_000, 62_000, 78_000, 90_000, 82_000],
    Weekly: [2.8e5, 3.1e5, 2.9e5, 3.7e5, 4.2e5, 4.5e5, 4.1e5],
    Monthly: [1.8e6, 2.1e6, 1.9e6, 2.5e6, 2.9e6, 3.2e6, 3.0e6],
  };

  const chartData = useMemo(() => {
    const ctx = canvasRef.current?.ctx || canvasRef.current?._context;
    let gradient;
    if (canvasRef.current && canvasRef.current.canvas) {
      const gtx = canvasRef.current.canvas.getContext("2d");
      const h = canvasRef.current.canvas.height;
      gradient = gtx.createLinearGradient(0, 0, 0, h);
      gradient.addColorStop(0, "rgba(16, 185, 129, 0.35)");
      gradient.addColorStop(1, "rgba(16, 185, 129, 0.02)");
    }
    return {
      labels: labelsMap[range],
      datasets: [
        {
          data: dataMap[range],
          borderColor: "#10B981",
          backgroundColor: gradient || "rgba(16, 185, 129, 0.15)",
          fill: true,
          tension: 0.35,
          pointRadius: 0,
          borderWidth: 2,
        },
      ],
    };
  }, [range]);

  const options = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx) => `₹${ctx.parsed.y.toLocaleString("en-IN")}`,
        },
      },
    },
    scales: {
      x: {
        grid: { color: "#EEF2F7" },
        ticks: { color: "#98A2B3", font: { size: 12 } },
      },
      y: {
        grid: { color: "#EEF2F7" },
        ticks: {
          color: "#98A2B3",
          callback: (v) => `₹${Number(v).toLocaleString("en-IN")}`,
          font: { size: 12 },
        },
      },
    },
  }), []);

  const summary = useMemo(() => {
    const arr = dataMap[range];
    const avg = Math.round(arr.reduce((a, b) => a + b, 0) / arr.length);
    const peak = Math.max(...arr);
    const total = arr.reduce((a, b) => a + b, 0);
    return { avg, peak, total };
  }, [range]);

  return (
    <section className="mt-6">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 rounded-2xl bg-white p-5 shadow-sm">
          <div className="mb-3 flex items-start justify-between">
            <div>
              <h3 className="text-[18px] font-semibold text-[#101828]">Revenue Trends</h3>
              <p className="text-[13px] text-[#98A2B3]">Track your earnings over time</p>
            </div>
            <Toggle value={range} onChange={setRange} />
          </div>
          <div className="h-[280px]">
            <Line ref={canvasRef} data={chartData} options={options} />
          </div>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3 border-t border-[#F1F5F9] pt-4">
            <div>
              <p className="text-[12px] text-[#98A2B3]">Average Daily</p>
              <p className="text-[16px] font-semibold text-[#101828]">₹{summary.avg.toLocaleString("en-IN")}</p>
            </div>
            <div>
              <p className="text-[12px] text-[#98A2B3]">Peak {range === "Daily" ? "Day" : range === "Weekly" ? "Week" : "Month"}</p>
              <p className="text-[16px] font-semibold text-[#101828]">₹{summary.peak.toLocaleString("en-IN")}</p>
            </div>
            <div>
              <p className="text-[12px] text-[#98A2B3]">Total ({range})</p>
              <p className="text-[16px] font-semibold text-[#101828]">₹{summary.total.toLocaleString("en-IN")}</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="mb-4">
            <h3 className="text-[18px] font-semibold text-[#101828]">Quick Actions</h3>
            <p className="text-[13px] text-[#98A2B3]">High-priority tasks</p>
          </div>
          <div className="space-y-3">
            <QuickAction icon={LuUserCheck} title="Pending Verifications" subtitle="42 items pending" bg="bg-[#FFF4EC]" color="text-[#F2994A]" />
            <QuickAction icon={LuWallet} title="Withdrawal Requests" subtitle="8 requests waiting" bg="bg-[#EAF2FF]" color="text-[#155DFC]" />
            <QuickAction icon={LuCircleAlert} title="Failed Bookings" subtitle="3 needs review" bg="bg-[#FFEFEF]" color="text-[#E11D48]" />
            <QuickAction icon={LuBuilding} title="New Hotel Listings" subtitle="Review 5 new hotels" bg="bg-[#E9FBF3]" color="text-[#00A63E]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentChart;