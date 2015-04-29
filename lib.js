$.fn.onAnimationEnd = function(callback, animationName) {
  var animations = ["animationend", "webkitAnimationEnd", "oAnimationEnd", "MSAnimationEnd", "animationEnd", "msAnimationEnd"];
  $(document).delegate(this.selector, animations.join(" "), function(e) {
    var ev = e.originalEvent || e;
    if (animationName && Object.prototype.toString.call(animationName) === "[object Array]" && animationName.indexOf(ev.animationName) === -1) return;
    if (animationName && Object.prototype.toString.call(animationName) !== "[object Array]" && animationName !== ev.animationName) return;
    callback && callback.apply(this, [ev.animationName]);
  });
};

$.fn.onTransitionEnd = function(callback) {
  var transitions = ["transitionend", "webkitTransitionEnd", "oTransitionEnd", "MSTransitionEnd", "transitionEnd", "msTransitionEnd"];
  $(document).delegate(this.selector, transitions.join(" "), function(e) {
    var ev = e.originalEvent || e;
    callback && callback.apply(this, []);
  });
};
