import {useEffect, useState} from 'react';
import HookChild from './HookChild';

const HookParent = () => {

    const [name, setName] = useState("");

    useEffect(() => {
        document.title = name;
    }, [name]);

    return ( 
        <div>
            <HookChild setName={setName} name={name}/>
        </div>
    );
}

export default HookParent;