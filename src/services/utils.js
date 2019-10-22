import React from 'react';

function isNull(value) {
  return value === undefined || value === null;
}

function notNull(value) {
  return !isNull(value);
}

function isEmpty(value) {
  return (
    isNull(value) ||
    value === false ||
    (Object.keys(value).length === 0 && value.constructor === Object) ||
    value.length === 0
  );
}

function notEmpty(value) {
  return !isEmpty(value);
}

const isNumeric = n => !Number.isNaN(parseFloat(n)) && Number.isFinite(parseFloat(n));

const Utils = {
  isNull,
  notNull,
  isEmpty,
  notEmpty,
  isNumeric,
};

Utils.isNull.bind(Utils);
Utils.notNull.bind(Utils);

export default Utils;
