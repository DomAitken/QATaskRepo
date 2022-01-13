const SubContactCard = ({name, phoneNum, imageUrl, quote, address}) => {
    console.log(name);
    return ( 
        <div>
            <h2>Animal's name is {name}.</h2>
            <h4>Owner's phone number is {phoneNum}.</h4>
            <h4>Picture of animal: {imageUrl}</h4>
            <h4>Owner's quote about animal: "{quote}".</h4>
            <h4>Owner's address is {address}.</h4>
        </div>
    );
}
 
export default SubContactCard;