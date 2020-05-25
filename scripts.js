(function ($) {
$(document).ready(function() {
  var values = {
    cv: 0,
    cf: 0,
    scv: 0,
    ie: 0
  };

  function calculateFeasibility() {
    // cv = 45 points
    var cv = 45 * (values.cv * 10 / 100);
    // cf = 15 points if Yes
    var cf = values.cf === 1 ? 15 : 0;
    // scv = 40 points
    var scv = 40 * (values.scv * 10 / 100);

    // ie = 50 points
    var ie = 50 * (values.ie * 10 / 100);

    $('.feasibilityScore').text((cv + cf + scv) - ie);
  };

  $('button').click(function() {
    var group = $(this).data('group');
    
    // clear group's active
    $('button[data-group="' + group + '"]').removeClass('active');

    // make this button active
    $(this).addClass('active');

    // set value
    values[group] = $(this).data('value');

    calculateFeasibility();
  });
});
})(jQuery);
