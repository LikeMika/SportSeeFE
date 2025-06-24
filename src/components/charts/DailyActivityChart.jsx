import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import "../../style/DailyActivityChart.css";
const DailyActivityChart = ({ data }) => {
  return (
    <div className="chart-container">
      <h4 style={{ marginBottom: "1rem" }}>Activité quotidienne</h4>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" />
          <YAxis yAxisId="kg" orientation="right" dataKey="kilogram" />
          <YAxis yAxisId="cal" hide />
          <Tooltip wrapperStyle={{backgroundColor: '#FF0000', color: '#fff' }} />
          <Legend verticalAlign="top" height={36}/>
          <Bar barSize={10} yAxisId="kg" dataKey="kilogram" fill="#282D30" radius={[3, 3, 0, 0]} name="Poids (kg)" />
          <Bar barSize={10} yAxisId="cal" dataKey="calories" fill="#E60000" radius={[3, 3, 0, 0]} name="Calories brûlées (kCal)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailyActivityChart;
