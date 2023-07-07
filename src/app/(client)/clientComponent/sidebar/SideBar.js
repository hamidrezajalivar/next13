import Link from "next/link";
import Image from "next/image";
const SideBar=()=>{
    return (
        
        <div className="w-full p-5 bg-green-500 ">
            <div className="">
            <Image src="/img/sidebar/1.png" className="" width="300" height="300" alt="sidebar"/>
            </div>
            <div className="my-5">
            <Image src="/img/sidebar/1.png" className="" width="300" height="300" alt="sidebar"/>
            </div>
            <div className="">
            <Image src="/img/sidebar/1.png" className="" width="300" height="300" alt="sidebar"/>
            </div>
        </div>
        
    )
}
export default SideBar;