import { useState } from 'react';
import { invoices, type Invoice } from '../data/mockData';
import { Plus, Search } from 'lucide-react';

const fmt = (n: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);

export default function Invoices() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'All' | Invoice['status']>('All');

  const filtered = invoices.filter(inv => {
    const matchesSearch =
      inv.client.toLowerCase().includes(search.toLowerCase()) ||
      inv.id.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'All' || inv.status === filter;
    return matchesSearch && matchesFilter;
  });

  const total = (status: Invoice['status']) => invoices.filter(i => i.status === status).length;

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Invoices</h1>
          <p className="page-subtitle">{invoices.length} total invoices</p>
        </div>
        <button className="btn btn-primary">
          <Plus size={16} /> New Invoice
        </button>
      </div>

      <div className="stats-row">
        {(['Paid', 'Pending', 'Overdue'] as Invoice['status'][]).map(status => (
          <div key={status} className="stat-chip">
            <span className={`badge badge-${status.toLowerCase()}`}>{status}</span>
            <span className="stat-count">{total(status)} invoice{total(status) !== 1 ? 's' : ''}</span>
          </div>
        ))}
      </div>

      <div className="card">
        <div className="table-toolbar">
          <div className="search-box">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search invoices..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="filter-tabs">
            {(['All', 'Paid', 'Pending', 'Overdue'] as const).map(s => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`filter-tab ${filter === s ? 'active' : ''}`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>Invoice ID</th>
              <th>Client</th>
              <th>Description</th>
              <th>Date</th>
              <th>Due Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={7} className="empty-row">No invoices found.</td>
              </tr>
            ) : (
              filtered.map(inv => (
                <tr key={inv.id}>
                  <td className="font-mono primary-text">{inv.id}</td>
                  <td className="font-medium">{inv.client}</td>
                  <td className="muted">{inv.description}</td>
                  <td>{inv.date}</td>
                  <td>{inv.dueDate}</td>
                  <td className="amount">{fmt(inv.amount)}</td>
                  <td><span className={`badge badge-${inv.status.toLowerCase()}`}>{inv.status}</span></td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        <div className="table-footer">
          <span className="muted">Showing {filtered.length} of {invoices.length} invoices</span>
          <span className="amount">
            Total: {fmt(filtered.reduce((s, i) => s + i.amount, 0))}
          </span>
        </div>
      </div>
    </div>
  );
}
