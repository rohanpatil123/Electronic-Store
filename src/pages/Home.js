import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";

import { ProductContext } from "../context/products";

const Home = () => {
    const { featured } = useContext(ProductContext);
    if (!featured.length) {
        return <h3>No Featured products</h3>
    }
    return (
        <>
            <Hero />
            <section className="featured">
                <header className="featured-head">
                    <h3>Featured Collection</h3>
                </header>
                <div className="products featured-list">
                    {featured.map(({ id, image, title }) => (
                        <article key={id} className="product featured-product">
                            <div className="product-image">
                                <img src={image} alt={title} />
                            </div>
                            <Link to={`products/${id}`} className="btn product-link">details</Link>
                        </article>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Home;