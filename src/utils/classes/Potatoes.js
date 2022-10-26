import Vegetable from "./Vegetable";

class Potatoes extends Vegetable {
  constructor() {
    super();
    this.name = "Potatoes";
    this.baseYield = 1.3;
  }
}

export default Potatoes;
