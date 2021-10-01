// describe('Modal Component', () => {
//   it(['opens on click', () => {
//       // assert
//       expect(true).toBe(false);
//   }])
// })


// Test Suite
describe(`${Person.name} Class`, () => {
  let model;
  beforeEach(() => {
    model = new Person();
    console.log('Before Each')
  });

  describe('default values', () => {
    it('first name defaults to empty string', () => {
      console.log(1)
      // assert
      expect(model.firstName).toBe('');
    });
  
    it('last name defaults to empty string', () => {
      console.log(2)
      // assert
      expect(model.lastName).toBe('');
    });
  
    it('middle name defaults to empty string', () => {
      console.log(3)
      // assert
      expect(model.middleName).toBe('');
    });
  });

  describe(`${Person.name} Full Name Method`, () => {
      beforeEach(() => {
        model = new Person({
          firstName = 'Danny';
          lastName = 'Yang';
        });
      })

      it('middle initial when middle name is defined with first and last names', () => {
        model.middleName = 'Toua';
        expect(model.fullName).toBe(`${model.firstName} ${model.middleName[0]} ${model.lastName}`)
      })

      it('when NO middle name returns just first and last names', () => {
        expect(model.fullName).toBe(`${model.firstName} ${model.lastName}`)
      })
  });
});

