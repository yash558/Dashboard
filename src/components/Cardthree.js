import React from 'react'
import profile from '../assets/profile.jfif'
import './style.css'

const cardthree = () => {
    return (
        <div className="card-three mt-3">
            <div className="card-three-title d-flex flex-row">
                <h4>Pending Invoices</h4>
                <div className="card-three-btn d-flex flex-row">

                    <div className="btn"><i className="fa-solid fa-ellipsis-vertical"></i></div>
                </div>
            </div>
            <p>Invoices that are currently pending</p>

            <div className="card-three-details d-flex flex-row">
                <div className="card2 mx-2">
                    <div className='card bg-white' style={{ width: "16rem" }}>
                        <div className="card-btn mt-2">
                            <h3 className="mx-3 text-dark">$198.00</h3>
                        </div>
                        <div className="card-details d-flex flex-row">
                        <p className="mx-3 text-dark">Amount</p>
                        <button className="btn btn-success">Approved</button>
                        </div>
                        <div className="card-details d-flex flex-row">
                        <img src={profile} alt="" height={40} width={40} className="rounded-circle mx-3" />
                        <div className='card-details1'>
                            <h6>Erin Gosales</h6>
                            <p className='d-flex flex-row'>#52314<span> Date : 25 May</span></p>
                        </div>
                        </div>
                    </div> 
                </div>
                
                <div className="card2 mx-2">
                    <div className='card bg-white' style={{ width: "16rem" }}>
                        <div className="card-btn mt-2">
                            <h3 className="mx-3 text-dark">$198.00</h3>
                        </div>
                        <div className="card-details d-flex flex-row">
                        <p className="mx-3 text-dark">Amount</p>
                        <button className="btn btn-danger">pending...</button>
                        </div>
                        <div className="card-details d-flex flex-row">
                        <img src={profile} alt="" height={40} width={40} className="rounded-circle mx-3" />
                        <div className='card-details1'>
                            <h6>Erin Gosales</h6>
                            <p className='d-flex flex-row'>#52314<span> Date : 25 May</span></p>
                        </div>
                        </div>
                    </div> 
                </div>
                
                <div className="card2 mx-2">
                    <div className='card bg-white' style={{ width: "16rem" }}>
                        <div className="card-btn mt-2">
                            <h3 className="mx-3 text-dark">$198.00</h3>
                        </div>
                        <div className="card-details d-flex flex-row">
                        <p className="mx-3 text-dark">Amount</p>
                        <button className="btn btn-danger">Pending...</button>
                        </div>
                        <div className="card-details d-flex flex-row">
                        <img src={profile} alt="" height={40} width={40} className="rounded-circle mx-3" />
                        <div className='card-details1'>
                            <h6>Erin Gosales</h6>
                            <p className='d-flex flex-row'>#52314<span> Date : 25 May</span></p>
                        </div>
                        </div>
                    </div> 
                </div>
                
               

            </div>
        </div>

    )
}

export default cardthree