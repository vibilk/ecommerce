import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaShirt } from "react-icons/fa6";

function CategorySlide() {
    return (
        <section className='category_slider'>
            <div className="container">
                <div>
                    <Swiper
                        slidesPerView={6}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[]}
                        className="category_slider-container"
                        breakpoints={{
                            0: {
                              slidesPerView: 1,
                            },
                            768: {
                              slidesPerView: 2,
                            },
                            992: {
                                slidesPerView: 3,
                              },
                              1024: {
                                slidesPerView: 6,
                              },
                          }}
                    >
                        <SwiperSlide>
                            <div className='category_card position-relative'>
                                <span className='cate_icon'><FaShirt/> </span>
                                <span>Shirt</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='category_card position-relative'>
                                 <span className='cate_icon'><FaShirt/> </span>
                                <span>Chinos</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='category_card position-relative'>
                                 <span className='cate_icon'><FaShirt/> </span>
                                <span>Hats</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='category_card position-relative'>
                                 <span className='cate_icon'><FaShirt/> </span>
                                <span>Boot</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='category_card position-relative'>
                                 <span className='cate_icon'><FaShirt/> </span>
                                <span>Tops</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='category_card position-relative'>
                                 <span className='cate_icon'><FaShirt/> </span>
                                <span>Vest</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='category_card position-relative'>
                                 <span className='cate_icon'><FaShirt/> </span>
                                <span>Socks</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='category_card position-relative'>
                                 <span className='cate_icon'><FaShirt/> </span>
                                <span>Sunglasses</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='category_card position-relative'>
                                 <span className='cate_icon'><FaShirt/> </span>
                                <span>Jacket</span>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default CategorySlide