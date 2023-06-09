
export const getGuitarras =  async () => {
    const url = `${process.env.API_URL}/guitarras?populate=imagen`
    const peticion = await fetch(url)
    const respuesta = await peticion.json()
    return respuesta 
}



