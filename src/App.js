import './App.css';
import Navbar from './components/Navbar';
import  Login from '../src/pages/Login'
import Homepage from './pages/Homepage';
import AddClient from './pages/AddClient';
import Clientprofile from './pages/Clientprofile';
import Adminprofile from './pages/Adminprofile';
import Accountants from './pages/Accountants';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/profile' element={<Adminprofile />}/>
        <Route path='/accountants' element={<Accountants />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
