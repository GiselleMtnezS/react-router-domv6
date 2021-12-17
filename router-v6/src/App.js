import './App.css';
import { useContext } from 'react';
import {Routes, Route, Link} from "react-router-dom"
import {UserContext} from "./context/context"

//components
import Home from "./components/Home"
import Route1 from "./components/Route1"
import Route2 from "./components/Route2"
import Route3 from "./components/Route3"

//Protected Routes
import ProtectedRoute1 from "./protected-routes/ProtectedRoute1"
import ProtectedRoute2 from "./protected-routes/ProtectedRoute2"
import ProtectedRoute3 from "./protected-routes/ProtectedRoute3"

function App() {

  const { token, toggleToken, toggleOff } = useContext(UserContext)

  return (
    <div className="App">
      <nav >
          <Link className='nav-link' to="/">Home</Link>
          <Link className='nav-link' to="/protected-one">Protected Route 1</Link>
          <Link className='nav-link' to="/protected-two">Protected Route 2</Link>
          <Link className='nav-link' to="/protected-three">Protected Route 3</Link>
      </nav>

      <Routes>

        <Route
            exact path="/" 
            element = {<Home toggleToken={toggleToken} toggleOff={toggleOff}/>}
        />


        <Route 
          path="/protected-one"
          element = {
            <ProtectedRoute1 
              token={token} 
              component={Route1} 
              redirectTo = '/'
            />}
        />

        <Route
          path='protected-two'
          element={
            <ProtectedRoute2 ifAuth={Route2}/>
          }
        />

        <Route
          path='protected-three'
          element={
            <ProtectedRoute3>
              <Route3 token={token} />
            </ProtectedRoute3>
          }
        />

      </Routes>
    </div>
  );
}

export default App;
