import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import blogimg1 from "../Assets/images/blog1.jpg"
import blogimg2 from "../Assets/images/blog2.jpg"
import blogimg3 from "../Assets/images/blog3.jpg"
import blogimg4 from "../Assets/images/blog4.jpg"
function Blog() {
    return (
        <section className='blog_section pt-3'>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2 className='mb-3'>Latest News</h2>
                        <p className='w-75 m-auto'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quam, adipisci non soluta harum, officia unde rerum ipsam alias, laudantium earum expedita cum temporibus dignissimos perspiciatis dolorum blanditiis accusamus! Iste?
                        </p>
                    </div>
                    <div className="col-12">
                        <div>
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={30}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[]}
                                className="category_slider-container"
                                breakpoints={{
                                    100: {
                                      slidesPerView: 1,
                                    },
                                    768: {
                                      slidesPerView: 2,
                                    },
                                    992: {
                                        slidesPerView: 2,
                                      },
                                      1024: {
                                        slidesPerView: 3,
                                      },
                                  }}
                            >
                                <SwiperSlide>
                                   <div className="blog_card">
                                    <div className="blog_card_img">
                                        <img src={blogimg1} alt="blog image" className='w-100'/>
                                    </div>
                                    <div className="blog_card_content p-4">
                                    <span>By Admin</span>
                                        <h3>Blog Title</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis incidunt, doloremque iusto quae velit culpa nulla commodi non laboriosam facilis dolorum molestias maiores sapiente quidem officiis soluta voluptates fuga. Odit.</p>
                                        <button>Read More</button>
                                    </div>
                                    
                                   </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                   <div className="blog_card">
                                    <div className="blog_card_img">
                                        <img src={blogimg2} alt="blog image" className='w-100'/>
                                    </div>
                                    <div className="blog_card_content p-4">
                                    <span>By Admin</span>
                                        <h3>Blog Title</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis incidunt, doloremque iusto quae velit culpa nulla commodi non laboriosam facilis dolorum molestias maiores sapiente quidem officiis soluta voluptates fuga. Odit.</p>
                                        <button>Read More</button>
                                    </div>
                                    
                                   </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                   <div className="blog_card">
                                    <div className="blog_card_img">
                                        <img src={blogimg3} alt="blog image" className='w-100'/>
                                    </div>
                                    <div className="blog_card_content p-4">
                                    <span>By Admin</span>
                                        <h3>Blog Title</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis incidunt, doloremque iusto quae velit culpa nulla commodi non laboriosam facilis dolorum molestias maiores sapiente quidem officiis soluta voluptates fuga. Odit.</p>
                                        <button>Read More</button>
                                    </div>
                                    
                                   </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                   <div className="blog_card">
                                    <div className="blog_card_img">
                                        <img src={blogimg4} alt="blog image" className='w-100'/>
                                    </div>
                                    <div className="blog_card_content p-4">
                                    <span>By Admin</span>
                                        <h3>Blog Title</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis incidunt, doloremque iusto quae velit culpa nulla commodi non laboriosam facilis dolorum molestias maiores sapiente quidem officiis soluta voluptates fuga. Odit.</p>
                                        <button>Read More</button>
                                    </div>
                                    
                                   </div>
                                </SwiperSlide>
                              
                            </Swiper>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    )
}

export default Blog