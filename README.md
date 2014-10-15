# Use DOM selectors to register Angular Classy controllers [![Build Status](https://travis-ci.org/davej/classy-registerSelector.svg)](https://travis-ci.org/davej/classy-registerSelector)

This feature is stolen from AngularDart (you may also be familiar with it from Backbone and other MVC frameworks). It's best explained with code.

This is how you would typically bind a controller to a view with Angular Classy:

```html
<!-- In your HTML -->
<div id="footer" ng-controller="FooterCtrl"></div>
```
```javascript
// In your JS
app.classy.controller({
  name: 'FooterCtrl',
  //...
});
```

If you want to reverse-reference controllers using CSS-style selectors then you simply give your controller an element selector reference instead of a name, like this:

```html
<!-- In your HTML -->
<div id="footer"></div>
```
```javascript
// In your JS
app.classy.controller({
  el: '#footer',
  //...
});
```

If available jQuery will be used as the selector engine, otherwise it will fallback to document.querySelectorAll. There is currently no test coverage for this feature so it's probably best not to use it in production (unless you're a badass).


## Install

Install with `bower`:

```shell
bower install classy-registerSelector
```

Add to your `index.html`:

```html
<script src="/bower_components/angular/angular.js"></script>
<script src="/bower_components/angular-classy/angular-classy.js"></script>
<script src="/bower_components/classy-registerSelector/classy-registerSelector.js"></script>
```

Add `classy` and `classy-registerSelector` to your application module.

```javascript
var app = angular.module('app', ['classy', 'classy-registerSelector']);
```

## Running Tests

Download this repo, `cd` into the repo's directory then run:

```shell
npm install
npm install -g bower # If bower isn't already installed
bower install
npm test
```


## License

The MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
