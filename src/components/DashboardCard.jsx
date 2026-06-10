function DashboardCard({ title, value, description, children }) {
  return (
    <div className="rounded-[2rem] border border-slate-800 bg-slate-900/95 p-6 shadow-xl shadow-slate-950/20 transition hover:-translate-y-0.5 hover:border-slate-700 hover:bg-slate-900">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
            {title}
          </p>
          <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
        </div>
        <div className="rounded-2xl bg-slate-800 px-4 py-3 text-sm text-sky-400">
          Info
        </div>
      </div>
      <p className="mt-5 text-sm text-slate-400">{description}</p>
      <div className="mt-4 text-sm text-slate-300">{children}</div>
    </div>
  );
}

export default DashboardCard;
