import { Link } from "react-router-dom";
import { Sparkles, Building2 } from "lucide-react";

const Index = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
    <div className="max-w-3xl w-full text-center">
      <h1 className="font-bold text-4xl md:text-5xl text-slate-900 mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
        SMK Nusantara
      </h1>
      <p className="text-slate-500 text-lg mb-12">Pilih versi desain website yang ingin dilihat</p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Neo-Brutalism */}
        <Link to="/brutal" className="group block">
          <div className="bg-yellow-100 border-4 border-black p-8 text-left transition-transform hover:-translate-y-1"
            style={{ boxShadow: "6px 6px 0 0 #000" }}>
            <div className="w-12 h-12 bg-purple-500 border-4 border-black flex items-center justify-center mb-4"
              style={{ boxShadow: "3px 3px 0 0 #000" }}>
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-black mb-2" style={{ fontFamily: "'Lexend', sans-serif" }}>
              Versi A: Neo-Brutalism
            </h2>
            <p className="text-sm text-gray-700 mb-4">
              Warna mencolok, border tebal, shadow tajam, font bold — kesan berani dan trendy.
            </p>
            <span className="inline-block bg-black text-white px-4 py-2 font-bold text-sm border-2 border-black group-hover:bg-purple-500 transition-colors"
              style={{ fontFamily: "'Lexend', sans-serif" }}>
              Lihat Website →
            </span>
          </div>
        </Link>

        {/* Professional */}
        <Link to="/professional" className="group block">
          <div className="bg-white border border-slate-200 rounded-xl p-8 text-left shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-4 shadow-md">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
              Versi B: Profesional Clean
            </h2>
            <p className="text-sm text-slate-500 mb-4">
              Palet biru navy & putih, sudut melengkung, shadow lembut — kesan akademik terpercaya.
            </p>
            <span className="inline-block bg-blue-900 text-white px-4 py-2 rounded-lg font-semibold text-sm group-hover:bg-blue-800 transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}>
              Lihat Website →
            </span>
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default Index;
