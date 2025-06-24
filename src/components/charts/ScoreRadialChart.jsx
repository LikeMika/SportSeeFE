import React from "react";
import {
  RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis
} from "recharts";

export default function ScoreRadialChart({ data }) {
  if (!data || !Array.isArray(data) || data.length === 0) return null;

  const percentage = data[0].score * 100;

  return (
    <div style={{ background: "#FBFBFB", borderRadius: "5px", width: 258, height: 263, position: "relative" }}>
      <h3 style={{ position: "absolute", top: 20, left: 30 }}>Score</h3>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          innerRadius="62%"
          outerRadius="90%"
          barSize={10}
          data={[{ value: data[0].score, fill: "#FF0000" }]}
          startAngle={90}
          endAngle={450} // 360° + startAngle pour faire le tour complet
        >
          <PolarAngleAxis type="number" domain={[0, 1]} tick={false} />
          <RadialBar
            clockWise
            dataKey="value"
            cornerRadius={10}
          />
          <circle cx="50%" cy="50%" r="70" fill="#FFF" />
        </RadialBarChart>
      </ResponsiveContainer>
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center"
      }}>
        <p style={{ fontSize: 26, fontWeight: "bold" }}>{percentage}%</p>
        <p style={{ fontSize: 14, color: "#74798c" }}>de votre objectif</p>
      </div>
    </div>
  );
}
