
import './App.css'
import Header from "./Header"
import Product from "./Product"
import CartList from './CartList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { useDispatch } from 'react-redux';
// import { clearAllItems } from './redux-toolkit/slice';

function App() {


  // const dispatch = useDispatch();

  return (
    <>


{/* <h3>React redux tolkit</h3>
  <button className='btn' onClick={() => dispatch(clearAllItems())}  >Clear Cart</button> */}


<BrowserRouter>


<Header/>
<Routes>
  <Route path="/" element={<Product/>}/>
  <Route path="/cart" element={<CartList/>}/>


</Routes>
</BrowserRouter>
   
    </>
  )
}

export default App
