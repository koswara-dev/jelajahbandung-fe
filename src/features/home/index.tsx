import { Link } from "react-router-dom";
import { Search, MapPin, ArrowRight, Clock, Star, Trees, Utensils, Landmark, Palette} from "lucide-react";

const CATEGORIES = [
  { 
    title: "Nature", 
    desc: "Keindahan alam pegunungan",
    icon: Trees,
    img: "https://images.unsplash.com/photo-1627393439498-8c014757c37a" 
  },
  { 
    title: "Culinary", 
    desc: "Surga jajanan legendaris", 
    icon: Utensils,
    img: "https://images.unsplash.com/photo-1563245372-f21724e3856d" 
  },
  { 
    title: "Heritage", 
    desc: "Jejak sejarah kolonial", 
    icon: Landmark,
    img: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa" 
  },
  { 
    title: "Art & Design", 
    desc: "Ruang kreatif modern", 
    icon: Palette,
    img: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968" 
  },
];

const DESTINATIONS = [
  { 
    title: "Kawah Putih", 
    location: "Ciwidey, Bandung Selatan", 
    rating: 4.8, 
    img: "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7",
  },
  { 
    title: "Jalan Braga", 
    location: "Pusat Kota (Historical Walk)", 
    rating: 4.7, 
    img: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa",
  },
  { 
    title: "Tangkuban Perahu", 
    location: "The Majestic Queen Mountain", 
    rating: 4.6, 
    img: "https://images.unsplash.com/photo-1627393439498-8c014757c37a",
  },
  { 
    title: "Sejiwa Coffee", 
    location: "Culture & Caffeine Hub", 
    rating: 4.9, 
    img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24",
  },
  { 
    title: "Orchid Forest", 
    location: "Modern Forest Sanctuary", 
    rating: 4.8, 
    img: "https://images.unsplash.com/photo-1542300058-b94b8ab7411b",
  }
];

const EVENTS = [
  {
    id: 1,
    title: "Asia Africa Festival 2024",
    date: "15",
    month: "OCT",
    category: "BUDAYA",
    location: "Jalan Asia Afrika",
    time: "08:00 - 16:00",
    desc: "Parade budaya megah yang merayakan sejarah bersejarah di...",
    image: "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9",
  },
  {
    id: 2,
    title: "Bandung Culinary Night",
    date: "22",
    month: "NOV",
    category: "KULINER",
    location: "Braga Street",
    time: "18:00 - 23:00",
    desc: "Eksplorasi ratusan jajanan khas Jawa Barat dalam suasana pasar malam...",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
  },
  {
    id: 3,
    title: "Jazz Mountain Lembang",
    date: "03",
    month: "DEC",
    category: "MUSIC",
    location: "Orchid Forest",
    time: "15:00 - Done",
    desc: "Nikmati harmoni musik jazz internasional di tengah rimbun pinus...",
    image: "https://images.unsplash.com/photo-1514525253440-b393452e8d26",
  }
];

