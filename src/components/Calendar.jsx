import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { FaHome } from "react-icons/fa";

const CalendarPage = ({ theme }) => {
  return (
    <div
      className={`min-h-screen p-6 ${
        theme === "dark" ? "bg-[#1A202E] text-white" : "bg-white text-black"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold ">My Calendar</h2>
        <div className="flex gap-2 items-center ">
          <a href="/dashboard" className="hover:text-blue-600">
            <FaHome className="text-lg" />
          </a>
          <span>&gt;</span>
          <span className="text-sm">Home</span>
          <span>&gt;</span>
          <span className="text-sm ">My Calendar</span>
        </div>
      </div>

      {/* Calendar Container */}
      <div
        className={` rounded-xl shadow-lg p-4 border border-gray-200 overflow-hidden ${
          theme === "dark" ? "bg-[#1A202E] text-white" : "bg-white text-black"
        }`}
      >
        {/* Smaller, compact calendar */}
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          height="450px" // Compact height
          events={[
            {
              title: "Team Meeting",
              date: "2025-04-28",
              color: "#4CAF50", // Green shade
            },
            {
              title: "Project Deadline",
              date: "2025-05-01",
              color: "#FF5722", // Deep Orange
            },
          ]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,dayGridWeek",
          }}
          eventDisplay="block"
        />
      </div>
    </div>
  );
};

export default CalendarPage;
