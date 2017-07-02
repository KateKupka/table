import DataParser from './data-parser';
import { expect } from 'chai';

describe('app/components/data-parser/data-parser.js', () => {

  describe('methods check', () => {
    const dataParser = new DataParser('Test ^ string.');
    it('data is not undefined', () => {
      expect(dataParser.data).to.not.be.undefined;
    });

    it('array length equals 2', () => {
      expect(dataParser.toArray().length).to.be.equal(3);
    });

    it('special characters to be removed from word', () => {
      expect(dataParser._handleSpecialChars('test^')).to.be.equal('test');
    });

    it('dot is being added to dots total count', () => {
      dataParser._handleSpecialChars('test.');
      expect(dataParser.words.dots).to.be.equal(1);
    });

    it('coma is being added to comas total count', () => {
      dataParser._handleSpecialChars('test,');
      expect(dataParser.words.dots).to.be.equal(1);
    });

    it('returns empty string for special character', () => {
      let word = dataParser._handleSpecialChars('&');
      expect(word).to.be.equal('');
    });

    it('returns object', () => {
      let words = dataParser.toObject();
      expect(words.comas).to.be.equal(1);
      expect(words.dots).to.be.equal(2);
      expect(words.letters.s.string).to.be.equal(1);
      expect(words.letters.t.test).to.be.equal(1);
    });
  });
});
