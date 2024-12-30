import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';
function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) =>{
setAlert({
  msg: message,
  type: type
})
setTimeout(()=> {
  setAlert(null);
  },1500);
}
  const toggleMode = () =>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("dark mode has been enabled","success");
      document.title = 'TextUtils - Dark Mode';
    }
    else{
setmode('light');
document.body.style.backgroundColor = 'white';
showAlert("light mode has been enabled","success");
document.title = 'TextUtils - Light Mode';
    }
  } 
  return (
    <>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert = {alert}/>
<div className="container my-3">
  <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mpde={mode}/>
{/* <About/> */}
 </div>
</>
  );
}

export default App;
# Textutil-React
