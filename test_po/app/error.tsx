'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-red-900">
      <div className="text-center space-y-8 p-8 max-w-2xl mx-auto">
        {/* Error Animation */}
        <div className="relative">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent animate-pulse">
            Oops!
          </h1>
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 rounded-lg blur opacity-20 animate-pulse"></div>
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">
            Something went wrong!
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-light">
            Don&apos;t worry, it&apos;s not your fault. Let&apos;s try again.
          </p>
          {process.env.NODE_ENV === 'development' && (
            <details className="text-left bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
              <summary className="cursor-pointer font-semibold text-red-800 dark:text-red-200 mb-2">
                Error Details (Development Only)
              </summary>
              <pre className="text-sm text-red-700 dark:text-red-300 overflow-auto">
                {error.message}
              </pre>
              {error.digest && (
                <p className="text-xs text-red-600 dark:text-red-400 mt-2">
                  Error ID: {error.digest}
                </p>
              )}
            </details>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={reset}
            className="group relative px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out"
          >
            <span className="relative z-10">Try Again</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button
            onClick={() => window.location.href = '/'}
            className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300"
          >
            Go Home
          </button>
        </div>

        {/* Status Indicator */}
        <div className="inline-flex items-center space-x-2 bg-red-100 dark:bg-red-900/30 rounded-full px-6 py-3 text-sm font-medium text-red-700 dark:text-red-300">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          <span>Error detected - Ready to retry</span>
        </div>
      </div>
    </div>
  );
}

