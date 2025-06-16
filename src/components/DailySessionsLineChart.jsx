import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const DailySession = ({ data }) => {
    return (
        
  <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="day" />
    <Tooltip />
    <YAxis orientation="right" dataKey="sessionLength" hide />
  </LineChart>
  );
};

export default DailySession;