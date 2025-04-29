import React from "react";
import { FaPaperPlane } from "react-icons/fa";

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
      className={` rounded-xl shadow-md p-4 h-[80vh] flex flex-col ${
        theme === "dark" ? "bg-[#1A202E] text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-lg font-semibold  mb-4">Chat</h2>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto space-y-3 pr-2">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.fromUser ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xs p-3 rounded-lg text-sm ${
                msg.fromUser
                  ? "bg-blue-100 text-blue-900"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Box */}
      <div className="mt-4 flex items-center border-t pt-2">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 border rounded-lg p-2 outline-none"
        />
        <button className="ml-2 p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default Chats;
