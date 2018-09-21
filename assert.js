class Assert {
  static notNull(value) {
    if (value === null) {
      throw `${value} is null`;
    }
  }

  static notUndefined(value) {
    if (value === undefined) {
      throw `${value} is undefined`;
    }
  }

  static isString(value) {
    if (typeof value !== "string") {
      throw `${value} is not a string`;
    }
  }

  static isNumber(value) {
    if (typeof value !== "number") {
      throw `${value} is not a number`;
    }
  }
}
