import { create } from 'zustand';
import type { Post } from '@/types';

interface FeedStore {
  posts: Post[];
  isLoading: boolean;
  hasMore: boolean;
  cursor: string | null;
  addPosts: (posts: Post[]) => void;
  clearPosts: () => void;
  updatePost: (postId: string, post: Partial<Post>) => void;
  deletePost: (postId: string) => void;
  setCursor: (cursor: string | null) => void;
  setLoading: (loading: boolean) => void;
  setHasMore: (hasMore: boolean) => void;
}

export const useFeedStore = create<FeedStore>((set) => ({
  posts: [],
  isLoading: false,
  hasMore: true,
  cursor: null,
  addPosts: (posts) =>
    set((state) => ({
      posts: [...state.posts, ...posts],
    })),
  clearPosts: () => set({ posts: [], cursor: null }),
  updatePost: (postId, post) =>
    set((state) => ({
      posts: state.posts.map((p) =>
        p.id === postId ? { ...p, ...post } : p
      ),
    })),
  deletePost: (postId) =>
    set((state) => ({
      posts: state.posts.filter((p) => p.id !== postId),
    })),
  setCursor: (cursor) => set({ cursor }),
  setLoading: (loading) => set({ isLoading: loading }),
  setHasMore: (hasMore) => set({ hasMore }),
}));
