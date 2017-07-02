import App from './app';
import { expect } from 'chai';

describe('app/app.js', () => {
  it('app should construct', () => {
    let app = new App();
    expect(app).to.not.be.undefined;
  });
});
