import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom" 
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const { idItem } = useParams()
    useEffect(()=>{
        getProductById(idItem)
        .then(response=> setProduct(response)
        )
    }, [idItem])

    return (
        <div className='ItemDetailContainer ' >
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer