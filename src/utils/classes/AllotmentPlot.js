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
    const winterMonths = ["December", "January", "February"];
    const springMonths = ["March", "April", "May"];
    const summerMonths = ["June", "July", "August"];
    const autumnMonths = ["September", "October", "November"];
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
    if (!this.isWatered) {
      this.growing.forEach((plant) => {
        if (plant) plant.water();
      });
      this.isWatered = true;
      return true;
    }
    return false;
  }

  fertiliseService() {
    if (!this.isFertilised) {
      this.growing.forEach((plant) => {
        if (plant) plant.fertilise();
      });
      this.isFertilised = true;
      return true;
    }
    return false;
  }

  tillTheEarth() {
    const hasNoPlants = this.growing.every((plant) => {
      return plant === null;
    });
    if (hasNoPlants && !this.isTilled) {
      this.isTilled = true;
      return true;
    }
    return false;
  }

  removeWeeds() {
    if (this.hasWeeds) {
      this.growing.forEach((plant) => {
        if (plant) plant.deWeed();
      });
      this.hasWeeds = false;
    }
  }
}

export default AllotmentPlot;
