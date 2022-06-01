import React from 'react'
import {useEffect, useState} from 'react'
import './itemListContainer.css'
import {PedirDatos} from '../../Mock/PedisDatos'
import ItemList from '../ItemList/ItemList'
import { Spinner } from "react-bootstrap"

function ItemListContainer ()  {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      setLoading(true)

      PedirDatos()
          .then((resp) => {
              setItems( resp )
          })
          .catch((error) => {
              console.log('ERROR', error)
          })
          .finally(() => {
              setLoading(false)
          })
  }, [])
  
  
   return (
     <div className='ctn-products'> 
     <h2 className='itm-titulo'> NUESTROS PRODUCTOS</h2>
     <hr/>
     <div className="containermy-5">
            
            {
                loading
                ?   <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>

                :  <ItemList items={items}/>
            }
            
        </div>
     
     </div>
     
   )
 }
   
 export default ItemListContainer