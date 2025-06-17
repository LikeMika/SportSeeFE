import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer
} from "recharts";
import "../style/RadarChartPerformance.css";

export default function PerformanceRadarChart({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <div className="radar-chart-container">
      <ResponsiveContainer width="100%" height={263}>
        <RadarChart outerRadius="70%" data={data}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="subject"
            stroke="#fff"
            tickLine={false}
            axisLine={false}
            fontSize={12}
          />
          <Radar
            name="Performance"
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
