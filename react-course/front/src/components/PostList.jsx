import { useLoaderData } from "react-router-dom";

import Post from "./Post";
import classes from "./PostsList.module.css";

const PostList = (props) => {
  const posts = useLoaderData();
  /* const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false); */

/*   useEffect(() => {
    const fetchPosts = async() => {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/posts");
      const data = await response.json();
      setPosts(data.posts);
      setIsLoading(false);
    }

    fetchPosts();

  }, []); */

/*   const createPostHandler = (postData) => {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    setPosts((prevState) => [postData, ...prevState]);
  }; */

  return (
    <>
      {/* {isLoading && <p style={{ textAlign: "center" }}>Loading posts...</p>} */}
      {/* !isLoading &&  */posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post, key) => {
            return <Post key={key} id={post.id} author={post.author} body={post.text} />;
          })}
        </ul>
      )}

      {/* !isLoading &&  */posts.length === 0 && (
        <p style={{ textAlign: "center" }}>There are no posts</p>
      )}
    </>
  );
};

export default PostList;
