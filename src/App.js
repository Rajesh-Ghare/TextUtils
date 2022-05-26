import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert =(message,type) =>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  const toggleMode =()=>{
      if ( mode ==='light') {
        setMode('dark');
        document.body.style.backgroundColor='grey';
        showAlert("Dark mode has been enabled","success");
        document.title = 'textUtils - Dark Mode'; // change tab title on mode change
      } else {
        setMode('light');
        document.body.style.backgroundColor='white';
        showAlert("Light mode has been enabled","success");
        document.title = 'textUtils - Light Mode';
      }
  }
  return (
   <>
   <Router>
   <Navbar title="textUtils" aboutText="about" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
     <Routes>
     <Route exact path='/about' element={<About/>} >          
        </Route>
        <Route path='/'element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}  />} >
        </Route>
     </Routes>
         
    </div>
   </Router>

   </>
  );
}

export default App;
