import {Home} from './Home/home'
import {Cities} from "./Cities/cities";
import {AddCities} from "./Cities/add_cities";
import './App.css';
import {BrowserRouter as Router, useRoutes, Link} from "react-router-dom";
// import { Route, Link, BrowserRouter as Router } from "react-router-dom";


const App = () => {
  let routes = useRoutes([
    { path: "/", element: < Home/> },
    { path: "cities", element: <Cities/> },
    { path: "add", element: <AddCities/> },
  ]);
  return routes;
}
const AppWrapper = () => {
  return (
    <div>
    <Router>
        <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cities">Cities</Link>
            </li>
            <li>
              <Link to="/add">Add Cities</Link>
            </li>
          </ul>
      <App />
    </Router>
    </div>
  );
};

export default AppWrapper;