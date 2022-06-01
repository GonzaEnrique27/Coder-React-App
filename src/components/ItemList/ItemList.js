import Item from "../Item/Item"
import './itemList.css'

const ItemList = ( {items} ) => {

    return (
        <div className="items-card">
            {
                items.map((item) => <Item key={item.id} item={item}/>)
            }
        </div>
    )
}

export default ItemList