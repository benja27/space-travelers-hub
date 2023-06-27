import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import MyProfile from './components/MyProfile';
import Missions from './components/Missions';
import NoPage from './components/NoPage';
import Rockets from './components/RocketsComponent';
import { useDispatch } from 'react-redux'
import { fetchRockets } from './redux/rockets/rocketSlice';
import { useEffect } from 'react'



function App() {
  
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchRockets())
  },[])
  
  
  
  
  
  return (
    <div>
      
    <Navbar/>
      <Routes>
        <Route path='myprofile' element={<MyProfile/>}/>
        <Route path='/rockets' element={ <Rockets></Rockets> }/>
        <Route path='/' element={ <Rockets></Rockets> }/>
        <Route path='/missions' element={ <Missions></Missions> }/>
        <Route path='*' element={ <NoPage></NoPage> }/>
      </Routes>
      
    </div>    
  );
}

export default App;
