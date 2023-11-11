import MainHeader from "../components/MainHeader";
import { Outlet } from 'react-router-dom'; //creates placeholder where nested routes can sit

function RootLayout(){
  return (
    <>
      <MainHeader/>
      <Outlet/> 
    </>
  )
}

export default RootLayout;