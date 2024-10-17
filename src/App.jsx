import Button1 from './components/normal-css/Button.jsx'
import Button2 from './components/inline-css/Button.jsx';
import Button3 from './components/css-in-js/Button.jsx';
import Button4 from './components/style-components/Button.jsx';
import Button5 from './components/css-modules/Button.jsx';
import Button6 from './components/sass/Button.jsx';
import './App.css'

function App() {
  
  return (
    <>
       <div className="App">
      {
        <Button1 buttonText="Example 1" />

      }

      { <Button2 buttonText="Example 2" />}

      {<Button3 buttonText="Example 3"/>}

      {<Button4 buttonText="Example 4"/>}

      {<Button5  buttonText="Example 5"/>}

      {<Button6 buttonText="Example 6"/>}


    </div>
    </>
  )
}

export default App;
