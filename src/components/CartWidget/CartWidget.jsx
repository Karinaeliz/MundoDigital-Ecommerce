import imgCarrito from './assest/imgCarrito.png'



const CartWidget = () => {
    
    return (
        <div >
            <img  src={imgCarrito} className='rounded-circle' alt="Carrito de Compras"  width="55"
                height="55"  /> 
            <strong className="text-bg-dark p-4">0</strong>
        </div>
    )
}

export default CartWidget