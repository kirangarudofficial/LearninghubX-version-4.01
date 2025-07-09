import React, { useState } from 'react';
import { 
  BookOpen, Calendar, Users, MessageCircle, Settings, 
  Play, Clock, Star, TrendingUp, Award, Target,
  ChevronLeft, ChevronRight, Filter, Search, Bell
} from 'lucide-react';

const StudentDashboard = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [filterBy, setFilterBy] = useState('all');

  const enrolledCourses = [
    {
      id: 1,
      title: 'Operating System',
      description: 'Learn concepts of operating systems, mechanisms, and their implementations.',
      instructor: 'Mark Lee',
      progress: 65,
      totalLessons: 24,
      completedLessons: 16,
      nextLesson: 'Process Synchronization',
      color: 'bg-blue-500',
      image: '💻'
    },
    {
      id: 2,
      title: 'Artificial Intelligence',
      description: 'Intelligence demonstrated by machines, unlike natural intelligence displayed by humans and animals.',
      instructor: 'Jung Jaehyun',
      progress: 45,
      totalLessons: 32,
      completedLessons: 14,
      nextLesson: 'Machine Learning Basics',
      color: 'bg-purple-500',
      image: '🤖'
    },
    {
      id: 3,
      title: 'Software Engineering',
      description: 'Learn concepts of engineering for the design, development and maintenance of software.',
      instructor: 'Kim Taeyoung',
      progress: 80,
      totalLessons: 28,
      completedLessons: 22,
      nextLesson: 'Testing Strategies',
      color: 'bg-pink-500',
      image: '⚙️'
    }
  ];

  const onlineUsers = [
    { id: 1, name: 'Maren Maureen', role: 'Web Designer', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150', status: 'online' },
    { id: 2, name: 'Jennifer Jane', role: 'Developer', avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150', status: 'online' },
    { id: 3, name: 'Ryan Herwinds', role: 'UI Designer', avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150', status: 'online' },
    { id: 4, name: 'Kierra Culhane', role: 'Developer', avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150', status: 'online' }
  ];

  const upcomingEvents = [
    { date: 15, title: 'OS Quiz', type: 'quiz' },
    { date: 18, title: 'AI Project Due', type: 'assignment' },
    { date: 22, title: 'SE Presentation', type: 'presentation' }
  ];

  const stats = {
    coursesEnrolled: 8,
    coursesCompleted: 3,
    totalHours: 124,
    certificates: 2
  };

  const generateCalendar = () => {
    const year = selectedMonth.getFullYear();
    const month = selectedMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add days of the month
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

  const getEventForDay = (day: number) => {
    return upcomingEvents.find(event => event.date === day);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-gradient-to-b from-indigo-600 to-purple-700 text-white min-h-screen">
          <div className="p-6">
            <div className="flex items-center mb-8">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-3">
                <BookOpen className="h-5 w-5 text-indigo-600" />
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
                All Courses
              </a>
              <a href="#" className="flex items-center px-4 py-3 hover:bg-white hover:bg-opacity-10 rounded-xl transition-colors">
                <MessageCircle className="h-5 w-5 mr-3" />
                Messages
              </a>
              <a href="#" className="flex items-center px-4 py-3 hover:bg-white hover:bg-opacity-10 rounded-xl transition-colors">
                <Users className="h-5 w-5 mr-3" />
                Friends
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
              <a href="#" className="flex items-center px-4 py-3 hover:bg-white hover:bg-opacity-10 rounded-xl transition-colors">
                <Users className="h-5 w-5 mr-3" />
                Directory
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
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">My Courses</h1>
                  <div className="flex items-center space-x-6 text-sm text-gray-600">
                    <div className="flex items-center">
                      <span className="mr-2">Filter by:</span>
                      <select 
                        value={filterBy}
                        onChange={(e) => setFilterBy(e.target.value)}
                        className="border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        <option value="all">All</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                      </select>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span>Time</span>
                      <span>Level</span>
                      <span>Language</span>
                      <span>Type</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
                    <img 
                      src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150"
                      alt="Christine Eva"
                      className="w-8 h-8 rounded-full mr-3"
                    />
                    <div>
                      <div className="text-sm font-medium text-gray-900">Christine Eva</div>
                      <div className="text-xs text-gray-500">Student User</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-blue-600" />
                    </div>
                    <span className="text-2xl font-bold text-gray-900">{stats.coursesEnrolled}</span>
                  </div>
                  <div className="text-gray-600 text-sm">Courses Enrolled</div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <Award className="h-6 w-6 text-green-600" />
                    </div>
                    <span className="text-2xl font-bold text-gray-900">{stats.coursesCompleted}</span>
                  </div>
                  <div className="text-gray-600 text-sm">Completed</div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Clock className="h-6 w-6 text-purple-600" />
                    </div>
                    <span className="text-2xl font-bold text-gray-900">{stats.totalHours}</span>
                  </div>
                  <div className="text-gray-600 text-sm">Hours Learned</div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                      <Star className="h-6 w-6 text-yellow-600" />
                    </div>
                    <span className="text-2xl font-bold text-gray-900">{stats.certificates}</span>
                  </div>
                  <div className="text-gray-600 text-sm">Certificates</div>
                </div>
              </div>

              {/* Course Cards */}
              <div className="space-y-6">
                {enrolledCourses.map((course) => (
                  <div key={course.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className={`w-16 h-16 ${course.color} rounded-2xl flex items-center justify-center text-2xl`}>
                          {course.image}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                          <p className="text-gray-600 mb-4 leading-relaxed">{course.description}</p>
                          <div className="text-sm text-gray-500 mb-4">Created by {course.instructor}</div>
                          
                          <div className="flex items-center space-x-6 mb-4">
                            <div className="text-sm text-gray-600">
                              Progress: {course.completedLessons}/{course.totalLessons} lessons
                            </div>
                            <div className="text-sm text-gray-600">
                              {course.progress}% complete
                            </div>
                          </div>

                          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                            <div 
                              className={`h-2 rounded-full ${course.color}`}
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>

                          <div className="text-sm text-gray-600">
                            Next: {course.nextLesson}
                          </div>
                        </div>
                      </div>
                      
                      <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors flex items-center">
                        <Play className="h-4 w-4 mr-2" />
                        Continue
                      </button>
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
                              ? 'bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-medium' 
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

              {/* Online Users */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Online Users</h3>
                  <button className="text-indigo-600 text-sm hover:text-indigo-700">See all</button>
                </div>

                <div className="space-y-4">
                  {onlineUsers.map((user) => (
                    <div key={user.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <img 
                            src={user.avatar}
                            alt={user.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 text-sm">{user.name}</div>
                          <div className="text-gray-500 text-xs">{user.role}</div>
                        </div>
                      </div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
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
                      <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                        <span className="text-indigo-600 font-semibold text-sm">{event.date}</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 text-sm">{event.title}</div>
                        <div className="text-gray-500 text-xs capitalize">{event.type}</div>
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

export default StudentDashboard;