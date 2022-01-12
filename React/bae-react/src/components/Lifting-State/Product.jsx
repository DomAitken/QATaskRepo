const Product = ({setProductName, setQty, addBasket, productName, qty}) => {

    const add = () => {
        const order = {
            productName : productName,
            quantity : qty
        }
        addBasket(order);
    };

    return ( 
        <div>
            <h3>Product</h3>
            <h4>Product Name</h4>
            <input type="text" name="product" onChange={(e) => setProductName(e.target.value)}/>
            <br></br>
        
            <h4>Product Quantity</h4>
            <input type="number" name="quantity" onChange={(e) => setQty(e.target.value)}/>
        
            <button type="button" onClick={add}>Add to Basket!</button>
        </div>
     );
}
 
export default Product;
