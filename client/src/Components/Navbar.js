import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return(
        <div>
            <Link to = '/'>Home</Link>
            <Link to = '/items'>Items</Link>
            <Link to = '/cart'>Shopping Cart</Link>
        </div>
    )
};