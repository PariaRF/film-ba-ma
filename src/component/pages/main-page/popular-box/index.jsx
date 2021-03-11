import React, { useEffect, useState } from "react";
// import axios from "axios";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { getPopularAction } from "../../../../store/actions/getPopularAction";
import { getFullUrlImageAction } from "../../../../store/actions/getFullUrlImageAction";
import {getPopularDetailAction} from "../../../../store/actions/getPopularDetailAction";
// import { getPopularReducer } from "../../../../store/reducers/getPopularReducer";
import { BiListUl } from "react-icons/bi";
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { BsBookmarkFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const PopularBox = () => {
    const [showListOption, setShowListOption] = useState(false);
    

    const getPopularMovie = useSelector(state => state.popularState.getPopular.results);
    const getImageUrl = useSelector(state => state.fullUrlImage.getFullUrlImage.images);
    const getPopularDetail = useSelector(state => state.popularDetailState.getPopularDetail.id);

    const dispatch = useDispatch();

    useEffect(async () => {
        await dispatch(await getPopularAction(dispatch))
        await dispatch(await getFullUrlImageAction(dispatch))
        await dispatch(await getPopularDetailAction(dispatch))
    }, []);

    const showOption = (id) => {
        console.log(showListOption);
        setShowListOption(!showListOption);
        if (showListOption) {
            return (
                <div className="list-option">
                    <p>
                        <BiListUl />
                        Add to list
                    </p>
                    <hr />
                    <p>
                        <AiFillHeart />
                        Favorite
                    </p>
                    <hr />
                    <p>
                        <BsBookmarkFill />
                        Watchlist
                    </p>
                    <hr />
                    <p>
                        <AiFillStar />
                        Your rating
                    </p>
                </div>
            )
        }
    }


    return (
        <>

            <div className="row ">
                <div className="col-md-12">
                    <div className="header-col">
                        <h2>What's Popular</h2>
                        <div className="part">
                            <span className="select">
                                <h4 className="titr titr2">Streaming</h4>
                            </span>
                            <h4 className="titr">On Tv</h4>
                            <h4 className="titr">For Rent</h4>
                            <h4 className="titr">In Theaters</h4>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="popular-box scollor">
                                {
                                    getImageUrl && getPopularMovie && getPopularMovie.map((item, index) => {
                                        return (
                                            <div className="card-popular" key={index}>
                                                <span className="option" onClick={showOption}>
                                                    <p className="option-text">...</p>
                                                </span>
                                                <Link to={`/movie/${item.id}`} className="link-movie">
                                                    <img src={`${getImageUrl.base_url}${getImageUrl.poster_sizes[0]}${item.poster_path}`} key={index} className="box-pic" />
                                                    <h4 className="text-popular">{item.title}</h4>
                                                </Link>
                                                <p className="date">{item.release_date}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}





export default PopularBox; 
