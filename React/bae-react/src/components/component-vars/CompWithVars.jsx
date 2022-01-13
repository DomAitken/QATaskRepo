const CompWithVars = () => {
    
    let name = "Dom"
    let age = 18
    let height = "6' 1"
    let nationality = "Possibly French (Bonjour Fellas)."
    
    return(
        <div>
        <h2>My name is {name}. I am {age} years old. My height is {height} and I am {nationality}</h2>
        <h4>Bonjour</h4>
        </div>
    )
   
}

export default CompWithVars