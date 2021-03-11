import React from "react";
import HeadInfo from "../../../utils/head-info";
import DetailPopular from "./detail-popular";
import MenuPopular from "./detail-popular/menu-popular";
import "./index.css";

const DetailPopularMovie = () => {



    return (
        <>
        <HeadInfo title="Popular Detail" description="this page for detail for movie"/>
            <div className="box-detail">
                <MenuPopular />
                <DetailPopular />
                {/* <h1>Welocme to detail</h1> */}

            </div>
        </>
    )
}

export default DetailPopularMovie;