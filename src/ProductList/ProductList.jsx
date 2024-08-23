import React, { useEffect, useState } from 'react';
import "./ProductList.css";
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, addToCart, removeFromCart } from '../Redux/Slice/todo';
import { FaStar } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { HiShoppingCart } from "react-icons/hi2";
import { NavLink } from 'react-router-dom';
import ReactSlider from 'react-slider';
function ProductList() {

    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.data);
    const { cart } = useSelector((state) => state.data);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 100]); // Initial price range
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedSizes, setSelectedSizes] = useState([]);

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


    // Extract unique categories, colors, and sizes from the product list
    const categories = Array.isArray(data?.products)
        ? [...new Set(data.products.map((product) => product.category))]
        : [];

    const colors = Array.isArray(data?.products)
        ? [...new Set(data.products.flatMap((product) => product.colors))]
        : [];

    const sizes = Array.isArray(data?.products)
        ? [...new Set(data.products.flatMap((product) => product.sizes))]
        : [];

    // Handle category, color, and size selection
    const handleCategoryChange = (category) => {
        setSelectedCategories((prevSelectedCategories) =>
            prevSelectedCategories.includes(category)
                ? prevSelectedCategories.filter((cat) => cat !== category)
                : [...prevSelectedCategories, category]
        );
    };

    const handleColorChange = (color) => {
        setSelectedColors((prevSelectedColors) =>
            prevSelectedColors.includes(color)
                ? prevSelectedColors.filter((col) => col !== color)
                : [...prevSelectedColors, color]
        );
    };

    const handleSizeChange = (size) => {
        setSelectedSizes((prevSelectedSizes) =>
            prevSelectedSizes.includes(size)
                ? prevSelectedSizes.filter((sz) => sz !== size)
                : [...prevSelectedSizes, size]
        );
    };

    const handlePriceChange = (values) => {
        setPriceRange(values);
    };
    // Filter products based on selected categories, price range, colors, and sizes
    const filteredProducts = Array.isArray(data?.products)
        ? data.products.filter((product) => {
            const matchesCategory =
                selectedCategories.length === 0 || selectedCategories.includes(product.category);
            const matchesPrice =
                product.price >= priceRange[0] && product.price <= priceRange[1];
            const matchesColor =
                selectedColors.length === 0 || selectedColors.some((color) => product.colors.includes(color));
            const matchesSize =
                selectedSizes.length === 0 || selectedSizes.some((size) => product.sizes.includes(size));

            return matchesCategory && matchesPrice && matchesColor && matchesSize;
        })
        : [];



    return (
        <section>
            <div className="full_width-title">
                <div className="container">
                    <h2 className='m-0'>Our Products</h2>
                </div>
            </div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-3 mb-3">
                        <div className='product_filter'>
                            <div className="filter_base">
                                <div className="product_filter-title">
                                    <h3>Category</h3>
                                    <ul>
                                        {categories.map((category) => (
                                            <li key={category}>
                                                <label for={category} className='control position-relative'>
                                                    <input
                                                        type="checkbox"
                                                        value={category}
                                                        checked={selectedCategories.includes(category)}
                                                        onChange={() => handleCategoryChange(category)}
                                                        id={category}
                                                    />
                                                    <div class="control_indicator"></div>
                                                    {category}
                                                </label>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="filter_base">
                                <div className="product_filter-title">
                                    <h3>Price</h3>
                                    <ReactSlider
                                        className="horizontal-slider"
                                        thumbClassName="slider-thumb"
                                        trackClassName="slider-track"
                                        min={0}
                                        max={100}
                                        value={priceRange}
                                        onChange={handlePriceChange}
                                        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                                    />
                                 
                                </div>
                            </div>


                            <div className="filter_base">
                                <div className="product_filter-title">
                                    <h3>Colors</h3>
                                    <ul>
                                        {colors.map((color) => (
                                            <li key={color}>
                                                <label className='control position-relative' for={color}>
                                                    <input
                                                        type="checkbox"
                                                        value={color}
                                                        checked={selectedColors.includes(color)}
                                                        onChange={() => handleColorChange(color)}
                                                        id= {color}
                                                    />
                                                      <div class="control_indicator"></div>
                                                    {color}
                                                </label>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="filter_base">
                                <div className="product_filter-title">
                                    <h3>Size</h3>
                                    <ul className='size_list'>
                                        {sizes.map((size) => (
                                            <li key={size}>
                                                <label for= {size} className='position-relative'>
                                                    <input
                                                        type="checkbox"
                                                        value={size}
                                                        checked={selectedSizes.includes(size)}
                                                        onChange={() => handleSizeChange(size)}
                                                        id= {size}
                                                    />
                                                    <div className='active_color'></div>
                                                   <span className='position-relative'>{size}</span> 
                                                </label>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>



                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="row">

                            {filteredProducts.map((item) => (
                                <div key={item.id} className="col-12 col-sm-12 col-md-4 mb-4">
                                    <div className="product_card position-relative">
                                        <div className="product_card-img mb-3 position-relative">
                                            <NavLink to={`/product/${item.id}`} className="product_card-link">
                                                <img src={item.images} alt={item.name} />
                                            </NavLink>

                                            <ul className="p-0 m-0 product_cart d-flex gap-2 align-items-center justify-content-center">
                                                <li>
                                                    <div className="product_wishlist d-flex justify-content-center align-items-center">
                                                        <IoMdHeartEmpty />
                                                    </div>
                                                </li>
                                                <li>
                                                    <div
                                                        className="product_wishlist d-flex justify-content-center align-items-center"
                                                        onClick={() => handleAddToCart(item.id)}
                                                    >
                                                        {isInCart(item.id) ? <HiShoppingCart /> : <HiOutlineShoppingCart />}
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product_card-title d-flex justify-content-between align-items-center mb-3">
                                            <span>{item.name}</span>
                                            <div className="d-flex justify-content-center align-items-center product_rating gap-1">
                                                <FaStar />
                                                <span>{item.ratings}</span>
                                            </div>
                                        </div>
                                        <div className="product_card-details">
                                            {item.description}
                                        </div>
                                        <div className="product_card-price mt-2 d-flex justify-content-between align-items-center">
                                            <span>${item.price}</span>
                                            <span className="product_sizes">
                                                <ul className="m-0 p-0 d-flex">
                                                    {item.sizes && item.sizes.map((size, index) => (
                                                        <li key={index} className="d-flex justify-content-center align-items-center">{size}</li>
                                                    ))}
                                                </ul>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ProductList
