import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { countryThunk } from '../../Redux/details';
import './Details.css';

function Details() {
  const location = useLocation();
  const info = useSelector((state) => state.countryInfo.data);
  const dispatch = useDispatch();
  const id = location.pathname.substring(9, location.pathname.length);
  useEffect(() => {
    dispatch(countryThunk(id));
  }, [dispatch]);
  return (
    <>
      {typeof (info) !== 'undefined' ? (
        <ul className="infoList">
          <li className="listItem">
            <h4 className="info-key">Country</h4>
            <p className="info-value">{info.name}</p>
          </li>
          <li className="listItem">
            <h4 className="info-key">Humidity</h4>
            <p className="info-value">
              {info.main.humidity}
              <small>%</small>
            </p>
          </li>
          <li className="listItem">
            <h4 className="info-key">Description</h4>
            <p className="info-value">{info.weather[0].description}</p>
          </li>
          <li className="listItem">
            <h4 className="info-key">
              Temperature
            </h4>
            <p className="info-value">
              {Math.floor(info.main.feels_like) - 273}
              <small> Celsius</small>
            </p>
          </li>
          <li className="listItem">
            <h4 className="info-key">Wind Speed</h4>
            <p className="info-value">
              {info.wind.speed}
              <small> meter/sec</small>
            </p>
          </li>
        </ul>
      ) : <h2 className="info-value">loading...</h2>}
    </>
  );
}

export default Details;
