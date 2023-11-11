import { MdPostAdd, MdMessage } from 'react-icons/md';
import { Link } from 'react-router-dom';
import classes from '../css/MainHeader.module.css';

// function MainHeader({ onCreatePost }) {
  function MainHeader({ }) {
  // return (
  //   <header className={classes.header}>
  //     <h1 className={classes.logo}>
  //       <MdMessage />
  //       React Poster
  //     </h1>
  //     <p>
  //       <button 
  //         className={classes.button} 
  //         onClick={onCreatePost}>
  //           <MdPostAdd size={18} />
  //           New Post
  //       </button>
  //     </p>
  //   </header>
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <Link to="/create-post"
          className={classes.button}>
            <MdPostAdd size={18} />
            New Post
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;