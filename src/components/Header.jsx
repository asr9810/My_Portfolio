import React from "react";
import {AiOutlineMenu} from 'react-icons/ai'

const Header = ({menuopen, setmenuopen}) => {
  console.log(menuopen)
  return (
    <>
    <nav>
      <NavContent setmenuopen={setmenuopen} />
    </nav>
    <button className="navbtn" onClick={()=>{setmenuopen(!menuopen)}}>
    <AiOutlineMenu/>
  </button>
  </>
  );
};

const NavContent = ({setmenuopen}) => (
  <>
    <h2>ASR.</h2>
    <div>
      <a onClick={()=>{setmenuopen(false)}} href="#home">Home</a>
      <a onClick={()=>{setmenuopen(false)}} href="#work">Work</a>
      <a onClick={()=>{setmenuopen(false)}} href="#skills">Skills</a>
      
      <a onClick={()=>{setmenuopen(false)}} href="#contact">Contact</a>
    </div>
    <a href="mailto:amitrawat9810@gmail.com">
        <button>Email</button>
    </a>
  </>
);

export const PhoneMenu=({menuOpen,setmenuopen})=>(
  <div className={`navPhone ${menuOpen? "navPhoneComes": "navPhone"}`}>
    <NavContent setmenuopen={setmenuopen}/>
  </div>
)

export default Header;
