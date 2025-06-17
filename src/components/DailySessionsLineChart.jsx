import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import '../style/DailySession.css';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        {`${payload[0].value}min`}
      </div>
    );
  }
  return null;
};

const DailySession = ({ data }) => {
  return (
    <div className="daily-session-container">
      <div className="daily-session-title">Durée moyenne des sessions</div>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 60, right: 20, bottom: 20, left: 20 }}
        >
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#FFFFFF"
            strokeWidth={2}
            dot={false}
            activeDot={{
              r: 4,
              stroke: 'rgba(255,255,255,0.5)',
              strokeWidth: 10,
              fill: '#FFFFFF',
            }}
          />
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tick={{ fill: '#FFFFFF', fontSize: 12, fontWeight: 500 }}
            padding={{ left: 10, right: 10 }}
          />
          <YAxis hide />
          <Tooltip content={<CustomTooltip />} cursor={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailySession;
