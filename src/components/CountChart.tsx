"use client";
import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Grade 10",
    count: 23,
    fill: "#FAE27C",
  },
  {
    name: "Grade 11",
    count: 24,
    fill: "#C3EBFA",
  },
  {
    name: "Grade 12",
    count: 20,
    fill: "#cfceff",
  },
];

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students by Grade</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      {/* CHART */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt=""
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* BOTTOM */}
      <div className="flex justify-center gap-8">
        <div className="flex flex-col gap-1 items-center">
          <div className="w-5 h-5 bg-lamaYellow rounded-full" />
          <h1 className="font-bold">23</h1>
          <h2 className="text-xs text-gray-500">Grade 10</h2>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <div className="w-5 h-5 bg-lamaSky rounded-full" />
          <h1 className="font-bold">24</h1>
          <h2 className="text-xs text-gray-500">Grade 11</h2>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <div className="w-5 h-5 bg-[#cfceff] rounded-full" />
          <h1 className="font-bold">20</h1>
          <h2 className="text-xs text-gray-500">Grade 12</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
