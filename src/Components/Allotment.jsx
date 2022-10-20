import "../Stlyes/Allotment.css";
import soilBlock from "../Images/regular-soil-block.png";

export default function Allotment({ growing, setGrowing, setFunds }) {
  return (
    <section>
      <img
        src={soilBlock}
        alt="The block of soil from which all your veggies are grown."
      />
    </section>
  );
}
