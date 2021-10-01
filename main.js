// describe('Modal Component', () => {
//   it(['opens on click', () => {
//       // assert
//       expect(true).toBe(false);
//   }])
// })


// Test Suite
describe(`${Person.name} Class`, () => {
  describe('default valeus', () => {
    it('first name defaults to empty string', () => {
      // arrange
      const data = { firstName: null };
      
      // act
      const model = new Person(data);
  
      // assert
      expect(model.firstName).toBe('');
    });
  
    it('last name defaults to empty string', () => {
      // arrange
      const data = { lastName: null };
  
      // act
      const model = new Person(data);
  
      // assert
      expect(model.lastName).toBe('');
    });
  
    it('middle name defaults to empty string', () => {
      // arrange
      const data = { middleName: null };
  
      // act
      const model = new Person(data);
  
      // assert
      expect(model.middleName).toBe('');
    });
  });

});
