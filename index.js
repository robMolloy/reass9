const emptyObj = (obj)=>{
  if(Array.isArray(obj)) obj.splice(0,obj.length)
  else{
    const keys = Object.keys(obj);
    keys.forEach((k) => { delete obj[k]; });
  }
}

/**
 * 
 * @param {Object} reactiveVar 
 * @param {Object} newObject 
 */

export const reass9 = (reactiveVar, newObject = {}) => {
  emptyObj(reactiveVar)
  
  Object.assign(reactiveVar, newObject);
};