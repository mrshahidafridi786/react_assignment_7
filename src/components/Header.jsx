function Header() {
  return (
    <header className="flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-900/90 p-6 shadow-xl shadow-slate-950/20 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
          Overview
        </p>
        <h1 className="mt-2 text-2xl font-semibold text-white">
          Workspace analytics
        </h1>
      </div>
      <div className="flex items-center gap-3 rounded-2xl bg-slate-950/80 px-4 py-3">
        <div className="h-11 w-11 overflow-hidden rounded-full bg-sky-500 text-center leading-11 text-lg font-bold text-slate-950">
          JD
        </div>
        <div>
          <p className="text-sm text-slate-400">Jane Doe</p>
          <p className="text-sm font-semibold text-slate-100">
            Product Manager
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
