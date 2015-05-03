var animations = ["animationend", "webkitAnimationEnd", "oAnimationEnd", "MSAnimationEnd", "msAnimationEnd"];
var transitions = ["transitionend", "webkitTransitionEnd", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"];
var all = animations.concat(transitions);

var fn = function(events, callback) {
  $(document).delegate(this.selector, events.join(" "), function(e) {
    callback && callback.apply(e.currentTarget, [e]);
  });
}

$.fn.onAnimationEnd = function(callback) {
  return fn.apply(this, [animations, callback]);
};

$.fn.onTransitionEnd = function(callback) {
  return fn.apply(this, [transitions, callback]);
};

$.fn.onAnimationOrTransitionEnd = function(callback) {
  return fn.apply(this, [all, callback]);
};
