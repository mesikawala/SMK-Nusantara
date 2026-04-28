import { useState } from "react";
import { User, ShieldCheck, ArrowLeft, LogIn, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

type View = "selection" | "admin-login";

export default function LoginPage() {
  const navigate = useNavigate();
  const [view, setView] = useState<View>("selection");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleAdminLogin = async () => {
    if (!password.trim()) {
      setError("Password tidak boleh kosong.");
      return;
    }
    setIsLoading(true);
    setError("");
    try {
      const response = await fetch(
        "http://localhost/smk_nusantara/admin_login.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password }),
        },
      );
      const data = await response.json();
      if (data.success) {
        localStorage.setItem("isAdmin", "true");
        window.location.href = "/smk-profesional-clean.html#admin";
      } else {
        setError(data.message || "Password salah. Silakan coba lagi.");
      }
    } catch {
      setError("Gagal terhubung ke server. Periksa koneksi Anda.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    setView("selection");
    setPassword("");
    setError("");
  };

  return (
    <div className="login-root">
      {/* Background decorations */}
      <div className="bg-blob blob-1" />
      <div className="bg-blob blob-2" />
      <div className="bg-grid" />

      <main className="login-main">
        {/* Header */}
        <header className="login-header">
          <div className="logo-mark">
            <Leaf size={22} strokeWidth={2.5} />
          </div>
          <div>
            <h1 className="school-name">SMK Nusantara</h1>
            <p className="school-tagline">Portal Akademik Terpadu</p>
          </div>
        </header>

        {/* Card Area */}
        <div className="card-area">
          {view === "selection" ? (
            <>
              <div className="page-intro">
                <h2 className="page-title">Selamat Datang</h2>
                <p className="page-subtitle">
                  Pilih jenis akses untuk melanjutkan
                </p>
              </div>

              <div className="selection-grid">
                {/* Siswa Card */}
                <button
                  className="access-card access-card--siswa"
                  onClick={() => navigate("/home")}
                  aria-label="Masuk sebagai Siswa"
                >
                  <div className="access-card__icon-wrap access-card__icon-wrap--siswa">
                    <User size={32} strokeWidth={1.8} />
                  </div>
                  <span className="access-card__label">Akses Siswa</span>
                  <span className="access-card__desc">
                    Lihat jadwal, nilai & informasi sekolah
                  </span>
                  <span className="access-card__cta access-card__cta--siswa">
                    Masuk Sekarang →
                  </span>
                </button>

                {/* Admin Card */}
                <button
                  className="access-card access-card--admin"
                  onClick={() => setView("admin-login")}
                  aria-label="Masuk sebagai Admin"
                >
                  <div className="access-card__icon-wrap access-card__icon-wrap--admin">
                    <ShieldCheck size={32} strokeWidth={1.8} />
                  </div>
                  <span className="access-card__label">Akses Admin</span>
                  <span className="access-card__desc">
                    Kelola data siswa, guru & sistem
                  </span>
                  <span className="access-card__cta access-card__cta--admin">
                    Masuk dengan Password →
                  </span>
                </button>
              </div>
            </>
          ) : (
            <div className="admin-login-wrap">
              <Card className="admin-card">
                <CardHeader className="admin-card__header">
                  <div className="admin-card__icon-badge">
                    <ShieldCheck size={24} strokeWidth={2} />
                  </div>
                  <CardTitle className="admin-card__title">
                    Portal Admin
                  </CardTitle>
                  <CardDescription className="admin-card__desc">
                    Masukkan password administrator untuk melanjutkan
                  </CardDescription>
                </CardHeader>

                <CardContent className="admin-card__body">
                  <div className="field-group">
                    <Label htmlFor="admin-password" className="field-label">
                      Password Admin
                    </Label>
                    <Input
                      id="admin-password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setError("");
                      }}
                      onKeyDown={(e) => e.key === "Enter" && handleAdminLogin()}
                      className="password-input"
                      autoFocus
                    />
                    {error && (
                      <p className="error-message" role="alert">
                        {error}
                      </p>
                    )}
                  </div>

                  <div className="admin-actions">
                    <Button
                      variant="outline"
                      onClick={handleBack}
                      className="btn-back"
                      disabled={isLoading}
                    >
                      <ArrowLeft size={16} />
                      Kembali
                    </Button>
                    <Button
                      onClick={handleAdminLogin}
                      disabled={isLoading}
                      className="btn-submit"
                    >
                      {isLoading ? (
                        <span className="spinner" />
                      ) : (
                        <LogIn size={16} />
                      )}
                      {isLoading ? "Memverifikasi..." : "Masuk"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="login-footer">
          © {new Date().getFullYear()} SMK Nusantara · Semua hak dilindungi
        </footer>
      </main>

      <style>{`
        /* ── Tokens ─────────────────────────────────────── */
        :root {
          --green-dark: #166534;
          --green-dark-hover: #14532d;
          --green-dark-light: #dcfce7;
          --green-accent: #22c55e;
          --green-accent-hover: #16a34a;
          --green-accent-light: #f0fdf4;
          --green-accent-ring: #86efac;
          --text-primary: #0f172a;
          --text-secondary: #475569;
          --text-muted: #94a3b8;
          --surface: #ffffff;
          --border: #e2e8f0;
          --shadow-sm: 0 1px 3px rgba(0,0,0,.06), 0 1px 2px rgba(0,0,0,.04);
          --shadow-md: 0 4px 16px rgba(0,0,0,.08), 0 2px 6px rgba(0,0,0,.05);
          --shadow-lg: 0 12px 40px rgba(0,0,0,.12), 0 4px 12px rgba(0,0,0,.06);
          --radius: 16px;
          --font-display: 'Georgia', 'Times New Roman', serif;
        }

        /* ── Reset / Root ───────────────────────────────── */
        .login-root {
          min-height: 100vh;
          background: #f8faf8;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          font-family: 'Segoe UI', system-ui, sans-serif;
        }

        /* ── Background ─────────────────────────────────── */
        .bg-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          z-index: 0;
        }
        .blob-1 {
          width: 520px; height: 520px;
          background: radial-gradient(circle, rgba(34,197,94,.18) 0%, rgba(34,197,94,.04) 70%);
          top: -120px; right: -140px;
        }
        .blob-2 {
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(22,101,52,.12) 0%, transparent 70%);
          bottom: -100px; left: -100px;
        }
        .bg-grid {
          position: absolute; inset: 0; z-index: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(34,197,94,.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,197,94,.06) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        /* ── Main layout ────────────────────────────────── */
        .login-main {
          position: relative; z-index: 1;
          width: 100%; max-width: 780px;
          padding: 40px 24px;
          display: flex; flex-direction: column;
          align-items: center; gap: 36px;
        }

        /* ── Header ─────────────────────────────────────── */
        .login-header {
          display: flex; align-items: center; gap: 14px;
        }
        .logo-mark {
          width: 48px; height: 48px;
          background: linear-gradient(135deg, var(--green-dark), var(--green-accent));
          border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          color: #fff;
          box-shadow: 0 4px 14px rgba(22,101,52,.35);
          flex-shrink: 0;
        }
        .school-name {
          font-family: var(--font-display);
          font-size: 1.55rem; font-weight: 700;
          color: var(--green-dark); letter-spacing: -.3px;
          margin: 0; line-height: 1.1;
        }
        .school-tagline {
          font-size: .78rem; color: var(--text-muted);
          margin: 2px 0 0; letter-spacing: .4px; text-transform: uppercase;
        }

        /* ── Page intro text ────────────────────────────── */
        .page-intro { text-align: center; }
        .page-title {
          font-family: var(--font-display);
          font-size: 2rem; font-weight: 700;
          color: var(--text-primary); margin: 0 0 6px;
        }
        .page-subtitle { font-size: .95rem; color: var(--text-secondary); margin: 0; }

        /* ── Selection grid ─────────────────────────────── */
        .card-area { width: 100%; }
        .selection-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px; margin-top: 28px;
        }
        @media (max-width: 540px) {
          .selection-grid { grid-template-columns: 1fr; }
        }

        /* ── Access cards ───────────────────────────────── */
        .access-card {
          background: var(--surface);
          border: 1.5px solid var(--border);
          border-radius: var(--radius);
          padding: 32px 28px;
          display: flex; flex-direction: column; align-items: center;
          gap: 10px; text-align: center; cursor: pointer;
          transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
          box-shadow: var(--shadow-sm);
          position: relative; overflow: hidden;
        }
        .access-card::before {
          content: ''; position: absolute;
          inset: 0; opacity: 0;
          transition: opacity .2s ease;
          border-radius: inherit;
        }
        .access-card--siswa::before {
          background: linear-gradient(135deg, rgba(34,197,94,.06), rgba(240,253,244,.8));
        }
        .access-card--admin::before {
          background: linear-gradient(135deg, rgba(22,101,52,.07), rgba(220,252,231,.6));
        }
        .access-card:hover { transform: translateY(-4px); }
        .access-card--siswa:hover {
          border-color: var(--green-accent);
          box-shadow: 0 8px 32px rgba(34,197,94,.2);
        }
        .access-card--admin:hover {
          border-color: var(--green-dark);
          box-shadow: 0 8px 32px rgba(22,101,52,.18);
        }
        .access-card:hover::before { opacity: 1; }
        .access-card:active { transform: translateY(-2px); }
        .access-card:focus-visible {
          outline: 3px solid var(--green-accent-ring); outline-offset: 2px;
        }

        .access-card__icon-wrap {
          width: 72px; height: 72px; border-radius: 20px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 4px; position: relative; z-index: 1;
          transition: transform .2s ease;
        }
        .access-card:hover .access-card__icon-wrap { transform: scale(1.08); }
        .access-card__icon-wrap--siswa {
          background: var(--green-accent-light);
          color: var(--green-accent-hover);
          border: 1.5px solid rgba(34,197,94,.25);
        }
        .access-card__icon-wrap--admin {
          background: var(--green-dark-light);
          color: var(--green-dark);
          border: 1.5px solid rgba(22,101,52,.2);
        }
        .access-card__label {
          font-size: 1.15rem; font-weight: 700;
          color: var(--text-primary); position: relative; z-index: 1;
        }
        .access-card__desc {
          font-size: .83rem; color: var(--text-secondary);
          line-height: 1.45; position: relative; z-index: 1;
        }
        .access-card__cta {
          font-size: .8rem; font-weight: 600; margin-top: 6px;
          position: relative; z-index: 1;
        }
        .access-card__cta--siswa { color: var(--green-accent-hover); }
        .access-card__cta--admin { color: var(--green-dark); }

        /* ── Admin login state ──────────────────────────── */
        .admin-login-wrap {
          display: flex; justify-content: center;
          animation: slideUp .3s cubic-bezier(.22,1,.36,1);
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .admin-card {
          width: 100%; max-width: 420px;
          border: 1.5px solid var(--border) !important;
          border-radius: var(--radius) !important;
          box-shadow: var(--shadow-lg) !important;
          overflow: hidden;
        }
        .admin-card__header {
          background: linear-gradient(135deg, var(--green-dark) 0%, #15803d 100%);
          padding: 28px 28px 24px !important;
          align-items: center; text-align: center;
          border-bottom: none !important;
        }
        .admin-card__icon-badge {
          width: 52px; height: 52px;
          background: rgba(255,255,255,.15);
          border: 1.5px solid rgba(255,255,255,.3);
          border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          color: #fff; margin: 0 auto 12px;
        }
        .admin-card__title {
          color: #fff !important; font-size: 1.25rem !important;
          font-weight: 700 !important; text-align: center;
        }
        .admin-card__desc {
          color: rgba(255,255,255,.75) !important; font-size: .85rem !important;
          text-align: center; margin-top: 4px !important;
        }
        .admin-card__body { padding: 28px !important; }

        /* ── Form fields ────────────────────────────────── */
        .field-group { display: flex; flex-direction: column; gap: 8px; }
        .field-label {
          font-size: .85rem; font-weight: 600 !important;
          color: var(--text-primary) !important;
        }
        .password-input {
          height: 44px !important;
          border-color: var(--border) !important;
          border-radius: 10px !important;
          font-size: .95rem !important;
          transition: border-color .15s, box-shadow .15s;
        }
        .password-input:focus {
          border-color: var(--green-accent) !important;
          box-shadow: 0 0 0 3px rgba(34,197,94,.2) !important;
        }
        .error-message {
          font-size: .8rem; color: #dc2626; margin: 2px 0 0;
          display: flex; align-items: center; gap: 4px;
        }
        .error-message::before { content: '⚠'; font-size: .75rem; }

        /* ── Action buttons ─────────────────────────────── */
        .admin-actions {
          display: flex; gap: 10px; margin-top: 20px;
        }
        .btn-back {
          flex: 1; height: 44px !important;
          border-radius: 10px !important;
          border-color: var(--border) !important;
          color: var(--text-secondary) !important;
          font-size: .9rem !important; font-weight: 600 !important;
          display: flex; align-items: center; justify-content: center; gap: 6px;
          transition: all .15s !important;
        }
        .btn-back:hover:not(:disabled) {
          background: #f8fafc !important;
          border-color: var(--text-muted) !important;
          color: var(--text-primary) !important;
        }
        .btn-submit {
          flex: 2; height: 44px !important;
          border-radius: 10px !important;
          background: linear-gradient(135deg, var(--green-dark), #15803d) !important;
          border: none !important;
          font-size: .9rem !important; font-weight: 600 !important;
          display: flex; align-items: center; justify-content: center; gap: 6px;
          transition: opacity .15s, transform .15s !important;
          box-shadow: 0 4px 14px rgba(22,101,52,.3) !important;
        }
        .btn-submit:hover:not(:disabled) {
          opacity: .92 !important; transform: translateY(-1px) !important;
        }
        .btn-submit:active:not(:disabled) { transform: translateY(0) !important; }
        .btn-submit:disabled { opacity: .65 !important; }

        /* ── Spinner ────────────────────────────────────── */
        .spinner {
          width: 16px; height: 16px;
          border: 2px solid rgba(255,255,255,.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin .7s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        /* ── Footer ─────────────────────────────────────── */
        .login-footer {
          font-size: .75rem; color: var(--text-muted); text-align: center;
        }
      `}</style>
    </div>
  );
}
