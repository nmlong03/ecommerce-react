import PropTypes from 'prop-types';
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
const ProductCard = ({ products = [] }) => {
    console.log(products);
    return (
        <>
            {
                products.map((product) => {
                    

                    return ( 
                        <div key={product._id} className="relative m-10 flex w-fuWll max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                            <Link to={`/products/${product._id}`} className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
                                <img className="object-cover" src={product.image} alt="product image" />
                                <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span>
                            </Link>
                            <div className="mt-4 px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-xl tracking-tight text-slate-900">${product.name}</h5>
                                </a>
                                <div className="mt-2 mb-5 flex items-center justify-between">
                                    <p>
                                        <span className="text-3xl font-bold text-slate-900">${product.price}</span>
                                        <span className="text-sm text-slate-900 line-through">${product.price}</span>
                                    </p>
                                    <div className="flex items-center text-yellow-500">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
                                    </div>
                                </div>
                                <a href="#" className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    <AiOutlineShoppingCart className='h-5 w-5 mr-2' />
                                    Add to cart</a>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}
ProductCard.propTypes = {
    products: PropTypes.array.isRequired,
  };
export default ProductCard;
