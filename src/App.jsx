import {Route,Routes} from "react-router-dom"
import './App.css'
import HomePage from "./pages/HomePage"
import Layout from "./Layout"

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage/>} />
      </Route>
    </Routes>
  )
}

export default App
