import { monthlyData, expenseCategoryData } from '../data/mockData';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell,
} from 'recharts';

const fmt = (n: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);

const profitData = monthlyData.map(d => ({
  month: d.month,
  profit: d.revenue - d.expenses,
}));

export default function Reports() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Financial Reports</h1>
          <p className="page-subtitle">Annual financial trends · FY 2024</p>
        </div>
      </div>

      <div className="reports-grid">
        <div className="card chart-card">
          <h2 className="card-title">Monthly Revenue vs Expenses</h2>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={monthlyData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tickFormatter={(v) => `₹${(v / 1000).toFixed(0)}k`} tick={{ fontSize: 12 }} />
              <Tooltip formatter={(value: number | undefined) => value !== undefined ? fmt(value) : ''} />
              <Legend />
              <Bar dataKey="revenue" name="Revenue" fill="#1e40af" radius={[4, 4, 0, 0]} />
              <Bar dataKey="expenses" name="Expenses" fill="#93c5fd" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card chart-card">
          <h2 className="card-title">Expense Breakdown by Category</h2>
          <div className="pie-container">
            <ResponsiveContainer width="50%" height={280}>
              <PieChart>
                <Pie
                  data={expenseCategoryData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={110}
                  strokeWidth={2}
                >
                  {expenseCategoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="#fff" />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number | undefined) => value !== undefined ? fmt(value) : ''} />
              </PieChart>
            </ResponsiveContainer>
            <div className="pie-legend">
              {expenseCategoryData.map(item => (
                <div key={item.name} className="pie-legend-item">
                  <span className="pie-dot" style={{ backgroundColor: item.color }} />
                  <span className="pie-label">{item.name}</span>
                  <span className="pie-value">{fmt(item.value)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="card chart-card chart-full">
          <h2 className="card-title">Monthly Net Profit Trend</h2>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={profitData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tickFormatter={(v) => `₹${(v / 1000).toFixed(0)}k`} tick={{ fontSize: 12 }} />
              <Tooltip formatter={(value: number | undefined) => value !== undefined ? fmt(value) : ''} />
              <Legend />
              <Line
                type="monotone"
                dataKey="profit"
                name="Net Profit"
                stroke="#1e40af"
                strokeWidth={2.5}
                dot={{ r: 4, fill: '#1e40af' }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
