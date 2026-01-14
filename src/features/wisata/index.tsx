import { DESTINATIONS } from "@/data/mock";
import { MapPin, Star } from "lucide-react";

export default function Wisata() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Destinasi Wisata</h1>
        <p className="mt-2 text-slate-600">Temukan tempat-tempat menarik di Bandung untuk dikunjungi.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {DESTINATIONS.map((place) => (
          <div key={place.id} className="group overflow-hidden rounded-xl border bg-white shadow-sm transition-all hover:shadow-md">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={place.image} 
                alt={place.title} 
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 rounded-full bg-white/90 px-2 py-1 text-xs font-bold text-slate-900 flex items-center gap-1">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" /> {place.rating}
              </div>
              <div className="absolute top-4 left-4 rounded-full bg-green-600/90 px-3 py-1 text-xs font-bold text-white">
                {place.category}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-green-600 transition-colors">{place.title}</h3>
              <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                <MapPin className="h-4 w-4" />
                <span>{place.location}</span>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                 <span className="font-semibold text-slate-900">{place.price}</span>
                 <button className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800">
                   Lihat Detail
                 </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
