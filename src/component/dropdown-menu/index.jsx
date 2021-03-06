import { useState } from "react";
import { Link } from "react-router-dom";
import DropDownMore from "./dropdwon/dropdown-more";
import DropDownMovies from "./dropdwon/dropdown-movies";
import DropDownPeople from "./dropdwon/dropdown-people";
import DropDownTvShow from "./dropdwon/dropdown-tv-show";
import "./index.css";

const DropDownMenu = () => {

    const [dropDownMovies, setDropDownMovies] = useState(false);
    const [dropDownTvShow, setDropDownTvShow] = useState(false);
    const [dropDownPeople, setDropDownPeople] = useState(false);
    const [dropDownMore, setDropDownMore] = useState(false);

    const onMouseEnterMovies = () => setDropDownMovies(true);
    const onMouseLeaveMovies = () => setDropDownMovies(false);

    const onMouseEnterTvShow = () => setDropDownTvShow(true);
    const onMouseLeaveTvShow = () => setDropDownTvShow(false);

    const onMouseEnterPeople = () => setDropDownPeople(true);
    const onMouseLeavePeople = () => setDropDownPeople(false);

    const onMouseEnterMore = () => setDropDownMore(true);
    const onMouseLeaveMore = () => setDropDownMore(false);

    return (

        <nav className="navbar">
            <ul className="nav-menu">
                <li className="nav-item"
                onMouseEnter={onMouseEnterMovies}
                onMouseLeave={onMouseLeaveMovies}
                >
                    <Link to="/" className="nav-link">
                        Movies
                    </Link>
                    {dropDownMovies && <DropDownMovies />}
                </li>
                <li className="nav-item"
                 onMouseEnter={onMouseEnterTvShow}
                 onMouseLeave={onMouseLeaveTvShow}
                 >
                    <Link to="/" className="nav-link">
                        Tv Show
                     </Link>
                 {dropDownTvShow && <DropDownTvShow />}  
                </li>
                <li className="nav-item"
                 onMouseEnter={onMouseEnterPeople}
                 onMouseLeave={onMouseLeavePeople}
                 >
                    <Link to="/" className="nav-link">
                        People
                     </Link>
                     {dropDownPeople && <DropDownPeople />}
                </li>
                <li className="nav-item"
                onMouseEnter={onMouseEnterMore}
                onMouseLeave={onMouseLeaveMore}
                >
                    <Link to="/" className="nav-link">
                        More
                     </Link>
                     {dropDownMore && <DropDownMore />}
                </li>
            </ul>
        </nav>

    )
}
export default DropDownMenu;