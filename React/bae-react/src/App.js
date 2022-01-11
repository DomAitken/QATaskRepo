import './css/App.css';
// import CompWithVars from './components/component-vars/CompWithVars.jsx';
// import HelloWorld from './components/HelloWorld.jsx';
import Footer from './components/Parent-ChildTask/footer';

function helloWorld() {
    return (<div className = "App">
        {/* <HelloWorld/>
        <CompWithVars/> */}
        <Footer/>
    </div>
    );
}

export default helloWorld;