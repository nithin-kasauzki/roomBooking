import React from 'react';
import { Menu, User, LogOut } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button className="p-2 rounded-md text-gray-400 lg:hidden">
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-indigo-600">LuxStay</h1>
            </div>
          </div>
          
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <a className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
              Rooms
            </a>
            <a className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
              Bookings
            </a>
            <a className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
              Support
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600">
              <User className="h-5 w-5" />
              <span className="hidden md:inline">Profile</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600">
              <LogOut className="h-5 w-5" />
              <span className="hidden md:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}