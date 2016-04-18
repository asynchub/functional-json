/**
 * Created by daniel.irwin on 4/10/16.
 */

/**
 * converts an object to another object based on some rules
 * rules look like :
 *      [{ to : "value", formula : "eq:$last_reading,minus:5,div:$time" }]
 * the input object might look something like:
 *      { last_reading : 7, time : 123456 }
 * @param object
 * @param conversionRules
 */
module.exports = function objectConversion(object, conversionRules){

};