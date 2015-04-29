Meteor jQuery Animation Callback
================================

Simple callback for CSS3 animations with jquery

Installation  
------------

``` sh
meteor add gwendall:jquery-animation-callback
```

Methods
-------

**$(selector).onAnimationEnd(callback, animationName)**  
``animationName`` allows to set the callback on a given animation (or multiple animations if you pass an array).

**$(selector).onTransitionEnd(callback)**  

Example
-------

``` javascript
$(".item").onAnimationEnd(function(animationName) {
  console.log("The animation '" + animationName + "' ended on this element.");
}, ["fadeIn", "fadeOut"]);
```
