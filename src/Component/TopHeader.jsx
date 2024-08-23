import React, { useEffect, useState } from 'react';
import "../Assets/css/Header.css";
import { FiUser } from "react-icons/fi";
import { IoHeartOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { useSelector, useDispatch } from 'react-redux';
import logo from "../Assets/images/logo.png";
import { fetchData } from '../Redux/Slice/todo';
import { useNavigate } from 'react-router-dom';

function TopHeader() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.data);
    const { cart, loading, error } = useSelector((state) => state.data);
    const cartLength = cart.reduce((acc, item) => acc + item.quantity, 0);
    const [searchTerm, setSearchTerm] = useState('');


    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredProducts = data?.products?.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading products</p>;

    const handleProductClick = (productId) => {
        setSearchTerm(''); 
        navigate(`/product/${productId}`); 
    };
 

    return (

        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className='top_header d-flex justify-content-between py-3 align-items-center'>
                        <div>
                            <span onClick={() => navigate("/home")} className='cursor-pointer'>
                                <img src={logo} alt="logo" className='logo_img' />
                            </span>
                        </div>
                        <div className='position-relative global_search-card'>
                            <div className='global_search position-relative'>
                                <input
                                    type="text"
                                    placeholder='Search For items...'
                                    className='form-control'
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                />
                                <span>
                                    <IoIosSearch />
                                </span>
                            </div>

                            {searchTerm && (
                                <div className='product-list'>
                                    {filteredProducts?.length > 0 ? (
                                        filteredProducts.map((product) => (
                                            <div key={product.id} className='product-item'>
                                                <span  onClick={() => handleProductClick(product.id)} className="product_card-link cursor-pointer">{product.name}</span>
                                            </div>
                                            
                                        ))
                                    ) : (
                                        <p>No products found</p>
                                    )}
                                </div>
                            )}
                        </div>
                        <div className='top_header-container'>
                            <ul className='p-0 m-0 d-flex top_header-menu'>
                                <li className='position-relative'><span><FiUser /><span className='top_header-text'>Account</span></span> </li>
                                <li className='position-relative'><span><IoHeartOutline /><span className='top_header-text'>Wishlist</span></span> </li>
                                <li className='menu_badge position-relative'><span data-bs-toggle="offcanvas" data-bs-target="#mycart" className=''><FiShoppingCart /><span className='top_header-text'>Cart</span><span className='badge_count'>{cartLength}</span> </span> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TopHeader