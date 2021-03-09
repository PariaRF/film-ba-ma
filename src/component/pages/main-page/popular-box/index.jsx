import React, { useEffect } from "react";
// import axios from "axios";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { getPopularAction } from "../../../../store/actions/getPopularAction";
import { getFullUrlImageAction } from "../../../../store/actions/getFullUrlImageAction";
import { getPopularReducer } from "../../../../store/reducers/getPopularReducer";

const PopularBox = () => {
    const getPopularMovie = useSelector(state => state.popularState.getPopular.results);
    const getImageUrl = useSelector(state => state.fullUrlImage.getFullUrlImage.images);

    const dispatch = useDispatch();

    useEffect(async () => {
        await dispatch(await getPopularAction(dispatch))
        await dispatch(await getFullUrlImageAction(dispatch))
    }, []);


    return (
        <>
            {/* <div className="container-fluid"> */}
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
                                {/* <div className="card-box"> */}

                                {
                                    getImageUrl && getPopularMovie && getPopularMovie.map((item, index) => {
                                        return (
                                            <div className="card-popular">
                                                <img src={`${getImageUrl.base_url}${getImageUrl.poster_sizes[0]}${item.poster_path}`} key={index} className="box-pic" />
                                                <h4 className="text-popular">{item.title}</h4>
                                            </div>
                                        )
                                    })
                                }

                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}

        </>
    )
}





export default PopularBox; 
