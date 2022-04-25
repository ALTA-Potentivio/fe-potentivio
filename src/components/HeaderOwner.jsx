import { useEffect, useState } from "react";

import "../styles/headerowner.css";

const HeaderOwner = () => {
    return (
        <>
            <div className="header-3-2 container-xxl mx-auto p-0 position-relative">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a href="#">
                        <img style={{marginRight: '0.75rem'}}
                            src=""
                            alt="" />
                    </a>
                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="modal" 
                        data-bs-target="#targetModal-item">
                            <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="modal-item modal fade" id="targetModal-item" tabIndex="-1" role="dialog"
                        aria-labelledby="targetModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div className="modal-content bg-white border-0">
                                    <div className="modal-header border-0" style={{padding: '2rem', paddingBottom: '0'}}>
                                        <a className="modal-title" id="targetModalLabel">
                                            <img style={{marginRight: '0.75rem'}}
                                                src=""
                                                alt="" />
                                        </a>
                                        <button type="button" className="close btn-close text-white" data-bs-dismiss="modal"
                                            aria-label="Close">
                                        </button>
                                    </div>
                                    <div className="modal-body" style={{padding: '2rem', paddingTop: '0', paddingBottom: '0'}}>
                                        <ul className="navbar-nav responsive me-auto mt-2 mt-lg-0">
                                            <li className="nav-item active position-relative">
                                                <a className="nav-link main" style={{color: '#243142'}} href="#">Home</a>
                                            </li>
                                            <li className="nav-item position-relative">
                                                <a className="nav-link" href="#">Hire Status</a>
                                            </li>
                                            <li className="nav-item position-relative">
                                                <a className="nav-link" data-bs-toggle="collapse" href="#collapse" role="button"
                                                    aria-expanded="false" aria-controls="collapse">
                                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path fillRule="evenodd" clipRule="evenodd"
                                                                    d="M5.85 1.69346C3.5304 1.69346 1.65 3.57386 1.65 5.89346C1.65 8.21305 3.5304 10.0935 5.85 10.0935C8.1696 10.0935 10.05 8.21305 10.05 5.89346C10.05 3.57386 8.1696 1.69346 5.85 1.69346ZM0.25 5.89346C0.25 2.80066 2.75721 0.293457 5.85 0.293457C8.94279 0.293457 11.45 2.80066 11.45 5.89346C11.45 8.98625 8.94279 11.4935 5.85 11.4935C2.75721 11.4935 0.25 8.98625 0.25 5.89346Z"
                                                                    fill="#303030"/>
                                                                <path fillRule="evenodd" clipRule="evenodd"
                                                                    d="M8.85503 8.89848C9.12839 8.62512 9.57161 8.62512 9.84497 8.89848L14.045 13.0985C14.3183 13.3718 14.3183 13.8151 14.045 14.0884C13.7716 14.3618 13.3284 14.3618 13.055 14.0884L8.85503 9.88843C8.58166 9.61506 8.58166 9.17185 8.85503 8.89848Z"
                                                                    fill="#303030"/>
                                                        </svg>
                                                </a>
                                                <form method className="collapse position-absolute form center-search border-0"
                                                    id="collapse">
                                                        <div className="d-flex">
                                                            <input type="text" className="rounded-full border-0 focus:outline-none"
                                                                placeholder="Search" />
                                                            <button className="btn" type="button">
                                                                <svg style={{width: "20px", height: "20px"}} data-bs-toggle="collapse"
                                                                    href="#collapse" role="button" aria-expanded="false"
                                                                    aria-controls="collapse" fill="none" stroke="#273B56"
                                                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                                            strokeWidth="2" d="M6 18L18 6M6 6l12 12">
                                                                        </path>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                </form>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="modal-footer border-0" style={{padding: '2rem', paddingTop: '0.75rem'}}>
                                        <button className="btn btn-default btn-no-fill">Sign In</button>
                                        <button className="btn btn-fill text-white">Register</button>
                                    </div>
                                </div>
                            </div>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo">
                        <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
                            <li className="nav-item active position-relative">
                                <a className="nav-link main=" style={{color: '#243142'}} href="#">Home</a>
                            </li>
                            <li className="nav-item position-relative">
                                <a className="nav-link" href="#">Hire Status</a>
                            </li>
                            <li className="nav-item my-auto">
                                <a className="nav-link" data-bs-toggle="collapse" href="#collapse" role="button"
                                    aria-expanded="false" aria-controls="collapse">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd"
                                                    d="M5.85 1.69346C3.5304 1.69346 1.65 3.57386 1.65 5.89346C1.65 8.21305 3.5304 10.0935 5.85 10.0935C8.1696 10.0935 10.05 8.21305 10.05 5.89346C10.05 3.57386 8.1696 1.69346 5.85 1.69346ZM0.25 5.89346C0.25 2.80066 2.75721 0.293457 5.85 0.293457C8.94279 0.293457 11.45 2.80066 11.45 5.89346C11.45 8.98625 8.94279 11.4935 5.85 11.4935C2.75721 11.4935 0.25 8.98625 0.25 5.89346Z"
                                                    fill="#303030" />
                                                <path fillRule="evenodd" clipRule="evenodd"
                                                    d="M8.85503 8.89848C9.12839 8.62512 9.57161 8.62512 9.84497 8.89848L14.045 13.0985C14.3183 13.3718 14.3183 13.8151 14.045 14.0884C13.7716 14.3618 13.3284 14.3618 13.055 14.0884L8.85503 9.88843C8.58166 9.61506 8.58166 9.17185 8.85503 8.89848Z"
                                                    fill="#303030" />
                                        </svg>
                                </a>
                                <form className="collapse position-absolute form center-search border-0" id="collapse">
                                    <div className="d-flex">
                                        <input type="text" className="rounded-full border-0 focus:outline-none"
                                            placeholder="Search" />
                                        <button className="btn" type="button">
                                            <svg style={{width: '20px,', height: '20px'}} data-bs-toggle="collapse"
                                                href="#collapse" role="button" aria-expanded="false"
                                                aria-controls="collapse" fill="none" stroke="#273B56" viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg">
                                            </svg>

                                        </button>
                                    </div>
                                </form>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="hr">
                    <hr style={{
							borderColor: '#F4F4F4',
							backgroundColor: '#F4F4F4',
							opacity: '1',
							margin: '0'
						}} />
                </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossOrigin="anonymous"></script>
        </>
    )
}
export default HeaderOwner;