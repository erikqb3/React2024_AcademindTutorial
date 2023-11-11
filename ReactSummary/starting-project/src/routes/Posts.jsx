import { useState } from "react";
import { Outlet } from "react-router-dom";

import PostLists from "../components/PostsList";
// import MainHeader from "../components/MainHeader";

function Posts() {
  const [modalIsVisible, setModalIsVisible] = useState(false) //default/initial set to false
  // function showModalHandler(){
  //   setModalIsVisible(true);
  // }
  // function hideModalHandler(){
  //   setModalIsVisible(false)
  // }

  // return (
  //   <>
  //     <MainHeader 
  //       onCreatePost={showModalHandler}>
  //     </MainHeader>
  //     <main>
  //       <PostLists 
  //       isPosting={modalIsVisible}
  //       onStopPosting={hideModalHandler}/>
  //     </main>
  //   </>
  // )  
  return (
    <>
    <Outlet/>
      <main>
        <PostLists/>
      </main>
    </>
  )  
}

export default Posts;
export async function loader(){ //asyn unlocks await keyword
  const response = await fetch('http://localhost:8080/posts')
  const resData = await response.json();
  return resData.posts;
}
