import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Posts, {loader as postLoader} from './routes/Posts'
import NewPost, {action as newPostAction} from './routes/NewPost';
import PostDetails, { loader as postDetailsLoader } from './routes/PostDetails';
import './index.css'
import RootLayout from './routes/RootLayout';

const pages = createBrowserRouter([
  // { path: '/', element: <Posts/>},
  // { path: '/create-post', element: <NewPost/>},
  // { path: '/*', element: <h1>WHAT ARE YOU LOOKING FOR?</h1>}
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      { path: '/', 
        element:<Posts/>,
        // loader: ()=>{}, //activated when when this route gets activated used to load and prepare data used for this route
        loader: postLoader,
        children: [
          { path: '/create-post', element: <NewPost/>,action: newPostAction}, //action triggered when form is submitted
          { path: '/:id', element: <PostDetails/>, loader: postDetailsLoader}
        ]},
    ],
  },
  { path: '/*', element: <h1>WHAT ARE YOU LOOKING FOR?</h1>}
  ])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={pages}/>
  </React.StrictMode>
)
