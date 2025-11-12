// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './component/Login'
import Registration from './component/Registration'
import Dashboard from './component/Dashboard'
import MainLayout from './component/MainLayout'
import { useState } from 'react'
function App() {
  const[logData,setLogData] = useState();
  const[logData1,setLogData1] = useState();

  return (
    <>
      {/* <h2>Welcome online Shopping</h2> */}

      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login loginData={setLogData1}/>} />
        <Route path='/register' element={<Registration  regData={setLogData}/>} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/mainlayout' element={<MainLayout/>} />
      </Routes>
      </BrowserRouter>
      <h2>
        {JSON.stringify(logData)}
        {JSON.stringify(logData1)}
      </h2>
    </>
  )
}

export default App
