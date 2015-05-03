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

**$(selector).onAnimationEnd(callback)**  
**$(selector).onTransitionEnd(callback)**  
**$(selector).onAnimationOrTransitionEnd(callback)**  

Example
-------

``` javascript
$(".item").onAnimationEnd(function() {
  console.log("The animation ended on this element.");
});
```
