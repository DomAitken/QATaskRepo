const ChildModule = () => {
    return ( 
        <div>
            <link rel="stylesheet" href="ChildModule.css"></link>
            <body>
            <h2>Child Module!</h2>
            <p>System.out.println("Coding is Fun!");</p>
            <img src={require("/Users/domaitken/QATaskRepo/React/bae-react/src/Falcon-Heavy-Launch.jpeg")} alt="I also like Space."></img>
            </body>
        </div>
    );
}

export default ChildModule;