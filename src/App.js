import './App.css';
import Navbar from './components/Navbar';
import  Login from '../src/pages/Login'
import Homepage from './pages/Homepage';
import AddClient from './pages/AddClient';
import Clientprofile from './pages/Clientprofile';
import Adminprofile from './pages/Adminprofile';
import Accountants from './pages/Accountants';
import Clientpage from './pages/Clientpage'
import BtnLang from './components/BtnLang'
import Courses from './pages/Courses'
import axios from 'axios'
import {useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
 
  const [clients, setClients] = useState([])
  const [client, setClient] = useState()
  useEffect(()=>{
    axios.get('http://localhost:3001/clients').then((response)=>{
        setClients(response.data)
    })
  },[])

  // useEffect(()=>{
  //   fetch('http://localhost:3001/clients').then((response)=> response.json()).then((data)=>{setClient(data[0].id)})
  // },[])

  

  return (
    <div className="App">
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/login' element={<Login />}/>
      <Route path='/profile' element={<Clientprofile clients={clients}/>}/>
        <Route exact path='/' element={<Homepage clients={clients}/>}/>
        <Route path='/profile' element={<Adminprofile />}/>
        <Route path='/accountants' element={<Accountants />}/>
        <Route path='/clients' element={<Clientpage clients={clients} invoice={clients.invoice} />}/>
        <Route path='/clients/add-client' element={<AddClient clients={clients}/>} />
        <Route path='/drop' element={<BtnLang />} />
        <Route path='/test' element={<Courses/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
