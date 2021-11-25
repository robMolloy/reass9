/**
 * 
 * @param {Object} reactiveVar 
 * @param {Object} newObject 
 */

export const reass9 = (reactiveVar, newObject = {}) => {
  const keys = Object.keys(reactiveVar);
  const newKeys = Object.keys(newObject);
  const missedKeys = keys.filter((k) => !newKeys.includes(k));

  Object.assign(reactiveVar, newObject);
  missedKeys.forEach((k) => { delete reactiveVar[k]; });
};