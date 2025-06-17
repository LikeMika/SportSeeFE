import React from "react";
import "../style/StatCard.css";

export default function StatCard({ icon, alt, value, label }) {
  return (
    <div className="stat-card">
      <img src={icon} alt={alt} className="stat-icon" />
      <div className="stat-info">
        <p className="stat-value">{value}</p>
        <p className="stat-label">{label}</p>
      </div>
    </div>
  );
}
