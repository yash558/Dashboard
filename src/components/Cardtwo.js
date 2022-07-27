import React from 'react'
import './style.css'
import profile from '../assets/profile.jfif'
const Cardtwo = () => {
    return (
        <div className="card-two mt-3">
            <div className="card-two-title d-flex flex-row">
                <h4>Current Projects</h4>
                <div className="card-two-btn d-flex flex-row">
                    <button className='btn mx-2'><i class="fa-solid fa-filter"></i> Filter</button>
                    <div className="btn"><i className="fa-solid fa-ellipsis-vertical"></i></div>
                </div>
            </div>
            <p>Projects can be in progress</p>
            <div className="card2-details d-flex flex-row">
                <div className="card2 mx-2">
                    <div className='card bg-white' style={{ width: "16rem" }}>
                        <div className="card-btn mt-2 mb-0">
                            <h6 className="mx-3 mt-0 text-dark">Construction Project</h6>
                            <p className='property m-0 mx-3 my-1'>Property name</p>
                        </div>
                        <div className="card-details d-flex flex-row mt-0">
                            <p className="mx-3 text-dark"> $ 100-800</p>
                            <div className="dead"><i class="fa-solid fa-calendar-week"></i>Deadline: 25 May</div>
                        </div>
                        <div class="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="100"
                                aria-valuemin="0" aria-valuemax="80" style={{ width: "60%" }}>
                            </div>
                        </div>
                        <div className="card-details d-flex flex-row my-1">
                            <img src={profile} alt="" height={30} width={30} className="rounded-circle mx-3" />
                            <div className='card-details1 d-flex flex-row'>
                                <h6 className="erin">Erin Gosales</h6>
                                <button className="btn btn-primary view">view</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card2 mx-2">
                    <div className='card bg-white' style={{ width: "16rem" }}>
                        <div className="card-btn mt-2 mb-0">
                            <h6 className="mx-3 mt-0 text-dark">Construction Project</h6>
                            <p className='property m-0 mx-3 my-1'>Property name</p>
                        </div>
                        <div className="card-details d-flex flex-row mt-0">
                            <p className="mx-3 text-dark"> $ 100-800</p>
                            <div className="dead"><i class="fa-solid fa-calendar-week"></i>Deadline: 25 May</div>
                        </div>
                        <div class="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="100"
                                aria-valuemin="0" aria-valuemax="80" style={{ width: "70%" }}>
                            </div>
                        </div>
                        <div className="card-details d-flex flex-row my-1">
                            <img src={profile} alt="" height={30} width={30} className="rounded-circle mx-3" />
                            <div className='card-details1 d-flex flex-row'>
                                <h6 className="erin">Erin Gosales</h6>
                                <button className="btn btn-primary view">view</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card2 mx-2">
                    <div className='card bg-white' style={{ width: "16rem" }}>
                        <div className="card-btn mt-2">
                            <h6 className="mx-3 text-dark">Construction Project</h6>
                            <p className='property m-0 mx-3 my-1'>Property name</p>
                        </div>
                        <div className="card-details d-flex flex-row">
                            <p className="mx-3 text-dark"> $ 100-800</p>
                            <div className="dead"><i class="fa-solid fa-calendar-week"></i>Deadline: 25 May</div>
                        </div>
                        <div class="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="100"
                                aria-valuemin="0" aria-valuemax="80" style={{ width: "50%" }}>
                            </div>
                        </div>
                        <div className="card-details d-flex flex-row my-1">
                            <img src={profile} alt="" height={30} width={30} className="rounded-circle mx-3" />
                            <div className='card-details1 d-flex flex-row'>
                                <h6 className="erin">Erin Gosales</h6>
                                <button className="btn btn-primary view">view</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cardtwo