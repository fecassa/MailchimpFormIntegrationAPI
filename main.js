$(document).ready(function(){
    $("#form-ajax").submit(function(){
      
      var email = $('#email').val();

      
      $.post('integracao.php', {email: email}, function(data, status){alert(data)});

      return false;
    });
  });