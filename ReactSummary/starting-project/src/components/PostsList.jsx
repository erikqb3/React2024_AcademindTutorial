import Post from "./Post";
import NewPost from "../routes/NewPost";
// import Modal from "./Modal";
import classes from '../css/PostsList.module.css'
// import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

// function PostsLists({isPosting, onStopPosting}){
function PostsLists({}){
  const posts = useLoaderData(); //gives data that is returned by the loader from Posts.js that's assigned in route in main.jsx
  // const [posts, setPosts] = useState([]);
  // const [isFetching, setIsFetching] = useState(false);
  // const database = "http://localhost:8080/posts"

  // useEffect(() => { //safely run code without infinate loop 
  //   async function fetchPosts(){ //async allows update whener changed
  //     // setIsFetching(true);
  //     // const response = await fetch('http://localhost:8080/posts')
  //     // const resData = await response.json();
  //     setPosts(resData.posts);
  //     // setIsFetching(false);
  //   }

  //   fetchPosts();
  // }, []);

  // function addPostHandler(postData){
  //   fetch('http://localhost:8080/posts', {//targets running backend database
  //     method: 'POST',
  //     body: JSON.stringify(postData),
  //     headers: {
  //       'Content-Type':'application/json'
  //     }
  //   });
  //   setPosts((existingPosts) => [postData, ...existingPosts]); //if you update state and the new state is based on existing state, use function to update state (activates automaticaly when setting post)
  //   // setPosts([postData, ...posts]);
  // }
  // return (
  //   <>

  //   {!isFetching && posts.length > 0 && (
  //     <ul 
  //       className={classes.posts}>
  //       {posts.map((post)=><Post key={post.name+post.species} name={post.name} species={post.species}/>)}
  //       {/* <Post name={enteredName} species={enteredSpecies}></Post> */}
  //       {/* <Post name="Honest" species="Rotom"></Post>
  //       <Post name="Cloak" species="Hench-coat"></Post>
  //       <Post name="Sheou" species="Mist Dragon"></Post> */}
  //     </ul>
  //   )}
  //   {!isFetching && posts.length === 0 && (
  //     <div style={{ textAlign: 'center', color:"white"}}>
  //       <h2>There are no posts yet...</h2>
  //       <p>Start adding some!</p>
  //     </div>
  //   )}
  //   {isFetching && (
  //     <p>Loading Posts...</p>
  //   )}
  //   </>
  // )
  return (
    <>

    {posts.length > 0 && (
      <ul 
        className={classes.posts}>
        {posts.map((post)=>(
          <Post key={post.id} id={post.id} name={post.name} species={post.species}/>
          ))}
        {/* <Post name={enteredName} species={enteredSpecies}></Post> */}
        {/* <Post name="Honest" species="Rotom"></Post>
        <Post name="Cloak" species="Hench-coat"></Post>
        <Post name="Sheou" species="Mist Dragon"></Post> */}
      </ul>
    )}
    {posts.length === 0 && (
      <div style={{ textAlign: 'center', color:"white"}}>
        <h2>There are no posts yet...</h2>
        <p>Start adding some!</p>
      </div>
    )}
    </>
  )
}

export default PostsLists;