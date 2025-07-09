import React, { useState } from 'react';
import { 
  Users, BookOpen, TrendingUp, DollarSign, Shield, 
  Calendar, MessageCircle, Settings, AlertTriangle,
  ChevronLeft, ChevronRight, Star, Clock, Award,
  BarChart3, PieChart, Activity, Eye, Edit, Ban
} from 'lucide-react';

const AdminDashboard = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date());

  const platformStats = {
    totalUsers: 15420,
    totalCourses: 1247,
    totalRevenue: 245680,
    activeUsers: 8934,
    monthlyGrowth: 15.7,
    courseCompletionRate: 78.5,
    avgRating: 4.6,
    supportTickets: 23
  };

  const recentUsers = [
    { id: 1, name: 'Sarah Johnson', role: 'Student', joined: '2 hours ago', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150', status: 'active' },
    { id: 2, name: 'Mike Chen', role: 'Instructor', joined: '5 hours ago', avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150', status: 'active' },
    { id: 3, name: 'Emma Davis', role: 'Student', joined: '1 day ago', avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150', status: 'pending' },
    { id: 4, name: 'Alex Rodriguez', role: 'Instructor', joined: '2 days ago', avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150', status: 'active' }
  ];

  const topCourses = [
    {
      id: 1,
      title: 'Complete Web Development',
      instructor: 'Sarah Johnson',
      students: 2847,
      rating: 4.9,
      revenue: 56940,
      status: 'active',
      category: 'Web Development'
    },
    {
      id: 2,
      title: 'Data Science with Python',
      instructor: 'Mike Chen',
      students: 1923,
      rating: 4.8,
      revenue: 38460,
      status: 'active',
      category: 'Data Science'
    },
    {
      id: 3,
      title: 'UI/UX Design Fundamentals',
      instructor: 'Emma Wilson',
      students: 1456,
      rating: 4.7,
      revenue: 29120,
      status: 'active',
      category: 'Design'
    }
  ];

  const revenueData = [
    { month: 'Jan', amount: 18500 },
    { month: 'Feb', amount: 22300 },
    { month: 'Mar', amount: 25800 },
    { month: 'Apr', amount: 29600 },
    { month: 'May', amount: 33200 },
    { month: 'Jun', amount: 36800 }
  ];

  const userGrowthData = [
    { month: 'Jan', users: 1200 },
    { month: 'Feb', users: 1450 },
    { month: 'Mar', users: 1680 },
    { month: 'Apr', users: 1920 },
    { month: 'May', users: 2150 },
    { month: 'Jun', users: 2380 }
  ];

  const systemAlerts = [
    { id: 1, type: 'warning', message: 'Server load is above 80%', time: '5 min ago' },
    { id: 2, type: 'info', message: 'New course pending approval', time: '1 hour ago' },
    { id: 3, type: 'error', message: 'Payment gateway timeout', time: '2 hours ago' }
  ];

  const generateCalendar = () => {
    const year = selectedMonth.getFullYear();
    const month = selectedMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const navigateMonth = (direction: number) => {
    setSelectedMonth(new Date(selectedMonth.getFullYear(), selectedMonth.getMonth() + direction, 1));
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'error': return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case 'warning': return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      default: return <Activity className="h-4 w-4 text-blue-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-700';
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      case 'suspended': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 via-purple-50 to-pink-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-gradient-to-b from-red-600 to-pink-700 text-white min-h-screen">
          <div className="p-6">
            <div className="flex items-center mb-8">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-3">
                <Shield className="h-5 w-5 text-red-600" />
              </div>
              <span className="text-xl font-bold">ÊCoursie Admin</span>
            </div>

            <nav className="space-y-2">
              <a href="#" className="flex items-center px-4 py-3 bg-white bg-opacity-20 rounded-xl">
                <div className="w-6 h-6 bg-white bg-opacity-30 rounded-lg flex items-center justify-center mr-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                Dashboard
              </a>
              <a href="#" className="flex items-center px-4 py-3 hover:bg-white hover:bg-opacity-10 rounded-xl transition-colors">
                <Users className="h-5 w-5 mr-3" />
                User Management
              </a>
              <a href="#" className="flex items-center px-4 py-3 hover:bg-white hover:bg-opacity-10 rounded-xl transition-colors">
                <BookOpen className="h-5 w-5 mr-3" />
                Course Management
              </a>
              <a href="#" className="flex items-center px-4 py-3 hover:bg-white hover:bg-opacity-10 rounded-xl transition-colors">
                <DollarSign className="h-5 w-5 mr-3" />
                Revenue
              </a>
              <a href="#" className="flex items-center px-4 py-3 hover:bg-white hover:bg-opacity-10 rounded-xl transition-colors">
                <BarChart3 className="h-5 w-5 mr-3" />
                Analytics
              </a>
              <a href="#" className="flex items-center px-4 py-3 hover:bg-white hover:bg-opacity-10 rounded-xl transition-colors">
                <MessageCircle className="h-5 w-5 mr-3" />
                Support
              </a>
            </nav>

            <div className="mt-12 pt-6 border-t border-white border-opacity-20">
              <a href="#" className="flex items-center px-4 py-3 hover:bg-white hover:bg-opacity-10 rounded-xl transition-colors">
                <Settings className="h-5 w-5 mr-3" />
                Settings
              </a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-3">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
                  <p className="text-gray-600">Monitor platform performance and manage operations</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
                    <img 
                      src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150"
                      alt="Admin"
                      className="w-8 h-8 rounded-full mr-3"
                    />
                    <div>
                      <div className="text-sm font-medium text-gray-900">Admin User</div>
                      <div className="text-xs text-gray-500">Administrator</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <span className="text-2xl font-bold text-gray-900">{platformStats.totalUsers.toLocaleString()}</span>
                  </div>
                  <div className="text-gray-600 text-sm">Total Users</div>
                  <div className="text-green-600 text-xs mt-1">+{platformStats.monthlyGrowth}% this month</div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-green-600" />
                    </div>
                    <span className="text-2xl font-bold text-gray-900">{platformStats.totalCourses.toLocaleString()}</span>
                  </div>
                  <div className="text-gray-600 text-sm">Total Courses</div>
                  <div className="text-blue-600 text-xs mt-1">{platformStats.courseCompletionRate}% completion rate</div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <DollarSign className="h-6 w-6 text-purple-600" />
                    </div>
                    <span className="text-2xl font-bold text-gray-900">${platformStats.totalRevenue.toLocaleString()}</span>
                  </div>
                  <div className="text-gray-600 text-sm">Total Revenue</div>
                  <div className="text-green-600 text-xs mt-1">+22.4% this month</div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                      <Activity className="h-6 w-6 text-yellow-600" />
                    </div>
                    <span className="text-2xl font-bold text-gray-900">{platformStats.activeUsers.toLocaleString()}</span>
                  </div>
                  <div className="text-gray-600 text-sm">Active Users</div>
                  <div className="text-orange-600 text-xs mt-1">{platformStats.supportTickets} support tickets</div>
                </div>
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {/* Revenue Chart */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">Revenue Growth</h3>
                    <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm">
                      <option>Last 6 months</option>
                      <option>Last year</option>
                    </select>
                  </div>
                  <div className="flex items-end space-x-3 h-40">
                    {revenueData.map((data, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center">
                        <div 
                          className="bg-red-500 rounded-t w-full transition-all duration-300 hover:bg-red-600"
                          style={{ height: `${(data.amount / 40000) * 100}%` }}
                        ></div>
                        <div className="text-xs text-gray-600 mt-2">{data.month}</div>
                        <div className="text-xs font-medium text-gray-900">${(data.amount / 1000).toFixed(0)}k</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* User Growth Chart */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">User Growth</h3>
                    <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm">
                      <option>Last 6 months</option>
                      <option>Last year</option>
                    </select>
                  </div>
                  <div className="flex items-end space-x-3 h-40">
                    {userGrowthData.map((data, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center">
                        <div 
                          className="bg-blue-500 rounded-t w-full transition-all duration-300 hover:bg-blue-600"
                          style={{ height: `${(data.users / 2500) * 100}%` }}
                        ></div>
                        <div className="text-xs text-gray-600 mt-2">{data.month}</div>
                        <div className="text-xs font-medium text-gray-900">{data.users}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Top Courses */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Top Performing Courses</h3>
                  <button className="text-red-600 hover:text-red-700 font-medium">View All</button>
                </div>

                <div className="space-y-4">
                  {topCourses.map((course) => (
                    <div key={course.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold">
                          #{course.id}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{course.title}</h4>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span>by {course.instructor}</span>
                            <span>{course.students.toLocaleString()} students</span>
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-500 mr-1" />
                              {course.rating}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="font-semibold text-gray-900">${course.revenue.toLocaleString()}</div>
                          <div className="text-sm text-gray-600">Revenue</div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-lg">
                            <Eye className="h-4 w-4" />
                          </button>
                          <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-lg">
                            <Edit className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Calendar */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {selectedMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => navigateMonth(-1)}
                      className="p-1 hover:bg-gray-100 rounded-lg"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button 
                      onClick={() => navigateMonth(1)}
                      className="p-1 hover:bg-gray-100 rounded-lg"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-7 gap-1 mb-2">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                    <div key={day} className="text-center text-xs text-gray-500 py-2">
                      {day}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {generateCalendar().map((day, index) => (
                    <div key={index} className="aspect-square flex items-center justify-center">
                      {day && (
                        <span className="text-sm text-gray-700 hover:bg-gray-100 w-8 h-8 rounded-full flex items-center justify-center">
                          {day}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* System Alerts */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">System Alerts</h3>
                  <button className="text-red-600 text-sm hover:text-red-700">View All</button>
                </div>

                <div className="space-y-4">
                  {systemAlerts.map((alert) => (
                    <div key={alert.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-xl">
                      {getAlertIcon(alert.type)}
                      <div className="flex-1">
                        <div className="text-sm text-gray-900">{alert.message}</div>
                        <div className="text-xs text-gray-500 mt-1">{alert.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Users */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Recent Users</h3>
                  <button className="text-red-600 text-sm hover:text-red-700">Manage</button>
                </div>

                <div className="space-y-4">
                  {recentUsers.map((user) => (
                    <div key={user.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img 
                          src={user.avatar}
                          alt={user.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-medium text-gray-900 text-sm">{user.name}</div>
                          <div className="text-gray-500 text-xs">{user.role}</div>
                          <div className="text-gray-400 text-xs">{user.joined}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(user.status)}`}>
                          {user.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;