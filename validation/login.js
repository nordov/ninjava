const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateLoginInput(data){
    let errors = {};
    
    console.log(data);

    data.email = validText(data.email) ? data.email : '';
    data.password = validText(data.password) ? data.password : '';

    if (!Validator.isEmail(data.email))
        errors.email = 'Email is invalite!';
    
    if (Validator.isEmpty(data.email))
        errors.email = 'Email field is requirite!';

    if (Validator.isEmpty(data.password))  
        errors.password = 'Password field is required!';

    console.log(Object.keys(errors).lenght === 0);

    return{
        errors,
        isValid: Object.keys(errors).lenght === 0
    };
};