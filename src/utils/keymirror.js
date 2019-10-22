export function addPrefixToMap(obj, prefix) {
  Object.keys(obj).forEach(key => {
    obj[key] = `${prefix}.${key}`;
  });
}

export default (prefix, keys) => {
  if (!prefix && !keys) {
    throw new Error('keymirror: missing arguments');
  }

  if (!keys) {
    keys = prefix;
    prefix = '';
  }

  if (!Array.isArray(keys)) {
    throw new Error('keymirror: keys must be an array');
  }

  if (prefix.length) {
    prefix += '.';
  }

  const result = {};
  keys.forEach(key => {
    result[key] = prefix + key;
  });

  return result;
};
