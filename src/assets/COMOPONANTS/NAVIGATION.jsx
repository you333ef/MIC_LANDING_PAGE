import React, { useState } from 'react'; // استيراد useState
import { ReactSVG } from 'react-svg'; // استيراد مكتبة react-svg
import './navigation.css';
import leftCorner from '../IMGS/image 8.svg'; // استيراد ملف SVG

const NAVIGATION = () => {
  const [navOpen, setNavOpen] = useState(false); // إضافة حالة لتتبع فتح القائمة

  const toggleNav = () => {
    setNavOpen(!navOpen); // تبديل حالة فتح القائمة
  };

  return (
    <div className={`Barra ${navOpen ? 'show-nav' : ''}`}>
      <nav className='flex-nav'>
        <div className="left-nav">
          <ReactSVG 
            src={leftCorner} 
            className='src-left-nav'
            beforeInjection={(svg) => {
              svg.setAttribute('fill', 'rgba(11, 149, 134, 1)'); 
            }}
          />
        </div>
        <div className="mid-nav">
          <ul className='UNLISTED'>
            <li><a href="" className='Spectific'>Home</a></li>
            <li><a href="">Trade</a></li>
            <li><a href="">Shop</a></li>
            <li><a href="">Contact Us</a></li>
          </ul>
        </div>
        <div className="right-nav">
          <small>Call Us</small>
          <p>+12345 3456 45</p>
        </div>
        <div className="toggle-btn" onClick={toggleNav}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </div>
  );
}

export default NAVIGATION;
