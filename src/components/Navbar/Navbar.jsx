import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import './Navbar.css';
const Navbar = ({setShowlogin}) => {

    const[menu,setMenu] = useState("home");
    const [showSearch, setShowSearch] = useState(false);
    const{getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className='navbar'>
      {/* <img src={assets.logo} alt='' className='logo' /> */}
      <Link to='/'><div className='logo'> INNFoodie</div></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("home")} className={menu ==="home"?"active":""}>home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu ==="menu"?"active":""}>menu</a>
        <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu ==="mobile-app"?"active":""}>mobile-app</a>
        <a href='#Footer' onClick={()=>setMenu("contact-us")} className={menu ==="contact-us"?"active":""}>contact us</a>
      </ul>
      {/* <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar_search-icon">
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
        </div> */}


    <div className="navbar-right">
      <div className="navbar-search">
        <img 
          src={assets.search_icon} 
          alt="Search Icon" 
          className="search-toggle" 
          onClick={() => setShowSearch(!showSearch)} 
        />
        {showSearch && (
          <div className="search-box">
            <input 
              type="text" 
              placeholder="Search..." 
              className="search-input" 
            />
            <button className="search-button">Search</button>
          </div>
        )}
      </div>
      <div className="navbar_search-icon">
        <Link to='/cart'><img src={assets.basket_icon} alt="Basket Icon" /></Link>
        <div className={getTotalCartAmount()=== 0 ? "" : "dot"}></div>
      </div>
    </div>
        <button onClick={()=>setShowlogin(true)}>sign in</button>
      </div>
  )
}

export default Navbar
