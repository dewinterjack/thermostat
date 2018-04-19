function Thermostat(){
  const CHANGE = 5;
  const MIN_TEMP = 10;
  const DEFAULT_TEMP = 20;
  const SAVER_MAX_TEMP = 25;
  const LOW = 18;
  const MEDIUM = 25;

  this.defaultTemp = DEFAULT_TEMP;
  this.temperature = this.defaultTemp;
  this.change = CHANGE;
  this.min = MIN_TEMP;
  this.saverMax = SAVER_MAX_TEMP;
  this.max = this.saverMax;
  this.saver = true;
  this.low = LOW;
  this.medium = MEDIUM;
}

Thermostat.prototype.up = function(){
  if(this.temperature + this.change > this.max){
    throw new Error("Maximum temperature reached.");
  }
  this.temperature += this.change;
};

Thermostat.prototype.down = function(){
  if(this.temperature - this.change < this.min){
    throw new Error("Minimum temperature reached.");
  }
  this.temperature -= this.change;
};

Thermostat.prototype.togglePowerSaver = function(){
  const MAX_TEMP = 32;
  this.saver = !this.saver;
  if(this.saver === false){
    this.max = MAX_TEMP;
  }
  else{
    this.max = this.saverMax;
  }
};

Thermostat.prototype.reset = function(){
  this.temperature = this.defaultTemp;
};

Thermostat.prototype.energyUsage = function(){
  if(this.temperature < this.low){
    return "low-usage";
  }
  else if(this.temperature < this.medium){
    return "medium-usage";
  }
  else{
    return "high-usage";
  }
};
