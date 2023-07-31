import Baner from "../../components/Banner"
import Categories from "../../components/Categories"
// import Nav from "../../components/Nav"
import ProductList from "../../components/Products/ProductList"

const Home = () => {
  return (
    <>
        {/* <Nav /> */}
        <Baner />
        <Categories />
        <ProductList />
    </>
  )
}

export default Home