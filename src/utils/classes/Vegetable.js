class Vegetable {
  constructor() {
    (this.name = "Vegetable"),
      (this.isFertilised = false),
      (this.hasWeeds = true),
      (this.isWatered = false),
      (this.wasTilled = false),
      (this.baseYield = 1),
      (this.currentYield = this.baseYield);
  }

  harvest() {
    return this.currentYield;
  }

  water() {
    if (!this.isWatered) {
      this.currentYield += 0.5 * this.baseYield;
      this.isWatered = true;
    }
  }

  fertilise() {
    if (!this.isFertilised) {
      this.currentYield += 1.5 * this.baseYield;
      this.isFertilised = true;
    }
  }

  deWeed() {
    if (this.hasWeeds) {
      this.currentYield += this.baseYield;
      this.hasWeeds = false;
    }
  }

  applyTilled() {
    this.wasTilled = true;
    this.currentYield += 3 * this.baseYield;
  }
}

export default Vegetable;
