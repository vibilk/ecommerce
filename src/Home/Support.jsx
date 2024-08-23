import React from 'react'
import { RiCustomerService2Line } from "react-icons/ri";
import { FaTruck } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaBoxesPacking } from "react-icons/fa6";

function Support() {
    return (
        <section className='pt-5 pb-5'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-4">
                        <div className='support_card text-center'>
                            <span><RiCustomerService2Line /></span>
                            <h3>24X7 Support</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-4">
                        <div className='support_card text-center'>
                            <span><FaTruck /></span>
                            <h3>Delivery in 5 Days</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-4">
                        <div className='support_card text-center'>
                            <span><RiSecurePaymentFill /></span>
                            <h3>Payment Secure</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-4">
                        <div className='support_card text-center'>
                            <span><FaBoxesPacking /></span>
                            <h3>Product Packing</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Support