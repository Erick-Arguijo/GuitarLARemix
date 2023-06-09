import { Link, useLocation, } from '@remix-run/react'
import logo from '../../public/img/logo.svg'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const location = useLocation()
    const [activo, setactivo] = useState(false)

    const handle = () => {
        setactivo(!activo)
        console.log(activo)
    }
    return (
        <header className='header'>
            <div className='contenedor'>
                <Link className='logo'>
                    <img src={logo} alt='logo' />
                </Link>
                
                <div className='controlIcon'>
                    <span onClick={handle} className="material-symbols-outlined" >
                        menu
                    </span>
                </div>

                <div className={`navegacion ${activo ? 'navegacionActiva' :'navegacionInactiva'}` }>
                    <ul>
                        <li>
                            <Link className={`${location?.pathname === '/' ? 'linkSeleccionado' : ''}`}
                                to="/">Inicio</Link>
                        </li>
                        <li>
                            <Link className={`${location?.pathname === '/nosotros' ? 'linkSeleccionado' : ''} `}
                                to="/nosotros">Nosotros</Link>
                        </li>
                        <li>
                            <Link className={`${location?.pathname === '/tienda' ? 'linkSeleccionado' : ''}`}
                                to="/tienda">Tienda</Link>
                        </li>
                        <li>
                            <Link className={`${location?.pathname === '/blog' ? 'linkSeleccionado' : ''}`}
                                to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link className={`${location?.pathname === '/carrito' ? 'linkSeleccionado' : ''}`}
                                to="/carrito">
                                <FontAwesomeIcon icon={faBagShopping} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header