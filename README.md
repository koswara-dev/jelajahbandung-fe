# Jelajah Bandung - Frontend

Aplikasi web **Jelajah Bandung** starter project menggunakan **ReactJS + Vite + Tailwind CSS**. Project ini dirancang untuk platform pariwisata yang mencakup fitur untuk **Wisatawan** dan **Dinas**.

## 🚀 Memulai (Getting Started)

Ikuti langkah-langkah berikut untuk menjalankan project ini di komputer lokal Anda.

### Prasyarat

Pastikan Anda telah menginstal:

- Node.js (Versi LTS direkomendasikan)
- npm

### Instalasi dan Menjalankan

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Jalankan development server:**

   ```bash
   npm run dev
   ```

3. Buka browser dan akses URL yang muncul di terminal (biasanya `http://localhost:5173`).

---

## 🛠️ Tech Stack Utama

Project ini dibangun dengan teknologi modern yang praktis dan scalable:

### Core

- **React 19**
- **Vite** (Build tool yang cepat & modern)
- **TypeScript** (Wajib untuk standard aplikasi jangka panjang)
- **Tailwind CSS** (Utility-first CSS framework)
- **React Router v6** (Routing)

### UI & UX

- **shadcn/ui** (Komponen modern & konsisten)
- **Lucide-react** (Ikon)
- **Framer Motion** (Animasi)

### State & Data

- **TanStack React Query** (Data fetching & caching)
- **Axios** (HTTP client)
- **Zustand** (Global state management yang ringan)

### Form & Validation

- **React Hook Form**
- **Zod** (Validasi skema)

### Fitur Khusus

- **Leaflet / React Leaflet** (Peta & Lokasi Pariwisata)
- **Recharts** (Chart & Analitik untuk Dashboard Dinas)
- **date-fns** (Manipulasi tanggal)

---

## 📦 Fitur & Pustaka

| Fitur                    | Library / Teknologi            |
| :----------------------- | :----------------------------- |
| **Informasi Wisata**     | React Query, Axios             |
| **Event & Kalender**     | date-fns, Recharts             |
| **Pengaduan & Darurat**  | React Hook Form, Zod, hCaptcha |
| **Feedback & Rating**    | React Query                    |
| **Dashboard Monitoring** | Recharts                       |
| **Manajemen Konten**     | Form + Rich Text               |
| **Map Wisata**           | Leaflet                        |

---

## 📂 Struktur Folder

Struktur folder disusun mengikuti best practice untuk kemudahan maintainability:

```
src/
├── api/               # Axios service & API calls
├── assets/            # Static assets (images, fonts)
├── components/        # Reusable components
│   ├── ui/            # shadcn components
│   ├── maps/          # Map components
│   ├── charts/        # Chart components
├── features/          # Feature-based modules
│   ├── wisata/
│   ├── event/
│   ├── pengaduan/
│   ├── feedback/
│   ├── dashboard/
├── hooks/             # Custom React hooks
├── layouts/           # Page layouts (PublicLayout, AdminLayout)
├── routes/            # Application routing
├── store/             # Zustand stores
├── types/             # TypeScript type definitions
├── utils/             # Helper functions
└── main.tsx           # Entry point
```

---

## 🔐 Role & Hak Akses

| Role            | Akses                                 |
| :-------------- | :------------------------------------ |
| **Wisatawan**   | Wisata, Event, Pengaduan, Feedback    |
| **Admin Dinas** | Dashboard, Manajemen Konten, Analitik |
