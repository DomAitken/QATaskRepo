import HelloWorld from './components/HelloWorld';
import CompWithVars from './components/components-vars/CompWithVars';
import Page from './components/Parent-ChildTask/page';
import Parent from './components/Parent-Child/Parent';
import Pizza from './components/Props/Pizza';
import './css/App.css';
// import CompWithVars from './components/component-vars/CompWithVars.jsx';
// import HelloWorld from './components/HelloWorld.jsx';
import PizzaOrder from './components/Props/PizzaOrder';

function App() {
    return (<div className = "App">
        {/* <HelloWorld/>
        <CompWithVars/> */}
        <PizzaOrder/>
    </div>
    );
}

export default App;