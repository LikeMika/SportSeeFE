import React from "react";
import {
  RadialBarChart, RadialBar, Tooltip, ResponsiveContainer
} from "recharts";

export default function ScoreRadialChart({ data }) {
  if (!data || !Array.isArray(data) || data.length === 0) return null;

  const percentage = data[0].score * 100;
  const angle = data[0].score * 360;

  return (
    <div style={{ background: "#FBFBFB", borderRadius: "5px", width: 258, height: 263, position: "relative" }}>
      <h3 style={{ position: "absolute", top: 20, left: 20 }}>Score</h3>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          innerRadius="70%"
          outerRadius="80%"
          barSize={10}
          data={data}
          startAngle={0}
          endAngle={angle}
        >
          <RadialBar
            clockWise
            dataKey="score"
            cornerRadius={10}
          />
          <Tooltip />
        </RadialBarChart>
      </ResponsiveContainer>
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        backgroundColor: "#FFF"
      }}>
        <p style={{ fontSize: 26, fontWeight: "bold" }}>{percentage}%</p>
        <p style={{ fontSize: 14, color: "#74798c" }}>de votre objectif</p>
      </div>
    </div>
  );
}
