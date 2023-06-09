import { useLoaderData } from "@remix-run/react"
import { getBlogs } from "../models/guitarra.server"
import style from '../styles/blog.css'
import Posts from "../components/post"


export const links = () => {
  return [{
    rel:"stylesheet",
    href: style
  }]
}


export const meta = () => {
  return [{
    title: 'GuitarLA - Blog',
    description: 'Blog de GuitarLA'
  }]
}


export const loader = async () => {
  const posts = await getBlogs()
  return posts.data
}

const Blog = () => {
  const posts = useLoaderData()

  return (
    <div>
      <h1 className="titulo">Blog</h1>
      <div className="contenedorBlog">
        {
          posts.map(post => 
            <Posts key={post.id} post={post} />
          )
        }
      </div>
    </div>
  )
}

export default Blog