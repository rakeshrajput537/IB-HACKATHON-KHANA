import React from 'react';
import "./navBar.scss";
export default function NavBar(N) {
    return(
        <div className="navB" id="navbar">
            <div className="ullist">
                <spam className="brand" ><b>KHANA<strong>KHOJO</strong></b></spam>
                {/* <spam className="lilist">BMI</spam>
                <spam className="lilist"><a href="#contact">Item</a></spam> */}
                <spam className="lilist" style={{float:"right"}}><a className="active" href="#about"><strong>Login</strong></a></spam>
            </div>

        </div>
    );
}
