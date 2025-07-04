import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";
import "../../style/DailyActivityChart.css";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length === 2) {
    const kg = payload.find(p => p.dataKey === 'kilogram')?.value;
    const kcal = payload.find(p => p.dataKey === 'calories')?.value;

    return (
      <div className="custom-tooltip-bar">
        <p>{kg}kg</p>
        <p>{kcal}Kcal</p>
      </div>
    );
  }

  return null;
};

const DailyActivityChart = ({ data }) => {
  return (
    <div className="chart-container">
      <div className="chart-header">
        <h4>Activité quotidienne</h4>
        <div className="custom-legend">
          <div className="legend-item">
            <span className="legend-dot black"></span>Poids (kg)
          </div>
          <div className="legend-item">
            <span className="legend-dot red"></span>Calories brûlées (kCal)
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 30, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day"   axisLine={false} tickLine={false} dy={10} />
          <YAxis yAxisId="kg" orientation="right" dataKey="kilogram" axisLine={false} tickLine={false} dx={20}/>
          <YAxis yAxisId="cal" hide />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: "#C4C4C4", opacity: 0.5 }} />
          <Bar
            barSize={10}
            yAxisId="kg"
            dataKey="kilogram"
            fill="#282D30"
            radius={[3, 3, 0, 0]}
            name="Poids (kg)"
          />
          <Bar
            barSize={10}
            yAxisId="cal"
            dataKey="calories"
            fill="#E60000"
            radius={[3, 3, 0, 0]}
            name="Calories brûlées (kCal)"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailyActivityChart;
