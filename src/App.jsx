import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import MyProfile from './components/MyProfile';
import Missions from './components/Missions';
import NoPage from './components/NoPage';
import Rockets from './components/RocketsComponent';
import { fetchRockets } from './redux/rockets/rocketSlice';
import { fetchMissions } from './redux/missions/missionSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

  useEffect(() => {
    dispatch(fetchRockets());
  }, []);

  return (
    <div>

      <Navbar />
      <Routes>
        <Route path="myprofile" element={<MyProfile />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="*" element={<NoPage />} />
      </Routes>

    </div>
  );
}

export default App;
