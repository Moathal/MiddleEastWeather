import React, { useState } from 'react';
import map from '../../assets/Untitled-design.png';
import countries from '../countries';
import Country from '../Country/Country';
import './Home.css';

function Home() {
  const [value, setValue] = useState('');
  return (
    <>
      <div className="home-Header">
        <img className="countries" src={map} alt="middle east map" />
        <input onChange={(e) => setValue(e.target.value)} className="search" type="text" value={value} placeholder="Search a country.." />
      </div>
      <div className="countriesContainer">
        {countries.filter((country) => {
          if (value === '') return country;
          const searched = value.toLowerCase();
          if (country.name.toLowerCase().includes(searched)) return country;
          return null;
        })
          .map((country) => (
            <Country className="country" key={country.id} name={country.name} id={country.id} img={country.img} />
          ))}
      </div>
    </>
  );
}

export default Home;
