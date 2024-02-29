import { createContext, useContext } from "react";
import { supabase } from "@/connection/supabase";

const UserContext = createContext({});

export const useUser = () => useContext(UserContext);

export const store = ({ name, phone, email, data, user_from }) =>
  supabase
    .from("users")
    .insert([
      {
        name: name,
        phone: phone,
        email: email,
        data: data,
        user_from: user_from,
      },
    ]);

const UserProvider = () => {
  return {
    store,
  };
};

export default UserProvider;
