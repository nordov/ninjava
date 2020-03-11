const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateLoginInput(data) {
    let errors = {};

    console.log(data);

    data.name = validText(data.name) ? data.name : '';
    data.password = validText(data.avatar) ? data.avatar : '';

    if (Validator.isEmpty(data.name))
        errors.name = 'Must name your fighter!';

    if (Validator.isEmpty(data.avatar))
        errors.avatar = 'Dont forgert to choose a fighter!';

    return {
        errors,
        isValid: Object.keys(errors).lenght === 0
    };
};