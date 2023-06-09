
import { useLoaderData } from '@remix-run/react'
import { getGuitarras } from '../models/guitarras.server'
import styleTienda from '../styles/tienda.css'
import Card from '../components/card'

export const meta = () => {
  return [{
    title: 'GuitarLA - Tienda de Guitarras',
    description: 'GuitarLa - Nuestra coleccion de guitarras'
  }
  ]
}

export const links = () => {
  return [
    {
      rel: "stylesheet",
      href: styleTienda,
    },
  ]}

export const loader = async () =>{
    const guitarras = await getGuitarras()
    return guitarras
  
  }

const Tienda = () => {
  const {data} = useLoaderData()

  return (

    <div className='contenedorTienda'>
      <h4>Nuestra Colección</h4>
      <div className='contenidoTienda'>
        {data.map(guitarra =>
          <Card key={guitarra.id} guitarra={guitarra} />
        )}
      </div>

    </div>

  )
}

export default Tienda
