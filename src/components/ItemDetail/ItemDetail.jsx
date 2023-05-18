import ItemCount from "../ItemCount/ItemCount"
import Card from 'react-bootstrap/Card';
import './ItemDetail.css'

const ItemDetail = ({id, name, img, categoryId, description, price, stock}) => {
    return (
        
        <Card border="dark"  className="detalles" >
            <Card.Img className="img"  src={img} alt={name} />
            <Card.Body className="contenedor">
                <Card.Title>{name}</Card.Title>
                <Card.Text >
                    <strong>Id:</strong> {id}
                </Card.Text>
                <Card.Text >
                    <strong>Categoría:</strong> {categoryId}
                </Card.Text>
                <Card.Text className="Info">
                    <strong>Precio:</strong> ${price}
                </Card.Text>
                <Card.Text  >
                    <strong>Descripción:</strong>  {description}
                </Card.Text>
                <ItemCount initial={1} stock={stock} onAdd={(quantify) => console.log('Cantidad agregada', quantify)}/>
            </Card.Body>
        </Card>
    )
}

export default ItemDetail