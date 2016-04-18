/**
 * Created by daniel.irwin on 4/10/16.
 */

/**
 * turns an array of parent children relationships into a map of maps of maps of maps of maps of maps mof maps of maps..
 *
 * lets assume someting like the following for object structure
 *
 * [
 * { id: 123, parent : 1}
 * { id : 23, parent : 2}
 * {}
 * {}
 * {}
 * ]
 * @param array
 * @param unique-identifier (id)
 */
module.exports = function toHierarchy(array, uid){

    var toMap = require('../sets/toMap');

    var map = toMap(array, uid);

    Object.keys(map).forEach(function hier(leaf){
        if(map[leaf].parent){
            var parent = map[map[leaf].parent];
            if(!parent.children){
                parent.children = [];
            }
            parent.children.push(map[leaf]);
        }
        if(map[leaf].children){
            var tmp = [];
            map[leaf].children.forEach(function eachChild(child){
                tmp.push(map[child]);
            });
            map[leaf].children = tmp;
        }
    });
};