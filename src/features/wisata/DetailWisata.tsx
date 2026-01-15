import { MapPin, Star, Ticket, Clock, CheckCircle, Navigation, CloudSun, Share2, ArrowLeft } from "lucide-react";
import { useParams, Link } from "react-router-dom";
import { DESTINATIONS } from "@/data/mock";
import { useEffect } from "react";

export default function DetailWisata() {
  const { id } = useParams();
  const item = DESTINATIONS.find((d) => d.id === Number(id));

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-slate-600">
        <h1 className="text-2xl font-bold text-slate-900">Destinasi Tidak Ditemukan</h1>
        <p className="mb-4">Maaf, kami tidak dapat menemukan destinasi yang Anda cari.</p>
        <Link to="/wisata" className="text-green-600 hover:underline flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Kembali ke Wisata
        </Link>
      </div>
    );
  }

  // Gallery fallback
  const mainImage = item.gallery?.[0] || item.image;
  const sideImages = item.gallery?.slice(1, 4) || [item.image, item.image, item.image];
  // Ensure we have 3 side images by filling with main if needed
  while (sideImages.length < 3) {
      sideImages.push(mainImage);
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pt-8 pb-12">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center text-sm font-medium text-slate-500">
          <Link to="/" className="hover:text-green-600">Beranda</Link>
          <span className="mx-2">›</span>
          <Link to="/wisata" className="hover:text-green-600">Wisata {item.category === "ALAM" ? "Alam" : item.category === "SEJARAH" ? "Sejarah" : "Bandung"}</Link>
          <span className="mx-2">›</span>
          <span className="text-slate-900 font-semibold">{item.title}</span>
        </nav>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 h-[400px] md:h-[500px]">
          {/* Main Image */}
          <div className="md:col-span-2 relative h-full rounded-3xl overflow-hidden shadow-sm group">
            <img 
              src={mainImage} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h1 className="text-3xl md:text-4xl font-extrabold mb-1 drop-shadow-md">{item.title}</h1>
              <div className="flex items-center gap-2 text-sm font-medium">
                <MapPin className="h-4 w-4 text-green-400" />
                <span>{item.location}</span>
              </div>
            </div>
          </div>

          {/* Side Images */}
          <div className="grid grid-rows-3 gap-4 h-full">
            {sideImages.map((img, i) => (
                <div key={i} className="rounded-3xl overflow-hidden shadow-sm h-full group">
                  <img src={img} alt={`Side ${i + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Quick Info Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 text-center md:text-left">
                 <div className="flex flex-col md:flex-row items-center gap-3 mb-1">
                    <div className="p-2 bg-green-50 rounded-full text-green-600">
                       <Star className="h-4 w-4 fill-green-600" />
                    </div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Rating</span>
                 </div>
                 <p className="text-lg font-bold text-slate-900">{item.rating} <span className="text-xs font-normal text-slate-400">({item.reviewCount || '2k+'})</span></p>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 text-center md:text-left">
                 <div className="flex flex-col md:flex-row items-center gap-3 mb-1">
                    <div className="p-2 bg-green-50 rounded-full text-green-600">
                       <Ticket className="h-4 w-4" />
                    </div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Tiket Masuk</span>
                 </div>
                 <p className="text-lg font-bold text-slate-900">{item.priceRange || item.price}</p>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 text-center md:text-left">
                 <div className="flex flex-col md:flex-row items-center gap-3 mb-1">
                    <div className="p-2 bg-green-50 rounded-full text-green-600">
                       <Clock className="h-4 w-4" />
                    </div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Jam Operasional</span>
                 </div>
                 <p className="text-lg font-bold text-slate-900">{item.operatingHours || "08:00 - 17:00"}</p>
              </div>
            </div>

            {/* Description */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Tentang {item.title}</h2>
              <div className="prose prose-slate text-sm text-slate-600 leading-relaxed text-justify whitespace-pre-wrap">
                {item.description || "Deskripsi belum tersedia untuk destinasi ini."}
              </div>
            </section>

            {/* Facilities */}
            <section>
               <h2 className="text-xl font-bold text-slate-900 mb-4">Fasilitas Tersedia</h2>
               <div className="flex flex-wrap gap-3">
                  {(item.facilities || ["Parkir", "Toilet", "Musholla"]).map((fac, i) => (
                    <div key={i} className="flex items-center gap-2 px-4 py-3 bg-slate-50 rounded-xl border border-slate-100 text-sm font-medium text-slate-700">
                       <CheckCircle className="h-4 w-4 text-green-600" />
                       {fac}
                    </div>
                  ))}
               </div>
            </section>

            {/* Location Map Placeholder relative to design */}
            <section>
               <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-slate-900">Lokasi & Navigasi</h2>
                  <button className="text-xs font-bold text-green-600 hover:underline flex items-center gap-1">
                     <Share2 className="h-3 w-3" /> Salin Alamat
                  </button>
               </div>
               <div className="bg-slate-200 w-full h-64 rounded-3xl relative overflow-hidden flex items-center justify-center border border-slate-300">
                  {item.coordinates ? (
                    <iframe 
                      title="Lokasi Destinasi"
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      loading="lazy" 
                      allowFullScreen 
                      src={`https://maps.google.com/maps?q=${item.coordinates.lat},${item.coordinates.lng}&z=15&output=embed`}
                    ></iframe>
                  ) : (
                    <>
                      <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center"></div>
                       <div className="bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 z-10 animate-bounce">
                          <MapPin className="h-5 w-5 text-red-500 fill-red-500" />
                          <span className="text-xs font-bold text-slate-900">{item.title}</span>
                       </div>
                    </>
                  )}
               </div>
               <p className="mt-3 text-xs text-slate-500 flex items-center gap-2">
                 <div className="h-2 w-2 rounded-full bg-green-500 shrink-0"></div> {item.address || item.location}
               </p>
            </section>
          </div>

          {/* Sidebar Booking Card */}
          <div className="lg:col-span-1">
             <div className="sticky top-24 bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
                <p className="text-xs font-medium text-slate-500 mb-1">Harga mulai dari</p>
                <div className="flex items-end gap-1 mb-6">
                   <span className="text-3xl font-extrabold text-slate-900">{item.price}</span>
                   {item.price !== "Gratis" && <span className="text-xs font-medium text-slate-400 mb-1">/ orang</span>}
                </div>

                <div className="space-y-3 mb-8">
                   <button className="w-full py-3.5 rounded-xl bg-green-700 text-white text-sm font-bold shadow-lg shadow-green-700/30 hover:bg-green-800 transition-all active:translate-y-0.5 flex items-center justify-center gap-2">
                      <Ticket className="h-4 w-4" /> Pesan Tiket Online
                   </button>
                   <button className="w-full py-3.5 rounded-xl bg-slate-100 text-green-700 text-sm font-bold hover:bg-slate-200 transition-all flex items-center justify-center gap-2">
                      <Navigation className="h-4 w-4" /> Petunjuk Arah
                   </button>
                </div>

                <div className="space-y-4 border-t border-slate-100 pt-6">
                   <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-500 font-medium">Status Operasional</span>
                      <span className="text-green-600 font-bold flex items-center gap-1">
                         <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div> Buka Sekarang
                      </span>
                   </div>
                   <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-500 font-medium">Waktu Terbaik</span>
                      <span className="text-slate-900 font-bold">Pagi (07:00 - 09:00)</span>
                   </div>
                </div>

                <div className="mt-6 bg-orange-50 p-4 rounded-2xl flex items-center gap-4">
                   <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-sm text-orange-500">
                      <CloudSun className="h-6 w-6" />
                   </div>
                   <div>
                      <p className="text-[10px] font-bold text-orange-400 uppercase tracking-wider">Cuaca Terkini</p>
                      <p className="text-sm font-bold text-slate-900">Cerah Berawan • 18°C</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Nearby Exploration (Static for now, could be dynamic later) */}
        <section className="mt-16">
           <h2 className="text-2xl font-bold text-slate-900 mb-8">Eksplorasi Lainnya</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {DESTINATIONS.filter(d => d.id !== item.id).slice(0, 3).map((other) => (
                 <Link to={`/wisata/${other.id}`} key={other.id} className="group cursor-pointer">
                    <div className="rounded-3xl overflow-hidden h-48 mb-4 relative">
                       <img src={other.image} alt={other.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                       <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-lg text-[10px] font-bold flex items-center gap-1 shadow-sm">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" /> {other.rating}
                       </div>
                    </div>
                    <div>
                       <h3 className="text-lg font-bold text-slate-900 group-hover:text-green-600 transition-colors">{other.title}</h3>
                       <p className="text-xs text-slate-500">{other.location}</p>
                    </div>
                 </Link>
              ))}
           </div>
        </section>

      </div>
    </div>
  );
}
