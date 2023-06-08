
import Link from 'next/link';
const PostList=async ()=>{
const posts=await fecthPosts();

    return(
<><h2>List posts</h2>
{posts.map(post=>(
    <div key={post.id}>
    <h2>{post.title}</h2>
    <Link href={`/posts/${post.id}`}> <b>more</b> </Link>
    </div>
    ))}
</>
    )
}
export default PostList;

async function fecthPosts(){
    const res=await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts=await res.json();
    return posts;
}