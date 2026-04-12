import { Code, Wifi, Palette, Calculator } from "lucide-react";

const jurusanList = [
  { icon: Code, name: "Rekayasa Perangkat Lunak (RPL)", desc: "Pelajari pemrograman, pengembangan web, dan mobile app development." },
  { icon: Wifi, name: "Teknik Komputer & Jaringan (TKJ)", desc: "Kuasai jaringan komputer, server, dan keamanan siber." },
  { icon: Palette, name: "Desain Komunikasi Visual (DKV)", desc: "Ekspresikan kreativitas dalam desain grafis, branding, dan multimedia." },
  { icon: Calculator, name: "Akuntansi", desc: "Dalami ilmu keuangan, pembukuan, dan perpajakan." },
];

const Jurusan = () => (
  <div className="container mx-auto px-4 py-16">
    <h1 className="font-heading font-black text-3xl md:text-5xl text-center mb-4">Program Keahlian</h1>
    <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">Pilih jurusan yang sesuai dengan minat dan bakatmu</p>
    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {jurusanList.map((j) => (
        <div key={j.name} className="bg-card p-8 rounded-lg theme-border card-shadow flex gap-5">
          <div className="flex-shrink-0 w-14 h-14 bg-primary text-primary-foreground rounded-lg theme-border flex items-center justify-center">
            <j.icon className="w-7 h-7" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-lg mb-1">{j.name}</h3>
            <p className="text-muted-foreground text-sm">{j.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Jurusan;
