/**
 * Created by daniel.irwin on 4/10/16.
 */

/**
 * turns a hierarchy into a flat array of children and parents,
 *  because children are just as important as parents
 *
 *  assumed data structure
 *  [{}]
 *  or
 *  { id : { children : [{ id : 1, children : []},{id : 2, children : []},{id : 3, children : []}]}}
 *
 * @param map
 */
module.exports = function monarchy(map){
    var filterProp = require('../filterProps');
    var toMap = require('../sets/toMap');
    var array = [];

    if(map.forEach){
        //you lied this isn't a map, this is an array!
        map.forEach(function mapping(aMap){
            flatMap(null, aMap);
        });
    }
    else{
        flatMap(null, map);
    }


    function flatMap(parentId, map){

        var keys = Object.keys(map);

        var deep = require('../deep');

        keys.forEach(function (key){

            if(map[key].children){
                flatMap(key, toMap(map[key].children));
            }

            var newChild = filterProp(child, ['children'], true);
            newChild.parentId = parentId;
            array.push(newChild);
        });
    }

    return array;
};