import {
  BarChart,
  Calendar,
  LayoutDashboard,
  LogOut,
  Menu,
  Settings,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const menuItems = [
  { icon: LayoutDashboard, text: "Dashboard" },
  { icon: Users, text: "Users" },
  { icon: Settings, text: "Settings" },
  { icon: BarChart, text: "Analytics" },
  { icon: Calendar, text: "Schedule" },
];

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState("");
  const navigate = useNavigate();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen bg-gray-100">
      <aside
        className={`
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          fixed inset-y-0 left-0 z-50 w-64 bg-blue-600 text-white transition-transform duration-300 ease-in-out md:relative md:translate-x-0
        `}
      >
        <div className="flex items-center justify-between p-4 border-b border-blue-500">
          <h2
            className="text-2xl font-semibold cursor-pointer"
            onClick={() => navigate("/")}
          >
            <span className="text-blue-300">Not</span>Todo
          </h2>
          <button onClick={toggleSidebar} className="md:hidden">
            <X size={24} />
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    setActivePage(item.text);
                    navigate(item.text.toLowerCase());
                  }}
                  className={`flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 w-full text-left ${
                    activePage === item.text ? "bg-blue-700" : ""
                  }`}
                >
                  <item.icon size={20} />
                  <span>{item.text}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="absolute bottom-0 w-full p-4">
          <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 w-full text-left">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between p-4">
            <button onClick={toggleSidebar} className="md:hidden">
              <Menu size={24} />
            </button>
            <h1 className="text-2xl font-semibold">{activePage}</h1>
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
          </div>
        </header>

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
