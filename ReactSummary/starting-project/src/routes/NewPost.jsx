// import { useState } from 'react';
import { Link, Form, redirect } from 'react-router-dom';
//Form will prevent default sending of request but will still gather all input data

import Modal from '../components/Modal';
import classes from '../css/NewPosts.module.css';

// function NewPost({onCancel, onAddPost}) {
  function NewPost({}) {
  // const [enteredName, setEnteredName] = useState('');
  // const [enteredSpecies, setEnteredSpecies] = useState(''); //'' is starting vbalue

  // function nameChangeHandler(event){
  //   setEnteredName(event.target.value)
  // }
  // function speciesChangeHandler(event){
  //   setEnteredSpecies(event.target.value)
  // }
  // function submitHandler(event){
  //   event.preventDefault(); //prevents generating and sending an HTTP request that would refresh the page upon submission
  //   const postData = {
  //     name: enteredName,
  //     species: enteredSpecies
  //   }
  //   console.log(postData);
  //   // onAddPost(postData);
  //   onCancel();
  // }

  // return (
  //   <Modal>
  //     <form className={classes.form} onSubmit={submitHandler}>
  //       <p>
  //         <label htmlFor="name">Your name</label>
  //         <input type="text" id="name" required onChange={nameChangeHandler}/>
  //       </p>
  //       <p>
  //         <label htmlFor="body">Species</label>
  //         <textarea id="body" required rows={2} onChange={speciesChangeHandler}/>
  //       </p>
  //       <p className={classes.actions}>
  //         <Link to='..' type="button">Cancel</Link>
  //         <button>Submit</button>
  //       </p>
  //     </form>
  //   </Modal>
  // );
  return (
    <Modal>
      <Form method="post" className={classes.form}> 
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="name" required/>
        </p>
        <p>
          <label htmlFor="species">Species</label>
          <textarea id="species" name="species" required rows={2}/>
        </p>
        <p className={classes.actions}>
          <Link to='..' type="button">Cancel</Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({request}){ //request object generated to function
  const formData =  await request.formData();//gain access to data encoded in form
  const postData = Object.fromEntries(formData); //{ name:'...', species:'...'}
  const res = await fetch('http://localhost:8080/posts', {//targets running backend database
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type':'application/json'
    }
  });
  console.log(res) //so you can see if something goes wrong

  return redirect('/'); //goes back to homescreen
}