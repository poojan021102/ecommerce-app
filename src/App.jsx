import {Route,Routes} from "react-router-dom"
import './App.css'
import LoginPage from "./pages/LoginPage"
import Layout from "./Layout"
import HomePage from "./pages/HomePage"
import WishListPage from "./pages/WishListPage"
import NotFoundPage from "./pages/NotFoundPage"
import CartPage from "./pages/CartPage"
import SingleProductPage from "./pages/SingleProductPage"
import AllProductsPage from "./pages/allProductsPage"
function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path = "/logIn" element={<LoginPage/>} />
        <Route index element={<HomePage />}></Route>
        <Route path='/WishList' element={<WishListPage />}></Route>
        <Route path='/cart' element={<CartPage />}></Route>
        <Route path='/singleProduct/:id' element={<SingleProductPage />}></Route>
        <Route path="/allProducts" element = {<AllProductsPage/>}/>
        <Route path = "*" element = {<NotFoundPage/>}></Route>
      </Route>
    </Routes>
  )
}

export default App
