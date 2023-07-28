const service = require('./');

describe('object service', () => {
  describe('removeUndefinedKeys()', () => {
    it('removes undefined keys', () => {
      expect(service.removeUndefinedKeys({
        foo: undefined,
        bar: 'foo',
        foobar: undefined
      })).toEqual({
        bar: 'foo'
      });
    });
  });

  describe('hasDefinedKeys()', () => {
    it('returns true if the object has non-undefined properties', () => {
      expect(service.hasDefinedKeys({
        foo: undefined,
        bar: 'foo',
        foobar: undefined
      })).toEqual(true);
    });

    it('returns false if the object has no non-undefined properties', () => {
      expect(service.hasDefinedKeys({
        foo: undefined,
        bar: undefined
      })).toEqual(false);
    });
  });
});
