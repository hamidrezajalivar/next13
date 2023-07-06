import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

const CategorySlider = async () => {
  const categorys = await fecthData();

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
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
        <Link href="/">
          <div className="grid grid-cols-3 rounded  gap-5 bg-gray-500 items-center p-1">
          <div className="col-span-1 ">
          <Image src={item.imageUrl}  alt="" width="500" height="160" />
          </div>
          <div className="col-span-2 block">
            <h5>{item.title}</h5>
            <span className="text-xs">{item.body}</span>
          </div>
          </div>
        </Link>
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
