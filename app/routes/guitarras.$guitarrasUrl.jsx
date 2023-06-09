import { useState } from 'react'

import { useLoaderData, useOutletContext } from '@remix-run/react'
import { formatPrecio } from '../helpers'
import styleGuitarra from '../styles/guitarra.css'
import truck from '../../public/img/truck.png'
import box from '../../public/img/box.png'
import { getGuitarra } from '../models/guitarra.server'

export const meta = (params) => {
  return [
    {
      title: `GuitarLA - ${params.data.nombre}`,
      description: "Guitarras - venta de guitarras",
    }
  ]
}

export const links = () => {
  return [{
    rel:'stylesheet',
    href:styleGuitarra
  }]
}


export const loader = async ({params}) => {
  const guitarra = await getGuitarra(params.guitarrasUrl)
 
  if (guitarra.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText:'Guitarra no encontrada'
    });
  }
  
  return guitarra.data[0].attributes
}

const Guitarra = () => {
  const {agregarCarrito} = useOutletContext()
  
  const [cantidad, setcantidad] = useState(0)
  const [animacion, setanimacion] = useState(false)
  const guitarra =  useLoaderData()
  const {nombre, descripcion, precio} = guitarra

 
  const handleSubmit = (e) =>{
    e.preventDefault()
    const guitarraAdd = {
      nombre:guitarra.nombre,
      imagen:guitarra.imagen.data.attributes.formats.medium.url,
      precio:guitarra.precio,
      cantidad
    }
    if (cantidad !== 0 ) {
      agregarCarrito(guitarraAdd)
    }
    
  }

  
  

  const handleAnimacion=() =>{
    setanimacion(true)
    setTimeout(() => {
      setanimacion(false)
    }, 10000);
  }

  return (
    <div className="contenedorGuitarra">
      <div className="contenedorImg">
      <img src={guitarra.imagen.data.attributes.formats.medium.url} alt="imagenGuitarra" />
      </div>
      <div className="contenido">
        <h2>{nombre}</h2>
        <p>{descripcion}</p>
        <p className="precio">{formatPrecio(precio)}</p>
        <form className="formulario" onSubmit={handleSubmit}>
          <label htmlFor='cantidad'>Cantidad</label>
          <select id='cantidad' onChange={(e)=>setcantidad(parseInt(e.target.value))}>
            <option value="">--- Seleccione ---</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <button className={`${animacion ?'btnAddInactivo':'btnAdd'}`}>Agregar al Carrito</button>
        </form >
      
        <div className={`${animacion ? 'imagenes' : 'imagenesInactivas'}`}>
          <img className="imagen imagen-truck" src={truck} alt="truck" />
          <img className="imagen imagen-box" src={box} alt="box" />
        </div>
      </div>
    </div>
  )
}

export default Guitarra
