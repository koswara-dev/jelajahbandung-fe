import { create } from "zustand";

type AuthState = {
  token: string | null;
  role: "WISATAWAN" | "DINAS" | null;
  setAuth: (token: string, role: AuthState["role"]) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  role: null,
  setAuth: (token, role) => set({ token, role }),
  logout: () => set({ token: null, role: null }),
}));
