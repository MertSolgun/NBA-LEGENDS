import "./App.css";
import { CardContainer } from "./components/CardContainer/CardContainer";
import Header from "./components/Header/Header";
import { data } from "./helper/data";
import { useState } from "react";

function App() {
  const [filterData, setfilterData] = useState(data);
  const handleClick = (e) => {
    const inputValue = e.target.value.trim();
    const filteredData = data.filter((item) => {
      return item.name.toLowerCase().includes(inputValue.toLowerCase());
    });
    setfilterData(filteredData);
  };

  return (
    <div className="App">
      <Header event={handleClick} />
      <CardContainer filteredData={filterData} />
    </div>
  );
}

export default App;
