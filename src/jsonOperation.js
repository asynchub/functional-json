/**
 * Created by daniel.irwin on 4/10/16.
 */

/**
 * Operates on two objects values together
 *
 * @module jsonOperation
 *
 * @param {Object} obj1
 * @param {Object} obj2
 * @param {boolean} deep
 * @param {Function} operatorFunction - function to be done to lowest form values something like add(a, b) => {a + b}
 * @returns {Object} result
 */
module.exports = function jsonOperation(obj1, obj2, deep, operatorFunction){
    if(!operatorFunction || typeof operatorFunction !== 'function'){
        throw new Error('You cant just go around using methods you dont understand, read the documentation');
    }

    if((typeof obj1 === 'string' || typeof obj1 === 'number') && (typeof obj2 === 'string' || typeof obj2 === 'number')){
        return operatorFunction(obj1, obj2);
    }

    var result = {};

    if(deep){
        var flat = require('./flat');
        obj1 = flat(obj1);
        obj2 = flat(obj2);
    }

    function internalOperation(key){
        // don't proceed if value has already been initialized
        if(result[key] === undefined){

            if(typeof obj1[key] !== 'object' && typeof obj2[key] !== 'object') {
                //happy path, both are defined just add them
                if (obj1[key] !== undefined && obj2[key] !== undefined) {
                    result = operatorFunction(obj1[key], obj2[key]);
                }
                //set to obj1 because it seems ok
                else if (obj1[key] !== undefined) {
                    result = operatorFunction(obj1[key]);
                }
                //set to obj2 because it seems ok
                else if (obj2[key] !== undefined) {
                    result = operatorFunction(obj2[key]);
                }
            }
            else { //ok you probably said dont go deep, so your kind of being an ass, so lets do it recursively,
                // because you apparently want to, and I'll let you, but I warned you
                result[key] = jsonOperation(obj1[key], obj2[key], deep, operatorFunction);
            }
        }
    }

    //itterate over objects and add values of each, do this for both in-case objects are not cousins
    Object.keys(obj1).forEach(internalOperation);

    Object.keys(obj2).forEach(internalOperation);


    if(deep){
        var unflat = require('./unflat');
        result = unflat(result);
    }

    return result;
};