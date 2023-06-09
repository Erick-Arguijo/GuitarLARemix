import { useLoaderData, Links } from "@remix-run/react";
import { getBlog } from '../models/guitarra.server'
import  style from '../styles/blog.css'
import { formatFecha } from "../helpers";


export const links = () => {
  return [{
    rel:"stylesheet", 
    href:style
  }]
}


export const loader = async ({params}) => {
  const post = await getBlog(params.blogUrl)
  if (post.data.length === 0) {
    throw new Response("Not Found", {
      status: 404,
      statusText:'Blog no encontrado'
    });
     
  }

  return post.data[0].attributes
}


export const meta = ({data}) => {

   if (!data) {
    return [{
      title: 'GuitarLA - Blog no encontrado'
    }]
   }

   return [{
    title: `GuitarLA - ${data.titulo}`
   }]

}



const Curso = () => {
  const post = useLoaderData()
  const {titulo, updatedAt,contenido,imagen  } = post 
  
  return (
    <div className="blog">
      <h1 className="titulo">{titulo}</h1>
      <img className="imagen" src={imagen.data.attributes.formats.medium.url} alt='img'/>
      <p className='actualizacion'>{formatFecha( updatedAt)}</p>
      <p className="contenido2">{contenido}</p>

    </div>
  )
}

export default Curso