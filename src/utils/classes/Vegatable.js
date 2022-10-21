class Vegatable {
  constructor() {
    (this.name = "Vegatable"),
      (this.growthStage = 0),
      (this.isFertilised = false),
      (this.hasWeeds = true),
      (this.isWatered = false),
      (this.wasTilled = false),
      (this.baseYield = 1),
      (this.currentYield = this.baseYield);
  }

  harvest() {
    return (
      this.currentYield
    );
  }

  water() {
    if (!this.isWatered) {
        this.currentYield += this.baseYield 
        this.isWatered = true;
    } return this.isWatered
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
    
  }
}

export default Vegatable;
