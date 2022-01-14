import { useState } from "react";
import Product from "./Product";
import Basket from "./Basket";

const Manager = () => {

    const[productName, setProductName] = useState("");
    const[qty, setQty] = useState(0);

    const[basket, setBasket] = useState([]); 

    const addToBasket = (data) => {
        setBasket((basket) => {
            return [...basket, data]
        });
    };

    return ( 
        <div>
            <h3>Manager</h3>
            <Product setProductName={setProductName} setQty={setQty} addBasket={addToBasket} productName={productName} qty={qty}/>
            <Basket basket={basket}/>
        </div>
    );
};
 
export default Manager;