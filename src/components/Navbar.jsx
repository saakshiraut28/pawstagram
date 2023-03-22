import React from 'react';
import paws from '../icons/paws.png';

function Navbar() {
    return ( <>
        <nav className="navbar px-[15%] py-10 bg-white w-full h-fit flex justify-between items-center">
            <img src={paws} className="w-15 h-9"/>
            <span>Petzone</span>
            <img src={paws} className="w-15 h-9"/>
        </nav>
    </> );
}

export default Navbar;