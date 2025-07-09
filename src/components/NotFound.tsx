import React from 'react';
import { AlertTriangle, Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const handleGoHome = () => {
    window.location.href = '/';
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4 transition-colors duration-200">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 dark:bg-red-900/20 rounded-full mb-6">
            <AlertTriangle className="h-10 w-10 text-red-600 dark:text-red-400" />
          </div>
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">Page Not Found</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={handleGoHome}
            className="w-full bg-blue-600 dark:bg-blue-500 text-white py-3 px-6 rounded-xl hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors font-semibold flex items-center justify-center"
          >
            <Home className="h-5 w-5 mr-2" />
            Go to Homepage
          </button>
          
          <button
            onClick={handleGoBack}
            className="w-full bg-gray-600 dark:bg-gray-700 text-white py-3 px-6 rounded-xl hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors font-semibold flex items-center justify-center"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Go Back
          </button>
        </div>

        <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
          <p>If you believe this is an error, please contact support.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;