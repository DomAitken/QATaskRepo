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

            console.log(response.data);

            response.data.map((beer) => {
                console.log(beer);
            })
            // setBeerData(response)
            // console.log(response.data[11].name)
            // console.log("===========================");
            // console.log(response.data.name);
            // console.log(beerData);

            response.data.results.map((character) => {
                console.log(character);
                console.log(character.name);
            });
        })
        .catch((error) => {
            setLoaded(true);
            setError(error);
        });

    };

    useEffect(getData(), [beerData]);

    return ( 
        <div>
            <h4>{beerData}</h4>
        </div>
    );
}

export default Bar;