export default function Home() {
  return (
    <div className="font-sans text-slate-900">
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-6 pb-12">
        <div className="relative h-[500px] overflow-hidden rounded-[2.5rem] shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=2938&auto=format&fit=crop" 
            alt="Gedung Sate Bandung" 
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6">
             <span className="mb-6 inline-block rounded-full bg-white/20 px-5 py-1.5 text-xs font-bold tracking-widest backdrop-blur-md">
               INDONESIA IS WAITING
             </span>
             <h1 className="mb-2 text-4xl font-extrabold md:text-6xl lg:text-7xl drop-shadow-md">
               Singgah di <span className="text-green-400">Kota</span>
             </h1>
             <h1 className="mb-8 text-4xl font-extrabold md:text-6xl lg:text-7xl italic text-green-400 drop-shadow-md">
                Kembang
             </h1>
             <p className="mb-10 max-w-xl text-sm font-medium md:text-base text-slate-100 drop-shadow-sm">
                Temukan pesona alam pegunungan, jejak sejarah kolonial, dan surga kuliner legendaris di jantung Jawa Barat.
             </p>

             {/* Search Bar */}
             <div className="flex w-full max-w-2xl flex-col items-center gap-2 rounded-2xl bg-white p-2 shadow-2xl md:flex-row md:rounded-full md:p-1.5">
                <div className="flex w-full items-center gap-3 rounded-full bg-slate-100 px-4 py-3 md:bg-transparent md:py-0 md:pl-6">
                   <Search className="h-5 w-5 text-slate-400" />
                   <input 
                     type="text" 
                     placeholder="Cari destinasi, kuliner..." 
                     className="w-full bg-transparent text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none"
                   />
                </div>
                <div className="h-8 w-px bg-slate-200 hidden md:block"></div>
                <div className="flex min-w-[180px] cursor-pointer items-center justify-between gap-2 px-4 py-2 text-sm font-semibold text-slate-700 hover:text-green-600">
                   <MapPin className="h-4 w-4 text-green-600" />
                   <span>Semua Lokasi</span>
                </div>
                <button className="w-full rounded-xl bg-green-700 px-8 py-3 text-sm font-bold text-white transition-all hover:bg-green-800 md:w-auto md:rounded-full">
                   Cari
                </button>
             </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-end justify-between">
            <div>
               <h2 className="text-2xl font-bold text-slate-900">Pilih Petualanganmu</h2>
               <p className="mt-1 text-sm text-slate-500">Kategori terpopuler untuk eksplorasi minggu ini</p>
            </div>
            <Link to="/wisata" className="group flex items-center gap-1 text-sm font-semibold text-green-600 hover:text-green-700">
               Lihat Semua <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
             {CATEGORIES.map((item, i) => (
                <div key={i} className="group relative h-[280px] overflow-hidden rounded-[2rem] cursor-pointer bg-slate-100">
                   <img 
                     src={item.img} 
                     alt={item.title} 
                     className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
                   <div className="absolute bottom-0 left-0 p-6">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-600/90 text-white backdrop-blur-sm shadow-lg">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-bold text-white leading-tight">{item.title}</h3>
                      <p className="mt-1 text-xs font-medium text-slate-300">{item.desc}</p>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Iconic Destinations */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
             <h2 className="text-2xl font-bold text-slate-900">Destinasi Ikonik</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
             {/* Use grid-span for better layout if needed, currently implementing uniform grid based on image */}
             {DESTINATIONS.map((spot, i) => (
               <div key={i} className="group relative h-[250px] overflow-hidden rounded-[2rem] cursor-pointer shadow-sm">
                  <img 
                     src={spot.img} 
                     alt={spot.title} 
                     className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 w-full p-6">
                     <h3 className="text-xl font-bold text-white">{spot.title}</h3>
                     <div className="mt-1 flex items-center justify-between">
                        <p className="text-xs text-slate-300 flex items-center gap-1">
                           <MapPin className="h-3 w-3" /> {spot.location}
                        </p>
                        <div className="flex items-center gap-1 rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur-md">
                           <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" /> {spot.rating}
                        </div>
                     </div>
                  </div>
                  {/* Reuseable Label */}
                  {i === 3 && (
                     <div className="absolute top-4 right-4 rounded-full bg-green-600 px-3 py-1 text-[10px] font-bold tracking-wider text-white uppercase shadow-lg">
                        Near Me
                     </div>
                  )}
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Agenda Terdekat (Events) */}
      <section className="py-16 bg-[#F3F8F5] my-8 rounded-[3rem] mx-4">
         <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="max-w-md">
                 <h2 className="text-3xl font-extrabold text-slate-900">Agenda Terdekat</h2>
                 <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                   Jangan lewatkan kemeriahan festival seni, musik, dan budaya di Bandung bulan ini.
                 </p>
              </div>
              <button className="items-center justify-center rounded-full border border-green-600/30 bg-white px-6 py-2.5 text-xs font-bold text-green-700 transition-colors hover:bg-green-50 shadow-sm hidden md:flex">
                Kalender Lengkap
              </button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
               {EVENTS.map((event) => (
                  <div key={event.id} className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm transition-all hover:shadow-lg">
                     <div className="relative h-48 overflow-hidden">
                        <img 
                           src={event.image} 
                           alt={event.title} 
                           className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 flex flex-col items-center justify-center rounded-xl bg-white/95 px-3 py-2 text-center shadow-lg backdrop-blur-sm">
                           <span className="text-xl font-bold text-slate-900 block leading-none">{event.date}</span>
                           <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">{event.month}</span>
                        </div>
                     </div>
                     <div className="flex flex-1 flex-col p-6">
                        <span className="mb-2 text-[10px] font-bold uppercase tracking-wider text-green-600">
                           {event.category}
                        </span>
                        <h3 className="mb-2 text-lg font-bold text-slate-900 group-hover:text-green-700 transition-colors">
                           {event.title}
                        </h3>
                        <p className="mb-4 line-clamp-2 text-xs text-slate-500 leading-relaxed">
                           {event.desc}
                        </p>
                        <div className="mt-auto flex items-center gap-4 border-t border-slate-100 pt-4 text-xs font-medium text-slate-400">
                           <div className="flex items-center gap-1.5">
                              <Clock className="h-3.5 w-3.5 text-slate-300" />
                              {event.time}
                           </div>
                           <div className="flex items-center gap-1.5">
                              <MapPin className="h-3.5 w-3.5 text-slate-300" />
                              {event.location}
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-12">
         <div className="container mx-auto px-4">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-green-700 text-white shadow-2xl">
               {/* Decorative Circle */}
               <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-green-600 opacity-50 blur-3xl"></div>
               <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-green-800 opacity-50 blur-3xl"></div>
               
               <div className="relative z-10 flex flex-col items-center px-6 py-16 text-center md:px-12 lg:py-24">
                  <h2 className="mx-auto max-w-2xl text-3xl font-extrabold md:text-4xl lg:text-5xl">
                    Siap Menjelajahi Bandung?
                  </h2>
                  <p className="mx-auto mt-4 max-w-lg text-green-100 text-sm md:text-base">
                    Dapatkan panduan informasi eksklusif dan update acara menarik langsung di inbox-mu setiap minggu.
                  </p>
                  
                  <div className="mt-10 w-full max-w-md">
                    <div className="flex items-center rounded-full bg-white p-1.5 shadow-xl">
                      <input 
                        type="email" 
                        placeholder="Alamat email kamu..." 
                        className="w-full bg-transparent px-6 py-3 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none"
                      />
                      <button className="shrink-0 rounded-full bg-green-800 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-green-900">
                        Berlangganan
                      </button>
                    </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
}
