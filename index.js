const removeUndefinedKeys = (obj) => {
  const copy = { ...obj };

  for (const key in copy) {
    if (typeof copy[key] === 'undefined') {
      delete copy[key];
    }
  }

  return copy;
};

const hasDefinedKeys = (obj) => {
  const clean = removeUndefinedKeys(obj);
  return Object.keys(clean).length > 0;
};

module.exports = {
  hasDefinedKeys,
  removeUndefinedKeys
};

