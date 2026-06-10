import DashboardLayout from "./components/DashboardLayout";
import DashboardCard from "./components/DashboardCard";

const dashboardCards = [
  {
    title: "Total Users",
    value: "1,204",
    description: "Active users this month",
  },
  {
    title: "Total Projects",
    value: "38",
    description: "Open projects in progress",
  },
  {
    title: "Revenue",
    value: "$42.8K",
    description: "Last 30 days earnings",
  },
  {
    title: "Active Sessions",
    value: "276",
    description: "Live users right now",
  },
];

function App() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <section className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 shadow-xl shadow-slate-950/30">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-sky-400">
                Welcome back
              </p>
              <h1 className="mt-2 text-3xl font-semibold text-slate-50">
                Your dashboard overview
              </h1>
            </div>
            <button className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
              Create new report
            </button>
          </div>
        </section>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {dashboardCards.map(({ title, value, description }) => (
            <DashboardCard
              key={title}
              title={title}
              value={value}
              description={description}
            >
              <p className="text-xs text-slate-400">Updated 30 minutes ago</p>
            </DashboardCard>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default App;
