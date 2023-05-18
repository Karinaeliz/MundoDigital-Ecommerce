import { useEffect, useState } from 'react'
import {getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'


const ItemListContainer = ({ greeting}) => { 
        const [products, setProducts] = useState([]);
        const { categoryId } = useParams();
        
        useEffect(()=>{
            const funcionProducts = categoryId ? getProductsByCategory : getProducts;
            funcionProducts(categoryId)
                .then(response=> setProducts(response))
                .catch(error => console.error(error))
        }, [categoryId])

    
    return (
        
        <section  className='container'>
            <div>
                <h2>{greeting}</h2>
                <ItemList className="productos" products={products}/>
            </div>
        </section>
    )
}

export default ItemListContainer