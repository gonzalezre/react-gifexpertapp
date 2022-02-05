import React from 'react';

export const GiftListItem = ({title, url}) => {
    
  return (
      <div className='card animate__animated animate__fadeInLeft'>
          <img className='card-img-top ' src={url} alt={title}/>
          <div className='card-body'>
            <p>{title}</p>

          </div>
      </div>
  );
};
