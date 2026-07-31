import logoSvg from "../assets/logo.svg";
import commentsIcon from "../assets/icons/header-comments.svg";
import waitlistIcon from "../assets/icons/header-waitlist.svg";
import payoutIcon from "../assets/icons/header-payout.svg";
import searchIcon from "../assets/icons/header-search.svg";
import marketplaceIcon from "../assets/icons/header-marketplace.svg";
import dashboardIcon from "../assets/icons/dashboard-icon.svg";
import listingsIcon from "../assets/icons/listings-icon.svg";
import usersIcon from "../assets/icons/users-icon.svg";
import requestsIcon from "../assets/icons/requests-icon.svg";
import applicationsIcon from "../assets/icons/applications-icon.svg";
import tasksIcon from "../assets/icons/tasks-icon.svg";
import { navItems } from "../data/dashboardData";

const navIcons: Record<string, string> = {
  dashboard: dashboardIcon,
  listings: listingsIcon,
  users: usersIcon,
  request: requestsIcon,
  applications: applicationsIcon,
  tasks: tasksIcon,
};

export default function Header() {
  return (
    <header className="w-full" id="header">
      <div className="bg-brand-dark w-full">
        <div className="mx-auto flex h-18 max-w-360 items-center justify-between px-6 lg:px-[78px]">
          <div className="flex items-center gap-3 cursor-pointer" id="logo">
            <img src={logoSvg} alt="Expert Listing" className="h-6.5 w-auto" />
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              {[
                { src: commentsIcon, alt: "Comments", id: "icon-comments" },
                { src: searchIcon, alt: "Search", id: "icon-search" },
                { src: waitlistIcon, alt: "Waitlist", id: "icon-waitlist" },
                { src: payoutIcon, alt: "Payout Center", id: "icon-payout" },
                {
                  src: marketplaceIcon,
                  alt: "Marketplace",
                  id: "icon-marketplace",
                },
              ].map((icon) => (
                <button
                  key={icon.id}
                  id={icon.id}
                  className="flex h-8 w-8 items-center justify-center transition-transform duration-150 hover:scale-110"
                  aria-label={icon.alt}
                >
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    className="h-[22px] w-[22px] object-contain"
                  />
                </button>
              ))}
            </div>

            <button
              id="profile-avatar"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-transform duration-150 hover:scale-105"
              aria-label="Profile"
            >
              <span className="text-[20px] font-semibold text-brand-dark">
                D
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full border-b border-[#E5E5E5] bg-white">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 lg:px-[78px]">
          <nav
            className="scrollbar-hide flex w-full items-center justify-between overflow-x-auto py-3.5"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                className={`flex items-center gap-2.5 rounded-[8px] px-[21px] py-[7px] text-sm transition-all duration-200 whitespace-nowrap ${
                  item.active
                    ? "font-semibold text-brand"
                    : "font-medium text-[#3D3D3D] hover:text-brand"
                }`}
                style={item.active ? { backgroundColor: "#E8F3F0" } : undefined}
              >
                <img
                  src={navIcons[item.id]}
                  alt=""
                  className="h-5 w-5 object-contain"
                />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
