(function($) {
  "use strict";

  //when dom is ready
  $(document).ready(function() {
    // Start Animated Number
    $(".counter-right").appear(function() {
      $(".animated-number").countTo({
        speed: 4000,
        refreshInterval: 60,
        formatter: function(value, options) {
          return value.toFixed(options.decimals);
        }
      });
    });
  });
  //dom ready end
})(jQuery);
