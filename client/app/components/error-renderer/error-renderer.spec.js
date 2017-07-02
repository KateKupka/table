import ErrorRenderer from './error-renderer';
import { expect } from 'chai';

describe('app/components/error-renderer/error-renderer.js', () => {

  describe('static check', () => {
    it('should have target', () => {
      expect(ErrorRenderer.target).to.not.be.undefined;
    });
  });

  describe('methods check', () => {

    const renderer = new ErrorRenderer();

    it ('should innerHTML be empty', () => {
      expect(ErrorRenderer.target.innerHTML).to.be.equal('');
    });

    it ('should innerHTML be empty when no errors', () => {
      renderer.render();
      expect(ErrorRenderer.target.innerHTML).to.be.equal('');
    });

    it('should have 2 errors in html', () => {
      renderer.render({
        count: 2,
        types: {
          number: { count: 1 },
          minimun: { count: 1 }
        }
      });
      const html = ErrorRenderer.target.innerHTML;
      expect(html.match(/(<li>)/g).length).to.be.equal(2);
    });

  });

});
