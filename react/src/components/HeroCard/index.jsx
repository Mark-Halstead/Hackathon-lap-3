import React from 'react';
// import { Link } from 'react-router-dom';

// const linkStyle = {
//     color: '#875053'
//   };

const HeroCard = ({ id, name, photo}) => {

    return <div className='snack-card'>
        <img src = {photo} className = "photo"></img>
        <h3>{name}</h3>
        {/* <p><span className="votes-counter">Votes: {votes}</span></p> */}
        <p className="snack-details-holder">
           
        </p>
        
        <br></br>
    </div>
};

export default HeroCard;
