import Block from "./components/Block/Index";
import "./app.css"

function App() {

  const windowOuterWidth = window.outerWidth;
  const windowOuterHeight = window.outerHeight;
  const screenAvWidth = window.screen.availWidth;
  const screenAvHeight = window.screen.availHeight;
  const deviceMemory = navigator.deviceMemory;


  return (
    <div>
    <div className='data'>
         <p>*Screens*</p>
        <p>Outer width is {windowOuterWidth},</p> 
        <p>Outer height is {windowOuterHeight},</p> 
        <p>Available Width Is {screenAvWidth}, </p>
        <p>Available Height Is {screenAvHeight}, </p>
        <p>*Device*</p>
        <p>Device Memory Is {deviceMemory}, </p>
      </div>

      <div className='container'> 
        <Block text={windowOuterWidth / 7}/>
        <Block text={windowOuterHeight}/>
        <Block text={screenAvWidth * 0.03}/>

      </div>

    </div>


  );
}

export default App;
