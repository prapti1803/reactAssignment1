import DynamicElement from "./components/DynamicElement"
import "./App.css"
const pageElements = [
  {
    htmlElementName: 'div',
    innerHTML: 'Hello World!',
    
    style: {
      border: '1px solid blue',
      backgroundColor: '#edeff2',
      color: '#4d4d4d',
    },
  },
  {
    
    htmlElementName: 'p',
    innerHTML: 'Hello World2!',
    
    style: {
      border: '1px solid pink',
      backgroundColor: '#edeff2',
      color: '#4d4d4d',
    },
  },
  {
    
    htmlElementName: 'h1',
    innerHTML: 'Hello World3!',
    
    style: {
      border: '1px solid pink',
      backgroundColor: '#edeff2',
      color: '#4d4d4d',
      
    }},
    
  
  ];
function App() {
  return (
    <>
    <div className="div-element">
    {pageElements.map((element)=>(
    <DynamicElement element={element}/>))}
    </div>
    

    </>
  );
}

export default App;
