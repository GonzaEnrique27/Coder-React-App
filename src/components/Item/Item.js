

const Item = ({item}) => {

    return (
        <div>
            <h2>{item.name}</h2>
            <p>{item.marca}</p>
            <p>{item.line}</p>
            <p>{item.model}</p>
            <p>{item.hand}</p>
            <p>{item.matrerialBody}</p>
            <p>{item.color}</p>
            <p>{item.materialFreatboard}</p>
            <p>{item.bodyFinish}</p>
            <p>{item.category}</p>
            <p>{item.stock}</p>
            <img src= {item.image} alt= "imagen" />
            <p>{item.description}</p>
            <h4>Precio: ${item.price}</h4>
            <hr/>
        </div>
    )
}

export default Item