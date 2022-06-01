import './item.css'

const Item = ({item}) => {

    return (
        <div>
           <div className="card">
          <div className="imgBox">
          <img src= {item.image} alt= "" />
          </div>
          
          <div className="contentBox">
              <h3>{item.marca} {item.model} </h3>
              <h2 className="price">${item.price}</h2>
              <a href="#" className="buy">comprar ahora</a>
              <a href="#" className="buy">detalle</a>
          </div> 
        </div>
        </div>
    )
}

export default Item