import { Container } from '@mui/material';
import { Route, Routes, useLocation } from "react-router-dom";
import Headline from './components/Headline.jsx';
import Navbar from './components/Navbar';
import Tech from './components/tech.jsx';
import Sports from './components/Sports.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
// import './App.css'

function App() {

  const location = useLocation();
  return (
    <Container className='m-5' maxWidth='sm'>
      <div className='m-4' style={{width:"90vw"}}>
      {location.pathname !='/login'?location.pathname !='/signup'?<Navbar/>:<></>:<></>}
      <hr />
      </div>
     <div className='d-flex justify-content-center align-items-center flex-wrap' style={{height:"90vh",width:"90vw"}}>
       <Routes>
         <Route path='/' element={<Headline/>} />
         <Route path='/sports' element={<Sports/>} />
         <Route path='/tech' element={<Tech/>} />
         <Route path='/login' element={<Login/>} />
         <Route path='/signup' element={<Signup/>} />
       </Routes>
     </div>
    </Container>
  )
}

export default App
