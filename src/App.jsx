
import './App.css'
import Header from "./Header"
import Product from "./Product"
// import { useDispatch } from 'react-redux';
// import { clearAllItems } from './redux-toolkit/slice';

function App() {


  // const dispatch = useDispatch();

  return (
    <>
<Header/>

{/* <h3>React redux tolkit</h3>
  <button className='btn' onClick={() => dispatch(clearAllItems())}  >Clear Cart</button> */}

<Product/>
   
    </>
  )
}

export default App
