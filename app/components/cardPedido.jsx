import React from 'react'
import { formatPrecio } from '../helpers'
import { useOutletContext } from '@remix-run/react'


const CardPedido = ({ pedido }) => {
    const { nombre, imagen, precio, cantidad } = pedido
    const {editarCarrito, eliminarCarrito}= useOutletContext()
    const handleChange = (e) => {
        console.log(e.target.value)
    }

    return (
        <div className='contenedorCardPedido'>
            <div>
                <img className='cardImagen' src={imagen} alt='img' />
            </div>
            <div className='contenidoCardPedido'>
                <h2>{nombre}</h2>
                <p className='disponible'>Disponible</p>
                <p className='precio'>
                    Precio: 
                    <span>{formatPrecio(precio * cantidad)}</span>
                </p>
                <select value={cantidad} onChange={(e)=> editarCarrito({...pedido, cantidad:parseInt(e.target.value)})}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button className="Btn" onClick={()=>eliminarCarrito(pedido)}>
                    <div className="sign">
                        <span className="icon material-symbols-outlined">
                            delete
                        </span>
                    </div>
                    <div className="text">Eliminar</div>
                </button>
            </div>
        </div>
    )
}

export default CardPedido