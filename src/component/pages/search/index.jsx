import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFullUrlImageAction } from "../../../store/actions/getFullUrlImageAction";
import { getSearchAction } from "../../../store/actions/getSearchAction";
import "./index.css";

const Search = () => {

    const { title } = useParams();
    console.log("name", title);

    const getSearch = useSelector(state => state.searchState.getSearch.results);
    const getImageUrl = useSelector(state => state.fullUrlImage.getFullUrlImage.images);

    const dispatch = useDispatch();

    useEffect(async () => {
        await dispatch(await getSearchAction(dispatch, title))
        await dispatch(await getFullUrlImageAction(dispatch))

    }, [])

    return (
        <>
            {
                getSearch && getImageUrl &&

                getSearch.map((item, index) => {
                    return (
                        <div className="card-search">
                            <img src={`${getImageUrl.base_url}${getImageUrl.poster_sizes[0]}${item.poster_path}`} key={index} className="img-search" />
                            <h3 className="title-search">{item.title}</h3>
                            <p className="text-search">{item.release_date}</p>
                            <p className="overview-search">{item.overview}</p>
                        </div>
                    )
                })

            }
        </>
    )
}

export default Search;