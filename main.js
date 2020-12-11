function chunkyMonkey(values, size) {
   let start = 0
   let newArray = []
   while (start < values.length){
      newArray.push(values.slice(start, start + size))
      start += size
   }
   return newArray
}



/**
* Test Suite 
*/
describe('chunkyMonkey()', () => {
   it('returns largest positive integer possible for digit count', () => {
       // arrange
       const values = ["a", "b", "c", "d"];
       const size = 2;
       
       // act
       const result = chunkyMonkey(values, size);

       // log
       console.log("result: ", result);
       
       // assert
       expect(result).toEqual([["a", "b"], ["c", "d"]]);
   });
});