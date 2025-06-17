import { useEffect, useState } from "react";
import Welcome from "../components/Welcome";
import DailyActivityChart from "./DailyActivityChart.jsx";
import { getUserById, getUserActivity, getUserAverageSessions } from "../services/userService";
import DailySession from "./DailySessionsLineChart.jsx"; 
import { formatKeyData } from "../utils/formatKeyData";
import StatCard from "./StatCard";
import "../style/Dashboard.css";

const Dashboard = ({ userId }) => {
  const [userData, setUserData] = useState(null);
  const [activityData, setActivityData] = useState([]);
  const [activitySession, setSessionsData] = useState([]);



  useEffect(() => {
    async function fetchData() {
      try {
        const user = await getUserById(userId);
        const activity = await getUserActivity(userId);
        const session = await getUserAverageSessions(userId);
        setUserData(user);
        setActivityData(activity);
        setSessionsData(session);
      } catch (err) {
        console.error("Erreur lors du chargement des données :", err);
      }
    }

    fetchData();
  }, [userId]);

  if (!userData) return <p></p>;
  const keyData = userData.keyData;
  const stats = formatKeyData(keyData);

  return (
  <div className="dashboard-container">
    <Welcome firstName={userData.firstName} />

    <div className="dashboard-content">

      <div className="dashboard-charts">
        <DailyActivityChart data={activityData} />
        <DailySession data={activitySession} />
      </div>
      <div className="stats-column">
        {stats.map((stat) => (
          <StatCard
            key={stat.id}
            icon={stat.icon}
            alt={stat.alt}
            value={stat.value}
            label={stat.label}
          />
        ))}
      </div>
    </div>
  </div>
  );
};


export default Dashboard;
