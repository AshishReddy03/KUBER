import React from "react";
import { Link } from "react-router-dom";
import { GrDocumentTime } from "react-icons/gr";
import {
  Home,
  CheckSquare,
  Airplay,
  Users,
  Folder,
  Clipboard,
  Settings,
  MessageSquare,
  LogOut,
  Calendar,
  ChevronRight,
} from "lucide-react";
import img from "../assets/profile.png";

const mainMenuItems = [
  { icon: <Home size={20} />, text: "Dashboard", to: "/dashboard" },
  { icon: <CheckSquare size={20} />, text: "Attendance", to: "/attendance" },
  { icon: <Clipboard size={20} />, text: "My Leaves", to: "/leaves" },
  { icon: <Users size={20} />, text: "My Team", to: "/team" },
  { icon: <Airplay size={20} />, text: "My Project", to: "/project" },
  { icon: <Folder size={20} />, text: "My Tasks", to: "/tasks" },
  { icon: <Settings size={20} />, text: "Settings", to: "/settings" },
  { icon: <MessageSquare size={20} />, text: "Chat", to: "/chat" },
  {
    icon: <GrDocumentTime size={20} />,
    text: "Shift Management",
    to: "/Shift",
  },
];

const appsMenuItems = [
  {
    icon: <Calendar size={20} />,
    text: "Calendar",
    to: "/calendar",
    badge: "New",
  },
  {
    icon: <LogOut size={20} />,
    text: "Logout",
    to: "/",
  },
];

const SideNavBar = ({ isExpanded, theme }) => {
  const isDarkMode = theme === "dark";
  const bgColor = isDarkMode ? "bg-[#1B202D]" : "bg-white";
  const textColor = isDarkMode ? "text-white" : "text-black";
  const hoverBgColor = isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-300 ";

  return (
    <div
      className={`h-screen ${bgColor} ${textColor} flex flex-col transition-all duration-300
      ${isExpanded ? "w-64" : "w-16"} group hover:w-64`}
    >
      {/* Profile */}
      <div className="flex flex-col items-center mt-4">
        <figure className="flex flex-col items-center">
          <img src={img} className="w-16 h-16 rounded-full" alt="Employee" />
          <figcaption
            className={`mt-2 text-sm font-semibold hidden group-hover:block ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            Employee
          </figcaption>
        </figure>
      </div>

      {/* Scrollable Menu */}
      <div className="flex-1 overflow-y-auto max-h-[calc(100vh-140px)] pb-10">
        {/* Main Menu */}
        <nav className="mt-6 space-y-2 px-2">
          {mainMenuItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className={`flex items-center p-3 rounded ${hoverBgColor} transition-all no-underline ${
                isDarkMode ? "text-white" : "text-black"
              }`}
              style={{ textDecoration: "none" }}
            >
              <span>{item.icon}</span>
              <span
                className={`ml-4 text-sm ${
                  isExpanded ? "inline" : "hidden group-hover:inline"
                }`}
              >
                {item.text}
              </span>
            </Link>
          ))}
        </nav>

        {/* APPS section */}
        <div
          className={`mt-6 px-4 text-xs font-bold text-gray-500 uppercase ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          {isExpanded ? (
            "Apps"
          ) : (
            <span className="group-hover:inline hidden">Apps</span>
          )}
        </div>
        <nav className="mt-2 space-y-2 px-2 mb-6">
          {appsMenuItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className={`flex items-center justify-between p-3 rounded ${hoverBgColor} no-underline ${
                isDarkMode ? "text-white" : "text-black"
              }`}
              style={{ textDecoration: "none" }}
            >
              <div className="flex items-center">
                <span>{item.icon}</span>
                <span
                  className={`ml-4 text-sm ${
                    isExpanded ? "inline" : "hidden group-hover:inline"
                  }`}
                >
                  {item.text}
                </span>
              </div>

              {item.chevron && isExpanded && (
                <ChevronRight size={16} className="text-gray-400" />
              )}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default SideNavBar;
