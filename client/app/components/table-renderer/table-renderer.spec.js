import TableRenderer from './table-renderer';
import { expect } from 'chai';

describe('app/components/table-renderer/table-renderer.js', () => {

  describe('static check', () => {
    it('should have target', () => {
      expect(TableRenderer.target).to.not.be.undefined;
    });
  });

  describe('methods check', () => {
    const renderer = new TableRenderer();

    it ('should innerHTML be empty', () => {
      expect(TableRenderer.target.innerHTML).to.be.equal('');
    });

    it('should have 3 tables in html', () => {
      renderer.render({
        "comas": 0,
        "dots": 0,
        "letters": {
          "a": {
            "a": 1
          },
          "b": {
            "b": 1
          }
        }
      });
      const html = TableRenderer.target.innerHTML;
      expect(html.match(/(<table)/g).length).to.be.equal(3);
    });
  });
});
