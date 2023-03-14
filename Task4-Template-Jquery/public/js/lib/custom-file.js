$(document).ready(function () { 
    $("#registration").validate({
        errorClass: "error fail-alert",
        validClass: "valid success-alert",
        rules: {
            firstname:{ 
                required: true,
                minlength: 4
            },
            lastname: {
                required: true,
                minlength: 3
            },
            password: {
                required: true,
                minlength: 5,
                maxlength:8
            },
            confirmpassword: {
                required: true,
                minlength: 5,
                maxlength:8,
                equalTo: "#password"
            },
            emailaddress: {
                required: true,
                email: true,
            },
            phonenumber:{ 
                required: true,
                maxlength:10,
                minlength: 10
            },
            agree:{
                required: true,
            }
        },
        messages: {
            firstname: {
                required: " Please enter a first name",
                minlength: " Your firstname must consist of at least 4 characters"
            },
            lastname: {
                required: " Please enter a last name",
                minlength: " Your lastname must consist of at least 3 characters"
            },
            password: {
                required: " Please enter a password",
                minlength: " Your password must be consist of at least 5 characters",
            },
            confirmpassword: {
                required: " Please enter a password",
                minlength: " Your password must be consist of at least 5 characters",
                equalTo: " Please enter the same password as above"
            },
            phonenumber: {
                required: " Please enter a phone number",
                minlength: " Your phonenumber must be consist of at least 10 characters",
            },
            agree:{
                required:"Please accept our policy",
            }
        },
    });
});

$(document).ready(function(){
    $('#cbshowpassword').click(function(){
        $('#password').attr('type', $(this).is(':checked')? 'text':'password');
    });
});

$(document).ready(function(){
    $('#cbshowpassword2').click(function(){
        $('#confirmpassword').attr('type', $(this).is(':checked')? 'text':'password');
    })
});





