import Sidebar from "./Sidebar";
import Header from "./Header";

function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-[1600px] flex-col lg:flex-row">
        <Sidebar />
        <div className="flex-1 px-4 py-5 sm:px-6 lg:px-8">
          <Header />
          <main className="mt-6">{children}</main>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
