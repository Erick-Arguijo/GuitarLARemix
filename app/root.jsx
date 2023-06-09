import {
    Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload,
    useRouteError,
    Link,
} from '@remix-run/react'
import styles from '~/styles/index.css'
import Header from '~/components/header';
import { Footer } from './components/footer';
import { useEffect, useState } from 'react';

export function meta() {
    return [
        { charset: 'utf-8' },
        { title: 'GuitarLA - Remex' },
        { viewport: "width=device-width,initial-scale=1" }
    ]
}


export function links() {
    return [
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },

        {
            rel: "preconnect",
            href: "https://fonts.googleapis.com"
        },
        {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossOrigin: "true"
        },
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Outfit:wght@400;700;900&family=Roboto:wght@300;500&display=swap"
        },
        {
            rel: 'stylesheet',
            href: styles
        },
        {
            rel: 'stylesheet',
            href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"

        }
    ]
}

export default function App() {

    const [carrito, setcarrito] = useState(JSON.parse(localStorage.getItem('carrito')) || [] )

    useEffect(() => {
      localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])
    

    const agregarCarrito = (guitarra) =>{
        
        if (carrito.some(guitarState => guitarState.nombre === guitarra.nombre)) {
           const actualizacion = carrito.map(element => element.nombre === guitarra.nombre &&
            {...element, cantidad:guitarra.cantidad}  
            )
            setcarrito(actualizacion)
        }else{
            console.log('Agregando nuevo elemento')
            setcarrito([...carrito, guitarra])
        }
    }

    const eliminarCarrito = (elemento) =>{
        const nuevoCarrito = carrito.filter(carrito => carrito.nombre !== elemento.nombre)
        setcarrito(nuevoCarrito)
    }

    const editarCarrito = (elemento) =>{
        const nuevoCarrito = carrito.map(carrito => carrito.nombre === elemento.nombre ? elemento : carrito)
        setcarrito(nuevoCarrito)
    }

    return (
        <Document>
            <Outlet  context={{
                carrito,
                agregarCarrito,
                editarCarrito,
                eliminarCarrito
            }} />
        </Document>
    );
}


function Document({ children }) {
    return (
        <html lang='es'>
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Header />
                {children}
                <Footer />
                <Scripts />
                <LiveReload />

            </body>
        </html>

    )
}


export function ErrorBoundary() {
    const error = useRouteError();

    return (
        <Document>
            <h1>404 {error.statusText}</h1>
    
            <section className="error-container">
                <span className="four"><span className="screen-reader-text">4</span></span>
                <span className="zero"><span className="screen-reader-text">0</span></span>
                <span className="four"><span className="screen-reader-text">4</span></span>
            </section>
            <div className="link-container">
                <Link  to="/" className="more-link">Visite el articulo original</Link>
            </div>
        </Document>
    );
}