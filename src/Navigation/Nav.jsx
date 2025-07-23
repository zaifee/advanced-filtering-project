import { FiHeart } from "react-icons/fi";
import { CiShoppingCart } from "react-icons/ci";
import { AiOutlineUserAdd } from "react-icons/ai";

import './Nav.css';
const Nav = () => {
  return <nav>
    <div className="nav-container">
        <input type="text" 
        className='search-input'
        placeholder='Enter Your Search Shoes..' 
        />

    </div>

    <div className="profile-container">
        <a href="#">
            <FiHeart className='nav-icons'/>
        </a>
        <a href="#">
            <CiShoppingCart className='nav-icons'/>
        </a>
        <a href="#">
            <AiOutlineUserAdd className='nav-icons'/>
        </a>
    </div>
    
  </nav>
}

export default Nav