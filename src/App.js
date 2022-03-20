import Card from "./components/cards/Card";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import data from "../src/helper/data";


function App() {
  return (
  <div>
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
  </div>
  );
}

export default App;
