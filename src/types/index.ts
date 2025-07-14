export interface User {
  id: string;
  username: string;
  role: string;
}

export interface Applicant {
  id: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  status: 'Applied' | 'Screening' | 'Interview' | 'Offer' | 'Hired' | 'Rejected';
  appliedDate: string;
  experience: string;
  skills: string[];
}

export interface Requirement {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  status: 'Open' | 'Closed' | 'On Hold';
  postedDate: string;
  description: string;
  requirements: string[];
  applicantsCount: number;
}

export interface Report {
  id: string;
  title: string;
  type: 'Hiring' | 'Performance' | 'Department' | 'Monthly';
  generatedDate: string;
  data: any;
}