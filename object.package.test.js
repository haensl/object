describe('@haensl/object', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('exposes an object', () => {
    const object = require('@haensl/object');
    expect(typeof object)
      .toEqual('object');
  });

  it('exposes removeUndefinedKeys()', () => {
    const { removeUndefinedKeys } = require('@haensl/object');
    expect(typeof removeUndefinedKeys)
      .toEqual('function');
  });

  it('exposes hasDefinedKeys()', () => {
    const { hasDefinedKeys } = require('@haensl/object');
    expect(typeof hasDefinedKeys)
      .toEqual('function');
  });
});
