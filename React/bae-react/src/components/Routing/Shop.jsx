import { useParams } from "react-router-dom";

const Shop = () => {

    const{id} = useParams();

    const getId = (data) => {
        getId(data.target.value);
    }

    return ( 
        <div>
            {/* <h3>Shop page of id: {id}</h3> */}
            <input type="text" name="my-name" onChange={(event) => getId(event)}/> 
            <button type='button' path='/shop/:id' exact element={id} onClick={(() => getId(id))}>Click me to go to the product!</button>
        </div>
    );
}

export default Shop;