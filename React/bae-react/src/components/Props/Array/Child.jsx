import SubChild from "./SubChild";

const Child = (props) => {

    const fruitArray = props.array;
    console.log(fruitArray);

    return (
        <div> 
            {fruitArray.map((fruit, i) => <SubChild key={i} fruit={fruit}/> )} 
        </div>
    );
}
 
export default Child;