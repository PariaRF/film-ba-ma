import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFullUrlImageAction } from "../../../../store/actions/getFullUrlImageAction";
import { getPopularAction } from "../../../../store/actions/getPopularAction";
import { getPopularDetailAction } from "../../../../store/actions/getPopularDetailAction";
import { BiListUl } from "react-icons/bi";
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { BsBookmarkFill } from "react-icons/bs";
import { BsFillCaretRightFill } from "react-icons/bs";
import "./index.css";



const DetailPopular = () => {

    const { id } = useParams();
    // console.log("id params is:", id);

    const getImageUrl = useSelector(state => state.fullUrlImage.getFullUrlImage.images);
    const getPopularDetail = useSelector(state => state.popularDetailState.getPopularDetail);

    const dispatch = useDispatch();

    useEffect(async () => {
        await dispatch(await getFullUrlImageAction(dispatch))
        await dispatch(await getPopularDetailAction(dispatch, id))
    }, []);

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    {
                        getImageUrl &&
                        <div className="bg" style={{ backgroundImage: `url(${getImageUrl.base_url}${getImageUrl.poster_sizes[3]}${getPopularDetail.backdrop_path})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                            <div className="card card-poster" style={{ width: "18rem" }}>
                                {
                                    getImageUrl && < img className="card-img" src={`${getImageUrl.base_url}${getImageUrl.poster_sizes[3]}${getPopularDetail.poster_path}`} />

                                }
                                <div className="card-footer">
                                    <p className="text-footer">Watch Now!</p>
                                    {/* {
                                        getPopularDetail && getImageUrl && < img className="card-img" src={`${getImageUrl.base_url}${getImageUrl.logo_sizes[3]}${getPopularDetail.logo_path}`} />
                                    } */}
                                </div>
                            </div>
                            <div className="text-detail">
                                {
                                    getPopularDetail && getImageUrl &&
                                    <div>
                                        <h2 className="title-film">{getPopularDetail.title}</h2>
                                        <div className="one-line">
                                            <p>{getPopularDetail.release_date}</p>
                                            {
                                                getPopularDetail.production_countries &&
                                                getPopularDetail.production_countries.map((item, index) => {
                                                    return (
                                                        <p key={index}>({item.iso_3166_1})</p>
                                                    )
                                                })
                                            }
                                            {
                                                getPopularDetail.genres &&
                                                getPopularDetail.genres.map((item, index) => {
                                                    return (
                                                        <p key={index}>. {item.name}</p>
                                                    )
                                                })
                                            }
                                            <p>  .  {getPopularDetail.runtime}s</p>
                                        </div>
                                        <div className="second-line">
                                            <div className="score">
                                                <p className="score-text">{getPopularDetail.vote_average}%</p>
                                            </div>
                                            <p style={{ margin: "3px", width: "6px", marginTop: "13px", color: "black", fontWeight: "700" }}>User Score</p>
                                            <div className="circle">
                                                <span className="text-circle">
                                                    <BiListUl />
                                                </span>
                                            </div>
                                            <div className="circle">
                                                <span className="text-circle">
                                                    <AiFillHeart />
                                                </span>
                                            </div>
                                            <div className="circle">
                                                <span className="text-circle">
                                                    <BsBookmarkFill />
                                                </span>
                                            </div>
                                            <div className="circle">
                                                <span className="text-circle">
                                                    <AiFillStar />
                                                </span>
                                            </div>
                                            <div>
                                                <p className="play"><BsFillCaretRightFill />Play Trailer</p>
                                            </div>
                                        </div>
                                        <p style={{ opacity: "0.7" }}>{getPopularDetail.tagline}</p>
                                        <div className="overview-detail">
                                            <h3>Overview</h3>
                                            <p style={{ fontSize: "1.25em" }}>{getPopularDetail.overview}</p>
                                        </div>
                                        {/* <div className="writter">
                                            {
                                                getPopularDetail.production_companies && 
                                                getPopularDetail.production_companies.map((item,index)=>{
                                                    return(
                                                        <p key={index}>{item.name}</p>
                                                    )
                                                })
                                            }
                                        </div> */}
                                    </div>
                                }
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default DetailPopular;