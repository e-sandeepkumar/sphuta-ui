import { invoices, monthlyData } from '../data/mockData';
import { DollarSign, TrendingUp, TrendingDown, Clock } from 'lucide-react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const totalRevenue = monthlyData.reduce((sum, d) => sum + d.revenue, 0);
const totalExpenses = monthlyData.reduce((sum, d) => sum + d.expenses, 0);
const netProfit = totalRevenue - totalExpenses;
const outstandingInvoices = invoices
  .filter(inv => inv.status === 'Pending' || inv.status === 'Overdue')
  .reduce((sum, inv) => sum + inv.amount, 0);

const fmt = (n: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);

interface KpiCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
  trend?: string;
}

function KpiCard({ title, value, icon, color, trend }: KpiCardProps) {
  return (
    <div className="kpi-card">
      <div className="kpi-header">
        <span className="kpi-title">{title}</span>
        <span className="kpi-icon" style={{ backgroundColor: color }}>{icon}</span>
      </div>
      <p className="kpi-value">{value}</p>
      {trend && <p className="kpi-trend">{trend}</p>}
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Dashboard</h1>
        <p className="page-subtitle">Financial overview for Sphuta Technologies · FY 2024</p>
      </div>

      <div className="kpi-grid">
        <KpiCard
          title="Total Revenue"
          value={fmt(totalRevenue)}
          icon={<DollarSign size={20} />}
          color="#dcfce7"
          trend="↑ 18.4% vs last year"
        />
        <KpiCard
          title="Total Expenses"
          value={fmt(totalExpenses)}
          icon={<TrendingDown size={20} />}
          color="#fee2e2"
          trend="↑ 12.1% vs last year"
        />
        <KpiCard
          title="Net Profit"
          value={fmt(netProfit)}
          icon={<TrendingUp size={20} />}
          color="#dbeafe"
          trend="↑ 24.7% vs last year"
        />
        <KpiCard
          title="Outstanding Invoices"
          value={fmt(outstandingInvoices)}
          icon={<Clock size={20} />}
          color="#fef9c3"
          trend={`${invoices.filter(i => i.status !== 'Paid').length} invoices pending`}
        />
      </div>

      <div className="card chart-card">
        <h2 className="card-title">Monthly Revenue vs Expenses</h2>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={monthlyData} margin={{ top: 10, right: 20, left: 10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="month" tick={{ fontSize: 13 }} />
            <YAxis tickFormatter={(v) => `₹${(v / 1000).toFixed(0)}k`} tick={{ fontSize: 13 }} />
            <Tooltip formatter={(value: number | undefined) => value !== undefined ? fmt(value) : ''} />
            <Legend />
            <Bar dataKey="revenue" name="Revenue" fill="#1e40af" radius={[4, 4, 0, 0]} />
            <Bar dataKey="expenses" name="Expenses" fill="#93c5fd" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="card">
        <h2 className="card-title">Recent Invoices</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Invoice</th>
              <th>Client</th>
              <th>Amount</th>
              <th>Due Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.slice(0, 5).map(inv => (
              <tr key={inv.id}>
                <td className="font-mono">{inv.id}</td>
                <td>{inv.client}</td>
                <td className="amount">{fmt(inv.amount)}</td>
                <td>{inv.dueDate}</td>
                <td><span className={`badge badge-${inv.status.toLowerCase()}`}>{inv.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
