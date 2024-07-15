const test1 = require('../RPS.js');
describe("test1", function(){

    test("returns 'Player 2 wins!' if P1 = rock & P2 = paper", function(){
        let output = test1('paper','rock');
        expect(output).toBe("Player 1 wins!");
     });

     test("returns 'Player 2 wins!' if P1 = paper & P2 = scissors", function(){
        let output = test1('paper','scissors');
        expect(output).toBe("Player 2 wins!");
     });
});