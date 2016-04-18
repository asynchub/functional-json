/**
 * Created by daniel.irwin on 4/10/16.
 */

/**
 * white list and black list properties in an object to clean it up!
 *  if its not a blackList, ts a whiteList
 * @param object
 * @param list
 * @param isBlackList
 * @returns {{}}
 */
module.exports = function filterProps(object, list, isBlackList){
    var result = {};

    Object.keys(object).forEach(function filter(key){
        if(isBlackList?(list.indexOf(key) === -1):(list.indexOf(key) !== -1)){
            result[key] = object[key];
        }
    });

    return result;
};