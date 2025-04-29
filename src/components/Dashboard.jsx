import React from "react";
import { Box, Typography } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsiveLine } from "@nivo/line";
import { ResponsivePie } from "@nivo/pie";
import { ResponsiveChoropleth } from "@nivo/geo";
import {
  FaTicketAlt,
  FaCheckCircle,
  FaBriefcase,
  FaUmbrellaBeach,
} from "react-icons/fa";

const DashboardCard = ({ title, count, icon, description, bgColor, theme }) => (
  <Box
    className={`flex items-center justify-between p-5 rounded-xl text-white shadow-md ${bgColor}`}
    sx={{
      backgroundColor: theme === "dark" ? bgColor.dark : bgColor.light,
    }}
  >
    <Box>
      <Typography fontWeight="bold">{title}</Typography>
      <Typography variant="h4">{count}</Typography>
      <Typography variant="body2">{description}</Typography>
    </Box>
    <Box fontSize="2rem">{icon}</Box>
  </Box>
);

const Dashboard = ({ theme }) => {
  const mockBarData = [
    { country: "USA", burger: 100, fries: 80 },
    { country: "UK", burger: 70, fries: 60 },
  ];

  const mockLineData = [
    {
      id: "sales",
      data: [
        { x: "Jan", y: 100 },
        { x: "Feb", y: 120 },
        { x: "Mar", y: 80 },
      ],
    },
  ];

  const mockPieData = [
    { id: "chrome", label: "Chrome", value: 60 },
    { id: "firefox", label: "Firefox", value: 25 },
    { id: "safari", label: "Safari", value: 15 },
  ];

  const mockGeoData = [
    { id: "USA", value: 1000000 },
    { id: "IND", value: 800000 },
  ];

  const geoFeatures = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        id: "USA",
        properties: { name: "United States" },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [-101.0, 40.0],
              [-100.0, 40.0],
              [-100.0, 41.0],
              [-101.0, 41.0],
              [-101.0, 40.0],
            ],
          ],
        },
      },
      {
        type: "Feature",
        id: "IND",
        properties: { name: "India" },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [77.0, 20.0],
              [78.0, 20.0],
              [78.0, 21.0],
              [77.0, 21.0],
              [77.0, 20.0],
            ],
          ],
        },
      },
    ],
  };

  const cardColors = {
    violet: { light: "#8b5cf6", dark: "#7c3aed" },
    green: { light: "#22c55e", dark: "#16a34a" },
    orange: { light: "#fb923c", dark: "#f97316" },
    blue: { light: "#3b82f6", dark: "#2563eb" },
  };

  const backgroundColor = theme === "dark" ? "#111827" : "#1E2938"; // dark: slate-900, light: gray-100
  const cardBgColor = theme === "dark" ? "#1f2937" : "#ffffff"; // dark: gray-800, light: white
  const textColor = theme === "dark" ? "#ffffff" : "#111827"; // dark: white, light: slate-900
  const pageBackground =
    theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black";
  return (
    <Box className="p-6 space-y-6 min-h-screen">
      <Typography
        variant="h2"
        mb={2}
        style={{ fontFamily: "Times New Roman, serif" }}
      >
        Dashboard
      </Typography>

      {/* Top Summary Cards */}
      <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <DashboardCard
          title="New Tickets"
          count="23"
          icon={<FaTicketAlt />}
          description="18% Higher Than Last Month"
          bgColor={cardColors.violet}
          theme={theme}
        />
        <DashboardCard
          title="Ticket Resolved"
          count="20"
          icon={<FaCheckCircle />}
          description="21% Higher Than Last Month"
          bgColor={cardColors.green}
          theme={theme}
        />
        <DashboardCard
          title="Project Assigned"
          count="13"
          icon={<FaBriefcase />}
          description="37% Higher Than Last Month"
          bgColor={cardColors.orange}
          theme={theme}
        />
        <DashboardCard
          title="Available Leaves"
          count="34"
          icon={<FaUmbrellaBeach />}
          description="10% Higher Than Last Month"
          bgColor={cardColors.blue}
          theme={theme}
        />
      </Box>

      {/* Nivo Charts */}
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={4} mt={4}>
        <Box
          gridColumn="span 6"
          height="300px"
          className="p-2 rounded-lg"
          sx={{ backgroundColor: cardBgColor }}
        >
          <ResponsiveBar
            data={mockBarData}
            keys={["burger", "fries"]}
            indexBy="country"
            margin={{ top: 20, right: 20, bottom: 40, left: 40 }}
            padding={0.3}
            colors={{ scheme: "nivo" }}
          />
        </Box>

        <Box
          gridColumn="span 6"
          height="300px"
          className="p-2 rounded-lg"
          sx={{ backgroundColor: cardBgColor }}
        >
          <ResponsiveLine
            data={mockLineData}
            margin={{ top: 20, right: 20, bottom: 40, left: 40 }}
            xScale={{ type: "point" }}
            yScale={{ type: "linear", min: 0, max: "auto", stacked: true }}
            colors={{ scheme: "nivo" }}
          />
        </Box>

        <Box
          gridColumn="span 4"
          height="300px"
          className="p-2 rounded-lg"
          sx={{ backgroundColor: cardBgColor }}
        >
          <ResponsivePie
            data={mockPieData}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            innerRadius={0.5}
            padAngle={0.7}
            colors={{ scheme: "nivo" }}
          />
        </Box>

        <Box
          gridColumn="span 8"
          height="300px"
          className="p-2 rounded-lg"
          sx={{ backgroundColor: cardBgColor }}
        >
          <ResponsiveChoropleth
            data={mockGeoData}
            features={geoFeatures.features}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            domain={[0, 1000000]}
            unknownColor="#444"
            label="properties.name"
            projectionScale={120}
            projectionTranslation={[0.5, 0.5]}
            borderWidth={0.5}
            borderColor="#fff"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
