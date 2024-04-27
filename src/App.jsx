import { Route, useParams } from 'react-router-dom';
import './App.css'
import  { CartProvider } from './CartContext/context'
import Routing from './routes/Routes'

function App() {
  return (
    <>
    <CartProvider>
      <Routing />
    </CartProvider>
    </>
  )

}

export default App
