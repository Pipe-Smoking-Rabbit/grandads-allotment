import "./App.css";
import { useState, useEffect } from "react";
import { AllotmentPlot, Carrots } from "./utils/classes/index.js";
import Header from "./Components/Header";
import Allotment from "./Components/Allotment";
import BankBalance from "./Components/BankBalance";
import Calendar from "./Components/Calendar";

export default function App() {
  const [funds, setFunds] = useState(200);
  const [month, setMonth] = useState("April");
  const [allotment, setAllotment] = useState(new AllotmentPlot());

  useEffect(() => {
    setAllotment((currentAllotment) => {
      currentAllotment.tillTheEarth();
      currentAllotment.waterService();
      currentAllotment.plant(new Carrots());
      currentAllotment.fertiliseService();
      currentAllotment.passTime("June");
      return currentAllotment;
    });
  }, []);
  console.log(allotment.growing);
  return (
    <div className="App">
      <Header />
      <section className="fundsAndMonth">
        <BankBalance funds={funds} />
        <Calendar month={month} setMonth={setMonth} />
      </section>
      <Allotment
        setFunds={setFunds}
        allotment={allotment}
        setAllotment={setAllotment}
      />
    </div>
  );
}
