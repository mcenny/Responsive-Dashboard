import { useState, useEffect, Fragment } from "react";
import SideBar from './SideBar';
import TopBar from './TopBar';
import {Transition} from '@headlessui/react';

export default function Layout ({children}: any){
  const [showNav, setShowNav] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  
  function handleResize(){
    if(innerWidth <= 640){
      setShowNav(false);
      setIsMobile(true);
    } else {
      setShowNav(true)
      setIsMobile(false)
    }
  }
  
  useEffect(()=>{
    if(typeof window != undefined){
      addEventListener('resize', handleResize)
    }
    
    return () => {
      removeEventListener('resize', handleResize)
    }
  }, [])
  
  
  return(
    <div>
      <TopBar showNav={showNav} setShowNav={setShowNav}/>
      
      {children}
    </div>
  )
}