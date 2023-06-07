import {Route,Routes} from "react-router-dom"
import './App.css'
import LoginPage from "./pages/LoginPage"
import Layout from "./Layout"
import HomePage from "./pages/HomePage"

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<LoginPage/>} />
        <Route path='/HomePage' element={<HomePage />}></Route>
      </Route>
    </Routes>
  )
}

export default App
