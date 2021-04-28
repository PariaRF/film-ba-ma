import React from "react";
import "./index.css";
import Soul from "./soul2.jpg";

const Carousel = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row space">
                    <div className="col-md-12">
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100 pic" src={Soul} alt="First slide" />
                                    <div className="title">
                                        <h2>Welcome.</h2>
                                        <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
                                    </div>
                                    <div className="search-boxb">
                                        <input type="text" 
                                        placeholder="search  for a movie, tv show, person,......" 
                                        className="search-text"/>
                                        <button className="search-btn">Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carousel;