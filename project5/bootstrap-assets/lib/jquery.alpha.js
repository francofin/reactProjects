  
define(["jquery"], function($) {
    $.fn.alpha = function() {
        return this.append('<p>Alpha is Go!</p>');
    };
  });