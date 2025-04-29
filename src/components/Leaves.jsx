import React, { useState, useEffect } from "react";
import { CgSortAz } from "react-icons/cg";
import {
  FaDownload,
  FaArrowLeft,
  FaArrowRight,
  FaHome,
  FaSearch,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import { FcPlus } from "react-icons/fc";
import { SlRefresh } from "react-icons/sl";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";

const initialLeaves = [
  {
    applicationDate: "2025-04-01",
    fromDate: "2025-04-05",
    toDate: "2025-04-06",
    halfDay: "No",
    leaveType: "Sick",
    status: "Approved",
    reason: "Fever",
  },
  {
    applicationDate: "2025-04-10",
    fromDate: "2025-04-11",
    toDate: "2025-04-12",
    halfDay: "Yes",
    leaveType: "Casual",
    status: "Pending",
    reason: "Personal work",
  },
  // add more if needed
];

const Leaves = ({ theme, toggleTheme }) => {
  const [leaves, setLeaves] = useState(() => {
    const storedLeaves = JSON.parse(localStorage.getItem("userLeaves")) || [];
    return [...initialLeaves, ...storedLeaves];
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newLeave, setNewLeave] = useState({
    fromDate: "",
    toDate: "",
    reason: "",
    halfDay: "No",
    leaveType: "Casual Leave",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [columnVisibility, setColumnVisibility] = useState({
    applicationDate: true,
    fromDate: true,
    toDate: true,
    halfDay: true,
    leaveType: true,
    status: true,
    reason: true,
  });
  const [showColumnMenu, setShowColumnMenu] = useState(false);

  useEffect(() => {
    const userLeavesOnly = leaves.filter(
      (leave) =>
        !initialLeaves.some(
          (init) => JSON.stringify(init) === JSON.stringify(leave)
        )
    );
    localStorage.setItem("userLeaves", JSON.stringify(userLeavesOnly));
  }, [leaves]);

  const handleAddLeave = () => {
    const today = new Date().toISOString().split("T")[0];
    setLeaves([
      ...leaves,
      { applicationDate: today, ...newLeave, status: "Pending" },
    ]);
    setNewLeave({
      fromDate: "",
      toDate: "",
      reason: "",
      halfDay: "No",
      leaveType: "Casual Leave",
    });
    setIsModalOpen(false);
  };

  const exportToExcel = () => {
    const dataToExport = initialLeaves.map((leave) => ({
      "Application Date": leave.applicationDate,
      "From Date": leave.fromDate,
      "To Date": leave.toDate,
      "Half Day": leave.halfDay,
      "Leave Type": leave.leaveType,
      Status: leave.status,
      Reason: leave.reason,
    }));
    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "leaves");
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const fileData = new Blob([excelBuffer], {
      type: "application/octet-stream",
    });
    saveAs(fileData, "leaves.xlsx");
  };

  const handleRefresh = () => {
    setSearchTerm("");
    setCurrentPage(1);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Rejected":
        return "bg-red-100 text-red-600";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const toggleColumnVisibility = (column) => {
    setColumnVisibility((prev) => ({ ...prev, [column]: !prev[column] }));
  };

  const filteredData = leaves.filter((entry) =>
    Object.values(entry)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const currentItems = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div
      className="min-h-screen bg-
     sm:md:"
    >
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center">
        <h1 className="text-2xl sm:text-4xl font-serif">My Leaves</h1>
        <div className="flex flex-wrap items-center gap-2 text-lg">
          <a href="/dashboard">
            <FaHome />
          </a>
          <span>&gt;</span>
          <span>Dashboard</span>
          <span>&gt;</span>
          <span>My Leaves</span>
        </div>
      </div>

      {/* Controls */}
      <div
        className={`bg-[#D9E1F2] p-1 rounded shadow-md mt-6 flex flex-col gap-4  ${
          theme === "dark" ? "text-white bg-black" : "text-black"
        }`}
      >
        <div className="flex flex-wrap justify-between items-center gap-4 p-1 ">
          {/* Left side */}
          <div className="flex flex-wrap gap-4 items-center ">
            <p
              className={`text-lg font-bold text-gray-600  ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              Leaves
            </p>

            {/* Search */}
            <div className="flex items-center bg-white rounded shadow px-3 py-2">
              <FaSearch className="text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                className={`outline-none text-sm p-1 bg-transparent w-32 sm:w-60  ${
                  theme === "dark" ? "text-black" : "text-black"
                }`}
              />
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setShowColumnMenu(!showColumnMenu)}
                className={`flex items-center justify-center p-2 rounded-full hover:bg-gray-200 ${
                  theme === "dark"
                    ? "text-white hover:text-black"
                    : " text-black"
                }`}
                title="Show/Hide Columns"
              >
                <CgSortAz size={34} />
              </button>

              {showColumnMenu && (
                <div
                  className={`absolute  shadow-lg p-4 rounded mt-2 z-50 left-0 ${
                    theme === "dark"
                      ? " text-white bg-black"
                      : "bg-white text-black"
                  }`}
                >
                  {Object.keys(columnVisibility).map((col) => (
                    <label
                      key={col}
                      className={`flex gap-2 ${
                        theme === "dark"
                          ? " text-white bg-black"
                          : "bg-white text-black"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={columnVisibility[col]}
                        onChange={() => toggleColumnVisibility(col)}
                      />
                      {col.charAt(0).toUpperCase() + col.slice(1)}
                    </label>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-lime-700 text-white px-4 py-2 rounded-full hover:bg-lime-800 text-sm "
            >
              Apply for Leave
            </button>

            <button onClick={handleRefresh}>
              <SlRefresh
                size={22}
                className={`text-gray-700 hover:text-black ${
                  theme === "dark" ? "text-white" : " text-black"
                }`}
              />
            </button>

            <button onClick={exportToExcel}>
              <FaDownload
                size={22}
                className={`text-gray-700 hover:text-black ${
                  theme === "dark" ? "text-white" : " text-black"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div
        className="overflow-x-auto bg-white rounded shadow
      "
      >
        <table className="w-full text-sm text-left">
          <thead
            className={`text-sm border-b border-gray-300 ${
              theme === "dark" ? "text-white bg-[#1E2938]" : " text-black"
            }`}
          >
            <tr>
              {columnVisibility.applicationDate && (
                <th className="px-4 py-4">Application Date</th>
              )}
              {columnVisibility.fromDate && <th className="px-4 py-2">From</th>}
              {columnVisibility.toDate && <th className="px-4 py-2">To</th>}
              {columnVisibility.halfDay && (
                <th className="px-4 py-2">Half Day</th>
              )}
              {columnVisibility.leaveType && (
                <th className="px-4 py-2">Leave Type</th>
              )}
              {columnVisibility.reason && <th className="px-4 py-2">Reason</th>}
              {columnVisibility.status && <th className="px-4 py-2">Status</th>}
            </tr>
          </thead>
          <tbody>
            {currentItems.map((entry, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? "bg-gray-100" : ""} ${
                  theme === "dark"
                    ? "bg-gray-800 text-white"
                    : "bg-res text-black"
                }`}
              >
                {columnVisibility.applicationDate && (
                  <td className="px-4 py-4">{entry.applicationDate}</td>
                )}
                {columnVisibility.fromDate && (
                  <td className="px-4 py-2">{entry.fromDate}</td>
                )}
                {columnVisibility.toDate && (
                  <td className="px-4 py-2">{entry.toDate}</td>
                )}
                {columnVisibility.halfDay && (
                  <td className="px-4 py-2">{entry.halfDay}</td>
                )}
                {columnVisibility.leaveType && (
                  <td className="px-4 py-2">{entry.leaveType}</td>
                )}
                {columnVisibility.reason && (
                  <td className="px-4 py-2">{entry.reason}</td>
                )}
                {columnVisibility.status && (
                  <td className="px-4 py-2">
                    <span
                      className={`inline-block px-2 py-1 text-xs rounded ${getStatusColor(
                        entry.status
                      )}`}
                    >
                      {entry.status}
                    </span>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div
        className={`flex justify-between items-center px-4 py-2 ${
          theme === "dark"
            ? "bg-gray-800 text-white"
            : " text-black bg-[#D9E1F2]"
        }`}
      >
        <div className="flex items-center gap-3">
          <button onClick={prevPage} disabled={currentPage === 1}>
            <FaArrowLeft />
          </button>
          <span>{`${currentPage} of ${totalPages}`}</span>
          <button onClick={nextPage} disabled={currentPage === totalPages}>
            <FaArrowRight />
          </button>
        </div>

        {/* Items per Page */}
        <select
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
          className={`text-gray-700 p-2 border rounded ${
            theme === "dark"
              ? "bg-gray-800 text-white"
              : " text-black bg-[bg-[#D9E1F2]]"
          }`}
        >
          <option value={5}>5 per page</option>
          <option value={10}>10 per page</option>
          <option value={15}>15 per page</option>
        </select>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.2)] flex items-center justify-center p-4">
          <div
            className={` p-6 rounded-lg w-full max-w-md ${
              theme === "dark" ? "text-white bg-black " : "bg-white text-black"
            }`}
          >
            <h3 className="text-lg font-bold mb-4">Apply for Leave</h3>

            {/* Modal form */}
            <input
              type="date"
              value={newLeave.fromDate}
              onChange={(e) =>
                setNewLeave({ ...newLeave, fromDate: e.target.value })
              }
              className={`w-full p-2 mb-3 border rounded ${
                theme === "dark" ? "text-white" : "bg-white text-black"
              }`}
            />
            <input
              type="date"
              value={newLeave.toDate}
              onChange={(e) =>
                setNewLeave({ ...newLeave, toDate: e.target.value })
              }
              className={`w-full p-2 mb-3 border rounded ${
                theme === "dark" ? "text-white" : "bg-white text-black"
              }`}
            />
            <textarea
              value={newLeave.reason}
              onChange={(e) =>
                setNewLeave({ ...newLeave, reason: e.target.value })
              }
              rows={2}
              className={`w-full p-2 mb-3 border rounded ${
                theme === "dark" ? "text-white" : "bg-white text-black"
              }`}
              placeholder="Reason"
            />
            <select
              value={newLeave.halfDay}
              onChange={(e) =>
                setNewLeave({ ...newLeave, halfDay: e.target.value })
              }
              className={`w-full p-2 mb-3 border rounded ${
                theme === "dark" ? "text-white" : "bg-white text-black"
              }`}
            >
              <option>No</option>
              <option>Yes</option>
            </select>
            <select
              value={newLeave.leaveType}
              onChange={(e) =>
                setNewLeave({ ...newLeave, leaveType: e.target.value })
              }
              className={`w-full p-2 mb-3 border rounded ${
                theme === "dark" ? "text-white" : "bg-white text-black"
              }`}
            >
              <option>Casual Leave</option>
              <option>Sick Leave</option>
              <option>Annual Leave</option>
            </select>

            {/* Modal actions */}
            <div className="flex flex-wrap gap-4 justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-300 p-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleAddLeave}
                className="bg-lime-700 text-white p-2 rounded hover:bg-lime-800"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Leaves;
