import Validation from './validation';

export default function validatorLength(wordsArray) {
  if (wordsArray.length < 5) {
    return {
      errorType: 'minimum',
    };
  }
  if (wordsArray.length > 500) {
    return {
      errorType: 'maximum',
    };
  }
  return false;
}

Validation.registerValidator({
  each: false,
  validate: validatorLength,
});
