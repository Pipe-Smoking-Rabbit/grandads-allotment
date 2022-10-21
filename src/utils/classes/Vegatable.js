class Vegatable {
  constructor() {
    (this.name = "Vegatable"),
      (this.growth = 0),
      (this.isFertilised = false),
      (this.hasWeeds = true),
      (this.isWatered = false),
      (this.wasTilled = false),
      (this.yield = 1);
  }

  harvest() {
    const wateredBonus = this.isWatered ? this.yield * 2 : 0;
    const fertilisedBonus = this.isFertilised ? this.yield * 1.5 : 0;
    const weededBonus = this.hasWeeds ? 0 : this.yield * 1.25;
    const tilledBonus = this.wasTilled ? this.yield * 1.75 : 0;
    return (
      this.yield + wateredBonus + fertilisedBonus + weededBonus + tilledBonus
    );
  }

  water() {
    this.isWatered = true;
  }

  fertilise() {
    this.isFertilised = true;
  }

  deWeed() {
    this.hasWeeds = false;
  }

  tilled() {
    this.wasTilled = true;
  }

  grow() {
    if (this.growth < 10) {
      this.growth++;
    } else {
      this.harvest();
    }
  }
}

export default Vegatable;
