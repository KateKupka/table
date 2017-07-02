export default class Validation {

  // holds registered validators
  static validators = [];

  /**
   * Allows validators to auto register themselves
   * @method registerValidator
   * @param  {object} validator
   */
  static registerValidator(validator) {
    Validation.validators.push(validator);
  }

  constructor(wordsArray) {
    this.wordsArray = wordsArray;
  }

  errors = {
    count: 0,
    types: {},
  };

  /**
   * Validate
   * @method validate
   * @return {object} errors
   */
  validate() {
    const validators = Validation.validators;
    for (const validator of validators) {
      if (!validator.each) {
        this._handleError(validator.validate(this.wordsArray));
      } else {
        for (const word of this.wordsArray) {
          this._handleError(validator.validate(word));
        }
      }
    }
    return this.errors;
  }

  /**
   * Handle errors
   * @private
   * @method handleError
   * @param  {object}    error
   */
  _handleError(error) {
    if (error) {
      this._addError(error);
    }
  }

  _addError({ errorType, example }) {
    this.errors.count += 1;
    this._addNewErrorType(errorType);
    this.errors.types[errorType].count += 1;
    if (example) {
      this.errors.types[errorType].example.push(example);
    }
  }

  _addNewErrorType(errorType) {
    if (this.errors.types[errorType]) {
      return;
    }
    this.errors.types[errorType] = {
      count: 0,
      example: [],
    };
  }
}
