import "./AuthLayout.css";

export default function AuthLayout({ title, subtitle, illustrationLabel, children }) {
  return (
    <div className="auth-root">
      <div className="auth-illustration" aria-hidden="true">
        <div className="illustration-blob blob-1" />
        <div className="illustration-blob blob-2" />
        <div className="illustration-blob blob-3" />

        <div className="illustration-card">
          <div className="card-chart">
            <div className="chart-bar" style={{ "--h": "60%" }} />
            <div className="chart-bar" style={{ "--h": "85%" }} />
            <div className="chart-bar" style={{ "--h": "45%" }} />
            <div className="chart-bar" style={{ "--h": "75%" }} />
            <div className="chart-bar" style={{ "--h": "90%" }} />
            <div className="chart-bar" style={{ "--h": "55%" }} />
          </div>
          <div className="card-stat">
            <span className="stat-number">$12,480</span>
            <span className="stat-label">Gastos este mes</span>
          </div>
          <div className="card-badge">↓ 8.2% vs mes anterior</div>
        </div>

        <div className="illustration-pill">
          <span className="pill-dot" />
          {illustrationLabel}
        </div>

        <div className="brand-mark">
          <span className="brand-icon">◈</span>
          <span className="brand-name">GastosApp</span>
        </div>
      </div>

      <div className="auth-panel">
        <div className="auth-panel-inner">
          <div className="auth-header">
            <div className="mobile-brand">
              <span className="brand-icon">◈</span>
              <span className="brand-name">GastosApp</span>
            </div>
            <h1 className="auth-title">{title}</h1>
            <p className="auth-subtitle">{subtitle}</p>
          </div>
          <div className="auth-content">{children}</div>
        </div>
      </div>
    </div>
  );
}