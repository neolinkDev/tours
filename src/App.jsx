import { useState, useEffect } from 'react';
import { Loading } from './Loading';
import { Tours } from './Tours';

const url = 'https://course-api.com/react-tours-project';

export const App = () => {

  // hook useState
  const [isLoading, setIsLoading] = useState( true )
  const [tours, setTours] = useState([])

  // fn con la lógica para eliminar los tours que no interesen
  const removeTour = ( id ) => {
  
    const newTours = tours.filter( tour => tour.id !== id );

    setTours( newTours );
    
  }

  // Fn que se encarga de la petición fetch
  const getFetch = async () => {

   setIsLoading( true );

    try {

      const response = await fetch( url );
      const tours = await response.json();

      setIsLoading( false );
      setTours( tours );
      
    } catch ( error ) {

      setIsLoading( false );
      console.log( error );
    }

  }

  // una vez cambia el url o se recibe por primera vez queremos disparar un efecto
  useEffect( () => {

    getFetch(); 

  }, []);

  if( isLoading ){
    return(
      <main>
        <Loading />
      </main>
    )
  }

  if( tours.length === 0 ){
    return(
      <main>
        <div className='title'>
          <h2>no hay viajes</h2>
          <button 
            className='btn' 
            onClick={ () => getFetch() }
          >
            actualizar
          </button>
        </div>
    </main>
    )
  }

  return (
    <main>
      <Tours tours={ tours } removeTour={ removeTour } />
    </main>
  )
};
