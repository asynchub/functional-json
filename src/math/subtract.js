/**
 * Created by daniel.irwin on 4/10/16.
 */

/**
 * Subtracts two objects values together, this is safe if they are flat, and only strings/numbers
 * if you need deep, that third parameter is your friend, however be warned, recursion is a devil of
 * a mistress, and shall steer you in the direction of hell itself, also its slow, and dangerous on really deep objects
 * on the other hand I haven't even written the flat/unflat yet, and will do my best to write them iteratively hopefully
 * blowing some minds in the process, in fact at the moment I write this comment, I haven't written this function as well!
 *
 * @param obj1
 * @param obj2
 * @param deep
 */
module.exports = function subtract(obj1, obj2, deep){
    return require('./../jsonOperation')(obj1, obj2, deep, function subtraction(o1, o2){
        if(o1 !== undefined && o2 !== undefined){
            return o1 - o2;
        }
        return o1 || o2;
    });
};