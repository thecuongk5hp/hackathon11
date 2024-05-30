import React from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-red-500 to-orange-400 p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <h1 className="text-white text-3xl font-bold ">Rikkei_Shop</h1>
      </div>
      <div className="flex items-center w-full max-w-2xl mx-auto relative">
        <input
          type="text"
          placeholder="Nhập để tìm kiếm"
          className="form-control w-full pr-10"
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <FaSearch />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-white flex items-center text-xl">
          <FaShoppingCart  />
          Giỏ hàng
        </button>
        <button className="text-white text-xl">Đăng nhập</button>
        <button className="text-white text-xl">Đăng ký</button>
      </div>
    </header>
  );
};

export default Header;
