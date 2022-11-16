import React from "react";
import {Auth, Home} from './pages'
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Routes>
          <Route exact path={Auth} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
