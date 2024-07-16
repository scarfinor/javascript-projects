let launchcode = {
  organization: "nonProfit",
  executive: "Jeff",
  percentageCoolEmployees: 100,
  programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
  launchOutPut: function (num) {
    let parts = {
      2: "Launch",
      3: "Code",
      5: "Rocks",
    };
    let result = "";
    for (let modulus in parts) {
      if (num % modulus === 0) {
        if (modulus == 5 && result.length !== 0) {
          result += " ";
        }
        result += parts[modulus];
      }
    }
    if (result.length === 0) {
      return "Rutabagas! That doesn't work.";
    } else {
      result += "!";
      if (result === "Launch Rocks!") {
        result += " (CRASH!!!!)";
      }
      return result;
    }
  },
};

module.exports = launchcode;
