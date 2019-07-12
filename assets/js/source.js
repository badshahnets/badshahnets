$(document).ready(function() {
  $('#contact-form').submit(function(e) {
    var firstname    = document.getElementById('firstname')
    var lastname   = document.getElementById('lastname')
    var message = document.getElementById('comment')
    var phone   = document.getElementById('phone')
    var email = document.getElementById('email')

    if (!firstname.value || !email.value || !message.value) {
      alertify.error("Please check your entries");
      return false;
    } else {
      $.ajax({
        method: 'POST',
        url: '//formspree.io/info@badshahnets.com',
        data: $('#contact-form').serialize(),
        datatype: 'json'
      });
      e.preventDefault();
      $(this).get(0).reset();
      alertify.success("Message sent");
    }
  });
});