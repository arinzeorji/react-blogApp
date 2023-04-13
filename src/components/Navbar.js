import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <nav className="dt w-100 border-box pa3 mt3">
            <Link to="/" className="dtc v-mid mid-gray m5 f4 link dim w-20">BlogBURST</Link>
            <div className="dtc v-mid w-60 tr">
                <Link to="/" className="link dim mid-gray f4 f4-ns dib mr-5 mr5-ns">Home</Link>
                <Link to="/about" className="link dim mid-gray f4 f4-ns dib mr-5 mr5-ns">About Us</Link>
                <Link to="/new" className="link dim mid-gray f4 f4-ns dib">New Blog</Link>
            </div>
            <div className="w-20">

            </div>
        </nav>
    )
}

export default Navbar
