import './css/App.css';
import CompWithVars from './components/component-vars/CompWithVars.jsx';
import HelloWorld from './components/HelloWorld.jsx';

function helloWorld() {
    return (<div className = "App">
        <HelloWorld/>
        <CompWithVars/>
    </div>
    );
}

export default helloWorld;