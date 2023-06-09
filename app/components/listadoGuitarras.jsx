import React from 'react'
import Card from './card'

const ListadoGuitarras = ({guitarras}) => {
  return (
    <div className="contenedorTienda">
        <h4>Nuestra Colección</h4>
        <div className='contenidoTienda'>
          {guitarras.map(guitarra => <Card key={guitarra.id} guitarra={guitarra} />)}
        </div>
      </div>
  )
}

export default ListadoGuitarras