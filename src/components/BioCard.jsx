import React from 'react';
import './BioCard.css';
import PropTypes from 'prop-types';


function BioCard(props) {
  return(
    <div>
      <div className='card bio-card'>
      <div className="img-holder">
        <img src={props.imgURL} className='card-img-top'/>
      </div>      
        <div className='card-body'>
          <h5 className='card-title'>{props.name}</h5>
          <p className='card-text'>{props.bio}</p>
        </div>
      </div>
    </div>
  );
}

export default BioCard;