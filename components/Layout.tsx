import { useState, useEffect, Fragment } from "react";
import SideBar from './SideBar';
import TopBar from './TopBar';
import {Transition} from '@headlessui/react';

export default function Layout ({children}: any){
  const [showNav, setShowNav] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  
  function handleSize(){
    
  }
}