import { createClient } from "@supabase/supabase-js";

const projectURL = "https://iqmnnuyockhuoximljkc.supabase.co";
const projectKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxbW5udXlvY2todW94aW1samtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYwODQwMzAsImV4cCI6MjAyMTY2MDAzMH0.87cO8bKuXvxMAJ53xVn6SZqRqVOvitHXTs1lwVkh3_0";

export const supabase = createClient(projectURL, projectKey);
