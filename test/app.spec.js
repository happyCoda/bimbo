describe('application', () => {
  let app = require('../public/js/src/app');

  it('returns a string', () => {
    expect(typeof app(5).next().value).toBe('number');
  });
});
