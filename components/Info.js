import React from "react"

export default function Info() {
    return (
        <div className="info">
            <img src="./images/Abdulq.jpg" />
            <h1 className="name">Abdulqaweeyu</h1>
            <h2 className="title">Frontend Developer</h2>
            <h3 className="site">Abdulqaweeyu.website</h3>
            <button id="email-btn">
                <a href="mailto: obeitoraq20@gmail.com" className="fa fa-envelope"></a>Email
            </button>
            <button id="linkedin-btn">
                <a href="https://www.linkedin.com/in/abdulqaweeyu-obeitor-60b3691b1/" 
                className="fa fa-linkedin" target="_blank"></a>LinkedIn
            </button>
        </div>
    )
} 