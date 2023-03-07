
import ProductList from "./pages/products/ProductList"
import { GlobalStyles } from "./styles/GlobalStyles"
import Product  from "./pages/product/Product"
import SignUp from "./pages/signup/SignUp"
import Login from "./pages/login/Login"
import Cart from "./pages/cart/Cart"
import Home from "./pages/home/Home"
import Router from "./router/Router"

function App() {
  return (
    <>
<Router />

<GlobalStyles />

    </>

  )
 }

export default App
