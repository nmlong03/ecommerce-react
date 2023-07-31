import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOnePro } from "../../../services/product";

const ProductDetail = () => {

    const {id} = useParams();
    // const navigate = useNavigate();
    const [product, setProduct] = useState({})
    
    useEffect(() => {
        getOnePro(id).then(({data}) => setProduct(data))
    }, {})
    return (
        <form >
        <section className="pt-12 pb-24 bg-white rounded-b-10xl overflow-hidden w-[1270px] mx-auto">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4">
                        <ul className="flex flex-wrap items-center mb-16">
                            <li className="mr-6">
                                <a
                                    className="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500"
                                    href="#"
                                >
                                    <span>Home</span>
                                    <svg
                                        className="ml-6"
                                        width="4"
                                        height="7"
                                        viewbox="0 0 4 7"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </a>
                            </li>
                            <li className="mr-6">
                                <a
                                    className="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500"
                                    href="#"
                                >
                                    <span>Store</span>
                                    <svg
                                        className="ml-6"
                                        width="4"
                                        height="7"
                                        viewbox="0 0 4 7"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-sm font-medium text-indigo-500 hover:text-indigo-600"
                                    href="#"
                                >
                                    Apple iPhone 12 PRO
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Card */}
                    <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
                        <div className="flex -mx-4 flex-wrap items-center justify-between lg:justify-start lg:items-start xl:items-center">
                            <div className="w-full sm:w-auto min-w-max px-4 text-center flex sm:flex-col items-center justify-center">
                            </div>
                            <div className="w-[400px] object-contain mr-5 sm:w-9/12 px-4">
                                <img
                                    className="mb-5"
                                    src={product?.image}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-4">
                        <div className="max-w-md mb-6">
                            <h2 className="mt-6 mb-4 text-2xl font-heading font-medium">
                                {product?.name}
                            </h2>
                            <p className="flex items-center mb-6">
                                <span className="mr-2 text-2xl text-red-500 font-medium">
                                    VNĐ
                                </span>
                                <span className="text-xl text-red-500 font-medium">
                                    {product?.price}
                                </span>
                            </p>
                            <p className="text-lg text-gray-400">
                                {product?.desc}
                            </p>
                        </div>
                        <div className="mb-10 flex items-center">
                            <h4 className="mb-3 font-heading  text-xl font-medium mr-2">Số lượng:</h4>
                            <input
                                className="w-24 px-3 py-2 text-center bg-white border-2 border-blue-500 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                                type="number" min="1"
                                placeholder="1"
                            />
                        </div>
                        <div className="flex flex-wrap -mx-2 mb-12">
                            <div className="w-full md:w-2/3 px-2 mb-2 md:mb-0">
                                <button
                                    className="block py-2 px-4 leading-8 font-heading font-medium tracking-tighter text-xl text-white text-center bg-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-600 rounded-xl"
                                    href="#"
                                >
                                    Thêm vào giỏ hàng
                                </button>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </form>
    );
};

export default ProductDetail;
