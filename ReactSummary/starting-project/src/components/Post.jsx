import classes from '../css/Post.module.css'; //behind the scene transformation
import { Link } from 'react-router-dom';

// function Post (props){
  function Post({ id,name,species}){
    console.log(id, name, species);
  // console.log(classes.post, classes.name, classes.species)
  return (
    <li className={classes.post}> 
    <Link to={id}>
      <p className={classes.name}>{name}</p>
      <p className={classes.species}>{species}</p>
    </Link>
    </li>
  )
    
}


export default Post;