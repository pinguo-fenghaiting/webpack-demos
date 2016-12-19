/* jshint devel:true */

// var style = __inline('./index.inline.less');
// var tpl   = __inline('./index.tmpl');
// // var $ = require('jquery');


// require.loadCss({
//     name: 'index-page-style',
//     content: style
// });

var template = require('html!./index.html');
require('./style.css');


module.exports = {
    template
}
