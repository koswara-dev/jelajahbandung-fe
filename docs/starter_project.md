Berikut **starter project ReactJS + Vite + Tailwind CSS** yang sudah **siap dipakai** untuk aplikasi **Pariwisata – Jelajah Bandung**, sekaligus **daftar library penting** yang relevan dengan fitur **Wisatawan & Dinas**.

Saya susun **praktis + scalable** (siap dikembangkan ke production & integrasi backend).

---

## 1️⃣ Tech Stack Utama (Recommended)

### Core

- **React 19**
- **Vite** (build cepat & modern)
- **TypeScript** (wajib untuk app pemerintahan & jangka panjang)
- **Tailwind CSS**
- **React Router v7**

### UI & UX

- **shadcn/ui** → komponen modern & konsisten
- **Radix UI** → accessibility
- **Lucide-react** → icon
- **Framer Motion** → animasi

### State & Data

- **TanStack React Query** → fetch API & caching
- **Axios** → HTTP client
- **Zustand** → global state ringan

### Form & Validation

- **React Hook Form**
- **Zod**

### Map & Lokasi (Pariwisata)

- **Leaflet**
- **react-leaflet**

### Chart & Analitik (Dashboard Dinas)

- **Recharts**
- **date-fns**

### Auth & Security

- **JWT handling**
- **role-based route guard**
- **hCaptcha (anti spam pengaduan)**

---

## 2️⃣ Struktur Fitur → Mapping Library

| Fitur                | Library                           |
| -------------------- | --------------------------------- |
| Informasi Wisata     | React Query, Axios                |
| Event & Kalender     | date-fns, Recharts                |
| Pengaduan & Darurat  | React Hook Form, Zod, hCaptcha    |
| Feedback & Rating    | React Query                       |
| Dashboard Monitoring | Recharts                          |
| Manajemen Konten     | Form + Rich Text (TipTap / Quill) |
| Analitik & Laporan   | Recharts, Export PDF/Excel        |
| Map Wisata           | Leaflet                           |

---

## 3️⃣ Inisialisasi Project

```bash
npm create vite@latest jelajah-bandung -- --template react-ts
cd jelajah-bandung
npm install
```

---

## 4️⃣ Install Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**tailwind.config.js**

```js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

**src/index.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 5️⃣ Install Library Utama

```bash
npm install react-router-dom axios
npm install @tanstack/react-query zustand
npm install react-hook-form zod @hookform/resolvers
npm install framer-motion lucide-react
npm install recharts date-fns
npm install leaflet react-leaflet
npm install @hcaptcha/react-hcaptcha
```

---

## 6️⃣ Setup React Query

**src/main.tsx**

```tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
```

---

## 7️⃣ Routing Berdasarkan Role

**src/routes/index.tsx**

```tsx
import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "@/layouts/PublicLayout";
import AdminLayout from "@/layouts/AdminLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "wisata", element: <Wisata /> },
      { path: "event", element: <Event /> },
      { path: "pengaduan", element: <Pengaduan /> },
      { path: "feedback", element: <Feedback /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "konten", element: <Konten /> },
      { path: "laporan", element: <Laporan /> },
    ],
  },
]);
```

---

## 8️⃣ Struktur Folder (Best Practice)

```
src/
├── api/               → axios service
├── assets/
├── components/
│   ├── ui/            → shadcn
│   ├── maps/
│   ├── charts/
├── features/
│   ├── wisata/
│   ├── event/
│   ├── pengaduan/
│   ├── feedback/
│   ├── dashboard/
├── hooks/
├── layouts/
├── routes/
├── store/             → zustand
├── types/
├── utils/
└── main.tsx
```

---

## 9️⃣ Contoh Store Global (Zustand)

```ts
import { create } from "zustand";

type AuthState = {
  token: string | null;
  role: "WISATAWAN" | "DINAS" | null;
  setAuth: (token: string, role: AuthState["role"]) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  role: null,
  setAuth: (token, role) => set({ token, role }),
}));
```

---

## 🔐 Role & Hak Akses

| Role        | Akses                              |
| ----------- | ---------------------------------- |
| Wisatawan   | Wisata, Event, Pengaduan, Feedback |
| Admin Dinas | Dashboard, Konten, Analitik        |
| Super Admin | Semua                              |
