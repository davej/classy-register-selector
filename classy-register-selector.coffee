selectorControllerCount = 0

angular.module('classy-register-selector', ['classy-core']).classy.plugin.controller
  name: 'register-selector'

  options:
    enabled: true

  preInit: (classConstructor, classObj, module) ->
    selector = classObj.el || classObj.selector
    if @options.enabled and selector
      # Register the controller using selector
      @registerSelector(module, selector, classConstructor)

  registerSelector: (module, selector, classConstructor) ->
    selectorControllerCount++
    controllerName = "ClassySelector#{selectorControllerCount}Controller"
    module.controller controllerName, classConstructor

    if angular.isElement(selector)
      selector.setAttribute('data-ng-controller', controllerName)
      return

    if angular.isString(selector)
      # Query the dom using jQuery if available, otherwise fallback to qSA
      els = window.jQuery?(selector) or document.querySelectorAll(selector)
    else if angular.isArray(selector)
      els = selector
    else return

    for el in els
      if angular.isElement(el)
        el.setAttribute('data-ng-controller', controllerName)