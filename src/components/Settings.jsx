import React, { useState } from "react";
import { FaHome } from "react-icons/fa";

const SecuritySettings = ({ theme }) => {
  const [username, setUsername] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSave = () => {
    // Implement your save logic here, e.g., API call
    console.log("Saving security settings:", {
      username,
      currentPassword,
      newPassword,
    });
    // You would typically send this data to your backend for processing.
  };

  return (
    <div
      className={`rounded-md shadow p-4 mb-6 ${
        theme === "dark" ? "bg-[#1A202E] text-white" : "bg-white text-black"
      }`}
    >
      <h1 className=" text-2xl">Security Settings</h1>
      <div className={`mb-3`}>
        <label
          htmlFor="username"
          className={`block py-2 text-sm font-bold mb-2 ${
            theme === "dark" ? " text-white border-gray-300" : " text-black"
          }`}
        ></label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          className={`shadow appearance-none border text-lg rounded w-full  p-4 leading-tight focus:outline-none focus:shadow-outline
          ${theme === "dark" ? " text-white border-gray-300" : " text-black"}`}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor="currentPassword"
          className="block py-2 font-bold mb-2"
        ></label>
        <input
          type="password"
          placeholder=" Current Password"
          id="currentPassword"
          className={`shadow appearance-none border rounded w-full text-lg p-4  leading-tight focus:outline-none focus:shadow-outline  ${
            theme === "dark" ? " text-white border-gray-300" : " text-black"
          }`}
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="newPassword"
          className="block py-2 font-bold mb-2"
        ></label>
        <input
          type="password"
          id="newPassword"
          placeholder="New Password"
          className={`shadow appearance-none border rounded w-full p-4 text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline *:${
            theme === "dark" ? " text-white border-gray-300" : " text-black"
          }`}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
};

const AccountSettings = ({ theme }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");

  const handleSaveChanges = () => {
    // Implement your save changes logic here, e.g., API call
    console.log("Saving account settings:", {
      firstName,
      lastName,
      city,
      email,
      country,
      address,
    });
    // You would typically send this data to your backend for processing.
  };

  return (
    <div
      className={`rounded-md shadow p-4 mb-6 ${
        theme === "dark" ? "bg-[#1A202E] text-white" : "bg-white text-black"
      }`}
    >
      <h3 className="text-lg font-semibold mb-3 ">Account Settings</h3>
      <div
        className={`grid grid-cols-2 gap-4 mb-3 ${
          theme === "dark" ? "bg-[#1A202E] text-white" : "bg-white text-black"
        }`}
      >
        <div>
          <label htmlFor="firstName" className="block font-bold mb-2"></label>
          <input
            type="text"
            id="firstName"
            placeholder=" First Name"
            className={`shadow appearance-none border text-lg rounded w-full  p-4 leading-tight focus:outline-none focus:shadow-outline
            ${
              theme === "dark" ? " text-white border-gray-300" : " text-black"
            }`}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block font-bold mb-2"></label>
          <input
            type="text"
            placeholder="Last Name"
            id="lastName"
            className={`shadow appearance-none border text-lg rounded w-full  p-4 leading-tight focus:outline-none focus:shadow-outline
            ${
              theme === "dark" ? " text-white border-gray-300" : " text-black"
            }`}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4  mb-6">
        <div>
          <label
            htmlFor="city"
            className="block text-gray-700 text-sm py-4 font-bold mb-2"
          ></label>
          <input
            type="text"
            id="city"
            placeholder="City"
            className={`shadow appearance-none border text-lg rounded w-full  p-4 leading-tight focus:outline-none focus:shadow-outline
            ${
              theme === "dark" ? " text-white border-gray-300" : " text-black"
            }`}
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 py-4 text-sm font-bold mb-2"
          ></label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className={`shadow appearance-none border text-lg rounded w-full  p-4 leading-tight focus:outline-none focus:shadow-outline
            ${
              theme === "dark" ? " text-white border-gray-300" : " text-black"
            }`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="country"
            className="block text-sm font-bold py-4 mb-2"
          ></label>
          <input
            type="text"
            id="country"
            placeholder="Country"
            className={`shadow appearance-none border text-lg rounded w-full  p-4 leading-tight focus:outline-none focus:shadow-outline
            ${
              theme === "dark" ? " text-white border-gray-300" : " text-black"
            }`}
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-4">
        <label
          htmlFor="address"
          className="block text-gray-700 text-sm py-4 font-bold mb-2"
        ></label>
        <textarea
          id="address"
          placeholder="Address"
          className={`shadow appearance-none border text-lg rounded w-full  p-6 leading-tight focus:outline-none focus:shadow-outline
          ${theme === "dark" ? " text-white border-gray-300" : " text-black"}`}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={handleSaveChanges}
      >
        Save Changes
      </button>
    </div>
  );
};

const SettingsPage = ({ theme }) => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <h1
          className="p-4 text-4xl "
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          Settings
        </h1>
        <div className="flex gap-2 items-center">
          <a href="/dashboard">
            {" "}
            <FaHome className="text-lg" />
          </a>
          <span className="text-lg">&gt;</span>
          <span className="text-lg">Home</span>
          <span className="text-lg">&gt;</span>
          <span className="text-lg">Settings</span>
        </div>
      </div>
      <SecuritySettings theme={theme} />
      <AccountSettings theme={theme} />
    </div>
  );
};

export default SettingsPage;
