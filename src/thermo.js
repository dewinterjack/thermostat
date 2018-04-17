function Thermostat(){
  const CHANGE = 5;
  const MIN_TEMP = 10;
  const DEFAULT_TEMP = 20;
  const SAVER_MAX_TEMP = 25

  this.temperature = DEFAULT_TEMP;
  this.change = CHANGE;
  this.min = MIN_TEMP;
  this.max = SAVER_MAX_TEMP;
  this.saver = true;
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
  this.max = MAX_TEMP;
};

Thermostat.prototype.reset = function(){
  this.temperature = 20;
};
