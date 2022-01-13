import { useParams } from "react-router-dom";

const Shop = () => {

    const{id} = useParams();

    return ( 
        <div>
            <h3>Shop page of id: {id}</h3>
        </div>
    );
}

export default Shop;