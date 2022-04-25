var app_viewer_email = Session.getActiveUser().getEmail();

//var search = e.parameter.search || ""; //If you want to use query string parameter
function doGet(e)
{
  var template = HtmlService.createTemplateFromFile('index');

  template.app_viewer_email = app_viewer_email;

  var html = template.evaluate();
  html.setTitle('Template Site');
  
  var output = HtmlService.createHtmlOutput(html);
  output.addMetaTag('viewport', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
  output.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  return output;
}