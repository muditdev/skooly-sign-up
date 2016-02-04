$(document).ready(function() {
  $('form').validate({
    rules: {
      school:{
        required: true,
        minlength: 20
      }
    },

    messages:{
      school:{
        required: '<br>Please enter your school name',
        minlength: '<br>Your School name already Exists'
      }
    }

  });

});
