const ContactCard = ({name, phoneNum, imageUrl, quote, address}) => {
    return (
        <div>
            <h2>Name of customer is {name}.</h2>
            <h2>Phone number is {phoneNum}.</h2>
            <h2>Image URL is {imageUrl}.</h2>
            <h2>Quote is {quote}.</h2>
            <h2>Address is {address}</h2>
        </div>
    );
}
 
export default ContactCard;