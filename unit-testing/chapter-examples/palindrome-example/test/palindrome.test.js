const isPalindrome = require('../palindrome.js');

describe("testing isPalindrome", function(){

      test("should return true for a single letter", function(){
         expect(isPalindrome("a")).toBe(true);
      });

      it("should return that the string is not a palindrome", function(){
        expect(isPalindrome("woW")).toBe(false);
    });

});
