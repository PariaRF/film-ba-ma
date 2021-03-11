import React from "react";
import { BiCaretDown } from "react-icons/bi";
import "./index.css";

const MenuPopular = () => {
    return (
        <>
            <div className="row">
                <div className="menu-popular">
                   
                    <p className="menu-item"> <span className="select-item">Overviwe <BiCaretDown /></span></p>
                    <p className="menu-item">Media <BiCaretDown /></p>
                    <p className="menu-item">Fandom <BiCaretDown /></p>
                    <p className="menu-item">Share <BiCaretDown /></p>
                </div>
            </div>

        </>
    )
}
export default MenuPopular;