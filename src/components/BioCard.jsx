import React from 'react';
import './BioCard.css';


function BioCard(props) {
  return(
    <div>
      <a href='https://www.youtube.com/watch?v=nSz16ngdsG0'>
        <div className='card bio-card'>
        <div className="img-holder">
          <img className='card-img-top' src={props.imgURL} />
        </div>      
          <div className='card-body'>
            <h5 className='card-title'>{props.name}</h5>
            <p className='card-text'>{props.bio}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default BioCard;