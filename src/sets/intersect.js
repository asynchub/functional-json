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
module.exports = function intersect(obj1, obj2, deep){
    return require('./../jsonOperation')(obj1, obj2, deep, function intersection(o1, o2){
        if(o1 && o2){
            return o1;
        }
        return undefined;
    });
};