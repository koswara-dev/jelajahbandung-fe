import { EVENTS } from "@/data/mock";
import { Calendar, MapPin, Ticket } from "lucide-react";

export default function Event() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Kalender Event</h1>
        <p className="mt-2 text-slate-600">Jangan lewatkan acara seru yang akan datang di Bandung.</p>
      </div>

      <div className="space-y-6">
        {EVENTS.map((event) => (
          <div key={event.id} className="flex flex-col gap-6 overflow-hidden rounded-2xl border bg-white p-6 shadow-sm transition-all hover:shadow-md md:flex-row md:items-center">
            <div className="h-48 w-full overflow-hidden rounded-xl md:h-40 md:w-64">
              <img 
                src={event.image} 
                alt={event.title} 
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="flex-1">
              <div className="mb-2 flex items-center gap-2 text-sm font-medium text-green-600">
                <Calendar className="h-4 w-4" />
                <span>{event.date}</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">{event.title}</h3>
              <div className="mt-2 flex items-center gap-2 text-slate-500">
                <MapPin className="h-4 w-4" />
                <span>{event.location}</span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-4 border-t pt-4 md:border-t-0 md:pt-0">
               <span className="text-xl font-bold text-slate-900">{event.price}</span>
               <button className="flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-green-700">
                 <Ticket className="h-4 w-4" />
                 Beli Tiket
               </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
