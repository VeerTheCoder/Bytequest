import React from 'react';
import Link from 'next/link';
import { CiBookmark, CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { BsPerson } from "react-icons/bs";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link href="/">TANN TRIM</Link>
      </div>
      <div className="navbar-links">
        <Link href="/bags">Bags</Link>
        <Link href="/travel">Travel</Link>
        <Link href="/accesories">Accesories</Link>
        <Link href="/gifting">Gifting</Link>
        <Link href="/jewelery">Jewelery</Link>
      </div>
      <div className='logo'>
            <CiSearch/>
            <BsPerson/>
            <CiBookmark/>
            <HiOutlineShoppingBag/>
      </div>
    </nav>
  );
};

export default Navbar;
