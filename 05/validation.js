class Validation {
  static setValue(value) {
    this.value = value;

    return this;
  }

  static isStringType() {
    const isStringValid =
      typeof this.value === "string" && this.value.length > 2;
    if (!isStringValid)
      throw new Error(
        "subject must be a string type and longer than 2 letters"
      );

    return this;
  }

  static isNumberType() {
    const isNumberTypeValue =
      typeof this.value === "number" && !isNaN(this.value);
    if (!isNumberTypeValue) throw new Error("Value is not of type number");

    return this;
  }

  static isArray() {
    const isArray = Array.isArray(this.value);
    if (!isArray) throw new Error("value is not an array type");

    return this;
  }

  static isArrEmpty() {
    const isEmpty = this.value.length <= 0;
    if (isEmpty) throw new Error("Array has no elements");
  }
}

export default Validation;
