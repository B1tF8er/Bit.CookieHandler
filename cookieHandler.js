class CookieHandler {
  constructor(assert, isDebug = false) {
    this.assert = assert;

    this.cookies = [];
    this.totalCookies = 0;
    this.isDebug = isDebug;

    if (!Array.prototype.any) {
      debug("Array.prototype.any added");

      Array.prototype.any = function anyElementsInArray() {
        return this.length > 0;
      };
    } else {
      debug("Array.prototype.any already exists");
    }
  }

  debug(message) {
    this.assert.isString(name);

    if (this.isDebug) {
      console.log(message);
    }
  }

  getCookies() {
    var cookiesSplitted = document.cookie.split(";");
    var thereAreNoLocalCookies = cookiesSplitted.any() && !this.cookies.any();
    var cookiesChanged = this.totalCookies !== cookiesSplitted.length;

    if (thereAreNoLocalCookies || cookiesChanged) {
      this.cookies = cookiesSplitted.map(cookie => {
        var nameValue = cookie.split("=").map(value => value.trim());

        return {
          name: nameValue[0],
          value: nameValue[1]
        };
      });

      this.totalCookies = this.cookies.length;

      debug("we got cookies from browser");
    } else {
      debug("we got cookies from local scope");
    }

    return this.cookies;
  }

  getCookie(name) {
    this.assert.isString(name);

    let tempCookies = this.getCookies();
    let cookie = null;

    if (tempCookies.any()) {
      cookie = tempCookies
        .filter(cookie => cookie.name.toLowerCase() === name.toLowerCase())
        .shift();
    }

    return cookie || null;
  }

  setCookie(name, value, days) {
    this.assert.isString(name);
    this.assert.notNull(value);
    this.assert.notUndefined(value);

    if (arguments.length === 3) {
      this.assert.isNumber(days);
    }

    var expires = "";
    var date = null;

    if (days) {
      date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }

    document.cookie = name + "=" + (value || "") + expires + "; path=/";

    this.getCookies();
  }

  removeCookie(name) {
    this.assert.isString(name);

    this.setCookie(name, "", -10);
    this.getCookies();
  }
}
