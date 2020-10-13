import React from 'react'
import { Link } from 'react-router-dom'
import TopSearchPanel from './TopSearchPanel'

export default function HeaderComponent() {
    return (
        <div className="rm-navbar">

            <nav className="navbar navbar-expand-md ">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarCollapse"
                    aria-controls="navbarCollapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">
                                Become A host <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"> Help </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"> Sign Up </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"> Log In </a>
                        </li>

                    </ul>


                </div>
            </nav>
            <div className="bottom-menu">
                <ul>
                    <li className="active"><Link to="#">For You</Link></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="#">Experience</Link></li>
                    <li><Link to="#">Places</Link></li>
                    <li><Link to="/add">Add Property</Link></li>
                </ul>
            </div>
            <TopSearchPanel/>
            
        </div>
    )
}
