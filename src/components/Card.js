import React from "react";
import './style.css'


const Card = (props) => {
  return (
    <>
    <div className="d-flex flex-row">
      <div className="card1 mx-2">
        <div className='card bg-info' style={{ width: "20rem;" }}>
          <div className="card-btn d-flex flex-row mt-2">
          <button className="btn ones mx-3 text-white"><i class="fa-solid fa-signal-stream"></i> Live Projects</button>
          <button className="btn twos mx-5 text-white">View All</button>
          </div>
          <h5 className="card-title mx-3 pt-3 mt-2 fs-1 fw-bolder text-white">{58}</h5>
          <p className="text-white mx-3 mt-0">currently the project in the progress</p>
        </div>
      </div>
      <div className="card2 mx-2">
        <div className='card bg-danger' style={{ width: "20rem;" }}>
        <div className="card-btn mt-2">
          <button className="btn ones mx-3 text-white"><i className="fa-solid fa-hourglass-end"></i> in Progress</button>          
          </div>
          <h5 className="card-title mx-2 mt-2 pt-3 fs-1 fw-bolder text-white">{124}</h5>
          <p className="text-white mx-3 mt-0">Projects in Progress</p>
        </div>
      </div>
      <div className="card3 mx-2">
        <div className='card bg-success'>
        <div className="card-btn d-flex flex-row mt-2">
          <button className="btn ones mx-3 text-white"><i class="fa-solid fa-clipboard-list"></i> Completed</button>
          </div>
          <h5 className="card-title mx-2 mt-2 pt-3 fs-1 fw-bolder text-white">{34}</h5>
          <p className="text-white mx-3 mt-0">Completed Project</p>
        </div>
      </div>
      </div>
    </>
  );
};

export default Card;