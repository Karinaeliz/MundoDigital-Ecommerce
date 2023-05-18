
import { useState } from "react"
import Button from 'react-bootstrap/Button';
import './ItemCount.css'


const ItemCount = ({stock, initial, onAdd}) => {
    const [quantify, setQuantify] = useState(initial)

    const increment = () => {
        if(quantify < stock){
            setQuantify(quantify+1)
        }
    }
    const decrement =() => {
        if(quantify > 1){
            setQuantify(quantify -1)
        }
    }
    return (
    <div className="Counter ms-5">
        <div className="Controls" >
            <Button  variant="outline-dark" onClick={decrement}> - </Button>
            <h4 className="Number">{quantify}</h4>
            <Button variant="outline-dark" onClick={increment}> + </Button>
        </div>
        <div>
            <Button variant="outline-dark" className="mt-5 "  onClick={() => onAdd(quantify)} disabled={stock}> Agregar al carrito</Button>
        </div>
    </div>
    )
}

export default ItemCount