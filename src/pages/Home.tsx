import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { GraduationCap, BookOpen, Users, ClipboardList } from "lucide-react";

const features = [
  { icon: BookOpen, title: "4 Program Keahlian", desc: "RPL, TKJ, DKV, dan Akuntansi" },
  { icon: Users, title: "Guru Profesional", desc: "Tenaga pendidik bersertifikasi" },
  { icon: ClipboardList, title: "Pendaftaran Online", desc: "Proses mudah dan cepat" },
];

const Home = () => {
  const theme = useTheme();
  const base = theme === "brutal" ? "/brutal" : "/professional";

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 md:py-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-muted rounded-full text-sm font-medium text-muted-foreground theme-border">
            <GraduationCap className="w-4 h-4" />
            Penerimaan Peserta Didik Baru 2026/2027
          </div>
          <h1 className="font-heading font-black text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight">
            Masa Depanmu{" "}
            <span className="text-primary">Dimulai</span>{" "}
            <span className={theme === "brutal" ? "text-accent" : "text-primary"}>Di Sini</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            SMK Nusantara mencetak lulusan siap kerja dan siap kuliah dengan kurikulum terkini dan fasilitas modern.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={`${base}/pendaftaran`}
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-heading font-bold text-lg theme-border elevated-shadow rounded-lg hover:opacity-90 transition-all">
              Daftar Sekarang
            </Link>
            <Link to={`${base}/jurusan`}
              className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-secondary-foreground font-heading font-bold text-lg theme-border card-shadow rounded-lg hover:opacity-90 transition-all">
              Lihat Jurusan
            </Link>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-card p-8 rounded-lg theme-border card-shadow text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary text-primary-foreground rounded-lg theme-border mb-4">
                <f.icon className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">{f.title}</h3>
              <p className="text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
