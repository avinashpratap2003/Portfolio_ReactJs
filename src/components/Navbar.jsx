
import './Navbar.css';
import {FaBars, FaTimes} from "react-icons/fa"
import { useState } from 'react';

const Navbar=()=>{
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);



    return(
        <div className="navContainer">
            <div className="navContent">
                <div className="navLeft">
                  <h1><a href="#home">AVINASH</a></h1>
                </div>
                <div className="navMiddle">
                    <ul className={click?"nav-menu active":"nav-menu"}>
                        <li><a href="#home">HOME</a></li>
                        <li><a href="#projects">PROJECTS</a></li>
                        <li><a href="#skills">SKILLS</a></li>
                        <li><a href="#contacts">CONTACT</a></li>
                    </ul>
                </div>
               
                <div className='humburger' onClick={handleClick}>
                    {click ?(<FaTimes size={20} style={{color:"#343d68"}}/>):(<FaBars size={20} style={{color:"#343d68"}}/>)}
                </div>
            </div>
        </div>
    )
}

export default Navbar; 