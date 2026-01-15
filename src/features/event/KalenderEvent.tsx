import { Share2, Filter, ChevronLeft, ChevronRight, Clock, MapPin, ArrowRight } from "lucide-react";

export const EVENTS_CALENDAR = [
    {
        id: 1,
        title: "Wayang Golek Night",
        time: "19:30",
        location: "Saung Udjo",
        image: "https://plus.unsplash.com/premium_photo-1710961232986-36cead00da3c?q=80&w=484&auto=format&fit=crop",
        category: "Budaya",
        date: 5
    },
    {
        id: 2,
        title: "Bandung Jazz Garden",
        time: "16:00",
        location: "Hutan Kota Babakan Siliwangi",
        image: "https://images.unsplash.com/photo-1571048231310-ee1152ec6094?q=80&w=387&auto=format&fit=crop",
        category: "Musik",
        date: 5
    },
    {
        id: 3,
        title: "NuArt Sculpture Workshop",
        time: "09:00",
        location: "Setrasari",
        image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=800&auto=format&fit=crop",
        category: "Seni",
        date: 5
    }
];

export const HIGHLIGHTS = [
    {
        id: 1,
        title: "Kuliner Legendaris Braga",
        date: "12-14 OKT",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1"
    },
    {
        id: 2,
        title: "Digital Art Showcase",
        date: "20 OKT",
        image: "https://images.unsplash.com/photo-1554907984-15263bfd63bd"
    },
    {
        id: 3,
        title: "Bandung Indie Fest",
        date: "25 OKT",
        image: "https://images.unsplash.com/photo-1613057263089-7a8c82f2825d?q=80&w=870&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Night at The Museum",
        date: "31 OKT",
        image: "https://images.unsplash.com/photo-1603080639770-2e114d2b573f?q=80&w=435&auto=format&fit=crop"
    }
];

const WEEK_DAYS = ['MIN', 'SEN', 'SEL', 'RAB', 'KAM', 'JUM', 'SAB'];
// Mockup calendar data starting from Sept 29 to Oct 31 for grid
const CALENDAR_DAYS = [
    { day: 29, month: 'prev' }, { day: 30, month: 'prev' },
    { day: 1, eventType: 'culture' }, { day: 2 }, { day: 3, eventType: 'music' }, { day: 4 }, 
    { day: 5, active: true, eventType: 'mix' },
    { day: 6, eventType: 'culture' }, { day: 7 }, { day: 8, eventType: 'music' }, { day: 9 }, 
    { day: 10, eventType: 'mix' }, { day: 11 }, { day: 12, eventType: 'culture' }
];
// Filling the rest with simple numbers for brevity in rendering logic
for (let i = 13; i <= 31; i++) CALENDAR_DAYS.push({ day: i });

