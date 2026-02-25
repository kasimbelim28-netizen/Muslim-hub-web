<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>
<script>

const SUPABASE_URL="https://xbwgottrnhubmpxhvkrk.supabase.co";

const SUPABASE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhid2dvdHRybmh1Ym1weGh2a3JrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE3MzI2NzMsImV4cCI6MjA4NzMwODY3M30.EBKwVxdzCtVv9P_S7-IFs1V-NeXRwhuFAL6FUNBEsvk";

window.db = window.supabase.createClient(SUPABASE_URL,SUPABASE_KEY);

</script>