/**
 * Created by daniel.irwin on 4/10/16.
 */

/**
 * flattens object by using key dot annotation
 * ie. { i : { am : { a : { cool : { object : { }}}}}}
 * == { 'i.am.a.cool.object' : {} }
 * @param obj
 */
module.exports = function flat(obj){

    var result = {};

    var keys = Object.keys(obj);

    var deep = require('../deep');

    keys.forEach(function (key){
        var o = deep(obj, key);
        if(typeof o === 'object'){

            Object.keys(o).forEach(function (innerKey){
                keys.push(key+'.'+innerKey);
            });
        }
        else{
            result[key] = o;
        }

    });

    return result;
};