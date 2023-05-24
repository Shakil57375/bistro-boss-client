import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import FoodCard from "../../../Compnents/FoodCard/FoodCard";

SwiperCore.use([Pagination]);

const OrderTab = ({ items }) => {
  const itemsPerPage = 6;
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}">${index + 1}</span>`;
    },
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const paginationButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationButtons.push(
      <button
        key={i}
        className={`${
          currentPage === i ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
        } py-2 px-4 mr-2 rounded focus:outline-none`}
        onClick={() => handlePageChange(i)}
      >
        {i}
      </button>
    );
  }

  return (
    <div>
      <Swiper pagination={pagination} className="mySwiper">
        <SwiperSlide>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
            {currentItems.map((item) => (
              <FoodCard key={item._id} item={item} />
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="flex justify-center mt-4 space-x-2">
        {paginationButtons}
      </div>
    </div>
  );
};

export default OrderTab;