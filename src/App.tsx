import reactLogo from "./assets/react.svg";
import "./App.css";
import GroceryList from "./components/GroceryList";

function App() {
  return (
    <>
      <div>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Grocery List</h1>
      <div className="card">
        <GroceryList />
      </div>
    </>
  );
}

export default App;
