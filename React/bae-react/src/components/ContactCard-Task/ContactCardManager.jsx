import ContactCard from "./ContactCard";

const ContactCardManager = () => {
    return ( 
        <div>
            <ContactCard name="Dom" phoneNum="0191 5674303" imageUrl="https://dawnofthedawg.com/wp-content/uploads/usat-images/2016/04/9517818-ncaa-football-north-carolina-vs-georgia.jpeg" quote="This is uga, the University of Georgia mascot." address="1 Championship Way, GA"/>
            <ContactCard name="Matt" phoneNum="0191 5674404" imageUrl="https://cdn.vox-cdn.com/thumbor/YSYr4PUd7-goxhcCol_GUWbl1CU=/0x127:5110x3534/1200x800/filters:focal(0x127:5110x3534)/cdn.vox-cdn.com/uploads/chorus_image/image/47066208/usa-today-8309330.0.jpg" quote="This is another mascot, for Mississipi State." address="7 Not So Championship Way, MS"/>
            <ContactCard name="Big Pete" phoneNum="0191 9742398" imageUrl="https://cdn.vox-cdn.com/thumbor/p9VTFwHCj9zsLtnYPwAbZx-ln4M=/0x424:3647x2855/1200x800/filters:focal(0x424:3647x2855)/cdn.vox-cdn.com/uploads/chorus_image/image/27760659/179121133.0.jpg" quote="This is a good boi." address="99 Good Boi Lane, UK"/>
            <ContactCard name="Mike" phoneNum="0191 2378954" imageUrl="https://www.veterinarypracticenews.com/wp-content/uploads/2021/02/SA_Bulldogs.jpg" quote="Good Boi rating: 100/10 Good Boi." address="4 Cowboys Way, TX"/>
            <ContactCard name="Zeke" phoneNum="0191 4368563" imageUrl="https://images.saymedia-content.com/.image/MTcxMzY5NDYwMzI0NjQwNzUw/usatsi_13542376.jpg" quote="MORE UGA JUST LOOK AT THAT FACE." address="1 Championship Way, GA"/>
        </div>
    ); 
}
 
export default ContactCardManager;