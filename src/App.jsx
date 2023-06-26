import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import MyProfile from './components/MyProfile';
import NoPage from './components/NoPage';

function App() {
  return (
    <div>
    <Navbar/>
      <Routes>
        <Route path='myprofile' element={<MyProfile/>}/>
        <Route path='*' element={<NoPage/>}/>
      </Routes>
   
    </div>    
  );
}

export default App;
