import "./App.css";
import { useState } from "react";
import { AllotmentPlot } from "./utils/classes/index.js";
import Header from "./Components/Header";
import Allotment from "./Components/Allotment";
import BankBalance from "./Components/BankBalance";
import Calendar from "./Components/Calendar";
import Seeds from "./Components/Seeds";
import Services from "./Components/Services";

export default function App() {
  const [funds, setFunds] = useState(200);
  const [month, setMonth] = useState("April");
  const [allotment, setAllotment] = useState(new AllotmentPlot());
  console.log(allotment.growing)

  return (
    <div className="App">
      <Header />
      <section className="FundsAndMonth">
        <BankBalance funds={funds} />
        <Calendar month={month} setMonth={setMonth} />
      </section>
      <section className="LeftPanels">
        <Seeds setFunds={setFunds} funds={funds} setAllotment={setAllotment} />
        <Services
          setFunds={setFunds}
          funds={funds}
          setAllotment={setAllotment}
        />
      </section>
      <Allotment
        setFunds={setFunds}
        allotment={allotment}
        setAllotment={setAllotment}
        month={month}
      />
    </div>
  );
}
