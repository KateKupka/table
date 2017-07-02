import Validation from './validation';
import { expect } from 'chai';

describe('app/components/validation/validation.js', () => {

  describe('static check', () => {
    it('should have validators pre-registered', () => {
      expect(Validation.validators.length).to.be.above(0);
    });

    it('should register new validator', () => {
      let currentValidatorLength = Validation.validators.length;
      Validation.registerValidator({
        each: true,
        validate: function() {
          return false;
        }
      });
      expect(Validation.validators.length).to.be.equal(
        currentValidatorLength + 1
      );
    });
  });

  describe('methods check', () => {
    const validation = new Validation(['a', 'b', 'c', 'd', 'e']);

    it ('should have wordsArray', () => {
      expect(validation.wordsArray.length).to.be.equal(5);
    });

    it ('should validate without errors', () => {
      let errors = validation.validate();
      expect(errors.count).to.be.equal(0);
    });

    it ('should add error', () => {
      validation._handleError({
        errorType: 'minimum',
        example: 'test'
      });
      expect(validation.errors.count).to.be.equal(1);
    });

    it ('should increment error count', () => {
      validation._handleError({
        errorType: 'minimum'
      });
      expect(validation.errors.count).to.be.equal(2);
      expect(validation.errors.types.minimum.count).to.be.equal(2);
    });

  });

});
