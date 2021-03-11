import React, { useEffect, useState } from "react";
import logo from "../../../asset/logo.svg";
import { Link, Redirect, useHistory } from "react-router-dom";
import "./index.css";
import DropDownMenu from "../../dropdown-menu";
// import { BiSearchAlt2, BiPlusMedical, BiX } from 'react-icons/fa';
import {  BiSearchAlt2, BiPlusMedical, BiX } from "react-icons/bi";
import { getSearchAction } from "../../../store/actions/getSearchAction";
import { useDispatch, useSelector } from "react-redux";


const Header = () => {

    const [click, setClick] = useState(true);
    const [inputValue, setInputValue] = useState();

    const getSearch = useSelector(state => state.searchState.getSearch);

    const dispatch = useDispatch();


    useEffect(async() =>{
        await dispatch(await getSearchAction(dispatch))
    },[])

    const handleClick = () => {
        setClick(!click);
    }

    const hanleChange = (e)=>{
        const text = e.target.value;
        setInputValue(text);
    }

    const history = useHistory();

    const handleGo = (e)=>{
        if(e.key === "Enter"){
            history.push(`/search/${inputValue}`);        
        }
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
                            click ?  <BiSearchAlt2 className="icon-search" />  : <BiX className="iconBix" /> 
                        }
                    </span>
                </div>
            </div>
            <div>
                {
                    click ? null : <input placeholder="Search Movie..." className="search-box" onChange={(e) => hanleChange(e)} onKeyDown={(e) => handleGo(e)}/>
                }
            </div>
        </>
    )
}

export default Header;