import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  login: (token) => set({ isAuthenticated: true }),
  logout: () => set({ isAuthenticated: false }),
}));
