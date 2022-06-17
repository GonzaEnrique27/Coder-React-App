import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { CartContext } from '../../Context/CartContext'
import "./ItemDetail.css"
import {Link} from "react-router-dom"
import Counter from "../Counter/Counter"


    const ItemDetail = ({items}) => {

        const {addItem, isInCart} = useContext (CartContext)

        const [cantidad, setCantidad] = useState(1)

        const navigate = useNavigate()
    
        const handleVolver = () => {
            navigate(-1)
        }

        const handleAgregar = () =>{
            const itemToCart = {
                ...items,
                cantidad
            }

            addItem(itemToCart)
        }
 
  return (   
<div className="details-div">
                <section className="product-view">
                    <h1>{items.name} </h1>
                    <div className="product-view-container">
                        <div className="img-container">
                        <img src= {items?.image} alt= "" />
                        </div>
                        <div className="details-description">
                            <div>
                                <p>
                                    ${items.price} 
                                    <svg width="25" height="21" viewBox="0 0 25 21" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12.1556 1.96161L12.6787 2.52411L13.2442 1.96255C14.8229 0.432081 17.0096 -0.264479 19.1585 0.0913015C22.4055 0.629425 24.7854 3.4241 24.7854 6.70065V6.97253C24.7854 8.91783 23.9748 10.7788 22.5422 12.1053L14.0265 20.0131C13.673 20.3412 13.2065 20.524 12.7211 20.524C12.2357 20.524 11.7691 20.3412 11.4157 20.0131L2.89948 12.1053C1.46872 10.7788 0.656738 8.91783 0.656738 6.97253V6.70065C0.656738 3.4241 3.03756 0.629425 6.28362 0.0913015C8.39016 -0.264479 10.6192 0.432082 12.1556 1.96161ZM12.6787 5.70691L10.558 3.51316C9.53533 2.53723 8.08384 2.07411 6.65592 2.31036C4.49989 2.66801 2.9188 4.52566 2.9188 6.70065V6.97253C2.9188 8.2944 3.47065 9.56002 4.44286 10.46L12.7211 18.1475L21.0012 10.46C21.972 9.56002 22.5233 8.2944 22.5233 6.97253V6.70065C22.5233 4.52566 20.9399 2.66801 18.7862 2.31036C17.3583 2.07411 15.9068 2.53723 14.8842 3.51316L12.6787 5.70691Z"
                                            fill="#980101" />
                                    </svg>
                                </p>

                                <p>
                                    cuotas sin interes
                                    <svg width="24" height="17" viewBox="0 0 20 15" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.24961 10.1786C6.69068 10.1786 7.04552 10.5368 7.04552 10.9821C7.04552 11.4275 6.69068 11.7857 6.24961 11.7857H4.65778C4.21672 11.7857 3.86187 11.4275 3.86187 10.9821C3.86187 10.5368 4.21672 10.1786 4.65778 10.1786H6.24961ZM12.6169 10.1786C13.058 10.1786 13.4128 10.5368 13.4128 10.9821C13.4128 11.4275 13.058 11.7857 12.6169 11.7857H8.90265C8.46158 11.7857 8.10674 11.4275 8.10674 10.9821C8.10674 10.5368 8.46158 10.1786 8.90265 10.1786H12.6169ZM17.6577 0C18.8283 0 19.7801 0.959263 19.7801 2.14286V12.8571C19.7801 14.0391 18.8283 15 17.6577 15H2.80066C1.62834 15 0.678223 14.0391 0.678223 12.8571V2.14286C0.678223 0.959263 1.62834 0 2.80066 0H17.6577ZM17.6577 1.60714H2.80066C2.50749 1.60714 2.27005 1.84687 2.27005 2.14286V3.21429H18.1883V2.14286C18.1883 1.84687 17.9495 1.60714 17.6577 1.60714ZM18.1883 6.42857H2.27005V12.8571C2.27005 13.1518 2.50749 13.3929 2.80066 13.3929H17.6577C17.9495 13.3929 18.1883 13.1518 18.1883 12.8571V6.42857Z"
                                            fill="black" />
                                    </svg>
                                </p>

                                <p>
                                    Envio gratis
                                    <svg width="26" height="20" viewBox="0 0 26 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5.06057 0C4.01947 0 3.17551 0.839451 3.17551 1.87499V3.74999H1.29046C0.943414 3.74999 0.662109 4.03124 0.662109 4.37499C0.662109 4.71874 0.943414 4.99998 1.29046 4.99998H11.3441C11.6897 4.99998 11.9724 5.28123 11.9724 5.62498C11.9724 5.96873 11.6897 6.24998 11.3441 6.24998H2.54716C2.2 6.24998 1.91881 6.53123 1.91881 6.87498C1.91881 7.21873 2.2 7.49998 2.54716 7.49998H10.0874C10.433 7.49998 10.7157 7.78123 10.7157 8.12498C10.7157 8.46872 10.433 8.74997 10.0874 8.74997H1.29046C0.943414 8.74997 0.662109 9.03122 0.662109 9.37497C0.662109 9.71872 0.943414 9.99997 1.29046 9.99997H8.83067C9.17626 9.99997 9.45902 10.2812 9.45902 10.625C9.45902 10.9687 9.17626 11.25 8.83067 11.25H3.17551V16.25C3.17551 18.3203 4.82886 19.9999 6.94562 19.9999C9.02703 19.9999 10.7157 18.3203 10.7157 16.25H15.7425C15.7425 18.3203 17.3959 19.9999 19.5126 19.9999C21.594 19.9999 23.2827 18.3203 23.2827 16.25H24.5394C25.2346 16.25 25.7961 15.6914 25.7961 15C25.7961 14.3086 25.2346 13.75 24.5394 13.75V9.2695C24.5394 8.60544 24.2763 7.96873 23.8051 7.49998L20.7693 4.48045C20.2627 4.01171 19.6579 3.74999 18.9903 3.74999H16.9992V1.87499C16.9992 0.839451 16.1549 0 15.1142 0H5.06057ZM22.026 9.2695V9.99997H16.9992V6.24998H18.9903L22.026 9.2695ZM6.94562 18.1249C5.90491 18.1249 5.06057 17.2851 5.06057 16.25C5.06057 15.2148 5.90491 14.375 6.94562 14.375C7.98632 14.375 8.83067 15.2148 8.83067 16.25C8.83067 17.2851 7.98632 18.1249 6.94562 18.1249ZM21.3977 16.25C21.3977 17.2851 20.5533 18.1249 19.5126 18.1249C18.4719 18.1249 17.6276 17.2851 17.6276 16.25C17.6276 15.2148 18.4719 14.375 19.5126 14.375C20.5533 14.375 21.3977 15.2148 21.3977 16.25Z"
                                            fill="black" />
                                    </svg>
                                </p>
                            </div>
                            <div className="btns-container">
                                <div className="btn-container">
                                    <Link className="btn-container" to="/cart">
                                        <input className="btn-style" type="button" value="Comprar"/>
                                    </Link>
                                </div>
                               
                                <div className="btn-container">
                                {isInCart(items.id) ?
                                    <Link className="btn-container" to="/">
                                        <input className="btn-style" type="button" value="Agregar al carrito"/>
                                    </Link> 
                                    :
                                    <Counter 
                                    max={items.stock}
                                    counter={cantidad}
                                    setCounter={setCantidad}
                                    handleAgregar={handleAgregar}
                                />
                                                  }
                                </div>
                            </div>

                        </div>

                    </div>

                </section>
                <section className="features-product">
                    <div className="features-container">
                        <div className="new-products-separador"></div>
                        <h2>Caracteristicas principales</h2>
                        <div className="features-details">
                                <p> <b>Marca:</b> { items.marca } </p>
                                <p><b>Linea:</b> {items.line} </p>
                                <p> <b>Modelo:</b> {items.model} </p>
                                <p><b>Orientacion de la mano:</b> {items.hand} </p>
                                <p><b>Color:</b> {items.color} <br/></p>
                                <p><b>Tipo de madera del cuerpo:</b> {items.materialBody} </p>
                                <p><b> Material del diapason:</b> {items.materialFretboard} </p>
                                <p><b>Acabado del cuerpo:</b> {items.bodyFinish} </p>
                        </div>
                    </div>

                    <h2>Descripcion</h2>
                    <div className="features-details description-product">

                        <p>
                           {items.description} 
                        </p>
                    </div>
                </section>
              
    </div>
  )
}

export default ItemDetail

