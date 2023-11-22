import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './login'
import Home from './home'
import Register from './register'
import NavBar from './navbar'
import Profile from './profile'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={ <Login/> } />
          <Route path='/register' element={ <Register/> }></Route>
          
          <Route path='/home' element={ <NavBar/> }>
          <Route index element={<Home/>}/>
          <Route path='profile' element={<Profile/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
