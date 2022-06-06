import { PedirDatos } from "../../Mock/PedisDatos"
import { useParams } from "react-router-dom"
import { useEffect, useState} from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { Spinner } from "react-bootstrap"

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()
    console.log(itemId)
    console.log(item)

    useEffect(() => {
        setLoading(true)

        PedirDatos()
            .then((resp) => {
               setItem( resp.find((item) => item.id === Number(itemId)) )
            })
            .catch((error) => {
                console.log('ERROR', error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])



  return (

        <div className="containermy-5">
               
               {
                   loading
                   ?   <Spinner animation="border" role="status">
                           <span className="visually-hidden">Loading...</span>
                       </Spinner>
   
                   :  <ItemDetail items={item}/>
               }
               
           </div>
        
        
      )
    }