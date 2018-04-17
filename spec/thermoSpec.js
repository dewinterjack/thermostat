describe("Thermostat", function() {

  var thermostat;

  beforeEach(function(){
    // ARRANGE
    thermostat = new Thermostat();
  });

  describe("temperature", function(){
    it("starts at 20 degrees", function(){
      expect(thermostat.temperature).toBe(20);
    });
  });

  describe("#up", function() {
    it("Increases the temperature", function() {
      thermostat.up();
      expect(thermostat.temperature).toBe(25);
    });
    it("Throws an error if increase makes temp higher than maximum", function(){
      thermostat.up();
      expect(function(){thermostat.up();}).toThrow(new Error("Maximum temperature reached."));
    });
  });

  describe("#down", function(){
    it("Decreases the temperature", function(){
      thermostat.down();
      expect(thermostat.temperature).toBe(15);
    });
    it("Throws an error if decrease makes temp lower than minimum", function(){
      thermostat.down();
      thermostat.down();
      expect(function(){thermostat.down();}).toThrow(new Error("Minimum temperature reached."));
    });
  });

  describe("#togglePowerSaver", function(){
    it("changes the power saver status", function(){
      thermostat.togglePowerSaver();
      expect(thermostat.saver).toBe(false);
    });
    it("changes the maximum temperature", function(){
      thermostat.togglePowerSaver();
      expect(thermostat.max).toBe(32);
    });
  });

  describe("#reset", function(){
    it("sets the temperature to 20", function(){
      thermostat.reset();
      expect(thermostat.temperature).toBe(20);
    });
  });

  describe("#energyUsage", function(){
    it("returns: low-usage | when usage is low", function(){
      thermostat.down();
      expect(thermostat.energyUsage()).toBe("low-usage");
    });
    it("returns: medium-usage | when usage is medium", function(){
      thermostat.up();
      expect(thermostat.energyUsage()).toBe("medium-usage");
    });
    it("returns: high-usage | when usage is high", function(){
      thermostat.up();
      thermostat.up();
      expect(thermostat.energyUsage()).toBe("high-usage");
    });
  });

});