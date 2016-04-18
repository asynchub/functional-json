/**
 * Created by daniel.irwin on 4/15/16.
 */

/**
 *
 * @param {tree} tree - a trunk/branches/leafs (json map of maps of maps...)
 * @param {function} filterFun - returns true/false if we keep branch
 * @param {boolean} killBranches - delete branches when parent is false
 * @param {boolean} inPlace - you too like to live dangerously
 * @returns tree
 */
module.exports = function treeFilter(tree, filterFun, killBranches, inPlace){

    if(!inPlace){
        tree = require('../clone')(tree);
    }
    var deep = require('../deep');

    var keys = Object.keys(tree);

    keys.forEach(function br(key){

    });

};