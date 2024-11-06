import Footer from './Components/Footer/footer';
import Navbar from './Components/Navbar/navbar';
import Home from './Pages/Home';
import Contact from './Components/Contact/contact';
import About from './Components/About/about';
import Signup from './Pages/Signup';
import TopHeader from './Components/TopHeader/topHeader';
import Wishlist from './Pages/Wishlist';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import MyAccount  from './Pages/MyAccount';
import Product from './Pages/Product';
import ProfileMenu from './Components/ProfileMenu/profileMenu';
import AllProduct from  './Pages/AllProducts';
import ErrorPage from './Pages/ErrorPage'
import CheckOut from './Components/CheckOut/CheckOut';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <TopHeader/>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/myaccount' element={<MyAccount />} />
          <Route path='/profilemenu' element={<ProfileMenu />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/allproducts' element={<AllProduct/>}/>
          <Route path='/error' element={<ErrorPage/>}/>
          <Route path='/checkout' element={<CheckOut/>}/>

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
