
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

const ChildBanner = async () => {
    const bannerData = await fecthData();
    const bannerChildData = await fecthDataChild();



    return (
        <>
            <div className="">
                <Link href="/">
                    <div className="rounded overflow-hidden">
                        <Image src={bannerChildData?.imageUrl} alt="" width="500" height="160" style={{ width: '100%' }} />

                    </div>
                </Link>
            </div>
            <div className=" grid grid-cols-4 mt-10 gap-5 ">


                {bannerData.map((item) => (
                    <div className="col-span-2 " key={item.id}>
                        <Link href="/">
                            <div className="rounded overflow-hidden">
                                <Image src={item.imageUrl} alt="" width="500" height="160" style={{ width: '100%' }} />

                            </div>
                        </Link>
                    </div>

                ))}
            </div>

        </>
    );
};
export default ChildBanner;
async function fecthData() {
    const { data } = await axios.get("http://localhost:3001/banner1");
    return data;
}

async function fecthDataChild() {
    const { data } = await axios.get("http://localhost:3001/banner0");
    return data;
}
