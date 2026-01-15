import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "@/layouts/PublicLayout";
import AdminLayout from "@/layouts/AdminLayout";
import Home from "@/features/home";
import Wisata from "@/features/wisata";
import DetailWisata from "@/features/wisata/DetailWisata";
import Event from "@/features/event";
import DetailEvent from "@/features/event/DetailEvent";
import KalenderEvent from "@/features/event/KalenderEvent";
import Pengaduan from "@/features/pengaduan";
import Feedback from "@/features/feedback";
import Dashboard from "@/features/dashboard";
import Konten from "@/features/konten";
import Laporan from "@/features/laporan";
import Tentang from "@/features/tentang";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "wisata", element: <Wisata /> },
      { path: "wisata/:id", element: <DetailWisata /> },
      { path: "event", element: <Event /> },
      { path: "event/kalender", element: <KalenderEvent /> },
      { path: "event/:id", element: <DetailEvent /> },
      { path: "pengaduan", element: <Pengaduan /> },
      { path: "feedback", element: <Feedback /> },
      { path: "tentang", element: <Tentang /> },
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
