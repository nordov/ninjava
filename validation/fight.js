const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateLoginInput(data) {
    let errors = {};

    data.moves = validText(data.moves) ? data.moves : '';

    if (Validator.isEmpty(data.moves))
        errors.moves = 'Choose your moves!';

    return {
        errors,
        isValid: Object.keys(errors).lenght === 0
    };
};