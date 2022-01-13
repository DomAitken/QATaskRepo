import {useEffect, useState} from 'react';

const Clock = () => {

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        setTimeout(tick, 1000);
    })

    const tick = () => {
        setTime(new Date().toLocaleTimeString());
    }

    // tick();

    return ( 
        <div>
            <h3>Clock!</h3>
            <h4>Time is {time}</h4>
        </div>
     );
}
 
export default Clock;