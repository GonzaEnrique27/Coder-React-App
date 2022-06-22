import { useParams } from "react-router-dom"
import { useEffect, useState} from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { Spinner } from "react-bootstrap"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config"

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()
    console.log(itemId)
    console.log(item)

    useEffect(() => {
        setLoading(true)
        // 1.- armar la referencia
        const docRef = doc(db, "123456", itemId)


       getDoc(docRef)     
            .then((doc) => {
               setItem( {id: doc.id, ...doc.data()} )
            })
            .catch((error) => {
                console.log('ERROR', error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])



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