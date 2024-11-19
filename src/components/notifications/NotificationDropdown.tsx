import React from 'react';
import { format } from 'date-fns';
import { useNotificationStore } from '../../store/useNotificationStore';

export default function NotificationDropdown() {
  const { notifications, markAsRead, markAllAsRead } = useNotificationStore();

  return (
    <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Notifications</h3>
          <button
            onClick={markAllAsRead}
            className="text-sm text-blue-600 hover:text-blue-700"
          >
            Mark all as read
          </button>
        </div>

        <div className="space-y-4 max-h-96 overflow-y-auto">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-3 rounded-lg ${
                notification.read ? 'bg-gray-50' : 'bg-blue-50'
              }`}
              onClick={() => markAsRead(notification.id)}
            >
              <div className="flex justify-between items-start">
                <h4 className="text-sm font-medium">{notification.title}</h4>
                <span className="text-xs text-gray-500">
                  {format(notification.createdAt, 'MMM d, HH:mm')}
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                {notification.message}
              </p>
            </div>
          ))}

          {notifications.length === 0 && (
            <p className="text-center text-gray-500 py-4">
              No notifications yet
            </p>
          )}
        </div>
      </div>
    </div>
  );
}