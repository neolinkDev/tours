// import React from 'react';
import { useState } from 'react';

export const Tour = ({ id, image, info, price, name, removeTour }) => {

  // useState hook para el botón leer mas/mostrar menos
  const [ readMore, setReadMore ] = useState( false );

  return (
    <article className="single-tour">
      <img src={ image } alt={ name } />
      <footer>
        <div className="tour-info">
          <h4>{ name }</h4>
          <h4 className="tour-price">{ price }</h4>
        </div>
        <p>
          {
            // Si `readMore` es verdadero se muestra toda la info, caso contrario solos los primeros 180 caracteres
            readMore 
              ? info 
              : `${ info.substring(0, 180) }...`
          }
          <button 
            onClick={ () => setReadMore( !readMore ) }
          >
            { readMore ? 'mostrar menos' : 'leer más' }
          </button>
        </p>
        <button 
          className="delete-btn" 
          onClick={ () => removeTour( id ) }
        >
          no me interesa
        </button>
      </footer>
    </article>
  );
};