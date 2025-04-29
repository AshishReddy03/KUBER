import React from 'react';

const Contacts = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Team Lead',
      email: 'johndoe@company.com',
      phone: '+1234567890',
    },
    {
      name: 'Jane Smith',
      role: 'Frontend Developer',
      email: 'janesmith@company.com',
      phone: '+1234567891',
    },
    {
      name: 'Tom Lee',
      role: 'UI/UX Designer',
      email: 'tomlee@company.com',
      phone: '+1234567892',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Team Contacts</h1>
        
        <p className="mb-8 text-gray-600 text-center">
          Reach out to your team directly via email or phone.
        </p>

        <ul className="space-y-6">
          {teamMembers.map((member, index) => (
            <li
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex justify-between items-center"
            >
              <div>
                <p className="text-lg font-semibold text-gray-800">
                  {member.name} <span className="text-sm text-gray-500">({member.role})</span>
                </p>
                <p className="text-sm text-gray-600">{member.email}</p>
                <p className="text-sm text-gray-600">{member.phone}</p>
              </div>
              <div className="flex gap-4">
                <a
                  href={`mailto:${member.email}`}
                  className="text-white bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  Email
                </a>
                <a
                  href={`tel:${member.phone}`}
                  className="text-white bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition"
                >
                  Call
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contacts;