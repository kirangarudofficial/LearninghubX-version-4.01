import React, { useState } from 'react';
import { 
  BookOpen, Users, TrendingUp, DollarSign, Plus, 
  Calendar, MessageCircle, Settings, Eye, Edit,
  ChevronLeft, ChevronRight, Star, Clock, Award,
  BarChart3, PieChart, Activity
} from 'lucide-react';

const InstructorDashboard = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date());

  const myCourses = [
    {
      id: 1,
      title: 'Advanced React Development',
      description: 'Master React hooks, context, performance optimization, and advanced patterns.',
      students: 1247,
      rating: 4.8,
      revenue: 24940,
      status: 'published',
      progress: 100,
      color: 'bg-blue-500',
      image: '⚛️',
      lastUpdated: '2 days ago'
    },
    {
      id: 2,
      title: 'Full Stack JavaScript',
      description: 'Complete guide to building modern web applications with Node.js and React.',
      students: 892,
      rating: 4.7,
      revenue: 17840,
      status: 'published',
      progress: 100,
      color: 'bg-yellow-500',
      image: '🚀',
      lastUpdated: '1 week ago'
    },
    {
      id: 3,
      title: 'TypeScript Fundamentals',
      description: 'Learn TypeScript from basics to advanced concepts with practical examples.',
      students: 0,
      rating: 0,
      revenue: 0,
      status: 'draft',
      progress: 65,
      color: 'bg-purple-500',
      image: '📘',
      lastUpdated: 'Today'
    }
  ];

  const recentStudents = [
    { id: 1, name: 'Sarah Johnson', course: 'Advanced React', enrolled: '2 hours ago', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { id: 2, name: 'Mike Chen', course: 'Full Stack JS', enrolled: '5 hours ago', avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { id: 3, name: 'Emma Davis', course: 'Advanced React', enrolled: '1 day ago', avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { id: 4, name: 'Alex Rodriguez', course: 'Full Stack JS', enrolled: '2 days ago', avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150' }
  ];

  const stats = {
    totalStudents: 2139,
    totalRevenue: 42780,
    totalCourses: 8,
    avgRating: 4.7,
    monthlyGrowth: 12.5,
    completionRate: 78
  };

  const revenueData = [
    { month: 'Jan', amount: 3200 },
    { month: 'Feb', amount: 4100 },
    { month: 'Mar', amount: 3800 },
    { month: 'Apr', amount: 5200 },
    { month: 'May', amount: 4900 },
    { month: 'Jun', amount: 6100 }
  ];

  const upcomingEvents = [
    { date: 15, title: 'Live Q&A Session', type: 'live', course: 'Advanced React' },
    { date: 18, title: 'Course Update', type: 'update', course: 'Full Stack JS' },
    { date: 22, title: 'Student Reviews', type: 'review', course: 'TypeScript' }
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

  const hasEvent = (day: number) => {
    return upcomingEvents.some(event => event.date === day);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-blue-50 to-teal-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-gradient-to-b from-teal-600 to-green-700 text-white min-h-screen">
          <div className="p-6">
            <div className="flex items-center mb-8">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-3">
                <BookOpen className="h-5 w-5 text-teal-600" />
              </div>
              <span className="text-xl font-bold">ÊCoursie</span>
            </div>

            <nav className="space-y-2">
              <a href="#" className="flex items-center px-4 py-3 bg-white bg-opacity-20 rounded-xl">
                <div className="w-6 h-6 bg-white bg-opacity-30 rounded-lg flex items-center justify-center mr-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                Dashboard
              </a>
              <a href="#" className="flex items-center px-4 py-3 hover:bg-white hover:bg-opacity-10 rounded-xl transition-colors">
                <BookOpen className="h-5 w-5 mr-3" />
                My Courses
              </a>
              <a href="#" className="flex items-center px-4 py-3 hover:bg-white hover:bg-opacity-10 rounded-xl transition-colors">
                <Users className="h-5 w-5 mr-3" />
                Students
              </a>
              <a href="#" className="flex items-center px-4 py-3 hover:bg-white hover:bg-opacity-10 rounded-xl transition-colors">
                <MessageCircle className="h-5 w-5 mr-3" />
                Messages
              </a>
              <a href="#" className="flex items-center px-4 py-3 hover:bg-white hover:bg-opacity-10 rounded-xl transition-colors">
                <BarChart3 className="h-5 w-5 mr-3" />
                Analytics
              </a>
              <a href="#" className="flex items-center px-4 py-3 hover:bg-white hover:bg-opacity-10 rounded-xl transition-colors">
                <Calendar className="h-5 w-5 mr-3" />
                Schedule
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
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Instructor Dashboard</h1>
                  <p className="text-gray-600">Manage your courses and track your teaching performance</p>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="bg-teal-600 text-white px-6 py-3 rounded-xl hover:bg-teal-700 transition-colors flex items-center">
                    <Plus className="h-4 w-4 mr-2" />
                    Create Course
                  </button>
                  <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
                    <img 
                      src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150"
                      alt="Instructor"
                      className="w-8 h-8 rounded-full mr-3"
                    />
                    <div>
                      <div className="text-sm font-medium text-gray-900">John Smith</div>
                      <div className="text-xs text-gray-500">Instructor</div>
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
                    <span className="text-2xl font-bold text-gray-900">{stats.totalStudents.toLocaleString()}</span>
                  </div>
                  <div className="text-gray-600 text-sm">Total Students</div>
                  <div className="text-green-600 text-xs mt-1">+{stats.monthlyGrowth}% this month</div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <DollarSign className="h-6 w-6 text-green-600" />
                    </div>
                    <span className="text-2xl font-bold text-gray-900">${stats.totalRevenue.toLocaleString()}</span>
                  </div>
                  <div className="text-gray-600 text-sm">Total Revenue</div>
                  <div className="text-green-600 text-xs mt-1">+18.2% this month</div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-purple-600" />
                    </div>
                    <span className="text-2xl font-bold text-gray-900">{stats.totalCourses}</span>
                  </div>
                  <div className="text-gray-600 text-sm">Total Courses</div>
                  <div className="text-blue-600 text-xs mt-1">3 published, 1 draft</div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                      <Star className="h-6 w-6 text-yellow-600" />
                    </div>
                    <span className="text-2xl font-bold text-gray-900">{stats.avgRating}</span>
                  </div>
                  <div className="text-gray-600 text-sm">Average Rating</div>
                  <div className="text-yellow-600 text-xs mt-1">{stats.completionRate}% completion rate</div>
                </div>
              </div>

              {/* Revenue Chart */}
              <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Revenue Overview</h3>
                  <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm">
                    <option>Last 6 months</option>
                    <option>Last year</option>
                  </select>
                </div>
                <div className="flex items-end space-x-4 h-40">
                  {revenueData.map((data, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center">
                      <div 
                        className="bg-teal-500 rounded-t w-full transition-all duration-300 hover:bg-teal-600"
                        style={{ height: `${(data.amount / 6500) * 100}%` }}
                      ></div>
                      <div className="text-xs text-gray-600 mt-2">{data.month}</div>
                      <div className="text-xs font-medium text-gray-900">${data.amount}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* My Courses */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">My Courses</h2>
                  <button className="text-teal-600 hover:text-teal-700 font-medium">View All</button>
                </div>

                {myCourses.map((course) => (
                  <div key={course.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className={`w-16 h-16 ${course.color} rounded-2xl flex items-center justify-center text-2xl`}>
                          {course.image}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              course.status === 'published' 
                                ? 'bg-green-100 text-green-700' 
                                : 'bg-yellow-100 text-yellow-700'
                            }`}>
                              {course.status}
                            </span>
                          </div>
                          <p className="text-gray-600 mb-4 leading-relaxed">{course.description}</p>
                          
                          <div className="grid grid-cols-4 gap-6 mb-4">
                            <div>
                              <div className="text-2xl font-bold text-gray-900">{course.students.toLocaleString()}</div>
                              <div className="text-sm text-gray-600">Students</div>
                            </div>
                            <div>
                              <div className="flex items-center">
                                <Star className="h-4 w-4 text-yellow-500 mr-1" />
                                <span className="text-2xl font-bold text-gray-900">{course.rating || 'N/A'}</span>
                              </div>
                              <div className="text-sm text-gray-600">Rating</div>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-gray-900">${course.revenue.toLocaleString()}</div>
                              <div className="text-sm text-gray-600">Revenue</div>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-gray-900">{course.progress}%</div>
                              <div className="text-sm text-gray-600">Complete</div>
                            </div>
                          </div>

                          {course.status === 'draft' && (
                            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                              <div 
                                className="h-2 bg-yellow-500 rounded-full"
                                style={{ width: `${course.progress}%` }}
                              ></div>
                            </div>
                          )}

                          <div className="text-sm text-gray-500">
                            Last updated: {course.lastUpdated}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg">
                          <Edit className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
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
                    <div key={index} className="aspect-square flex items-center justify-center relative">
                      {day && (
                        <>
                          <span className={`text-sm ${
                            hasEvent(day) 
                              ? 'bg-teal-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-medium' 
                              : 'text-gray-700 hover:bg-gray-100 w-8 h-8 rounded-full flex items-center justify-center'
                          }`}>
                            {day}
                          </span>
                          {hasEvent(day) && (
                            <div className="absolute -bottom-1 w-1 h-1 bg-red-500 rounded-full"></div>
                          )}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Students */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Recent Students</h3>
                  <button className="text-teal-600 text-sm hover:text-teal-700">See all</button>
                </div>

                <div className="space-y-4">
                  {recentStudents.map((student) => (
                    <div key={student.id} className="flex items-center space-x-3">
                      <img 
                        src={student.avatar}
                        alt={student.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 text-sm">{student.name}</div>
                        <div className="text-gray-500 text-xs">{student.course}</div>
                        <div className="text-gray-400 text-xs">{student.enrolled}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Events */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Events</h3>
                <div className="space-y-3">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                      <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
                        <span className="text-teal-600 font-semibold text-sm">{event.date}</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 text-sm">{event.title}</div>
                        <div className="text-gray-500 text-xs">{event.course}</div>
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

export default InstructorDashboard;