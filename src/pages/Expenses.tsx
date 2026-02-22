import { useState } from 'react';
import { expenses, type Expense } from '../data/mockData';
import { Plus, Search } from 'lucide-react';

const fmt = (n: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);

const CATEGORY_COLORS: Record<Expense['category'], string> = {
  Salaries: '#1e40af',
  Rent: '#0891b2',
  Marketing: '#7c3aed',
  Utilities: '#b45309',
  Software: '#059669',
  Travel: '#dc2626',
  Office: '#6b7280',
};

export default function Expenses() {
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<Expense['category'] | 'All'>('All');

  const categories = Array.from(new Set(expenses.map(e => e.category)));

  const filtered = expenses.filter(exp => {
    const matchesSearch =
      exp.description.toLowerCase().includes(search.toLowerCase()) ||
      exp.vendor.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || exp.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const totalFiltered = filtered.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Expenses</h1>
          <p className="page-subtitle">{expenses.length} total expense entries</p>
        </div>
        <button className="btn btn-primary">
          <Plus size={16} /> Add Expense
        </button>
      </div>

      <div className="card">
        <div className="table-toolbar">
          <div className="search-box">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search expenses..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="filter-tabs">
            <button
              onClick={() => setCategoryFilter('All')}
              className={`filter-tab ${categoryFilter === 'All' ? 'active' : ''}`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`filter-tab ${categoryFilter === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Description</th>
              <th>Category</th>
              <th>Vendor</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={6} className="empty-row">No expenses found.</td>
              </tr>
            ) : (
              filtered.map(exp => (
                <tr key={exp.id}>
                  <td className="font-mono primary-text">{exp.id}</td>
                  <td className="font-medium">{exp.description}</td>
                  <td>
                    <span
                      className="category-badge"
                      style={{
                        backgroundColor: `${CATEGORY_COLORS[exp.category]}18`,
                        color: CATEGORY_COLORS[exp.category],
                        borderColor: `${CATEGORY_COLORS[exp.category]}40`,
                      }}
                    >
                      {exp.category}
                    </span>
                  </td>
                  <td className="muted">{exp.vendor}</td>
                  <td>{exp.date}</td>
                  <td className="amount">{fmt(exp.amount)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        <div className="table-footer">
          <span className="muted">Showing {filtered.length} of {expenses.length} entries</span>
          <span className="amount">Total: {fmt(totalFiltered)}</span>
        </div>
      </div>
    </div>
  );
}
