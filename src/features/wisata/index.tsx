import { MapPin, Star, Heart, Trees, Utensils, Landmark, ShoppingBag, CheckCircle, TrendingUp, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Local data to match the specific design requirement
const WISATA_ITEMS = [
  {
    id: 1,
    title: "Kawah Putih Ciwidey",
    desc: "Danau kawah putih yang memukau di kawah vulkanik dengan suasana etereal...",
    price: "Rp 81.000",
    rating: 4.9,
    reviews: 128,
    category: "ALAM",
    image: "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?q=80&w=1000&auto=format&fit=crop",
    tags: ["Vulkanik", "Danau"],
    featured: true,
  },
  {
    id: 2,
    title: "Jalan Braga",
    desc: "Jantung bersejarah Bandung yang dikenal dengan arsitektur kolonial, kafe trendi...",
    category: "SEJARAH",
    image: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?q=80&w=1000&auto=format&fit=crop",
    tags: ["Ikonik", "Pusat Kota"],
    featured: false,
  },
  {
    id: 3,
    title: "Sudirman Night Market",
    desc: "Surga jajanan kaki lima terbaik di Bandung. Dari sate legendaris hingga dessert tradisional.",
    category: "KULINER",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000&auto=format&fit=crop",
    visitors: ["https://api.dicebear.com/9.x/avataaars/svg?seed=Felix", "https://api.dicebear.com/9.x/avataaars/svg?seed=Aneka"],
    visitorCount: "12rb",
    visitedText: "Dikunjungi minggu ini",
    featured: false,
  },
  {
    id: 4,
    title: "Orchid Forest Cikole",
    desc: "Taman hutan pinus yang memukau, rumah bagi lebih dari 157 spesies anggrek dan...",
    location: "Lembang",
    price: "Gratis",
    category: "ALAM",
    image: "https://images.unsplash.com/photo-1542300058-b94b8ab7411b?q=80&w=1000&auto=format&fit=crop",
    verified: true,
    featured: false,
  },
  {
    id: 5,
    title: "Gedung Sate",
    desc: "Gedung administratif ikonik Jawa Barat dengan ornamen 'tusuk sate' yang unik...",
    category: "SEJARAH",
    image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=1000&auto=format&fit=crop",
    tags: ["Sejarah", "Pemerintahan"],
    action: "Pesan Tur",
    featured: false,
  },
];

const FILTERS = [
  { icon: Trees, label: "Alam", active: true },
  { icon: Utensils, label: "Kuliner", active: false },
  { icon: Landmark, label: "Sejarah", active: false },
  { icon: ShoppingBag, label: "Belanja", active: false },
];

const LOCATIONS = ["Lembang", "Dago", "Ciwidey", "Braga"];

export default function Wisata() {
  return (
    <div className="min-h-screen bg-slate-50 pt-8 pb-12">
      <div className="container mx-auto px-4">
        {/* Top Search & Profile Bar (Simulated as per design, though mostly in layout) */}
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 shrink-0 space-y-8">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">Filter</h2>
              <p className="text-xs text-slate-400">Saring penjelajahanmu</p>
            </div>

            {/* Category */}
            <div>
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Kategori</h3>
              <div className="space-y-2">
                {FILTERS.map((f, i) => (
                   <button 
                    key={i}
                    className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      f.active 
                        ? "bg-green-700 text-white shadow-lg shadow-green-700/20" 
                        : "text-slate-600 hover:bg-white hover:shadow-sm"
                    }`}
                   >
                     <f.icon className="h-4 w-4" />
                     {f.label}
                   </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Rentang Harga</h3>
              <div className="px-2">
                {/* Visual Fake Slider */}
                <div className="h-1 w-full bg-slate-200 rounded-full mb-4 relative">
                  <div className="absolute left-0 top-0 h-full w-1/2 bg-green-600 rounded-full"></div>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 h-4 w-4 bg-green-600 border-2 border-white rounded-full shadow-md"></div>
                  <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 h-4 w-4 bg-green-600 border-2 border-white rounded-full shadow-md"></div>
                </div>
                <div className="flex justify-between text-xs font-semibold text-slate-700">
                  <span>Rp 20rb</span>
                  <span>Rp 500rb+</span>
                </div>
              </div>
            </div>

            {/* Location */}
            <div>
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Lokasi</h3>
              <div className="flex flex-wrap gap-2">
                {LOCATIONS.map((loc, i) => (
                  <button key={i} className="px-4 py-2 rounded-full bg-slate-100 text-xs font-bold text-slate-600 hover:bg-slate-200 transition-colors">
                    {loc}
                  </button>
                ))}
              </div>
            </div>

            <button className="w-full rounded-xl bg-green-700 py-3.5 text-sm font-bold text-white shadow-lg shadow-green-700/20 transition-all hover:bg-green-800 hover:-translate-y-0.5 active:translate-y-0">
              Terapkan Filter
            </button>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="mb-8">
              <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
                Jelajahi Jiwa <span className="text-green-600 italic">Bandung</span>
              </h1>
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap gap-3 mb-8">
              <button className="flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-bold text-blue-700 hover:bg-blue-100">
                <CheckCircle className="h-3.5 w-3.5" />
                Terverifikasi
              </button>
              <button className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-200">
                <TrendingUp className="h-3.5 w-3.5" />
                Sedang Tren
              </button>
              <button className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-200">
                <Clock className="h-3.5 w-3.5" />
                Buka Sekarang
              </button>
            </div>

            {/* Grid */}
            <div className="columns-1 md:columns-2 gap-6 space-y-6">
              {WISATA_ITEMS.map((item) => (
                <div key={item.id} className="break-inside-avoid rounded-3xl bg-white p-4 shadow-sm hover:shadow-xl transition-shadow duration-300 group">
                  <div className="relative mb-4 overflow-hidden rounded-2xl">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ height: item.featured ? '380px' : '240px' }}
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                       <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white shadow-sm ${
                         item.category === "ALAM" ? "bg-[#e28e5c]" :
                         item.category === "KULINER" ? "bg-[#fbbd5c]" :
                         item.category === "SEJARAH" ? "bg-[#548c5c]" : "bg-slate-500"
                       }`}>
                         {item.category}
                       </span>
                       {item.rating && (
                         <span className="flex items-center gap-1 rounded-full bg-white px-2 py-1 text-[10px] font-bold text-slate-900 shadow-sm">
                           <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" /> {item.rating}
                         </span>
                       )}
                    </div>
                    <button className="absolute top-3 right-3 rounded-full bg-white/20 p-2 text-white backdrop-blur-md hover:bg-white hover:text-red-500 transition-colors">
                      <Heart className="h-4 w-4" />
                    </button>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <Link to={`/wisata/${item.id}`} className="text-lg font-bold text-slate-900 leading-tight hover:text-green-600 transition-colors">
                        {item.title}
                      </Link>
                      {item.verified && <CheckCircle className="h-4 w-4 text-green-500" />}
                    </div>
                    
                    <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2">
                      {item.desc}
                    </p>

                    {/* Bottom Action Area */}
                    <div className="flex items-center justify-between mt-4">
                      {item.tags && (
                        <div className="flex gap-2">
                          {item.tags.map((tag, i) => (
                            <span key={i} className="px-2 py-1 rounded-md bg-slate-100 text-[10px] font-semibold text-slate-600">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Visitors Avatar Group */}
                      {item.visitors && (
                        <div className="flex items-center gap-3">
                          <div className="flex -space-x-2">
                            {item.visitors.map((v, i) => (
                              <img key={i} src={v} className="h-6 w-6 rounded-full border-2 border-white" alt="Visitor" />
                            ))}
                            <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green-100 text-[8px] font-bold text-green-700">
                              {item.visitorCount}
                            </div>
                          </div>
                          <span className="text-[10px] text-slate-400 italic">{item.visitedText}</span>
                        </div>
                      )}

                      {/* Location & Free Entry */}
                      {item.location && !item.price?.includes('Rp') && (
                        <div className="flex items-center gap-4 text-xs font-bold text-slate-900">
                           <div className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {item.location}</div>
                           <div className="flex items-center gap-1"><ShoppingBag className="h-3.5 w-3.5" /> {item.price}</div>
                        </div>
                      )}

                      {/* Tagless Price with Arrow */}
                      {item.price && item.price.includes('Rp') && !item.tags && (
                        <div className="flex items-center justify-between w-full"> 
                           <div className="text-sm font-bold text-green-600">
                             {item.price} <span className="text-xs font-normal text-slate-400">/ orang</span>
                           </div>
                           <Link to={`/wisata/${item.id}`} className="p-2 rounded-full border border-slate-200 hover:bg-green-50 hover:border-green-200 hover:text-green-600 transition-colors">
                              <ArrowRight className="h-4 w-4" />
                           </Link>
                        </div>
                      )}
                      
                      {/* Action Button for Heritage/Book Tour */}
                      {item.action && (
                        <div className="flex gap-2 w-full">
                           <button className="flex-1 rounded-lg bg-slate-100 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-200">
                              {item.action}
                           </button>
                           <button className="p-2.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200">
                              <MapPin className="h-4 w-4" />
                           </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button className="inline-flex items-center gap-2 rounded-full border border-green-600 px-8 py-3 text-sm font-bold text-green-600 transition-all hover:bg-green-50">
                Muat Lebih Banyak
                <ArrowRight className="h-4 w-4 rotate-90" />
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
