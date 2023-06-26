import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import MyProfile from './components/MyProfile';
import NoPage from './components/NoPage';
import Rockets from './components/RocketsComponent';

function App() {
  return (
    <div>
    <Navbar/>
      <Routes>
        <Route path='myprofile' element={<MyProfile/>}/>
        <Route path='/rockets' element={ <Rockets></Rockets> }/>
      </Routes>
   
    </div>    
  );
}

export default App;
