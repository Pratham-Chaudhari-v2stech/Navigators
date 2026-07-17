export interface Employee {
  id: number;
  name: string;
  designation: string;
  department: string;
  email: string;
}

export const employees: Employee[] = [
  {
    id: 1,
    name: 'John Doe',
    designation: 'Frontend Developer',
    department: 'Engineering',
    email: 'john@example.com',
  },
  {
    id: 2,
    name: 'Sarah Smith',
    designation: 'UI/UX Designer',
    department: 'Design',
    email: 'sarah@example.com',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    designation: 'Backend Developer',
    department: 'Engineering',
    email: 'mike@example.com',
  },
  {
    id: 4,
    name: 'Emily Davis',
    designation: 'HR Manager',
    department: 'Human Resources',
    email: 'emily@example.com',
  },
  {
    id: 5,
    name: 'David Wilson',
    designation: 'QA Engineer',
    department: 'Testing',
    email: 'david@example.com',
  },
];