/**
 * Created by daniel.irwin on 4/10/16.
 */
module.exports = function deep(){

    function getDeepProperty(entity, accessor){
        if(!entity || !accessor){
            return undefined;
        }
        var arr = (accessor && accessor.constructor === Array) ? accessor : accessor.split('.');
        while(arr.length && (entity = entity[arr.shift()]));
        return entity;
    }

    function setDeepProperty(entity, accessor, value){
        var proxyEntity = entity, lastProxy, lastKey,
            props = (accessor && accessor.constructor === Array) ? accessor : accessor.split('.');
        props.forEach(function(key){
            lastProxy = proxyEntity;
            proxyEntity = proxyEntity[key];
            lastKey = key;
        });

        if(lastProxy && lastKey){
            lastProxy[lastKey] = value;
            return value;
        }
        else {
            throw new Error('Error creating KeyValuePair for ' + props);
        }
    }

    /**
     * @param entity
     * @param accessor
     * @param setValue(optional)
     *
     * Toggles between set or get depending on parameter count, if invalid, the behavior is undefined,
     * literally
     * @returns {value}
     */
    function getSetDeep(){
        if(arguments.length == 2){
            getDeepProperty(arguments[0], arguments[1]);
        }
        else if(arguments.length == 3){
            setDeepProperty(arguments[0], arguments[1], arguments[2]);
        }
        else {
            return undefined;
        }
    }

    return getSetDeep;

}();