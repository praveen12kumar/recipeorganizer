
import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './pages/home/Home';
import RecipePage from './component/recipePage/RecipePage';

function App() {
  return (
    <div className="App">

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/:id" element={<RecipePage/>}/>
        </Routes>
    </div>
  );
}

export default App;
