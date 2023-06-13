import {Route,Routes} from "react-router-dom"
import './App.css'
import LoginPage from "./pages/LoginPage"
import Layout from "./Layout"
import HomePage from "./pages/HomePage"
import WishListPage from "./pages/WishListPage"
import NotFoundPage from "./pages/NotFoundPage"
import CartPage from "./pages/CartPage"
import SingleProductPage from "./pages/SingleProductPage"

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<LoginPage/>} />
        <Route path='/HomePage' element={<HomePage />}></Route>
        <Route path='/WishList' element={<WishListPage />}></Route>
        <Route path='/cart' element={<CartPage />}></Route>
        <Route path='/singleProduct' element={<SingleProductPage />}></Route>
        <Route path = "*" element = {<NotFoundPage/>}></Route>
      </Route>
    </Routes>
  )
}

export default App
