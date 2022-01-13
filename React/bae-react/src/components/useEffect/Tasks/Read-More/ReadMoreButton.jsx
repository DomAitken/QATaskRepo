import { useState } from 'react';

const HideText = ({text,maxLength}) => {
    const [hidden, setHidden] = useState(true);

    if(text.length <=maxLength){
        return <span>{text}</span>
    }

    return ( 
        <span>
            {hidden ? `${text.substr(0,maxLength).trim()}...` : text}
            {hidden ? (
                <button type='button' onClick={() => setHidden(false)}>Read More</button>
            ) : (
                <button type='button' onClick={() => setHidden(true)}>Read Less</button>
            )}
        </span>
    );
}

export default HideText;