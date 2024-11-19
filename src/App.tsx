import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import DashboardLayout from './components/dashboard/DashboardLayout';

function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        
        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              {/* Professional Networking */}
              <div className="flex flex-col items-start">
                <div className="rounded-lg p-2 bg-blue-100">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">Professional Networking</h3>
                <p className="mt-2 text-base text-gray-600">Connect with professionals in your industry, expand your network, and discover new opportunities.</p>
              </div>

              {/* Marketplace */}
              <div className="flex flex-col items-start">
                <div className="rounded-lg p-2 bg-green-100">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">Collaborative Marketplace</h3>
                <p className="mt-2 text-base text-gray-600">Post and find opportunities, services, and collaborations in our trusted marketplace.</p>
              </div>

              {/* Resources */}
              <div className="flex flex-col items-start">
                <div className="rounded-lg p-2 bg-purple-100">
                  <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">Resources & Training</h3>
                <p className="mt-2 text-base text-gray-600">Access webinars, workshops, and funding opportunities to grow your business.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div className="text-center">
                <div className="text-4xl font-bold text-white">10,000+</div>
                <div className="mt-2 text-sm text-blue-100">Active Professionals</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">5,000+</div>
                <div className="mt-2 text-sm text-blue-100">Successful Collaborations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">1,000+</div>
                <div className="mt-2 text-sm text-blue-100">Training Resources</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Platform</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">About</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Features</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Support</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Documentation</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Guides</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Help Center</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Blog</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Careers</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Privacy</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Terms</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 text-center">
              © 2024 ZWAJO. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard/*" element={<DashboardLayout />} />
      </Routes>
    </Router>
  );
}

export default App;