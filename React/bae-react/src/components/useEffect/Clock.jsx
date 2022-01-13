import {useEffect, useState} from 'react';

const Clock = () => {

    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const[start, setStart] = useState(false);

    useEffect(() => {
        setTimeout(tick, 1000);
    }, [start]);

    const tick = () => {
        setTime(new Date().toLocaleTimeString());
    }

    // tick();

    return ( 
        <div>
            <h3>Clock!</h3>
            <h4>Time is {time}</h4>
            <button type='button' onClick={(() => setStart(!start))}>Click me to update the clock!</button>
        </div>
     );
}
 
export default Clock;