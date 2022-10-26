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

  plant(vegetable) {
    let planted = false;
    this.growing.forEach((slot, i) => {
      if (planted === false && slot === null) {
        if (this.isTilled) {
          vegetable.applyTilled();
        }
        this.growing[i] = vegetable;
        planted = true;
      }
    });
    if (planted) return true;
    return false;
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
      const chanceOfWeeds = Math.random() * 100;
      if (chanceOfWeeds > 50) {
        this.growing.forEach((plant) => {
          if (plant) {
            plant.hasWeeds = true;
            plant.currentYield -= plant.baseYield;
          }
        });
        this.hasWeeds = true;
      }
      this.isWatered = false;
    }
    if (springMonths.includes(newMonth)) {
      this.isFertilised = false;
    }
    if (autumnMonths.includes(newMonth)) {
      return this.growing.filter((plant, i) => {
        if (plant) {
          const chanceOfHarvest = Math.random() * 100;
          if (newMonth === "November" || chanceOfHarvest < 34) {
            this.growing[i] = null;
            return true;
          }
        }
      });
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

  removeWeedsService() {
    if (this.hasWeeds) {
      this.growing.forEach((plant) => {
        if (plant) plant.deWeed();
      });
      this.hasWeeds = false;
      return true;
    }
    return false;
  }
}

export default AllotmentPlot;
