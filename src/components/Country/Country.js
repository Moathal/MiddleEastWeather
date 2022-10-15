import React from 'react';
import { Link } from 'react-router-dom';
import goto from '../../assets/group55.png';
import './Country.css';

function Country({ name, id, img }) {
  return (
    <div>
      <Link className="countryContainer" to={`/details/${id}`}>
        <img className="left" src={img} alt="country's Map" />
        <div className="right">
          <img className="goto" src={goto} alt="goto icon" />
          <p className="name">{name}</p>
        </div>
      </Link>
    </div>
  );
}

export default Country;
