// Validate the form inputs

var validator = new FormValidator('mc1', [{
    name: 'user',
    display: 'Username',
    rules: 'required'
}, {
    name: 'pass',
    rules: 'required',
    display: 'Password'
}], function(errors, evt) {
    if (errors.length > 0){
        if (evt && evt.preventDefault) {
            evt.preventDefault();
        } else if (evt) {
            evt.returnValue = false;
        }

        var errorString = '';

        for (var i = 0, errorLength = errors.length; i < errorLength; i++) {
            errorString += errors[i].message + '<br />';
        }

        document.getElementById('error').innerHTML = errorString;

        document.getElementById('mc1-wrapper').className += " error";


    }
});
