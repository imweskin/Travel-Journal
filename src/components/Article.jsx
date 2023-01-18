import React from 'react';
import LocationLogo from '../assets/location.png';

function Article({image, country, name, startDate, endDate, description}) {
  return (
    <article>
      <div className="image">
        <img src={image} alt="place" />
      </div>
      <div className="info">
        <div className="location">
          <img src={LocationLogo} alt="location icon" />
          <h3>{country}</h3>
          <a href={`https://www.google.com/maps/place/${name}/`} target="_blank" rel="noreferrer">View on Google Maps</a>
        </div>
        <h2 className="name">{name}</h2>
        <p className="date">{startDate} - {endDate}</p>
        <p className="description">{description}</p>
      </div>
    </article>
  )
};

export default Article;