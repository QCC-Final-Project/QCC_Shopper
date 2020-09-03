import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return(
        <div>
            <div className="navbar">
                <Link to = '/'><a>Home</a></Link>
                <Link to = '/items'><a>Items</a></Link>
                <Link to = '/users'><a>Users</a></Link>
                <Link to = '/cart'><a>Shopping Cart</a></Link>
            </div>
        </div>
    )
};