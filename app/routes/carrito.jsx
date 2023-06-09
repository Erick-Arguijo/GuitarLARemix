
import { useOutletContext } from '@remix-run/react'
import carritocss from '../styles/carrito.css'
import CardPedido from '../components/cardPedido'
import { calacularTotal } from '../helpers'

export const links = () => {
  return [{
    rel: 'stylesheet',
    href: carritocss
  }]
}

export const meta = () => {
  return [{
    title: 'GuitarLA - Carrito de Compras',
    description: 'Venta de guitarras, musica, blog, carrito de compras'
  }]
}


const Carrito = () => {
  const { carrito } = useOutletContext()

  return (
    <main className='contenedorCarrito'>
      <h1 className="heading">Carrito de Compras</h1>
      <div className="contenido">
        <div className="carrito">
          <h2 className='titulo'>Articulos</h2>
          {carrito?.length !== 0 ?
            <div className="carritoPedido">
              {
                carrito.map(pedido => <CardPedido key={pedido.nombre} pedido={pedido} />)
              }
            </div>
            :
            <div className="carritoPedido">
              <p className='sinResultados'>No se encontraron resultados
                <span>Agregué al carrito para ver los resultados aqui</span>
              </p>
            </div>
          }
        </div>
        <aside className="resumen">
          <h3>Resumen del pedido</h3>
          {carrito.length !== 0 ?
            <div>
              <p>SubTotal: (cantidad de Productos: {carrito.length})
                <span>{calacularTotal(carrito)}</span>
              </p>
              <button>Proceder el pago</button>
            </div>
            :
            <div>
              <p>SubTotal: (cantidad de Productos: {carrito.length})
                <span>{calacularTotal(carrito)}</span>
              </p>
  
            </div>
          }
        </aside>
      </div>
    </main>
  )
}

export default Carrito