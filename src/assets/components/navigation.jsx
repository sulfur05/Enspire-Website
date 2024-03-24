import {Link,NavLink} from 'react-router-dom'
import Footerr from './footer';
import Contact from './contactus';
const Navigation=()=>{
    return(
        <nav>
        <div className="container">
          <div className="logo">
            <img src="/images/logo.png" className="this" alt="" />
          </div>
          <ul>
            <li><NavLink to="/">HOME</NavLink></li>
          <li><NavLink to="team">OUR TEAM</NavLink></li>
          {/* <li><Link to={`#sponsor`}>Your Name</Link></li> */}
          
          <li>
            {/* <a href="./components/contactus">CONTACT US</a> */}
            <NavLink
                  to="/contactus"
                >
                  CONTACT US
                </NavLink>
            </li>
        </ul>
        <div className='logo2'>
          <img src="/images/logo2.png" alt="logo2" />
        </div>
        </div>
      </nav>  
    )
}

export default Navigation;
