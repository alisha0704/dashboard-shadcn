/** @format */
"use client";
import React from "react";
import {
  BarChart as BarGraph,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Bar
} from "recharts";

type Props = {};

const data = [
  {
    name: "Action",
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: "Rom",
    total: Math.floor(Math.random() * 6000) + 1000
  },
  {
    name: "Comedy",
    total: Math.floor(Math.random() * 1000) + 1000
  },
  {
    name: "Drama",
    total: Math.floor(Math.random() * 1000) + 1000
  },
  {
    name: "Sci-Fi",
    total: Math.floor(Math.random() * 1000) + 1000
  },
  {
    name: "Horror",
    total: Math.floor(Math.random() * 1000) + 1000
  },
  {
    name: "Thriller",
    total: Math.floor(Math.random() * 1000) + 1000
  },
  {
    name: "Mystery",
    total: Math.floor(Math.random() * 1000) + 1000
  },
  {
    name: "Fantasy",
    total: Math.floor(Math.random() * 2000) + 1000
  },
  {
    name: "Other",
    total: Math.floor(Math.random() * 1000) + 1000
  },
  {
    name: "West",
    total: Math.floor(Math.random() * 3000) + 1000
  },
  {
    name: "Animation",
    total: Math.floor(Math.random() * 5000) + 1000
  }
];

export default function BarChart({}: Props) {
  return (
    <ResponsiveContainer width={"100%"} height={350}>
      <BarGraph data={data}>
        <XAxis
          dataKey={"name"}
          tickLine={false}
          axisLine={false}
          stroke="#888888"
          fontSize={12}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          stroke="#888888"
          fontSize={12}
          tickFormatter={(value) => `${value}`}
        />
        <Bar dataKey={"total"} radius={[4, 4, 0, 0]} />
      </BarGraph>
    </ResponsiveContainer>
  );
}
