import React from 'react'
import Sidebar from './Sidebar';
import {Link,useLocation} from "react-router-dom";
function Navbar() {
    const[showside,setshowside]=React.useState(false); 
    const location = useLocation()
const links=[
   { name:"Home",
path:"/"},
   { name:"Recipes",
path:"/recipes"},
 
]
function close()
{
    setshowside(false);
}
  return ( 
  <>
    <div className='navbar container'>
        <Link to="/" className='logo'>F<span>oo</span>dify</Link>
        <div className='nav-links'>
          {
            links.map(link=>(
                <Link className={location.pathname === link.path ? "active" : ""} to={link.path} key={link.name}> {link.name}</Link>
            ))
          }
        </div>
        <div className={showside ? "sidebar-btn active" : "sidebar-btn"} onClick={()=>setshowside(!showside)}>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
        </div>
    </div>
   {showside && <Sidebar close={close} links={links}/>}
</>
  )
}

export default Navbar;