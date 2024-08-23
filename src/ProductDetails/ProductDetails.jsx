import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./ProductDetails.css"
import { useSelector, useDispatch } from 'react-redux';
import { FaStar } from "react-icons/fa6";
import { fetchData, addToCart, removeFromCart } from '../Redux/Slice/todo';
import Products from '../Products/Products';

function ProductDetails() {

    const { id } = useParams();
    const { data } = useSelector((state) => state.data);
    const dispatch = useDispatch();
    const [addedToCart, setAddedToCart] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const product = data?.products.find((item) => item.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }


    const handleAddToCart = (id) => {
        if (addedToCart.includes(id)) {
            dispatch(removeFromCart(id)); 
            setAddedToCart((prev) => prev.filter((itemId) => itemId !== id));
        } else {
            dispatch(addToCart(id));
            setAddedToCart((prev) => [...prev, id]);
        }
    };

    return (
        <>
            <section className='py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-4">
                            <img src={product.images} alt={product.name} className='w-100 single_img' />
                        </div>
                        <div className="col-12 col-sm-8">
                            <div className="product_details">
                                <h1>{product.name}</h1>
                                <div className='d-flex justify-content-start align-items-center product_rating gap-1 mb-3'>
                                    <FaStar />
                                    <span>{product.ratings}</span>
                                </div>
                                <p>{product.description}</p>
                                <div className="product_card-price mt-2">
                                    <span className='mb-3 d-block'>${product.price}</span>
                                    <span className='product_sizes d-flex align-items-center gap-3'>
                                        <p className='m-0'>Size: </p>
                                        <ul className='m-0 p-0 d-flex'>
                                            {product.sizes && product.sizes.map((size, index) => (
                                                <li key={index} className='d-flex justify-content-center align-items-center'>{size}</li>
                                            ))}
                                        </ul>
                                    </span>
                                </div>

                                <button className='my-3 addcart_btn' onClick={() => handleAddToCart(product.id)}>Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </section>



            <section className='products_section'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className='text-start'>Popular Products</h2>
                            <p>Browse The Collection of Top Products.</p>
                        </div>
                        <div className="col-12">
                          <Products/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetails