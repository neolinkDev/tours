// import React from 'react';
import PropTypes from 'prop-types';

import { Tour } from './Tour';

export const Tours = ({ tours, removeTour }) => {

  return (
    <section>
      <div className="title">
        <h2>Nuestros Viajes</h2>
        <div className="underline"></div>
      </div>
      <div>
        { 
          tours.map(tour => {

            // const { id } = tour;

            return <Tour key={ tour.id } {...tour} removeTour={ removeTour } />
          }) 
        }
      </div>
    </section>
  )
}

Tours.propTypes = {
  tours: PropTypes.array,
  // removeTour: PropTypes.func.isRequired
}
