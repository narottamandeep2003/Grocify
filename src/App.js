import './CSS/Home.css'
import './CSS/NavBar.css';
import './CSS/Shop.css';
import './CSS/Cart.css';
import './CSS/Login.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Shop from './components/Shop';
import './App.css'

import { UserContext } from './Store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AboutUs from './components/AboutUs';
import List from './List';
import Payment from './components/Payment';


function App() {
  const list=List
  return (
    <> 
    <UserContext.Provider  value={{"list":list}}>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home ></Home>} />
          <Route path='/Shop' element={<Shop></Shop>} />
          <Route path='/Cart' element={<Cart></Cart>} />
          <Route path='/Login' element={<Login></Login>} />
          <Route path='/SignUp' element={<SignUp></SignUp>} />
          <Route path='/AboutUs' element={<AboutUs></AboutUs>} />
          <Route path='/Payment' element={<Payment></Payment>} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
    </>
  );
}

export default App;
