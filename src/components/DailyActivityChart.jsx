import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const DailyActivityChart = ({ data }) => {
  return (
    <div className="chart-container" style={{ marginTop: "2rem", background: "#fbfbfb", padding: "1rem", borderRadius: "5px" }}>
      <h2 style={{ marginBottom: "1rem" }}>Activité quotidienne</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" />
          <YAxis yAxisId="kg" orientation="right" dataKey="kilogram" />
          <YAxis yAxisId="cal" hide />
          <Tooltip />
          <Legend verticalAlign="top" height={36}/>
          <Bar yAxisId="kg" dataKey="kilogram" fill="#282D30" radius={[5, 5, 0, 0]} name="Poids (kg)" />
          <Bar yAxisId="cal" dataKey="calories" fill="#E60000" radius={[5, 5, 0, 0]} name="Calories brûlées (kCal)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailyActivityChart;
