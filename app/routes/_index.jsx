import { getBlogs, getCurso } from "../models/guitarra.server"
import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "../models/guitarras.server";

import guitarrascss from '../styles/guitarra.css'
import indexcss from '../styles/index.css';
import tiendacss from '../styles/tienda.css'
import cursocss from '../styles/curso.css'
import blogcss from '../styles/blog.css'

import ListadoGuitarras from "../components/listadoGuitarras";
import Curso from "../components/curso";
import ListadoBlog from "../components/ListadoBlog";

export const meta = () => {
  return [{
    title: '',
    description: ''
  }]
}


export const links = () => {
  return [{
    rel: 'stylesheet',
    href: guitarrascss
  },
  {
    rel: 'stylesheet',
    href: indexcss
  },
  {
    rel: 'stylesheet',
    href: tiendacss
  },
  {
    rel: 'stylesheet',
    href: cursocss
  },
  {
    rel: 'stylesheet',
    href: blogcss
  }
  ]
}

export const loader = async () => {
  const [guitarras, posts, cursos] = await Promise.all([getGuitarras(), getBlogs(), getCurso()])
  return { guitarras: guitarras.data, posts: posts.data, cursos: cursos.data }
}



const Index = () => {
  const { guitarras, posts, cursos } = useLoaderData()
  


  return (
    <div>
      <ListadoGuitarras guitarras={guitarras}/>
      <Curso curso={cursos}/>
      <ListadoBlog posts={posts} />

    </div>
      

  )
}

export default Index