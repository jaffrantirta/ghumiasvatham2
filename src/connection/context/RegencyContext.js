import { createContext, useContext } from "react";
import { supabase } from "@/connection/supabase";

const RegencyContext = createContext({});

export const useRegion = () => useContext(RegencyContext);

export const show = () => supabase.from("regencies").select("*");

const UserProvider = () => {
  return {
    show,
  };
};

export default UserProvider;
