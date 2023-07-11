
import Image from "next/image";
import Link from "next/link";
const CategoryBox=(props)=>{
const {item} =props;
    return (
    <>
   <Link href="/">
          <div className="grid grid-cols-12 rounded  gap-5 bg-gray-500 items-center p-1 hover:bg-white transition-all">
          <div className="col-span-5 items pr-2">
          <Image src={item.imageUrl}  alt="" width="500" height="500" className="rounded  max-w-imageCategory bg-white "/>
          </div>
          <div className="col-span-7 block">
            <h5>{item.title}</h5>
            <span className="text-xs">{item.body}</span>
          </div>
          </div>
        </Link>
    </>
)
}
export default CategoryBox;
