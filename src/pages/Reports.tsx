import React, { useState } from 'react';
import { BarChart3, Download, Calendar, TrendingUp, Users, FileText, Clock, CheckCircle } from 'lucide-react';
import { Report } from '../types';

const Reports: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('This Month');

  // Mock data for reports
  const reports: Report[] = [
    {
      id: '1',
      title: 'Monthly Hiring Report',
      type: 'Hiring',
      generatedDate: '2024-01-20',
      data: {
        totalHires: 12,
        averageTimeToHire: 18,
        topSources: ['LinkedIn', 'Company Website', 'Referrals']
      }
    },
    {
      id: '2',
      title: 'Department Performance',
      type: 'Department',
      generatedDate: '2024-01-19',
      data: {
        departments: [
          { name: 'Engineering', hires: 8, applications: 156 },
          { name: 'Design', hires: 2, applications: 43 },
          { name: 'Product', hires: 1, applications: 28 },
          { name: 'Marketing', hires: 1, applications: 67 }
        ]
      }
    },
    {
      id: '3',
      title: 'Recruitment Funnel Analysis',
      type: 'Performance',
      generatedDate: '2024-01-18',
      data: {
        stages: [
          { name: 'Applications', count: 294 },
          { name: 'Screening', count: 147 },
          { name: 'Interview', count: 73 },
          { name: 'Offer', count: 24 },
          { name: 'Hired', count: 12 }
        ]
      }
    }
  ];

  const metrics = [
    {
      name: 'Total Applications',
      value: '294',
      change: '+23%',
      changeType: 'increase',
      icon: FileText,
      color: 'text-blue-600'
    },
    {
      name: 'Active Candidates',
      value: '147',
      change: '+12%',
      changeType: 'increase',
      icon: Users,
      color: 'text-green-600'
    },
    {
      name: 'Avg. Time to Hire',
      value: '18 days',
      change: '-2 days',
      changeType: 'decrease',
      icon: Clock,
      color: 'text-purple-600'
    },
    {
      name: 'Success Rate',
      value: '4.1%',
      change: '+0.5%',
      changeType: 'increase',
      icon: CheckCircle,
      color: 'text-orange-600'
    }
  ];

  const typeColors = {
    'Hiring': 'bg-blue-100 text-blue-800',
    'Performance': 'bg-green-100 text-green-800',
    'Department': 'bg-purple-100 text-purple-800',
    'Monthly': 'bg-orange-100 text-orange-800'
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-gray-600 mt-1">Track recruitment performance and generate insights</p>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="This Week">This Week</option>
            <option value="This Month">This Month</option>
            <option value="Last 3 Months">Last 3 Months</option>
            <option value="This Year">This Year</option>
          </select>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            <Download className="h-4 w-4" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div key={metric.name} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{metric.name}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
                </div>
                <div className={`p-3 rounded-lg bg-gray-50`}>
                  <Icon className={`h-6 w-6 ${metric.color}`} />
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <TrendingUp className={`h-4 w-4 mr-1 ${metric.changeType === 'increase' ? 'text-green-500' : 'text-red-500'}`} />
                <span className={`text-sm font-medium ${metric.changeType === 'increase' ? 'text-green-600' : 'text-red-600'}`}>
                  {metric.change}
                </span>
                <span className="text-sm text-gray-500 ml-1">from last period</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recruitment Funnel */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recruitment Funnel</h2>
          <div className="space-y-4">
            {reports.find(r => r.title === 'Recruitment Funnel Analysis')?.data.stages.map((stage, index) => {
              const percentage = index === 0 ? 100 : (stage.count / 294) * 100;
              return (
                <div key={stage.name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">{stage.name}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900 w-8">{stage.count}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Department Performance */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Department Performance</h2>
          <div className="space-y-4">
            {reports.find(r => r.title === 'Department Performance')?.data.departments.map((dept) => (
              <div key={dept.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">{dept.name}</h3>
                  <p className="text-xs text-gray-600">{dept.applications} applications</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-gray-900">{dept.hires} hires</p>
                  <p className="text-xs text-gray-600">
                    {((dept.hires / dept.applications) * 100).toFixed(1)}% success
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Recent Reports</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {reports.map((report) => (
              <div key={report.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <BarChart3 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">{report.title}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${typeColors[report.type]}`}>
                        {report.type}
                      </span>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(report.generatedDate).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors">
                    View
                  </button>
                  <button className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
                    <Download className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;