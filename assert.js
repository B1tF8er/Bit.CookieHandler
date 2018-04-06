/**
 * Assert module
 */
var assert = assert || (function assertModule() {
    /**
     * Asserts a value is not null
     * @param {any} value value to be evaluated
     */
    const notNull = (value) => {
        if (value === null) {
            throw `${value} is null`;
        }
    };
    /**
     * Asserts a value is not undefined
     * @param {any} value value to be evaluated
     */
    const notUndefined = (value) => {
        if (value === undefined) {
            throw `${value} is undefined`;
        }
    };
    /**
     * Asserts a value is string
     * @param {any} value value to be evaluated
     */
    const isString = (value) => {
        if (typeof value !== 'string') {
            throw `${value} is not a string`;
        }
    };
    /**
     * Asserts a value is number
     * @param {any} value value to be evaluated
     */
    const isNumber = (value) => {
        if (typeof value !== 'number') {
            throw `${value} is not a number`;
        }
    };
    /**
     * Exposed API functionality
     */
    var API = {
        notNull: notNull,
        notUndefined: notUndefined,
        isString: isString,
        isNumber: isNumber
    };
    return API;
})();