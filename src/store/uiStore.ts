import { create } from 'zustand';

interface UIStore {
  isSidebarOpen: boolean;
  isCreateModalOpen: boolean;
  selectedTab: 'home' | 'tea' | 'notes' | 'marketplace' | 'inbox' | 'profile';
  toggleSidebar: () => void;
  toggleCreateModal: () => void;
  setSelectedTab: (tab: UIStore['selectedTab']) => void;
  setCreateModalOpen: (open: boolean) => void;
}

export const useUIStore = create<UIStore>((set) => ({
  isSidebarOpen: true,
  isCreateModalOpen: false,
  selectedTab: 'home',
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  toggleCreateModal: () =>
    set((state) => ({ isCreateModalOpen: !state.isCreateModalOpen })),
  setSelectedTab: (tab) => set({ selectedTab: tab }),
  setCreateModalOpen: (open) => set({ isCreateModalOpen: open }),
}));
