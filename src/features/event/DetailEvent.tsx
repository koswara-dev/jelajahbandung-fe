import { Calendar, MapPin, Ticket, CheckCircle, Clock, Share2, ArrowLeft } from "lucide-react";
import { useParams, Link } from "react-router-dom";
import { EVENTS } from "@/data/mock";
import { useEffect } from "react";

export default function DetailEvent() {
  const { id } = useParams();
  const event = EVENTS.find((e) => e.id === Number(id));

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-slate-600">
        <h1 className="text-2xl font-bold text-slate-900">Event Tidak Ditemukan</h1>
        <p className="mb-4">Maaf, kami tidak dapat menemukan event yang Anda cari.</p>
        <Link to="/event" className="text-green-600 hover:underline flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Kembali ke Event
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-12 pt-8">
      <div className="container mx-auto px-4 md:px-8">
         {/* Breadcrumb */}
         <nav className="mb-6 flex items-center text-sm font-medium text-slate-500">
          <Link to="/" className="hover:text-green-600">Beranda</Link>
          <span className="mx-2">›</span>
          <Link to="/event" className="hover:text-green-600">Event</Link>
          <span className="mx-2">›</span>
          <span className="text-slate-900 font-semibold">{event.title}</span>
        </nav>

        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden h-[400px] mb-8 shadow-xl group">
             <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
             <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white max-w-2xl">
                 <span className="inline-block px-3 py-1 bg-orange-500 rounded-lg text-[10px] font-bold uppercase tracking-wider mb-2">
                    {event.category || "Event"}
                 </span>
                 <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight drop-shadow-md">{event.title}</h1>
                 <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 text-sm font-medium">
                    <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-orange-400" />
                        <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-orange-400" />
                        <span>{event.location}</span>
                    </div>
                 </div>
             </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
           {/* Main Content */}
           <div className="lg:col-span-2">
              <div className="prose prose-slate max-w-none text-lg text-slate-600 leading-relaxed mb-8 text-justify">
                 <p>{event.description}</p>
              </div>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                 <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-2">
                    <Calendar className="h-5 w-5 text-green-600" />
                    <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase">Jadwal</p>
                        <p className="font-bold text-slate-900">{event.date}</p>
                    </div>
                 </div>
                 <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-2">
                    <Clock className="h-5 w-5 text-green-600" />
                    <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase">Waktu</p>
                        <p className="font-bold text-slate-900">{event.time || "09:00 - Selesai"}</p>
                    </div>
                 </div>
                 <div className="col-span-2 md:col-span-1 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-2">
                    <MapPin className="h-5 w-5 text-green-600" />
                    <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase">Venue</p>
                        <p className="font-bold text-slate-900 truncate">{event.location}</p>
                    </div>
                 </div>
              </div>

              {/* Event Details */}
              <div className="space-y-8 mb-12">
                 {event.highlights && (
                   <section>
                      <h2 className="text-2xl font-bold text-slate-900 mb-6">Sorotan Acara</h2>
                      <div className="relative border-l-2 border-slate-200 pl-8 space-y-8 ml-3">
                         {event.highlights.map((hlt, idx) => (
                           <div key={idx} className="relative">
                              <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-green-500 shadow-sm"></div>
                              <p className="text-xs font-bold text-green-600 mb-1">{hlt.time}</p>
                              <h3 className="text-lg font-bold text-slate-900 mb-1">{hlt.title}</h3>
                              <p className="text-sm text-slate-500">{hlt.desc}</p>
                           </div>
                         ))}
                      </div>
                   </section>
                 )}
              </div>

              {/* Speakers */}
              {event.speakers && event.speakers.length > 0 && (
                <section className="mb-12">
                   <h2 className="text-2xl font-bold text-slate-900 mb-6">Bintang Tamu</h2>
                   <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {event.speakers.map((spk, idx) => (
                         <div key={idx} className="bg-white p-4 rounded-xl border border-slate-100 text-center hover:shadow-md transition-shadow">
                            <img src={spk.image} alt={spk.name} className="h-20 w-20 rounded-full mx-auto mb-3 bg-slate-50 object-cover" />
                            <h3 className="font-bold text-slate-900 text-sm">{spk.name}</h3>
                            <p className="text-xs text-slate-400">{spk.role}</p>
                         </div>
                      ))}
                   </div>
                </section>
              )}

              {/* Location Map Placeholder */}
              <section className="mb-12">
                 <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-slate-900">Lokasi Venue</h2>
                    <button className="text-xs font-bold text-green-600 hover:underline flex items-center gap-1">
                         <Share2 className="h-3 w-3" /> Buka di Maps
                    </button>
                 </div>
                 <div className="bg-slate-200 h-64 rounded-3xl relative overflow-hidden group">
                    {event.coordinates ? (
                        <iframe 
                          title="Lokasi Event"
                          width="100%" 
                          height="100%" 
                          style={{ border: 0 }} 
                          loading="lazy" 
                          allowFullScreen 
                          src={`https://maps.google.com/maps?q=${event.coordinates.lat},${event.coordinates.lng}&z=15&output=embed`}
                        ></iframe>
                    ) : ( 
                        <>
                            <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center opacity-30 transition-opacity group-hover:opacity-40"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
                                <MapPin className="h-8 w-8 text-red-500 drop-shadow-md animate-bounce" />
                                <div className="bg-white px-4 py-2 rounded-xl shadow-lg mt-2 text-center max-w-[200px]">
                                    <p className="font-bold text-xs truncate">{event.location}</p>
                                    <p className="text-[10px] text-slate-400">Bandung, Jawa Barat</p>
                                </div>
                            </div>
                        </>
                    )}
                 </div>
              </section>
           </div>
           
           {/* Sidebar */}
           <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                 {/* Ticket Card */}
                 <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50">
                    <div className="flex items-center justify-between mb-6">
                       <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Tiket Masuk</span>
                       <div className="flex items-center gap-1 text-green-600">
                          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                          <span className="text-xs font-bold">Tersedia</span>
                       </div>
                    </div>

                    {event.tickets && event.tickets.map((tkt, idx) => (
                      <div key={idx} className={`rounded-xl p-4 mb-3 flex justify-between items-center cursor-pointer transition-colors relative overflow-hidden ${tkt.popular ? 'border-2 border-green-500 bg-green-50' : 'border border-slate-100 bg-white hover:border-green-500'}`}>
                          {tkt.popular && <div className="absolute top-0 right-0 bg-green-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-bl-lg">POPULER</div>}
                          <div>
                             <p className="font-bold text-slate-900">{tkt.type}</p>
                             <p className="text-xs text-slate-500">{tkt.desc}</p>
                          </div>
                          <span className={`${tkt.popular ? 'text-green-700' : 'text-slate-900'} font-bold`}>{tkt.price}</span>
                      </div>
                    ))}

                    {!event.tickets && (
                       <div className="border border-slate-100 rounded-xl p-4 mb-3 flex justify-between items-center">
                          <div>
                             <p className="font-bold text-slate-900">Tiket Masuk</p>
                          </div>
                          <span className="font-bold text-green-600">{event.price}</span>
                       </div>
                    )}

                    <button className="w-full bg-green-700 text-white font-bold py-3.5 rounded-xl hover:bg-green-800 transition-all shadow-lg shadow-green-700/20 active:translate-y-0.5 flex items-center justify-center gap-2 mt-4">
                       <Ticket className="h-4 w-4" /> Beli Tiket
                    </button>
                    
                    <div className="flex items-center gap-3 mt-6 pt-6 border-t border-slate-100">
                        <div className="flex -space-x-2">
                            {[1,2,3].map(i => (
                                <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-slate-200"></div>
                            ))}
                        </div>
                         <p className="text-xs text-slate-500">32 Teman akan hadir</p>
                    </div>
                 </div>

                 {/* Important Info */}
                 {event.importantInfo && (
                   <div className="bg-slate-100 p-6 rounded-3xl">
                      <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                          <div className="h-5 w-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs">i</div>
                          Info Penting
                      </h3>
                      <ul className="space-y-3 text-sm text-slate-600">
                         {event.importantInfo.map((info, idx) => (
                           <li key={idx} className="flex items-start gap-2">
                               <CheckCircle className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                               <span>{info}</span>
                           </li>
                         ))}
                      </ul>
                   </div>
                 )}
              </div>
           </div>
        </div>

        {/* Other Events */}
        <section className="mt-20">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Acara Lainnya</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {EVENTS.filter(e => e.id !== event.id).slice(0, 3).map((other) => (
                    <Link to={`/event/${other.id}`} key={other.id} className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg transition-all group cursor-pointer block">
                        <div className="h-48 overflow-hidden relative">
                            <img src={other.image} className="w-full h-full object-cover transition-transform group-hover:scale-105" alt={other.title} />
                            <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-lg text-xs font-bold shadow-sm">
                                {other.days} {other.months}
                            </div>
                        </div>
                        <div className="p-4">
                            <p className="text-[10px] font-bold text-green-600 uppercase mb-1">{other.category || 'Event'}</p>
                            <h3 className="font-bold text-slate-900 mb-1 group-hover:text-green-600 transition-colors">{other.title}</h3>
                            <p className="text-xs text-slate-500">{other.date}</p>
                        </div>
                    </Link>
                ))}
             </div>
        </section>

      </div>
    </div>
  );
}
