// launchcode.test.js code:
const launchcode = require('../index.js');

describe("The launchcode object", function(){

  test("should have a property called organization", function(){
    expect(launchcode.organization).toEqual("nonProfit");
  });

  test("should have a property called executive director", function(){
    expect(launchcode.executive).toEqual("Jeff");
  });

  test("should have a property called precentageCoolEmplooyees", function(){
    expect(launchcode.precentageCoolEmployees).toEqual(100);
  });

  test("should have a property called programsOffered with 3 programs", function(){
    expect(launchcode.programsOffered[0]).toEqual("Web Development");
    expect(launchcode.programsOffered[1]).toEqual("Data Analysis");
    expect(launchcode.programsOffered[2]).toEqual("Liftoff");
    expect(launchcode.programsOffered.length).toEqual(3);
  });

  describe("should have a method called launchOutPut, which", function(){

    test("should return 'Launch!' for numbers evenly divisible by 2", function(){
      expect(launchcode.launchOutPut(2)).toEqual("Launch!");
    });

    test("should return 'Code!' for numbers evenly divisible by 3", function(){
      expect(launchcode.launchOutPut(3)).toEqual("Code!");
    });

    test("should return 'Rocks!' for numbers evenly divisible by 5", function(){
      expect(launchcode.launchOutPut(5)).toEqual("Rocks!");
    });

    test("should return 'LaunchCode!' for numbers evenly divisible by both 2 and 3", function(){
      expect(launchcode.launchOutPut(6)).toEqual("LaunchCode!");
    });

    test("should return 'Code Rocks!' for numbers evenly divisible by both 3 and 5", function(){
      expect(launchcode.launchOutPut(15)).toEqual("Code Rocks!");
    });

    test("should return 'Launch Rocks! (CRASH!!!!)' for numbers evenly divisible by both 2 and 5", function(){
      expect(launchcode.launchOutPut(10)).toEqual("Launch Rocks! (CRASH!!!!)");
    });

    test("should return 'LaunchCode Rocks!' for numbers evenly divisible by both 2, 3 and 5", function(){
      expect(launchcode.launchOutPut(30)).toEqual("LaunchCode Rocks!");
    });

    test("should return 'Rutabagas! That Doesn't work.' for numbers  NOT evenly divisible by both 2, 3 and 5", function(){
      expect(launchcode.launchOutPut(7)).toEqual("Rutabagas! That dosen't work.");
    });
  });

});