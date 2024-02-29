"use client";
import { showDistrictByRegency } from "@/connection/context/DistrictContext";
import { show } from "@/connection/context/RegencyContext";
import { showSubDistrictbyDistrict } from "@/connection/context/SubDistrictContext";
import { store } from "@/connection/context/UserContext";
import { Button, Dropdown, Label, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function Home() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [regencies, setRegencies] = useState(null);
  const [regency, setRegency] = useState(null);
  const [districts, setDistricts] = useState(null);
  const [district, setDistrict] = useState(null);
  const [subDistricts, setSubDistricts] = useState(null);
  const [subDistrict, setSubDistrict] = useState(null);
  const executeSubmit = async (e) => {
    e.preventDefault();
    const { error } = await store({
      name: name,
      phone: convertPhoneNumber(phone),
      email: email,
      user_from: "nugrahita pendit",
      data: {
        address: {
          regency: regency,
          district: district,
          sub_district: subDistrict,
        },
      },
    });

    error ? Swal.fire("Error") : success();
  };

  const convertPhoneNumber = (phoneNumber) => {
    if (phoneNumber.startsWith("08")) {
      return "628" + phoneNumber.slice(2);
    } else {
      return phoneNumber;
    }
  };

  const success = () => {
    Swal.fire("Berhasil");
    setEmail("");
    setName("");
    setPhone("");
    setRegency(null);
    setDistrict(null);
    setSubDistrict(null);
    setDistricts(null);
    setSubDistricts(null);
  };

  const regencySelected = async (r) => {
    setRegency(r.name);
    let { data, error } = await showDistrictByRegency(r.id);
    error &&
      Swal.fire({
        title: "Oops! ada yang salah",
        icon: "error",
      });
    setDistricts(data);
  };
  const districtSelected = async (d) => {
    setDistrict(d.name);
    let { data, error } = await showSubDistrictbyDistrict(d.id);
    error &&
      Swal.fire({
        title: "Oops! ada yang salah",
        icon: "error",
      });
    setSubDistricts(data);
  };
  const subDistrictSelected = async (s) => {
    setSubDistrict(s.name);
  };

  useEffect(() => {
    async function getRegion() {
      let { data, error } = await show();
      error &&
        Swal.fire({
          title: "Oops! ada yang salah",
          icon: "error",
        });
      setRegencies(data);
    }
    getRegion();
  }, []);
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
          <div className="py-5">
            <Dropdown label={regency || "Pilih Kabupaten/Kota"}>
              {regencies &&
                regencies.map((r, i) => (
                  <Dropdown.Item onClick={() => regencySelected(r)} key={i}>
                    {r.name}
                  </Dropdown.Item>
                ))}
            </Dropdown>
          </div>
          <div className="py-5">
            <Dropdown label={district || "Pilih Kecamatan"}>
              {districts &&
                districts.map((d, i) => (
                  <Dropdown.Item onClick={() => districtSelected(d)} key={i}>
                    {d.name}
                  </Dropdown.Item>
                ))}
            </Dropdown>
          </div>
          <div className="py-5">
            <Dropdown label={subDistrict || "Pilih Kelurahan/Desa"}>
              {subDistricts &&
                subDistricts.map((s, i) => (
                  <Dropdown.Item onClick={() => subDistrictSelected(s)} key={i}>
                    {s.name}
                  </Dropdown.Item>
                ))}
            </Dropdown>
          </div>
          <div className="pt-3">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </main>
  );
}
