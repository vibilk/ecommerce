import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import './Home.css';
import slider1 from "../Assets/images/1.jpg"
function Slider() {
    return (
        <section className='home_slider'>

            <Swiper

                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper">
                <SwiperSlide>
                    <div className='slider_container'>
                        <img src={slider1} alt="slider" className='slider_img' />
                        <div className='slider_content'>
                            <h5><span>100%</span> Cotton Fabric</h5>
                            <h3>Fashion sale for women's.</h3>
                            <p className='text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis
                                beatae consequuntur.</p>
                            <div className="slider_btn mt-4">
                                <a href="#">
                                    Shop Now
                                </a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='slider_container'>
                        <img src={slider1} alt="slider" className='slider_img' />
                        <div className='slider_content'>
                            <h5><span>100%</span> Cotton Fabric</h5>
                            <h3>Fashion sale for women's.</h3>
                            <p className='text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis
                                beatae consequuntur.</p>
                            <div className="slider_btn mt-4">
                                <a href="#">
                                    Shop Now
                                </a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='slider_container'>
                        <img src={slider1} alt="slider" className='slider_img' />
                        <div className='slider_content'>
                            <h5><span>100%</span> Cotton Fabric</h5>
                            <h3>Fashion sale for women's.</h3>
                            <p className='text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis
                                beatae consequuntur.</p>
                            <div className="slider_btn mt-4">
                                <a href="#">
                                    Shop Now
                                </a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='slider_container'>
                        <img src={slider1} alt="slider" className='slider_img' />
                        <div className='slider_content'>
                            <h5><span>100%</span> Cotton Fabric</h5>
                            <h3>Fashion sale for women's.</h3>
                            <p className='text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis
                                beatae consequuntur.</p>
                            <div className="slider_btn mt-4">
                                <a href="#">
                                    Shop Now
                                </a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Slider