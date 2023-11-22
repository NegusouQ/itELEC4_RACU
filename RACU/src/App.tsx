import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './login'
import Register from './register'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={ <Login/> } />
          <Route path='/register' element={ <Register/> }></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
