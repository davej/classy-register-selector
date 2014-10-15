// Generated by CoffeeScript 1.8.0
(function() {
  var selectorControllerCount;

  selectorControllerCount = 0;

  angular.module('classy-registerSelector', ['classy-core']).classy.plugin.controller({
    name: 'registerSelector',
    options: {
      enabled: true
    },
    preInit: function(classConstructor, classObj, module) {
      var selector;
      selector = classObj.el || classObj.selector;
      if (this.options.enabled && selector) {
        return this.registerSelector(module, selector, classConstructor);
      }
    },
    registerSelector: function(module, selector, classConstructor) {
      var controllerName, el, els, _i, _len, _results;
      selectorControllerCount++;
      controllerName = "ClassySelector" + selectorControllerCount + "Controller";
      module.controller(controllerName, classConstructor);
      if (angular.isElement(selector)) {
        selector.setAttribute('data-ng-controller', controllerName);
        return;
      }
      if (angular.isString(selector)) {
        els = (typeof window.jQuery === "function" ? window.jQuery(selector) : void 0) || document.querySelectorAll(selector);
      } else if (angular.isArray(selector)) {
        els = selector;
      } else {
        return;
      }
      _results = [];
      for (_i = 0, _len = els.length; _i < _len; _i++) {
        el = els[_i];
        if (angular.isElement(el)) {
          _results.push(el.setAttribute('data-ng-controller', controllerName));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    }
  });

}).call(this);