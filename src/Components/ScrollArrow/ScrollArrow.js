import React from 'react';
import './ScrollArrow.css'

const ScrollArrow = () => {
    function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
  return (
    <div className='scrollArrow_container' onClick={scrollToTop}>
      <i class="fa-solid fa-angle-up"></i>
    </div>
  )
}

export default ScrollArrow
