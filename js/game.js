function makeVelocityCalculator(e_init, callback) {
  var x = e_init.clientX,
      y = e_init.clientY,
      t = Date.now(),
      total = null,
      max_speed = null;
  return function(e) {
    var new_x = e.clientX,
        new_y = e.clientY,
        new_t = Date.now(),
        new_total = e.total,
        speed = e.max_speed;
        var x_dist = new_x - x,
        y_dist = new_y - y,
        interval = new_t - t;
    // update values:
    x = new_x;
    y = new_y;
    t = new_t;
    total = total_score;
    var velocity = Math.sqrt(x_dist*x_dist+y_dist*y_dist)/interval;
    var total_score = Math.sqrt(x_dist+y_dist)/interval;
    callback(velocity, total_score);
  };
}
$(document).ready(function() {
  var box = $('#game').on("mousemove", function(e) {
    var score = $('.score');
    var log = makeVelocityCalculator(e, function(v) {
      score.text(v.toFixed(1)+" pixel/ms");
    });

    $(document).on("mouseleave", log).one("mouseup", function(){
      $(document).off("mousemove", log);
      box.text("");
    });
  });
});
