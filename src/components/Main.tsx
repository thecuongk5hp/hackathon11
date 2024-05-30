import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBoxOpen, FaTv, FaBook, FaShoppingBag, FaTshirt } from 'react-icons/fa';

import iphon6 from './image/ThietBiDienTu/iphone6.jpg'
import iphon6plus from './image/ThietBiDienTu/iphone6plus.jpg'
import iphon7 from './image/ThietBiDienTu/iphone7.jpg'
import iphon7plus from './image/ThietBiDienTu/iphone7plus.jpg'
import iphon8 from './image/ThietBiDienTu/iphone8.jpg'
import iphon8plus from './image/ThietBiDienTu/iphone8plus.jpg'
import iphon11 from './image/ThietBiDienTu/iphone11.jpg'
import iphon11pro from './image/ThietBiDienTu/iphone11pro.jpg'
import iphon11promax from './image/ThietBiDienTu/iphone11promax.jpg'
import iphon12 from './image/ThietBiDienTu/iphone12.jpg'
import iphon12mini from './image/ThietBiDienTu/iphone12mini.jpg'
import iphon12pro from './image/ThietBiDienTu/iphone12pro.jpg'
import iphon12promax from './image/ThietBiDienTu/iphone12promax.jpg'
import iphonx from './image/ThietBiDienTu/iphonex.jpg'
import iphonxr from './image/ThietBiDienTu/iphonexr.jpg'
import iphonxs from './image/ThietBiDienTu/iphonexs.jpg'
import iphonxsmax from './image/ThietBiDienTu/iphonexsmax.jpg'

import ConChimXanhBiecQuayVe from './image/Sach/ConChimXanhBiecQuayVe.jpg'
import DacNhanTam from './image/Sach/DacNhanTam.jpg'
import DiTimLeSong from './image/Sach/DiTimLeSong.jpg'
import HaiSoPhan from './image/Sach/HaiSoPhan.jpg'
import HoangTuBe from './image/Sach/HoangTuBe.jpg'
import KhongGiaDinh from './image/Sach/KhongGiaDinh.jpg'
import MatBiec from './image/Sach/MatBiec.jpg'
import MuonKiepNhanSinh from './image/Sach/MuonKiepNhanSinh.jpg'
import NhaGiaKim from './image/Sach/NhaGiaKim.jpg'
import ToiTuHoc from './image/Sach/ToiTuHoc.jpg'
import YourName from './image/Sach/YourName.jpg'

import ao1 from './image/ThoiTrang/ao1.jpg'
import ao2 from './image/ThoiTrang/ao2.jpg'
import ao3 from './image/ThoiTrang/ao3.jpg'
import ao4 from './image/ThoiTrang/ao4.jpg'
import ao5 from './image/ThoiTrang/ao5.jpg'
import ao6 from './image/ThoiTrang/ao6.jpg'
import quan1 from './image/ThoiTrang/quan1.jpg'
import quan2 from './image/ThoiTrang/quan2.jpg'
import quan3 from './image/ThoiTrang/quan3.jpg'
import quan4 from './image/ThoiTrang/quan4.jpg'
import quan5 from './image/ThoiTrang/quan5.jpg'
import quan6 from './image/ThoiTrang/quan6.jpg'
import quan7 from './image/ThoiTrang/quan7.jpg'
import comfort from './image/comfort.jpg'



