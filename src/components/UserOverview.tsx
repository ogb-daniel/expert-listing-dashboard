import userOverviewIcon from "../assets/icons/user-overview-icon.svg";
import { userStats } from "../data/dashboardData";

export default function UserOverview() {
  return (
    <section
      id="user-overview"
      className="animate-fade-in overflow-hidden rounded-lg border border-[#E4E4E4] bg-white"
    >
      <div className="flex items-center justify-between border-b border-[#E4E4E4] bg-[#F9FAFB] px-4 py-3.25">
        <div className="flex items-center gap-2">
          <img
            src={userOverviewIcon}
            alt=""
            className="h-5 w-5 object-contain"
          />
          <h3 className="text-sm font-medium text-[#292929]">User Overview</h3>
        </div>
        <button
          id="users-view-all"
          className="flex items-center gap-1 text-xs font-medium text-accent-blue transition-opacity duration-150 hover:opacity-80"
        >
          View all
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.5 3L7.5 6L4.5 9"
              stroke="#4545FE"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-col gap-4 p-5">
        {userStats.map((row, rowIdx) => (
          <div key={rowIdx} className="flex items-start gap-6">
            {row.map((stat) => (
              <div key={stat.label} className="min-w-0 flex-1">
                <p className="text-sm font-medium text-text-secondary">
                  {stat.label}
                </p>
                <p className="mt-1 text-2xl font-semibold text-[#141414]">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
