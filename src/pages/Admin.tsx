import { useRegistration } from "@/contexts/RegistrationContext";
import { toast } from "sonner";
import { CheckCircle, XCircle } from "lucide-react";

const statusBadge = (status: string) => {
  if (status === "accepted") return <span className="px-3 py-1 bg-success text-success-foreground text-xs font-bold rounded-full">Diterima</span>;
  if (status === "rejected") return <span className="px-3 py-1 bg-destructive text-destructive-foreground text-xs font-bold rounded-full">Ditolak</span>;
  return <span className="px-3 py-1 bg-warning text-warning-foreground text-xs font-bold rounded-full">Pending</span>;
};

const Admin = () => {
  const { registrants, updateStatus } = useRegistration();

  const handleAcc = (id: string, email: string) => {
    updateStatus(id, "accepted");
    toast.success(`Email Berhasil Dikirim ke ${email}: Selamat Anda Diterima di SMK!`);
  };

  const handleReject = (id: string, email: string) => {
    updateStatus(id, "rejected");
    toast.error(`Email Berhasil Dikirim ke ${email}: Maaf, Anda Belum Berhasil.`);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="font-heading font-black text-3xl md:text-5xl text-center mb-4">Dashboard Admin</h1>
      <p className="text-center text-muted-foreground mb-10">Kelola data pendaftar calon peserta didik baru</p>

      {registrants.length === 0 ? (
        <div className="bg-card p-12 rounded-lg theme-border card-shadow text-center">
          <p className="text-muted-foreground text-lg">Belum ada pendaftar. Data akan muncul setelah ada yang mendaftar.</p>
        </div>
      ) : (
        <div className="bg-card rounded-lg theme-border elevated-shadow overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border bg-muted">
                <th className="px-4 py-3 font-heading font-bold text-sm">Nama</th>
                <th className="px-4 py-3 font-heading font-bold text-sm">NISN</th>
                <th className="px-4 py-3 font-heading font-bold text-sm hidden md:table-cell">Asal Sekolah</th>
                <th className="px-4 py-3 font-heading font-bold text-sm hidden sm:table-cell">Email</th>
                <th className="px-4 py-3 font-heading font-bold text-sm">Jurusan</th>
                <th className="px-4 py-3 font-heading font-bold text-sm">Status</th>
                <th className="px-4 py-3 font-heading font-bold text-sm">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {registrants.map((r) => (
                <tr key={r.id} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-medium">{r.nama}</td>
                  <td className="px-4 py-3">{r.nisn}</td>
                  <td className="px-4 py-3 hidden md:table-cell">{r.asalSekolah}</td>
                  <td className="px-4 py-3 hidden sm:table-cell">{r.email}</td>
                  <td className="px-4 py-3">{r.jurusan}</td>
                  <td className="px-4 py-3">{statusBadge(r.status)}</td>
                  <td className="px-4 py-3">
                    {r.status === "pending" ? (
                      <div className="flex gap-2">
                        <button onClick={() => handleAcc(r.id, r.email)} className="p-2 bg-success text-success-foreground rounded-lg theme-border hover:opacity-80" title="ACC">
                          <CheckCircle className="w-5 h-5" />
                        </button>
                        <button onClick={() => handleReject(r.id, r.email)} className="p-2 bg-destructive text-destructive-foreground rounded-lg theme-border hover:opacity-80" title="Tolak">
                          <XCircle className="w-5 h-5" />
                        </button>
                      </div>
                    ) : (
                      <span className="text-muted-foreground text-sm">Selesai</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Admin;
