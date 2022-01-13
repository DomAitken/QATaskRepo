import { useEffect, useState } from "react";
import axios from 'axios';

const Bar = () => {

    const [beerData, setBeerData] = useState([]);

    const [error, setError] = useState(null);

    const [loaded, setLoaded] = useState(false);

    useEffect();

    const getData = () => {
        axios.get('/https://api.punkapi.com/v2/beers')
        .then((response) => {
            setLoaded(true);
            
            console.log(response);
            setBeerData(response);
        });
    }
        
    return ( 
        <div>

        </div>
    );
}

export default Bar;
<div>

</div>