
import { Link,useLocation } from "react-router-dom"
function Sidebar({ links, close }) {
     const location = useLocation()
    return (
        <div className='sidebar' onClick={close}>
            {
                links.map(link => (<Link to={link.path} className={location.pathname === link.path ? "sidebarlink active" : "sidebarlink"}
                     key={link.name}>{link.name}</Link>
                ))
            }
        </div>
    )
}

export default Sidebar;