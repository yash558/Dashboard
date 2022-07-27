import React from 'react'
import profile from '../assets/profile.jfif'
import './style.css'

const Rightbar = () => {
    return (
        <div className="rightbar px-3 pt-3 bg-light">
            <div className="top-rightbar">
                <div className="top-title d-flex flex-row">
                    <h6 className="toptitle">Upcoming Meeting</h6>
                    <div><i className="fa-solid fa-ellipsis-vertical"></i></div>
                </div>
                <hr />
                <div className="d-flex flex-row pt-0">
                    <p className="para1">Today's Meetings</p>
                    <div className="icons"><i class="fa-solid fa-angle-down"></i></div>
                </div>
                <div className="d-flex flex-row">
                    <p className="para2">30 minute call with clients</p>
                    <div className="icons"><i className="fa-solid fa-ellipsis-vertical"></i></div>
                </div>
                <div className="project-details">
                    <div className="project-call">
                        <h6>Project Discovery Call</h6>
                        <p className="para1"> due soon <span className="fw-bolder">9:20 AM</span></p>
                    </div>
                    <div className="project-img d-flex flex-row">
                        <div className="img">
                            <img src={profile} alt="" className="rounded-circle" height={30} width={30} />
                            <img src={profile} alt="" className="rounded-circle one" height={30} width={30} />
                            <img src={profile} alt="" className="rounded-circle two" height={30} width={30} />
                        </div>
                        <div className="button">
                            <button className='btn btn-primary'>+ Invite</button>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-row mt-4">
                    <p className="para2">30 minute call with clients</p>
                    <div className="icons"><i className="fa-solid fa-ellipsis-vertical"></i></div>
                </div>
                <div className="project-details">
                    <div className="project-call">
                        <h6>Project Discovery Call</h6>
                        <p className="para1"> due soon <span className="fw-bolder">9:20 AM</span></p>
                    </div>
                    <div className="project-img d-flex flex-row">
                        <div className="img">
                            <img src={profile} alt="" className="rounded-circle" height={30} width={30} />
                            <img src={profile} alt="" className="rounded-circle one" height={30} width={30} />
                            <img src={profile} alt="" className="rounded-circle two" height={30} width={30} />
                        </div>
                        <div className="button">
                            <button className='btn btn-primary'>+ Invite</button>
                        </div>
                    </div>
                    <div className="d-flex flex-row pt-3">
                        <p className="para1">Schedule's Meeting</p>
                        <div className="icons"><i class="fa-solid fa-angle-up"></i></div>
                    </div>
                    <hr/>
                </div>

                <div className="top-down">
                <div className="top-title d-flex flex-row">
                    <h6 className="toptitle">Recent Activity</h6>
                    <div className="mx-4"><i className="fa-solid fa-ellipsis-vertical"></i></div>
                </div>

                <div className="list">
                    <div className='list1 d-flex flex-row'>                    
                            <p className="para23">🔵 Thankyou for Booking a meeting <br/> with JJ</p>
                            <img src={profile} alt="" className="rounded-circle mx-1 mx-3" height={30} width={30} />
                    </div>             
                    <p className="fw-bolder mt-0 pt-0 para22">Kevin dekkon</p>       
                    <p className="para22">14 July 2022 at 20:00 pm</p>       
                </div>
                <div className="list mt-2">
                    <div className='list1 d-flex flex-row'>                    
                            <p className="para23">🔵 Thankyou for Booking a meeting <br/> with JJ</p>
                            <img src={profile} alt="" className="rounded-circle mx-1 mx-3" height={30} width={30} />
                    </div>             
                    <p className="fw-bolder mt-0 pt-0 para22">Kevin dekkon</p>       
                    <p className="para22">14 July 2022 at 20:00 pm</p>       
                </div>




                </div>
            </div>
        </div>
    )
}

export default Rightbar