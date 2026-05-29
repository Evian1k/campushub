// Auto-generated Supabase types
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          username: string
          display_name: string
          avatar_url: string | null
          bio: string | null
          school_id: string | null
          course_id: string | null
          year: number | null
          verified: boolean
          xp: number
          level: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          username: string
          display_name: string
          avatar_url?: string | null
          bio?: string | null
          school_id?: string | null
          course_id?: string | null
          year?: number | null
          verified?: boolean
          xp?: number
          level?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          username?: string
          display_name?: string
          avatar_url?: string | null
          bio?: string | null
          school_id?: string | null
          course_id?: string | null
          year?: number | null
          verified?: boolean
          xp?: number
          level?: number
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}
