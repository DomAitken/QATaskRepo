import Child from "./Child"

const Parent = () => {

    const arrayFruits = ["Kiwi, Strawberry, Blueberry, Jackfruit, Mango"];

    return ( 
        <Child array={arrayFruits}/>
    );
};
 
export default Parent;

