import React from "react";
import HeadInfo from "../../../utils/head-info";
import Carousel from "./carousel";
import PopularBox from "./popular-box";

const MainPage = () =>{
    return(
        <>
        <HeadInfo title="The Movie Database(TMDB)" description="it's main page"/>
            <Carousel />
            <PopularBox />
        </>
    )
}

export default MainPage;