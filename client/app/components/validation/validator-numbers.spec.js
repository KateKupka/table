import validatorNumber from './validator-numbers';
import { expect } from 'chai';

describe('app/components/validation/validator-numbers.js', () => {

  it('should return false', () => {
    let valid = validatorNumber('test');
    expect(valid).to.not.be.undefined;
    expect(valid).to.be.false;
  });

  it('should return false on empty string', () => {
    let valid = validatorNumber('');
    expect(valid).to.not.be.undefined;
    expect(valid).to.be.false;
  });

  it('should throw number error', () => {
    let valid = validatorNumber('123');
    expect(valid).to.not.be.undefined;
    expect(valid.errorType).to.be.equal('number');
    expect(valid.example).to.be.equal('123');
  });

});
