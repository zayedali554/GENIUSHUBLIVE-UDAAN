// Global Supabase client initialisation
// Load this file AFTER the `@supabase/supabase-js` CDN script
// and BEFORE any project files that need to use Supabase.

(function () {
  const SUPABASE_URL = 'https://wvfltuxmtotdaxhdfbus.supabase.co';
  const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind2Zmx0dXhtdG90ZGF4aGRmYnVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIwODA2NjMsImV4cCI6MjA2NzY1NjY2M30.ePYNBpZG-KGfqY4iS_3FI1ILTYoP3EpKYK8lt7Pmlj4';

  // Avoid re-creating if it already exists
  if (!window.supabaseClient && window.supabase) {
    window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
  }
})();
