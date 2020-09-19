import React from 'react';

const MyWork = () => {
  return (
    <div className="container-fluid myWork">
      <div className="row no-gutters">
        <div className="col-1 square">
        </div>
        <div className="col-3">
          <div className='title'>
            <h3>My Work</h3>
          </div>
        </div>
        <div className="col-2 picBorder projects">
          <div className='project'>
            <img src='./images/sqweatherapp.png' alt="first project" />
          </div>
          <div className='project'>
            <img src='./images/sqshop.png' alt="second project" />
          </div>
          <div className='project'>
            <img src='./images/sqgamenight.png' alt="third project" />
          </div>
        </div>
        <div className="col-6 projectdescriptions">
          <div className="description">
            <h3>Weather?! App</h3>
            <p>Used Technologies</p>
            <div>Github Visit Side</div>
          </div>
          <div className="description">
            <h3>Game Night App</h3>
            <p>Used Technologies</p>
            <div>Github Visit Side</div>
          </div>
          <div className="description">
            <h3>Animals Choice Shop</h3>
            <p>Used Technologies</p>
            <div>Github Visit Side</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyWork; 