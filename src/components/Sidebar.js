import React from 'react'
const Sidebar = () => {
    return (
        <div className="sidebar bg-light">
            <div className="nav-side">
                <ul className="nav-items">
                    <li className="my-4"><a href="/" className="mx-0 my-3 active"><i class="fa-solid fa-house-chimney mx-3"></i> Dashboard</a></li>
                    <li className="my-4"><a href="/" className="mx-1 my-3"><i class="fa-solid fa-file-lines mx-3"></i> Project</a></li>
                    <li className="my-4"><a href="/" className="mx-1 my-3"><i class="fa-solid fa-calendar-day mx-3"></i> Calender</a></li>
                    <li className="my-4"><a href="/" className="mx-0"><i class="fa-solid fa-paper-plane mx-3"></i> Message</a> <button className="btn btn-primary one">5</button></li>
                    <li className="my-4"><a href="/" className="mx-0"><i class="fa-solid fa-bell mx-3"></i> Notifications</a> <button className="btn btn-primary two">5</button></li>
                    <li className="my-3"><a href="/" className="mx-0 my-3"><i class="fa-solid fa-phone mx-3"></i> Contact</a></li>
                </ul>
                <div className="nav-promo mx-5 mt-4">
                    <h6 className=''>Promotion</h6>
                    <a href="/" className="mx-2 my-3"><i class="fa-solid fa-badge-check"></i> Promotions</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar