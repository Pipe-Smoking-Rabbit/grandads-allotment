class AllotmentPlot {
  constructor() {
    (this.growing = [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ]),
      (this.isTilled = false),
      (this.hasWeeds = true),
      (this.isWatered = false),
      (this.isFertilised = false);
  }

  passTime(newMonth) {
    const winterMonths = ["November", "December", "January", "February"];
    const springMonths = ["March", "April", "May"];
    const summerMonths = ["June", "July", "August"];
    const autumnMonths = ["September", "October"];
    if (winterMonths.includes(newMonth)) {
      this.isTilled = false;
    }
    if (summerMonths.includes(newMonth)) {
      this.isWatered = false;
    }
    if (springMonths.includes(newMonth)) {
      this.isFertilised = false;
    }
  }

  waterService() {
    this.isWatered = true;
  }

  fertiliseService() {
    this.isFertilised = true;
  }

  tillTheEarth() {
    this.isTilled = true;
  }

  removeWeeds() {
    this.hasWeeds = false;
  }
}

export default AllotmentPlot;
