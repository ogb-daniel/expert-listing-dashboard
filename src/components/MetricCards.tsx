import { useState } from "react";
import building1 from "../assets/images/building1.jpg";
import building2 from "../assets/images/building2.png";
import building3 from "../assets/images/building3.png";

interface MetricCardProps {
  id: string;
  image: string;
  category?: string;
  title?: string;
  location?: string;
  stat: string;
  statLabel: string;
  hasToggle: boolean;
  hasCarousel: boolean;
  activeToggle?: "live" | "all";
}

function TogglePill({
  activeTab,
  onToggle,
}: {
  activeTab: "live" | "all";
  onToggle: (tab: "live" | "all") => void;
}) {
  return (
    <div
      className="flex items-stretch overflow-hidden rounded-sm"
      style={{
        background: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      <button
        className={`flex items-center gap-1.5 px-3.5 py-1.5 text-[13px] font-medium transition-all duration-200 ${
          activeTab === "live" ? "text-accent-yellow" : "text-[#D4D4D8]"
        }`}
        onClick={() => onToggle("live")}
      >
        {activeTab === "live" && (
          <span className="h-1.5 w-1.5 rounded-full bg-accent-yellow" />
        )}
        Live Listings
      </button>
      <span className="self-stretch w-[1px] bg-white/20" />
      <button
        className={`flex items-center gap-1.5 px-3.5 py-1.5 text-[13px] font-medium transition-all duration-200 ${
          activeTab === "all" ? "text-accent-yellow" : "text-[#D4D4D8]"
        }`}
        onClick={() => onToggle("all")}
      >
        {activeTab === "all" && (
          <span className="h-1.5 w-1.5 rounded-full bg-accent-yellow" />
        )}
        All Listings
      </button>
    </div>
  );
}

function SingleMetricCard({
  id,
  image,
  category,
  title,
  location,
  stat,
  statLabel,
  hasToggle,
  hasCarousel,
  activeToggle = "live",
}: MetricCardProps) {
  const [toggle, setToggle] = useState<"live" | "all">(activeToggle);

  return (
    <div
      id={id}
      className="group relative flex-1 overflow-hidden rounded-lg"
      style={{ minHeight: "378px" }}
    >
      <img
        src={image}
        alt={title ?? statLabel}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(178.76deg, rgba(0, 0, 0, 0.2) -3.22%, rgba(0, 0, 0, 0.9) 102.22%)",
        }}
      />

      {hasCarousel && (
        <>
          <button
            className="absolute left-4 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-all hover:bg-black/80"
            aria-label="Previous image"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 3L5 7L9 11"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            className="absolute right-4 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-all hover:bg-black/80"
            aria-label="Next image"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 3L9 7L5 11"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </>
      )}

      <div className="relative z-10 flex h-full flex-col justify-between p-5">
        {hasToggle ? (
          <div className="flex justify-start">
            <TogglePill activeTab={toggle} onToggle={setToggle} />
          </div>
        ) : (
          <div />
        )}

        <div className="pb-4">
          {category && (
            <p className="text-xs font-medium uppercase tracking-wide text-white/90">
              {category}
            </p>
          )}

          {title && (
            <h4 className="mt-1 text-lg max-w-[237px] font-semibold leading-tight text-white">
              {title}
            </h4>
          )}

          {location && (
            <p className="mt-0.5 text-[13px] font-normal text-[#E4E4E7]">
              {location}
            </p>
          )}

          {statLabel && !category && (
            <p className="text-xs font-medium uppercase text-white/90">
              {statLabel}
            </p>
          )}

          <p className="mt-1 text-lg font-semibold text-accent-yellow">
            {stat}
          </p>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-white" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
      </div>
    </div>
  );
}

export default function MetricCards() {
  const cards: MetricCardProps[] = [
    {
      id: "metric-site-visits",
      image: building1,
      stat: "11k",
      statLabel: "Total site visits",
      hasToggle: false,
      hasCarousel: false,
    },
    {
      id: "metric-most-clicked",
      image: building2,
      category: "MOST CLICKED",
      title: "Urban Prime Plaza Premiere",
      location: "Ikoyi, Lagos",
      stat: "40k",
      statLabel: "",
      hasToggle: true,
      hasCarousel: true,
      activeToggle: "live",
    },
    {
      id: "metric-most-watchlisted",
      image: building3,
      category: "MOST WAtchlisted",
      title: "Urban Prime Plaza Premiere",
      location: "Ikoyi, Lagos",
      stat: "20k",
      statLabel: "",
      hasToggle: true,
      hasCarousel: true,
      activeToggle: "all",
    },
  ];

  return (
    <section
      id="metric-cards"
      className="animate-slide-up flex flex-col gap-2 lg:flex-row"
    >
      {cards.map((card) => (
        <SingleMetricCard key={card.id} {...card} />
      ))}
    </section>
  );
}
