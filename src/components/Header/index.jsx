
import { AiOutlineSearch, AiOutlineHome, AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai"
const Header = () => {
  return (
    <div className="flex justify-evenly items-center bg-white p-2 shadow">
      <div className="flex items-center">
        <img src="../../../images/logo-3c597220.png" className="h-12 w-12" />
        <p className="text-purple-600">MinhLongShop</p>

      </div>
      <div className="flex items-center justify-between border rounded-3xl w-[600px] border-gray-400  m-2" >
        <input type="text" className="w-full p-2 outline-none  border-r" placeholder="   Bạn tìm kiếm sản phẩm gì..." />
        <button className="flex  text-center justify-center items-center w-1/5 p-2 rounded-r-3xl border-none  hover:bg-purple-600 hover:text-white"> <AiOutlineSearch />Tìm kiếm</button>
      </div>
      <div className="flex text-gray-600">
        <a href="" className="flex items-center space-x-2 hover:text-purple-600" >
          <div className=""><AiOutlineHome className="w-6 h-6"/>
          </div>
          <p className="w-[100px]">Trang chủ</p>
        </a>
        <a className="flex items-center space-x-2 hover:text-purple-600" >
          <div className=""><AiOutlineUser className="w-6 h-6"/>
          </div>
          <p className="w-[100px]">Tài khoản</p>
        </a>
        <a className="flex justify-center items-center hover:text-purple-600">
          <div className="relative py-2">
            <div className="absolute left-4 top-0">
              <span className="flex h-[2px] w-[2px]  items-center justify-center rounded-full bg-red-500 p-3 text-[10px] text-white">3</span>
            </div>
            <AiOutlineShoppingCart className="h-6 w-6 mr-4"/>
          </div>
          <p>Giỏ hàng</p>
        </a>
      </div>
    </div>
  )
}

export default Header