import React from "react";
import '../styles/welcome.scss';
import rest from '../img/rest.png'
import { Link } from "react-router-dom";
import UserNavBar from "./UserNavBar";
const Welcome = () => {

    return (
        <>
        <UserNavBar></UserNavBar>
            <text id="welcome">
                <p >Welcome to the recommended resorts in Israel!</p>
                <p>Since 1990 our site is active and accessible for you, </p>
                <p>everything to make your vacation perfect!!!</p>
                <p>We present you only the most selected vacation spots.</p>
                <p>So, what are you waiting for?</p>
                <p>Come in, choose and start packing...</p>
                <p>Have a good vocation!</p>
            </text>
        </>
    )

}
export default Welcome