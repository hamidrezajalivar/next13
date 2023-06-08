

const SinglePost=async ({params})=>{
   const post =await fecthSinglePost(params.postId);
    return(
        <>
        SINGLE PAGES
        <h2>{  post.title}</h2>
          <p>{post.body}</p>
        </>
    )
}
export default SinglePost;


async function fecthSinglePost(postId){

const res= await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
 const data=await res.json();
 return data;
}