import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, addToCart, removeFromCart } from '../Redux/Slice/todo';
import "./Products.css";
import { FaStar } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { HiShoppingCart } from "react-icons/hi2";
import { Link } from 'react-router-dom';
function Products() {
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.data);
    const { cart } = useSelector((state) => state.data);

   
    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);


    const isInCart = (id) => {
        return cart.some((item) => item.id === id);
    };

    const handleAddToCart = (id) => {
        if (isInCart(id)) {
            dispatch(removeFromCart(id));
        } else {
            const item = data?.products.find((item) => item.id === id);
            if (item) {
                dispatch(addToCart({ ...item, quantity: 1 }));
            }
        }
    };

    return (
        <div className=''>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[]}
                className="pt-3"
                breakpoints={{
                    100: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 3,
                      },
                      1024: {
                        slidesPerView: 5,
                      },
                  }}
            >
                {Array.isArray(data?.products) && data?.products.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className='product_card position-relative'>
                            <div className="product_card-img mb-3 position-relative">
                                <Link to={`/product/${item.id}`} className="product_card-link">   <img src={item.images} alt={item.name} /></Link>

                                <ul className='p-0 m-0 product_cart d-flex gap-2 align-items-center justify-content-center'>
                                    <li>
                                        <div className='product_wishlist d-flex justify-content-center align-items-center'>
                                            <IoMdHeartEmpty />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="product_wishlist d-flex justify-content-center align-items-center" onClick={() => handleAddToCart(item.id)}
                                        >

                                            {/* {addedToCart.includes(item.id) ? <HiShoppingCart /> : <HiOutlineShoppingCart />} */}
                                            {isInCart(item.id) ? <HiShoppingCart /> : <HiOutlineShoppingCart />}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className='product_card-title d-flex justify-content-between align-items-center mb-3'>
                                <span>{item.name}</span>
                                <div className='d-flex justify-content-center align-items-center product_rating gap-1'>
                                    <FaStar />
                                    <span>{item.ratings}</span>
                                </div>
                            </div>
                            <div className="product_card-details">
                                {item.description}
                            </div>
                            <div className="product_card-price mt-2 d-flex justify-content-between align-items-center">
                                <span>${item.price}</span>
                                <span className='product_sizes'>
                                    <ul className='m-0 p-0 d-flex'>
                                        {item.sizes && item.sizes.map((size, index) => (
                                            <li key={index} className='d-flex justify-content-center align-items-center'>{size}</li>
                                        ))}
                                    </ul>
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>

        </div>
    )
}

export default Products