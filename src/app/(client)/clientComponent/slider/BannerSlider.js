
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

const BannerSlider = async () => {
  const bannerData = await fecthData();

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
  return (
    <Slider {...settings} className="sliderHeader">
      {bannerData.map((item) => (
        <div key={item.id}>
        <Link href="/">
          <div className="rounded overflow-hidden">
            <Image src={item.imageUrl}  alt="" width="500" height="160"      style={{ width: '100%' }} />

          </div>
        </Link>
      </div>
  
      ))}
      
      
    </Slider>
  );
};
export default BannerSlider;
async function fecthData() {
  const { data } = await axios.get("http://localhost:3001/banner");
  return data;
}
