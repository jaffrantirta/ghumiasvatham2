import { createClient } from "@supabase/supabase-js";

const projectURL = "https://pfleqvstzchssgwpjgzx.supabase.co";
const projectKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmbGVxdnN0emNoc3Nnd3BqZ3p4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkyMDM4OTMsImV4cCI6MjAyNDc3OTg5M30.pZhHN78N_Tm4mTjfFC0ZPuIgVVUe8PK0HuaCaHWMFL8";

export const supabase = createClient(projectURL, projectKey);
