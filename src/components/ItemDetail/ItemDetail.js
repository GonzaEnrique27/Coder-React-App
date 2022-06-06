import React from 'react'
import { useNavigate } from "react-router-dom"


    const ItemDetail = ({items}) => {

        const navigate = useNavigate()
    
        const handleVolver = () => {
            navigate(-1)
        }

  return (
    <div>    
    <p> {items?.marca}</p>
    <p><b>Linea:</b> {items?.line} </p>
    <p> <b>Modelo:</b> {items?.model} </p>
    <p><b>Orientacion de la mano:</b> {items?.hand} </p>
    <p><b>Color:</b> {items?.color} <br/> </p>
    <p><b>Tipo de madera del cuerpo:</b> {items?.materialBody} </p>
    <p><b> Material del diapason:</b>{items?.materialFretboard} </p>
  <p><b>Acabado del cuerpo:</b> { items?.bodyFinish } </p>
    <button onClick={handleVolver}>VOLVER</button>
    </div>
  )
}

export default ItemDetail

