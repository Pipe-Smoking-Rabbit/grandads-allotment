import "../CSS/Seeds.css";
import { Cabbages, Potatoes, RunnerBeans, Carrots } from "../utils/classes";

export default function Seeds({ funds, setFunds, setAllotment }) {
  const handleClick = (event, veg) => {
    if (event.target.value <= funds) {
      setAllotment((currentAllotment) => {
        const isPlanted = currentAllotment.plant(veg);
        if (isPlanted) {
          setFunds(funds - event.target.value);
        }
        return currentAllotment;
      });
    }
  };

  return (
    <section className="SeedsBox">
      <h4 className="BoxTitle">Seeds</h4>
      <p className="SeedLabel">
        Cabbage
        <button
          onClick={(event) => handleClick(event, new Cabbages())}
          value={5}
          className="PurchaseButton"
        >
          BUY
        </button>
      </p>
      <p className="SeedLabel">
        Carrots
        <button
          onClick={(event) => handleClick(event, new Carrots())}
          value={6}
          className="PurchaseButton"
        >
          BUY
        </button>
      </p>
      <p className="SeedLabel">
        Runner Beans
        <button
          onClick={(event) => handleClick(event, new RunnerBeans())}
          value={7}
          className="PurchaseButton"
        >
          BUY
        </button>
      </p>
      <p className="SeedLabel">
        Potatoes
        <button
          onClick={(event) => handleClick(event, new Potatoes())}
          value={8}
          className="PurchaseButton"
        >
          BUY
        </button>
      </p>
    </section>
  );
}
