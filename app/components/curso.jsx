import React from 'react'
import { formatFecha } from '../helpers'

const Curso = ({curso}) => {
    const { titulo, contenido, updatedAt } = curso.attributes
  const img = curso.attributes.imagen.data.attributes.formats.medium.url
  return (
    <div className="contenedorCurso">
        <style jsx='true'>{`
                .contenedorCurso{
                    background-image:linear-gradient(to right, rgb(0 0 0/.65), rgb(0 0 0/.7)), url(${img});
                    background-repeat:no-repeat;
                    width:100%;
                    background-size: cover;    
                }
            `}
        </style>
        <div className='contenidoCurso'>
          <h4>{titulo}</h4>
          <p>{formatFecha(updatedAt)}</p>
          <p>{contenido}</p>
        </div>
      </div>
  )
}

export default Curso