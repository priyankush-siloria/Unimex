
import Home from "./Components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="main-body">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
