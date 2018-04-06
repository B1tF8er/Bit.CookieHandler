/**
 * Cookie handler module
 */
var cookieHandler = cookieHandler || (function cookieHandlerModule(assert) {
    /**
     * Local module variables
     */
    var local = {
        cookies: [],
        totalCookies: 0,
        isDebug: true
    };

    /**
     * IIFE to modify the array prototype
     */
    (function modifyArrayPrototype() {
        if (!Array.prototype.any) {
            debug('Array.prototype.any added');

            Array.prototype.any = function anyElementsInArray() {
                return this.length > 0;
            };
        } else {
            debug('Array.prototype.any already exists');
        }
    })();

    /**
     * Logs a message to console when debug is active
     * @param {string} message 
     */
    function debug(message) {
        assert.isString(name);

        if (local.isDebug) {
            console.log(message);
        }
    }

    /**
     * Gets all the cookies from the browser or the local scope
     */
    function getCookies() {
        var cookiesSplitted = document.cookie.split(';');
        var thereAreNoLocalCookies = cookiesSplitted.any() && !local.cookies.any();
        var cookiesChanged = local.totalCookies !== cookiesSplitted.length;

        if (thereAreNoLocalCookies || cookiesChanged) {
            local.cookies = cookiesSplitted
                .map(cookie => {
                    var nameValue = cookie.split('=').map(value => value.trim());

                    return {
                        name: nameValue[0],
                        value: nameValue[1]
                    };
                });

            local.totalCookies = local.cookies.length;

            debug('we got cookies from browser');
        } else {
            debug('we got cookies from local scope');
        }

        return local.cookies;
    }

    /**
     * Gets a cookie by name from the local scope
     * @param {string} name name of the cookie
     */
    function getCookie(name) {
        assert.isString(name);

        var tempCookies = local.cookies;

        return tempCookies.any() ?
            tempCookies.filter(cookie => cookie.name.toLowerCase() === name.toLowerCase()).shift() :
            null;
    }

    /**
     * Sets a cookie in the browser with an optional expiration date
     * @param {string} name name of the cookie
     * @param {any} value value of the cookie
     * @param {number} days days to expire the cookie
     */
    function setCookie(name, value, days) {
        assert.isString(name);
        assert.notNull(value);
        assert.notUndefined(value);
        arguments.length === 3 ? assert.isNumber(days) : true;

        var expires = '';
        var date = null;

        if (days) {
            date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toUTCString();
        }

        document.cookie = name + '=' + (value || '') + expires + '; path=/';

        // update local scope cookies
        getCookies();
    }

    /**
     * Removes a cookie by name from the browser
     * @param {string} name name of the cookie to be removed
     */
    function removeCookie(name) {
        assert.isString(name);

        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';

        // update local scope cookies
        getCookies();
    }

    /**
     * Exposed API functionality
     */
    var API = {
        getAll: getCookies,
        get: getCookie,
        set: setCookie,
        remove: removeCookie
    };
    return API;
})(assert);