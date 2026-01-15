import { EVENTS } from "@/data/mock";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Music, Palette, Utensils, Wrench } from "lucide-react";

const FILTERS = [
  { label: "Sedang Berlangsung", active: false },
  { label: "Akan Datang", active: true },
  { label: "Event Lalu", active: false },
];

const CATEGORIES = [
  { icon: Music, label: "Konser", active: true },
  { icon: Calendar, label: "Festival", active: false },
  { icon: Palette, label: "Pameran", active: false },
  { icon: Wrench, label: "Workshop", active: false },
  { icon: Utensils, label: "Kuliner", active: false },
];

export default function Event() {
  return (
    <div className="min-h-screen bg-slate-50 pt-8 pb-12">
      <div className="container mx-auto px-4">
        
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-2">
            Jelajahi Dinamika <span className="text-green-600">Bandung</span>
          </h1>
          <p className="text-slate-600 max-w-2xl">
            Dari festival musik indie di dataran tinggi hingga pameran seni tradisional di pusat kota, temukan apa yang sedang terjadi di Paris van Java.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
           {/* Sidebar Filter */}
           <aside className="w-full lg:w-64 shrink-0 space-y-8">
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                 <div className="mb-6">
                    <h2 className="text-lg font-bold text-slate-900 mb-1">Filter</h2>
                    <p className="text-xs text-slate-400">Pertajam pencarianmu</p>
                 </div>

                 <div className="space-y-6">
                    <div>
                       <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Tipe Event</h3>
                       <div className="space-y-3">
                          {CATEGORIES.map((cat, i) => (
                             <label key={i} className="flex items-center gap-3 cursor-pointer group">
                                <div className={`h-5 w-5 rounded-md border flex items-center justify-center transition-colors ${cat.active ? 'bg-green-600 border-green-600 text-white' : 'border-slate-300 text-transparent group-hover:border-green-400'}`}>
                                   <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <span className={`text-sm font-medium transition-colors ${cat.active ? 'text-slate-900' : 'text-slate-600 group-hover:text-green-600'}`}>{cat.label}</span>
                             </label>
                          ))}
                       </div>
                    </div>

                    <div>
                        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Bulan Terpilih</h3>
                        <div className="bg-slate-50 rounded-xl p-4 text-center">
                           <div className="flex items-center justify-between mb-4">
                              <button className="h-6 w-6 flex items-center justify-center text-slate-400 hover:text-slate-900">‹</button>
                              <span className="text-sm font-bold text-slate-900">Okt 2024</span>
                              <button className="h-6 w-6 flex items-center justify-center text-slate-400 hover:text-slate-900">›</button>
                           </div>
                           <div className="grid grid-cols-7 gap-1 text-[10px] text-slate-400 font-medium mb-2">
                              <span>M</span><span>S</span><span>S</span><span>R</span><span>K</span><span>J</span><span>S</span>
                           </div>
                           <div className="grid grid-cols-7 gap-1 text-xs font-bold text-slate-700">
                               <span className="text-slate-300">29</span><span className="text-slate-300">30</span>
                               <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
                               <span className="bg-green-600 text-white rounded-full">6</span>
                               <span>7</span>
                           </div>
                        </div>
                    </div>
                 </div>

                 <button className="w-full mt-8 bg-green-700 text-white font-bold py-3 rounded-xl hover:bg-green-800 transition-all shadow-lg shadow-green-700/20">
                    Terapkan Filter
                 </button>
              </div>
           </aside>

           {/* Event Grid */}
           <div className="flex-1">
              {/* Tab Filters */}
              <div className="flex items-center gap-6 border-b border-slate-200 mb-8 overflow-x-auto pb-1">
                 {FILTERS.map((f, i) => (
                    <button 
                       key={i} 
                       className={`text-sm font-bold whitespace-nowrap pb-3 transition-all relative ${
                          f.active ? "text-green-600" : "text-slate-500 hover:text-slate-700"
                       }`}
                    >
                       {f.label}
                       {f.active && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 rounded-t-full"></div>}
                    </button>
                 ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {EVENTS.map((event) => (
                    <div key={event.id} className="bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all group duration-300">
                       <div className="relative h-64 overflow-hidden">
                          <img 
                             src={event.image} 
                             alt={event.title} 
                             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                          />
                          <div className="absolute top-4 left-4 bg-white rounded-xl overflow-hidden shadow-lg text-center min-w-[3.5rem]">
                             <div className="bg-slate-100 text-[10px] font-bold text-slate-500 py-1 px-2 uppercase border-b border-slate-200">OKT</div>
                             <div className="text-xl font-extrabold text-slate-900 py-2">
                                {event.date.split('-')[2] || '15'}
                             </div>
                          </div>
                          <button className="absolute top-4 right-4 h-10 w-10 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-red-500 transition-colors">
                             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                          </button>
                       </div>
                       
                       <div className="p-6">
                          <div className="flex gap-2 mb-3">
                             <span className="px-2 py-1 bg-green-50 text-green-700 text-[10px] font-bold uppercase rounded-md tracking-wider">
                                {event.price === "Free" || event.price === "Gratis" ? "Gratis" : "Berbayar"}
                             </span>
                             <span className="px-2 py-1 bg-orange-50 text-orange-700 text-[10px] font-bold uppercase rounded-md tracking-wider">
                                Musik
                             </span>
                          </div>

                          <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight group-hover:text-green-600 transition-colors">
                             {event.title}
                          </h3>
                          
                          <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
                             <MapPin className="h-4 w-4 shrink-0" />
                             <span className="truncate">{event.location}</span>
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                             <div className="flex flex-col">
                                <span className="text-[10px] text-slate-400 font-bold uppercase">Mulai Dari</span>
                                <span className="text-lg font-bold text-green-600">{event.price}</span>
                             </div>
                             <Link 
                                to={`/event/${event.id}`} 
                                className="bg-slate-100 text-slate-900 px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-slate-200 transition-colors"
                             >
                                Detail
                             </Link>
                          </div>
                       </div>
                    </div>
                 ))}
              </div>

              <div className="mt-12 text-center">
                 <button className="bg-white border border-slate-200 text-slate-900 font-bold py-3 px-8 rounded-full hover:bg-slate-50 transition-colors shadow-sm">
                    Muat Lebih Banyak Acara
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
