/**
 * 
 * @param {Object} reactiveVar 
 * @param {Object} newObject 
 */

export const reass9 = (reactiveVar, newObject = {}) => {
  const keys = Object.keys(reactiveVar);

  keys.forEach((k) => { delete reactiveVar[k]; });
  Object.assign(reactiveVar, newObject);
};