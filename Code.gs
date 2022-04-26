function doGet(params) {
  try {
    let template = HtmlService.createTemplateFromFile('index');
    template.data = {
      'app_viewer_email': Session.getActiveUser().getEmail()
    };
    let html = template.evaluate();
    html.setTitle('Template Site');
    
    let output = HtmlService.createHtmlOutput(html);
    output.addMetaTag('viewport', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
    output.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    return output;
  }
  catch(ex) {
    return ContentService.createTextOutput(JSON.stringify(ex));
  }
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}