import React, { useState } from 'react';
import { Search, Filter, Eye, Mail, Phone, Calendar, MapPin } from 'lucide-react';
import { Applicant } from '../types';

const Applicants: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  // Mock data for applicants
  const applicants: Applicant[] = [
    {
      id: '1',
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '+1 (555) 123-4567',
      position: 'Senior Frontend Developer',
      status: 'Interview',
      appliedDate: '2024-01-15',
      experience: '5 years',
      skills: ['React', 'TypeScript', 'Node.js', 'GraphQL']
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      phone: '+1 (555) 234-5678',
      position: 'UI/UX Designer',
      status: 'Screening',
      appliedDate: '2024-01-14',
      experience: '3 years',
      skills: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping']
    },
    {
      id: '3',
      name: 'Michael Brown',
      email: 'michael.brown@email.com',
      phone: '+1 (555) 345-6789',
      position: 'Backend Developer',
      status: 'Hired',
      appliedDate: '2024-01-10',
      experience: '4 years',
      skills: ['Python', 'Django', 'PostgreSQL', 'AWS']
    },
    {
      id: '4',
      name: 'Emily Davis',
      email: 'emily.davis@email.com',
      phone: '+1 (555) 456-7890',
      position: 'Product Manager',
      status: 'Applied',
      appliedDate: '2024-01-16',
      experience: '6 years',
      skills: ['Agile', 'Scrum', 'Product Strategy', 'Analytics']
    },
    {
      id: '5',
      name: 'David Wilson',
      email: 'david.wilson@email.com',
      phone: '+1 (555) 567-8901',
      position: 'DevOps Engineer',
      status: 'Offer',
      appliedDate: '2024-01-12',
      experience: '7 years',
      skills: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform']
    },
    {
      id: '6',
      name: 'Lisa Anderson',
      email: 'lisa.anderson@email.com',
      phone: '+1 (555) 678-9012',
      position: 'Data Scientist',
      status: 'Rejected',
      appliedDate: '2024-01-08',
      experience: '2 years',
      skills: ['Python', 'Machine Learning', 'TensorFlow', 'SQL']
    }
  ];

  const statusColors = {
    'Applied': 'bg-blue-100 text-blue-800',
    'Screening': 'bg-yellow-100 text-yellow-800',
    'Interview': 'bg-purple-100 text-purple-800',
    'Offer': 'bg-green-100 text-green-800',
    'Hired': 'bg-emerald-100 text-emerald-800',
    'Rejected': 'bg-red-100 text-red-800'
  };

  const filteredApplicants = applicants.filter(applicant => {
    const matchesSearch = applicant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         applicant.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         applicant.position.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || applicant.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Applicants</h1>
        <p className="text-gray-600 mt-1">Manage and track all job applicants</p>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search applicants..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="All">All Status</option>
                <option value="Applied">Applied</option>
                <option value="Screening">Screening</option>
                <option value="Interview">Interview</option>
                <option value="Offer">Offer</option>
                <option value="Hired">Hired</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Applicants Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredApplicants.map((applicant) => (
          <div key={applicant.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">{applicant.name}</h3>
                <p className="text-sm text-gray-600">{applicant.position}</p>
              </div>
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColors[applicant.status]}`}>
                {applicant.status}
              </span>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className="truncate">{applicant.email}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>{applicant.phone}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>Applied: {new Date(applicant.appliedDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>Experience: {applicant.experience}</span>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Skills:</p>
              <div className="flex flex-wrap gap-1">
                {applicant.skills.slice(0, 3).map((skill, index) => (
                  <span key={index} className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                    {skill}
                  </span>
                ))}
                {applicant.skills.length > 3 && (
                  <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                    +{applicant.skills.length - 3} more
                  </span>
                )}
              </div>
            </div>

            <div className="flex space-x-2">
              <button className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors">
                <Eye className="h-4 w-4" />
                <span>View Details</span>
              </button>
              <button className="px-3 py-2 text-sm font-medium text-gray-600 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
                Contact
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredApplicants.length === 0 && (
        <div className="text-center py-12">
          <Users className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No applicants found</h3>
          <p className="mt-1 text-sm text-gray-500">
            Try adjusting your search or filter criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default Applicants;