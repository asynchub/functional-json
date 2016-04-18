/**
 * Created by daniel.irwin on 4/10/16.
 */

/**
 * unflattens an object keys must be dot annotated
 * ie. { 'i.am.a.cool.object' : {} }
 * == { i : { am : { a : { cool : { object : { }}}}}}
 * @param obj
 */
module.exports = function unflat(obj){

    var result = {};
    var deep = require('../deep');

    Object.keys(obj).forEach(function(key){
        deep(result, key, obj[key]);
    });

    return result;
};