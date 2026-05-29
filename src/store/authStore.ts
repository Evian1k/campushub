import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User, AuthSession } from '@/types';

interface AuthStore {
  user: User | null;
  session: AuthSession | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  setSession: (session: AuthSession | null) => void;
  setLoading: (loading: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>()(persist(
  (set) => ({
    user: null,
    session: null,
    isLoading: false,
    isAuthenticated: false,
    setUser: (user) => set({ user, isAuthenticated: !!user }),
    setSession: (session) => set({ session }),
    setLoading: (loading) => set({ isLoading: loading }),
    logout: () => set({ user: null, session: null, isAuthenticated: false }),
  }),
  {
    name: 'auth-storage',
  }
));
