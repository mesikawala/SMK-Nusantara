import { User } from "lucide-react";

const guruList = [
  { nama: "Budi Santoso, S.Pd.", mapel: "Pemrograman Web", foto: null },
  { nama: "Siti Nurhaliza, M.Kom.", mapel: "Jaringan Komputer", foto: null },
  { nama: "Ahmad Fauzi, S.Ds.", mapel: "Desain Grafis", foto: null },
  { nama: "Dewi Lestari, S.E.", mapel: "Akuntansi Dasar", foto: null },
  { nama: "Rudi Hermawan, S.Kom.", mapel: "Basis Data", foto: null },
  { nama: "Maya Putri, M.Pd.", mapel: "Matematika", foto: null },
];

const Guru = () => (
  <div className="container mx-auto px-4 py-16">
    <h1 className="font-heading font-black text-3xl md:text-5xl text-center mb-4">Tenaga Pendidik</h1>
    <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">Guru-guru berpengalaman dan bersertifikasi profesional</p>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {guruList.map((g) => (
        <div key={g.nama} className="bg-card rounded-lg theme-border card-shadow text-center p-6">
          <div className="w-24 h-24 mx-auto mb-4 bg-muted rounded-full theme-border flex items-center justify-center">
            <User className="w-10 h-10 text-muted-foreground" />
          </div>
          <h3 className="font-heading font-bold text-lg">{g.nama}</h3>
          <p className="text-muted-foreground text-sm mt-1">{g.mapel}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Guru;
