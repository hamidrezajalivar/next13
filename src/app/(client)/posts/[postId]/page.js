import axios from "axios";
import { notFound } from "next/navigation";
import Image from "next/image";
import BtnComponent from "../../clientComponent/BtnComponent";
export const dynamicParams = true;
export async function generateMetadata({ params }) {
  const post = await fecthSinglePost(params.postId);
  return { title: post.title, description: post.body };
}
async function fecthSinglePost(postId) {
  const { data } = await axios.get(`http://localhost:3001/posts/${postId}`, {
    // cache: "force-cache",
    next: { revalidate: 60 },
  });
  console.log(data);
  return data;
}
const SinglePost = async ({ params }) => {
  const { postId } = params;
  const singleData = await fecthSinglePost(postId);
  // if(!singleData) throw new Error("ops ... Post not found");

  // if (!singleData) return notFound();

  return (
    <>
      <div className=" block sm:flex">
        <div className="w-full md:w-1/2">
          <Image
            src={singleData?.imageUrl}
            alt=""
            layout="responsive"
            objectFit="cover"
            height={100}
            width={100}
          />
        </div>
        <div className="w-full md:w-1/2 leading-loose">
          <h2>{singleData?.title}</h2>
          <p>{singleData?.body}</p>
        </div>
      </div>
      <div className="flex w-full ">
        {" "}
        <BtnComponent />
      </div>
    </>
  );
};

export default SinglePost;

export async function generateStaticParams() {
  const posts = await fetch("http://localhost:3001/posts").then((res) =>
    res.json()
  );

  return posts.slice(0, 4).map((post) => ({
    postId: post.id.toString(),
  }));
}
