import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Initialize Supabase client
const supabaseUrl = 'https://qkgkhsqfpseeljhasirb.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFrZ2toc3FmcHNlZWxqaGFzaXJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc4NjM2MDIsImV4cCI6MjA2MzQzOTYwMn0.DR22SdNqi8uQ1AjUmufE1ctQMLc79XjRTI2AbTsG9w8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
}); 