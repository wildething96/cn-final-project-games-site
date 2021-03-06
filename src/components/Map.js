import React from 'react';
import styled from 'styled-components';
import MapImg from '../assets/images/Untitled.png';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 400px;
  
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    padding-top: 0rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 250px;
    border-radius: 12px;
    
    h3 {
      color: var(--gray-1)
    }
    p{
      font-size: 1.6em;
      color: var(--gray-1);
    }
  }
  .map__card__heading {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.3rem;
    margin-top: 1.5rem;
    text-decoration: underline;
    font-style: none;
    color: var(--gray-1)
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Our Location</h3>
          <p>CodeNation</p>
          <a
            className="map__card__link"
            href="https://www.google.co.uk/maps/place/Code+Nation/@53.4570382,-2.2870365,15z/data=!4m5!3m4!1s0x0:0x965f3c33ead91c5d!8m2!3d53.4573771!4d-2.2872844"
            target="_blank"
            rel="noreferrer"
          >
            Open in google map
          </a>
        </div>
      </div>
    </MapStyles>
  );
}
