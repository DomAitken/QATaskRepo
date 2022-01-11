import './css/App.css';
// import CompWithVars from './components/component-vars/CompWithVars.jsx';
// import HelloWorld from './components/HelloWorld.jsx';
import Parent from './components/Parent-Child/Parent.jsx';

function helloWorld() {
    return (<div className = "App">
        {/* <HelloWorld/>
        <CompWithVars/> */}
        <Parent/>
    </div>
    );
}

export default helloWorld;