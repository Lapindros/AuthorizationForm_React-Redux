import classNames from 'classnames';

const mergeClasses = (...classes) => classNames(classes);

const mergeModifiers = (baseClass, modifiers) => {
  if (!modifiers) return baseClass;

  const cssModifiers = modifiers instanceof Array ? modifiers.slice() : [modifiers];

  let result = baseClass;
  cssModifiers.forEach(modifier => {
    if (typeof modifier === 'string') {
      result += ` ${baseClass}--${modifier}`;
    }
  });

  return result;
};

const CssUtils = {
  mergeClasses,
  mergeModifiers,
};

export default CssUtils;
