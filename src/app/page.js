import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CardBlog from "../../components/CardBlog";
import axios from "axios";
import Link from "next/link";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const Home = async () => {
  const postsData = await fecthPosts();
  return (
    <>
      <Navbar />
      content
      <div className=" block md:flex justify-center w-full  flex-wrap">
        {postsData.map((post) => (
          <div className="md:w-1/3  w-full p-5">
            <Link href={`http://localhost:3001/posts/${post.id}`}>
              <div className="singleCardPost ">
                <Image src={post.imageUrl} alt="" width="500" height="160" />
                <h1 className="text-lg">{post.title} </h1>
                <p className="text-sm">{post.body}</p>
                <button type="btn" className="btnMore">
                  click more
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <CardBlog />
      <Footer />
    </>
  );
};
export default Home;
async function fecthPosts() {
  const { data } = await axios.get("http://localhost:3001/posts");
  return data;
}
