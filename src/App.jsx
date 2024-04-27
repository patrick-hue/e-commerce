import { Route, useParams } from 'react-router-dom';
import './App.css'
import  { CartProvider } from './CartContext/context'
import Routing from './routes/Routes'
import { Datastore } from './assets/data';

function App() {
  console.log(Datastore);
  return (
    <>
    <CartProvider>
      <Routing />
    </CartProvider>
    </>
  )

}

export default App
