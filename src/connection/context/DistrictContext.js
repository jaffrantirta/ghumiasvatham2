import { createContext, useContext } from "react";
import { supabase } from "@/connection/supabase";

const DistrictContext = createContext({});

export const useDistrict = () => useContext(DistrictContext);

export const showDistrictByRegency = (regency_id) =>
  supabase.from("districts").select("*").eq("regency_id", regency_id);

const UserProvider = () => {
  return {
    showDistrictByRegency,
  };
};

export default UserProvider;
