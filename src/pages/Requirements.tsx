import React, { useState } from 'react';
import { Search, Filter, Plus, MapPin, Calendar, Users, Eye, Edit, Trash2 } from 'lucide-react';
import { Requirement } from '../types';

const Requirements: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');

  // Mock data for job requirements
  const requirements: Requirement[] = [
    {
      id: '1',
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'New York, NY',
      type: 'Full-time',
      status: 'Open',
      postedDate: '2024-01-15',
      description: 'We are looking for an experienced Frontend Developer to join our dynamic team...',
      requirements: [
        '5+ years of React experience',
        'Strong TypeScript skills',
        'Experience with modern build tools',
        'Knowledge of testing frameworks'
      ],
      applicantsCount: 23
    },
    {
      id: '2',
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'San Francisco, CA',
      type: 'Full-time',
      status: 'Open',
      postedDate: '2024-01-14',
      description: 'Join our design team to create beautiful and intuitive user experiences...',
      requirements: [
        '3+ years of UI/UX design experience',
        'Proficiency in Figma and Adobe Creative Suite',
        'Strong portfolio demonstrating design skills',
        'Understanding of user-centered design principles'
      ],
      applicantsCount: 18
    },
    {
      id: '3',
      title: 'Backend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      status: 'Closed',
      postedDate: '2024-01-10',
      description: 'We need a skilled Backend Developer to build scalable server-side applications...',
      requirements: [
        '4+ years of Python/Django experience',
        'Experience with PostgreSQL and Redis',
        'Knowledge of AWS services',
        'Understanding of microservices architecture'
      ],
      applicantsCount: 31
    },
    {
      id: '4',
      title: 'Product Manager',
      department: 'Product',
      location: 'Austin, TX',
      type: 'Full-time',
      status: 'Open',
      postedDate: '2024-01-16',
      description: 'Lead product strategy and development for our core platform...',
      requirements: [
        '5+ years of product management experience',
        'Strong analytical and problem-solving skills',
        'Experience with Agile methodologies',
        'Excellent communication skills'
      ],
      applicantsCount: 12
    },
    {
      id: '5',
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Seattle, WA',
      type: 'Full-time',
      status: 'On Hold',
      postedDate: '2024-01-12',
      description: 'Help us build and maintain our cloud infrastructure...',
      requirements: [
        '6+ years of DevOps experience',
        'Expertise in Docker and Kubernetes',
        'Experience with CI/CD pipelines',
        'Knowledge of infrastructure as code'
      ],
      applicantsCount: 8
    },
    {
      id: '6',
      title: 'Marketing Intern',
      department: 'Marketing',
      location: 'Boston, MA',
      type: 'Internship',
      status: 'Open',
      postedDate: '2024-01-18',
      description: 'Join our marketing team as an intern to gain hands-on experience...',
      requirements: [
        'Currently pursuing Marketing or related degree',
        'Strong written and verbal communication skills',
        'Familiarity with social media platforms',
        'Creative thinking and problem-solving abilities'
      ],
      applicantsCount: 45
    }
  ];

  const statusColors = {
    'Open': 'bg-green-100 text-green-800',
    'Closed': 'bg-red-100 text-red-800',
    'On Hold': 'bg-yellow-100 text-yellow-800'
  };

  const typeColors = {
    'Full-time': 'bg-blue-100 text-blue-800',
    'Part-time': 'bg-purple-100 text-purple-800',
    'Contract': 'bg-orange-100 text-orange-800',
    'Internship': 'bg-pink-100 text-pink-800'
  };

  const filteredRequirements = requirements.filter(requirement => {
    const matchesSearch = requirement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         requirement.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         requirement.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || requirement.status === statusFilter;
    const matchesType = typeFilter === 'All' || requirement.type === typeFilter;
    return matchesSearch && matchesStatus && matchesType;
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Job Requirements</h1>
          <p className="text-gray-600 mt-1">Manage job postings and requirements</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          <Plus className="h-4 w-4" />
          <span>Post New Job</span>
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search job requirements..."
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
                <option value="Open">Open</option>
                <option value="Closed">Closed</option>
                <option value="On Hold">On Hold</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="All">All Types</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Requirements Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredRequirements.map((requirement) => (
          <div key={requirement.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{requirement.title}</h3>
                <p className="text-sm text-gray-600">{requirement.department}</p>
              </div>
              <div className="flex space-x-2">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColors[requirement.status]}`}>
                  {requirement.status}
                </span>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${typeColors[requirement.type]}`}>
                  {requirement.type}
                </span>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>{requirement.location}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>Posted: {new Date(requirement.postedDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Users className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>{requirement.applicantsCount} applicants</span>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-700 line-clamp-2">{requirement.description}</p>
            </div>

            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Key Requirements:</p>
              <ul className="space-y-1">
                {requirement.requirements.slice(0, 2).map((req, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-start">
                    <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    {req}
                  </li>
                ))}
                {requirement.requirements.length > 2 && (
                  <li className="text-sm text-gray-500">
                    +{requirement.requirements.length - 2} more requirements
                  </li>
                )}
              </ul>
            </div>

            <div className="flex space-x-2">
              <button className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors">
                <Eye className="h-4 w-4" />
                <span>View Details</span>
              </button>
              <button className="px-3 py-2 text-sm font-medium text-gray-600 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
                <Edit className="h-4 w-4" />
              </button>
              <button className="px-3 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-md hover:bg-red-100 transition-colors">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredRequirements.length === 0 && (
        <div className="text-center py-12">
          <FileText className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No job requirements found</h3>
          <p className="mt-1 text-sm text-gray-500">
            Try adjusting your search or filter criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default Requirements;