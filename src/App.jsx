import { Route, Routes} from 'react-router-dom';
import './App.css'
import  { CartProvider } from './CartContext/context'
import { Datastore } from './assets/data';
import Layout from './Layout';
import Home from './pages/home';
import CartPage from './pages/cartlist';
import About from './pages/About';
import Refund from './pages/refund';
import Notfound from './pages/notfound';
import Payment from './pages/checkout-to-pay'
function App() {
  console.log(Datastore);
  return (
    <>
    <CartProvider>
     <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<CartPage/>} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/checkout" element={<Payment />} />
            <Route path="*" element={<Notfound />} />
          </Route>
     </Routes>
    </CartProvider>
    </>
  )

}

export default App
