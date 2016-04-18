/**
 * Created by daniel.irwin on 4/10/16.
 */

/**
 * union
 * @param obj1
 * @param obj2
 * @param deep
 * @returns {result|exports}
 */
module.exports = function union(obj1, obj2, deep){
    return require('./../jsonOperation')(obj1, obj2, deep, function unionOf2(o1, o2){
        return o1 || o2;
    });
};