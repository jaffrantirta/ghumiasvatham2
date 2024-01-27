"use client";
import { store } from "@/connection/context/UserContext";
import { supabase } from "@/connection/supabase";
import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Home() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const executeSubmit = async (e) => {
    e.preventDefault();
    const { error } = await store({
      name: name,
      phone: phone,
      email: email,
    });

    error ? Swal.fire("Error") : success();
  };

  const success = () => {
    Swal.fire("Berhasil");
    setEmail("");
    setName("");
    setPhone("");
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="rounded-3xl p-5 bg-white shadow-md">
        <h1 className="text-center text-slate-500 py-4">Daftar</h1>
        <form onSubmit={executeSubmit}>
          <div>
            <Label>Nama</Label>
            <TextInput
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masukan nama"
            />
          </div>
          <div>
            <Label>Nomor WhatsApp</Label>
            <TextInput
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="number"
              placeholder="Masukan nomor WhatsApp"
            />
          </div>
          <div>
            <Label>Email</Label>
            <TextInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Masukan email"
            />
          </div>
          <div className="pt-3">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </main>
  );
}
