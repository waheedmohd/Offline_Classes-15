$.validator.setDefaults( {
    submitHandler: function () {
        alert( "Form Submitted Successfully" );
    }
});


$('#register-form').validate({
    rules : {
        firstname : {
            required: true,
            minlength: 3
        },
        lastname : {
            required: true,
            minlength: 3
        },
        username : {
            required: true,
            minlength: 5
        },
        email : {
            required: true,
            email: true
        },
        password : {
            required: true,
            minlength: 5
        },
        c_password : {
            required: true,
            minlength: 5,
            equalTo: "#password"
        },
        about : {
            required: true
        },
        terms : {
            required: true
        }
    },
    messages : {
        firstname : {
            required: 'Please Enter a first name',
            minlength: 'Enter at least 3 letters for first name'
        },
        lastname : {
            required: 'Please Enter a last name',
            minlength: 'Enter at least 3 letters for last name'
        },
        username : {
            required: 'Please Enter a user name',
            minlength: 'Enter at least 5 letters for user name'
        },
        email : {
            required: 'Please Enter an email',
            email: 'Enter a Proper Email'
        },
        password : {
            required: 'Please Enter a Password',
            minlength: 'Enter at least 5 letters for Password'
        },
        c_password : {
            required: 'Please Enter a Confirm Password',
            minlength: 'Enter at least 5 letters for Confirm Password',
            equalTo: "Both the Passwords are NOT matched"
        },
        about : {
            required: 'Please Say About yourself ',
        },
        terms : {
            required: 'Please Accepts the Terms & Conditions'
        }
    },
    errorPlacement: function ( error, element ) {
        // Add the `invalid-feedback` class to the error element
        error.addClass( "invalid-feedback" );

        if ( element.prop( "type" ) === "checkbox" ) {
            error.insertAfter( element.next( "label" ) );
        } else {
            error.insertAfter( element );
        }
    },
    highlight: function ( element, errorClass, validClass ) {
        $( element ).addClass( "is-invalid" ).removeClass( "is-valid" );
    },
    unhighlight: function (element, errorClass, validClass) {
        $( element ).addClass( "is-valid" ).removeClass( "is-invalid" );
    }
});