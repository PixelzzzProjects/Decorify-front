"use client";
import { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes, FaChartBar, FaUsers } from "react-icons/fa";
import {
  RiDashboardLine,
  RiSettings4Line,
  RiLogoutBoxLine,
  RiUserLine,
} from "react-icons/ri";
import { BsBoxSeam, BsCart3 } from "react-icons/bs";
// Удаляем импорт CSS файла

interface NavbarProps {
  username?: string;
  onLogout?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  username = "Администратор",
  onLogout = () => console.log("Выход из системы"),
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleProfileMenuToggle = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };

  // Закрываем меню при клике вне его
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target as Node)
      ) {
        setProfileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuItems = [
    { text: "Дашборд", icon: <RiDashboardLine />, path: "/admin/dashboard" },
    { text: "Товары", icon: <BsBoxSeam />, path: "/admin/products" },
    { text: "Заказы", icon: <BsCart3 />, path: "/admin/orders" },
    { text: "Клиенты", icon: <FaUsers />, path: "/admin/customers" },
    { text: "Аналитика", icon: <FaChartBar />, path: "/admin/analytics" },
    { text: "Настройки", icon: <RiSettings4Line />, path: "/admin/settings" },
  ];

  return (
    <div className="relative">
      {/* Верхняя панель навигации */}
      <header className="flex justify-between items-center bg-gray-800 text-white px-4 h-16 shadow-md">
        <div className="flex items-center">
          <button
            className="bg-transparent border-none text-white text-2xl cursor-pointer p-2"
            onClick={handleDrawerToggle}
          >
            <FaBars />
          </button>
          <h1 className="ml-4 text-xl font-semibold">Админ-панель</h1>
        </div>
        <div className="flex items-center">
          <div className="relative" ref={profileMenuRef}>
            <button
              className="bg-transparent border-none cursor-pointer flex items-center p-0"
              onClick={handleProfileMenuToggle}
            >
              <div className="w-8 h-8 rounded-full bg-gray-600 text-white flex items-center justify-center font-bold">
                {username.charAt(0)}
              </div>
            </button>

            {/* Выпадающее меню профиля */}
            {profileMenuOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white rounded shadow-lg min-w-[200px] z-50">
                <ul className="list-none p-0 m-0">
                  <li>
                    <a
                      href="#profile"
                      className="flex items-center py-3 px-4 text-gray-700 hover:bg-gray-100"
                    >
                      <RiUserLine className="mr-3 text-base" />
                      <span>Профиль</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#settings"
                      className="flex items-center py-3 px-4 text-gray-700 hover:bg-gray-100"
                    >
                      <RiSettings4Line className="mr-3 text-base" />
                      <span>Настройки</span>
                    </a>
                  </li>
                  <li className="h-px bg-gray-200 my-2"></li>
                  <li>
                    <button
                      onClick={onLogout}
                      className="flex items-center py-3 px-4 text-red-600 hover:bg-gray-100 w-full text-left border-none bg-transparent cursor-pointer"
                    >
                      <RiLogoutBoxLine className="mr-3 text-base" />
                      <span>Выйти</span>
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Боковое меню */}
      <div
        className={`fixed top-0 left-0 w-[260px] h-full bg-gray-800 text-white z-50 overflow-y-auto transition-all duration-300 ease-in-out ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <h2 className="m-0 text-xl">Меню</h2>
          <button
            className="bg-transparent border-none text-white cursor-pointer text-xl"
            onClick={handleDrawerToggle}
          >
            <FaTimes />
          </button>
        </div>

        <div className="h-px bg-gray-700 my-2"></div>

        <nav>
          <ul className="list-none p-0 m-0">
            {menuItems.map((item) => (
              <li key={item.text}>
                <a
                  href={item.path}
                  className="flex items-center py-3 px-4 text-white hover:bg-gray-700"
                >
                  <span className="mr-3 text-xl w-6 flex items-center justify-center">
                    {item.icon}
                  </span>
                  <span>{item.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="h-px bg-gray-700 my-2"></div>

        <div className="p-4">
          <button
            onClick={onLogout}
            className="flex items-center text-white bg-transparent border-none cursor-pointer py-3 px-4 w-full text-left hover:bg-gray-700 rounded"
          >
            <span className="mr-3 text-xl w-6 flex items-center justify-center">
              <RiLogoutBoxLine />
            </span>
            <span>Выйти</span>
          </button>
        </div>
      </div>

      {/* Затемнение фона при открытом меню */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={handleDrawerToggle}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
