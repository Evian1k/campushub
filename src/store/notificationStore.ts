import { create } from 'zustand';

interface NotificationStore {
  unreadCount: number;
  notifications: any[];
  incrementUnread: () => void;
  decrementUnread: () => void;
  resetUnread: () => void;
  setNotifications: (notifications: any[]) => void;
  addNotification: (notification: any) => void;
}

export const useNotificationStore = create<NotificationStore>((set) => ({
  unreadCount: 0,
  notifications: [],
  incrementUnread: () =>
    set((state) => ({ unreadCount: state.unreadCount + 1 })),
  decrementUnread: () =>
    set((state) => ({ unreadCount: Math.max(0, state.unreadCount - 1) })),
  resetUnread: () => set({ unreadCount: 0 }),
  setNotifications: (notifications) => set({ notifications }),
  addNotification: (notification) =>
    set((state) => ({
      notifications: [notification, ...state.notifications],
    })),
}));
