const links = [
  { label: "Dashboard", icon: "🏠" },
  { label: "Projects", icon: "📁" },
  { label: "Analytics", icon: "📊" },
  { label: "Settings", icon: "⚙️" },
  { label: "Profile", icon: "👤" },
];

function Sidebar() {
  return (
    <aside className="w-full max-w-[280px] shrink-0 border-r border-slate-800 bg-slate-950 px-5 py-6 lg:h-screen lg:sticky lg:top-0">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800 text-xl">
          D
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
            Admin
          </p>
          <h2 className="text-xl font-semibold text-white">Dashboard</h2>
        </div>
      </div>

      <nav className="space-y-1">
        {links.map(({ label, icon }) => (
          <button
            key={label}
            className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-medium text-slate-200 transition hover:bg-slate-800 hover:text-white"
          >
            <span>{icon}</span>
            {label}
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
