import { Link } from '@remix-run/react'
import React from 'react'
import { formatFecha } from '../helpers/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Posts = ({post}) => {
    
    const {titulo, contenido,updatedAt,url} = post.attributes
  
    return (
    <div className="post">
        <img src={post.attributes.imagen.data.attributes.formats.medium.url} alt={post.nombre}/>
        <div className="contenidoPost">
            <h2>{titulo}</h2>
            <div className='contenedorData'>
                <p>{formatFecha(updatedAt)}</p>
                <p className='contenido'>{contenido}</p>
                <Link className='enlace' to={`/posts/${url}`}>
                    Ver mas
                    <span>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Posts