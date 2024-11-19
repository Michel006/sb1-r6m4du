import { Menu, Search, Bell, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              ZWAJO
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              <a href="#discover" className="text-gray-700 hover:text-blue-600">Discover</a>
              <a href="#marketplace" className="text-gray-700 hover:text-blue-600">Marketplace</a>
              <a href="#resources" className="text-gray-700 hover:text-blue-600">Resources</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600">Projects</a>
            </nav>

            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Search className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <MessageSquare className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Bell className="w-5 h-5 text-gray-600" />
              </button>
              <button className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                JD
              </button>
            </div>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#discover" className="block px-3 py-2 text-gray-700">Discover</a>
            <a href="#marketplace" className="block px-3 py-2 text-gray-700">Marketplace</a>
            <a href="#resources" className="block px-3 py-2 text-gray-700">Resources</a>
            <a href="#projects" className="block px-3 py-2 text-gray-700">Projects</a>
          </div>
        </div>
      )}
    </header>
  );
}