import "../Stlyes/Allotment.css";
import regularSoilBlock from "../Images/regular-soil-block.png";

export default function Allotment({ allotment, setAllotment, setFunds, month }) {
  return (
    <section>
      <img
        src={regularSoilBlock}
        alt="The block of soil from which all your veggies are grown."
      />
    </section>
  );
}
