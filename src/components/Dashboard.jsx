import { useEffect, useState } from "react";
import Welcome from "../components/Welcome";
import DailyActivityChart from "./charts/DailyActivityChart.jsx";
import { getUserById, getUserActivity, getUserAverageSessions, getUserPerformance } from "../services/userService";
import DailySession from "./charts/DailySessionsLineChart.jsx"; 
import { formatKeyData } from "../utils/formatKeyData";
import StatCard from "./StatCard";
import PerformanceRadarChart from "./charts/PerformanceRadarChart.jsx"
import ScoreRadialChart from "./charts/ScoreRadialChart.jsx"
import "../style/Dashboard.css";

const Dashboard = ({ userId }) => {
  const [userData, setUserData] = useState(null);
  const [activityData, setActivityData] = useState([]);
  const [activitySession, setSessionsData] = useState([]);
  const [performanceData, setPerformanceData] = useState([]);



useEffect(() => {
  async function fetchData() {
    try {
      const [user, activity, session, performance] = await Promise.all([
        getUserById(userId),
        getUserActivity(userId),
        getUserAverageSessions(userId),
        getUserPerformance(userId),
      ]);
      setUserData(user);
      setActivityData(activity);
      setSessionsData(session);
      setPerformanceData(performance);
      //faire setIsLoadedData -> vérifie si les données sont chargées
    } catch (err) {
      console.error("Erreur lors du chargement des données :", err);
    }
  }

  fetchData();
}, [userId]);


if (!userData || activityData.length === 0 || activitySession.length === 0 || performanceData.length === 0) {
  return <p>Aucun profil trouvé</p>;
}

  const keyData = userData.keyData;
  const stats = formatKeyData(keyData);

  return (
  <div className="dashboard-container">
    <Welcome firstName={userData.firstName} />

    <div className="dashboard-content">

      <div className="dashboard-charts">
        <DailyActivityChart data={activityData} />
        <div className="row-charts">
        <DailySession data={activitySession} />
        <PerformanceRadarChart data={performanceData} />
        <ScoreRadialChart data={[{ name: "Score", score: userData.score, fill: "#FF0000" }]} />
        </div>
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
