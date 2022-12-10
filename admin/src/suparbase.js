import { createClient } from "@supabase/supabase-js";

const projectURL = "https://zyzhazwvawtynjeafdws.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5emhhend2YXd0eW5qZWFmZHdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA2MjgwMjcsImV4cCI6MTk4NjIwNDAyN30.zLUOPGIv1vB7i7AFrPBYnIFcAEN9nCVNRwlDVhxh35s";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
 projectURL, supabaseKey
);


