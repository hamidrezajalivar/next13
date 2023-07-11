"use client";
import Slider from "react-slick";
import axios from "axios";
import CategoryBox from "./CategoryBox";
const CategorySlider = async () => {
  const categorys = await fecthData();

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,           
          },
        },
        {
            breakpoint: 468,
            settings: {
              slidesToShow: 1,           
            },
          },
      ],
  };
  
  return (
    <Slider {...settings}  className="category">
      {categorys.map((item) => (
        <div key={item.id} className="p-2">
        <CategoryBox item={item}/>
      </div>
  
      ))}
      
      
    </Slider>
  );
};
export default CategorySlider;
async function fecthData() {
  const { data } = await axios.get("http://localhost:3001/category");
  return data;
}
