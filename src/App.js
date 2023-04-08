
import './index.css';
import {BrowserRouter as Router ,Routes  , Route } from "react-router-dom";
import Random from './Components/ForMemes/Random';

function App() {
  

  return (
 <>
    <Router>
      <Routes>
        <Route exact path="/project5" element={<Random/>}/>
      </Routes>

    </Router>
    </>
  )
}
export default App

