import Header from './components/Header'
import ProductList from './components/Products/ProductList'
import { Routes, Route } from 'react-router-dom'
import Home from './features/Home'
import ProductDetail from './components/Products/ProductDetail'
import Cart from './components/Cart'
import SignUp from './components/Signup'
import SignIn from './components/Signin'
import ProductCategory from './components/Products/ProductCategory'
function App() {

  return (
    <div className='container mx-auto bg-[#F1F5F9]'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/categories/:id" element={<ProductCategory />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </div>

  )
}

export default App
