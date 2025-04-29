import React, { useState } from "react";
import { Maximize, Minimize, Moon, Sun } from "lucide-react"; // Icons for dark/light mode
import Flag from "react-world-flags"; // Flag component
import img1 from "../assets/Anasol_logo11.png"; // Logo image
import img from "../assets/profile.png"; // Profile image

const TopNavbar = ({ isExpanded, setIsExpanded, theme, toggleTheme }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Function to toggle fullscreen mode
  const toggleFullscreen = () => {
    if (isFullscreen) {
      // Exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullscreen) {
        document.mozCancelFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    } else {
      // Enter fullscreen
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
    }

    // Toggle fullscreen state
    setIsFullscreen(!isFullscreen);
  };

  return (
    <nav
      className={`flex justify-between items-center p-3 w-full ${
        theme === "light" ? "bg-white text-black" : "bg-[#1B202D] text-white"
      }`}
    >
      {/* Left section: Logo and Menu Toggle */}
      <div className="flex items-center gap-4">
        <a href="/dashboard">
          <img
            src={img1}
            className={` w-10 ${
              theme === "light" ? " text-black" : "bg-[#1B202D] text-white"
            }`}
            alt="Logo"
          />
        </a>
        <button
          onClick={() => setIsExpanded(!isExpanded)} // Toggle sidebar state
          className="text-black focus:outline-none"
        >
          <div className="space-y-1 cursor-pointer">
            <div
              className={`w-6 h-0.5 ${
                theme === "light" ? "bg-black" : "bg-white"
              } rounded`}
            />
            <div
              className={`w-6 h-0.5 ${
                theme === "light" ? "bg-black" : "bg-white"
              } rounded`}
            />
            <div
              className={`w-6 h-0.5 ${
                theme === "light" ? "bg-black" : "bg-white"
              } rounded`}
            />
          </div>
        </button>
      </div>

      {/* Right section: Fullscreen toggle, Flag, and Profile */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleFullscreen}
          className={`cursor-pointer ${
            theme === "light" ? "text-black" : "text-white"
          }`}
        >
          {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
        </button>
        <Flag
          code="ind"
          style={{
            width: 30,
            height: 18,
            borderRadius: "4px",
          }}
        />
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="text-black p-2 hover:bg-gray-200 rounded-2xl dark:text-white"
        >
          {theme === "light" ? (
            <Sun size={20} className="text-yellow-500" />
          ) : (
            <Moon size={20} className="text-gray-400" />
          )}
        </button>

        <button className="flex items-center text-black p-2 hover:bg-gray-200 hover:border-0 rounded-2xl">
          <span
            className={`${theme === "light" ? "text-black" : "text-white"}`}
          >
            Employee
          </span>

          <img src={img} className="w-10" alt="" />
        </button>
      </div>
    </nav>
  );
};

export default TopNavbar;
