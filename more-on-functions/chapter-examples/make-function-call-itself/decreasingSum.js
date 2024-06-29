function decreasingSum(integer) {

   if (integer === 1){
      return integer;
   } else {
      return decreasingSum()
   }
}

console.log(decreasingSum(5));
