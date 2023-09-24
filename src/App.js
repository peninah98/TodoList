
import './App.css';
import InlineComponent from './components/InlineStyling';
import ModuleComponent from './components/ModuleComponent';
import StylesheetComponent from './components/StyleSheetComponent';
import Todo from './components/todo';

function App() {
  return (
    <div className="App">
     {/* <Todo/> */}
     <StylesheetComponent/>
     {/* <ModuleComponent/> */}
     {/* <InlineComponent/> */}
    
    </div>
  );
}

export default App;
