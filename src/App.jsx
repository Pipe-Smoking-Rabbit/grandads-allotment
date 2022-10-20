import "./App.css";
import { useState } from "react";
import allotmentPlot from "./utils/allotment-plot";
import Header from "./Components/Header";
import Allotment from "./Components/Allotment";
import BankBalance from "./Components/BankBalance";
import Calendar from "./Components/Calendar";

export default function App() {
  const [funds, setFunds] = useState(200);
  const [month, setMonth] = useState("April");
  const [growing, setGrowing] = useState(allotmentPlot);
  return (
    <div className="App">
      <Header />
      <section className="fundsAndMonth">
        <BankBalance funds={funds} />
        <Calendar month={month} setMonth={setMonth} />
      </section>
      <Allotment
        setFunds={setFunds}
        growing={growing}
        setGrowing={setGrowing}
      />
    </div>
  );
}
