import React from 'react';
import CustomLink from '../CustomLInk/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <h2>Welcome to header for tShar Mania</h2>
            <nav className='customlink'>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/orderreview'>Order Review</CustomLink>
                <CustomLink to='/grandpa'>GrandPa</CustomLink>
            </nav>
        </div>
    );
};

export default Header;