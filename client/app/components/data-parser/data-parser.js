export default class DataParser {

  words = {
    comas: 0,
    dots: 0,
    letters: {},
  }

  constructor(data) {
    this.data = data;
  }

  /**
   * Convert data to array
   * @method toArray
   * @return {array}
   */
  toArray() {
    return this.data.trim().toLowerCase().split(' ').sort();
  }

  /**
   * Convert to object
   * - converted object contains letters count, comas and dots
   * @method toObject
   * @return {object}
   */
  toObject() {
    const arrData = this.toArray();
    arrData.map((word) => {
      const parsedWord = this._handleSpecialChars(word);
      if (word) {
        const { letters } = this.words;
        const firstLetter = parsedWord[0];
        if (!letters[firstLetter]) letters[firstLetter] = {};
        if (!letters[firstLetter][parsedWord]) {
          letters[firstLetter][parsedWord] = 1;
        } else {
          letters[firstLetter][parsedWord] += 1;
        }
      }
      return word;
    });
    return this.words;
  }

  _handleSpecialChars(word) {
    return word.replace(/[^a-zA-Z0-9\s]/g, (char) => {
      if (char === '.') this.words.dots += 1;
      else if (char === ',') this.words.comas += 1;
      return '';
    });
  }
}
