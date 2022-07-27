import React from 'react'
import profile from '../assets/profile.jfif'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white mt-2">
                <div className="container-fluid">
                    <a className="navbar-brand mx-5 px-3 fs-3" href="/">LOGO</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex mx-auto w-50 mx-2" role="search">
                            <input className="form-control me-2 bg-light" type="search" placeholder="🔍 Search for projects" aria-label="Search" />
                        </form>

                        <div className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <div className="profile-img">
                                <img src={profile} alt="profile-img" className="rounded-circle" height={45} width={45} />
                            </div>
                            <div className="profile-title mx-2">
                                <h5 className="title1 mb-1 ">Olive Smith</h5>
                                <h6 className="title2 mt-0">vendor</h6>
                            </div>
                            <p className="fw-bolder fs-5 mx-2 mt-2"><i class="fa-solid fa-angle-right"></i></p>

                        </div>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar