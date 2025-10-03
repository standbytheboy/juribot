import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Chat from './pages/Chat'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ResetPassword from './pages/ResetPassword'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/chat' element={<Chat />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/password' element={<ResetPassword />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
