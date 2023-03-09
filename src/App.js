import "./App.css";
import Navbar from "./components/navbar/navbar";
import SearchSection from "./components/searchSection/searchSection";
import Books from "./components/books/books";
import { useState } from "react";
import SearchContext from "./context/searchcontext";

function App() {
  const [search, setSearch] = useState("");
  const [bookData , setData] = useState([]);

  return (
      <SearchContext.Provider value={{ value1: [search, setSearch], value2: [bookData, setData] }} handleSearch={handleSearch}>
        <div className="App">
          <Navbar />
          <SearchSection />
          <Books />
        </div>
      </SearchContext.Provider>
  );

  function handleSearch(value){
      setSearch(value);
  }
}

export default App;
