(function () {
var status = '';
  $(function () {
    $("#add-form").submit(function() {
      var $inputs = $(this).find(':input');
      var values = {};
      $inputs.each(function() {
        values[this.name] = $(this).val();
      });

      $.ajax({
        url: "/register",
        type: 'POST',
        data: values,
        success: function(data) {                
          $("#status").html(data);
        }
      });

      return false;
    });
    $("#login").click(function() {     
      var values = {       
        username: $('#username').val(),
        password: $('#password').val(),
      };      
      $.ajax({
        url: "/login",
        type: 'POST',
        data: values,
        success: function(data) {          
          $("#status").html(data);
        }
      });

      return false;
    });
  });
})();