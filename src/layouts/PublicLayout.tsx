import { Link, Outlet } from "react-router-dom";
import { Menu, MapPin } from "lucide-react";
import { useState } from "react";

export default function PublicLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-600 text-white">
              <MapPin className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Jelajah<span className="text-green-600">Bandung</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link to="/" className="transition-colors hover:text-green-600">Beranda</Link>
            <Link to="/wisata" className="transition-colors hover:text-green-600">Wisata</Link>
            <Link to="/event" className="transition-colors hover:text-green-600">Event</Link>
            <Link to="/pengaduan" className="transition-colors hover:text-green-600">Pengaduan</Link>
            <Link to="/feedback" className="transition-colors hover:text-green-600">Feedback</Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium text-slate-600 hover:text-slate-900">Masuk</button>
            <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-700">
              Mulai Jelajah
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="border-b bg-white md:hidden">
            <div className="container mx-auto flex flex-col gap-4 p-4 text-sm font-medium">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Beranda</Link>
              <Link to="/wisata" onClick={() => setIsMenuOpen(false)}>Wisata</Link>
              <Link to="/event" onClick={() => setIsMenuOpen(false)}>Event</Link>
              <Link to="/pengaduan" onClick={() => setIsMenuOpen(false)}>Pengaduan</Link>
              <Link to="/feedback" onClick={() => setIsMenuOpen(false)}>Feedback</Link>
              <hr />
              <div className="flex flex-col gap-2">
                 <button className="w-full rounded-md border py-2">Masuk</button>
                 <button className="w-full rounded-md bg-slate-900 py-2 text-white">Mulai Jelajah</button>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 text-slate-300">
        <div className="container mx-auto grid gap-8 px-4 md:grid-cols-4 md:px-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-600 text-white">
                <MapPin className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold text-white">
                Jelajah<span className="text-green-500">Bandung</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Platform informasi pariwisata resmi untuk mengeksplorasi keajaiban alam, kuliner, dan budaya di Kota Bandung dan sekitarnya.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Menu</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/wisata" className="hover:text-green-500">Destinasi Wisata</Link></li>
              <li><Link to="/event" className="hover:text-green-500">Kalender Event</Link></li>
              <li><Link to="/pengaduan" className="hover:text-green-500">Layanan Darurat</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Dukungan</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-500">Pusat Bantuan</a></li>
              <li><a href="#" className="hover:text-green-500">Kebijakan Privasi</a></li>
              <li><a href="#" className="hover:text-green-500">Hubungi Kami</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Newsletter</h3>
            <p className="mb-4 text-sm text-slate-400">Dapatkan update event terbaru di Bandung.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email Anda" 
                className="w-full rounded-md border-none bg-slate-800 px-3 py-2 text-sm text-white focus:ring-2 focus:ring-green-500"
              />
              <button className="rounded-md bg-green-600 px-3 py-2 text-white hover:bg-green-700">
                Kirim
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center text-xs text-slate-500 border-t border-slate-800 pt-8">
          &copy; 2024 Jelajah Bandung. All rights reserved. Made with ❤️ by Frontend Team.
        </div>
      </footer>
    </div>
  );
}
