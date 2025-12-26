'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [currentTime, setCurrentTime] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }));
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const greetings = [
    "Hello, World! 👋",
    "Hello, I am the goat! 👋",
    "Bonjour! 🇫🇷",
    "Hola! 🇪🇸", 
    "こんにちは! 🇯🇵",
    "Guten Tag! 🇩🇪",
    "Ciao! 🇮🇹",
    "Olá! 🇧🇷",
    "Привет! 🇷🇺",
    "Hello, World Pat here!"
  ];

  const [currentGreeting, setCurrentGreeting] = useState(0);

  useEffect(() => {
    if (!mounted) return;
    
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [mounted, greetings.length]);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
        <div className="text-center">
          <div className="animate-pulse">
            <div className="h-16 bg-gray-200 dark:bg-gray-700 rounded-lg w-64 mx-auto mb-4"></div>
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-lg w-32 mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 transition-all duration-1000">
      <div className="text-center space-y-8 p-8 max-w-2xl mx-auto">
        {/* Animated Hello */}
        <div className="relative">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
            {greetings[currentGreeting]}
          </h1>
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg blur opacity-20 animate-pulse"></div>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light tracking-wide">
          Welcome to the future of web development
        </p>

        {/* Live Clock */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Current Time</p>
          <p className="text-3xl md:text-4xl font-mono font-bold text-gray-800 dark:text-gray-100 tracking-wider">
            {currentTime}
          </p>
        </div>

        {/* Interactive Elements */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => setCurrentGreeting((prev) => (prev + 1) % greetings.length)}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out"
          >
            <span className="relative z-10">Change Greeting</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>

        {/* Tech Stack Badge */}
        <div className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 rounded-full px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-300">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span>Built with Next.js & Tailwind CSS</span>
        </div>
      </div>
    </div>
  );
}
