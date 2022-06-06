import React from 'react'
import {useEffect, useState} from 'react'
import './itemListContainer.css'
import {PedirDatos} from '../../Mock/PedisDatos'
import ItemList from '../ItemList/ItemList'
import { Spinner } from "react-bootstrap"
import { useParams } from "react-router-dom"

export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)


    // const params = useParams()
    const { categoryId } = useParams()
    console.log(categoryId)


    useEffect(() => {
        setLoading(true)

        PedirDatos()
            .then((resp) => {
                if (!categoryId) {
                    setItems( resp )
                } else {
                    setItems( resp.filter((item) => item.categoria === categoryId) )
                }
            })
            .catch((error) => {
                console.log('ERROR', error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])
  
  
   return (

     <div className="ctn-products">
            
            {
                loading
                ?   <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>

                :  <ItemList items={items}/>
            }
            
        </div>
     
     
   )
 }
   
 export default ItemListContainer