import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className=" mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-2">CHĂM SÓC KHÁCH HÀNG</h3>
            <ul>
              <li className="text-gray-600 mb-1">Trung tâm trợ giúp</li>
              <li className="text-gray-600">Hướng dẫn mua hàng</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">GIỚI THIỆU</h3>
            <ul>
              <li className="text-gray-600 mb-1">Điều khoản</li>
              <li className="text-gray-600 mb-1">Chính sách bảo mật</li>
              <li className="text-gray-600">Tuyển dụng</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">DANH MỤC SẢN PHẨM</h3>
            <ul>
              <li className="text-gray-600 mb-1">Thời trang</li>
              <li className="text-gray-600 mb-1">Đồ tiêu dùng</li>
              <li className="text-gray-600 mb-1">Thiết bị điện tử</li>
              <li className="text-gray-600">Sách</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">THEO DÕI CHÚNG TÔI</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 flex items-center">
                <FaFacebook  /> Facebook
              </li>
              <li className="text-gray-600 flex items-center">
                <FaInstagram  /> Instagram
              </li>
              <li className="text-gray-600 flex items-center">
                <FaTwitter  /> Twitter
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">ĐỘI NGŨ PHÁT TRIỂN</h3>
            <ul>
              <li className="text-red-600">Nguyễn Duy Hiển</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
