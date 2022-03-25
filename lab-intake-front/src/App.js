import './App.css';
import { BrowserRouter as ReactRouter, Route, Routes } from "react-router-dom"
import WelcomeScreen from './WelcomeScreen.js'
import Questions from './Questions.js'
// import Play from './Play.js'
import Admin from './Admin';
function App() {
  return (
    <ReactRouter>
      <div className="App">
        <Routes>
          <Route path ="/" element={<Questions/>}/>
          {/* <Route path ="/questions" element={<Questions/>} /> */}
          {/* <Route path ="/play" element={<Play/>} /> */}
          <Route path ="/admin-portal" element={<Admin/>} />
        </Routes>
      </div>
    </ReactRouter>
  );
}

export default App;
