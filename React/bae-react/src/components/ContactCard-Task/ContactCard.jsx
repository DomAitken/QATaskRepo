const ContactCard = ({name, phoneNum, imageUrl, quote, address}) => {
    return (
        <div>
            <h4>Name of customer is {name}, Phone number is {phoneNum}, Image of pet: {imageUrl}, Quote is {quote}, Address is {address}.</h4>
            {/* <h4>Phone number is {phoneNum}.</h4>
            <h4>Image URL is {imageUrl}.</h4>
            <h4>Quote is {quote}.</h4>
            <h4>Address is {address}</h4> */}
        </div>
    );
}
 
export default ContactCard;