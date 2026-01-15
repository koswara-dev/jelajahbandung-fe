import { Link, Outlet } from "react-router-dom";
import { Menu, X, MapPin, Facebook, Instagram, Twitter, Youtube, Globe, Mail, Phone } from "lucide-react";
import { useState } from "react";

export default function PublicLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-green-100 selection:text-green-900">
      {/* Navbar */}
      <header className="fixed top-0 z-50 w-full border-b border-slate-100 bg-white/90 backdrop-blur-xl transition-all">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-white shadow-lg shadow-green-600/20 transition-transform group-hover:scale-105">
              <MapPin className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 leading-none">
                Jelajah<span className="text-green-600">Bandung</span>
              </span>
              <span className="text-[10px] font-medium text-slate-500 tracking-wider">EST. 2024</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <Link to="/wisata" className="hover:text-green-600 transition-colors">Wisata</Link>
            <Link to="/event" className="hover:text-green-600 transition-colors">Event</Link>
            <Link to="/event/kalender" className="hover:text-green-600 transition-colors">Kalender</Link>
            <Link to="/tentang" className="hover:text-green-600 transition-colors">Tentang</Link>
          </nav>

          {/* Right Area */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium text-slate-600 hover:text-green-600 px-4 py-2">Masuk</button>
            <button className="rounded-full bg-green-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-green-600/20 transition-all hover:bg-green-700 hover:shadow-green-600/30 hover:-translate-y-0.5 active:translate-y-0">
              Mulai Jelajah
            </button>
            <div className="h-10 w-10 rounded-full bg-slate-100 border border-slate-200 overflow-hidden ml-2 cursor-pointer hover:border-green-500 transition-colors">
               <img src="https://img.icons8.com/?size=100&id=NPW07SMh7Aco&format=png&color=000000" alt="User" className="h-full w-full object-cover" />
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 w-full border-b border-slate-100 bg-white shadow-xl md:hidden animate-in slide-in-from-top-2">
            <div className="container mx-auto flex flex-col gap-1 p-4">
              <Link to="/wisata" className="block rounded-lg px-4 py-3 text-sm font-medium hover:bg-slate-50 hover:text-green-600" onClick={() => setIsMenuOpen(false)}>Wisata</Link>
              <Link to="/event" className="block rounded-lg px-4 py-3 text-sm font-medium hover:bg-slate-50 hover:text-green-600" onClick={() => setIsMenuOpen(false)}>Event</Link>
              <Link to="/event" className="block rounded-lg px-4 py-3 text-sm font-medium hover:bg-slate-50 hover:text-green-600" onClick={() => setIsMenuOpen(false)}>Kalender</Link>
              <Link to="/tentang" className="block rounded-lg px-4 py-3 text-sm font-medium hover:bg-slate-50 hover:text-green-600" onClick={() => setIsMenuOpen(false)}>Tentang</Link>
              <hr className="my-2 border-slate-100" />
              <div className="flex flex-col gap-3 p-2">
                 <button className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium hover:bg-slate-50 text-slate-700">Masuk</button>
                 <button className="w-full rounded-lg bg-green-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-green-600/20">Mulai Jelajah</button>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-white">
                  <MapPin className="h-6 w-6" />
                </div>
                <span className="text-xl font-bold text-slate-900">
                  Jelajah<span className="text-green-600">Bandung</span>
                </span>
              </div>
              <p className="text-sm leading-relaxed text-slate-500 max-w-xs">
                Platform informasi pariwisata resmi untuk mengeksplorasi keajaiban alam, kuliner, dan budaya di Kota Bandung.
              </p>
              <div className="flex gap-4">
                 <a href="#" className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-green-50 hover:text-green-600 transition-colors">
                    <Facebook className="h-5 w-5" />
                 </a>
                 <a href="#" className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-green-50 hover:text-green-600 transition-colors">
                    <Instagram className="h-5 w-5" />
                 </a>
                 <a href="#" className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-green-50 hover:text-green-600 transition-colors">
                    <Twitter className="h-5 w-5" />
                 </a>
                 <a href="#" className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-green-50 hover:text-green-600 transition-colors">
                    <Youtube className="h-5 w-5" />
                 </a>
              </div>
            </div>
            
            <div>
              <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-slate-900">Navigasi</h3>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><Link to="/wisata" className="hover:text-green-600 transition-colors">Destinasi Wisata</Link></li>
                <li><Link to="/event" className="hover:text-green-600 transition-colors">Kalender Event</Link></li>
                <li><Link to="/pengaduan" className="hover:text-green-600 transition-colors">Layanan Publik</Link></li>
                <li><Link to="/feedback" className="hover:text-green-600 transition-colors">Feedback & Saran</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-slate-900">Bantuan</h3>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#" className="hover:text-green-600 transition-colors flex items-center gap-2"><Globe className="h-4 w-4" /> Pusat Bantuan</a></li>
                <li><a href="#" className="hover:text-green-600 transition-colors flex items-center gap-2"><Mail className="h-4 w-4" /> Hubungi Kami</a></li>
                <li><a href="#" className="hover:text-green-600 transition-colors flex items-center gap-2"><Phone className="h-4 w-4" /> Kontak Darurat</a></li>
                <li><a href="#" className="hover:text-green-600 transition-colors">Kebijakan Privasi</a></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-slate-900">Unduh Aplikasi</h3>
              <p className="mb-6 text-sm text-slate-500">Nikmati pengalaman menjelajah Bandung dalam genggaman Anda.</p>
              <div className="flex flex-col gap-3">
                <button className="flex items-center gap-3 rounded-xl bg-slate-900 px-4 py-3 text-left text-white transition-transform hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20">
                     <img src="https://img.icons8.com/?size=100&id=fKXXelWgP1B6&format=png&color=000000" alt="App Store" className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col">
                     <span className="text-[10px] font-medium opacity-80">Download on the</span>
                     <span className="text-sm font-bold">App Store</span>
                  </div>
                </button>
                <button className="flex items-center gap-3 rounded-xl bg-slate-900 px-4 py-3 text-left text-white transition-transform hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20">
                     <img src="https://img.icons8.com/?size=100&id=rZwnRdJyYqRi&format=png&color=000000" alt="Google Play" className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col">
                     <span className="text-[10px] font-medium opacity-80">Get it on</span>
                     <span className="text-sm font-bold">Google Play</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              © 2026 Jelajah Bandung. Made with <span className="text-red-500">♥</span> for Indonesia.
            </p>
            <div className="flex gap-6 text-xs text-slate-500 font-medium">
               <a href="#" className="hover:text-slate-900">Instagram</a>
               <a href="#" className="hover:text-slate-900">TikTok</a>
               <a href="#" className="hover:text-slate-900">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
