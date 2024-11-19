import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
import DashboardSidebar from './DashboardSidebar';
import DashboardHeader from './DashboardHeader';

export default function DashboardLayout() {
  const { user } = useAuthStore();

  if (!user) {
    return <div>Please login to access the dashboard</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}