export default function KalenderEvent() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 md:px-8 font-sans text-slate-900">
       <div className="container mx-auto">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
             <div>
                <h1 className="text-4xl font-extrabold mb-3">Kalender Event Bandung</h1>
                <p className="text-slate-600 max-w-xl">
                   Temukan festival, konser musik, dan pameran seni paling hits di Kota Kembang.
                </p>
             </div>
             <div className="flex items-center gap-3">
                <button className="h-10 w-10 bg-white rounded-full shadow-sm flex items-center justify-center hover:bg-slate-50 transition-colors">
                   <Filter className="h-5 w-5 text-slate-600" />
                </button>
                <button className="h-10 w-10 bg-white rounded-full shadow-sm flex items-center justify-center hover:bg-slate-50 transition-colors">
                   <Share2 className="h-5 w-5 text-slate-600" />
                </button>
             </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-10">
             <button className="px-5 py-2.5 rounded-full bg-green-700 text-white font-bold text-sm shadow-lg shadow-green-700/20 hover:bg-green-800 transition-colors flex items-center gap-2">
                 <span className="text-lg">♣</span> Semua Event
             </button>
             <button className="px-5 py-2.5 rounded-full bg-orange-50 text-orange-700 font-bold text-sm border border-orange-100 hover:bg-orange-100 transition-colors flex items-center gap-2">
                 <span>🎪</span> Festival Budaya
             </button>
             <button className="px-5 py-2.5 rounded-full bg-blue-50 text-blue-700 font-bold text-sm border border-blue-100 hover:bg-blue-100 transition-colors flex items-center gap-2">
                 <span>🎵</span> Konser Musik
             </button>
             <button className="px-5 py-2.5 rounded-full bg-purple-50 text-purple-700 font-bold text-sm border border-purple-100 hover:bg-purple-100 transition-colors flex items-center gap-2">
                 <span>🎨</span> Pameran Seni
             </button>
             <button className="px-5 py-2.5 rounded-full bg-red-50 text-red-700 font-bold text-sm border border-red-100 hover:bg-red-100 transition-colors flex items-center gap-2">
                 <span>🍴</span> Kuliner
             </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 mb-16">
             {/* Calendar Widget */}
             <div className="w-full lg:w-[480px] shrink-0 bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 h-fit">
                <div className="flex items-center justify-between mb-8">
                   <h2 className="text-2xl font-bold">Oktober 2024</h2>
                   <div className="flex gap-2">
                      <button className="h-8 w-8 rounded-full bg-slate-50 hover:bg-slate-100 flex items-center justify-center transition-colors">
                         <ChevronLeft className="h-5 w-5 text-slate-600" />
                      </button>
                      <button className="h-8 w-8 rounded-full bg-slate-50 hover:bg-slate-100 flex items-center justify-center transition-colors">
                         <ChevronRight className="h-5 w-5 text-slate-600" />
                      </button>
                   </div>
                </div>

                <div className="grid grid-cols-7 gap-y-8 text-center">
                   {/* Weekday Headers */}
                   {WEEK_DAYS.map((day, i) => (
                      <div key={i} className="text-[10px] font-bold text-slate-400 tracking-wider">
                         {day}
                      </div>
                   ))}

                   {/* Calendar Grid */}
                   {CALENDAR_DAYS.map((date, i) => (
                      <div key={i} className="flex flex-col items-center gap-1 group cursor-pointer relative">
                         <div className={`h-10 w-10 flex items-center justify-center rounded-xl text-sm font-bold transition-all
                            ${date.active ? 'bg-green-100 text-green-700 ring-2 ring-green-600 ring-offset-2' : 
                              date.month === 'prev' ? 'text-slate-300' : 'text-slate-700 hover:bg-slate-50'
                            }`}
                         >
                            {date.day}
                            {date.active && <span className="absolute -top-3 text-[8px] font-bold bg-green-600 text-white px-1.5 py-0.5 rounded-md shadow-sm">HARI INI</span>}
                         </div>
                         
                         {/* Event Indicators */}
                         <div className="flex gap-0.5 h-1.5">
                            {date.eventType === 'culture' && <div className="h-1.5 w-1.5 rounded-full bg-orange-400"></div>}
                            {date.eventType === 'music' && <div className="h-1.5 w-1.5 rounded-full bg-blue-400"></div>}
                            {date.eventType === 'mix' && (
                                <>
                                  <div className="h-1.5 w-1.5 rounded-full bg-orange-400"></div>
                                  <div className="h-1.5 w-1.5 rounded-full bg-blue-400"></div>
                                  <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                                </>
                            )}
                         </div>
                      </div>
                   ))}
                </div>

                <div className="flex gap-6 mt-8 pt-6 border-t border-slate-100 text-[10px] font-bold uppercase tracking-wider text-slate-400 justify-center">
                   <div className="flex items-center gap-2"><div className="h-2 w-2 rounded-full bg-orange-400"></div> Budaya</div>
                   <div className="flex items-center gap-2"><div className="h-2 w-2 rounded-full bg-blue-400"></div> Musik</div>
                   <div className="flex items-center gap-2"><div className="h-2 w-2 rounded-full bg-green-400"></div> Seni & Kreatif</div>
                </div>
             </div>

             {/* Events List */}
             <div className="flex-1 space-y-6">
                <div className="flex justify-between items-center mb-2">
                   <h2 className="text-xl font-bold">Event Hari Ini (5 Okt)</h2>
                   <button className="text-xs font-bold text-green-600 hover:underline">Lihat Semua</button>
                </div>

                {/* Featured Card */}
                <div className="bg-white rounded-[2rem] p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all group cursor-pointer">
                   <div className="h-48 rounded-3xl overflow-hidden relative mb-4">
                      <img src={EVENTS_CALENDAR[0].image} alt="Event" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute top-4 left-4 bg-orange-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                         Festival Budaya
                      </div>
                   </div>
                   <div className="px-2">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{EVENTS_CALENDAR[0].title}</h3>
                      <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                         <div className="flex items-center gap-1.5">
                            <Clock className="h-4 w-4 text-green-600" /> {EVENTS_CALENDAR[0].time}
                         </div>
                         <div className="flex items-center gap-1.5">
                            <MapPin className="h-4 w-4 text-green-600" /> {EVENTS_CALENDAR[0].location}
                         </div>
                      </div>
                      <button className="w-full bg-slate-100 text-slate-900 font-bold py-3.5 rounded-xl hover:bg-slate-200 transition-colors">
                         Pesan Tiket
                      </button>
                   </div>
                </div>

                {/* Secondary Card */}
                <div className="bg-white rounded-[2rem] p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all group cursor-pointer">
                   <div className="h-32 rounded-3xl overflow-hidden relative mb-4">
                      <img src={EVENTS_CALENDAR[1].image} alt="Event" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute top-4 left-4 bg-blue-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                         Konser Musik
                      </div>
                   </div>
                   <div className="px-2">
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{EVENTS_CALENDAR[1].title}</h3>
                      <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                         <div className="flex items-center gap-1.5">
                            <Clock className="h-4 w-4 text-green-600" /> {EVENTS_CALENDAR[1].time}
                         </div>
                         <div className="flex items-center gap-1.5 truncate">
                            <MapPin className="h-4 w-4 text-green-600" /> {EVENTS_CALENDAR[1].location}
                         </div>
                      </div>
                      <button className="w-full bg-slate-100 text-slate-900 font-bold py-3.5 rounded-xl hover:bg-slate-200 transition-colors">
                         Pesan Tiket
                      </button>
                   </div>
                </div>
                
                {/* Tertiary Card */}
                <div className="bg-white rounded-2xl p-4 border border-slate-100 hover:shadow-md transition-all flex items-center justify-between cursor-pointer group bg-gradient-to-r hover:from-slate-50 hover:to-white">
                   <div className="flex items-center gap-4">
                      <div className="h-16 w-16 rounded-xl overflow-hidden shadow-sm shrink-0">
                         <img src={EVENTS_CALENDAR[2].image} alt="Art" className="w-full h-full object-cover" />
                      </div>
                      <div>
                         <span className="text-[10px] font-bold text-green-600 uppercase mb-0.5 block">Pameran Seni</span>
                         <h3 className="font-bold text-slate-900">{EVENTS_CALENDAR[2].title}</h3>
                         <p className="text-xs text-slate-500 mt-1">Setrasari, 09:00 WIB</p>
                      </div>
                   </div>
                   <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all">
                      <ArrowRight className="h-4 w-4" />
                   </div>
                </div>
             </div>
          </div>

          {/* Bottom Highlights Section */}
          <section>
             <h2 className="text-2xl font-bold mb-8">Jangan Lewatkan Bulan Ini</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {HIGHLIGHTS.map((item) => (
                   <div key={item.id} className="relative h-80 rounded-[2rem] overflow-hidden group cursor-pointer shadow-md">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 text-white">
                         <span className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-2 block">{item.date}</span>
                         <h3 className="text-xl font-extrabold leading-tight">{item.title}</h3>
                      </div>
                   </div>
                ))}
             </div>
          </section>

       </div>
    </div>
  );
}
