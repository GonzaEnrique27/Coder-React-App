import React from 'react'
import { useNavigate } from "react-router-dom"

    const ItemDetail = ({item}) => {

        const navigate = useNavigate()
    
        const handleVolver = () => {
            navigate(-1)
        }

  return (
    <div>    
    <p> <b>Marca:</b> {item.marca} </p>
    <p><b>Linea:</b> {item.line} </p>
    <p> <b>Modelo:</b> {item.model} </p>
    <p><b>Orientacion de la mano:</b> {item.hand} </p>
    <p><b>Color:</b> {item.color} <br/> </p>
    <p><b>Tipo de madera del cuerpo:</b> {item.materialBody} </p>
    <p><b> Material del diapason:</b>{item.materialFretboard} </p>
    <p><b>Acabado del cuerpo:</b> { item.bodyFinish } </p>
    <button onClick={handleVolver}>VOLVER</button>
    </div>
  )
}

export default ItemDetail

