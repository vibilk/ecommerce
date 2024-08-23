import React, { useEffect } from 'react';
import "../Assets/css/Header.css";
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, fetchData, updateQuantity } from '../Redux/Slice/todo';
import { IoClose } from "react-icons/io5";
// import { NavLink, Link } from 'react-router-dom';

import TopHeader from './TopHeader';
import { useNavigate } from 'react-router-dom';
import { LuMenu } from "react-icons/lu";

function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { cart } = useSelector((state) => state.data);

    console.log("cart", cart);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);


    const removeProduct = (id) => {
        dispatch(removeFromCart(id));
        // setAddedToCart((prev) => prev.filter((itemId) => itemId !== id));
    };

    const incrementQuantity = (id) => {
        const item = cart.find(item => item.id === id);
        if (item) {
            dispatch(updateQuantity({ id, quantity: item.quantity + 1 }));
        }
    };

    const decrementQuantity = (id) => {
        const item = cart.find(item => item.id === id);
        if (item && item.quantity > 1) {
            dispatch(updateQuantity({ id, quantity: item.quantity - 1 }));
        }
    };


    const calculateSubTotal = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };

    const subTotal = calculateSubTotal();
    const gst = subTotal * 0.20; // 20% GST
    const total = subTotal + gst;

    return (
        <>
            <div>
                    <TopHeader />
                <nav className="navbar navbar-expand-md bg-theme">
                    <div className="container-fluid">

                        <button className="navbar-toggler border-0" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                           <LuMenu className='text-white'/>
                        </button>
                        <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
                            <ul className="navbar-nav theme_navbar">
                                <li className="nav-item">
                                    <span onClick={() => navigate("/home")} className="nav-link" >Home</span>
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link">Category</span>
                                </li>
                                <li className="nav-item">
                                    <span onClick={() => navigate("/product")} className="nav-link">Products</span>
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link">About Us</span>
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link">Contact Us</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>



            <div class="offcanvas offcanvas-end mycart_section" id="mycart">
                <div class="offcanvas-header">
                    <h1 class="offcanvas-title">My Cart</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
                </div>
                <div class="offcanvas-body position-relative">

                    <div className="cart_product-list">
                        {Array.isArray(cart) && cart.length > 0 ? (
                            cart.map((item) => (
                                <div className="cart_product-card d-flex gap-3 position-relative" key={item.id}>
                                    <img src={item.images} alt='category_image' />
                                    <div>
                                        <span className='d-block'>{item.name}</span>
                                        <span className='mb-3 d-block'><b>${(item.price * item.quantity).toFixed(2)}</b></span>

                                        <ul className="d-flex align-items-center p-0 m-0 quantity_count justify-content-between">
                                            <li>
                                                <button onClick={() => decrementQuantity(item.id)}>-</button>
                                            </li>
                                            <li className='count_value'>{item.quantity}</li>
                                            <li>
                                                <button onClick={() => incrementQuantity(item.id)}>+</button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>

                                    </div>
                                    <button onClick={() => removeProduct(item.id)} className='remove_cart'><IoClose /></button>
                                </div>
                            ))
                        ) : (
                            <div className="cart_empty-message">
                                Cart is empty
                            </div>
                        )}
                    </div>

                    <div className="cart_product-price">
                        <ul className='p-0 m-0'>
                            {Array.isArray(cart) && cart.length > 0 && (
                                <>
                                    <li className='d-flex justify-content-between align-items-center'>
                                        <span>Sub-Total :</span>
                                        <span>${subTotal.toFixed(2)}</span>
                                    </li>
                                    <li className='d-flex justify-content-between align-items-center'>
                                        <span>GST (20%) :</span>
                                        <span>${gst.toFixed(2)}</span>
                                    </li>
                                    <li className='d-flex justify-content-between align-items-center'>
                                        <span>Total :</span>
                                        <span>${total.toFixed(2)}</span>
                                    </li>
                                    <li className='mt-3'>
                                        <span onClick={() => navigate("/checkout")} className='checkout_btn cursor-pointer' data-bs-dismiss="offcanvas">Checkout</span>
                                    </li>
                                </>
                            )}
                        </ul>

                    </div>


                </div>
            </div>

        </>

    )
}

export default Header