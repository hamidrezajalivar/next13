import Link from "next/link";
import axios from "axios";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const PostList = async () => {
  const postsData = await fecthPosts();

  return (
    <>
      <h2>List posts</h2>
      {postsData.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <Link href={`/posts/${post.id}`}>
            {" "}
            <b>more</b>{" "}
          </Link>
        </div>
      ))}
    </>
  );
};
export default PostList;

async function fecthPosts() {
  const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return data;
}
