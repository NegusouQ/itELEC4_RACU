import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './login'
// import Home from './home'
import Register from './register'
import NavBar from './navbar'
import Games from './games'
import Profile from './profile'

// ERROR PAGE
import Error from './common/error'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={ <Login/> } />
          <Route path='/register' element={ <Register/> }></Route>

          <Route path='/games' element={ <NavBar/> }>
          <Route index element={<Games/>}/>
          {/* <Route path='games' element={ <Games/> }/> */}
          <Route path='profile' element={ <Profile/> }/>
          </Route>

          <Route path='*' element={ <Error/> }/>


        </Routes>
      </Router>
    </>
  )
}

export default App
