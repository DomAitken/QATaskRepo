import {useState} from 'react';
import Counter from './Counter';
import Display from './Display';

const Manager = () => {

    const [count, setCount] = useState(2);

    console.log(count);
    console.log(typeof count);
    console.log(setCount);

    const printName = () =>{
        console.log("Dom");
    };

    return ( 
        <div>
            <h2> Managers number: {count} </h2>
            <Counter setCount={setCount}/>
            <Display count={count}/>
        </div>
     );
}
 
export default Manager;