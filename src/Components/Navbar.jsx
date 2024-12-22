import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__s1">
                <h1 className="navbar__s1__title">Udemy</h1>

            </div>
            <div className="navbar__s2">
                <i className="fa-solid fa-magnifying-glass" style={{ color: "black" }}></i>
                <input placeholder="Search for anything here.Text,Business,Art...."></input>


            </div>
            <div className="navbar__s3">
                <p>Courses</p>
                <p>My learning</p>
                <div className="mylearning">
                    <p> My learning</p>
                    <div className="mylearning__popup">
                        <p>you did not purchase anything yet</p>
                    </div>
                </div>
                <p className="navbar__s3__one">
                    <i className="fa-solid fa-cart-shopping" ></i>
                    <i className="fa-regular fa-bell"></i>
                    <i className="fa-solid fa-user" ></i>
                </p>

            </div>
            <div className="navbar__s4">
                <i className="fa-solid fa-bars"></i>
            </div>
        </div>

    )
}

export default Navbar
