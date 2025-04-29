import React from "react";
import {
  FaPaperPlane,
  FaMicrophone,
  FaPhone,
  FaPaperclip,
  FaUserCircle,
} from "react-icons/fa";
import { FcVideoCall } from "react-icons/fc";
import { FaHome } from "react-icons/fa";

const messages = [
  {
    id: 1,
    sender: "Ella",
    text: "Hey, are we meeting today?",
    fromUser: false,
  },
  {
    id: 2,
    sender: "You",
    text: "Yes, at 3 PM. Don’t be late!",
    fromUser: true,
  },
  { id: 3, sender: "Ella", text: "Got it. See you soon!", fromUser: false },
];

const Chats = ({ theme }) => {
  return (
    <div
      className={`rounded-xl shadow-lg p-6 h-[80vh] flex flex-col  ${
        theme === "dark"
          ? "bg-[##1E2938] text-white"
          : "bg-[#F3F4F6] text-black"
      }`}
    >
      <div className="flex flex-col md:flex-row justify-between items-center px-4 mb-6">
        <h1
          className="text-2xl font-semibold "
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          Chat
        </h1>
        <div className="flex gap-3 items-center text-sm md:text-base ">
          <a
            href="/dashboard"
            className="flex items-center gap-1 hover:text-blue-500"
          >
            <FaHome className="text-lg" />
            <span>&gt;</span>
            <span>Home</span>
          </a>
          <span>&gt;</span>
          <span>Chat</span>
        </div>
      </div>

      <div className="border border-white rounded-lg">
        <div
          className={`bg-[#D8E1F0] rounded-t-lg text-black p-4 flex items-center justify-between ${
            theme === "dark" ? "bg-black text-white" : "bg-[#D8E1F0] text-black"
          }`}
        >
          <FaUserCircle size={40} className="text-gray-600" />

          <div className="flex items-center gap-1">
            <button className="p-3 hover:bg-gray-700 rounded-lg transition-all">
              <FcVideoCall size={30} />
            </button>
            <button className="p-3 hover:bg-gray-700 rounded-lg transition-all">
              <FaPhone size={20} />
            </button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.fromUser ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs p-3 rounded-xl text-sm shadow-md transition-transform transform ${
                  msg.fromUser
                    ? "bg-blue-100 text-blue-800"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input Box */}
        <div className="mt-6 flex items-center pt-10 pb-5 px-5">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 border rounded-lg p-3 outline-none bg-gray-100 text-gray-800 focus:ring-2 focus:ring-blue-500 transition"
          />
          <div className="justify-between gap-0.5">
            <button className="ml-3 p-3 hover:bg-gray-400 rounded-lg transition-all">
              <FaPaperPlane size={20} />
            </button>
            <button className="ml-3 p-3 hover:bg-gray-400 rounded-lg transition-all">
              <FaMicrophone size={20} />
            </button>
            <button className="ml-3 p-3 hover:bg-gray-400 rounded-lg transition-all">
              <FaPaperclip size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
