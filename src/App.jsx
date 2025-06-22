import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfilePage from "./ProfilePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/profile/:userId" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
