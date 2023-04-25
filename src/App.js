import "./App.css";
import Home from "./pages/Home";
import ListHouse from "./pages/ListHouse";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/paying-guest'
          element={<ListHouse type='payingguest' />}
        />
        <Route path='/rent-homes' element={<ListHouse type='renthouse' />} />
        <Route
          path='/commercial-properties'
          element={<ListHouse type='commercialproperty' />}
        />
        <Route
          path='/hotels&resorts'
          element={<ListHouse type='hotelsandresorts' />}
        />
      </Routes>
    </div>
  );
}

export default App;
