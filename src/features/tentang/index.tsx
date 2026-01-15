import { Building2, Info, ArrowRight, MessageSquareWarning, ShieldCheck, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";

export default function Tentang() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-12 pt-8">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white py-20 px-8 mb-16 text-center shadow-xl">
             <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1596401057633-565652ca65a0?q=80&w=1280&auto=format&fit=crop')] bg-cover bg-center"></div>
             <div className="relative z-10 max-w-3xl mx-auto space-y-6">
                 <div className="flex items-center justify-center gap-3 mb-2">
                    <div className="h-12 w-12 rounded-xl bg-green-600 flex items-center justify-center text-white shadow-lg shadow-green-600/20">
                      <img src="https://img.icons8.com/?size=100&id=A07DRPfceaeP&format=png&color=000000" alt="Logo" className="h-8 w-8" />
                    </div>
                 </div>
                 <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                    Mengenal Jelajah<span className="text-green-500">Bandung</span>
                 </h1>
                 <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                    Platform informasi pariwisata resmi yang didedikasikan untuk memperkenalkan pesona Kota Bandung kepada dunia. Kami menghubungkan wisatawan dengan kekayaan budaya, alam, dan kreativitas Paris van Java.
                 </p>
             </div>
        </div>

        {/* Dinas Pariwisata Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1 relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-100 rounded-full blur-2xl"></div>
                <div className="relative bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 space-y-6 text-center lg:text-left z-10">
                    <div className="flex items-center justify-center lg:justify-start gap-4 mb-2">
                        <div className="h-12 w-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                            <Building2 className="h-6 w-6" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-slate-900">Dinas Kebudayaan & Pariwisata</h2>
                            <p className="text-xs font-medium text-slate-500 uppercase tracking-widest">Kota Bandung</p>
                        </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                        Jelajah Bandung dikelola langsung di bawah pengawasan Dinas Kebudayaan dan Pariwisata Kota Bandung. Misi kami adalah mewujudkan Bandung sebagai destinasi wisata kelas dunia yang berbudaya, berkelanjutan, dan inklusif.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                         <div className="p-4 bg-slate-50 rounded-2xl text-center">
                             <h3 className="text-2xl font-extrabold text-blue-600 mb-1">500+</h3>
                             <p className="text-xs font-bold text-slate-500">Destinasi Terdaftar</p>
                         </div>
                         <div className="p-4 bg-slate-50 rounded-2xl text-center">
                             <h3 className="text-2xl font-extrabold text-green-600 mb-1">2M+</h3>
                             <p className="text-xs font-bold text-slate-500">Wisatawan Tahunan</p>
                         </div>
                    </div>
                </div>
            </div>
            <div className="order-1 lg:order-2">
                 <img src="https://images.unsplash.com/photo-1564901236182-daaec707fbf3?q=80&w=774&auto=format&fit=crop" alt="Bandung City" className="rounded-[2.5rem] shadow-2xl rotate-2 hover:rotate-0 transition-all duration-700 w-full object-cover h-[400px]" />
            </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
                { icon: Info, title: "Informasi Terpercaya", desc: "Data destinasi yang akurat, terkurasi, dan selalu diperbarui.", color: "bg-blue-50 text-blue-600" },
                { icon: ShieldCheck, title: "Wisata Aman", desc: "Panduan keamanan dan kenyamanan bagi wisatawan lokal & mancanegara.", color: "bg-green-50 text-green-600" },
                { icon: HeartHandshake, title: "Pelayanan Publik", desc: "Kanal pengaduan dan aspirasi yang responsif untuk kemajuan pariwisata.", color: "bg-orange-50 text-orange-600" }
            ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
                    <div className={`h-14 w-14 ${item.color} rounded-2xl flex items-center justify-center mb-6`}>
                        <item.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
            ))}
        </div>

        {/* CTA Pengaduan */}
        <div className="bg-gradient-to-br from-green-600 to-emerald-800 rounded-[3rem] p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl shadow-green-900/20">
             <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
             <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                 <div className="inline-flex h-16 w-16 bg-white/20 backdrop-blur-md rounded-full items-center justify-center mb-2">
                    <MessageSquareWarning className="h-8 w-8 text-white" />
                 </div>
                 <h2 className="text-3xl md:text-4xl font-extrabold">Layanan Pengaduan Wisata</h2>
                 <p className="text-green-100 text-lg leading-relaxed">
                    Menemukan fasilitas yang rusak? Mengalami kendala di lokasi wisata? Atau punya saran untuk Pariwisata Bandung? Suara Anda sangat berarti bagi kami.
                 </p>
                 <div className="pt-4">
                     <Link to="/pengaduan" className="inline-flex items-center gap-3 bg-white text-green-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-all hover:scale-105 shadow-lg">
                        Buat Laporan Pengaduan
                        <ArrowRight className="h-5 w-5" />
                     </Link>
                 </div>
                 <p className="text-xs text-green-200/60 mt-4">*Laporan Anda akan ditindaklanjuti oleh tim Dinas Kebudayaan & Pariwisata</p>
             </div>
        </div>

      </div>
    </div>
  );
}
