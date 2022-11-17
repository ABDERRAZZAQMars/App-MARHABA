import './Style/App.css'
import ForgetPassword from './Components/ForgetPassword '
import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/Register'
import ResetPassword from './Components/ResetPassword'
import Notfound from './Components/Notfound'
import { Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout'
import 'react-toastify/dist/ReactToastify.css';
import ProfilLivreur from './Components/ProfilLivreur'
import RequireAuth from './Components/RequireAuth'
import ProfileClient from './Components/ProfileClient'
import ProfileManager from './Components/ProfileManager'
import Access_denied from './Components/Access_denied'




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgetpassword' element={<ForgetPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
        <Route path='/*' element={<Notfound />} />

      <Route element={<RequireAuth Role = {['livreur']}/>} >
        <Route path='/livreur' element={<ProfilLivreur />} />
      </Route>
      <Route element={<RequireAuth Role = {['client']}/>} >
        <Route path='/client' element={<ProfileClient />} />
      </Route>
      <Route element={<RequireAuth Role = {['manager']}/>} >
        <Route path='/manager' element={<ProfileManager />} />
      </Route>
      
        <Route to='/access_denied' element={< Access_denied />} />
        <Route element={<Layout />}>
          <Route path='/' exact element={<Home />} />
        </Route>

      </Routes>
    </div>
  )
}

export default App
