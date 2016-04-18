/**
 * Created by daniel.irwin on 4/10/16.
 */

/**
 * turns an array into a map,
 * by selecting a important property you want to index by
 * defaults to 'key', as this is the inverse of toArray
 * @param array
 */
module.exports = function toMap(array, propertyToIndexBy){
    var map = {};

    array.forEach(function mapping(element){
        //why do this you ask, if the propertyWe are keying by is missing, then fallback to key,
        // so the element doesn't die or get binned into the undefined key, which would suck
        map[element[propertyToIndexBy||'key'] || element.key] = element;
    });

    return map;
};