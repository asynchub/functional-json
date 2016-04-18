/**
 * Created by daniel.irwin on 4/10/16.
 */

/**
 * turns a map into an array
 * basically we take the key, and put that inside the object
 * we will put it in the property key, unless otherwise specified,
 * will override anything already in the "key" property, so dont be an idiot
 * @param map
 */
module.exports = function toArray(map, nameOfKeyProperty){

    var array = [];

    Object.keys(map).forEach(function arraying(index){
        map[index][nameOfKeyProperty || 'key'] = index;
        array.push(map[index]);
    });

    return array;
};