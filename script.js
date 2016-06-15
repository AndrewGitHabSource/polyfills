/* pollyfill create */
if (typeof Object.create != "function") {
    Object.create = function (object, properties) {
        var newObject = null,
            formedObject = function () {};

        /* check type parameters in function */
        if (typeof object == 'undefined') {
            throw TypeError("[object] first parameter required");
        }
        if (typeof object != 'object') {
            throw TypeError("[object] first parameter must be prototype of object");
        }

        formedObject.prototype = object;
        newObject = new formedObject();

        /* add properties in object */
        if (properties) {
            if (typeof properties != 'object') {
                throw TypeError("[object] second parameter must be object");
            }
            for (var key in properties) {
                newObject[key] = properties[key];
            }
        }

        return newObject;
    }
}



/* pollyfill assign */
if (typeof Object.assign != "function") {
    Object.assign = function (target) {
        var element = null;

        /* check parameters in function */
        if (target == "undefined") {
            throw "Uncaught TypeError: undefined parameter";
        }
        if (typeof target !== 'object') {
            throw "Uncaught TypeError: Cannot assign to read only property '0' of object";
        }

        for (var i = 1; i < arguments.length; i++) {
            element = arguments[i];
            if (element != null) {
                for (var key in element) {
                    target[key] = element[key];
                }
            }
        }

        return target;
    }
}