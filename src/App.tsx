import Header from "./components/Header";
import SalesOverview from "./components/SalesOverview";
import ListingsOverview from "./components/ListingsOverview";
import UserOverview from "./components/UserOverview";
import MetricCards from "./components/MetricCards";
import ChatButton from "./components/ChatButton";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-surface-bg" id="app-root">
      <Header />

      <main className="mx-auto w-full max-w-[1440px] flex-1 px-6 py-6 lg:px-[78px]">
        <h1
          id="welcome-message"
          className="mb-6 text-xl font-semibold text-text-primary"
        >
          Welcome, Ahmed
        </h1>

        <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1fr_407px] xl:items-stretch">
          <div className="flex min-w-0 flex-col">
            <SalesOverview />
          </div>

          <div className="flex flex-col justify-between gap-5 xl:w-[407px]">
            <ListingsOverview />
            <UserOverview />
          </div>
        </div>

        <div className="mt-6">
          <MetricCards />
        </div>
      </main>


      <ChatButton />
    </div>
  );
}