const products = [
  { id: 1, name: 'Iphone 6', price: '29.000.000đ', sold: 30, location: 'Hà Nội', brand: 'Apple', image: iphon6 },
  { id: 2, name: 'Iphone 6 Plus', price: '3.000.000đ', sold: 500, location: 'Hà Nội', brand: 'Apple', image: iphon6plus },
  { id: 3, name: 'Iphone 7', price: '35.000.000đ', sold: 500, location: 'Hà Nội', brand: 'Apple', image: iphon7 },
  { id: 4, name: 'Iphone 7 Plus', price: '35.000.000đ', sold: 48, location: 'Hà Nội', brand: 'Apple', image: iphon7plus },
  { id: 5, name: 'Iphone 8', price: '35.000.000đ', sold: 48, location: 'Hà Nội', brand: 'Apple', image: iphon8 },
  { id: 6, name: 'Iphone 8 Plus', price: '35.000.000đ', sold: 48, location: 'Hà Nội', brand: 'Apple', image: iphon8plus },
  { id: 15, name: 'Iphone X', price: '35.000.000đ', sold: 48, location: 'Hà Nội', brand: 'Apple', image: iphonx },
  { id: 16, name: 'Iphone Xr', price: '35.000.000đ', sold: 48, location: 'Hà Nội', brand: 'Apple', image: iphonxr },
  { id: 17, name: 'Iphone Xs Max', price: '35.000.000đ', sold: 48, location: 'Hà Nội', brand: 'Apple', image: iphonxs},
  { id: 17, name: 'Iphone Xs Max', price: '35.000.000đ', sold: 48, location: 'Hà Nội', brand: 'Apple', image: iphonxsmax },
  { id: 13, name: 'Iphone 12Pro ', price: '35.000.000đ', sold: 48, location: 'Hà Nội', brand: 'Apple', image: iphon12pro },
  { id: 13, name: 'Iphone 12Pro Max', price: '35.000.000đ', sold: 48, location: 'Hà Nội', brand: 'Apple', image: iphon12promax },
 
  { id: 22, name: 'Hoàng Tử Bé', price: '53.700đ', sold: 6891, location: 'Hà Nội',  image: HoangTuBe },
  { id: 25, name: 'Muôn Kiếp Nhân Sinh', price: '109.000đ', sold: 4169, location: 'Hồ Chính Minh',  image: MuonKiepNhanSinh },
  { id: 26, name: 'Nhà Giả Kim', price: '55.000đ', sold: 9654, location: 'Hà Nội',  image: NhaGiaKim },
  { id: 27, name: 'Tôi Tự Học', price: '32.900đ', sold: 2456, location: 'Đà Nẵng',  image: ToiTuHoc },
  { id: 27, name: 'Đắc Nhân tâm', price: '56.100đ', sold: 16498, location: 'Hà Nội',  image: DacNhanTam },
  { id: 27, name: 'Mắt Biếc', price: '76.400đ', sold: 9543, location: 'Nghệ An',  image: MatBiec },
  { id: 27, name: 'Không Gia Đình', price: '74.500đ', sold: 12483, location: 'Hà Nội',  image: KhongGiaDinh },
  { id: 27, name: 'Your Name', price: '45.000đ', sold: 5347, location: 'Hồ Chí Minh',  image: YourName },

  { id: 28, name: 'Quần Nỉ Họa Tiết', price: '2.229.000đ', sold: 246, location: 'Hà Nội', brand: 'Nike', image: quan1 },
  { id: 29, name: 'Quần Nỉ Đen Sọc Trắng', price: '1.759.000đ', sold: 694, location: 'Hà Nội', brand: 'Nike', image: quan2 },
  { id: 30, name: 'Áo Phông', price: '1.479.000đ', sold: 614, location: 'Hà Nội', brand: 'Nike', image: ao4 },
  { id: 31, name: 'Quần Nỉ Jordan', price: '1.919.000đ', sold: 537, location: 'Hà Nội', brand: 'Nike', image: quan3 },
  { id: 32, name: 'Áo Phông', price: '819.000đ', sold: 769, location: 'Hà Nội', brand: 'Nike', image: ao5 },
  { id: 39, name: 'Quần Đùi', price: '659.000đ', sold: 426, location: 'Hà Nội', brand: 'Nike', image: quan6 },
  { id: 39, name: 'Quần Nỉ Xám', price: '1.019.000đ', sold: 418, location: 'Hà Nội', brand: 'Nike', image: quan5 },
  { id: 39, name: 'Áo Khoác', price: '1.739.000đ', sold: 849, location: 'Hà Nội', brand: 'Nike', image: ao6 },
  { id: 39, name: 'Quần Đùi', price: '659.000đ', sold: 968, location: 'Hà Nội', brand: 'Nike', image: quan7 },
  { id: 39, name: 'Nước Xả Vải Comfort', price: '145.000đ', sold: 6514, location: 'Hà Nội',  image: comfort },
];

const Main: React.FC = () => {
    return (
      <div className="bg-gray-100 pt-8 pb-8">
        <div className=" mx-auto flex flex-col lg:flex-row">
          <aside className="w-full lg:w-1/4 p-4 bg-white border border-gray-200 shadow-lg rounded-lg mb-4 lg:mb-0">
            <h2 className="text-lg font-bold mb-4">⇶Danh mục sản phẩm</h2>
            <ul className="space-y-2">
              <li className="flex items-center text-red-500">
                <span className="mr-2">
                  <FaBoxOpen />
                </span>
                Tất cả sản phẩm
              </li>
              <li className="flex items-center">
                <span className="mr-2">
                  <FaTv />
                </span>
                Thiết bị điện tử
              </li>
              <li className="flex items-center">
                <span className="mr-2">
                  <FaBook />
                </span>
                Sách
              </li>
              <li className="flex items-center">
                <span className="mr-2">
                  <FaShoppingBag />
                </span>
                Đồ tiêu dùng
              </li>
              <li className="flex items-center">
                <span className="mr-2">
                  <FaTshirt />
                </span>
                Thời trang
              </li>
            </ul>
          </aside>
          <main className="w-full  lg:w-4/4 p-4 bg-white border border-gray-200 shadow-lg rounded-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {products.map(product => (
                <div key={product.id} className="border p-4 bg-white rounded shadow-sm">
                  <img src={product.image} alt={product.name} className="mb-4 w-full h-auto object-cover" />
                  <h3 className="text-lg font-bold">{product.name}</h3>
                  <p className="text-red-500 font-semibold">{product.price}</p>
                  <div className="flex justify-between items-center">
                    <p>{product.sold} đã bán</p>
                    <p className="text-sm text-gray-600">{product.location}</p>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-sm text-gray-600">{product.brand}</p>
                    <button className="text-red-500">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09A6.48 6.48 0 0116.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    );
  };
  
  export default Main;