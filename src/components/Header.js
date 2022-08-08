import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="main-head">
            <nav>
                <h1 id="logo">Electronics Shopee</h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li>
                        <Link to="/checkout">Checkout</Link>
                    </li>
                    <li>
                        <Link to="/admin">Admin</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
