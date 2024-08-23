import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData} from '../Redux/Slice/todo';
import "./Checkout.css"
function Checkout() {
    const dispatch = useDispatch();
    const { cart } = useSelector((state) => state.data);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);



    const calculateSubTotal = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };

    const subTotal = calculateSubTotal();
    const gst = subTotal * 0.20; // 20% GST
    const total = subTotal + gst;

    return (

        <section>
            <div className="full_width-title">
                <div className="container">
                    <h2 className='m-0'>Checkout</h2>
                </div>
            </div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                        <div className="card_details">
                            <h5 className="card-title mb-3">Summary</h5>
                            <div className="Summary_product-price">
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
                                            <li className='d-flex justify-content-between align-items-center border-top pt-3'>
                                                <span><b>Total :</b> </span>
                                                <span><b>${total.toFixed(2)}</b> </span>
                                            </li>
                                        </>
                                    )}
                                </ul>

                            </div>
                        </div>


                        <div className="card_details">
                            <h5 className="card-title mb-3">Product</h5>
                            <div className="cart_product-list h-auto">
                                {Array.isArray(cart) && cart.length > 0 ? (
                                    cart.map((item) => (
                                        <div className="cart_product-card d-flex gap-3 position-relative" key={item.id}>
                                            <img src={item.images} alt='category_image' />
                                            <div>
                                                <span className='d-block'>{item.name}</span>
                                                <span className='mb-3 d-block'><b>${(item.price * item.quantity).toFixed(2)}</b></span>

                                            </div>
                                            <div>

                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="cart_empty-message">
                                        Cart is empty
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="card_details">
                            <h5 className="card-title mb-3">Delivery Method</h5>
                            <p>Please select the preferred shipping method to use on this order.</p>

                            <div className='delivery_method'>
                                <ul className='m-0 p-0 d-flex justify-content-between'>
                                    <li>
                                        <input type="radio" id="free" name="delivery" value="Free Shipping" />
                                        <label for="free">Rate - $0 .00</label>
                                    </li>
                                    <li>
                                        <input type="radio" id="flat" name="delivery" value="Flat Rate" />
                                        <label for="flat">Rate - $5.00</label>
                                    </li>
                                </ul>
                            </div>
                        </div>



                        <div className="card_details">
                            <h5 className="card-title mb-3">Payment Method</h5>
                            <p>Please select the preferred payment method to use on this order. </p>
                            <div className='payment_method'>
                                <ul className='m-0 p-0 d-flex justify-content-between'>
                                    <li>
                                        <input type="radio" id="Cash" name="delivery" value="Cash On Delivery" />
                                        <label for="Cash">Cash On Delivery</label>
                                    </li>
                                    <li>
                                        <input type="radio" id="upi" name="delivery" value="UPI" />
                                        <label for="upi">UPI</label>
                                    </li>
                                    <li>
                                        <input type="radio" id="Bank" name="delivery" value="Bank Transfer" />
                                        <label for="Bank">Bank Transfer</label>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className="col-12 col-sm-12 col-md-9 col-lg-9">
                        <div className="card_details">
                            <h5 className="card-title mb-3">Billing Details</h5>
                            <p>Please fill in the billing details below.</p>
                            <div className='billing_details'>
                                <form>
                                    <div className="row">
                                        <div className="col-12 mb-3">
                                            <div className="form-group">
                                                <label htmlFor=""><b>Checkout Options</b></label>
                                                <ul className='mt-2 p-0 d-flex address_list'>
                                                    <li className='me-3'>
                                                        <input type="radio" id="existing" name="address" value="existing address" />
                                                        <label for="existing">I want to use an existing address</label>
                                                    </li>
                                                    <li>
                                                        <input type="radio" id="new" name="address" value="new addr" />
                                                        <label for="new">I want to use new address</label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-3">
                                            <div className="form-group">
                                                <label htmlFor="">First Name</label>
                                                <input type="text" placeholder='Enter your first name' className='form-control' />

                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-3">
                                            <div className="form-group">
                                                <label htmlFor="">Last Name</label>
                                                <input type="text" placeholder='Enter your last name' className='form-control' />

                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 mb-3">
                                            <div className="form-group">
                                                <label htmlFor="">Address</label>
                                                <input type="text" placeholder='Address Line 1' className='form-control' />

                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-3">
                                            <div className="form-group">
                                                <label htmlFor="">City</label>
                                                <input type="text" placeholder='City' className='form-control' />

                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-3">
                                            <div className="form-group">
                                                <label htmlFor="">Post Code</label>
                                                <input type="text" placeholder='Post Code' className='form-control' />

                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-3">
                                            <div className="form-group">
                                                <label htmlFor="">Country</label>
                                                <input type="text" placeholder='Country' className='form-control' />

                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-3">
                                            <div className="form-group">
                                                <label htmlFor="">Region State</label>
                                                <input type="text" placeholder='Country' className='form-control' />

                                            </div>
                                        </div>

                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-3">
                                            <div className="form-group">
                                               <button className='order_btn'>Place Order</button>
                                            </div>
                                        </div>




                                    </div>

                                </form>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Checkout