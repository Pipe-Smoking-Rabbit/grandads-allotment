import "../CSS/Services.css";

export default function Services({ funds, setFunds, setAllotment }) {
  const handleClick = (event, service) => {
    if (event.target.value <= funds) {
      setAllotment((currentAllotment) => {
        const isServiced = currentAllotment[service]();
        if (isServiced) {
          setFunds(funds - event.target.value);
        }
        return currentAllotment;
      });
    }
  };

  return (
    <section className="ServicesBox">
      <h4 className="BoxTitle">Services</h4>
      <p className="ServiceLabel">
        Water
        <button
          onClick={(event) => handleClick(event, "waterService")}
          value={5}
          className="PurchaseButton"
        >
          BUY
        </button>
      </p>
      <p className="ServiceLabel">
        Fertilise
        <button
          onClick={(event) => handleClick(event, "fertiliseService")}
          value={6}
          className="PurchaseButton"
        >
          BUY
        </button>
      </p>
      <p className="ServiceLabel">
        Remove Weeds
        <button
          onClick={(event) => handleClick(event, "removeWeedsService")}
          value={7}
          className="PurchaseButton"
        >
          BUY
        </button>
      </p>
      <p className="ServiceLabel">
        Till The Earth
        <button
          onClick={(event) => handleClick(event, "tillTheEarth")}
          value={8}
          className="PurchaseButton"
        >
          BUY
        </button>
      </p>
    </section>
  );
}
