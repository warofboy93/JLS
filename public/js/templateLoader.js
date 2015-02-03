(function ($) {
  var loadedTemplate = {};

  function loadTemplate(templatePath, callback) {
    if (loadedTemplate[templatePath]) {
      callback(loadedTemplate[templatePath]);
    } else {
      $.ajax({
        url: templatePath,
        success: function(template) {
          loadedTemplate[templatePath] = template;
          callback(template);
        }
      });
    }
  }

  function renderTemplate(templatePath, data, callback) {
    loadTemplate(templatePath, function(template) {
      var html = ejs.render(template, data);
      callback(html);
    });
  }

  this.renderTemplate = renderTemplate;
})(jQuery);