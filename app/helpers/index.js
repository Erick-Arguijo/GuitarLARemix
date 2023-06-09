

export const formatPrecio = (precio) => {
    const format = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(precio);
    return format
}


export const formatFecha = (fecha) => {
    const data = new Date(fecha)
    const formato = data.toLocaleDateString('es-ES', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 
    return formato
  }

 
  export const calacularTotal = (carrito) => {
    console.log(carrito) 
    const total = carrito.reduce((total, obj)=> total + (obj.precio* obj.cantidad) , 0)
     return formatPrecio(total)
  }
  
  
