export default function StatsBar() {
  const stats = [
    { number: "5+", label: "Years as a Parkes Resident" },
    { number: "22", label: "Years of Navy Leadership" },
    { number: "$0", label: "Hidden Fees, Ever" },
    { number: "100%", label: "Local Market Expertise" },
  ];

  return (
    <section className="bg-navy-900 border-y border-gold-500/20">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col items-center justify-center py-4 px-6 text-center">
            <span className="stat-number">{s.number}</span>
            <span className="text-white/45 text-xs tracking-widest uppercase font-mono mt-2">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
