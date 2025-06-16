import { useEffect, useState } from "react";
import Welcome from "../components/Welcome";
import DailyActivityChart from "./DailyActivityChart.jsx";
import { getUserById, getUserActivity } from "../services/userService";

const Dashboard = ({ userId }) => {
  const [userData, setUserData] = useState(null);
  const [activityData, setActivityData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const user = await getUserById(userId);
        const activity = await getUserActivity(userId);
        setUserData(user);
        setActivityData(activity);
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
    </div>
  );
};

export default Dashboard;
