export interface Deal {
  id: string;
  customer: string;
  company: string;
  amount: number;
}

export const ACTIVE_DEALS: Deal[] = [
  {
    id: '1',
    customer: 'John Doe',
    company: 'ABC Pvt Ltd',
    amount: 15000,
  },
  {
    id: '2',
    customer: 'Alice',
    company: 'XYZ Ltd',
    amount: 22000,
  },
  {
    id: '3',
    customer: 'Rahul',
    company: 'Infosys',
    amount: 45000,
  },
];

export const CLOSED_DEALS: Deal[] = [
  {
    id: '4',
    customer: 'David',
    company: 'Tech Corp',
    amount: 18000,
  },
  {
    id: '5',
    customer: 'Emma',
    company: 'Solutions Ltd',
    amount: 9500,
  },
  {
    id: '6',
    customer: 'Priya',
    company: 'Google',
    amount: 50000,
  },
];