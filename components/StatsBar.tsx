export default function StatsBar() {
  return (
    <div className="bg-navy-950 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10 text-center">
        <div>
          <p className="text-gold-500 text-3xl font-display font-bold mb-1">92</p>
          <p className="text-white/60 text-xs font-mono uppercase tracking-widest">Luxury Townhomes</p>
        </div>
        <div>
          <p className="text-gold-500 text-3xl font-display font-bold mb-1">18</p>
          <p className="text-white/60 text-xs font-mono uppercase tracking-widest">Acres of Land</p>
        </div>
        <div>
          <p className="text-gold-500 text-3xl font-display font-bold mb-1">100%</p>
          <p className="text-white/60 text-xs font-mono uppercase tracking-widest">Walkable Trails</p>
        </div>
        <div>
          <p className="text-gold-500 text-3xl font-display font-bold mb-1">2019</p>
          <p className="text-white/60 text-xs font-mono uppercase tracking-widest">Resident Expert</p>
        </div>
      </div>
    </div>
  );
}
