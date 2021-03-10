import React from "react";
import "./index.css";
import logofooter from "./logoFooter.svg";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <img src={logofooter} className="logo-footer" alt="The Movie Database (TMDb)" />
                <p className="btn">Hi User!</p>
                <div className="first-column">
                    <h3>THE BASICS</h3>
                    <p>About TMDb</p>
                    <p>Contact Us</p>
                    <p> Support Forums</p>
                    <p> API</p>
                    <p>System Status</p>
                </div>
                <div className="second-column">
                    <h3>GET INVOLVED</h3>
                    <p>Contribution Bible</p>
                    <p>3rd Party Applications</p>
                    <p> Add New Movie</p>
                    <p> Add New TV Show</p>
                </div>
                <div className="third-column">
                    <h3>COMMUNITY</h3>
                    <p>Guidelines</p>
                    <p>Discussions</p>
                    <p>Leaderboard</p>
                    <p>Twitter</p>
                </div>
                <div className="last-column">
                    <h3>LEGAL</h3>
                    <p>Terms of Use</p>
                    <p>API Terms of use</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </>
    )
}

export default Footer;