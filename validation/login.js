const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateLoginInput(data){
    let errors = {};
    
    //console.log(data);

    data.email = validText(data.email) ? data.email : '';
    data.password = validText(data.password) ? data.password : '';

    if (!Validator.isEmail(data.email))
        errors.email = 'Email invalid!';
    
    if (Validator.isEmpty(data.email))
        errors.email = 'Email is required!';

    if (Validator.isEmpty(data.password))  
        errors.password = 'Password is required!';

    console.log(Object.keys(errors).length === 0);

    return{
        errors,
        isValid: Object.keys(errors).length === 0
    };
};