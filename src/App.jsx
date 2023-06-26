import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import MyProfile from './components/MyProfile';
import NoPage from './components/NoPage';
import Rockets from './components/RocketsComponent';
import Missions from './components/Missions';

function App() {
  return (
    <div>
    <Navbar/>
      <Routes>
        <Route path='myprofile' element={<MyProfile/>}/>
        <Route path='/rockets' element={ <Rockets></Rockets> }/>
        <Route path='/missions' element={ <Missions/> }/>
      </Routes>
   
    </div>    
  );
}

export default App;
