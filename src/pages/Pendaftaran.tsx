import { useState } from "react";
import { useRegistration } from "@/contexts/RegistrationContext";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const jurusanOptions = ["RPL", "TKJ", "DKV", "Akuntansi"];

const Pendaftaran = () => {
  const { addRegistrant } = useRegistration();
  const navigate = useNavigate();
  const [form, setForm] = useState({ nama: "", nisn: "", asalSekolah: "", email: "", jurusan: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nama || !form.nisn || !form.asalSekolah || !form.email || !form.jurusan) {
      toast.error("Harap isi semua field!");
      return;
    }
    addRegistrant(form);
    toast.success("Pendaftaran berhasil dikirim!");
    setForm({ nama: "", nisn: "", asalSekolah: "", email: "", jurusan: "" });
  };

  const inputClass = "w-full px-4 py-3 bg-card text-foreground theme-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary card-shadow";

  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <h1 className="font-heading font-black text-3xl md:text-5xl text-center mb-4">Formulir Pendaftaran</h1>
      <p className="text-center text-muted-foreground mb-10">Isi data diri untuk mendaftar sebagai calon peserta didik baru</p>

      <form onSubmit={handleSubmit} className="bg-card p-8 rounded-lg theme-border elevated-shadow space-y-5">
        <div>
          <label className="block font-heading font-semibold mb-2">Nama Lengkap</label>
          <input value={form.nama} onChange={(e) => setForm({ ...form, nama: e.target.value })} className={inputClass} placeholder="Masukkan nama lengkap" />
        </div>
        <div>
          <label className="block font-heading font-semibold mb-2">NISN</label>
          <input value={form.nisn} onChange={(e) => setForm({ ...form, nisn: e.target.value })} className={inputClass} placeholder="Masukkan NISN" />
        </div>
        <div>
          <label className="block font-heading font-semibold mb-2">Asal Sekolah</label>
          <input value={form.asalSekolah} onChange={(e) => setForm({ ...form, asalSekolah: e.target.value })} className={inputClass} placeholder="Masukkan asal sekolah" />
        </div>
        <div>
          <label className="block font-heading font-semibold mb-2">Email</label>
          <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} placeholder="email@contoh.com" />
        </div>
        <div>
          <label className="block font-heading font-semibold mb-2">Pilihan Jurusan</label>
          <select value={form.jurusan} onChange={(e) => setForm({ ...form, jurusan: e.target.value })} className={inputClass}>
            <option value="">-- Pilih Jurusan --</option>
            {jurusanOptions.map((j) => (
              <option key={j} value={j}>{j}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="w-full py-4 bg-primary text-primary-foreground font-heading font-bold text-lg theme-border elevated-shadow rounded-lg hover:opacity-90 transition-all">
          Kirim Pendaftaran
        </button>
      </form>
    </div>
  );
};

export default Pendaftaran;
