import { useEffect, useState } from "react";
import Welcome from "../components/Welcome";
import DailyActivityChart from "./DailyActivityChart.jsx";
import { getUserById, getUserActivity, getUserAverageSessions } from "../services/userService";
import DailySession from "./DailySessionsLineChart.jsx"; 

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

  return (
    <div className="dashboard-container" style={{ padding: "2rem" }}>
      <Welcome firstName={userData.firstName} />
      <DailyActivityChart data={activityData} />
      <DailySession data={activitySession} />
    </div>
  );
};

export default Dashboard;
