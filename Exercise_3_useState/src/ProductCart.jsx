

import './app.css'


const ProductCart = ({idx,data,children}) => {
    const {title, price, picture} = data

  return (
    <div key={idx}>
        
        <div>
            <img src={picture} alt="photo" className='image'></img>
            <h1>{title}</h1>
            <h3>Rs.{price}</h3>
            {children}
            
        </div>
    </div>
  )
}

export default ProductCart