// import HelloWorld from './components/Intro/HelloWorld';
// import CompWithVars from './components/components-vars/CompWithVars';
// import Page from './components/Parent-ChildTask/page';
// import Parent from './components/Parent-Child/Parent';
// import Pizza from './components/Props/Pizza';
// import PizzaOrder from './components/Props/PizzaOrder';
// import ParentArray from './components/Props/Array/Parent';
import './css/App.css';
// import Manager from './components/State/Manager';
// import ControlledInput from './components/Forms/ControlledInput';
// import UserPassComp from './components/State/Exercises/UserPassComp';
// import SearchTable from './components/state-exercises/SearchTable';
// import Manager from './components/State/Lifting-State/Manager';
// import Clock from './components/useEffect/Clock';
// import HideText from './components/useEffect/Tasks/Read-More/ReadMoreButton';
// import UseEffectTask from './components/useEffect/Tasks/useEffect-Task/useEffectTask';
import Nav from './components/Routing/Nav';
import Footer from './components/Routing/Footer';
import Home from './components/Routing/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from './components/Routing/About';
import Shop from './components/Routing/Shop';
import Forum from './components/Routing/Forum';
import Checkout from './components/Routing/Checkout';
import Child from './components/Routing/ChildModule';
// import HookParent from './components/useEffect/Tasks/useEffect-Task/HookParent';


function App() {
    return (<div className = "App">
        {/* <HelloWorld/>
        <CompWithVars/> */}
        {/* <ContactCardManager/> */}
        {/* <ParentArray/> */}
        {/* <Page/> */}
        {/* <PizzaOrder/> */}
        {/* <ParentArray/> */}
        {/* <Manager/> */}
        {/* <Manager/> */}
        {/* <ControlledInput/> */}
        {/* <SearchTable/> */}
        {/* <Manager/> */}
        {/* <Clock/> */}
        {/* <HideText/> */}
        {/* <UseEffectTask/> */}
        {/* <BrowserRouter> */}
            {/* <Nav/> */}
            {/* <HookParent/> */}
            {/* <Routes> */}
                {/* <Route path="/" exact element={<Home/>}/> */}
                    
                {/* <Route path="/about" exact element={<About/>}/> */}

                {/* <Route path="/shop/:id" exact element={<Shop/>}/> */}

                {/* <Route path='/forum' exact element={<Forum/>}/> */}
            
                {/* <Route path='/checkout' exact element={<Checkout/>}/> */}
            
                {/* <Route path='/child' exact element={<Child/>}/> */}
            
            {/* </Routes> */}
            {/* <Footer/> */}
        {/* </BrowserRouter> */}
    </div>
    );
}

export default App;