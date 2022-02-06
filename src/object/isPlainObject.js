
/**
 * @desc 判断obj是否为纯粹的对象{}
 * @param {Object} obj
 * @returns {Boolean}
 */
function isPlainObject(obj) {
  if(typeof obj !== 'object' || !obj) return false;

  let proto = obj;
  while(Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(obj) === proto;
}
module.exports = isPlainObject;