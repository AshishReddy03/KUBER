import React from "react";
import { FaHome } from "react-icons/fa";
const teamData = [
  {
    name: "Ella Jones",
    role: "Frontend Developer",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    email: "ella.jones@example.com",
    phone: "+91 98765 43210",
  },
  {
    name: "John Smith",
    role: "Backend Developer",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    email: "john.smith@example.com",
    phone: "+91 99999 12345",
  },
  {
    name: "Nina Patel",
    role: "UI/UX Designer",
    img: "https://randomuser.me/api/portraits/women/48.jpg",
    email: "nina.patel@example.com",
    phone: "+91 88888 65432",
  },
  {
    name: "Aarav Mehta",
    role: "Full Stack Developer",
    img: "https://randomuser.me/api/portraits/men/52.jpg",
    email: "aarav.mehta@example.com",
    phone: "+91 91234 56789",
  },
  {
    name: "Simran Kaur",
    role: "QA Engineer",
    img: "https://randomuser.me/api/portraits/women/52.jpg",
    email: "simran.kaur@example.com",
    phone: "+91 93456 12345",
  },
  {
    name: "Rohit Verma",
    role: "DevOps Engineer",
    img: "https://randomuser.me/api/portraits/men/53.jpg",
    email: "rohit.verma@example.com",
    phone: "+91 97865 67890",
  },
];

const Team = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <h1
          className="p-4 text-4xl"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          Teams
        </h1>
        <div className="flex gap-2 items-center">
          <a href="/dashboard">
            {" "}
            <FaHome className="text-lg" />
          </a>
          <span className="text-lg">&gt;</span>
          <span className="text-lg">Home</span>
          <span className="text-lg">&gt;</span>
          <span className="text-lg">My Team</span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamData.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-5 flex flex-col items-center text-center"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800">
              {member.name}
            </h2>
            <p className="text-sm text-gray-500 mb-2">{member.role}</p>
            <p className="text-sm text-blue-600">{member.email}</p>
            <p className="text-sm text-gray-600">{member.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
