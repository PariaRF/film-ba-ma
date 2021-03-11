import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFullUrlImageAction } from "../../../store/actions/getFullUrlImageAction";
import { getSearchAction } from "../../../store/actions/getSearchAction";

const Search = ()=>{

    const {name} = useParams();
    console.log("name",name);

    const getSearch = useSelector(state => state.searchState.getSearch.results);
    const getImageUrl = useSelector(state => state.fullUrlImage.getFullUrlImage.images);

    const dispatch = useDispatch();

    useEffect(async() =>{
        await dispatch(await getSearchAction(dispatch, name))
        await dispatch(await getFullUrlImageAction(dispatch))

    },[])

    return(
        <>
            {
                getSearch && getImageUrl &&
                
                    getSearch.map((item,index)=>{
                        return(
                            <img src={`${getImageUrl.base_url}${getImageUrl.poster_sizes[3]}${item.poster_path}`} />
                        )
                    })
                
            }
        </>
    )
}

export default Search;