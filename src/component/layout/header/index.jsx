import React from "react";
import logo from "../../../asset/logo.svg";
import { Link } from "react-router-dom";
import "./index.css";
import DropDownMenu from "../../dropdown-menu";


const Header = () => {
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
                    
                </div>
            </div>
        </>
    )
}

export default Header;