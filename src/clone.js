/**
 * Created by daniel.irwin on 4/15/16.
 */

/**
 * Lazy Copy Method
 * @param json
 * @returns {*}
 */
module.exports = function clone(json){
  return JSON.parse(JSON.stringify(json));
};