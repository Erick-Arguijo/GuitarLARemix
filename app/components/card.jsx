import { Link } from "@remix-run/react"
import { formatPrecio } from "../helpers"


const Card = ({guitarra}) => {
    const guitar = guitarra.attributes
 
   
    
  return (
    <div className="card">
        <div className="imagenGuitarra">
            <img src={guitar.imagen.data.attributes.formats.medium.url} alt='img' />
        </div>
        <div className="contenidoCard">
            <p className="titulo">{guitar.nombre}</p>
            <p className="descripcion">{guitar.descripcion}</p>
            <p className="precio">{formatPrecio(guitar.precio)}</p>
        </div>
        
            <Link to={`/guitarras/${guitar.url}`} className="button type1">
                <span className="btn-txt">Ver Producto</span>
            </Link>
        
    </div>
  )
}

export default Card