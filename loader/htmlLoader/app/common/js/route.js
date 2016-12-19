/**
 * @author xuyihan@camera360.com
 * @date 2016.11.25
 *
 * regist async module for loaded  when system is running
 * @require.async jqueryspa:app/page/index/index.js
 *  REQUIRE FILES HOOK
* @require.async jqueryspa:app/page/test/test.js 
* @require.async jqueryspa:app/page/xuxu1/xuxu1.js  
**/
var $ = require('jquery');

(function(){

    var navigation = function() {

        $('body').empty(); 
         
        var hash = location.hash.split("#")[1] || 'index';
        var path = 'jqueryspa:app/page/'+ hash +'/' + hash;
        
        require.async(path, function (page) {
            page.render();
        });
    }

    navigation();

    window.addEventListener('hashchange', function () {
        navigation();
    }, false);

})();
