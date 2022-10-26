import Vegetable from "./Vegetable";

class Cabbages extends Vegetable {
  constructor() {
    super();
    this.name = "Cabbages";
    this.baseYield = 1.15;
  }
}

export default Cabbages;
