import React from 'react';

const Header = () => {
  return (
    <div className='header'>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Beerlak Webshop</a>
        <div className='header-icons'>
            <a href="#root"><i className="gg-home"></i></a>
            <a href="#menu"><i className="gg-shopping-bag"></i></a>
            <a href="#cart-nav"><i className="gg-shopping-cart"></i></a>
        </div>
    </div>
  )
}

export default Header