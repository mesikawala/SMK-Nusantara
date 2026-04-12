import { Sparkles, Building2, Download } from "lucide-react";

const Index = () => (
  <div className="min-h-screen flex items-center justify-center p-4" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', fontFamily: "'Inter', sans-serif" }}>
    <div className="max-w-3xl w-full text-center">
      <h1 className="font-bold text-4xl md:text-5xl mb-3" style={{ color: '#1e293b' }}>
        SMK Nusantara
      </h1>
      <p className="text-lg mb-4" style={{ color: '#64748b' }}>Dua variasi desain website — masing-masing file HTML terpisah</p>
      <p className="text-sm mb-12" style={{ color: '#94a3b8' }}>Download file lalu buka di browser untuk melihat website lengkap</p>

      <div className="grid md:grid-cols-2 gap-6">
        <a href="/smk-neo-brutalism.html" target="_blank" className="group block">
          <div className="p-8 text-left transition-transform hover:-translate-y-1"
            style={{ background: '#FFF9E6', border: '4px solid #000', boxShadow: '6px 6px 0 0 #000' }}>
            <div className="w-12 h-12 flex items-center justify-center mb-4"
              style={{ background: '#A855F7', border: '4px solid #000', boxShadow: '3px 3px 0 0 #000' }}>
              <Sparkles className="w-6 h-6" style={{ color: '#fff' }} />
            </div>
            <h2 className="text-2xl mb-2" style={{ fontFamily: "'Lexend', sans-serif", fontWeight: 900 }}>
              Versi A: Neo-Brutalism
            </h2>
            <p className="text-sm mb-4" style={{ color: '#374151' }}>
              Warna mencolok, border tebal, shadow tajam, font bold — kesan berani dan trendy.
            </p>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm group-hover:opacity-80"
              style={{ background: '#000', color: '#fff', fontFamily: "'Lexend', sans-serif", fontWeight: 700 }}>
              <Download className="w-4 h-4" /> Buka Website
            </span>
          </div>
        </a>

        <a href="/smk-profesional-clean.html" target="_blank" className="group block">
          <div className="p-8 text-left transition-all hover:-translate-y-1"
            style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '16px', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}>
            <div className="w-12 h-12 flex items-center justify-center mb-4"
              style={{ background: '#1E3A5F', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
              <Building2 className="w-6 h-6" style={{ color: '#fff' }} />
            </div>
            <h2 className="text-2xl font-bold mb-2" style={{ color: '#1e293b' }}>
              Versi B: Profesional Clean
            </h2>
            <p className="text-sm mb-4" style={{ color: '#64748b' }}>
              Palet biru navy & putih, sudut melengkung, shadow lembut — kesan akademik terpercaya.
            </p>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold group-hover:opacity-80"
              style={{ background: '#1E3A5F', color: '#fff', borderRadius: '10px' }}>
              <Download className="w-4 h-4" /> Buka Website
            </span>
          </div>
        </a>
      </div>
    </div>
  </div>
);

export default Index;
