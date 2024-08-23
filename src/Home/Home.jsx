import React from 'react'
import Slider from './Slider';
import CategorySlide from './CategorySlide';
import Products from '../Products/Products';
import Support from './Support';
import Blog from './Blog';
function Home() {
    return (
        <>
            <Slider />
            <CategorySlide />

            <section className='products_section'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className='text-start'>Our Products</h2>
                            <p>Browse The Collection of Top Products.</p>
                        </div>
                        <div className="col-12">
                            <Products />
                        </div>
                    </div>
                </div>
            </section>

            <Support />
            <Blog/>


        </>
    )
}

export default Home