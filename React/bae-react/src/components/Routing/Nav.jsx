import {useParams, Link} from 'react-router-dom';

const Nav = () => {

    const{id} = useParams();

    const getId = (data) => {
        getId(data.target.value);
    };

    return ( 
        <div>
            <h3>Nav</h3>
            <Link to="/about">
                <h4>About</h4>
                {/* <button type='button'>About</button> */}
            </Link>

            <Link to="/shop">
                <h4>Shop</h4>
                <input type="text" name="my-name" onChange={(event) => getId(event)}/> 
                <button type='button' path='/shop/:id' exact element={id} onClick={(() => getId(id))}>Click me to go to the product!</button>
                {/* <button type='button'>Shop</button> */}
            </Link>

            <Link to="/">
                <h4>Home</h4>
                {/* <button type='button'>Home</button> */}
            </Link>

            <Link to="/forum">
                <h4>Forum</h4>
                {/* <button type='button'>Forum</button> */}
            </Link>

            <Link to="/checkout">
                <h4>Checkout</h4>
                {/* <button type='button'>Checkout</button> */}
            </Link>

        </div>
    );
}

export default Nav;