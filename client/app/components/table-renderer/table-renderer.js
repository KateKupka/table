import template from './table-renderer.hbs';
import config from '../../config';

export default class TableRenderer {

  static target = document.getElementById(config.DOM.tableContainerId);

  constructor() {
    TableRenderer.target.innerHTML = '';
  }

  render(data) {
    TableRenderer.target.innerHTML = template({
      letters: data.letters,
      comas: data.comas,
      dots: data.dots,
    });
  }
}
