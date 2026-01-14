import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "@/layouts/PublicLayout";
import AdminLayout from "@/layouts/AdminLayout";
import Home from "@/features/home";
import Wisata from "@/features/wisata";
import Event from "@/features/event";
import Pengaduan from "@/features/pengaduan";
import Feedback from "@/features/feedback";
import Dashboard from "@/features/dashboard";
import Konten from "@/features/konten";
import Laporan from "@/features/laporan";

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
