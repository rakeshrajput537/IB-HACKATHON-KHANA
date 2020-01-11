import React from 'react';
import "./navBar.css";
export default function NavBar(N) {
    return(
        <div className="navB" id="navbar">
            <div className="ullist">
                <spam className="lilist" ><a href="#home"><b style={{color:"yellow"}}>KHANAKHOJO</b></a></spam>
                <spam className="lilist"><a href="#news">News</a></spam>
                <spam className="lilist"><a href="#contact">Contact</a></spam>
                <spam className="lilist" style={{float:"right"}}><a className="active" href="#about">Login</a></spam>
            </div>

        </div>
    );
}
