import { useEffect } from 'react';

const Greet = ({name}) => {

    name = "Dom";

    const message = `Hello, ${name}!`;

    useEffect(() => {
        console.log(`Running useEffect ${name}`);
        document.title = `Oh hey there ${name}`; 
    }, [name]);

    return <div>{message}</div>;
}

export default Greet;