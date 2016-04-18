/**
 * Created by daniel.irwin on 4/10/16.
 */

/**
 * converts an object to another object based on some rules
 * formula look like :
 *      "eq:was.reading,minus:5,div:time"
 * the input object might look something like:
 *      { was : { reading : 7 } , time : 123456 }
 * @param object
 * @param conversionRules
 */


module.exports = function formula(){

    var deep = require('./deep');

    function compute(input, formula) {

        var operations = formula.split(',');

        var result;

        operations.forEach(function (operation) {
            var operands = operation.split(':');
            var fncName = operands[0];

            switch (fncName) {
                case '=':
                    result = deep(input, operands[1]);
                    break;
                case '+':
                    result = deep(input, operands[1]);
                    break;
                case '/':
                    result = deep(input, operands[1]);
                    break;
                case '-':
                    result = deep(input, operands[1]);
                    break;
                case '*':
                    result = deep(input, operands[1]);
                    break;
                case '*=':
                    result = deep(input, operands[1]);
                    break;
                case '+=':
                    result = deep(input, operands[1]);
                    break;
                case '-=':
                    result = deep(input, operands[1]);
                    break;
                case '/=':
                    result = deep(input, operands[1]);
                    break;
                case '==':
                    result = deep(input, operands[1]);
                    break;
            }
        });

    }

    return compute;
}();