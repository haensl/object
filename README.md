# @haensl/object

Help for JavaScript objects.

[![NPM](https://nodei.co/npm/@haensl%2Fobject.png?downloads=true)](https://nodei.co/npm/@haensl%2Fobject/)

[![npm version](https://badge.fury.io/js/@haensl%2Fobject.svg)](http://badge.fury.io/js/@haensl%2Fobject)
[![CircleCI](https://circleci.com/gh/haensl/object.svg?style=svg)](https://circleci.com/gh/haensl/object)

## Install

### NPM
`npm i -S @haensl/object`

### Yarn
`yarn add @haensl/object`

## Use

```javascript
const { hasDefinedKeys } = require('@haensl/object');

const someProcessingFunction = async (input) =>
  const processed = await input.pipe(here)
    .map(there)
    .reduce(theData);

  if (hasDefinedKeys(processed)) {
    return processed;
  }

  // return null instead of empty objects
  return null;
}
```

## Synopsis

### removeUndefinedKeys: (obj) => obj <a name="removeUndefinedKeys"></a>

Returns a new object without `undefined` keys.

Example:

```javascript
const { removeUndefinedKeys } = require('@haensl/object');

const input = {
  foo: undefined,
  bar: 'foo',
  foobar: undefined
};

const out = removeUndefinedKeys(input);

// out == { bar: 'foo' }
```

### hasDefinedKeys: (obj) => boolean <a name="hasDefinedKeys"></a>

Checks whether an object has defined keys.

Example:

```javascript
const { hasDefinedKeys } = require('@haensl/object');

const empty = {
  foo: undefined
};

Object.keys(empty).length; // 1

hasDefinedKeys(empty); // false

hasDefinedKeys({ foo: 'bar' }); // true
```

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
