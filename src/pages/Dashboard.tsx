import React from 'react';
import { Users, FileText, BarChart3, TrendingUp, Clock, CheckCircle } from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    {
      name: 'Total Applicants',
      value: '1,247',
      change: '+12%',
      changeType: 'increase',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      name: 'Open Positions',
      value: '23',
      change: '+3',
      changeType: 'increase',
      icon: FileText,
      color: 'bg-green-500'
    },
    {
      name: 'Interviews Scheduled',
      value: '45',
      change: '+8',
      changeType: 'increase',
      icon: Clock,
      color: 'bg-yellow-500'
    },
    {
      name: 'Hired This Month',
      value: '12',
      change: '+4',
      changeType: 'increase',
      icon: CheckCircle,
      color: 'bg-purple-500'
    }
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'application',
      message: 'New application received for Senior Developer position',
      time: '2 minutes ago',
      applicant: 'John Smith'
    },
    {
      id: 2,
      type: 'interview',
      message: 'Interview scheduled with Sarah Johnson',
      time: '15 minutes ago',
      applicant: 'Sarah Johnson'
    },
    {
      id: 3,
      type: 'hire',
      message: 'Michael Brown has been hired for UI/UX Designer',
      time: '1 hour ago',
      applicant: 'Michael Brown'
    },
    {
      id: 4,
      type: 'requirement',
      message: 'New job requirement posted: Marketing Manager',
      time: '2 hours ago',
      applicant: null
    }
  ];

  const upcomingInterviews = [
    {
      id: 1,
      applicant: 'Alice Cooper',
      position: 'Frontend Developer',
      time: '10:00 AM',
      date: 'Today',
      interviewer: 'John Doe'
    },
    {
      id: 2,
      applicant: 'Bob Wilson',
      position: 'Backend Developer',
      time: '2:00 PM',
      date: 'Today',
      interviewer: 'Jane Smith'
    },
    {
      id: 3,
      applicant: 'Carol Davis',
      position: 'Product Manager',
      time: '11:00 AM',
      date: 'Tomorrow',
      interviewer: 'Mike Johnson'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your recruitment process.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-sm font-medium text-green-600">{stat.change}</span>
                <span className="text-sm text-gray-500 ml-1">from last month</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="h-2 w-2 bg-blue-500 rounded-full mt-2"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">{activity.message}</p>
                    {activity.applicant && (
                      <p className="text-sm text-gray-500">Applicant: {activity.applicant}</p>
                    )}
                    <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Interviews */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Upcoming Interviews</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {upcomingInterviews.map((interview) => (
                <div key={interview.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">{interview.applicant}</h3>
                    <p className="text-sm text-gray-600">{interview.position}</p>
                    <p className="text-xs text-gray-500">Interviewer: {interview.interviewer}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{interview.time}</p>
                    <p className="text-xs text-gray-500">{interview.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center justify-center space-x-2 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
            <Users className="h-5 w-5 text-gray-400" />
            <span className="text-sm font-medium text-gray-600">Add New Applicant</span>
          </button>
          <button className="flex items-center justify-center space-x-2 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
            <FileText className="h-5 w-5 text-gray-400" />
            <span className="text-sm font-medium text-gray-600">Post New Job</span>
          </button>
          <button className="flex items-center justify-center space-x-2 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
            <BarChart3 className="h-5 w-5 text-gray-400" />
            <span className="text-sm font-medium text-gray-600">Generate Report</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;