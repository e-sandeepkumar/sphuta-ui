import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FileText, Receipt, BarChart3, TrendingUp } from 'lucide-react';

const navItems = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/invoices', icon: FileText, label: 'Invoices' },
  { to: '/expenses', icon: Receipt, label: 'Expenses' },
  { to: '/reports', icon: BarChart3, label: 'Reports' },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <TrendingUp size={28} className="brand-icon" />
        <div className="brand-text">
          <span className="brand-name">SPHUTA</span>
          <span className="brand-tagline">Financial Management</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <Icon size={20} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="company-badge">
          <span className="company-initial">S</span>
          <div>
            <p className="company-name">Sphuta Technologies</p>
            <p className="company-role">Admin Account</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
