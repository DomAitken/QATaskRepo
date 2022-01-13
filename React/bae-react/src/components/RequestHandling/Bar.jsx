import { useEffect, useState } from "react";
import axios from 'axios';

const Bar = () => {

    const [beerData, setBeerData] = useState("");

    const [error, setError] = useState(null);

    const [loaded, setLoaded] = useState(false);

    const getData = () => {

        console.log(beerData);

        axios.get(`https://api.punkapi.com/v2/beers`)

        .then((response) => {
            setLoaded(true);

            console.log(response);
            setBeerData(response.data)
            console.log("===========================");
            console.log(response.data);
            console.log(beerData);
        })
        .catch((error) => {
            setLoaded(true);
            setError(error);
        });
    };

    useEffect(getData(), [beerData]);

    return ( 
        <div>

        </div>
    );
}

export default Bar;
