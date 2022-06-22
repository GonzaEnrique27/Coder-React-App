import React from 'react'
import {useEffect, useState} from 'react'
import './itemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { Spinner } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/config"

export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)


    // const params = useParams()
    const { categoryId } = useParams()


    useEffect(() => {
        setLoading(true)
        
        // 1.- armar la referencia
        const productosRef = collection(db, "123456")
        const q = categoryId ? query(productosRef, where("category", "==", categoryId)) : productosRef
        // 2.- (async) llamar a Firebase con la referencia anterior
        getDocs(q)
            .then((resp) => {
                const newItems = resp.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                console.log(newItems)
                setItems( newItems )
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