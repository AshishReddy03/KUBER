import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Sidebar from "./components/Sidebar";
import TopNavbar from "./components/TopNavbar";
import AttendancePage from "./components/AttendancePage";
import Leaves from "./components/Leaves";
import Settings from "./components/Settings";
import Team from "./components/Team";
import Projects from "./components/Projects";
import Chats from "./components/Chats";
import Contacts from "./components/Contacts";
import Calendar from "./components/Calendar";
import Dashboard from "./components/Dashboard";
import Tasks from "./components/Tasks";
import ShiftManagement from "./components/ShiftManagement";

const App = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [theme, setTheme] = useState("light");

  const toggleFullscreen = () => {
    console.log("Fullscreen toggled");
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/*"
          element={
            <div
              className={`flex flex-col h-screen overflow-hidden ${
                theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100"
              }`}
            >
              <TopNavbar
                isExpanded={isExpanded}
                setIsExpanded={setIsExpanded}
                toggleFullscreen={toggleFullscreen}
                theme={theme}
                toggleTheme={toggleTheme}
              />
              <div className="flex flex-1 overflow-hidden">
                <Sidebar
                  isExpanded={isExpanded}
                  setIsExpanded={setIsExpanded}
                  theme={theme}
                />
                <main
                  className={`flex-1 p-4 overflow-auto ${
                    theme === "light"
                      ? "bg-gray-100 text-black"
                      : "bg-gray-800 text-white"
                  }`}
                >
                  <Routes>
                    <Route
                      path="/attendance"
                      element={
                        <AttendancePage
                          theme={theme}
                          toggleTheme={toggleTheme}
                        />
                      }
                    />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route
                      path="/leaves"
                      element={
                        <Leaves theme={theme} toggleTheme={toggleTheme} />
                      }
                    />
                    <Route path="/team" element={<Team />} />
                    <Route
                      path="/project"
                      element={
                        <Projects theme={theme} toggleTheme={toggleTheme} />
                      }
                    />
                    <Route
                      path="/tasks"
                      element={
                        <Tasks theme={theme} toggleTheme={toggleTheme} />
                      }
                    />
                    <Route
                      path="/settings"
                      element={
                        <Settings theme={theme} toggleTheme={toggleTheme} />
                      }
                    />
                    <Route
                      path="/chat"
                      element={
                        <Chats theme={theme} toggleTheme={toggleTheme} />
                      }
                    />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route
                      path="/calendar"
                      element={
                        <Calendar theme={theme} toggleTheme={toggleTheme} />
                      }
                    />
                    <Route
                      path="/shift"
                      element={
                        <ShiftManagement
                          theme={theme}
                          toggleTheme={toggleTheme}
                        />
                      }
                    />
                  </Routes>
                </main>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
