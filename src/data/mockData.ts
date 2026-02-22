export interface Invoice {
  id: string;
  client: string;
  amount: number;
  date: string;
  dueDate: string;
  status: 'Paid' | 'Pending' | 'Overdue';
  description: string;
}

export interface Expense {
  id: string;
  description: string;
  category: 'Salaries' | 'Rent' | 'Marketing' | 'Utilities' | 'Software' | 'Travel' | 'Office';
  amount: number;
  date: string;
  vendor: string;
}

export interface MonthlyData {
  month: string;
  revenue: number;
  expenses: number;
}

export const invoices: Invoice[] = [
  { id: 'INV-001', client: 'Apex Solutions Ltd.', amount: 12500, date: '2024-01-05', dueDate: '2024-02-05', status: 'Paid', description: 'Enterprise software consulting Q1' },
  { id: 'INV-002', client: 'Horizon Retail Co.', amount: 8750, date: '2024-01-18', dueDate: '2024-02-18', status: 'Paid', description: 'ERP integration services' },
  { id: 'INV-003', client: 'Pinnacle Finance Group', amount: 21000, date: '2024-02-03', dueDate: '2024-03-03', status: 'Paid', description: 'Financial analytics dashboard' },
  { id: 'INV-004', client: 'Delta Logistics Inc.', amount: 6300, date: '2024-02-20', dueDate: '2024-03-20', status: 'Overdue', description: 'Supply chain module development' },
  { id: 'INV-005', client: 'Summit Healthcare', amount: 15800, date: '2024-03-10', dueDate: '2024-04-10', status: 'Paid', description: 'Patient management system' },
  { id: 'INV-006', client: 'Orion Tech Ventures', amount: 9200, date: '2024-03-25', dueDate: '2024-04-25', status: 'Pending', description: 'Cloud migration consulting' },
  { id: 'INV-007', client: 'BlueStar Manufacturing', amount: 18400, date: '2024-04-08', dueDate: '2024-05-08', status: 'Overdue', description: 'MES software implementation' },
  { id: 'INV-008', client: 'Cascade Analytics', amount: 7650, date: '2024-04-22', dueDate: '2024-05-22', status: 'Pending', description: 'Business intelligence setup' },
  { id: 'INV-009', client: 'Vertex Media Group', amount: 11300, date: '2024-05-14', dueDate: '2024-06-14', status: 'Paid', description: 'Digital asset management platform' },
  { id: 'INV-010', client: 'NorthBridge Capital', amount: 25000, date: '2024-05-30', dueDate: '2024-06-30', status: 'Pending', description: 'Portfolio management system Q2' },
];

export const expenses: Expense[] = [
  { id: 'EXP-001', description: 'Engineering team salaries - January', category: 'Salaries', amount: 48000, date: '2024-01-31', vendor: 'Payroll' },
  { id: 'EXP-002', description: 'Office lease - Floor 7, Sphuta HQ', category: 'Rent', amount: 12000, date: '2024-01-01', vendor: 'Prestige Properties' },
  { id: 'EXP-003', description: 'Q1 digital marketing campaigns', category: 'Marketing', amount: 8500, date: '2024-01-15', vendor: 'PixelForge Agency' },
  { id: 'EXP-004', description: 'Electricity and internet - January', category: 'Utilities', amount: 1850, date: '2024-01-28', vendor: 'City Utilities Board' },
  { id: 'EXP-005', description: 'AWS cloud infrastructure', category: 'Software', amount: 4200, date: '2024-02-01', vendor: 'Amazon Web Services' },
  { id: 'EXP-006', description: 'Engineering team salaries - February', category: 'Salaries', amount: 48000, date: '2024-02-29', vendor: 'Payroll' },
  { id: 'EXP-007', description: 'Office lease - February', category: 'Rent', amount: 12000, date: '2024-02-01', vendor: 'Prestige Properties' },
  { id: 'EXP-008', description: 'Sales conference - Mumbai', category: 'Travel', amount: 6700, date: '2024-02-18', vendor: 'Corporate Travel Inc.' },
  { id: 'EXP-009', description: 'GitHub Enterprise & Jira licenses', category: 'Software', amount: 2800, date: '2024-03-01', vendor: 'Atlassian / GitHub' },
  { id: 'EXP-010', description: 'Engineering team salaries - March', category: 'Salaries', amount: 51000, date: '2024-03-31', vendor: 'Payroll' },
  { id: 'EXP-011', description: 'Office supplies and equipment', category: 'Office', amount: 3400, date: '2024-03-10', vendor: 'OfficeWorld' },
  { id: 'EXP-012', description: 'SEO and content marketing', category: 'Marketing', amount: 5200, date: '2024-04-05', vendor: 'ContentEdge Media' },
  { id: 'EXP-013', description: 'Engineering team salaries - April', category: 'Salaries', amount: 51000, date: '2024-04-30', vendor: 'Payroll' },
  { id: 'EXP-014', description: 'Office lease - April', category: 'Rent', amount: 12000, date: '2024-04-01', vendor: 'Prestige Properties' },
  { id: 'EXP-015', description: 'Electricity and internet - April', category: 'Utilities', amount: 1950, date: '2024-04-28', vendor: 'City Utilities Board' },
];

export const monthlyData: MonthlyData[] = [
  { month: 'Jan', revenue: 42000, expenses: 62350 },
  { month: 'Feb', revenue: 68500, expenses: 68700 },
  { month: 'Mar', revenue: 95200, expenses: 74400 },
  { month: 'Apr', revenue: 71800, expenses: 72350 },
  { month: 'May', revenue: 112000, expenses: 76800 },
  { month: 'Jun', revenue: 89500, expenses: 71200 },
  { month: 'Jul', revenue: 103400, expenses: 78500 },
  { month: 'Aug', revenue: 118700, expenses: 82100 },
  { month: 'Sep', revenue: 97300, expenses: 75600 },
  { month: 'Oct', revenue: 134200, expenses: 88900 },
  { month: 'Nov', revenue: 121600, expenses: 84300 },
  { month: 'Dec', revenue: 148900, expenses: 96400 },
];

export const expenseCategoryData = [
  { name: 'Salaries', value: 198000, color: '#1e40af' },
  { name: 'Rent', value: 48000, color: '#3b82f6' },
  { name: 'Marketing', value: 27400, color: '#60a5fa' },
  { name: 'Software', value: 14800, color: '#93c5fd' },
  { name: 'Travel', value: 12300, color: '#bfdbfe' },
  { name: 'Utilities', value: 9600, color: '#dbeafe' },
  { name: 'Office', value: 6800, color: '#eff6ff' },
];
