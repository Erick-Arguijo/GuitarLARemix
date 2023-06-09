import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { Link, useLocation } from '@remix-run/react'
import { useState } from 'react'

export const Footer = () => {
    const location = useLocation()


    return (
        <div className="footer">
            <div className='navegacion'>
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
                </ul>
            </div>

            <div className='derechosAutor'>
                <h4>Todos los derechos reservados {new Date().getFullYear()}</h4>
            </div>

            <div className='redes'>
                <h2>Contacto</h2>
                <ul className="wrapper">
                    <Link to='https://www.facebook.com/' target="_blank">
                        <li className="icon facebook">
                            <span className="tooltip">Facebook</span>
                            <span><FontAwesomeIcon icon={faFacebook} /></span>
                        </li>
                    </Link>
                    <Link to='https://www.twitter.com/' target="_blank">
                        <li className="icon twitter">
                            <span className="tooltip">Twitter</span>
                            <span><FontAwesomeIcon icon={faTwitter} size="sm" /></span>
                        </li>
                    </Link>
                    <Link to='https://www.instagram.com/' target="_blank">
                        <li className="icon instagram">
                            <span className="tooltip">Instagram</span>
                            <span><FontAwesomeIcon icon={faInstagram} /></span>
                        </li>
                    </Link >
                    <Link to='https://www.tiktok.com/' target="_blank">
                        <li className="icon tiktok">
                            <span className="tooltip">TikTok</span>
                            <span><FontAwesomeIcon icon={faTiktok} /></span>
                        </li>
                    </Link>
                </ul>

            </div>
        </div>
    )
}
