import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { salesBarData, revenueCards, timePeriods } from "../data/dashboardData";
import increaseArrow from "../assets/icons/increase-up-arrow.svg";
import decreaseArrow from "../assets/icons/decrease-down-arrow.svg";
import leftArrowChart from "../assets/icons/left-arrow-chart-icon.svg";
import rightArrowChart from "../assets/icons/right-arrow-chart-icon.svg";

export default function SalesOverview() {
  return (
    <section
      id="sales-overview"
      className="animate-fade-in flex h-full flex-col justify-between rounded-lg border border-[#E5E5E5] bg-white p-5 lg:p-6"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-text-primary">
            Sales Overview
          </h2>
          <p className="mt-1 text-xs font-normal text-text-muted">
            Showing overview Jan 2022 - Sep 2022
          </p>
        </div>

        <button
          id="view-transactions-btn"
          className="self-start rounded-full border border-[#E5E5E5] px-5 py-2.5 text-xs font-medium text-text-primary transition-all duration-200 hover:border-brand hover:bg-surface-hover"
        >
          View Transactions
        </button>
      </div>

      <div className="mt-4 flex items-center justify-end gap-1">
        {timePeriods.map((period) => (
          <button
            key={period.label}
            id={`period-${period.label.replace(/\s/g, "-").toLowerCase()}`}
            className={`rounded-[8px] px-4 py-1.5 text-sm transition-all duration-200 ${
              period.active
                ? "bg-surface-bg font-semibold text-text-tertiary"
                : "font-normal text-text-tertiary hover:bg-surface-hover"
            }`}
          >
            {period.label}
          </button>
        ))}
      </div>

      <div className="-mx-5 my-4 border-b border-[#F0F0F0] lg:-mx-6" />

      <div className="mt-2 flex flex-col gap-6 xl:flex-row xl:items-center xl:gap-6">
        <div className="relative flex items-center gap-2 min-w-0 flex-1">
          <button
            className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F5F5F5] hover:bg-gray-200"
            aria-label="Previous chart period"
          >
            <img src={leftArrowChart} alt="" className=" object-contain" />
          </button>

          <div className="min-w-0 flex-1">
            <ResponsiveContainer width="100%" height={190}>
              <BarChart data={salesBarData} barCategoryGap="25%" barGap={2}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#F0F0F0"
                />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fontWeight: 500, fill: "#919191" }}
                  dy={8}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fontWeight: 400, fill: "#919191" }}
                  tickFormatter={(value: number) =>
                    value === 0 ? "0" : `${value}m`
                  }
                  domain={[0, 50]}
                  ticks={[0, 10, 20, 30, 40, 50]}
                  width={30}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: "8px",
                    border: "1px solid #E5E5E5",
                    fontSize: "12px",
                    fontFamily: "Open Runde",
                  }}
                />
                <Bar
                  dataKey="inflow"
                  fill="rgba(69, 69, 254, 1)"
                  radius={[2, 2, 0, 0]}
                  barSize={5}
                  name="Inflow"
                />
                <Bar
                  dataKey="payout"
                  fill="rgba(18, 183, 106, 1)"
                  radius={[2, 2, 0, 0]}
                  barSize={5}
                  name="MRR"
                />
                <Bar
                  dataKey="credit"
                  fill="rgba(240, 68, 56, 1)"
                  radius={[2, 2, 0, 0]}
                  barSize={5}
                  name="Payout"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <button
            className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F5F5F5] hover:bg-gray-200"
            aria-label="Next chart period"
          >
            <img src={rightArrowChart} alt="" className=" object-contain" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 xl:w-[380px]">
          {revenueCards.map((card) => (
            <div
              key={card.label}
              id={`revenue-${card.label.replace(/\s/g, "-").toLowerCase()}`}
              className="rounded-lg border border-border-light p-3.5 transition-shadow duration-200 hover:shadow-md"
            >
              <p
                className="text-lg font-semibold leading-tight break-words"
                style={{ color: card.color }}
              >
                {card.value}
              </p>
              <div className="mt-2 flex items-center gap-1.5">
                <span className="text-[10px] font-medium text-text-tertiary">
                  {card.label}
                </span>
                <img
                  src={card.isPositive ? increaseArrow : decreaseArrow}
                  alt={card.isPositive ? "Increase" : "Decrease"}
                  className="h-3 w-3"
                />
                <span
                  className="text-[10px] font-normal"
                  style={{
                    color: card.isPositive ? "#12B669" : "#DC2626",
                  }}
                >
                  {card.percentage}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
