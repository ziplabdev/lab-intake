import './App.css';
import { BrowserRouter as ReactRouter, Route, Routes } from "react-router-dom"
import WelcomeScreen from './WelcomeScreen.js'
import Questions from './Questions.js'

function App() {
  return (
    <ReactRouter>
      <div className="App">
        <Routes>
          <Route path ="/" element={<WelcomeScreen/>}/>
          <Route path ="/questions" element={<Questions/>} />
        </Routes>
      </div>
    </ReactRouter>
  );
}

export default App;
