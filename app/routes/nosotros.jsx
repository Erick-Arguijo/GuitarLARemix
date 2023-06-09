import imgNosotros from '../../public/img/nosotros.jpg';

export function meta() {
  return ([{
    title: 'GuitarLA - Nosotros'
  }])
}


const Nosotros = () => {
  
  return (
    <div className='nosotros'>
      <h4>Nosotros</h4>
      <div>{}</div>
      <div className="contenedorNosotros">
        <img src={imgNosotros} alt='nosotros' />
        <div className="contenidoNosotros">
          <p>
            Why do we use it?
            It is a long established that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            
          </p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
          <p>

          </p>

        </div>
      </div>
    </div>
  )
}

export default Nosotros