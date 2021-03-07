import React, { useState } from "react";
import logo from "../../../asset/logo.svg";
import { Link } from "react-router-dom";
import "./index.css";
import DropDownMenu from "../../dropdown-menu";
// import { BiSearchAlt2, BiPlusMedical, BiX } from 'react-icons/fa';
import {  BiSearchAlt2, BiPlusMedical, BiX } from "react-icons/bi";


const Header = () => {

    const [click, setClick] = useState(true);

    const handleClick = () => {
        setClick(!click);
    }


    return (
        <>
            <div className="header row">
                <div className="col-md-6 left-side">
                    <a href="/" className="logo">
                        <img src={logo} alt="Logo" className="logo" />
                    </a>
                    <DropDownMenu />
                </div>
                <div className="col-md-6 right-side">
                    <BiPlusMedical className="icon" />
                   <p className="lang">EN</p>
                    <Link className="link">Login</Link>
                    <Link className="link">Join TMDB</Link>
                    <span onClick={handleClick}>
                        {
                            click ? <BiSearchAlt2 className="icon-search" /> : <BiX className="iconBix" />
                        }
                    </span>
                </div>
            </div>
        </>
    )
}

export default Header;