
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import Product from "./Product"
const ProductSlider = async () => {
  const productData = await fecthData();

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
    <Slider {...settings} className="sliderHeader productSlider">
      {productData.map((item) => (
        <div key={item.id}>
       <Product item={item} />
      </div>
  
      ))}
      
      
    </Slider>
  );
};
export default ProductSlider;
async function fecthData() {
  const { data } = await axios.get("http://localhost:3001/product");
  return data;
}
