import { useState } from "react";

const ControlledInput = () => {

    const [username, setUsername] = useState("");

    let tempUser;

    return ( 
        <div>
            <h3> Form </h3>
            <input type="text" name="username"

            onChange={(event) => {
                console.log(event.target);
                tempUser = event.target.value;
                console.log(tempUser);
            }
            }/>

            <button type="button" onClick={() => {
                setUsername(tempUser);
            }} />

            <h3> The username: {username} </h3>
        </div>
     );
}
 
export default ControlledInput;