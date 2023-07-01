import React from 'react'
import './css/testimonials.css';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <p className="super-title">My tools</p>
      <p className="section-title">Skills</p>
      <div className="testimonials-container">
        <div className="testimonial-card">
          <div className="avatar-container">
            <img src="" alt="" />
          </div>
          <h5>name</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nihil a maiores provident nulla vero, nisi ea earum quod vel veniam nostrum sint eveniet ex et, accusamus expedita facere nam?</p>
        </div>
      </div>
    </section>
  )
}

export default Testimonials