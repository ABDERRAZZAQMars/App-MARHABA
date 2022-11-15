import './Style/App.css'
// import Footer from './Components/Footer'
import ForgetPassword from './Components/ForgetPassword '
import Home from './Components/Home'
import Login from './Components/Login'
// import Navbar from './Components/Navbar'
import Register from './Components/Register'
import ResetPassword from './Components/ResetPassword'
import Notfound from './Components/Notfound'
  import { Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgetpassword' element={<ForgetPassword />} />
        <Route path='/resetpassword' element={<ResetPassword />} />
        <Route path='/*' element={<Notfound />} />


        <Route element={<Layout />}>
          <Route path='/' exact element={<Home />} />
        </Route>

      </Routes>
    </div>
  )
}

export default App
