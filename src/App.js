import React from "react";
import {Auth, Home} from './pages'
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Routes>
          <Route exact path={'*'} element={<Auth/>} />
          <Route exact path={'/im'} element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
