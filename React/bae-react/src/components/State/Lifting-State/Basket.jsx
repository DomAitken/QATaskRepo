const Basket = ({basket}) => {
    return ( 
        <div>
            <h3>Basket</h3>
            {basket.map((product) => {
                console.log(product);
        })}
        </div>
    );
}
 
export default Basket;
