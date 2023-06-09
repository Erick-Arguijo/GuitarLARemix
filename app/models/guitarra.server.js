
export const getGuitarra = async (guitarra) => {

    const url = `${process.env.API_URL}/guitarras?filters[url]=${guitarra}&populate=imagen`
   
    const peticion = await fetch(url)
    const respuesta = await peticion.json()
    return respuesta
}



export const getBlogs = async () => {
  const url = `${process.env.API_URL}/posts?populate=imagen`
  try {
    const peticion = await fetch(url)
    const respuesta = await peticion.json()
    return respuesta
  } catch (error) {
    console.log(error)
  }
}

export const getBlog = async (urll) => {
  const url = `${process.env.API_URL}/posts?filters[url]=${urll}&populate=imagen`

  try {
    const peticion = await fetch(url)
    const respuesta = await peticion.json()
    return respuesta
  } catch (error) {
    console.log(error)
  }
}


export const getCurso = async () => {
  const url = `${process.env.API_URL}/curso?populate=imagen`
  try {
    const peticion = await fetch(url)
    const respuesta = await peticion.json()
    return respuesta   
  } catch (error) {
    console.log(error)
  }

}


