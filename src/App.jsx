import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import MyProfile from './components/MyProfile';
import Missions from './components/Missions';
import NoPage from './components/NoPage';
import Rockets from './components/RocketsComponent';
import { Provider } from 'react-redux';
import store from './redux/mainStore';

function App() {
  return (
    <div>
      <Provider store={store} >
    <Navbar/>
      <Routes>
        <Route path='myprofile' element={<MyProfile/>}/>
        <Route path='/rockets' element={ <Rockets></Rockets> }/>
        <Route path='/missions' element={ <Missions></Missions> }/>
      </Routes>
      </Provider>
    </div>    
  );
}

export default App;
