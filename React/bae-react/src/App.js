// import HelloWorld from './components/HelloWorld';
// import CompWithVars from './components/components-vars/CompWithVars';
// import Page from './components/Parent-ChildTask/page';
// import Parent from './components/Parent-Child/Parent';
// import Pizza from './components/Props/Pizza';
// import PizzaOrder from './components/Props/PizzaOrder';
import './css/App.css';
// import CompWithVars from './components/component-vars/CompWithVars.jsx';
// import HelloWorld from './components/HelloWorld.jsx';
import ContactCardManager from './components/ContactCard-Task/ContactCardManager';

function App() {
    return (<div className = "App">
        {/* <HelloWorld/>
        <CompWithVars/> */}
        <ContactCardManager/>
    </div>
    );
}

export default App;