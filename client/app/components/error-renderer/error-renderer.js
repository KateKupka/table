import config from '../../config';
import template from './error-renderer.hbs';

export default class ErrorRenderer {

  static target = document.getElementById(config.DOM.errorContainerId);

  constructor() {
    ErrorRenderer.target.innerHTML = '';
  }

  render(errors) {
    if (errors && errors.count) {
      ErrorRenderer.target.innerHTML = template({ errors });
    }
  }

}
