import { useState } from "react";
import Product from "./Product";

const SearchTable = () => {
    
    const [query, setQuery] = useState("");

    const listOfProducts = [
        {
            name : "ball",
            quantity: 5,
            cost : 10
        },
        {
            name : "frisbee",
            quantity: 2,
            cost : 10
        }, 
        {
            name : "skipping rope",
            quantity: 1,
            cost : 10
        }, 
        {
            name : "slide",
            quantity: 27,
            cost : 10
        }, 
        {
            name : "tennis ball",
            quantity: 3,
            cost : 15
        },  
    
    ]

    return ( 
        <div>
            <input type="text" name="product" onChange={(event) => setQuery(event.target.value)}/>

            {listOfProducts.map((product, i) => {
                if(product.name === query){
                    return <Product product={product}/>
                }
            })}
        </div>
     );
}
 
export default SearchTable;