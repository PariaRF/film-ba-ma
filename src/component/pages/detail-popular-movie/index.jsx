import React from "react";
import DetailPopular from "./detail-popular";
import MenuPopular from "./detail-popular/menu-popular";
import "./index.css";

const DetailPopularMovie = () => {



    return (
        <>
            <div className="box-detail">
                <MenuPopular />
                <DetailPopular />
                {/* <h1>Welocme to detail</h1> */}

            </div>
        </>
    )
}

export default DetailPopularMovie;