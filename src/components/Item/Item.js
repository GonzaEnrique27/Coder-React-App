import './item.css'
import { Link } from "react-router-dom"

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
              <Link to={`/item/${item.id}`} className="buy">comprar ahora</Link>
          </div> 
        </div>
        </div>
    )
}

export default Item