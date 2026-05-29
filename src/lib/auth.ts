import { supabase } from './supabase';
import type { AuthSession } from '@/types';

export async function signUpWithEmail(
  email: string,
  password: string,
  metadata: {
    username: string;
    displayName: string;
    schoolId?: string;
    courseId?: string;
    year?: number;
  }
) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: metadata,
    },
  });

  if (error) throw error;

  if (data.user) {
    // Create user profile
    await supabase.from('users').insert([
      {
        id: data.user.id,
        email,
        username: metadata.username,
        display_name: metadata.displayName,
        school_id: metadata.schoolId || null,
        course_id: metadata.courseId || null,
        year: metadata.year || null,
      },
    ]);
  }

  return data;
}

export async function signInWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return data;
}

export async function signInWithOAuth(provider: 'google' | 'github') {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback`,
    },
  });

  if (error) throw error;
  return data;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

export async function resetPassword(email: string) {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/reset-password`,
  });

  if (error) throw error;
}

export async function updatePassword(newPassword: string) {
  const { data, error } = await supabase.auth.updateUser({
    password: newPassword,
  });

  if (error) throw error;
  return data;
}
