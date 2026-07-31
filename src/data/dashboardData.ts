export interface SalesBarData {
  month: string;
  inflow: number;
  payout: number;
  credit: number;
}

export interface RevenueCard {
  label: string;
  value: string;
  percentage: string;
  isPositive: boolean;
  color: string;
}

export interface StatItem {
  label: string;
  value: string;
}

export interface MetricCardData {
  id: string;
  image: string;
  category?: string;
  title?: string;
  location?: string;
  stat: string;
  statLabel: string;
  hasToggle: boolean;
  hasCarousel: boolean;
}

export const salesBarData: SalesBarData[] = [
  { month: "Jan", inflow: 18, payout: 10, credit: 8 },
  { month: "Feb", inflow: 22, payout: 15, credit: 6 },
  { month: "Mar", inflow: 30, payout: 20, credit: 12 },
  { month: "Apr", inflow: 15, payout: 8, credit: 5 },
  { month: "May", inflow: 25, payout: 18, credit: 10 },
  { month: "Jun", inflow: 28, payout: 12, credit: 7 },
  { month: "Jul", inflow: 35, payout: 20, credit: 15 },
  { month: "Aug", inflow: 22, payout: 14, credit: 9 },
  { month: "Sep", inflow: 40, payout: 25, credit: 20 },
];

export const revenueCards: RevenueCard[] = [
  {
    label: "Total Inflow",
    value: "₦120,000,000.00",
    percentage: "2.5%",
    isPositive: true,
    color: "#4545FE",
  },
  {
    label: "MRR",
    value: "₦50,000,000.00",
    percentage: "2.5%",
    isPositive: true,
    color: "#12B669",
  },
  {
    label: "Payout",
    value: "₦200,000,000.00",
    percentage: "0.5%",
    isPositive: false,
    color: "#F97316",
  },
  {
    label: "Total Riders' Credit",
    value: "₦100,000,000.00",
    percentage: "0.5%",
    isPositive: true,
    color: "#0C5D56",
  },
];

export const listingsStats: StatItem[] = [
  { label: "Total", value: "2.2k" },
  { label: "Published", value: "1.2k" },
  { label: "Unpublished", value: "1k" },
];

export const userStats: StatItem[][] = [
  [
    { label: "Total", value: "20.7k" },
    { label: "Riders", value: "8.5k" },
    { label: "Subscribers", value: "7.5k" },
  ],
  [
    { label: "Free Users", value: "3.3k" },
    { label: "Agent", value: "8.1k" },
    { label: "Developers", value: "1.5k" },
  ],
];

export const navItems = [
  { id: "dashboard", label: "Dashboard", active: true },
  { id: "listings", label: "Listings", active: false },
  { id: "users", label: "Users", active: false },
  { id: "request", label: "Request", active: false },
  { id: "applications", label: "Applications", active: false },
  { id: "tasks", label: "Tasks", active: false },
];

export const timePeriods = [
  { label: "1 Week", active: false },
  { label: "1 Month", active: false },
  { label: "1 Year", active: true },
];
