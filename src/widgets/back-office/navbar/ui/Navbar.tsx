"use client";
import { useState } from "react";
import { AlignJustify, Bell, Moon, Sun, User } from "lucide-react";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [hasNotifications, setHasNotifications] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Здесь можно добавить логику для смены темы на уровне приложения
  };

  return (
    <div className="bg-gray-800 w-full h-16 flex items-center justify-between px-4 text-white shadow-md">
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-md hover:bg-gray-700 transition-colors">
          <AlignJustify size={20} />
        </button>
        <h1 className="text-xl font-bold hidden md:block">Decorify</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-md hover:bg-gray-700 transition-colors"
          aria-label={
            isDarkMode ? "Switch to light mode" : "Switch to dark mode"
          }
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <div className="relative">
          <button className="p-2 rounded-md hover:bg-gray-700 transition-colors">
            <Bell size={20} />
            {hasNotifications && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            )}
          </button>
        </div>
        <div className="relative">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="p-2 rounded-md hover:bg-gray-700 transition-colors"
          >
            <User size={20} />
          </button>
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 text-gray-800 z-10">
              <a href="#profile" className="block px-4 py-2 hover:bg-gray-100">
                Профиль
              </a>
              <a href="#settings" className="block px-4 py-2 hover:bg-gray-100">
                Настройки
              </a>
              <hr className="my-1" />
              <a
                href="#logout"
                className="block px-4 py-2 hover:bg-gray-100 text-red-500"
              >
                Выйти
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
