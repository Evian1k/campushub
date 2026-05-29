import { useCallback } from 'react';
import { supabase } from '@/lib/supabase';
import { useAuthStore } from '@/store/authStore';

export function useRealtime<T = any>(
  table: string,
  filter?: string
) {
  const { session } = useAuthStore();

  const subscribe = useCallback(
    (callback: (data: T) => void) => {
      if (!session) return;

      let query = supabase
        .channel(`public:${table}`)
        .on(
          'postgres_changes',
          {
            event: '*',
            schema: 'public',
            table,
            filter,
          },
          (payload) => {
            callback(payload as T);
          }
        )
        .subscribe();

      return () => {
        query.unsubscribe();
      };
    },
    [session, table, filter]
  );

  return { subscribe };
}
