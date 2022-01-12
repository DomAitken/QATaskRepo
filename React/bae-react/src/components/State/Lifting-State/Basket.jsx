const Basket = ({basket}) => {
    return ( 
        <div>
            <h3>Basket</h3>
            {basket.map((product) => {
                return <h2>Product: {product.productName} Quantity: {product.quantity}</h2>
            })}
        </div>
    );
}
 
export default Basket;
