import { Send, FileText, MapPin, Camera, AlertTriangle } from "lucide-react";

export default function Pengaduan() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-12 pt-8">
       <div className="container mx-auto px-4 md:px-8">
           <div className="max-w-3xl mx-auto">
               <div className="text-center mb-10">
                   <div className="inline-flex h-16 w-16 bg-red-100 rounded-full items-center justify-center mb-4">
                       <AlertTriangle className="h-8 w-8 text-red-600" />
                   </div>
                   <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Formulir Pengaduan</h1>
                   <p className="text-slate-600">Sampaikan keluhan atau kendala Anda. Kami siap mendengar untuk Bandung yang lebih baik.</p>
               </div>

               <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
                   <form className="space-y-6">
                       
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div className="space-y-2">
                               <label className="text-sm font-bold text-slate-700">Nama Lengkap</label>
                               <input type="text" placeholder="Nama Anda" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all font-medium" />
                           </div>
                           <div className="space-y-2">
                               <label className="text-sm font-bold text-slate-700">Email / No. HP</label>
                               <input type="text" placeholder="kontak@email.com" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all font-medium" />
                           </div>
                       </div>

                       <div className="space-y-2">
                           <label className="text-sm font-bold text-slate-700">Topik Pengaduan</label>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                {['Fasilitas Rusak', 'Kebersihan', 'Layanan Buruk', 'Keamanan', 'Lainnya'].map((topic, i) => (
                                    <label key={i} className="cursor-pointer">
                                        <input type="radio" name="topic" className="peer sr-only" />
                                        <div className="px-4 py-2 rounded-xl border border-slate-200 text-center text-sm font-medium text-slate-500 peer-checked:bg-green-50 peer-checked:border-green-500 peer-checked:text-green-700 transition-all hover:bg-slate-50">
                                            {topic}
                                        </div>
                                    </label>
                                ))}
                            </div>
                       </div>

                       <div className="space-y-2">
                           <label className="text-sm font-bold text-slate-700">Lokasi Kejadian</label>
                           <div className="relative">
                               <MapPin className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
                               <input type="text" placeholder="Nama Jalan / Lokasi Wisata" className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all font-medium" />
                           </div>
                       </div>

                       <div className="space-y-2">
                           <label className="text-sm font-bold text-slate-700">Detail Laporan</label>
                           <textarea rows={5} placeholder="Jelaskan detail kejadian atau keluhan Anda..." className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all font-medium resize-none"></textarea>
                       </div>

                       <div className="space-y-2">
                           <label className="text-sm font-bold text-slate-700">Bukti Foto (Opsional)</label>
                           <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:bg-slate-50 transition-colors cursor-pointer group">
                               <Camera className="h-8 w-8 text-slate-400 mx-auto mb-2 group-hover:text-green-500 transition-colors" />
                               <p className="text-sm text-slate-500 font-medium">Klik untuk upload atau drag & drop foto disini</p>
                               <p className="text-xs text-slate-400 mt-1">Maks. ukuran 5MB (JPG, PNG)</p>
                           </div>
                       </div>

                       <div className="pt-4">
                           <button type="submit" className="w-full bg-green-700 text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-green-700/30 hover:bg-green-800 transition-all active:translate-y-0.5 flex items-center justify-center gap-2">
                               <Send className="h-5 w-5" /> Kirim Pengaduan
                           </button>
                       </div>

                   </form>
               </div>

               <div className="text-center mt-8 text-sm text-slate-500 flex items-center justify-center gap-2">
                   <FileText className="h-4 w-4" />
                   <span>Rahasia identitas pelapor dijamin aman.</span>
               </div>
           </div>
       </div>
    </div>
  );
}
