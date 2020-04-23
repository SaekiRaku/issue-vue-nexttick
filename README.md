# How to run

Open the `vue2.5.html` and `vue2.6.html` in browser directly

# Issue

There are 2 web app (`vue2.5.html` and `vue2.6.html`) based on the same JS code file (`app.js`), the difference between the html files is the version of Vue.

But the CSS transition react a different behavior (the class of CSS transition is added by v-bind), by clicking `Toggle Expand` on the web, it should collapse or expand the list of random length with animation.

And it works fine on Vue 2.5.1, but failed on Vue 2.6.11 (Also tested on Vue 2.6.1 which is also failed). On Vue 2.6.11 the action of collapse didn't have animation and didn't trigger the transitionend event. But it can work when add a `setTimeout` inside the `$nextTick` callback. So I assumed that is because the class didn't finish binding after the `$nextTick`.

