import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from './MenuItem';
import "./index.css";


const DropDownTvShow = () => {
    return (
        <>
            <ul className="dropDown-menu">
                 {MenuItem.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link to={item.path} className="dropDown-link">
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default DropDownTvShow;