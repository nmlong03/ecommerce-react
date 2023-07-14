import Categories from './components/Categories'
import Header from './components/Header'
import ProductList from './components/Products/ProductList'
import {Routes, Route} from 'react-router-dom'
import Home from './features/Home'
import ProductDetail from './components/Products/ProductDetail'
function App() {

  return (
    <div className='container mx-auto bg-[#F1F5F9]'>
        <Header />
          <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products/:id" element={<ProductDetail/>} />
        <Route path="/products" element={<ProductList/>} />
        <Route path="/categories/:name" element={<Categories/>} />
        {/* <Route path="cart" element={<Cart/>} /> */}
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </div>
    
  )
}

export default App
