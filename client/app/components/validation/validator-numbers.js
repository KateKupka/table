import Validation from './validation';

export default function numberValidator(word) {
  if (/\d/.test(word)) {
    return {
      errorType: 'number',
      example: word,
    };
  }
  return false;
}

Validation.registerValidator({
  each: true,
  validate: numberValidator,
});
