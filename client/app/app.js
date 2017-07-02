import config from './config';

import Validation from './components/validation/validation';
import DataParser from './components/data-parser/data-parser';
import ErrorRenderer from './components/error-renderer/error-renderer';
import TableRenderer from './components/table-renderer/table-renderer';

// register validators
import './components/validation/validator-length';
import './components/validation/validator-numbers';

import './styles/main.scss';

export default class App {

  /**
   * Bind DOM events
   * @method bindEvents
   */
  bindEvents() {
    document.getElementById(config.DOM.btnId).addEventListener('click', App.handleInputData);
  }

  /**
   * Handle input data
   * - prepare table data
   * - handle errors
   * @method handleInputData
   */
  static handleInputData() {
    const tableRenderer = new TableRenderer();
    const errorRenderer = new ErrorRenderer();

    // get data from intpu & parse
    const inputData = document.getElementById(config.DOM.textareaId).value;

    const dataParser = new DataParser(inputData);

    // validate data
    const validation = new Validation(dataParser.toArray());
    const errors = validation.validate();

    // render errors if any
    if (errors.count) {
      errorRenderer.render(errors);
      return;
    }

    // build table
    const data = dataParser.toObject();
    tableRenderer.render(data);
  }
}

const app = new App();
app.bindEvents();
