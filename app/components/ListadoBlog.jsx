import React from 'react'
import Posts from './post'

const ListadoBlog = ({posts}) => {
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

export default ListadoBlog