require.ensure(['./a' ,'./b'], function(require) {

  var contentA = require('./a');
  var contentB = require('./b');
  document.open();
  document.write('<h1>' + contentA + '</h1>');
  document.write('<h1>' + contentB + '</h1>');
  document.close();

},'a_and_b');

