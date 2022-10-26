class AllotmentPlot {
  constructor() {
    this.growing = [
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
    ];
    this.currentMonth = "April";
    this.isTilled = false;
    this.hasWeeds = false;
    this.isWatered = false;
    this.isFertilised = false;
  }

  plant(vegetable) {
    let planted = false;
    const springMonths = ["March", "April", "May"];
    if (springMonths.includes(this.currentMonth)) {
      this.growing.forEach((slot, i) => {
        if (planted === false && slot === null) {
          if (this.isTilled) vegetable.applyTilled();
          if (this.isWatered) vegetable.water();
          if (this.isFertilised) vegetable.fertilise();
          if (this.hasWeeds) vegetable.giveWeeds();
          this.growing[i] = vegetable;
          planted = true;
        }
      });
    }
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
      this.growWeeds();
      this.getDry();
    }
    if (springMonths.includes(newMonth)) {
      this.needsFertilising();
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
        return false;
      });
    }
    this.currentMonth = newMonth;
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
  getDry() {
    this.growing.forEach((plant) => {
      if (plant) plant.isWatered = false;
    });
    this.isWatered = false;
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
  needsFertilising() {
    this.growing.forEach((plant) => {
      if (plant) plant.isFertilised = false;
    });
    this.isFertilised = false;
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
  growWeeds() {
    const chanceOfWeeds = Math.random() * 100;
    if (chanceOfWeeds > 50) {
      this.growing.forEach((plant) => {
        if (plant) plant.giveWeeds();
      });
      this.hasWeeds = true;
    }
  }
}

export default AllotmentPlot;
