export default class Validator {
  constructor(username) {
    this.name = username;
  }

  validateUsername() {
    const validateOne = /^[\w-]*$/i.test(this.name);
    const validateTwo = !/\d{4,}/.test(this.name);
    const validateTree = /^[^-_\d]/.test(this.name);
    const validateFour = /[^-_\d]$/.test(this.name);
    return (validateOne && validateTwo && validateTree && validateFour);
  }
}
