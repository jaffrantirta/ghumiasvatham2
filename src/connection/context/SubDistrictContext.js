import { createContext, useContext } from "react";
import { supabase } from "@/connection/supabase";

const SubDistrictContext = createContext({});

export const useSubDistrict = () => useContext(SubDistrictContext);

export const showSubDistrictbyDistrict = (district_id) =>
  supabase.from("sub_districts").select("*").eq("district_id", district_id);

const UserProvider = () => {
  return {
    showSubDistrictbyDistrict,
  };
};

export default UserProvider;
