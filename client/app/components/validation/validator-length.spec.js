import validatorLength from './validator-length';
import { expect } from 'chai';

describe('app/components/validation/validator-length.js', () => {

  it('should return false', () => {
    let valid = validatorLength([
      'a', 'b', 'c', 'd', 'e', 'f', 'g'
    ]);
    expect(valid).to.not.be.undefined;
    expect(valid).to.be.false;
  });

  it('should throw minimum error', () => {
    let valid = validatorLength(['a', 'b']);
    expect(valid).to.not.be.undefined;
    expect(valid.errorType).to.be.equal('minimum');
  });

  it('should throw maximum error', () => {
    let arr = [];
    for (let x = 0; x <= 501; x++) {
      arr.push('test');
    }
    let valid = validatorLength(arr);
    expect(valid).to.not.be.undefined;
    expect(valid.errorType).to.be.equal('maximum');
  });

});
