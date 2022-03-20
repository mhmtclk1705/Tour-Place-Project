import Card from "./components/cards/Card";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import data from "../src/helper/data";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
  <Router>
    <Navbar />

    <Header />
    <div className="card-container">
    {data.map((city) =>
    <Card
    title = {city.title}
    image = {city.image}
    desc = {city.desc}
    />
    )}
    </div>
  </Router>
  );
}

export default App;
