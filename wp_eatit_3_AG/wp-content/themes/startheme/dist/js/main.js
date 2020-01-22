/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/bootstrap/dist/js/bootstrap.js":
/*!*****************************************************!*\
  !*** ./node_modules/bootstrap/dist/js/bootstrap.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * Bootstrap v4.4.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports, __webpack_require__(/*! jquery */ "jquery"), __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! jquery */ "jquery"), __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function (exports, $, Popper) {
  'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
  Popper = Popper && Popper.hasOwnProperty('default') ? Popper['default'] : Popper;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.4.1): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */


  var TRANSITION_END = 'transitionend';
  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: TRANSITION_END,
      delegateType: TRANSITION_END,
      handle: function handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }

        return undefined; // eslint-disable-line no-undefined
      }
    };
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;
    $(this).one(Util.TRANSITION_END, function () {
      called = true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);
    return this;
  }

  function setTransitionEndSupport() {
    $.fn.emulateTransitionEnd = transitionEndEmulator;
    $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector || selector === '#') {
        var hrefAttr = element.getAttribute('href');
        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
      }

      try {
        return document.querySelector(selector) ? selector : null;
      } catch (err) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
      if (!element) {
        return 0;
      } // Get transition-duration of the element


      var transitionDuration = $(element).css('transition-duration');
      var transitionDelay = $(element).css('transition-delay');
      var floatTransitionDuration = parseFloat(transitionDuration);
      var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

      if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0;
      } // If multiple durations are defined, take the first


      transitionDuration = transitionDuration.split(',')[0];
      transitionDelay = transitionDelay.split(',')[0];
      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $(element).trigger(TRANSITION_END);
    },
    // TODO: Remove in v5
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(TRANSITION_END);
    },
    isElement: function isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && Util.isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          }
        }
      }
    },
    findShadowRoot: function findShadowRoot(element) {
      if (!document.documentElement.attachShadow) {
        return null;
      } // Can find the shadow root otherwise it'll return the document


      if (typeof element.getRootNode === 'function') {
        var root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
      }

      if (element instanceof ShadowRoot) {
        return element;
      } // when we don't find a shadow root


      if (!element.parentNode) {
        return null;
      }

      return Util.findShadowRoot(element.parentNode);
    },
    jQueryDetection: function jQueryDetection() {
      if (typeof $ === 'undefined') {
        throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
      }

      var version = $.fn.jquery.split(' ')[0].split('.');
      var minMajor = 1;
      var ltMajor = 2;
      var minMinor = 9;
      var minPatch = 1;
      var maxMajor = 4;

      if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
        throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
      }
    }
  };
  Util.jQueryDetection();
  setTransitionEndSupport();
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'alert';
  var VERSION = '4.4.1';
  var DATA_KEY = 'bs.alert';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var Selector = {
    DISMISS: '[data-dismiss="alert"]'
  };
  var Event = {
    CLOSE: "close" + EVENT_KEY,
    CLOSED: "closed" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    ALERT: 'alert',
    FADE: 'fade',
    SHOW: 'show'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Alert =
  /*#__PURE__*/
  function () {
    function Alert(element) {
      this._element = element;
    } // Getters


    var _proto = Alert.prototype; // Public

    _proto.close = function close(element) {
      var rootElement = this._element;

      if (element) {
        rootElement = this._getRootElement(element);
      }

      var customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent.isDefaultPrevented()) {
        return;
      }

      this._removeElement(rootElement);
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      this._element = null;
    } // Private
    ;

    _proto._getRootElement = function _getRootElement(element) {
      var selector = Util.getSelectorFromElement(element);
      var parent = false;

      if (selector) {
        parent = document.querySelector(selector);
      }

      if (!parent) {
        parent = $(element).closest("." + ClassName.ALERT)[0];
      }

      return parent;
    };

    _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
      var closeEvent = $.Event(Event.CLOSE);
      $(element).trigger(closeEvent);
      return closeEvent;
    };

    _proto._removeElement = function _removeElement(element) {
      var _this = this;

      $(element).removeClass(ClassName.SHOW);

      if (!$(element).hasClass(ClassName.FADE)) {
        this._destroyElement(element);

        return;
      }

      var transitionDuration = Util.getTransitionDurationFromElement(element);
      $(element).one(Util.TRANSITION_END, function (event) {
        return _this._destroyElement(element, event);
      }).emulateTransitionEnd(transitionDuration);
    };

    _proto._destroyElement = function _destroyElement(element) {
      $(element).detach().trigger(Event.CLOSED).remove();
    } // Static
    ;

    Alert._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Alert(this);
          $element.data(DATA_KEY, data);
        }

        if (config === 'close') {
          data[config](this);
        }
      });
    };

    Alert._handleDismiss = function _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    };

    _createClass(Alert, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return Alert;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Alert._jQueryInterface;
  $.fn[NAME].Constructor = Alert;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Alert._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$1 = 'button';
  var VERSION$1 = '4.4.1';
  var DATA_KEY$1 = 'bs.button';
  var EVENT_KEY$1 = "." + DATA_KEY$1;
  var DATA_API_KEY$1 = '.data-api';
  var JQUERY_NO_CONFLICT$1 = $.fn[NAME$1];
  var ClassName$1 = {
    ACTIVE: 'active',
    BUTTON: 'btn',
    FOCUS: 'focus'
  };
  var Selector$1 = {
    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
    DATA_TOGGLES: '[data-toggle="buttons"]',
    DATA_TOGGLE: '[data-toggle="button"]',
    DATA_TOGGLES_BUTTONS: '[data-toggle="buttons"] .btn',
    INPUT: 'input:not([type="hidden"])',
    ACTIVE: '.active',
    BUTTON: '.btn'
  };
  var Event$1 = {
    CLICK_DATA_API: "click" + EVENT_KEY$1 + DATA_API_KEY$1,
    FOCUS_BLUR_DATA_API: "focus" + EVENT_KEY$1 + DATA_API_KEY$1 + " " + ("blur" + EVENT_KEY$1 + DATA_API_KEY$1),
    LOAD_DATA_API: "load" + EVENT_KEY$1 + DATA_API_KEY$1
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Button =
  /*#__PURE__*/
  function () {
    function Button(element) {
      this._element = element;
    } // Getters


    var _proto = Button.prototype; // Public

    _proto.toggle = function toggle() {
      var triggerChangeEvent = true;
      var addAriaPressed = true;
      var rootElement = $(this._element).closest(Selector$1.DATA_TOGGLES)[0];

      if (rootElement) {
        var input = this._element.querySelector(Selector$1.INPUT);

        if (input) {
          if (input.type === 'radio') {
            if (input.checked && this._element.classList.contains(ClassName$1.ACTIVE)) {
              triggerChangeEvent = false;
            } else {
              var activeElement = rootElement.querySelector(Selector$1.ACTIVE);

              if (activeElement) {
                $(activeElement).removeClass(ClassName$1.ACTIVE);
              }
            }
          } else if (input.type === 'checkbox') {
            if (this._element.tagName === 'LABEL' && input.checked === this._element.classList.contains(ClassName$1.ACTIVE)) {
              triggerChangeEvent = false;
            }
          } else {
            // if it's not a radio button or checkbox don't add a pointless/invalid checked property to the input
            triggerChangeEvent = false;
          }

          if (triggerChangeEvent) {
            input.checked = !this._element.classList.contains(ClassName$1.ACTIVE);
            $(input).trigger('change');
          }

          input.focus();
          addAriaPressed = false;
        }
      }

      if (!(this._element.hasAttribute('disabled') || this._element.classList.contains('disabled'))) {
        if (addAriaPressed) {
          this._element.setAttribute('aria-pressed', !this._element.classList.contains(ClassName$1.ACTIVE));
        }

        if (triggerChangeEvent) {
          $(this._element).toggleClass(ClassName$1.ACTIVE);
        }
      }
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$1);
      this._element = null;
    } // Static
    ;

    Button._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$1);

        if (!data) {
          data = new Button(this);
          $(this).data(DATA_KEY$1, data);
        }

        if (config === 'toggle') {
          data[config]();
        }
      });
    };

    _createClass(Button, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$1;
      }
    }]);

    return Button;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$1.CLICK_DATA_API, Selector$1.DATA_TOGGLE_CARROT, function (event) {
    var button = event.target;

    if (!$(button).hasClass(ClassName$1.BUTTON)) {
      button = $(button).closest(Selector$1.BUTTON)[0];
    }

    if (!button || button.hasAttribute('disabled') || button.classList.contains('disabled')) {
      event.preventDefault(); // work around Firefox bug #1540995
    } else {
      var inputBtn = button.querySelector(Selector$1.INPUT);

      if (inputBtn && (inputBtn.hasAttribute('disabled') || inputBtn.classList.contains('disabled'))) {
        event.preventDefault(); // work around Firefox bug #1540995

        return;
      }

      Button._jQueryInterface.call($(button), 'toggle');
    }
  }).on(Event$1.FOCUS_BLUR_DATA_API, Selector$1.DATA_TOGGLE_CARROT, function (event) {
    var button = $(event.target).closest(Selector$1.BUTTON)[0];
    $(button).toggleClass(ClassName$1.FOCUS, /^focus(in)?$/.test(event.type));
  });
  $(window).on(Event$1.LOAD_DATA_API, function () {
    // ensure correct active class is set to match the controls' actual values/states
    // find all checkboxes/readio buttons inside data-toggle groups
    var buttons = [].slice.call(document.querySelectorAll(Selector$1.DATA_TOGGLES_BUTTONS));

    for (var i = 0, len = buttons.length; i < len; i++) {
      var button = buttons[i];
      var input = button.querySelector(Selector$1.INPUT);

      if (input.checked || input.hasAttribute('checked')) {
        button.classList.add(ClassName$1.ACTIVE);
      } else {
        button.classList.remove(ClassName$1.ACTIVE);
      }
    } // find all button toggles


    buttons = [].slice.call(document.querySelectorAll(Selector$1.DATA_TOGGLE));

    for (var _i = 0, _len = buttons.length; _i < _len; _i++) {
      var _button = buttons[_i];

      if (_button.getAttribute('aria-pressed') === 'true') {
        _button.classList.add(ClassName$1.ACTIVE);
      } else {
        _button.classList.remove(ClassName$1.ACTIVE);
      }
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$1] = Button._jQueryInterface;
  $.fn[NAME$1].Constructor = Button;

  $.fn[NAME$1].noConflict = function () {
    $.fn[NAME$1] = JQUERY_NO_CONFLICT$1;
    return Button._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$2 = 'carousel';
  var VERSION$2 = '4.4.1';
  var DATA_KEY$2 = 'bs.carousel';
  var EVENT_KEY$2 = "." + DATA_KEY$2;
  var DATA_API_KEY$2 = '.data-api';
  var JQUERY_NO_CONFLICT$2 = $.fn[NAME$2];
  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD = 40;
  var Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  };
  var DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  var Direction = {
    NEXT: 'next',
    PREV: 'prev',
    LEFT: 'left',
    RIGHT: 'right'
  };
  var Event$2 = {
    SLIDE: "slide" + EVENT_KEY$2,
    SLID: "slid" + EVENT_KEY$2,
    KEYDOWN: "keydown" + EVENT_KEY$2,
    MOUSEENTER: "mouseenter" + EVENT_KEY$2,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$2,
    TOUCHSTART: "touchstart" + EVENT_KEY$2,
    TOUCHMOVE: "touchmove" + EVENT_KEY$2,
    TOUCHEND: "touchend" + EVENT_KEY$2,
    POINTERDOWN: "pointerdown" + EVENT_KEY$2,
    POINTERUP: "pointerup" + EVENT_KEY$2,
    DRAG_START: "dragstart" + EVENT_KEY$2,
    LOAD_DATA_API: "load" + EVENT_KEY$2 + DATA_API_KEY$2,
    CLICK_DATA_API: "click" + EVENT_KEY$2 + DATA_API_KEY$2
  };
  var ClassName$2 = {
    CAROUSEL: 'carousel',
    ACTIVE: 'active',
    SLIDE: 'slide',
    RIGHT: 'carousel-item-right',
    LEFT: 'carousel-item-left',
    NEXT: 'carousel-item-next',
    PREV: 'carousel-item-prev',
    ITEM: 'carousel-item',
    POINTER_EVENT: 'pointer-event'
  };
  var Selector$2 = {
    ACTIVE: '.active',
    ACTIVE_ITEM: '.active.carousel-item',
    ITEM: '.carousel-item',
    ITEM_IMG: '.carousel-item img',
    NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
    INDICATORS: '.carousel-indicators',
    DATA_SLIDE: '[data-slide], [data-slide-to]',
    DATA_RIDE: '[data-ride="carousel"]'
  };
  var PointerType = {
    TOUCH: 'touch',
    PEN: 'pen'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Carousel =
  /*#__PURE__*/
  function () {
    function Carousel(element, config) {
      this._items = null;
      this._interval = null;
      this._activeElement = null;
      this._isPaused = false;
      this._isSliding = false;
      this.touchTimeout = null;
      this.touchStartX = 0;
      this.touchDeltaX = 0;
      this._config = this._getConfig(config);
      this._element = element;
      this._indicatorsElement = this._element.querySelector(Selector$2.INDICATORS);
      this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);

      this._addEventListeners();
    } // Getters


    var _proto = Carousel.prototype; // Public

    _proto.next = function next() {
      if (!this._isSliding) {
        this._slide(Direction.NEXT);
      }
    };

    _proto.nextWhenVisible = function nextWhenVisible() {
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && $(this._element).is(':visible') && $(this._element).css('visibility') !== 'hidden') {
        this.next();
      }
    };

    _proto.prev = function prev() {
      if (!this._isSliding) {
        this._slide(Direction.PREV);
      }
    };

    _proto.pause = function pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if (this._element.querySelector(Selector$2.NEXT_PREV)) {
        Util.triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    };

    _proto.cycle = function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config.interval && !this._isPaused) {
        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    };

    _proto.to = function to(index) {
      var _this = this;

      this._activeElement = this._element.querySelector(Selector$2.ACTIVE_ITEM);

      var activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        $(this._element).one(Event$2.SLID, function () {
          return _this.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var direction = index > activeIndex ? Direction.NEXT : Direction.PREV;

      this._slide(direction, this._items[index]);
    };

    _proto.dispose = function dispose() {
      $(this._element).off(EVENT_KEY$2);
      $.removeData(this._element, DATA_KEY$2);
      this._items = null;
      this._config = null;
      this._element = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default, {}, config);
      Util.typeCheckConfig(NAME$2, config, DefaultType);
      return config;
    };

    _proto._handleSwipe = function _handleSwipe() {
      var absDeltax = Math.abs(this.touchDeltaX);

      if (absDeltax <= SWIPE_THRESHOLD) {
        return;
      }

      var direction = absDeltax / this.touchDeltaX;
      this.touchDeltaX = 0; // swipe left

      if (direction > 0) {
        this.prev();
      } // swipe right


      if (direction < 0) {
        this.next();
      }
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      if (this._config.keyboard) {
        $(this._element).on(Event$2.KEYDOWN, function (event) {
          return _this2._keydown(event);
        });
      }

      if (this._config.pause === 'hover') {
        $(this._element).on(Event$2.MOUSEENTER, function (event) {
          return _this2.pause(event);
        }).on(Event$2.MOUSELEAVE, function (event) {
          return _this2.cycle(event);
        });
      }

      if (this._config.touch) {
        this._addTouchEventListeners();
      }
    };

    _proto._addTouchEventListeners = function _addTouchEventListeners() {
      var _this3 = this;

      if (!this._touchSupported) {
        return;
      }

      var start = function start(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchStartX = event.originalEvent.clientX;
        } else if (!_this3._pointerEvent) {
          _this3.touchStartX = event.originalEvent.touches[0].clientX;
        }
      };

      var move = function move(event) {
        // ensure swiping with one touch and not pinching
        if (event.originalEvent.touches && event.originalEvent.touches.length > 1) {
          _this3.touchDeltaX = 0;
        } else {
          _this3.touchDeltaX = event.originalEvent.touches[0].clientX - _this3.touchStartX;
        }
      };

      var end = function end(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
        }

        _this3._handleSwipe();

        if (_this3._config.pause === 'hover') {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          _this3.pause();

          if (_this3.touchTimeout) {
            clearTimeout(_this3.touchTimeout);
          }

          _this3.touchTimeout = setTimeout(function (event) {
            return _this3.cycle(event);
          }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
        }
      };

      $(this._element.querySelectorAll(Selector$2.ITEM_IMG)).on(Event$2.DRAG_START, function (e) {
        return e.preventDefault();
      });

      if (this._pointerEvent) {
        $(this._element).on(Event$2.POINTERDOWN, function (event) {
          return start(event);
        });
        $(this._element).on(Event$2.POINTERUP, function (event) {
          return end(event);
        });

        this._element.classList.add(ClassName$2.POINTER_EVENT);
      } else {
        $(this._element).on(Event$2.TOUCHSTART, function (event) {
          return start(event);
        });
        $(this._element).on(Event$2.TOUCHMOVE, function (event) {
          return move(event);
        });
        $(this._element).on(Event$2.TOUCHEND, function (event) {
          return end(event);
        });
      }
    };

    _proto._keydown = function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          event.preventDefault();
          this.prev();
          break;

        case ARROW_RIGHT_KEYCODE:
          event.preventDefault();
          this.next();
          break;
      }
    };

    _proto._getItemIndex = function _getItemIndex(element) {
      this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(Selector$2.ITEM)) : [];
      return this._items.indexOf(element);
    };

    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      var isNextDirection = direction === Direction.NEXT;
      var isPrevDirection = direction === Direction.PREV;

      var activeIndex = this._getItemIndex(activeElement);

      var lastItemIndex = this._items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }

      var delta = direction === Direction.PREV ? -1 : 1;
      var itemIndex = (activeIndex + delta) % this._items.length;
      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    };

    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex = this._getItemIndex(relatedTarget);

      var fromIndex = this._getItemIndex(this._element.querySelector(Selector$2.ACTIVE_ITEM));

      var slideEvent = $.Event(Event$2.SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
      $(this._element).trigger(slideEvent);
      return slideEvent;
    };

    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        var indicators = [].slice.call(this._indicatorsElement.querySelectorAll(Selector$2.ACTIVE));
        $(indicators).removeClass(ClassName$2.ACTIVE);

        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

        if (nextIndicator) {
          $(nextIndicator).addClass(ClassName$2.ACTIVE);
        }
      }
    };

    _proto._slide = function _slide(direction, element) {
      var _this4 = this;

      var activeElement = this._element.querySelector(Selector$2.ACTIVE_ITEM);

      var activeElementIndex = this._getItemIndex(activeElement);

      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

      var nextElementIndex = this._getItemIndex(nextElement);

      var isCycling = Boolean(this._interval);
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;

      if (direction === Direction.NEXT) {
        directionalClassName = ClassName$2.LEFT;
        orderClassName = ClassName$2.NEXT;
        eventDirectionName = Direction.LEFT;
      } else {
        directionalClassName = ClassName$2.RIGHT;
        orderClassName = ClassName$2.PREV;
        eventDirectionName = Direction.RIGHT;
      }

      if (nextElement && $(nextElement).hasClass(ClassName$2.ACTIVE)) {
        this._isSliding = false;
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

      if (slideEvent.isDefaultPrevented()) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      var slidEvent = $.Event(Event$2.SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });

      if ($(this._element).hasClass(ClassName$2.SLIDE)) {
        $(nextElement).addClass(orderClassName);
        Util.reflow(nextElement);
        $(activeElement).addClass(directionalClassName);
        $(nextElement).addClass(directionalClassName);
        var nextElementInterval = parseInt(nextElement.getAttribute('data-interval'), 10);

        if (nextElementInterval) {
          this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
          this._config.interval = nextElementInterval;
        } else {
          this._config.interval = this._config.defaultInterval || this._config.interval;
        }

        var transitionDuration = Util.getTransitionDurationFromElement(activeElement);
        $(activeElement).one(Util.TRANSITION_END, function () {
          $(nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(ClassName$2.ACTIVE);
          $(activeElement).removeClass(ClassName$2.ACTIVE + " " + orderClassName + " " + directionalClassName);
          _this4._isSliding = false;
          setTimeout(function () {
            return $(_this4._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        $(activeElement).removeClass(ClassName$2.ACTIVE);
        $(nextElement).addClass(ClassName$2.ACTIVE);
        this._isSliding = false;
        $(this._element).trigger(slidEvent);
      }

      if (isCycling) {
        this.cycle();
      }
    } // Static
    ;

    Carousel._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$2);

        var _config = _objectSpread2({}, Default, {}, $(this).data());

        if (_typeof(config) === 'object') {
          _config = _objectSpread2({}, _config, {}, config);
        }

        var action = typeof config === 'string' ? config : _config.slide;

        if (!data) {
          data = new Carousel(this, _config);
          $(this).data(DATA_KEY$2, data);
        }

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (typeof data[action] === 'undefined') {
            throw new TypeError("No method named \"" + action + "\"");
          }

          data[action]();
        } else if (_config.interval && _config.ride) {
          data.pause();
          data.cycle();
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      var selector = Util.getSelectorFromElement(this);

      if (!selector) {
        return;
      }

      var target = $(selector)[0];

      if (!target || !$(target).hasClass(ClassName$2.CAROUSEL)) {
        return;
      }

      var config = _objectSpread2({}, $(target).data(), {}, $(this).data());

      var slideIndex = this.getAttribute('data-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel._jQueryInterface.call($(target), config);

      if (slideIndex) {
        $(target).data(DATA_KEY$2).to(slideIndex);
      }

      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$2;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Carousel;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$2.CLICK_DATA_API, Selector$2.DATA_SLIDE, Carousel._dataApiClickHandler);
  $(window).on(Event$2.LOAD_DATA_API, function () {
    var carousels = [].slice.call(document.querySelectorAll(Selector$2.DATA_RIDE));

    for (var i = 0, len = carousels.length; i < len; i++) {
      var $carousel = $(carousels[i]);

      Carousel._jQueryInterface.call($carousel, $carousel.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$2] = Carousel._jQueryInterface;
  $.fn[NAME$2].Constructor = Carousel;

  $.fn[NAME$2].noConflict = function () {
    $.fn[NAME$2] = JQUERY_NO_CONFLICT$2;
    return Carousel._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$3 = 'collapse';
  var VERSION$3 = '4.4.1';
  var DATA_KEY$3 = 'bs.collapse';
  var EVENT_KEY$3 = "." + DATA_KEY$3;
  var DATA_API_KEY$3 = '.data-api';
  var JQUERY_NO_CONFLICT$3 = $.fn[NAME$3];
  var Default$1 = {
    toggle: true,
    parent: ''
  };
  var DefaultType$1 = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  var Event$3 = {
    SHOW: "show" + EVENT_KEY$3,
    SHOWN: "shown" + EVENT_KEY$3,
    HIDE: "hide" + EVENT_KEY$3,
    HIDDEN: "hidden" + EVENT_KEY$3,
    CLICK_DATA_API: "click" + EVENT_KEY$3 + DATA_API_KEY$3
  };
  var ClassName$3 = {
    SHOW: 'show',
    COLLAPSE: 'collapse',
    COLLAPSING: 'collapsing',
    COLLAPSED: 'collapsed'
  };
  var Dimension = {
    WIDTH: 'width',
    HEIGHT: 'height'
  };
  var Selector$3 = {
    ACTIVES: '.show, .collapsing',
    DATA_TOGGLE: '[data-toggle="collapse"]'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Collapse =
  /*#__PURE__*/
  function () {
    function Collapse(element, config) {
      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
      var toggleList = [].slice.call(document.querySelectorAll(Selector$3.DATA_TOGGLE));

      for (var i = 0, len = toggleList.length; i < len; i++) {
        var elem = toggleList[i];
        var selector = Util.getSelectorFromElement(elem);
        var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
          return foundElem === element;
        });

        if (selector !== null && filterElement.length > 0) {
          this._selector = selector;

          this._triggerArray.push(elem);
        }
      }

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    } // Getters


    var _proto = Collapse.prototype; // Public

    _proto.toggle = function toggle() {
      if ($(this._element).hasClass(ClassName$3.SHOW)) {
        this.hide();
      } else {
        this.show();
      }
    };

    _proto.show = function show() {
      var _this = this;

      if (this._isTransitioning || $(this._element).hasClass(ClassName$3.SHOW)) {
        return;
      }

      var actives;
      var activesData;

      if (this._parent) {
        actives = [].slice.call(this._parent.querySelectorAll(Selector$3.ACTIVES)).filter(function (elem) {
          if (typeof _this._config.parent === 'string') {
            return elem.getAttribute('data-parent') === _this._config.parent;
          }

          return elem.classList.contains(ClassName$3.COLLAPSE);
        });

        if (actives.length === 0) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $(actives).not(this._selector).data(DATA_KEY$3);

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = $.Event(Event$3.SHOW);
      $(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      if (actives) {
        Collapse._jQueryInterface.call($(actives).not(this._selector), 'hide');

        if (!activesData) {
          $(actives).data(DATA_KEY$3, null);
        }
      }

      var dimension = this._getDimension();

      $(this._element).removeClass(ClassName$3.COLLAPSE).addClass(ClassName$3.COLLAPSING);
      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        $(this._triggerArray).removeClass(ClassName$3.COLLAPSED).attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        $(_this._element).removeClass(ClassName$3.COLLAPSING).addClass(ClassName$3.COLLAPSE).addClass(ClassName$3.SHOW);
        _this._element.style[dimension] = '';

        _this.setTransitioning(false);

        $(_this._element).trigger(Event$3.SHOWN);
      };

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll" + capitalizedDimension;
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      this._element.style[dimension] = this._element[scrollSize] + "px";
    };

    _proto.hide = function hide() {
      var _this2 = this;

      if (this._isTransitioning || !$(this._element).hasClass(ClassName$3.SHOW)) {
        return;
      }

      var startEvent = $.Event(Event$3.HIDE);
      $(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
      Util.reflow(this._element);
      $(this._element).addClass(ClassName$3.COLLAPSING).removeClass(ClassName$3.COLLAPSE).removeClass(ClassName$3.SHOW);
      var triggerArrayLength = this._triggerArray.length;

      if (triggerArrayLength > 0) {
        for (var i = 0; i < triggerArrayLength; i++) {
          var trigger = this._triggerArray[i];
          var selector = Util.getSelectorFromElement(trigger);

          if (selector !== null) {
            var $elem = $([].slice.call(document.querySelectorAll(selector)));

            if (!$elem.hasClass(ClassName$3.SHOW)) {
              $(trigger).addClass(ClassName$3.COLLAPSED).attr('aria-expanded', false);
            }
          }
        }
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this2.setTransitioning(false);

        $(_this2._element).removeClass(ClassName$3.COLLAPSING).addClass(ClassName$3.COLLAPSE).trigger(Event$3.HIDDEN);
      };

      this._element.style[dimension] = '';
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
    };

    _proto.setTransitioning = function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$3);
      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default$1, {}, config);
      config.toggle = Boolean(config.toggle); // Coerce string values

      Util.typeCheckConfig(NAME$3, config, DefaultType$1);
      return config;
    };

    _proto._getDimension = function _getDimension() {
      var hasWidth = $(this._element).hasClass(Dimension.WIDTH);
      return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
    };

    _proto._getParent = function _getParent() {
      var _this3 = this;

      var parent;

      if (Util.isElement(this._config.parent)) {
        parent = this._config.parent; // It's a jQuery object

        if (typeof this._config.parent.jquery !== 'undefined') {
          parent = this._config.parent[0];
        }
      } else {
        parent = document.querySelector(this._config.parent);
      }

      var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
      var children = [].slice.call(parent.querySelectorAll(selector));
      $(children).each(function (i, element) {
        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });
      return parent;
    };

    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      var isOpen = $(element).hasClass(ClassName$3.SHOW);

      if (triggerArray.length) {
        $(triggerArray).toggleClass(ClassName$3.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
      }
    } // Static
    ;

    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      var selector = Util.getSelectorFromElement(element);
      return selector ? document.querySelector(selector) : null;
    };

    Collapse._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY$3);

        var _config = _objectSpread2({}, Default$1, {}, $this.data(), {}, _typeof(config) === 'object' && config ? config : {});

        if (!data && _config.toggle && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
          $this.data(DATA_KEY$3, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Collapse, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$3;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$1;
      }
    }]);

    return Collapse;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$3.CLICK_DATA_API, Selector$3.DATA_TOGGLE, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.currentTarget.tagName === 'A') {
      event.preventDefault();
    }

    var $trigger = $(this);
    var selector = Util.getSelectorFromElement(this);
    var selectors = [].slice.call(document.querySelectorAll(selector));
    $(selectors).each(function () {
      var $target = $(this);
      var data = $target.data(DATA_KEY$3);
      var config = data ? 'toggle' : $trigger.data();

      Collapse._jQueryInterface.call($target, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$3] = Collapse._jQueryInterface;
  $.fn[NAME$3].Constructor = Collapse;

  $.fn[NAME$3].noConflict = function () {
    $.fn[NAME$3] = JQUERY_NO_CONFLICT$3;
    return Collapse._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$4 = 'dropdown';
  var VERSION$4 = '4.4.1';
  var DATA_KEY$4 = 'bs.dropdown';
  var EVENT_KEY$4 = "." + DATA_KEY$4;
  var DATA_API_KEY$4 = '.data-api';
  var JQUERY_NO_CONFLICT$4 = $.fn[NAME$4];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
  var Event$4 = {
    HIDE: "hide" + EVENT_KEY$4,
    HIDDEN: "hidden" + EVENT_KEY$4,
    SHOW: "show" + EVENT_KEY$4,
    SHOWN: "shown" + EVENT_KEY$4,
    CLICK: "click" + EVENT_KEY$4,
    CLICK_DATA_API: "click" + EVENT_KEY$4 + DATA_API_KEY$4,
    KEYDOWN_DATA_API: "keydown" + EVENT_KEY$4 + DATA_API_KEY$4,
    KEYUP_DATA_API: "keyup" + EVENT_KEY$4 + DATA_API_KEY$4
  };
  var ClassName$4 = {
    DISABLED: 'disabled',
    SHOW: 'show',
    DROPUP: 'dropup',
    DROPRIGHT: 'dropright',
    DROPLEFT: 'dropleft',
    MENURIGHT: 'dropdown-menu-right',
    MENULEFT: 'dropdown-menu-left',
    POSITION_STATIC: 'position-static'
  };
  var Selector$4 = {
    DATA_TOGGLE: '[data-toggle="dropdown"]',
    FORM_CHILD: '.dropdown form',
    MENU: '.dropdown-menu',
    NAVBAR_NAV: '.navbar-nav',
    VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'
  };
  var AttachmentMap = {
    TOP: 'top-start',
    TOPEND: 'top-end',
    BOTTOM: 'bottom-start',
    BOTTOMEND: 'bottom-end',
    RIGHT: 'right-start',
    RIGHTEND: 'right-end',
    LEFT: 'left-start',
    LEFTEND: 'left-end'
  };
  var Default$2 = {
    offset: 0,
    flip: true,
    boundary: 'scrollParent',
    reference: 'toggle',
    display: 'dynamic',
    popperConfig: null
  };
  var DefaultType$2 = {
    offset: '(number|string|function)',
    flip: 'boolean',
    boundary: '(string|element)',
    reference: '(string|element)',
    display: 'string',
    popperConfig: '(null|object)'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Dropdown =
  /*#__PURE__*/
  function () {
    function Dropdown(element, config) {
      this._element = element;
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();

      this._addEventListeners();
    } // Getters


    var _proto = Dropdown.prototype; // Public

    _proto.toggle = function toggle() {
      if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED)) {
        return;
      }

      var isActive = $(this._menu).hasClass(ClassName$4.SHOW);

      Dropdown._clearMenus();

      if (isActive) {
        return;
      }

      this.show(true);
    };

    _proto.show = function show(usePopper) {
      if (usePopper === void 0) {
        usePopper = false;
      }

      if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED) || $(this._menu).hasClass(ClassName$4.SHOW)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $.Event(Event$4.SHOW, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      } // Disable totally Popper.js for Dropdown in Navbar


      if (!this._inNavbar && usePopper) {
        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper === 'undefined') {
          throw new TypeError('Bootstrap\'s dropdowns require Popper.js (https://popper.js.org/)');
        }

        var referenceElement = this._element;

        if (this._config.reference === 'parent') {
          referenceElement = parent;
        } else if (Util.isElement(this._config.reference)) {
          referenceElement = this._config.reference; // Check if it's jQuery element

          if (typeof this._config.reference.jquery !== 'undefined') {
            referenceElement = this._config.reference[0];
          }
        } // If boundary is not `scrollParent`, then set position to `static`
        // to allow the menu to "escape" the scroll parent's boundaries
        // https://github.com/twbs/bootstrap/issues/24251


        if (this._config.boundary !== 'scrollParent') {
          $(parent).addClass(ClassName$4.POSITION_STATIC);
        }

        this._popper = new Popper(referenceElement, this._menu, this._getPopperConfig());
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && $(parent).closest(Selector$4.NAVBAR_NAV).length === 0) {
        $(document.body).children().on('mouseover', null, $.noop);
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      $(this._menu).toggleClass(ClassName$4.SHOW);
      $(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.SHOWN, relatedTarget));
    };

    _proto.hide = function hide() {
      if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED) || !$(this._menu).hasClass(ClassName$4.SHOW)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var hideEvent = $.Event(Event$4.HIDE, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $(parent).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      if (this._popper) {
        this._popper.destroy();
      }

      $(this._menu).toggleClass(ClassName$4.SHOW);
      $(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.HIDDEN, relatedTarget));
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$4);
      $(this._element).off(EVENT_KEY$4);
      this._element = null;
      this._menu = null;

      if (this._popper !== null) {
        this._popper.destroy();

        this._popper = null;
      }
    };

    _proto.update = function update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Private
    ;

    _proto._addEventListeners = function _addEventListeners() {
      var _this = this;

      $(this._element).on(Event$4.CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();

        _this.toggle();
      });
    };

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, this.constructor.Default, {}, $(this._element).data(), {}, config);
      Util.typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
      return config;
    };

    _proto._getMenuElement = function _getMenuElement() {
      if (!this._menu) {
        var parent = Dropdown._getParentFromElement(this._element);

        if (parent) {
          this._menu = parent.querySelector(Selector$4.MENU);
        }
      }

      return this._menu;
    };

    _proto._getPlacement = function _getPlacement() {
      var $parentDropdown = $(this._element.parentNode);
      var placement = AttachmentMap.BOTTOM; // Handle dropup

      if ($parentDropdown.hasClass(ClassName$4.DROPUP)) {
        placement = AttachmentMap.TOP;

        if ($(this._menu).hasClass(ClassName$4.MENURIGHT)) {
          placement = AttachmentMap.TOPEND;
        }
      } else if ($parentDropdown.hasClass(ClassName$4.DROPRIGHT)) {
        placement = AttachmentMap.RIGHT;
      } else if ($parentDropdown.hasClass(ClassName$4.DROPLEFT)) {
        placement = AttachmentMap.LEFT;
      } else if ($(this._menu).hasClass(ClassName$4.MENURIGHT)) {
        placement = AttachmentMap.BOTTOMEND;
      }

      return placement;
    };

    _proto._detectNavbar = function _detectNavbar() {
      return $(this._element).closest('.navbar').length > 0;
    };

    _proto._getOffset = function _getOffset() {
      var _this2 = this;

      var offset = {};

      if (typeof this._config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _objectSpread2({}, data.offsets, {}, _this2._config.offset(data.offsets, _this2._element) || {});
          return data;
        };
      } else {
        offset.offset = this._config.offset;
      }

      return offset;
    };

    _proto._getPopperConfig = function _getPopperConfig() {
      var popperConfig = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      }; // Disable Popper.js if we have a static display

      if (this._config.display === 'static') {
        popperConfig.modifiers.applyStyle = {
          enabled: false
        };
      }

      return _objectSpread2({}, popperConfig, {}, this._config.popperConfig);
    } // Static
    ;

    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$4);

        var _config = _typeof(config) === 'object' ? config : null;

        if (!data) {
          data = new Dropdown(this, _config);
          $(this).data(DATA_KEY$4, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return;
      }

      var toggles = [].slice.call(document.querySelectorAll(Selector$4.DATA_TOGGLE));

      for (var i = 0, len = toggles.length; i < len; i++) {
        var parent = Dropdown._getParentFromElement(toggles[i]);

        var context = $(toggles[i]).data(DATA_KEY$4);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (event && event.type === 'click') {
          relatedTarget.clickEvent = event;
        }

        if (!context) {
          continue;
        }

        var dropdownMenu = context._menu;

        if (!$(parent).hasClass(ClassName$4.SHOW)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $.contains(parent, event.target)) {
          continue;
        }

        var hideEvent = $.Event(Event$4.HIDE, relatedTarget);
        $(parent).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          continue;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          $(document.body).children().off('mouseover', null, $.noop);
        }

        toggles[i].setAttribute('aria-expanded', 'false');

        if (context._popper) {
          context._popper.destroy();
        }

        $(dropdownMenu).removeClass(ClassName$4.SHOW);
        $(parent).removeClass(ClassName$4.SHOW).trigger($.Event(Event$4.HIDDEN, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      var parent;
      var selector = Util.getSelectorFromElement(element);

      if (selector) {
        parent = document.querySelector(selector);
      }

      return parent || element.parentNode;
    } // eslint-disable-next-line complexity
    ;

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $(event.target).closest(Selector$4.MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (this.disabled || $(this).hasClass(ClassName$4.DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this);

      var isActive = $(parent).hasClass(ClassName$4.SHOW);

      if (!isActive && event.which === ESCAPE_KEYCODE) {
        return;
      }

      if (!isActive || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
        if (event.which === ESCAPE_KEYCODE) {
          var toggle = parent.querySelector(Selector$4.DATA_TOGGLE);
          $(toggle).trigger('focus');
        }

        $(this).trigger('click');
        return;
      }

      var items = [].slice.call(parent.querySelectorAll(Selector$4.VISIBLE_ITEMS)).filter(function (item) {
        return $(item).is(':visible');
      });

      if (items.length === 0) {
        return;
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) {
        // Up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // Down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$4;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$2;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$2;
      }
    }]);

    return Dropdown;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$4.KEYDOWN_DATA_API, Selector$4.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event$4.KEYDOWN_DATA_API, Selector$4.MENU, Dropdown._dataApiKeydownHandler).on(Event$4.CLICK_DATA_API + " " + Event$4.KEYUP_DATA_API, Dropdown._clearMenus).on(Event$4.CLICK_DATA_API, Selector$4.DATA_TOGGLE, function (event) {
    event.preventDefault();
    event.stopPropagation();

    Dropdown._jQueryInterface.call($(this), 'toggle');
  }).on(Event$4.CLICK_DATA_API, Selector$4.FORM_CHILD, function (e) {
    e.stopPropagation();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$4] = Dropdown._jQueryInterface;
  $.fn[NAME$4].Constructor = Dropdown;

  $.fn[NAME$4].noConflict = function () {
    $.fn[NAME$4] = JQUERY_NO_CONFLICT$4;
    return Dropdown._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$5 = 'modal';
  var VERSION$5 = '4.4.1';
  var DATA_KEY$5 = 'bs.modal';
  var EVENT_KEY$5 = "." + DATA_KEY$5;
  var DATA_API_KEY$5 = '.data-api';
  var JQUERY_NO_CONFLICT$5 = $.fn[NAME$5];
  var ESCAPE_KEYCODE$1 = 27; // KeyboardEvent.which value for Escape (Esc) key

  var Default$3 = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };
  var DefaultType$3 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };
  var Event$5 = {
    HIDE: "hide" + EVENT_KEY$5,
    HIDE_PREVENTED: "hidePrevented" + EVENT_KEY$5,
    HIDDEN: "hidden" + EVENT_KEY$5,
    SHOW: "show" + EVENT_KEY$5,
    SHOWN: "shown" + EVENT_KEY$5,
    FOCUSIN: "focusin" + EVENT_KEY$5,
    RESIZE: "resize" + EVENT_KEY$5,
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY$5,
    KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY$5,
    MOUSEUP_DISMISS: "mouseup.dismiss" + EVENT_KEY$5,
    MOUSEDOWN_DISMISS: "mousedown.dismiss" + EVENT_KEY$5,
    CLICK_DATA_API: "click" + EVENT_KEY$5 + DATA_API_KEY$5
  };
  var ClassName$5 = {
    SCROLLABLE: 'modal-dialog-scrollable',
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    SHOW: 'show',
    STATIC: 'modal-static'
  };
  var Selector$5 = {
    DIALOG: '.modal-dialog',
    MODAL_BODY: '.modal-body',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    STICKY_CONTENT: '.sticky-top'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Modal =
  /*#__PURE__*/
  function () {
    function Modal(element, config) {
      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = element.querySelector(Selector$5.DIALOG);
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
      this._scrollbarWidth = 0;
    } // Getters


    var _proto = Modal.prototype; // Public

    _proto.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    _proto.show = function show(relatedTarget) {
      var _this = this;

      if (this._isShown || this._isTransitioning) {
        return;
      }

      if ($(this._element).hasClass(ClassName$5.FADE)) {
        this._isTransitioning = true;
      }

      var showEvent = $.Event(Event$5.SHOW, {
        relatedTarget: relatedTarget
      });
      $(this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();

      this._setScrollbar();

      this._adjustDialog();

      this._setEscapeEvent();

      this._setResizeEvent();

      $(this._element).on(Event$5.CLICK_DISMISS, Selector$5.DATA_DISMISS, function (event) {
        return _this.hide(event);
      });
      $(this._dialog).on(Event$5.MOUSEDOWN_DISMISS, function () {
        $(_this._element).one(Event$5.MOUSEUP_DISMISS, function (event) {
          if ($(event.target).is(_this._element)) {
            _this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this2 = this;

      if (event) {
        event.preventDefault();
      }

      if (!this._isShown || this._isTransitioning) {
        return;
      }

      var hideEvent = $.Event(Event$5.HIDE);
      $(this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;
      var transition = $(this._element).hasClass(ClassName$5.FADE);

      if (transition) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      $(document).off(Event$5.FOCUSIN);
      $(this._element).removeClass(ClassName$5.SHOW);
      $(this._element).off(Event$5.CLICK_DISMISS);
      $(this._dialog).off(Event$5.MOUSEDOWN_DISMISS);

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, function (event) {
          return _this2._hideModal(event);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      [window, this._element, this._dialog].forEach(function (htmlElement) {
        return $(htmlElement).off(EVENT_KEY$5);
      });
      /**
       * `document` has 2 events `Event.FOCUSIN` and `Event.CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `Event.CLICK_DATA_API` event that should remain
       */

      $(document).off(Event$5.FOCUSIN);
      $.removeData(this._element, DATA_KEY$5);
      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._isTransitioning = null;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      this._adjustDialog();
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default$3, {}, config);
      Util.typeCheckConfig(NAME$5, config, DefaultType$3);
      return config;
    };

    _proto._triggerBackdropTransition = function _triggerBackdropTransition() {
      var _this3 = this;

      if (this._config.backdrop === 'static') {
        var hideEventPrevented = $.Event(Event$5.HIDE_PREVENTED);
        $(this._element).trigger(hideEventPrevented);

        if (hideEventPrevented.defaultPrevented) {
          return;
        }

        this._element.classList.add(ClassName$5.STATIC);

        var modalTransitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, function () {
          _this3._element.classList.remove(ClassName$5.STATIC);
        }).emulateTransitionEnd(modalTransitionDuration);

        this._element.focus();
      } else {
        this.hide();
      }
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this4 = this;

      var transition = $(this._element).hasClass(ClassName$5.FADE);
      var modalBody = this._dialog ? this._dialog.querySelector(Selector$5.MODAL_BODY) : null;

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      if ($(this._dialog).hasClass(ClassName$5.SCROLLABLE) && modalBody) {
        modalBody.scrollTop = 0;
      } else {
        this._element.scrollTop = 0;
      }

      if (transition) {
        Util.reflow(this._element);
      }

      $(this._element).addClass(ClassName$5.SHOW);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $.Event(Event$5.SHOWN, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this4._config.focus) {
          _this4._element.focus();
        }

        _this4._isTransitioning = false;
        $(_this4._element).trigger(shownEvent);
      };

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._dialog);
        $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
      } else {
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this5 = this;

      $(document).off(Event$5.FOCUSIN) // Guard against infinite focus loop
      .on(Event$5.FOCUSIN, function (event) {
        if (document !== event.target && _this5._element !== event.target && $(_this5._element).has(event.target).length === 0) {
          _this5._element.focus();
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this6 = this;

      if (this._isShown && this._config.keyboard) {
        $(this._element).on(Event$5.KEYDOWN_DISMISS, function (event) {
          if (event.which === ESCAPE_KEYCODE$1) {
            _this6._triggerBackdropTransition();
          }
        });
      } else if (!this._isShown) {
        $(this._element).off(Event$5.KEYDOWN_DISMISS);
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this7 = this;

      if (this._isShown) {
        $(window).on(Event$5.RESIZE, function (event) {
          return _this7.handleUpdate(event);
        });
      } else {
        $(window).off(Event$5.RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this8 = this;

      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._isTransitioning = false;

      this._showBackdrop(function () {
        $(document.body).removeClass(ClassName$5.OPEN);

        _this8._resetAdjustments();

        _this8._resetScrollbar();

        $(_this8._element).trigger(Event$5.HIDDEN);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        $(this._backdrop).remove();
        this._backdrop = null;
      }
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this9 = this;

      var animate = $(this._element).hasClass(ClassName$5.FADE) ? ClassName$5.FADE : '';

      if (this._isShown && this._config.backdrop) {
        this._backdrop = document.createElement('div');
        this._backdrop.className = ClassName$5.BACKDROP;

        if (animate) {
          this._backdrop.classList.add(animate);
        }

        $(this._backdrop).appendTo(document.body);
        $(this._element).on(Event$5.CLICK_DISMISS, function (event) {
          if (_this9._ignoreBackdropClick) {
            _this9._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          _this9._triggerBackdropTransition();
        });

        if (animate) {
          Util.reflow(this._backdrop);
        }

        $(this._backdrop).addClass(ClassName$5.SHOW);

        if (!callback) {
          return;
        }

        if (!animate) {
          callback();
          return;
        }

        var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
        $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
      } else if (!this._isShown && this._backdrop) {
        $(this._backdrop).removeClass(ClassName$5.SHOW);

        var callbackRemove = function callbackRemove() {
          _this9._removeBackdrop();

          if (callback) {
            callback();
          }
        };

        if ($(this._element).hasClass(ClassName$5.FADE)) {
          var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);

          $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------
    ;

    _proto._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      var rect = document.body.getBoundingClientRect();
      this._isBodyOverflowing = rect.left + rect.right < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this10 = this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var fixedContent = [].slice.call(document.querySelectorAll(Selector$5.FIXED_CONTENT));
        var stickyContent = [].slice.call(document.querySelectorAll(Selector$5.STICKY_CONTENT)); // Adjust fixed content padding

        $(fixedContent).each(function (index, element) {
          var actualPadding = element.style.paddingRight;
          var calculatedPadding = $(element).css('padding-right');
          $(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this10._scrollbarWidth + "px");
        }); // Adjust sticky content margin

        $(stickyContent).each(function (index, element) {
          var actualMargin = element.style.marginRight;
          var calculatedMargin = $(element).css('margin-right');
          $(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this10._scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = $(document.body).css('padding-right');
        $(document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      }

      $(document.body).addClass(ClassName$5.OPEN);
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      // Restore fixed content padding
      var fixedContent = [].slice.call(document.querySelectorAll(Selector$5.FIXED_CONTENT));
      $(fixedContent).each(function (index, element) {
        var padding = $(element).data('padding-right');
        $(element).removeData('padding-right');
        element.style.paddingRight = padding ? padding : '';
      }); // Restore sticky content

      var elements = [].slice.call(document.querySelectorAll("" + Selector$5.STICKY_CONTENT));
      $(elements).each(function (index, element) {
        var margin = $(element).data('margin-right');

        if (typeof margin !== 'undefined') {
          $(element).css('margin-right', margin).removeData('margin-right');
        }
      }); // Restore body padding

      var padding = $(document.body).data('padding-right');
      $(document.body).removeData('padding-right');
      document.body.style.paddingRight = padding ? padding : '';
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = ClassName$5.SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    } // Static
    ;

    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$5);

        var _config = _objectSpread2({}, Default$3, {}, $(this).data(), {}, _typeof(config) === 'object' && config ? config : {});

        if (!data) {
          data = new Modal(this, _config);
          $(this).data(DATA_KEY$5, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$5;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$3;
      }
    }]);

    return Modal;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$5.CLICK_DATA_API, Selector$5.DATA_TOGGLE, function (event) {
    var _this11 = this;

    var target;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = document.querySelector(selector);
    }

    var config = $(target).data(DATA_KEY$5) ? 'toggle' : _objectSpread2({}, $(target).data(), {}, $(this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $(target).one(Event$5.SHOW, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // Only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(Event$5.HIDDEN, function () {
        if ($(_this11).is(':visible')) {
          _this11.focus();
        }
      });
    });

    Modal._jQueryInterface.call($(target), config, this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$5] = Modal._jQueryInterface;
  $.fn[NAME$5].Constructor = Modal;

  $.fn[NAME$5].noConflict = function () {
    $.fn[NAME$5] = JQUERY_NO_CONFLICT$5;
    return Modal._jQueryInterface;
  };
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.4.1): tools/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */


  var uriAttrs = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  var DefaultWhitelist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

  function allowedAttribute(attr, allowedAttributeList) {
    var attrName = attr.nodeName.toLowerCase();

    if (allowedAttributeList.indexOf(attrName) !== -1) {
      if (uriAttrs.indexOf(attrName) !== -1) {
        return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN));
      }

      return true;
    }

    var regExp = allowedAttributeList.filter(function (attrRegex) {
      return attrRegex instanceof RegExp;
    }); // Check if a regular expression validates the attribute.

    for (var i = 0, l = regExp.length; i < l; i++) {
      if (attrName.match(regExp[i])) {
        return true;
      }
    }

    return false;
  }

  function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
    if (unsafeHtml.length === 0) {
      return unsafeHtml;
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml);
    }

    var domParser = new window.DOMParser();
    var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    var whitelistKeys = Object.keys(whiteList);
    var elements = [].slice.call(createdDocument.body.querySelectorAll('*'));

    var _loop = function _loop(i, len) {
      var el = elements[i];
      var elName = el.nodeName.toLowerCase();

      if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
        el.parentNode.removeChild(el);
        return "continue";
      }

      var attributeList = [].slice.call(el.attributes);
      var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || []);
      attributeList.forEach(function (attr) {
        if (!allowedAttribute(attr, whitelistedAttributes)) {
          el.removeAttribute(attr.nodeName);
        }
      });
    };

    for (var i = 0, len = elements.length; i < len; i++) {
      var _ret = _loop(i);

      if (_ret === "continue") continue;
    }

    return createdDocument.body.innerHTML;
  }
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$6 = 'tooltip';
  var VERSION$6 = '4.4.1';
  var DATA_KEY$6 = 'bs.tooltip';
  var EVENT_KEY$6 = "." + DATA_KEY$6;
  var JQUERY_NO_CONFLICT$6 = $.fn[NAME$6];
  var CLASS_PREFIX = 'bs-tooltip';
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
  var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];
  var DefaultType$4 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)',
    boundary: '(string|element)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    whiteList: 'object',
    popperConfig: '(null|object)'
  };
  var AttachmentMap$1 = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  };
  var Default$4 = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: 0,
    container: false,
    fallbackPlacement: 'flip',
    boundary: 'scrollParent',
    sanitize: true,
    sanitizeFn: null,
    whiteList: DefaultWhitelist,
    popperConfig: null
  };
  var HoverState = {
    SHOW: 'show',
    OUT: 'out'
  };
  var Event$6 = {
    HIDE: "hide" + EVENT_KEY$6,
    HIDDEN: "hidden" + EVENT_KEY$6,
    SHOW: "show" + EVENT_KEY$6,
    SHOWN: "shown" + EVENT_KEY$6,
    INSERTED: "inserted" + EVENT_KEY$6,
    CLICK: "click" + EVENT_KEY$6,
    FOCUSIN: "focusin" + EVENT_KEY$6,
    FOCUSOUT: "focusout" + EVENT_KEY$6,
    MOUSEENTER: "mouseenter" + EVENT_KEY$6,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$6
  };
  var ClassName$6 = {
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$6 = {
    TOOLTIP: '.tooltip',
    TOOLTIP_INNER: '.tooltip-inner',
    ARROW: '.arrow'
  };
  var Trigger = {
    HOVER: 'hover',
    FOCUS: 'focus',
    CLICK: 'click',
    MANUAL: 'manual'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tooltip =
  /*#__PURE__*/
  function () {
    function Tooltip(element, config) {
      if (typeof Popper === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper.js (https://popper.js.org/)');
      } // private


      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null; // Protected

      this.element = element;
      this.config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    } // Getters


    var _proto = Tooltip.prototype; // Public

    _proto.enable = function enable() {
      this._isEnabled = true;
    };

    _proto.disable = function disable() {
      this._isEnabled = false;
    };

    _proto.toggleEnabled = function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    };

    _proto.toggle = function toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        var dataKey = this.constructor.DATA_KEY;
        var context = $(event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $(event.currentTarget).data(dataKey, context);
        }

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if ($(this.getTipElement()).hasClass(ClassName$6.SHOW)) {
          this._leave(null, this);

          return;
        }

        this._enter(null, this);
      }
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      $.removeData(this.element, this.constructor.DATA_KEY);
      $(this.element).off(this.constructor.EVENT_KEY);
      $(this.element).closest('.modal').off('hide.bs.modal', this._hideModalHandler);

      if (this.tip) {
        $(this.tip).remove();
      }

      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;

      if (this._popper) {
        this._popper.destroy();
      }

      this._popper = null;
      this.element = null;
      this.config = null;
      this.tip = null;
    };

    _proto.show = function show() {
      var _this = this;

      if ($(this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements');
      }

      var showEvent = $.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        $(this.element).trigger(showEvent);
        var shadowRoot = Util.findShadowRoot(this.element);
        var isInTheDom = $.contains(shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement, this.element);

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return;
        }

        var tip = this.getTipElement();
        var tipId = Util.getUID(this.constructor.NAME);
        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);
        this.setContent();

        if (this.config.animation) {
          $(tip).addClass(ClassName$6.FADE);
        }

        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

        var attachment = this._getAttachment(placement);

        this.addAttachmentClass(attachment);

        var container = this._getContainer();

        $(tip).data(this.constructor.DATA_KEY, this);

        if (!$.contains(this.element.ownerDocument.documentElement, this.tip)) {
          $(tip).appendTo(container);
        }

        $(this.element).trigger(this.constructor.Event.INSERTED);
        this._popper = new Popper(this.element, tip, this._getPopperConfig(attachment));
        $(tip).addClass(ClassName$6.SHOW); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

        if ('ontouchstart' in document.documentElement) {
          $(document.body).children().on('mouseover', null, $.noop);
        }

        var complete = function complete() {
          if (_this.config.animation) {
            _this._fixTransition();
          }

          var prevHoverState = _this._hoverState;
          _this._hoverState = null;
          $(_this.element).trigger(_this.constructor.Event.SHOWN);

          if (prevHoverState === HoverState.OUT) {
            _this._leave(null, _this);
          }
        };

        if ($(this.tip).hasClass(ClassName$6.FADE)) {
          var transitionDuration = Util.getTransitionDurationFromElement(this.tip);
          $(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      }
    };

    _proto.hide = function hide(callback) {
      var _this2 = this;

      var tip = this.getTipElement();
      var hideEvent = $.Event(this.constructor.Event.HIDE);

      var complete = function complete() {
        if (_this2._hoverState !== HoverState.SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        _this2._cleanTipClass();

        _this2.element.removeAttribute('aria-describedby');

        $(_this2.element).trigger(_this2.constructor.Event.HIDDEN);

        if (_this2._popper !== null) {
          _this2._popper.destroy();
        }

        if (callback) {
          callback();
        }
      };

      $(this.element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $(tip).removeClass(ClassName$6.SHOW); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        $(document.body).children().off('mouseover', null, $.noop);
      }

      this._activeTrigger[Trigger.CLICK] = false;
      this._activeTrigger[Trigger.FOCUS] = false;
      this._activeTrigger[Trigger.HOVER] = false;

      if ($(this.tip).hasClass(ClassName$6.FADE)) {
        var transitionDuration = Util.getTransitionDurationFromElement(tip);
        $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }

      this._hoverState = '';
    };

    _proto.update = function update() {
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Protected
    ;

    _proto.isWithContent = function isWithContent() {
      return Boolean(this.getTitle());
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var tip = this.getTipElement();
      this.setElementContent($(tip.querySelectorAll(Selector$6.TOOLTIP_INNER)), this.getTitle());
      $(tip).removeClass(ClassName$6.FADE + " " + ClassName$6.SHOW);
    };

    _proto.setElementContent = function setElementContent($element, content) {
      if (_typeof(content) === 'object' && (content.nodeType || content.jquery)) {
        // Content is a DOM node or a jQuery
        if (this.config.html) {
          if (!$(content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text($(content).text());
        }

        return;
      }

      if (this.config.html) {
        if (this.config.sanitize) {
          content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
        }

        $element.html(content);
      } else {
        $element.text(content);
      }
    };

    _proto.getTitle = function getTitle() {
      var title = this.element.getAttribute('data-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
      }

      return title;
    } // Private
    ;

    _proto._getPopperConfig = function _getPopperConfig(attachment) {
      var _this3 = this;

      var defaultBsConfig = {
        placement: attachment,
        modifiers: {
          offset: this._getOffset(),
          flip: {
            behavior: this.config.fallbackPlacement
          },
          arrow: {
            element: Selector$6.ARROW
          },
          preventOverflow: {
            boundariesElement: this.config.boundary
          }
        },
        onCreate: function onCreate(data) {
          if (data.originalPlacement !== data.placement) {
            _this3._handlePopperPlacementChange(data);
          }
        },
        onUpdate: function onUpdate(data) {
          return _this3._handlePopperPlacementChange(data);
        }
      };
      return _objectSpread2({}, defaultBsConfig, {}, this.config.popperConfig);
    };

    _proto._getOffset = function _getOffset() {
      var _this4 = this;

      var offset = {};

      if (typeof this.config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _objectSpread2({}, data.offsets, {}, _this4.config.offset(data.offsets, _this4.element) || {});
          return data;
        };
      } else {
        offset.offset = this.config.offset;
      }

      return offset;
    };

    _proto._getContainer = function _getContainer() {
      if (this.config.container === false) {
        return document.body;
      }

      if (Util.isElement(this.config.container)) {
        return $(this.config.container);
      }

      return $(document).find(this.config.container);
    };

    _proto._getAttachment = function _getAttachment(placement) {
      return AttachmentMap$1[placement.toUpperCase()];
    };

    _proto._setListeners = function _setListeners() {
      var _this5 = this;

      var triggers = this.config.trigger.split(' ');
      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          $(_this5.element).on(_this5.constructor.Event.CLICK, _this5.config.selector, function (event) {
            return _this5.toggle(event);
          });
        } else if (trigger !== Trigger.MANUAL) {
          var eventIn = trigger === Trigger.HOVER ? _this5.constructor.Event.MOUSEENTER : _this5.constructor.Event.FOCUSIN;
          var eventOut = trigger === Trigger.HOVER ? _this5.constructor.Event.MOUSELEAVE : _this5.constructor.Event.FOCUSOUT;
          $(_this5.element).on(eventIn, _this5.config.selector, function (event) {
            return _this5._enter(event);
          }).on(eventOut, _this5.config.selector, function (event) {
            return _this5._leave(event);
          });
        }
      });

      this._hideModalHandler = function () {
        if (_this5.element) {
          _this5.hide();
        }
      };

      $(this.element).closest('.modal').on('hide.bs.modal', this._hideModalHandler);

      if (this.config.selector) {
        this.config = _objectSpread2({}, this.config, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    };

    _proto._fixTitle = function _fixTitle() {
      var titleType = _typeof(this.element.getAttribute('data-original-title'));

      if (this.element.getAttribute('title') || titleType !== 'string') {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
        this.element.setAttribute('title', '');
      }
    };

    _proto._enter = function _enter(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
      }

      if ($(context.getTipElement()).hasClass(ClassName$6.SHOW) || context._hoverState === HoverState.SHOW) {
        context._hoverState = HoverState.SHOW;
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HoverState.SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    _proto._leave = function _leave(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HoverState.OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    };

    _proto._getConfig = function _getConfig(config) {
      var dataAttributes = $(this.element).data();
      Object.keys(dataAttributes).forEach(function (dataAttr) {
        if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
          delete dataAttributes[dataAttr];
        }
      });
      config = _objectSpread2({}, this.constructor.Default, {}, dataAttributes, {}, _typeof(config) === 'object' && config ? config : {});

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      Util.typeCheckConfig(NAME$6, config, this.constructor.DefaultType);

      if (config.sanitize) {
        config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
      }

      return config;
    };

    _proto._getDelegateConfig = function _getDelegateConfig() {
      var config = {};

      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }

      return config;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length) {
        $tip.removeClass(tabClass.join(''));
      }
    };

    _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
      var popperInstance = popperData.instance;
      this.tip = popperInstance.popper;

      this._cleanTipClass();

      this.addAttachmentClass(this._getAttachment(popperData.placement));
    };

    _proto._fixTransition = function _fixTransition() {
      var tip = this.getTipElement();
      var initConfigAnimation = this.config.animation;

      if (tip.getAttribute('x-placement') !== null) {
        return;
      }

      $(tip).removeClass(ClassName$6.FADE);
      this.config.animation = false;
      this.hide();
      this.show();
      this.config.animation = initConfigAnimation;
    } // Static
    ;

    Tooltip._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$6);

        var _config = _typeof(config) === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
          $(this).data(DATA_KEY$6, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$6;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$4;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$6;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$6;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$6;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$6;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$4;
      }
    }]);

    return Tooltip;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$6] = Tooltip._jQueryInterface;
  $.fn[NAME$6].Constructor = Tooltip;

  $.fn[NAME$6].noConflict = function () {
    $.fn[NAME$6] = JQUERY_NO_CONFLICT$6;
    return Tooltip._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$7 = 'popover';
  var VERSION$7 = '4.4.1';
  var DATA_KEY$7 = 'bs.popover';
  var EVENT_KEY$7 = "." + DATA_KEY$7;
  var JQUERY_NO_CONFLICT$7 = $.fn[NAME$7];
  var CLASS_PREFIX$1 = 'bs-popover';
  var BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)" + CLASS_PREFIX$1 + "\\S+", 'g');

  var Default$5 = _objectSpread2({}, Tooltip.Default, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
  });

  var DefaultType$5 = _objectSpread2({}, Tooltip.DefaultType, {
    content: '(string|element|function)'
  });

  var ClassName$7 = {
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$7 = {
    TITLE: '.popover-header',
    CONTENT: '.popover-body'
  };
  var Event$7 = {
    HIDE: "hide" + EVENT_KEY$7,
    HIDDEN: "hidden" + EVENT_KEY$7,
    SHOW: "show" + EVENT_KEY$7,
    SHOWN: "shown" + EVENT_KEY$7,
    INSERTED: "inserted" + EVENT_KEY$7,
    CLICK: "click" + EVENT_KEY$7,
    FOCUSIN: "focusin" + EVENT_KEY$7,
    FOCUSOUT: "focusout" + EVENT_KEY$7,
    MOUSEENTER: "mouseenter" + EVENT_KEY$7,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$7
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Popover =
  /*#__PURE__*/
  function (_Tooltip) {
    _inheritsLoose(Popover, _Tooltip);

    function Popover() {
      return _Tooltip.apply(this, arguments) || this;
    }

    var _proto = Popover.prototype; // Overrides

    _proto.isWithContent = function isWithContent() {
      return this.getTitle() || this._getContent();
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX$1 + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var $tip = $(this.getTipElement()); // We use append for html objects to maintain js events

      this.setElementContent($tip.find(Selector$7.TITLE), this.getTitle());

      var content = this._getContent();

      if (typeof content === 'function') {
        content = content.call(this.element);
      }

      this.setElementContent($tip.find(Selector$7.CONTENT), content);
      $tip.removeClass(ClassName$7.FADE + " " + ClassName$7.SHOW);
    } // Private
    ;

    _proto._getContent = function _getContent() {
      return this.element.getAttribute('data-content') || this.config.content;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX$1);

      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    } // Static
    ;

    Popover._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$7);

        var _config = _typeof(config) === 'object' ? config : null;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Popover(this, _config);
          $(this).data(DATA_KEY$7, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Popover, null, [{
      key: "VERSION",
      // Getters
      get: function get() {
        return VERSION$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$5;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$7;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$7;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$7;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$7;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$5;
      }
    }]);

    return Popover;
  }(Tooltip);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$7] = Popover._jQueryInterface;
  $.fn[NAME$7].Constructor = Popover;

  $.fn[NAME$7].noConflict = function () {
    $.fn[NAME$7] = JQUERY_NO_CONFLICT$7;
    return Popover._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$8 = 'scrollspy';
  var VERSION$8 = '4.4.1';
  var DATA_KEY$8 = 'bs.scrollspy';
  var EVENT_KEY$8 = "." + DATA_KEY$8;
  var DATA_API_KEY$6 = '.data-api';
  var JQUERY_NO_CONFLICT$8 = $.fn[NAME$8];
  var Default$6 = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  var DefaultType$6 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  var Event$8 = {
    ACTIVATE: "activate" + EVENT_KEY$8,
    SCROLL: "scroll" + EVENT_KEY$8,
    LOAD_DATA_API: "load" + EVENT_KEY$8 + DATA_API_KEY$6
  };
  var ClassName$8 = {
    DROPDOWN_ITEM: 'dropdown-item',
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active'
  };
  var Selector$8 = {
    DATA_SPY: '[data-spy="scroll"]',
    ACTIVE: '.active',
    NAV_LIST_GROUP: '.nav, .list-group',
    NAV_LINKS: '.nav-link',
    NAV_ITEMS: '.nav-item',
    LIST_ITEMS: '.list-group-item',
    DROPDOWN: '.dropdown',
    DROPDOWN_ITEMS: '.dropdown-item',
    DROPDOWN_TOGGLE: '.dropdown-toggle'
  };
  var OffsetMethod = {
    OFFSET: 'offset',
    POSITION: 'position'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var ScrollSpy =
  /*#__PURE__*/
  function () {
    function ScrollSpy(element, config) {
      var _this = this;

      this._element = element;
      this._scrollElement = element.tagName === 'BODY' ? window : element;
      this._config = this._getConfig(config);
      this._selector = this._config.target + " " + Selector$8.NAV_LINKS + "," + (this._config.target + " " + Selector$8.LIST_ITEMS + ",") + (this._config.target + " " + Selector$8.DROPDOWN_ITEMS);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;
      $(this._scrollElement).on(Event$8.SCROLL, function (event) {
        return _this._process(event);
      });
      this.refresh();

      this._process();
    } // Getters


    var _proto = ScrollSpy.prototype; // Public

    _proto.refresh = function refresh() {
      var _this2 = this;

      var autoMethod = this._scrollElement === this._scrollElement.window ? OffsetMethod.OFFSET : OffsetMethod.POSITION;
      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      var targets = [].slice.call(document.querySelectorAll(this._selector));
      targets.map(function (element) {
        var target;
        var targetSelector = Util.getSelectorFromElement(element);

        if (targetSelector) {
          target = document.querySelector(targetSelector);
        }

        if (target) {
          var targetBCR = target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            // TODO (fat): remove sketch reliance on jQuery position/offset
            return [$(target)[offsetMethod]().top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this2._offsets.push(item[0]);

        _this2._targets.push(item[1]);
      });
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$8);
      $(this._scrollElement).off(EVENT_KEY$8);
      this._element = null;
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default$6, {}, _typeof(config) === 'object' && config ? config : {});

      if (typeof config.target !== 'string') {
        var id = $(config.target).attr('id');

        if (!id) {
          id = Util.getUID(NAME$8);
          $(config.target).attr('id', id);
        }

        config.target = "#" + id;
      }

      Util.typeCheckConfig(NAME$8, config, DefaultType$6);
      return config;
    };

    _proto._getScrollTop = function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    };

    _proto._getScrollHeight = function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };

    _proto._getOffsetHeight = function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    };

    _proto._process = function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;

      var scrollHeight = this._getScrollHeight();

      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }

        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;

        this._clear();

        return;
      }

      var offsetLength = this._offsets.length;

      for (var i = offsetLength; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    };

    _proto._activate = function _activate(target) {
      this._activeTarget = target;

      this._clear();

      var queries = this._selector.split(',').map(function (selector) {
        return selector + "[data-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
      });

      var $link = $([].slice.call(document.querySelectorAll(queries.join(','))));

      if ($link.hasClass(ClassName$8.DROPDOWN_ITEM)) {
        $link.closest(Selector$8.DROPDOWN).find(Selector$8.DROPDOWN_TOGGLE).addClass(ClassName$8.ACTIVE);
        $link.addClass(ClassName$8.ACTIVE);
      } else {
        // Set triggered link as active
        $link.addClass(ClassName$8.ACTIVE); // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

        $link.parents(Selector$8.NAV_LIST_GROUP).prev(Selector$8.NAV_LINKS + ", " + Selector$8.LIST_ITEMS).addClass(ClassName$8.ACTIVE); // Handle special case when .nav-link is inside .nav-item

        $link.parents(Selector$8.NAV_LIST_GROUP).prev(Selector$8.NAV_ITEMS).children(Selector$8.NAV_LINKS).addClass(ClassName$8.ACTIVE);
      }

      $(this._scrollElement).trigger(Event$8.ACTIVATE, {
        relatedTarget: target
      });
    };

    _proto._clear = function _clear() {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (node) {
        return node.classList.contains(ClassName$8.ACTIVE);
      }).forEach(function (node) {
        return node.classList.remove(ClassName$8.ACTIVE);
      });
    } // Static
    ;

    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$8);

        var _config = _typeof(config) === 'object' && config;

        if (!data) {
          data = new ScrollSpy(this, _config);
          $(this).data(DATA_KEY$8, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(ScrollSpy, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$8;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$6;
      }
    }]);

    return ScrollSpy;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(window).on(Event$8.LOAD_DATA_API, function () {
    var scrollSpys = [].slice.call(document.querySelectorAll(Selector$8.DATA_SPY));
    var scrollSpysLength = scrollSpys.length;

    for (var i = scrollSpysLength; i--;) {
      var $spy = $(scrollSpys[i]);

      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$8] = ScrollSpy._jQueryInterface;
  $.fn[NAME$8].Constructor = ScrollSpy;

  $.fn[NAME$8].noConflict = function () {
    $.fn[NAME$8] = JQUERY_NO_CONFLICT$8;
    return ScrollSpy._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$9 = 'tab';
  var VERSION$9 = '4.4.1';
  var DATA_KEY$9 = 'bs.tab';
  var EVENT_KEY$9 = "." + DATA_KEY$9;
  var DATA_API_KEY$7 = '.data-api';
  var JQUERY_NO_CONFLICT$9 = $.fn[NAME$9];
  var Event$9 = {
    HIDE: "hide" + EVENT_KEY$9,
    HIDDEN: "hidden" + EVENT_KEY$9,
    SHOW: "show" + EVENT_KEY$9,
    SHOWN: "shown" + EVENT_KEY$9,
    CLICK_DATA_API: "click" + EVENT_KEY$9 + DATA_API_KEY$7
  };
  var ClassName$9 = {
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active',
    DISABLED: 'disabled',
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$9 = {
    DROPDOWN: '.dropdown',
    NAV_LIST_GROUP: '.nav, .list-group',
    ACTIVE: '.active',
    ACTIVE_UL: '> li > .active',
    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    DROPDOWN_TOGGLE: '.dropdown-toggle',
    DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tab =
  /*#__PURE__*/
  function () {
    function Tab(element) {
      this._element = element;
    } // Getters


    var _proto = Tab.prototype; // Public

    _proto.show = function show() {
      var _this = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(ClassName$9.ACTIVE) || $(this._element).hasClass(ClassName$9.DISABLED)) {
        return;
      }

      var target;
      var previous;
      var listElement = $(this._element).closest(Selector$9.NAV_LIST_GROUP)[0];
      var selector = Util.getSelectorFromElement(this._element);

      if (listElement) {
        var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? Selector$9.ACTIVE_UL : Selector$9.ACTIVE;
        previous = $.makeArray($(listElement).find(itemSelector));
        previous = previous[previous.length - 1];
      }

      var hideEvent = $.Event(Event$9.HIDE, {
        relatedTarget: this._element
      });
      var showEvent = $.Event(Event$9.SHOW, {
        relatedTarget: previous
      });

      if (previous) {
        $(previous).trigger(hideEvent);
      }

      $(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }

      if (selector) {
        target = document.querySelector(selector);
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        var hiddenEvent = $.Event(Event$9.HIDDEN, {
          relatedTarget: _this._element
        });
        var shownEvent = $.Event(Event$9.SHOWN, {
          relatedTarget: previous
        });
        $(previous).trigger(hiddenEvent);
        $(_this._element).trigger(shownEvent);
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$9);
      this._element = null;
    } // Private
    ;

    _proto._activate = function _activate(element, container, callback) {
      var _this2 = this;

      var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? $(container).find(Selector$9.ACTIVE_UL) : $(container).children(Selector$9.ACTIVE);
      var active = activeElements[0];
      var isTransitioning = callback && active && $(active).hasClass(ClassName$9.FADE);

      var complete = function complete() {
        return _this2._transitionComplete(element, active, callback);
      };

      if (active && isTransitioning) {
        var transitionDuration = Util.getTransitionDurationFromElement(active);
        $(active).removeClass(ClassName$9.SHOW).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto._transitionComplete = function _transitionComplete(element, active, callback) {
      if (active) {
        $(active).removeClass(ClassName$9.ACTIVE);
        var dropdownChild = $(active.parentNode).find(Selector$9.DROPDOWN_ACTIVE_CHILD)[0];

        if (dropdownChild) {
          $(dropdownChild).removeClass(ClassName$9.ACTIVE);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      $(element).addClass(ClassName$9.ACTIVE);

      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }

      Util.reflow(element);

      if (element.classList.contains(ClassName$9.FADE)) {
        element.classList.add(ClassName$9.SHOW);
      }

      if (element.parentNode && $(element.parentNode).hasClass(ClassName$9.DROPDOWN_MENU)) {
        var dropdownElement = $(element).closest(Selector$9.DROPDOWN)[0];

        if (dropdownElement) {
          var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(Selector$9.DROPDOWN_TOGGLE));
          $(dropdownToggleList).addClass(ClassName$9.ACTIVE);
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    } // Static
    ;

    Tab._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY$9);

        if (!data) {
          data = new Tab(this);
          $this.data(DATA_KEY$9, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tab, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$9;
      }
    }]);

    return Tab;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$9.CLICK_DATA_API, Selector$9.DATA_TOGGLE, function (event) {
    event.preventDefault();

    Tab._jQueryInterface.call($(this), 'show');
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$9] = Tab._jQueryInterface;
  $.fn[NAME$9].Constructor = Tab;

  $.fn[NAME$9].noConflict = function () {
    $.fn[NAME$9] = JQUERY_NO_CONFLICT$9;
    return Tab._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$a = 'toast';
  var VERSION$a = '4.4.1';
  var DATA_KEY$a = 'bs.toast';
  var EVENT_KEY$a = "." + DATA_KEY$a;
  var JQUERY_NO_CONFLICT$a = $.fn[NAME$a];
  var Event$a = {
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY$a,
    HIDE: "hide" + EVENT_KEY$a,
    HIDDEN: "hidden" + EVENT_KEY$a,
    SHOW: "show" + EVENT_KEY$a,
    SHOWN: "shown" + EVENT_KEY$a
  };
  var ClassName$a = {
    FADE: 'fade',
    HIDE: 'hide',
    SHOW: 'show',
    SHOWING: 'showing'
  };
  var DefaultType$7 = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  var Default$7 = {
    animation: true,
    autohide: true,
    delay: 500
  };
  var Selector$a = {
    DATA_DISMISS: '[data-dismiss="toast"]'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Toast =
  /*#__PURE__*/
  function () {
    function Toast(element, config) {
      this._element = element;
      this._config = this._getConfig(config);
      this._timeout = null;

      this._setListeners();
    } // Getters


    var _proto = Toast.prototype; // Public

    _proto.show = function show() {
      var _this = this;

      var showEvent = $.Event(Event$a.SHOW);
      $(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      }

      if (this._config.animation) {
        this._element.classList.add(ClassName$a.FADE);
      }

      var complete = function complete() {
        _this._element.classList.remove(ClassName$a.SHOWING);

        _this._element.classList.add(ClassName$a.SHOW);

        $(_this._element).trigger(Event$a.SHOWN);

        if (_this._config.autohide) {
          _this._timeout = setTimeout(function () {
            _this.hide();
          }, _this._config.delay);
        }
      };

      this._element.classList.remove(ClassName$a.HIDE);

      Util.reflow(this._element);

      this._element.classList.add(ClassName$a.SHOWING);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto.hide = function hide() {
      if (!this._element.classList.contains(ClassName$a.SHOW)) {
        return;
      }

      var hideEvent = $.Event(Event$a.HIDE);
      $(this._element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      this._close();
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      this._timeout = null;

      if (this._element.classList.contains(ClassName$a.SHOW)) {
        this._element.classList.remove(ClassName$a.SHOW);
      }

      $(this._element).off(Event$a.CLICK_DISMISS);
      $.removeData(this._element, DATA_KEY$a);
      this._element = null;
      this._config = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default$7, {}, $(this._element).data(), {}, _typeof(config) === 'object' && config ? config : {});
      Util.typeCheckConfig(NAME$a, config, this.constructor.DefaultType);
      return config;
    };

    _proto._setListeners = function _setListeners() {
      var _this2 = this;

      $(this._element).on(Event$a.CLICK_DISMISS, Selector$a.DATA_DISMISS, function () {
        return _this2.hide();
      });
    };

    _proto._close = function _close() {
      var _this3 = this;

      var complete = function complete() {
        _this3._element.classList.add(ClassName$a.HIDE);

        $(_this3._element).trigger(Event$a.HIDDEN);
      };

      this._element.classList.remove(ClassName$a.SHOW);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    } // Static
    ;

    Toast._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY$a);

        var _config = _typeof(config) === 'object' && config;

        if (!data) {
          data = new Toast(this, _config);
          $element.data(DATA_KEY$a, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](this);
        }
      });
    };

    _createClass(Toast, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$a;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$7;
      }
    }]);

    return Toast;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$a] = Toast._jQueryInterface;
  $.fn[NAME$a].Constructor = Toast;

  $.fn[NAME$a].noConflict = function () {
    $.fn[NAME$a] = JQUERY_NO_CONFLICT$a;
    return Toast._jQueryInterface;
  };

  exports.Alert = Alert;
  exports.Button = Button;
  exports.Carousel = Carousel;
  exports.Collapse = Collapse;
  exports.Dropdown = Dropdown;
  exports.Modal = Modal;
  exports.Popover = Popover;
  exports.Scrollspy = ScrollSpy;
  exports.Tab = Tab;
  exports.Toast = Toast;
  exports.Tooltip = Tooltip;
  exports.Util = Util;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

/***/ }),

/***/ "./node_modules/popper.js/dist/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.0
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];

  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }

  return 0;
}();

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }

    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;
/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/

var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;
/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */

function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}
/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */


function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  } // NOTE: 1 DOM access here


  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}
/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */


function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }

  return element.parentNode || element.host;
}
/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */


function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;

    case '#document':
      return element.body;
  } // Firefox want us to check `-x` and `-y` variations as well


  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}
/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */


function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);
/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */

function isIE(version) {
  if (version === 11) {
    return isIE11;
  }

  if (version === 10) {
    return isIE10;
  }

  return isIE11 || isIE10;
}
/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */


function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null; // NOTE: 1 DOM access here

  var offsetParent = element.offsetParent || null; // Skip hidden elements which don't have an offsetParent

  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  } // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...


  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }

  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}
/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */


function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}
/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */


function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  } // Here we make sure to give as "start" the element that comes first in the DOM


  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1; // Get common ancestor container

  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer; // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  } // one of the nodes is inside shadowDOM, find which one


  var element1root = getRoot(element1);

  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}
/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */


function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';
  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}
/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */


function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}
/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */


function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';
  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);
  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};
/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */


function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}
/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */


function getBoundingClientRect(element) {
  var rect = {}; // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11

  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  }; // subtract scrollbar size from sizes

  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;
  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height; // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons

  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');
    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);
  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10); // In cases where the parent is fixed, we must ignore negative scroll in offset calc

  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }

  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0; // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.

  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);
    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft; // Attach marginTop and marginLeft because in some circumstances we may need them

    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);
  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };
  return getClientRect(offset);
}
/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */


function isFixed(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }

  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }

  var parentNode = getParentNode(element);

  if (!parentNode) {
    return false;
  }

  return isFixed(parentNode);
}
/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */


function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }

  var el = element.parentElement;

  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }

  return el || document.documentElement;
}
/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */


function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false; // NOTE: 1 DOM access here

  var boundaries = {
    top: 0,
    left: 0
  };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference)); // Handle viewport case

  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;

    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));

      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition); // In case of HTML, we need a different computation

    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  } // Add paddings


  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;
  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;
  return width * height;
}
/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);
  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };
  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });
  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });
  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
  var variation = placement.split('-')[1];
  return computedPlacement + (variation ? '-' + variation : '');
}
/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */


function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}
/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */


function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}
/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */


function getOppositePlacement(placement) {
  var hash = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}
/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */


function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0]; // Get popper node sizes

  var popperRect = getOuterSizes(popper); // Add position, width and height to our offsets object

  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  }; // depending by the popper placement we have to compute its offsets slightly differently

  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';
  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;

  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}
/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */


function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  } // use `filter` to obtain the same behavior of `find`


  return arr.filter(check)[0];
}
/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */


function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  } // use `find` + `indexOf` if `findIndex` isn't supported


  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}
/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */


function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));
  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }

    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation

    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);
      data = fn(data, modifier);
    }
  });
  return data;
}
/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */


function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  }; // compute reference element offsets

  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed); // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value

  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding); // store the computed placement inside `originalPlacement`

  data.originalPlacement = data.placement;
  data.positionFixed = this.options.positionFixed; // compute the popper offsets

  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute'; // run the modifiers

  data = runModifiers(this.modifiers, data); // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback

  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}
/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */


function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}
/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */


function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;

    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }

  return null;
}
/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */


function destroy() {
  this.state.isDestroyed = true; // touch DOM only if `applyStyle` modifier is enabled

  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners(); // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it

  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }

  return this;
}
/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */


function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, {
    passive: true
  });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }

  scrollParents.push(target);
}
/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */


function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, {
    passive: true
  }); // Scroll event listener on scroll parents

  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;
  return state;
}
/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */


function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}
/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */


function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound); // Remove scroll event listener on scroll parents

  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  }); // Reset state

  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}
/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */


function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}
/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */


function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}
/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */


function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = ''; // add unit if the value is numeric and is one of the following

    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }

    element.style[prop] = styles[prop] + unit;
  });
}
/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */


function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];

    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */


function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles); // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element

  setAttributes(data.instance.popper, data.attributes); // if arrowElement is defined and arrowStyles has some properties

  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}
/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */


function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed); // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value

  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);
  popper.setAttribute('x-placement', placement); // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations

  setStyles(popper, {
    position: options.positionFixed ? 'fixed' : 'absolute'
  });
  return options;
}
/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */


function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);
  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;
  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;
  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */

function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper; // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;

  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }

  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;
  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent); // Styles

  var styles = {
    position: popper.position
  };
  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);
  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right'; // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed

  var prefixedProperty = getSupportedPropertyName('transform'); // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.

  var left = void 0,
      top = void 0;

  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }

  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }

  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  } // Attributes


  var attributes = {
    'x-placement': data.placement
  }; // Update `data` attributes, styles and arrowStyles

  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);
  return data;
}
/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */


function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });
  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';

    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }

  return isRequired;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function arrow(data, options) {
  var _data$offsets$arrow; // arrow depends on keepTogether in order to work


  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element; // if arrowElement is a string, suppose it's a CSS selector

  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement); // if arrowElement is not found, don't run the modifier

    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var isVertical = ['left', 'right'].indexOf(placement) !== -1;
  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len]; //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //
  // top/left side

  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  } // bottom/right side


  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }

  data.offsets.popper = getClientRect(data.offsets.popper); // compute center of the popper

  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2; // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available

  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide; // prevent arrowElement from being placed not contiguously to its popper

  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);
  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);
  return data;
}
/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */


function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }

  return variation;
}
/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */


var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start']; // Get rid of `auto` `auto-start` and `auto-end`

var validPlacements = placements.slice(3);
/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */

function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */

function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);
  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';
  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;

    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;

    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;

    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);
    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference; // using floor because the reference offsets may contain decimals we are not going to consider here

    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);
    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);
    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom; // flip the variation if required

    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1; // flips variation if reference element overflows boundaries

    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom); // flips variation if popper content overflows boundaries

    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);
    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : ''); // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future

      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));
      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }

  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}
/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */


function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2]; // If it's not a number it's an operator, I guess

  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;

    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;

      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;

    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }

    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}
/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */


function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0]; // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one

  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1; // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)

  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  }); // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space

  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  } // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.


  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments]; // Convert the values with units to absolute pixels to allow our computations

  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, []) // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  }); // Loop trough the offsets arrays and execute the operations

  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */


function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var basePlacement = placement.split('-')[0];
  var offsets = void 0;

  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper); // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken

  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  } // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself


  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification

  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];
  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';
  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed); // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed

  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;
  options.boundaries = boundaries;
  var order = options.priority;
  var popper = data.offsets.popper;
  var check = {
    primary: function primary(placement) {
      var value = popper[placement];

      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }

      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];

      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }

      return defineProperty({}, mainSide, value);
    }
  };
  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });
  data.offsets.popper = popper;
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1]; // if shift shiftvariation is specified, run the modifier

  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;
    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';
    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };
    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;
  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;
  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);
  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);
  return data;
}
/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */


var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: offset,

    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: preventOverflow,

    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],

    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,

    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: arrow,

    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: flip,

    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',

    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,

    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',

    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,

    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,

    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,

    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: computeStyle,

    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,

    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',

    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: applyStyle,

    /** @prop {Function} */
    onLoad: applyStyleOnLoad,

    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};
/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */

var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};
/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */
// Utils
// Methods

var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    }; // make update() debounced, so that it only runs at most once-per-tick


    this.update = debounce(this.update.bind(this)); // with {} we create a new object with the options inside it

    this.options = _extends({}, Popper.Defaults, options); // init state

    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    }; // get reference and popper elements (allow jQuery wrappers)

    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper; // Deep merge modifiers options

    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    }); // Refactoring modifiers' list (Object => Array)

    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    }) // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    }); // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!

    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    }); // fire the first update to position the popper in the right place

    this.update();
    var eventsEnabled = this.options.eventsEnabled;

    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  } // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }
    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */

    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();
/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;
/* harmony default export */ __webpack_exports__["default"] = (Popper);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_1__);


jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  // Carousel
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".carousel-posts").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    navText: ['<i class="fa fa-angle-left fa-3x" aria-hidden="true"></i>', '<i class="fa fa-angle-right fa-3x" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });
});

/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi ./src/js/main.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/adriengrolee/Sites/EXOS/module-3/Eatit-eval3/wp_eatit_3_AG/wp-content/themes/startheme/src/js/main.js */"./src/js/main.js");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy91dGlsLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvYWxlcnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9jYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL2NvbGxhcHNlLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL3Rvb2xzL3Nhbml0aXplci5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL3Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9wb3BvdmVyLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvc2Nyb2xsc3B5LmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvdGFiLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvdG9hc3QuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9pc0Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9kZWJvdW5jZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9nZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9nZXRQYXJlbnROb2RlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0U2Nyb2xsUGFyZW50LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0UmVmZXJlbmNlTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2lzSUUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9nZXRPZmZzZXRQYXJlbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9pc09mZnNldENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2dldFJvb3QuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9maW5kQ29tbW9uT2Zmc2V0UGFyZW50LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0U2Nyb2xsLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvaW5jbHVkZVNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2dldEJvcmRlcnNTaXplLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0V2luZG93U2l6ZXMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9nZXRDbGllbnRSZWN0LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0Vmlld3BvcnRPZmZzZXRSZWN0UmVsYXRpdmVUb0FydGJpdHJhcnlOb2RlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvaXNGaXhlZC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2dldEZpeGVkUG9zaXRpb25PZmZzZXRQYXJlbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9nZXRCb3VuZGFyaWVzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvY29tcHV0ZUF1dG9QbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9nZXRSZWZlcmVuY2VPZmZzZXRzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0T3V0ZXJTaXplcy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2dldE9wcG9zaXRlUGxhY2VtZW50LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0UG9wcGVyT2Zmc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2ZpbmQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9maW5kSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9ydW5Nb2RpZmllcnMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9tZXRob2RzL3VwZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2lzTW9kaWZpZXJFbmFibGVkLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbWV0aG9kcy9kZXN0cm95LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0V2luZG93LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvc2V0dXBFdmVudExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL21ldGhvZHMvZW5hYmxlRXZlbnRMaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9yZW1vdmVFdmVudExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL21ldGhvZHMvZGlzYWJsZUV2ZW50TGlzdGVuZXJzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvaXNOdW1lcmljLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvc2V0U3R5bGVzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvc2V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL21vZGlmaWVycy9hcHBseVN0eWxlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0Um91bmRlZE9mZnNldHMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9tb2RpZmllcnMvY29tcHV0ZVN0eWxlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvaXNNb2RpZmllclJlcXVpcmVkLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbW9kaWZpZXJzL2Fycm93LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0T3Bwb3NpdGVWYXJpYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9tZXRob2RzL3BsYWNlbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9jbG9ja3dpc2UuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9tb2RpZmllcnMvZmxpcC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL21vZGlmaWVycy9rZWVwVG9nZXRoZXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9tb2RpZmllcnMvb2Zmc2V0LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbW9kaWZpZXJzL3ByZXZlbnRPdmVyZmxvdy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL21vZGlmaWVycy9zaGlmdC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL21vZGlmaWVycy9oaWRlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbW9kaWZpZXJzL2lubmVyLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbW9kaWZpZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbWV0aG9kcy9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiXSwibmFtZXMiOlsiVFJBTlNJVElPTl9FTkQiLCJNQVhfVUlEIiwiTUlMTElTRUNPTkRTX01VTFRJUExJRVIiLCJiaW5kVHlwZSIsImRlbGVnYXRlVHlwZSIsImhhbmRsZSIsIiQiLCJldmVudCIsImNhbGxlZCIsIlV0aWwiLCJzZXRUaW1lb3V0IiwiZ2V0U3BlY2lhbFRyYW5zaXRpb25FbmRFdmVudCIsImdldFVJRCIsInByZWZpeCIsIk1hdGgiLCJkb2N1bWVudCIsImdldFNlbGVjdG9yRnJvbUVsZW1lbnQiLCJzZWxlY3RvciIsImVsZW1lbnQiLCJocmVmQXR0ciIsImdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50IiwidHJhbnNpdGlvbkR1cmF0aW9uIiwidHJhbnNpdGlvbkRlbGF5IiwiZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24iLCJwYXJzZUZsb2F0IiwiZmxvYXRUcmFuc2l0aW9uRGVsYXkiLCJyZWZsb3ciLCJ0cmlnZ2VyVHJhbnNpdGlvbkVuZCIsInN1cHBvcnRzVHJhbnNpdGlvbkVuZCIsIkJvb2xlYW4iLCJpc0VsZW1lbnQiLCJvYmoiLCJ0eXBlQ2hlY2tDb25maWciLCJPYmplY3QiLCJleHBlY3RlZFR5cGVzIiwiY29uZmlnVHlwZXMiLCJ2YWx1ZSIsImNvbmZpZyIsInZhbHVlVHlwZSIsInRvVHlwZSIsImNvbXBvbmVudE5hbWUiLCJmaW5kU2hhZG93Um9vdCIsInJvb3QiLCJqUXVlcnlEZXRlY3Rpb24iLCJ2ZXJzaW9uIiwibWluTWFqb3IiLCJsdE1ham9yIiwibWluTWlub3IiLCJtaW5QYXRjaCIsIm1heE1ham9yIiwic2V0VHJhbnNpdGlvbkVuZFN1cHBvcnQiLCJOQU1FIiwiVkVSU0lPTiIsIkRBVEFfS0VZIiwiRVZFTlRfS0VZIiwiREFUQV9BUElfS0VZIiwiSlFVRVJZX05PX0NPTkZMSUNUIiwiU2VsZWN0b3IiLCJESVNNSVNTIiwiRXZlbnQiLCJDTE9TRSIsIkNMT1NFRCIsIkNMSUNLX0RBVEFfQVBJIiwiQ2xhc3NOYW1lIiwiQUxFUlQiLCJGQURFIiwiU0hPVyIsIkFsZXJ0IiwiY2xvc2UiLCJyb290RWxlbWVudCIsImN1c3RvbUV2ZW50IiwiZGlzcG9zZSIsIl9nZXRSb290RWxlbWVudCIsInBhcmVudCIsIl90cmlnZ2VyQ2xvc2VFdmVudCIsImNsb3NlRXZlbnQiLCJfcmVtb3ZlRWxlbWVudCIsIl9kZXN0cm95RWxlbWVudCIsIl9qUXVlcnlJbnRlcmZhY2UiLCIkZWxlbWVudCIsImRhdGEiLCJfaGFuZGxlRGlzbWlzcyIsImFsZXJ0SW5zdGFuY2UiLCJBQ1RJVkUiLCJCVVRUT04iLCJGT0NVUyIsIkRBVEFfVE9HR0xFX0NBUlJPVCIsIkRBVEFfVE9HR0xFUyIsIkRBVEFfVE9HR0xFIiwiREFUQV9UT0dHTEVTX0JVVFRPTlMiLCJJTlBVVCIsIkZPQ1VTX0JMVVJfREFUQV9BUEkiLCJMT0FEX0RBVEFfQVBJIiwiQnV0dG9uIiwidG9nZ2xlIiwidHJpZ2dlckNoYW5nZUV2ZW50IiwiYWRkQXJpYVByZXNzZWQiLCJpbnB1dCIsImFjdGl2ZUVsZW1lbnQiLCJidXR0b24iLCJpbnB1dEJ0biIsImJ1dHRvbnMiLCJpIiwibGVuIiwiQVJST1dfTEVGVF9LRVlDT0RFIiwiQVJST1dfUklHSFRfS0VZQ09ERSIsIlRPVUNIRVZFTlRfQ09NUEFUX1dBSVQiLCJTV0lQRV9USFJFU0hPTEQiLCJEZWZhdWx0IiwiaW50ZXJ2YWwiLCJrZXlib2FyZCIsInNsaWRlIiwicGF1c2UiLCJ3cmFwIiwidG91Y2giLCJEZWZhdWx0VHlwZSIsIkRpcmVjdGlvbiIsIk5FWFQiLCJQUkVWIiwiTEVGVCIsIlJJR0hUIiwiU0xJREUiLCJTTElEIiwiS0VZRE9XTiIsIk1PVVNFRU5URVIiLCJNT1VTRUxFQVZFIiwiVE9VQ0hTVEFSVCIsIlRPVUNITU9WRSIsIlRPVUNIRU5EIiwiUE9JTlRFUkRPV04iLCJQT0lOVEVSVVAiLCJEUkFHX1NUQVJUIiwiQ0FST1VTRUwiLCJJVEVNIiwiUE9JTlRFUl9FVkVOVCIsIkFDVElWRV9JVEVNIiwiSVRFTV9JTUciLCJORVhUX1BSRVYiLCJJTkRJQ0FUT1JTIiwiREFUQV9TTElERSIsIkRBVEFfUklERSIsIlBvaW50ZXJUeXBlIiwiVE9VQ0giLCJQRU4iLCJDYXJvdXNlbCIsIm5hdmlnYXRvciIsIndpbmRvdyIsIm5leHQiLCJuZXh0V2hlblZpc2libGUiLCJwcmV2IiwiY2xlYXJJbnRlcnZhbCIsImN5Y2xlIiwic2V0SW50ZXJ2YWwiLCJ0byIsImFjdGl2ZUluZGV4IiwiaW5kZXgiLCJkaXJlY3Rpb24iLCJfZ2V0Q29uZmlnIiwiX2hhbmRsZVN3aXBlIiwiYWJzRGVsdGF4IiwiX2FkZEV2ZW50TGlzdGVuZXJzIiwiX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMiLCJzdGFydCIsIm1vdmUiLCJlbmQiLCJjbGVhclRpbWVvdXQiLCJlIiwiX2tleWRvd24iLCJfZ2V0SXRlbUluZGV4IiwiX2dldEl0ZW1CeURpcmVjdGlvbiIsImlzTmV4dERpcmVjdGlvbiIsImlzUHJldkRpcmVjdGlvbiIsImxhc3RJdGVtSW5kZXgiLCJpc0dvaW5nVG9XcmFwIiwiZGVsdGEiLCJpdGVtSW5kZXgiLCJfdHJpZ2dlclNsaWRlRXZlbnQiLCJ0YXJnZXRJbmRleCIsImZyb21JbmRleCIsInNsaWRlRXZlbnQiLCJyZWxhdGVkVGFyZ2V0IiwiZnJvbSIsIl9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50IiwiaW5kaWNhdG9ycyIsIm5leHRJbmRpY2F0b3IiLCJfc2xpZGUiLCJhY3RpdmVFbGVtZW50SW5kZXgiLCJuZXh0RWxlbWVudCIsIm5leHRFbGVtZW50SW5kZXgiLCJpc0N5Y2xpbmciLCJkaXJlY3Rpb25hbENsYXNzTmFtZSIsIm9yZGVyQ2xhc3NOYW1lIiwiZXZlbnREaXJlY3Rpb25OYW1lIiwic2xpZEV2ZW50IiwibmV4dEVsZW1lbnRJbnRlcnZhbCIsInBhcnNlSW50IiwiX2NvbmZpZyIsImFjdGlvbiIsIl9kYXRhQXBpQ2xpY2tIYW5kbGVyIiwidGFyZ2V0Iiwic2xpZGVJbmRleCIsImNhcm91c2VscyIsIiRjYXJvdXNlbCIsIlNIT1dOIiwiSElERSIsIkhJRERFTiIsIkNPTExBUFNFIiwiQ09MTEFQU0lORyIsIkNPTExBUFNFRCIsIkRpbWVuc2lvbiIsIldJRFRIIiwiSEVJR0hUIiwiQUNUSVZFUyIsIkNvbGxhcHNlIiwidG9nZ2xlTGlzdCIsImVsZW0iLCJmaWx0ZXJFbGVtZW50IiwiZm91bmRFbGVtIiwic2hvdyIsImFjdGl2ZXMiLCJhY3RpdmVzRGF0YSIsInN0YXJ0RXZlbnQiLCJkaW1lbnNpb24iLCJjb21wbGV0ZSIsImNhcGl0YWxpemVkRGltZW5zaW9uIiwic2Nyb2xsU2l6ZSIsImhpZGUiLCJ0cmlnZ2VyQXJyYXlMZW5ndGgiLCJ0cmlnZ2VyIiwiJGVsZW0iLCJzZXRUcmFuc2l0aW9uaW5nIiwiX2dldERpbWVuc2lvbiIsImhhc1dpZHRoIiwiX2dldFBhcmVudCIsImNoaWxkcmVuIiwiX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyIsImlzT3BlbiIsInRyaWdnZXJBcnJheSIsIl9nZXRUYXJnZXRGcm9tRWxlbWVudCIsIiR0aGlzIiwiJHRyaWdnZXIiLCJzZWxlY3RvcnMiLCIkdGFyZ2V0IiwiRVNDQVBFX0tFWUNPREUiLCJTUEFDRV9LRVlDT0RFIiwiVEFCX0tFWUNPREUiLCJBUlJPV19VUF9LRVlDT0RFIiwiQVJST1dfRE9XTl9LRVlDT0RFIiwiUklHSFRfTU9VU0VfQlVUVE9OX1dISUNIIiwiUkVHRVhQX0tFWURPV04iLCJDTElDSyIsIktFWURPV05fREFUQV9BUEkiLCJLRVlVUF9EQVRBX0FQSSIsIkRJU0FCTEVEIiwiRFJPUFVQIiwiRFJPUFJJR0hUIiwiRFJPUExFRlQiLCJNRU5VUklHSFQiLCJNRU5VTEVGVCIsIlBPU0lUSU9OX1NUQVRJQyIsIkZPUk1fQ0hJTEQiLCJNRU5VIiwiTkFWQkFSX05BViIsIlZJU0lCTEVfSVRFTVMiLCJBdHRhY2htZW50TWFwIiwiVE9QIiwiVE9QRU5EIiwiQk9UVE9NIiwiQk9UVE9NRU5EIiwiUklHSFRFTkQiLCJMRUZURU5EIiwib2Zmc2V0IiwiZmxpcCIsImJvdW5kYXJ5IiwicmVmZXJlbmNlIiwiZGlzcGxheSIsInBvcHBlckNvbmZpZyIsIkRyb3Bkb3duIiwiaXNBY3RpdmUiLCJ1c2VQb3BwZXIiLCJfZWxlbWVudCIsInNob3dFdmVudCIsInJlZmVyZW5jZUVsZW1lbnQiLCJoaWRlRXZlbnQiLCJ1cGRhdGUiLCJfZ2V0TWVudUVsZW1lbnQiLCJfZ2V0UGxhY2VtZW50IiwiJHBhcmVudERyb3Bkb3duIiwicGxhY2VtZW50IiwiX2RldGVjdE5hdmJhciIsIl9nZXRPZmZzZXQiLCJfZ2V0UG9wcGVyQ29uZmlnIiwibW9kaWZpZXJzIiwiZW5hYmxlZCIsInByZXZlbnRPdmVyZmxvdyIsImJvdW5kYXJpZXNFbGVtZW50IiwiX2NsZWFyTWVudXMiLCJ0b2dnbGVzIiwiY29udGV4dCIsImRyb3Bkb3duTWVudSIsIl9nZXRQYXJlbnRGcm9tRWxlbWVudCIsIl9kYXRhQXBpS2V5ZG93bkhhbmRsZXIiLCJpdGVtcyIsImJhY2tkcm9wIiwiZm9jdXMiLCJISURFX1BSRVZFTlRFRCIsIkZPQ1VTSU4iLCJSRVNJWkUiLCJDTElDS19ESVNNSVNTIiwiS0VZRE9XTl9ESVNNSVNTIiwiTU9VU0VVUF9ESVNNSVNTIiwiTU9VU0VET1dOX0RJU01JU1MiLCJTQ1JPTExBQkxFIiwiU0NST0xMQkFSX01FQVNVUkVSIiwiQkFDS0RST1AiLCJPUEVOIiwiU1RBVElDIiwiRElBTE9HIiwiTU9EQUxfQk9EWSIsIkRBVEFfRElTTUlTUyIsIkZJWEVEX0NPTlRFTlQiLCJTVElDS1lfQ09OVEVOVCIsIk1vZGFsIiwidHJhbnNpdGlvbiIsImhhbmRsZVVwZGF0ZSIsIl90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uIiwiaGlkZUV2ZW50UHJldmVudGVkIiwibW9kYWxUcmFuc2l0aW9uRHVyYXRpb24iLCJfc2hvd0VsZW1lbnQiLCJtb2RhbEJvZHkiLCJOb2RlIiwic2hvd25FdmVudCIsInRyYW5zaXRpb25Db21wbGV0ZSIsIl9lbmZvcmNlRm9jdXMiLCJfc2V0RXNjYXBlRXZlbnQiLCJfc2V0UmVzaXplRXZlbnQiLCJfaGlkZU1vZGFsIiwiX3JlbW92ZUJhY2tkcm9wIiwiX3Nob3dCYWNrZHJvcCIsImFuaW1hdGUiLCJjYWxsYmFjayIsImJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uIiwiY2FsbGJhY2tSZW1vdmUiLCJfYWRqdXN0RGlhbG9nIiwiaXNNb2RhbE92ZXJmbG93aW5nIiwiX3Jlc2V0QWRqdXN0bWVudHMiLCJfY2hlY2tTY3JvbGxiYXIiLCJyZWN0IiwiX3NldFNjcm9sbGJhciIsImZpeGVkQ29udGVudCIsInN0aWNreUNvbnRlbnQiLCJhY3R1YWxQYWRkaW5nIiwiY2FsY3VsYXRlZFBhZGRpbmciLCJhY3R1YWxNYXJnaW4iLCJjYWxjdWxhdGVkTWFyZ2luIiwiX3Jlc2V0U2Nyb2xsYmFyIiwicGFkZGluZyIsImVsZW1lbnRzIiwibWFyZ2luIiwiX2dldFNjcm9sbGJhcldpZHRoIiwic2Nyb2xsRGl2Iiwic2Nyb2xsYmFyV2lkdGgiLCJ1cmlBdHRycyIsIkFSSUFfQVRUUklCVVRFX1BBVFRFUk4iLCJEZWZhdWx0V2hpdGVsaXN0IiwiYSIsImFyZWEiLCJiIiwiYnIiLCJjb2wiLCJjb2RlIiwiZGl2IiwiZW0iLCJociIsImgxIiwiaDIiLCJoMyIsImg0IiwiaDUiLCJoNiIsImltZyIsImxpIiwib2wiLCJwIiwicHJlIiwicyIsInNtYWxsIiwic3BhbiIsInN1YiIsInN1cCIsInN0cm9uZyIsInUiLCJ1bCIsIlNBRkVfVVJMX1BBVFRFUk4iLCJEQVRBX1VSTF9QQVRURVJOIiwiYXR0ck5hbWUiLCJhdHRyIiwiYWxsb3dlZEF0dHJpYnV0ZUxpc3QiLCJyZWdFeHAiLCJhdHRyUmVnZXgiLCJsIiwidW5zYWZlSHRtbCIsInNhbml0aXplRm4iLCJkb21QYXJzZXIiLCJjcmVhdGVkRG9jdW1lbnQiLCJ3aGl0ZWxpc3RLZXlzIiwiZWwiLCJlbE5hbWUiLCJhdHRyaWJ1dGVMaXN0Iiwid2hpdGVsaXN0ZWRBdHRyaWJ1dGVzIiwid2hpdGVMaXN0IiwiYWxsb3dlZEF0dHJpYnV0ZSIsIkNMQVNTX1BSRUZJWCIsIkJTQ0xTX1BSRUZJWF9SRUdFWCIsIkRJU0FMTE9XRURfQVRUUklCVVRFUyIsImFuaW1hdGlvbiIsInRlbXBsYXRlIiwidGl0bGUiLCJkZWxheSIsImh0bWwiLCJjb250YWluZXIiLCJmYWxsYmFja1BsYWNlbWVudCIsInNhbml0aXplIiwiQVVUTyIsIkhvdmVyU3RhdGUiLCJPVVQiLCJJTlNFUlRFRCIsIkZPQ1VTT1VUIiwiVE9PTFRJUCIsIlRPT0xUSVBfSU5ORVIiLCJBUlJPVyIsIlRyaWdnZXIiLCJIT1ZFUiIsIk1BTlVBTCIsIlRvb2x0aXAiLCJlbmFibGUiLCJkaXNhYmxlIiwidG9nZ2xlRW5hYmxlZCIsImRhdGFLZXkiLCJzaGFkb3dSb290IiwiaXNJblRoZURvbSIsInRpcCIsInRpcElkIiwiYXR0YWNobWVudCIsInByZXZIb3ZlclN0YXRlIiwiaXNXaXRoQ29udGVudCIsImFkZEF0dGFjaG1lbnRDbGFzcyIsImdldFRpcEVsZW1lbnQiLCJzZXRDb250ZW50Iiwic2V0RWxlbWVudENvbnRlbnQiLCJjb250ZW50Iiwic2FuaXRpemVIdG1sIiwiZ2V0VGl0bGUiLCJkZWZhdWx0QnNDb25maWciLCJiZWhhdmlvciIsImFycm93Iiwib25DcmVhdGUiLCJvblVwZGF0ZSIsIl9nZXRDb250YWluZXIiLCJfZ2V0QXR0YWNobWVudCIsIl9zZXRMaXN0ZW5lcnMiLCJ0cmlnZ2VycyIsImV2ZW50SW4iLCJldmVudE91dCIsIl9maXhUaXRsZSIsInRpdGxlVHlwZSIsIl9lbnRlciIsIl9sZWF2ZSIsIl9pc1dpdGhBY3RpdmVUcmlnZ2VyIiwiZGF0YUF0dHJpYnV0ZXMiLCJfZ2V0RGVsZWdhdGVDb25maWciLCJfY2xlYW5UaXBDbGFzcyIsIiR0aXAiLCJ0YWJDbGFzcyIsIl9oYW5kbGVQb3BwZXJQbGFjZW1lbnRDaGFuZ2UiLCJwb3BwZXJJbnN0YW5jZSIsInBvcHBlckRhdGEiLCJfZml4VHJhbnNpdGlvbiIsImluaXRDb25maWdBbmltYXRpb24iLCJUSVRMRSIsIkNPTlRFTlQiLCJQb3BvdmVyIiwiX2dldENvbnRlbnQiLCJtZXRob2QiLCJBQ1RJVkFURSIsIlNDUk9MTCIsIkRST1BET1dOX0lURU0iLCJEUk9QRE9XTl9NRU5VIiwiREFUQV9TUFkiLCJOQVZfTElTVF9HUk9VUCIsIk5BVl9MSU5LUyIsIk5BVl9JVEVNUyIsIkxJU1RfSVRFTVMiLCJEUk9QRE9XTiIsIkRST1BET1dOX0lURU1TIiwiRFJPUERPV05fVE9HR0xFIiwiT2Zmc2V0TWV0aG9kIiwiT0ZGU0VUIiwiUE9TSVRJT04iLCJTY3JvbGxTcHkiLCJyZWZyZXNoIiwiYXV0b01ldGhvZCIsIm9mZnNldE1ldGhvZCIsIm9mZnNldEJhc2UiLCJ0YXJnZXRzIiwidGFyZ2V0U2VsZWN0b3IiLCJ0YXJnZXRCQ1IiLCJpdGVtIiwiaWQiLCJfZ2V0U2Nyb2xsVG9wIiwiX2dldFNjcm9sbEhlaWdodCIsIl9nZXRPZmZzZXRIZWlnaHQiLCJfcHJvY2VzcyIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsIm1heFNjcm9sbCIsIm9mZnNldExlbmd0aCIsImlzQWN0aXZlVGFyZ2V0IiwiX2FjdGl2YXRlIiwicXVlcmllcyIsIiRsaW5rIiwiX2NsZWFyIiwibm9kZSIsInNjcm9sbFNweXMiLCJzY3JvbGxTcHlzTGVuZ3RoIiwiJHNweSIsIkFDVElWRV9VTCIsIkRST1BET1dOX0FDVElWRV9DSElMRCIsIlRhYiIsImxpc3RFbGVtZW50IiwiaXRlbVNlbGVjdG9yIiwicHJldmlvdXMiLCJoaWRkZW5FdmVudCIsImFjdGl2ZUVsZW1lbnRzIiwiYWN0aXZlIiwiaXNUcmFuc2l0aW9uaW5nIiwiX3RyYW5zaXRpb25Db21wbGV0ZSIsImRyb3Bkb3duQ2hpbGQiLCJkcm9wZG93bkVsZW1lbnQiLCJkcm9wZG93blRvZ2dsZUxpc3QiLCJTSE9XSU5HIiwiYXV0b2hpZGUiLCJUb2FzdCIsIl9jbG9zZSIsInRpbWVvdXREdXJhdGlvbiIsImxvbmdlclRpbWVvdXRCcm93c2VycyIsImlzQnJvd3NlciIsInNjaGVkdWxlZCIsInN1cHBvcnRzTWljcm9UYXNrcyIsImdldFR5cGUiLCJmdW5jdGlvblRvQ2hlY2siLCJjc3MiLCJwcm9wZXJ0eSIsImdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSIsIm92ZXJmbG93Iiwib3ZlcmZsb3dYIiwib3ZlcmZsb3dZIiwiZ2V0U2Nyb2xsUGFyZW50IiwiZ2V0UGFyZW50Tm9kZSIsImlzSUUxMSIsImlzSUUxMCIsIm5vT2Zmc2V0UGFyZW50IiwiaXNJRSIsIm9mZnNldFBhcmVudCIsIm5vZGVOYW1lIiwiZ2V0T2Zmc2V0UGFyZW50IiwiZ2V0Um9vdCIsImVsZW1lbnQxIiwiZWxlbWVudDIiLCJvcmRlciIsInJhbmdlIiwiY29tbW9uQW5jZXN0b3JDb250YWluZXIiLCJpc09mZnNldENvbnRhaW5lciIsImVsZW1lbnQxcm9vdCIsImZpbmRDb21tb25PZmZzZXRQYXJlbnQiLCJzaWRlIiwidXBwZXJTaWRlIiwic2Nyb2xsaW5nRWxlbWVudCIsInN1YnRyYWN0IiwiZ2V0U2Nyb2xsIiwic2Nyb2xsTGVmdCIsIm1vZGlmaWVyIiwic2lkZUEiLCJheGlzIiwic2lkZUIiLCJzdHlsZXMiLCJib2R5IiwiY29tcHV0ZWRTdHlsZSIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRTaXplIiwib2Zmc2V0cyIsImhlaWdodCIsInJlc3VsdCIsInRvcCIsInNpemVzIiwiZ2V0V2luZG93U2l6ZXMiLCJ3aWR0aCIsImhvcml6U2Nyb2xsYmFyIiwidmVydFNjcm9sbGJhciIsImdldEJvcmRlcnNTaXplIiwiZ2V0Q2xpZW50UmVjdCIsImZpeGVkUG9zaXRpb24iLCJydW5Jc0lFIiwiaXNIVE1MIiwiY2hpbGRyZW5SZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGFyZW50UmVjdCIsInNjcm9sbFBhcmVudCIsImJvcmRlclRvcFdpZHRoIiwiYm9yZGVyTGVmdFdpZHRoIiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsImluY2x1ZGVTY3JvbGwiLCJleGNsdWRlU2Nyb2xsIiwicmVsYXRpdmVPZmZzZXQiLCJnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUiLCJwYXJlbnROb2RlIiwiaXNGaXhlZCIsImJvdW5kYXJpZXMiLCJsZWZ0IiwiZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudCIsImdldFJlZmVyZW5jZU5vZGUiLCJnZXRWaWV3cG9ydE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJ0Yml0cmFyeU5vZGUiLCJib3VuZGFyaWVzTm9kZSIsInBvcHBlciIsImlzUGFkZGluZ051bWJlciIsImdldEJvdW5kYXJpZXMiLCJyZWN0cyIsInJlZlJlY3QiLCJib3R0b20iLCJzb3J0ZWRBcmVhcyIsImdldEFyZWEiLCJmaWx0ZXJlZEFyZWFzIiwiY29tcHV0ZWRQbGFjZW1lbnQiLCJ2YXJpYXRpb24iLCJjb21tb25PZmZzZXRQYXJlbnQiLCJ4IiwieSIsImhhc2giLCJyaWdodCIsInBvcHBlclJlY3QiLCJnZXRPdXRlclNpemVzIiwicG9wcGVyT2Zmc2V0cyIsImlzSG9yaXoiLCJtYWluU2lkZSIsInNlY29uZGFyeVNpZGUiLCJtZWFzdXJlbWVudCIsInNlY29uZGFyeU1lYXN1cmVtZW50IiwicmVmZXJlbmNlT2Zmc2V0cyIsImdldE9wcG9zaXRlUGxhY2VtZW50IiwiQXJyYXkiLCJhcnIiLCJjdXIiLCJtYXRjaCIsIm1vZGlmaWVyc1RvUnVuIiwiZW5kcyIsImZpbmRJbmRleCIsImZuIiwiaXNGdW5jdGlvbiIsImdldFJlZmVyZW5jZU9mZnNldHMiLCJjb21wdXRlQXV0b1BsYWNlbWVudCIsImdldFBvcHBlck9mZnNldHMiLCJydW5Nb2RpZmllcnMiLCJuYW1lIiwicHJlZml4ZXMiLCJ1cHBlclByb3AiLCJ0b0NoZWNrIiwiaXNNb2RpZmllckVuYWJsZWQiLCJnZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUiLCJvd25lckRvY3VtZW50IiwiaXNCb2R5IiwicGFzc2l2ZSIsInN0YXRlIiwic2Nyb2xsRWxlbWVudCIsInNldHVwRXZlbnRMaXN0ZW5lcnMiLCJyZW1vdmVFdmVudExpc3RlbmVycyIsIm4iLCJpc05hTiIsImlzRmluaXRlIiwidW5pdCIsImlzTnVtZXJpYyIsImF0dHJpYnV0ZXMiLCJvcHRpb25zIiwicG9zaXRpb24iLCJyb3VuZCIsImZsb29yIiwibm9Sb3VuZCIsInJlZmVyZW5jZVdpZHRoIiwicG9wcGVyV2lkdGgiLCJpc1ZlcnRpY2FsIiwiaXNWYXJpYXRpb24iLCJzYW1lV2lkdGhQYXJpdHkiLCJib3RoT2RkV2lkdGgiLCJob3Jpem9udGFsVG9JbnRlZ2VyIiwidmVydGljYWxUb0ludGVnZXIiLCJpc0ZpcmVmb3giLCJsZWdhY3lHcHVBY2NlbGVyYXRpb25PcHRpb24iLCJncHVBY2NlbGVyYXRpb24iLCJvZmZzZXRQYXJlbnRSZWN0IiwiZ2V0Um91bmRlZE9mZnNldHMiLCJwcmVmaXhlZFByb3BlcnR5IiwiaW52ZXJ0VG9wIiwiaW52ZXJ0TGVmdCIsInJlcXVlc3RpbmciLCJpc1JlcXVpcmVkIiwicmVxdWVzdGVkIiwiaXNNb2RpZmllclJlcXVpcmVkIiwiYXJyb3dFbGVtZW50Iiwic2lkZUNhcGl0YWxpemVkIiwiYWx0U2lkZSIsIm9wU2lkZSIsImFycm93RWxlbWVudFNpemUiLCJjZW50ZXIiLCJwb3BwZXJNYXJnaW5TaWRlIiwicG9wcGVyQm9yZGVyU2lkZSIsInNpZGVWYWx1ZSIsInZhbGlkUGxhY2VtZW50cyIsInBsYWNlbWVudHMiLCJjb3VudGVyIiwiQkVIQVZJT1JTIiwicGxhY2VtZW50T3Bwb3NpdGUiLCJmbGlwT3JkZXIiLCJjbG9ja3dpc2UiLCJyZWZPZmZzZXRzIiwib3ZlcmxhcHNSZWYiLCJvdmVyZmxvd3NMZWZ0Iiwib3ZlcmZsb3dzUmlnaHQiLCJvdmVyZmxvd3NUb3AiLCJvdmVyZmxvd3NCb3R0b20iLCJvdmVyZmxvd3NCb3VuZGFyaWVzIiwiZmxpcHBlZFZhcmlhdGlvbkJ5UmVmIiwiZmxpcHBlZFZhcmlhdGlvbkJ5Q29udGVudCIsImZsaXBwZWRWYXJpYXRpb24iLCJnZXRPcHBvc2l0ZVZhcmlhdGlvbiIsInNwbGl0Iiwic3RyIiwic2l6ZSIsInVzZUhlaWdodCIsImZyYWdtZW50cyIsImZyYWciLCJkaXZpZGVyIiwic3BsaXRSZWdleCIsIm9wcyIsIm1lcmdlV2l0aFByZXZpb3VzIiwidG9WYWx1ZSIsIm9wIiwiaW5kZXgyIiwiYmFzZVBsYWNlbWVudCIsInBhcnNlT2Zmc2V0IiwidHJhbnNmb3JtUHJvcCIsInBvcHBlclN0eWxlcyIsInRyYW5zZm9ybSIsImNoZWNrIiwic2hpZnR2YXJpYXRpb24iLCJzaGlmdE9mZnNldHMiLCJib3VuZCIsInN1YnRyYWN0TGVuZ3RoIiwic2hpZnQiLCJrZWVwVG9nZXRoZXIiLCJpbm5lciIsInVuZGVmaW5lZCIsIlBvcHBlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRlYm91bmNlIiwibW9kaWZpZXJPcHRpb25zIiwiZXZlbnRzRW5hYmxlZCIsImRlc3Ryb3kiLCJlbmFibGVFdmVudExpc3RlbmVycyIsImRpc2FibGVFdmVudExpc3RlbmVycyIsIlV0aWxzIiwiUG9wcGVyVXRpbHMiLCJEZWZhdWx0cyIsImciLCJGdW5jdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZWFkeSIsIm93bENhcm91c2VsIiwibG9vcCIsIm5hdiIsIm5hdlRleHQiLCJyZXNwb25zaXZlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7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QUs7QUFDREEsYUFBSyxFQUFFO0FBRE4sT0FKRztBQU9SLFdBQUs7QUFDREEsYUFBSyxFQUFFO0FBRE47QUFQRztBQUxpQixHQUFqQztBQW9CSCxDQXZCRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBLHdCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjQuMSk6IHV0aWwuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFByaXZhdGUgVHJhbnNpdGlvbkVuZCBIZWxwZXJzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBUUkFOU0lUSU9OX0VORCA9ICd0cmFuc2l0aW9uZW5kJ1xuY29uc3QgTUFYX1VJRCA9IDEwMDAwMDBcbmNvbnN0IE1JTExJU0VDT05EU19NVUxUSVBMSUVSID0gMTAwMFxuXG4vLyBTaG91dG91dCBBbmd1c0Nyb2xsIChodHRwczovL2dvby5nbC9weHdRR3ApXG5mdW5jdGlvbiB0b1R5cGUob2JqKSB7XG4gIHJldHVybiB7fS50b1N0cmluZy5jYWxsKG9iaikubWF0Y2goL1xccyhbYS16XSspL2kpWzFdLnRvTG93ZXJDYXNlKClcbn1cblxuZnVuY3Rpb24gZ2V0U3BlY2lhbFRyYW5zaXRpb25FbmRFdmVudCgpIHtcbiAgcmV0dXJuIHtcbiAgICBiaW5kVHlwZTogVFJBTlNJVElPTl9FTkQsXG4gICAgZGVsZWdhdGVUeXBlOiBUUkFOU0lUSU9OX0VORCxcbiAgICBoYW5kbGUoZXZlbnQpIHtcbiAgICAgIGlmICgkKGV2ZW50LnRhcmdldCkuaXModGhpcykpIHtcbiAgICAgICAgcmV0dXJuIGV2ZW50LmhhbmRsZU9iai5oYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgLy8gZXNsaW50LWRpc2FibGUtbGluZSBwcmVmZXItcmVzdC1wYXJhbXNcbiAgICAgIH1cbiAgICAgIHJldHVybiB1bmRlZmluZWQgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZmluZWRcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdHJhbnNpdGlvbkVuZEVtdWxhdG9yKGR1cmF0aW9uKSB7XG4gIGxldCBjYWxsZWQgPSBmYWxzZVxuXG4gICQodGhpcykub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsICgpID0+IHtcbiAgICBjYWxsZWQgPSB0cnVlXG4gIH0pXG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgIFV0aWwudHJpZ2dlclRyYW5zaXRpb25FbmQodGhpcylcbiAgICB9XG4gIH0sIGR1cmF0aW9uKVxuXG4gIHJldHVybiB0aGlzXG59XG5cbmZ1bmN0aW9uIHNldFRyYW5zaXRpb25FbmRTdXBwb3J0KCkge1xuICAkLmZuLmVtdWxhdGVUcmFuc2l0aW9uRW5kID0gdHJhbnNpdGlvbkVuZEVtdWxhdG9yXG4gICQuZXZlbnQuc3BlY2lhbFtVdGlsLlRSQU5TSVRJT05fRU5EXSA9IGdldFNwZWNpYWxUcmFuc2l0aW9uRW5kRXZlbnQoKVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQdWJsaWMgVXRpbCBBcGlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgVXRpbCA9IHtcblxuICBUUkFOU0lUSU9OX0VORDogJ2JzVHJhbnNpdGlvbkVuZCcsXG5cbiAgZ2V0VUlEKHByZWZpeCkge1xuICAgIGRvIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG4gICAgICBwcmVmaXggKz0gfn4oTWF0aC5yYW5kb20oKSAqIE1BWF9VSUQpIC8vIFwifn5cIiBhY3RzIGxpa2UgYSBmYXN0ZXIgTWF0aC5mbG9vcigpIGhlcmVcbiAgICB9IHdoaWxlIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcmVmaXgpKVxuICAgIHJldHVybiBwcmVmaXhcbiAgfSxcblxuICBnZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICBsZXQgc2VsZWN0b3IgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKVxuXG4gICAgaWYgKCFzZWxlY3RvciB8fCBzZWxlY3RvciA9PT0gJyMnKSB7XG4gICAgICBjb25zdCBocmVmQXR0ciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgIHNlbGVjdG9yID0gaHJlZkF0dHIgJiYgaHJlZkF0dHIgIT09ICcjJyA/IGhyZWZBdHRyLnRyaW0oKSA6ICcnXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA/IHNlbGVjdG9yIDogbnVsbFxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH0sXG5cbiAgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuIDBcbiAgICB9XG5cbiAgICAvLyBHZXQgdHJhbnNpdGlvbi1kdXJhdGlvbiBvZiB0aGUgZWxlbWVudFxuICAgIGxldCB0cmFuc2l0aW9uRHVyYXRpb24gPSAkKGVsZW1lbnQpLmNzcygndHJhbnNpdGlvbi1kdXJhdGlvbicpXG4gICAgbGV0IHRyYW5zaXRpb25EZWxheSA9ICQoZWxlbWVudCkuY3NzKCd0cmFuc2l0aW9uLWRlbGF5JylcblxuICAgIGNvbnN0IGZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uID0gcGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgY29uc3QgZmxvYXRUcmFuc2l0aW9uRGVsYXkgPSBwYXJzZUZsb2F0KHRyYW5zaXRpb25EZWxheSlcblxuICAgIC8vIFJldHVybiAwIGlmIGVsZW1lbnQgb3IgdHJhbnNpdGlvbiBkdXJhdGlvbiBpcyBub3QgZm91bmRcbiAgICBpZiAoIWZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uICYmICFmbG9hdFRyYW5zaXRpb25EZWxheSkge1xuICAgICAgcmV0dXJuIDBcbiAgICB9XG5cbiAgICAvLyBJZiBtdWx0aXBsZSBkdXJhdGlvbnMgYXJlIGRlZmluZWQsIHRha2UgdGhlIGZpcnN0XG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uID0gdHJhbnNpdGlvbkR1cmF0aW9uLnNwbGl0KCcsJylbMF1cbiAgICB0cmFuc2l0aW9uRGVsYXkgPSB0cmFuc2l0aW9uRGVsYXkuc3BsaXQoJywnKVswXVxuXG4gICAgcmV0dXJuIChwYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbikgKyBwYXJzZUZsb2F0KHRyYW5zaXRpb25EZWxheSkpICogTUlMTElTRUNPTkRTX01VTFRJUExJRVJcbiAgfSxcblxuICByZWZsb3coZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50Lm9mZnNldEhlaWdodFxuICB9LFxuXG4gIHRyaWdnZXJUcmFuc2l0aW9uRW5kKGVsZW1lbnQpIHtcbiAgICAkKGVsZW1lbnQpLnRyaWdnZXIoVFJBTlNJVElPTl9FTkQpXG4gIH0sXG5cbiAgLy8gVE9ETzogUmVtb3ZlIGluIHY1XG4gIHN1cHBvcnRzVHJhbnNpdGlvbkVuZCgpIHtcbiAgICByZXR1cm4gQm9vbGVhbihUUkFOU0lUSU9OX0VORClcbiAgfSxcblxuICBpc0VsZW1lbnQob2JqKSB7XG4gICAgcmV0dXJuIChvYmpbMF0gfHwgb2JqKS5ub2RlVHlwZVxuICB9LFxuXG4gIHR5cGVDaGVja0NvbmZpZyhjb21wb25lbnROYW1lLCBjb25maWcsIGNvbmZpZ1R5cGVzKSB7XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBjb25maWdUeXBlcykge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjb25maWdUeXBlcywgcHJvcGVydHkpKSB7XG4gICAgICAgIGNvbnN0IGV4cGVjdGVkVHlwZXMgPSBjb25maWdUeXBlc1twcm9wZXJ0eV1cbiAgICAgICAgY29uc3QgdmFsdWUgICAgICAgICA9IGNvbmZpZ1twcm9wZXJ0eV1cbiAgICAgICAgY29uc3QgdmFsdWVUeXBlICAgICA9IHZhbHVlICYmIFV0aWwuaXNFbGVtZW50KHZhbHVlKVxuICAgICAgICAgID8gJ2VsZW1lbnQnIDogdG9UeXBlKHZhbHVlKVxuXG4gICAgICAgIGlmICghbmV3IFJlZ0V4cChleHBlY3RlZFR5cGVzKS50ZXN0KHZhbHVlVHlwZSkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgJHtjb21wb25lbnROYW1lLnRvVXBwZXJDYXNlKCl9OiBgICtcbiAgICAgICAgICAgIGBPcHRpb24gXCIke3Byb3BlcnR5fVwiIHByb3ZpZGVkIHR5cGUgXCIke3ZhbHVlVHlwZX1cIiBgICtcbiAgICAgICAgICAgIGBidXQgZXhwZWN0ZWQgdHlwZSBcIiR7ZXhwZWN0ZWRUeXBlc31cIi5gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGZpbmRTaGFkb3dSb290KGVsZW1lbnQpIHtcbiAgICBpZiAoIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hdHRhY2hTaGFkb3cpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgLy8gQ2FuIGZpbmQgdGhlIHNoYWRvdyByb290IG90aGVyd2lzZSBpdCdsbCByZXR1cm4gdGhlIGRvY3VtZW50XG4gICAgaWYgKHR5cGVvZiBlbGVtZW50LmdldFJvb3ROb2RlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zdCByb290ID0gZWxlbWVudC5nZXRSb290Tm9kZSgpXG4gICAgICByZXR1cm4gcm9vdCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgPyByb290IDogbnVsbFxuICAgIH1cblxuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgU2hhZG93Um9vdCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICB9XG5cbiAgICAvLyB3aGVuIHdlIGRvbid0IGZpbmQgYSBzaGFkb3cgcm9vdFxuICAgIGlmICghZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBVdGlsLmZpbmRTaGFkb3dSb290KGVsZW1lbnQucGFyZW50Tm9kZSlcbiAgfSxcblxuICBqUXVlcnlEZXRlY3Rpb24oKSB7XG4gICAgaWYgKHR5cGVvZiAkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9vdHN0cmFwXFwncyBKYXZhU2NyaXB0IHJlcXVpcmVzIGpRdWVyeS4galF1ZXJ5IG11c3QgYmUgaW5jbHVkZWQgYmVmb3JlIEJvb3RzdHJhcFxcJ3MgSmF2YVNjcmlwdC4nKVxuICAgIH1cblxuICAgIGNvbnN0IHZlcnNpb24gPSAkLmZuLmpxdWVyeS5zcGxpdCgnICcpWzBdLnNwbGl0KCcuJylcbiAgICBjb25zdCBtaW5NYWpvciA9IDFcbiAgICBjb25zdCBsdE1ham9yID0gMlxuICAgIGNvbnN0IG1pbk1pbm9yID0gOVxuICAgIGNvbnN0IG1pblBhdGNoID0gMVxuICAgIGNvbnN0IG1heE1ham9yID0gNFxuXG4gICAgaWYgKHZlcnNpb25bMF0gPCBsdE1ham9yICYmIHZlcnNpb25bMV0gPCBtaW5NaW5vciB8fCB2ZXJzaW9uWzBdID09PSBtaW5NYWpvciAmJiB2ZXJzaW9uWzFdID09PSBtaW5NaW5vciAmJiB2ZXJzaW9uWzJdIDwgbWluUGF0Y2ggfHwgdmVyc2lvblswXSA+PSBtYXhNYWpvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdCb290c3RyYXBcXCdzIEphdmFTY3JpcHQgcmVxdWlyZXMgYXQgbGVhc3QgalF1ZXJ5IHYxLjkuMSBidXQgbGVzcyB0aGFuIHY0LjAuMCcpXG4gICAgfVxuICB9XG59XG5cblV0aWwualF1ZXJ5RGV0ZWN0aW9uKClcbnNldFRyYW5zaXRpb25FbmRTdXBwb3J0KClcblxuZXhwb3J0IGRlZmF1bHQgVXRpbFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC40LjEpOiBhbGVydC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FICAgICAgICAgICAgICAgID0gJ2FsZXJ0J1xuY29uc3QgVkVSU0lPTiAgICAgICAgICAgICA9ICc0LjQuMSdcbmNvbnN0IERBVEFfS0VZICAgICAgICAgICAgPSAnYnMuYWxlcnQnXG5jb25zdCBFVkVOVF9LRVkgICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSAgICAgICAgPSAnLmRhdGEtYXBpJ1xuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUICA9ICQuZm5bTkFNRV1cblxuY29uc3QgU2VsZWN0b3IgPSB7XG4gIERJU01JU1MgOiAnW2RhdGEtZGlzbWlzcz1cImFsZXJ0XCJdJ1xufVxuXG5jb25zdCBFdmVudCA9IHtcbiAgQ0xPU0UgICAgICAgICAgOiBgY2xvc2Uke0VWRU5UX0tFWX1gLFxuICBDTE9TRUQgICAgICAgICA6IGBjbG9zZWQke0VWRU5UX0tFWX1gLFxuICBDTElDS19EQVRBX0FQSSA6IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbn1cblxuY29uc3QgQ2xhc3NOYW1lID0ge1xuICBBTEVSVCA6ICdhbGVydCcsXG4gIEZBREUgIDogJ2ZhZGUnLFxuICBTSE9XICA6ICdzaG93J1xufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgQWxlcnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIGNsb3NlKGVsZW1lbnQpIHtcbiAgICBsZXQgcm9vdEVsZW1lbnQgPSB0aGlzLl9lbGVtZW50XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHJvb3RFbGVtZW50ID0gdGhpcy5fZ2V0Um9vdEVsZW1lbnQoZWxlbWVudClcbiAgICB9XG5cbiAgICBjb25zdCBjdXN0b21FdmVudCA9IHRoaXMuX3RyaWdnZXJDbG9zZUV2ZW50KHJvb3RFbGVtZW50KVxuXG4gICAgaWYgKGN1c3RvbUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9yZW1vdmVFbGVtZW50KHJvb3RFbGVtZW50KVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkpXG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGxcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0Um9vdEVsZW1lbnQoZWxlbWVudCkge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpXG4gICAgbGV0IHBhcmVudCAgICAgPSBmYWxzZVxuXG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICAgIH1cblxuICAgIGlmICghcGFyZW50KSB7XG4gICAgICBwYXJlbnQgPSAkKGVsZW1lbnQpLmNsb3Nlc3QoYC4ke0NsYXNzTmFtZS5BTEVSVH1gKVswXVxuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnRcbiAgfVxuXG4gIF90cmlnZ2VyQ2xvc2VFdmVudChlbGVtZW50KSB7XG4gICAgY29uc3QgY2xvc2VFdmVudCA9ICQuRXZlbnQoRXZlbnQuQ0xPU0UpXG5cbiAgICAkKGVsZW1lbnQpLnRyaWdnZXIoY2xvc2VFdmVudClcbiAgICByZXR1cm4gY2xvc2VFdmVudFxuICB9XG5cbiAgX3JlbW92ZUVsZW1lbnQoZWxlbWVudCkge1xuICAgICQoZWxlbWVudCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG5cbiAgICBpZiAoISQoZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpKSB7XG4gICAgICB0aGlzLl9kZXN0cm95RWxlbWVudChlbGVtZW50KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudChlbGVtZW50KVxuXG4gICAgJChlbGVtZW50KVxuICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCAoZXZlbnQpID0+IHRoaXMuX2Rlc3Ryb3lFbGVtZW50KGVsZW1lbnQsIGV2ZW50KSlcbiAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pXG4gIH1cblxuICBfZGVzdHJveUVsZW1lbnQoZWxlbWVudCkge1xuICAgICQoZWxlbWVudClcbiAgICAgIC5kZXRhY2goKVxuICAgICAgLnRyaWdnZXIoRXZlbnQuQ0xPU0VEKVxuICAgICAgLnJlbW92ZSgpXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0ICRlbGVtZW50ID0gJCh0aGlzKVxuICAgICAgbGV0IGRhdGEgICAgICAgPSAkZWxlbWVudC5kYXRhKERBVEFfS0VZKVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBBbGVydCh0aGlzKVxuICAgICAgICAkZWxlbWVudC5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnID09PSAnY2xvc2UnKSB7XG4gICAgICAgIGRhdGFbY29uZmlnXSh0aGlzKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgX2hhbmRsZURpc21pc3MoYWxlcnRJbnN0YW5jZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9XG5cbiAgICAgIGFsZXJ0SW5zdGFuY2UuY2xvc2UodGhpcylcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kKGRvY3VtZW50KS5vbihcbiAgRXZlbnQuQ0xJQ0tfREFUQV9BUEksXG4gIFNlbGVjdG9yLkRJU01JU1MsXG4gIEFsZXJ0Ll9oYW5kbGVEaXNtaXNzKG5ldyBBbGVydCgpKVxuKVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kLmZuW05BTUVdICAgICAgICAgICAgID0gQWxlcnQuX2pRdWVyeUludGVyZmFjZVxuJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IEFsZXJ0XG4kLmZuW05BTUVdLm5vQ29uZmxpY3QgID0gKCkgPT4ge1xuICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gIHJldHVybiBBbGVydC5falF1ZXJ5SW50ZXJmYWNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFsZXJ0XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjQuMSk6IGJ1dHRvbi5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FICAgICAgICAgICAgICAgID0gJ2J1dHRvbidcbmNvbnN0IFZFUlNJT04gICAgICAgICAgICAgPSAnNC40LjEnXG5jb25zdCBEQVRBX0tFWSAgICAgICAgICAgID0gJ2JzLmJ1dHRvbidcbmNvbnN0IEVWRU5UX0tFWSAgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZICAgICAgICA9ICcuZGF0YS1hcGknXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgID0gJC5mbltOQU1FXVxuXG5jb25zdCBDbGFzc05hbWUgPSB7XG4gIEFDVElWRSA6ICdhY3RpdmUnLFxuICBCVVRUT04gOiAnYnRuJyxcbiAgRk9DVVMgIDogJ2ZvY3VzJ1xufVxuXG5jb25zdCBTZWxlY3RvciA9IHtcbiAgREFUQV9UT0dHTEVfQ0FSUk9UICAgOiAnW2RhdGEtdG9nZ2xlXj1cImJ1dHRvblwiXScsXG4gIERBVEFfVE9HR0xFUyAgICAgICAgIDogJ1tkYXRhLXRvZ2dsZT1cImJ1dHRvbnNcIl0nLFxuICBEQVRBX1RPR0dMRSAgICAgICAgICA6ICdbZGF0YS10b2dnbGU9XCJidXR0b25cIl0nLFxuICBEQVRBX1RPR0dMRVNfQlVUVE9OUyA6ICdbZGF0YS10b2dnbGU9XCJidXR0b25zXCJdIC5idG4nLFxuICBJTlBVVCAgICAgICAgICAgICAgICA6ICdpbnB1dDpub3QoW3R5cGU9XCJoaWRkZW5cIl0pJyxcbiAgQUNUSVZFICAgICAgICAgICAgICAgOiAnLmFjdGl2ZScsXG4gIEJVVFRPTiAgICAgICAgICAgICAgIDogJy5idG4nXG59XG5cbmNvbnN0IEV2ZW50ID0ge1xuICBDTElDS19EQVRBX0FQSSAgICAgIDogYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YCxcbiAgRk9DVVNfQkxVUl9EQVRBX0FQSSA6IGBmb2N1cyR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYGJsdXIke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gLFxuICBMT0FEX0RBVEFfQVBJICAgICAgIDogYGxvYWQke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBCdXR0b24ge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHRvZ2dsZSgpIHtcbiAgICBsZXQgdHJpZ2dlckNoYW5nZUV2ZW50ID0gdHJ1ZVxuICAgIGxldCBhZGRBcmlhUHJlc3NlZCA9IHRydWVcbiAgICBjb25zdCByb290RWxlbWVudCA9ICQodGhpcy5fZWxlbWVudCkuY2xvc2VzdChcbiAgICAgIFNlbGVjdG9yLkRBVEFfVE9HR0xFU1xuICAgIClbMF1cblxuICAgIGlmIChyb290RWxlbWVudCkge1xuICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuSU5QVVQpXG5cbiAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICBpZiAoaW5wdXQudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICAgIGlmIChpbnB1dC5jaGVja2VkICYmXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDbGFzc05hbWUuQUNUSVZFKSkge1xuICAgICAgICAgICAgdHJpZ2dlckNoYW5nZUV2ZW50ID0gZmFsc2VcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgYWN0aXZlRWxlbWVudCA9IHJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuQUNUSVZFKVxuXG4gICAgICAgICAgICBpZiAoYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgICAkKGFjdGl2ZUVsZW1lbnQpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5BQ1RJVkUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGlucHV0LnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICBpZiAodGhpcy5fZWxlbWVudC50YWdOYW1lID09PSAnTEFCRUwnICYmIGlucHV0LmNoZWNrZWQgPT09IHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENsYXNzTmFtZS5BQ1RJVkUpKSB7XG4gICAgICAgICAgICB0cmlnZ2VyQ2hhbmdlRXZlbnQgPSBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBpZiBpdCdzIG5vdCBhIHJhZGlvIGJ1dHRvbiBvciBjaGVja2JveCBkb24ndCBhZGQgYSBwb2ludGxlc3MvaW52YWxpZCBjaGVja2VkIHByb3BlcnR5IHRvIHRoZSBpbnB1dFxuICAgICAgICAgIHRyaWdnZXJDaGFuZ2VFdmVudCA9IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHJpZ2dlckNoYW5nZUV2ZW50KSB7XG4gICAgICAgICAgaW5wdXQuY2hlY2tlZCA9ICF0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDbGFzc05hbWUuQUNUSVZFKVxuICAgICAgICAgICQoaW5wdXQpLnRyaWdnZXIoJ2NoYW5nZScpXG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dC5mb2N1cygpXG4gICAgICAgIGFkZEFyaWFQcmVzc2VkID0gZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoISh0aGlzLl9lbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSB8fCB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSkpIHtcbiAgICAgIGlmIChhZGRBcmlhUHJlc3NlZCkge1xuICAgICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1wcmVzc2VkJyxcbiAgICAgICAgICAhdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ2xhc3NOYW1lLkFDVElWRSkpXG4gICAgICB9XG5cbiAgICAgIGlmICh0cmlnZ2VyQ2hhbmdlRXZlbnQpIHtcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS50b2dnbGVDbGFzcyhDbGFzc05hbWUuQUNUSVZFKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKVxuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBCdXR0b24odGhpcylcbiAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnID09PSAndG9nZ2xlJykge1xuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kKGRvY3VtZW50KVxuICAub24oRXZlbnQuQ0xJQ0tfREFUQV9BUEksIFNlbGVjdG9yLkRBVEFfVE9HR0xFX0NBUlJPVCwgKGV2ZW50KSA9PiB7XG4gICAgbGV0IGJ1dHRvbiA9IGV2ZW50LnRhcmdldFxuXG4gICAgaWYgKCEkKGJ1dHRvbikuaGFzQ2xhc3MoQ2xhc3NOYW1lLkJVVFRPTikpIHtcbiAgICAgIGJ1dHRvbiA9ICQoYnV0dG9uKS5jbG9zZXN0KFNlbGVjdG9yLkJVVFRPTilbMF1cbiAgICB9XG5cbiAgICBpZiAoIWJ1dHRvbiB8fCBidXR0b24uaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpIHx8IGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgLy8gd29yayBhcm91bmQgRmlyZWZveCBidWcgIzE1NDA5OTVcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5wdXRCdG4gPSBidXR0b24ucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5JTlBVVClcblxuICAgICAgaWYgKGlucHV0QnRuICYmIChpbnB1dEJ0bi5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgfHwgaW5wdXRCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpIC8vIHdvcmsgYXJvdW5kIEZpcmVmb3ggYnVnICMxNTQwOTk1XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBCdXR0b24uX2pRdWVyeUludGVyZmFjZS5jYWxsKCQoYnV0dG9uKSwgJ3RvZ2dsZScpXG4gICAgfVxuICB9KVxuICAub24oRXZlbnQuRk9DVVNfQkxVUl9EQVRBX0FQSSwgU2VsZWN0b3IuREFUQV9UT0dHTEVfQ0FSUk9ULCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSAkKGV2ZW50LnRhcmdldCkuY2xvc2VzdChTZWxlY3Rvci5CVVRUT04pWzBdXG4gICAgJChidXR0b24pLnRvZ2dsZUNsYXNzKENsYXNzTmFtZS5GT0NVUywgL15mb2N1cyhpbik/JC8udGVzdChldmVudC50eXBlKSlcbiAgfSlcblxuJCh3aW5kb3cpLm9uKEV2ZW50LkxPQURfREFUQV9BUEksICgpID0+IHtcbiAgLy8gZW5zdXJlIGNvcnJlY3QgYWN0aXZlIGNsYXNzIGlzIHNldCB0byBtYXRjaCB0aGUgY29udHJvbHMnIGFjdHVhbCB2YWx1ZXMvc3RhdGVzXG5cbiAgLy8gZmluZCBhbGwgY2hlY2tib3hlcy9yZWFkaW8gYnV0dG9ucyBpbnNpZGUgZGF0YS10b2dnbGUgZ3JvdXBzXG4gIGxldCBidXR0b25zID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLkRBVEFfVE9HR0xFU19CVVRUT05TKSlcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGJ1dHRvbnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCBidXR0b24gPSBidXR0b25zW2ldXG4gICAgY29uc3QgaW5wdXQgPSBidXR0b24ucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5JTlBVVClcbiAgICBpZiAoaW5wdXQuY2hlY2tlZCB8fCBpbnB1dC5oYXNBdHRyaWJ1dGUoJ2NoZWNrZWQnKSkge1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoQ2xhc3NOYW1lLkFDVElWRSlcbiAgICB9IGVsc2Uge1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoQ2xhc3NOYW1lLkFDVElWRSlcbiAgICB9XG4gIH1cblxuICAvLyBmaW5kIGFsbCBidXR0b24gdG9nZ2xlc1xuICBidXR0b25zID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLkRBVEFfVE9HR0xFKSlcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGJ1dHRvbnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCBidXR0b24gPSBidXR0b25zW2ldXG4gICAgaWYgKGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcpID09PSAndHJ1ZScpIHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKENsYXNzTmFtZS5BQ1RJVkUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKENsYXNzTmFtZS5BQ1RJVkUpXG4gICAgfVxuICB9XG59KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kLmZuW05BTUVdID0gQnV0dG9uLl9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBCdXR0b25cbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gQnV0dG9uLl9qUXVlcnlJbnRlcmZhY2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjQuMSk6IGNhcm91c2VsLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgICAgICAgICAgICAgICAgICAgPSAnY2Fyb3VzZWwnXG5jb25zdCBWRVJTSU9OICAgICAgICAgICAgICAgID0gJzQuNC4xJ1xuY29uc3QgREFUQV9LRVkgICAgICAgICAgICAgICA9ICdicy5jYXJvdXNlbCdcbmNvbnN0IEVWRU5UX0tFWSAgICAgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZICAgICAgICAgICA9ICcuZGF0YS1hcGknXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgICAgID0gJC5mbltOQU1FXVxuY29uc3QgQVJST1dfTEVGVF9LRVlDT0RFICAgICA9IDM3IC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIGxlZnQgYXJyb3cga2V5XG5jb25zdCBBUlJPV19SSUdIVF9LRVlDT0RFICAgID0gMzkgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgcmlnaHQgYXJyb3cga2V5XG5jb25zdCBUT1VDSEVWRU5UX0NPTVBBVF9XQUlUID0gNTAwIC8vIFRpbWUgZm9yIG1vdXNlIGNvbXBhdCBldmVudHMgdG8gZmlyZSBhZnRlciB0b3VjaFxuY29uc3QgU1dJUEVfVEhSRVNIT0xEICAgICAgICA9IDQwXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGludGVydmFsIDogNTAwMCxcbiAga2V5Ym9hcmQgOiB0cnVlLFxuICBzbGlkZSAgICA6IGZhbHNlLFxuICBwYXVzZSAgICA6ICdob3ZlcicsXG4gIHdyYXAgICAgIDogdHJ1ZSxcbiAgdG91Y2ggICAgOiB0cnVlXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBpbnRlcnZhbCA6ICcobnVtYmVyfGJvb2xlYW4pJyxcbiAga2V5Ym9hcmQgOiAnYm9vbGVhbicsXG4gIHNsaWRlICAgIDogJyhib29sZWFufHN0cmluZyknLFxuICBwYXVzZSAgICA6ICcoc3RyaW5nfGJvb2xlYW4pJyxcbiAgd3JhcCAgICAgOiAnYm9vbGVhbicsXG4gIHRvdWNoICAgIDogJ2Jvb2xlYW4nXG59XG5cbmNvbnN0IERpcmVjdGlvbiA9IHtcbiAgTkVYVCAgICAgOiAnbmV4dCcsXG4gIFBSRVYgICAgIDogJ3ByZXYnLFxuICBMRUZUICAgICA6ICdsZWZ0JyxcbiAgUklHSFQgICAgOiAncmlnaHQnXG59XG5cbmNvbnN0IEV2ZW50ID0ge1xuICBTTElERSAgICAgICAgICA6IGBzbGlkZSR7RVZFTlRfS0VZfWAsXG4gIFNMSUQgICAgICAgICAgIDogYHNsaWQke0VWRU5UX0tFWX1gLFxuICBLRVlET1dOICAgICAgICA6IGBrZXlkb3duJHtFVkVOVF9LRVl9YCxcbiAgTU9VU0VFTlRFUiAgICAgOiBgbW91c2VlbnRlciR7RVZFTlRfS0VZfWAsXG4gIE1PVVNFTEVBVkUgICAgIDogYG1vdXNlbGVhdmUke0VWRU5UX0tFWX1gLFxuICBUT1VDSFNUQVJUICAgICA6IGB0b3VjaHN0YXJ0JHtFVkVOVF9LRVl9YCxcbiAgVE9VQ0hNT1ZFICAgICAgOiBgdG91Y2htb3ZlJHtFVkVOVF9LRVl9YCxcbiAgVE9VQ0hFTkQgICAgICAgOiBgdG91Y2hlbmQke0VWRU5UX0tFWX1gLFxuICBQT0lOVEVSRE9XTiAgICA6IGBwb2ludGVyZG93biR7RVZFTlRfS0VZfWAsXG4gIFBPSU5URVJVUCAgICAgIDogYHBvaW50ZXJ1cCR7RVZFTlRfS0VZfWAsXG4gIERSQUdfU1RBUlQgICAgIDogYGRyYWdzdGFydCR7RVZFTlRfS0VZfWAsXG4gIExPQURfREFUQV9BUEkgIDogYGxvYWQke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gLFxuICBDTElDS19EQVRBX0FQSSA6IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbn1cblxuY29uc3QgQ2xhc3NOYW1lID0ge1xuICBDQVJPVVNFTCAgICAgIDogJ2Nhcm91c2VsJyxcbiAgQUNUSVZFICAgICAgICA6ICdhY3RpdmUnLFxuICBTTElERSAgICAgICAgIDogJ3NsaWRlJyxcbiAgUklHSFQgICAgICAgICA6ICdjYXJvdXNlbC1pdGVtLXJpZ2h0JyxcbiAgTEVGVCAgICAgICAgICA6ICdjYXJvdXNlbC1pdGVtLWxlZnQnLFxuICBORVhUICAgICAgICAgIDogJ2Nhcm91c2VsLWl0ZW0tbmV4dCcsXG4gIFBSRVYgICAgICAgICAgOiAnY2Fyb3VzZWwtaXRlbS1wcmV2JyxcbiAgSVRFTSAgICAgICAgICA6ICdjYXJvdXNlbC1pdGVtJyxcbiAgUE9JTlRFUl9FVkVOVCA6ICdwb2ludGVyLWV2ZW50J1xufVxuXG5jb25zdCBTZWxlY3RvciA9IHtcbiAgQUNUSVZFICAgICAgOiAnLmFjdGl2ZScsXG4gIEFDVElWRV9JVEVNIDogJy5hY3RpdmUuY2Fyb3VzZWwtaXRlbScsXG4gIElURU0gICAgICAgIDogJy5jYXJvdXNlbC1pdGVtJyxcbiAgSVRFTV9JTUcgICAgOiAnLmNhcm91c2VsLWl0ZW0gaW1nJyxcbiAgTkVYVF9QUkVWICAgOiAnLmNhcm91c2VsLWl0ZW0tbmV4dCwgLmNhcm91c2VsLWl0ZW0tcHJldicsXG4gIElORElDQVRPUlMgIDogJy5jYXJvdXNlbC1pbmRpY2F0b3JzJyxcbiAgREFUQV9TTElERSAgOiAnW2RhdGEtc2xpZGVdLCBbZGF0YS1zbGlkZS10b10nLFxuICBEQVRBX1JJREUgICA6ICdbZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIl0nXG59XG5cbmNvbnN0IFBvaW50ZXJUeXBlID0ge1xuICBUT1VDSCA6ICd0b3VjaCcsXG4gIFBFTiAgIDogJ3Blbidcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5jbGFzcyBDYXJvdXNlbCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHRoaXMuX2l0ZW1zICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5faW50ZXJ2YWwgICAgICA9IG51bGxcbiAgICB0aGlzLl9hY3RpdmVFbGVtZW50ID0gbnVsbFxuICAgIHRoaXMuX2lzUGF1c2VkICAgICAgPSBmYWxzZVxuICAgIHRoaXMuX2lzU2xpZGluZyAgICAgPSBmYWxzZVxuICAgIHRoaXMudG91Y2hUaW1lb3V0ICAgPSBudWxsXG4gICAgdGhpcy50b3VjaFN0YXJ0WCAgICA9IDBcbiAgICB0aGlzLnRvdWNoRGVsdGFYICAgID0gMFxuXG4gICAgdGhpcy5fY29uZmlnICAgICAgICAgICAgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX2VsZW1lbnQgICAgICAgICAgID0gZWxlbWVudFxuICAgIHRoaXMuX2luZGljYXRvcnNFbGVtZW50ID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLklORElDQVRPUlMpXG4gICAgdGhpcy5fdG91Y2hTdXBwb3J0ZWQgICAgPSAnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMFxuICAgIHRoaXMuX3BvaW50ZXJFdmVudCAgICAgID0gQm9vbGVhbih3aW5kb3cuUG9pbnRlckV2ZW50IHx8IHdpbmRvdy5NU1BvaW50ZXJFdmVudClcblxuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgbmV4dCgpIHtcbiAgICBpZiAoIXRoaXMuX2lzU2xpZGluZykge1xuICAgICAgdGhpcy5fc2xpZGUoRGlyZWN0aW9uLk5FWFQpXG4gICAgfVxuICB9XG5cbiAgbmV4dFdoZW5WaXNpYmxlKCkge1xuICAgIC8vIERvbid0IGNhbGwgbmV4dCB3aGVuIHRoZSBwYWdlIGlzbid0IHZpc2libGVcbiAgICAvLyBvciB0aGUgY2Fyb3VzZWwgb3IgaXRzIHBhcmVudCBpc24ndCB2aXNpYmxlXG4gICAgaWYgKCFkb2N1bWVudC5oaWRkZW4gJiZcbiAgICAgICgkKHRoaXMuX2VsZW1lbnQpLmlzKCc6dmlzaWJsZScpICYmICQodGhpcy5fZWxlbWVudCkuY3NzKCd2aXNpYmlsaXR5JykgIT09ICdoaWRkZW4nKSkge1xuICAgICAgdGhpcy5uZXh0KClcbiAgICB9XG4gIH1cblxuICBwcmV2KCkge1xuICAgIGlmICghdGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICB0aGlzLl9zbGlkZShEaXJlY3Rpb24uUFJFVilcbiAgICB9XG4gIH1cblxuICBwYXVzZShldmVudCkge1xuICAgIGlmICghZXZlbnQpIHtcbiAgICAgIHRoaXMuX2lzUGF1c2VkID0gdHJ1ZVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuTkVYVF9QUkVWKSkge1xuICAgICAgVXRpbC50cmlnZ2VyVHJhbnNpdGlvbkVuZCh0aGlzLl9lbGVtZW50KVxuICAgICAgdGhpcy5jeWNsZSh0cnVlKVxuICAgIH1cblxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpXG4gICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsXG4gIH1cblxuICBjeWNsZShldmVudCkge1xuICAgIGlmICghZXZlbnQpIHtcbiAgICAgIHRoaXMuX2lzUGF1c2VkID0gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW50ZXJ2YWwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpXG4gICAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGxcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmludGVydmFsICYmICF0aGlzLl9pc1BhdXNlZCkge1xuICAgICAgdGhpcy5faW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChcbiAgICAgICAgKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA/IHRoaXMubmV4dFdoZW5WaXNpYmxlIDogdGhpcy5uZXh0KS5iaW5kKHRoaXMpLFxuICAgICAgICB0aGlzLl9jb25maWcuaW50ZXJ2YWxcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICB0byhpbmRleCkge1xuICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuQUNUSVZFX0lURU0pXG5cbiAgICBjb25zdCBhY3RpdmVJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleCh0aGlzLl9hY3RpdmVFbGVtZW50KVxuXG4gICAgaWYgKGluZGV4ID4gdGhpcy5faXRlbXMubGVuZ3RoIC0gMSB8fCBpbmRleCA8IDApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgICQodGhpcy5fZWxlbWVudCkub25lKEV2ZW50LlNMSUQsICgpID0+IHRoaXMudG8oaW5kZXgpKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGFjdGl2ZUluZGV4ID09PSBpbmRleCkge1xuICAgICAgdGhpcy5wYXVzZSgpXG4gICAgICB0aGlzLmN5Y2xlKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IGluZGV4ID4gYWN0aXZlSW5kZXhcbiAgICAgID8gRGlyZWN0aW9uLk5FWFRcbiAgICAgIDogRGlyZWN0aW9uLlBSRVZcblxuICAgIHRoaXMuX3NsaWRlKGRpcmVjdGlvbiwgdGhpcy5faXRlbXNbaW5kZXhdKVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICAkKHRoaXMuX2VsZW1lbnQpLm9mZihFVkVOVF9LRVkpXG4gICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKVxuXG4gICAgdGhpcy5faXRlbXMgICAgICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5fY29uZmlnICAgICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5fZWxlbWVudCAgICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5faW50ZXJ2YWwgICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5faXNQYXVzZWQgICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5faXNTbGlkaW5nICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5fYWN0aXZlRWxlbWVudCAgICAgPSBudWxsXG4gICAgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQgPSBudWxsXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uY29uZmlnXG4gICAgfVxuICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgRGVmYXVsdFR5cGUpXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2hhbmRsZVN3aXBlKCkge1xuICAgIGNvbnN0IGFic0RlbHRheCA9IE1hdGguYWJzKHRoaXMudG91Y2hEZWx0YVgpXG5cbiAgICBpZiAoYWJzRGVsdGF4IDw9IFNXSVBFX1RIUkVTSE9MRCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZGlyZWN0aW9uID0gYWJzRGVsdGF4IC8gdGhpcy50b3VjaERlbHRhWFxuXG4gICAgdGhpcy50b3VjaERlbHRhWCA9IDBcblxuICAgIC8vIHN3aXBlIGxlZnRcbiAgICBpZiAoZGlyZWN0aW9uID4gMCkge1xuICAgICAgdGhpcy5wcmV2KClcbiAgICB9XG5cbiAgICAvLyBzd2lwZSByaWdodFxuICAgIGlmIChkaXJlY3Rpb24gPCAwKSB7XG4gICAgICB0aGlzLm5leHQoKVxuICAgIH1cbiAgfVxuXG4gIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICBpZiAodGhpcy5fY29uZmlnLmtleWJvYXJkKSB7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAgIC5vbihFdmVudC5LRVlET1dOLCAoZXZlbnQpID0+IHRoaXMuX2tleWRvd24oZXZlbnQpKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcucGF1c2UgPT09ICdob3ZlcicpIHtcbiAgICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgICAgLm9uKEV2ZW50Lk1PVVNFRU5URVIsIChldmVudCkgPT4gdGhpcy5wYXVzZShldmVudCkpXG4gICAgICAgIC5vbihFdmVudC5NT1VTRUxFQVZFLCAoZXZlbnQpID0+IHRoaXMuY3ljbGUoZXZlbnQpKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcudG91Y2gpIHtcbiAgICAgIHRoaXMuX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMoKVxuICAgIH1cbiAgfVxuXG4gIF9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGlmICghdGhpcy5fdG91Y2hTdXBwb3J0ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0ID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5fcG9pbnRlckV2ZW50ICYmIFBvaW50ZXJUeXBlW2V2ZW50Lm9yaWdpbmFsRXZlbnQucG9pbnRlclR5cGUudG9VcHBlckNhc2UoKV0pIHtcbiAgICAgICAgdGhpcy50b3VjaFN0YXJ0WCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQuY2xpZW50WFxuICAgICAgfSBlbHNlIGlmICghdGhpcy5fcG9pbnRlckV2ZW50KSB7XG4gICAgICAgIHRoaXMudG91Y2hTdGFydFggPSBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WFxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG1vdmUgPSAoZXZlbnQpID0+IHtcbiAgICAgIC8vIGVuc3VyZSBzd2lwaW5nIHdpdGggb25lIHRvdWNoIGFuZCBub3QgcGluY2hpbmdcbiAgICAgIGlmIChldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMgJiYgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdGhpcy50b3VjaERlbHRhWCA9IDBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudG91Y2hEZWx0YVggPSBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCAtIHRoaXMudG91Y2hTdGFydFhcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBlbmQgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLl9wb2ludGVyRXZlbnQgJiYgUG9pbnRlclR5cGVbZXZlbnQub3JpZ2luYWxFdmVudC5wb2ludGVyVHlwZS50b1VwcGVyQ2FzZSgpXSkge1xuICAgICAgICB0aGlzLnRvdWNoRGVsdGFYID0gZXZlbnQub3JpZ2luYWxFdmVudC5jbGllbnRYIC0gdGhpcy50b3VjaFN0YXJ0WFxuICAgICAgfVxuXG4gICAgICB0aGlzLl9oYW5kbGVTd2lwZSgpXG4gICAgICBpZiAodGhpcy5fY29uZmlnLnBhdXNlID09PSAnaG92ZXInKSB7XG4gICAgICAgIC8vIElmIGl0J3MgYSB0b3VjaC1lbmFibGVkIGRldmljZSwgbW91c2VlbnRlci9sZWF2ZSBhcmUgZmlyZWQgYXNcbiAgICAgICAgLy8gcGFydCBvZiB0aGUgbW91c2UgY29tcGF0aWJpbGl0eSBldmVudHMgb24gZmlyc3QgdGFwIC0gdGhlIGNhcm91c2VsXG4gICAgICAgIC8vIHdvdWxkIHN0b3AgY3ljbGluZyB1bnRpbCB1c2VyIHRhcHBlZCBvdXQgb2YgaXQ7XG4gICAgICAgIC8vIGhlcmUsIHdlIGxpc3RlbiBmb3IgdG91Y2hlbmQsIGV4cGxpY2l0bHkgcGF1c2UgdGhlIGNhcm91c2VsXG4gICAgICAgIC8vIChhcyBpZiBpdCdzIHRoZSBzZWNvbmQgdGltZSB3ZSB0YXAgb24gaXQsIG1vdXNlZW50ZXIgY29tcGF0IGV2ZW50XG4gICAgICAgIC8vIGlzIE5PVCBmaXJlZCkgYW5kIGFmdGVyIGEgdGltZW91dCAodG8gYWxsb3cgZm9yIG1vdXNlIGNvbXBhdGliaWxpdHlcbiAgICAgICAgLy8gZXZlbnRzIHRvIGZpcmUpIHdlIGV4cGxpY2l0bHkgcmVzdGFydCBjeWNsaW5nXG5cbiAgICAgICAgdGhpcy5wYXVzZSgpXG4gICAgICAgIGlmICh0aGlzLnRvdWNoVGltZW91dCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRvdWNoVGltZW91dClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRvdWNoVGltZW91dCA9IHNldFRpbWVvdXQoKGV2ZW50KSA9PiB0aGlzLmN5Y2xlKGV2ZW50KSwgVE9VQ0hFVkVOVF9DT01QQVRfV0FJVCArIHRoaXMuX2NvbmZpZy5pbnRlcnZhbClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAkKHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5JVEVNX0lNRykpLm9uKEV2ZW50LkRSQUdfU1RBUlQsIChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCkpXG4gICAgaWYgKHRoaXMuX3BvaW50ZXJFdmVudCkge1xuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbihFdmVudC5QT0lOVEVSRE9XTiwgKGV2ZW50KSA9PiBzdGFydChldmVudCkpXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEV2ZW50LlBPSU5URVJVUCwgKGV2ZW50KSA9PiBlbmQoZXZlbnQpKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ2xhc3NOYW1lLlBPSU5URVJfRVZFTlQpXG4gICAgfSBlbHNlIHtcbiAgICAgICQodGhpcy5fZWxlbWVudCkub24oRXZlbnQuVE9VQ0hTVEFSVCwgKGV2ZW50KSA9PiBzdGFydChldmVudCkpXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEV2ZW50LlRPVUNITU9WRSwgKGV2ZW50KSA9PiBtb3ZlKGV2ZW50KSlcbiAgICAgICQodGhpcy5fZWxlbWVudCkub24oRXZlbnQuVE9VQ0hFTkQsIChldmVudCkgPT4gZW5kKGV2ZW50KSlcbiAgICB9XG4gIH1cblxuICBfa2V5ZG93bihldmVudCkge1xuICAgIGlmICgvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgc3dpdGNoIChldmVudC53aGljaCkge1xuICAgICAgY2FzZSBBUlJPV19MRUZUX0tFWUNPREU6XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgdGhpcy5wcmV2KClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgQVJST1dfUklHSFRfS0VZQ09ERTpcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICB0aGlzLm5leHQoKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gIH1cblxuICBfZ2V0SXRlbUluZGV4KGVsZW1lbnQpIHtcbiAgICB0aGlzLl9pdGVtcyA9IGVsZW1lbnQgJiYgZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICA/IFtdLnNsaWNlLmNhbGwoZWxlbWVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuSVRFTSkpXG4gICAgICA6IFtdXG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zLmluZGV4T2YoZWxlbWVudClcbiAgfVxuXG4gIF9nZXRJdGVtQnlEaXJlY3Rpb24oZGlyZWN0aW9uLCBhY3RpdmVFbGVtZW50KSB7XG4gICAgY29uc3QgaXNOZXh0RGlyZWN0aW9uID0gZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uTkVYVFxuICAgIGNvbnN0IGlzUHJldkRpcmVjdGlvbiA9IGRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLlBSRVZcbiAgICBjb25zdCBhY3RpdmVJbmRleCAgICAgPSB0aGlzLl9nZXRJdGVtSW5kZXgoYWN0aXZlRWxlbWVudClcbiAgICBjb25zdCBsYXN0SXRlbUluZGV4ICAgPSB0aGlzLl9pdGVtcy5sZW5ndGggLSAxXG4gICAgY29uc3QgaXNHb2luZ1RvV3JhcCAgID0gaXNQcmV2RGlyZWN0aW9uICYmIGFjdGl2ZUluZGV4ID09PSAwIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNOZXh0RGlyZWN0aW9uICYmIGFjdGl2ZUluZGV4ID09PSBsYXN0SXRlbUluZGV4XG5cbiAgICBpZiAoaXNHb2luZ1RvV3JhcCAmJiAhdGhpcy5fY29uZmlnLndyYXApIHtcbiAgICAgIHJldHVybiBhY3RpdmVFbGVtZW50XG4gICAgfVxuXG4gICAgY29uc3QgZGVsdGEgICAgID0gZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uUFJFViA/IC0xIDogMVxuICAgIGNvbnN0IGl0ZW1JbmRleCA9IChhY3RpdmVJbmRleCArIGRlbHRhKSAlIHRoaXMuX2l0ZW1zLmxlbmd0aFxuXG4gICAgcmV0dXJuIGl0ZW1JbmRleCA9PT0gLTFcbiAgICAgID8gdGhpcy5faXRlbXNbdGhpcy5faXRlbXMubGVuZ3RoIC0gMV0gOiB0aGlzLl9pdGVtc1tpdGVtSW5kZXhdXG4gIH1cblxuICBfdHJpZ2dlclNsaWRlRXZlbnQocmVsYXRlZFRhcmdldCwgZXZlbnREaXJlY3Rpb25OYW1lKSB7XG4gICAgY29uc3QgdGFyZ2V0SW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgocmVsYXRlZFRhcmdldClcbiAgICBjb25zdCBmcm9tSW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgodGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLkFDVElWRV9JVEVNKSlcbiAgICBjb25zdCBzbGlkZUV2ZW50ID0gJC5FdmVudChFdmVudC5TTElERSwge1xuICAgICAgcmVsYXRlZFRhcmdldCxcbiAgICAgIGRpcmVjdGlvbjogZXZlbnREaXJlY3Rpb25OYW1lLFxuICAgICAgZnJvbTogZnJvbUluZGV4LFxuICAgICAgdG86IHRhcmdldEluZGV4XG4gICAgfSlcblxuICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzbGlkZUV2ZW50KVxuXG4gICAgcmV0dXJuIHNsaWRlRXZlbnRcbiAgfVxuXG4gIF9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBpZiAodGhpcy5faW5kaWNhdG9yc0VsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGluZGljYXRvcnMgPSBbXS5zbGljZS5jYWxsKHRoaXMuX2luZGljYXRvcnNFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuQUNUSVZFKSlcbiAgICAgICQoaW5kaWNhdG9ycylcbiAgICAgICAgLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5BQ1RJVkUpXG5cbiAgICAgIGNvbnN0IG5leHRJbmRpY2F0b3IgPSB0aGlzLl9pbmRpY2F0b3JzRWxlbWVudC5jaGlsZHJlbltcbiAgICAgICAgdGhpcy5fZ2V0SXRlbUluZGV4KGVsZW1lbnQpXG4gICAgICBdXG5cbiAgICAgIGlmIChuZXh0SW5kaWNhdG9yKSB7XG4gICAgICAgICQobmV4dEluZGljYXRvcikuYWRkQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfc2xpZGUoZGlyZWN0aW9uLCBlbGVtZW50KSB7XG4gICAgY29uc3QgYWN0aXZlRWxlbWVudCA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5BQ1RJVkVfSVRFTSlcbiAgICBjb25zdCBhY3RpdmVFbGVtZW50SW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgoYWN0aXZlRWxlbWVudClcbiAgICBjb25zdCBuZXh0RWxlbWVudCAgID0gZWxlbWVudCB8fCBhY3RpdmVFbGVtZW50ICYmXG4gICAgICB0aGlzLl9nZXRJdGVtQnlEaXJlY3Rpb24oZGlyZWN0aW9uLCBhY3RpdmVFbGVtZW50KVxuICAgIGNvbnN0IG5leHRFbGVtZW50SW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgobmV4dEVsZW1lbnQpXG4gICAgY29uc3QgaXNDeWNsaW5nID0gQm9vbGVhbih0aGlzLl9pbnRlcnZhbClcblxuICAgIGxldCBkaXJlY3Rpb25hbENsYXNzTmFtZVxuICAgIGxldCBvcmRlckNsYXNzTmFtZVxuICAgIGxldCBldmVudERpcmVjdGlvbk5hbWVcblxuICAgIGlmIChkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5ORVhUKSB7XG4gICAgICBkaXJlY3Rpb25hbENsYXNzTmFtZSA9IENsYXNzTmFtZS5MRUZUXG4gICAgICBvcmRlckNsYXNzTmFtZSA9IENsYXNzTmFtZS5ORVhUXG4gICAgICBldmVudERpcmVjdGlvbk5hbWUgPSBEaXJlY3Rpb24uTEVGVFxuICAgIH0gZWxzZSB7XG4gICAgICBkaXJlY3Rpb25hbENsYXNzTmFtZSA9IENsYXNzTmFtZS5SSUdIVFxuICAgICAgb3JkZXJDbGFzc05hbWUgPSBDbGFzc05hbWUuUFJFVlxuICAgICAgZXZlbnREaXJlY3Rpb25OYW1lID0gRGlyZWN0aW9uLlJJR0hUXG4gICAgfVxuXG4gICAgaWYgKG5leHRFbGVtZW50ICYmICQobmV4dEVsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5BQ1RJVkUpKSB7XG4gICAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc2xpZGVFdmVudCA9IHRoaXMuX3RyaWdnZXJTbGlkZUV2ZW50KG5leHRFbGVtZW50LCBldmVudERpcmVjdGlvbk5hbWUpXG4gICAgaWYgKHNsaWRlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghYWN0aXZlRWxlbWVudCB8fCAhbmV4dEVsZW1lbnQpIHtcbiAgICAgIC8vIFNvbWUgd2VpcmRuZXNzIGlzIGhhcHBlbmluZywgc28gd2UgYmFpbFxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5faXNTbGlkaW5nID0gdHJ1ZVxuXG4gICAgaWYgKGlzQ3ljbGluZykge1xuICAgICAgdGhpcy5wYXVzZSgpXG4gICAgfVxuXG4gICAgdGhpcy5fc2V0QWN0aXZlSW5kaWNhdG9yRWxlbWVudChuZXh0RWxlbWVudClcblxuICAgIGNvbnN0IHNsaWRFdmVudCA9ICQuRXZlbnQoRXZlbnQuU0xJRCwge1xuICAgICAgcmVsYXRlZFRhcmdldDogbmV4dEVsZW1lbnQsXG4gICAgICBkaXJlY3Rpb246IGV2ZW50RGlyZWN0aW9uTmFtZSxcbiAgICAgIGZyb206IGFjdGl2ZUVsZW1lbnRJbmRleCxcbiAgICAgIHRvOiBuZXh0RWxlbWVudEluZGV4XG4gICAgfSlcblxuICAgIGlmICgkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5TTElERSkpIHtcbiAgICAgICQobmV4dEVsZW1lbnQpLmFkZENsYXNzKG9yZGVyQ2xhc3NOYW1lKVxuXG4gICAgICBVdGlsLnJlZmxvdyhuZXh0RWxlbWVudClcblxuICAgICAgJChhY3RpdmVFbGVtZW50KS5hZGRDbGFzcyhkaXJlY3Rpb25hbENsYXNzTmFtZSlcbiAgICAgICQobmV4dEVsZW1lbnQpLmFkZENsYXNzKGRpcmVjdGlvbmFsQ2xhc3NOYW1lKVxuXG4gICAgICBjb25zdCBuZXh0RWxlbWVudEludGVydmFsID0gcGFyc2VJbnQobmV4dEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWludGVydmFsJyksIDEwKVxuICAgICAgaWYgKG5leHRFbGVtZW50SW50ZXJ2YWwpIHtcbiAgICAgICAgdGhpcy5fY29uZmlnLmRlZmF1bHRJbnRlcnZhbCA9IHRoaXMuX2NvbmZpZy5kZWZhdWx0SW50ZXJ2YWwgfHwgdGhpcy5fY29uZmlnLmludGVydmFsXG4gICAgICAgIHRoaXMuX2NvbmZpZy5pbnRlcnZhbCA9IG5leHRFbGVtZW50SW50ZXJ2YWxcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZy5pbnRlcnZhbCA9IHRoaXMuX2NvbmZpZy5kZWZhdWx0SW50ZXJ2YWwgfHwgdGhpcy5fY29uZmlnLmludGVydmFsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQoYWN0aXZlRWxlbWVudClcblxuICAgICAgJChhY3RpdmVFbGVtZW50KVxuICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsICgpID0+IHtcbiAgICAgICAgICAkKG5leHRFbGVtZW50KVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKGAke2RpcmVjdGlvbmFsQ2xhc3NOYW1lfSAke29yZGVyQ2xhc3NOYW1lfWApXG4gICAgICAgICAgICAuYWRkQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcblxuICAgICAgICAgICQoYWN0aXZlRWxlbWVudCkucmVtb3ZlQ2xhc3MoYCR7Q2xhc3NOYW1lLkFDVElWRX0gJHtvcmRlckNsYXNzTmFtZX0gJHtkaXJlY3Rpb25hbENsYXNzTmFtZX1gKVxuXG4gICAgICAgICAgdGhpcy5faXNTbGlkaW5nID0gZmFsc2VcblxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHNsaWRFdmVudCksIDApXG4gICAgICAgIH0pXG4gICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgICQoYWN0aXZlRWxlbWVudCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcbiAgICAgICQobmV4dEVsZW1lbnQpLmFkZENsYXNzKENsYXNzTmFtZS5BQ1RJVkUpXG5cbiAgICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc2xpZEV2ZW50KVxuICAgIH1cblxuICAgIGlmIChpc0N5Y2xpbmcpIHtcbiAgICAgIHRoaXMuY3ljbGUoKVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpXG4gICAgICBsZXQgX2NvbmZpZyA9IHtcbiAgICAgICAgLi4uRGVmYXVsdCxcbiAgICAgICAgLi4uJCh0aGlzKS5kYXRhKClcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIF9jb25maWcgPSB7XG4gICAgICAgICAgLi4uX2NvbmZpZyxcbiAgICAgICAgICAuLi5jb25maWdcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBhY3Rpb24gPSB0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyA/IGNvbmZpZyA6IF9jb25maWcuc2xpZGVcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgQ2Fyb3VzZWwodGhpcywgX2NvbmZpZylcbiAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgZGF0YS50byhjb25maWcpXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVthY3Rpb25dID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7YWN0aW9ufVwiYClcbiAgICAgICAgfVxuICAgICAgICBkYXRhW2FjdGlvbl0oKVxuICAgICAgfSBlbHNlIGlmIChfY29uZmlnLmludGVydmFsICYmIF9jb25maWcucmlkZSkge1xuICAgICAgICBkYXRhLnBhdXNlKClcbiAgICAgICAgZGF0YS5jeWNsZSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBfZGF0YUFwaUNsaWNrSGFuZGxlcihldmVudCkge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KHRoaXMpXG5cbiAgICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB0YXJnZXQgPSAkKHNlbGVjdG9yKVswXVxuXG4gICAgaWYgKCF0YXJnZXQgfHwgISQodGFyZ2V0KS5oYXNDbGFzcyhDbGFzc05hbWUuQ0FST1VTRUwpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAuLi4kKHRhcmdldCkuZGF0YSgpLFxuICAgICAgLi4uJCh0aGlzKS5kYXRhKClcbiAgICB9XG4gICAgY29uc3Qgc2xpZGVJbmRleCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlLXRvJylcblxuICAgIGlmIChzbGlkZUluZGV4KSB7XG4gICAgICBjb25maWcuaW50ZXJ2YWwgPSBmYWxzZVxuICAgIH1cblxuICAgIENhcm91c2VsLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRhcmdldCksIGNvbmZpZylcblxuICAgIGlmIChzbGlkZUluZGV4KSB7XG4gICAgICAkKHRhcmdldCkuZGF0YShEQVRBX0tFWSkudG8oc2xpZGVJbmRleClcbiAgICB9XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kKGRvY3VtZW50KVxuICAub24oRXZlbnQuQ0xJQ0tfREFUQV9BUEksIFNlbGVjdG9yLkRBVEFfU0xJREUsIENhcm91c2VsLl9kYXRhQXBpQ2xpY2tIYW5kbGVyKVxuXG4kKHdpbmRvdykub24oRXZlbnQuTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICBjb25zdCBjYXJvdXNlbHMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuREFUQV9SSURFKSlcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGNhcm91c2Vscy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0ICRjYXJvdXNlbCA9ICQoY2Fyb3VzZWxzW2ldKVxuICAgIENhcm91c2VsLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkY2Fyb3VzZWwsICRjYXJvdXNlbC5kYXRhKCkpXG4gIH1cbn0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQuZm5bTkFNRV0gPSBDYXJvdXNlbC5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gQ2Fyb3VzZWxcbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gQ2Fyb3VzZWwuX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC40LjEpOiBjb2xsYXBzZS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FICAgICAgICAgICAgICAgID0gJ2NvbGxhcHNlJ1xuY29uc3QgVkVSU0lPTiAgICAgICAgICAgICA9ICc0LjQuMSdcbmNvbnN0IERBVEFfS0VZICAgICAgICAgICAgPSAnYnMuY29sbGFwc2UnXG5jb25zdCBFVkVOVF9LRVkgICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSAgICAgICAgPSAnLmRhdGEtYXBpJ1xuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUICA9ICQuZm5bTkFNRV1cblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgdG9nZ2xlIDogdHJ1ZSxcbiAgcGFyZW50IDogJydcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIHRvZ2dsZSA6ICdib29sZWFuJyxcbiAgcGFyZW50IDogJyhzdHJpbmd8ZWxlbWVudCknXG59XG5cbmNvbnN0IEV2ZW50ID0ge1xuICBTSE9XICAgICAgICAgICA6IGBzaG93JHtFVkVOVF9LRVl9YCxcbiAgU0hPV04gICAgICAgICAgOiBgc2hvd24ke0VWRU5UX0tFWX1gLFxuICBISURFICAgICAgICAgICA6IGBoaWRlJHtFVkVOVF9LRVl9YCxcbiAgSElEREVOICAgICAgICAgOiBgaGlkZGVuJHtFVkVOVF9LRVl9YCxcbiAgQ0xJQ0tfREFUQV9BUEkgOiBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG59XG5cbmNvbnN0IENsYXNzTmFtZSA9IHtcbiAgU0hPVyAgICAgICA6ICdzaG93JyxcbiAgQ09MTEFQU0UgICA6ICdjb2xsYXBzZScsXG4gIENPTExBUFNJTkcgOiAnY29sbGFwc2luZycsXG4gIENPTExBUFNFRCAgOiAnY29sbGFwc2VkJ1xufVxuXG5jb25zdCBEaW1lbnNpb24gPSB7XG4gIFdJRFRIICA6ICd3aWR0aCcsXG4gIEhFSUdIVCA6ICdoZWlnaHQnXG59XG5cbmNvbnN0IFNlbGVjdG9yID0ge1xuICBBQ1RJVkVTICAgICA6ICcuc2hvdywgLmNvbGxhcHNpbmcnLFxuICBEQVRBX1RPR0dMRSA6ICdbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXSdcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIENvbGxhcHNlIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICB0aGlzLl9lbGVtZW50ICAgICAgICAgPSBlbGVtZW50XG4gICAgdGhpcy5fY29uZmlnICAgICAgICAgID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl90cmlnZ2VyQXJyYXkgICAgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBgW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl1baHJlZj1cIiMke2VsZW1lbnQuaWR9XCJdLGAgK1xuICAgICAgYFtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdW2RhdGEtdGFyZ2V0PVwiIyR7ZWxlbWVudC5pZH1cIl1gXG4gICAgKSlcblxuICAgIGNvbnN0IHRvZ2dsZUxpc3QgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuREFUQV9UT0dHTEUpKVxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0b2dnbGVMaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb25zdCBlbGVtID0gdG9nZ2xlTGlzdFtpXVxuICAgICAgY29uc3Qgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbSlcbiAgICAgIGNvbnN0IGZpbHRlckVsZW1lbnQgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKVxuICAgICAgICAuZmlsdGVyKChmb3VuZEVsZW0pID0+IGZvdW5kRWxlbSA9PT0gZWxlbWVudClcblxuICAgICAgaWYgKHNlbGVjdG9yICE9PSBudWxsICYmIGZpbHRlckVsZW1lbnQubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLl9zZWxlY3RvciA9IHNlbGVjdG9yXG4gICAgICAgIHRoaXMuX3RyaWdnZXJBcnJheS5wdXNoKGVsZW0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fcGFyZW50ID0gdGhpcy5fY29uZmlnLnBhcmVudCA/IHRoaXMuX2dldFBhcmVudCgpIDogbnVsbFxuXG4gICAgaWYgKCF0aGlzLl9jb25maWcucGFyZW50KSB7XG4gICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3ModGhpcy5fZWxlbWVudCwgdGhpcy5fdHJpZ2dlckFycmF5KVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcudG9nZ2xlKSB7XG4gICAgICB0aGlzLnRvZ2dsZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICByZXR1cm4gVkVSU0lPTlxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICAvLyBQdWJsaWNcblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKCQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpKSB7XG4gICAgICB0aGlzLmhpZGUoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3coKVxuICAgIH1cbiAgfVxuXG4gIHNob3coKSB7XG4gICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZyB8fFxuICAgICAgJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBhY3RpdmVzXG4gICAgbGV0IGFjdGl2ZXNEYXRhXG5cbiAgICBpZiAodGhpcy5fcGFyZW50KSB7XG4gICAgICBhY3RpdmVzID0gW10uc2xpY2UuY2FsbCh0aGlzLl9wYXJlbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5BQ1RJVkVTKSlcbiAgICAgICAgLmZpbHRlcigoZWxlbSkgPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLnBhcmVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1wYXJlbnQnKSA9PT0gdGhpcy5fY29uZmlnLnBhcmVudFxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBlbGVtLmNsYXNzTGlzdC5jb250YWlucyhDbGFzc05hbWUuQ09MTEFQU0UpXG4gICAgICAgIH0pXG5cbiAgICAgIGlmIChhY3RpdmVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBhY3RpdmVzID0gbnVsbFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhY3RpdmVzKSB7XG4gICAgICBhY3RpdmVzRGF0YSA9ICQoYWN0aXZlcykubm90KHRoaXMuX3NlbGVjdG9yKS5kYXRhKERBVEFfS0VZKVxuICAgICAgaWYgKGFjdGl2ZXNEYXRhICYmIGFjdGl2ZXNEYXRhLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRFdmVudCA9ICQuRXZlbnQoRXZlbnQuU0hPVylcbiAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc3RhcnRFdmVudClcbiAgICBpZiAoc3RhcnRFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGFjdGl2ZXMpIHtcbiAgICAgIENvbGxhcHNlLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKGFjdGl2ZXMpLm5vdCh0aGlzLl9zZWxlY3RvciksICdoaWRlJylcbiAgICAgIGlmICghYWN0aXZlc0RhdGEpIHtcbiAgICAgICAgJChhY3RpdmVzKS5kYXRhKERBVEFfS0VZLCBudWxsKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFKVxuICAgICAgLmFkZENsYXNzKENsYXNzTmFtZS5DT0xMQVBTSU5HKVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gMFxuXG4gICAgaWYgKHRoaXMuX3RyaWdnZXJBcnJheS5sZW5ndGgpIHtcbiAgICAgICQodGhpcy5fdHJpZ2dlckFycmF5KVxuICAgICAgICAucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFRClcbiAgICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKVxuICAgIH1cblxuICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyh0cnVlKVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0lORylcbiAgICAgICAgLmFkZENsYXNzKENsYXNzTmFtZS5DT0xMQVBTRSlcbiAgICAgICAgLmFkZENsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAnJ1xuXG4gICAgICB0aGlzLnNldFRyYW5zaXRpb25pbmcoZmFsc2UpXG5cbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihFdmVudC5TSE9XTilcbiAgICB9XG5cbiAgICBjb25zdCBjYXBpdGFsaXplZERpbWVuc2lvbiA9IGRpbWVuc2lvblswXS50b1VwcGVyQ2FzZSgpICsgZGltZW5zaW9uLnNsaWNlKDEpXG4gICAgY29uc3Qgc2Nyb2xsU2l6ZSA9IGBzY3JvbGwke2NhcGl0YWxpemVkRGltZW5zaW9ufWBcbiAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKVxuICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbilcblxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IGAke3RoaXMuX2VsZW1lbnRbc2Nyb2xsU2l6ZV19cHhgXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25pbmcgfHxcbiAgICAgICEkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRFdmVudCA9ICQuRXZlbnQoRXZlbnQuSElERSlcbiAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc3RhcnRFdmVudClcbiAgICBpZiAoc3RhcnRFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZGltZW5zaW9uID0gdGhpcy5fZ2V0RGltZW5zaW9uKClcblxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IGAke3RoaXMuX2VsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClbZGltZW5zaW9uXX1weGBcblxuICAgIFV0aWwucmVmbG93KHRoaXMuX2VsZW1lbnQpXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAuYWRkQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNJTkcpXG4gICAgICAucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFKVxuICAgICAgLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgY29uc3QgdHJpZ2dlckFycmF5TGVuZ3RoID0gdGhpcy5fdHJpZ2dlckFycmF5Lmxlbmd0aFxuICAgIGlmICh0cmlnZ2VyQXJyYXlMZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyaWdnZXJBcnJheUxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRyaWdnZXIgPSB0aGlzLl90cmlnZ2VyQXJyYXlbaV1cbiAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQodHJpZ2dlcilcblxuICAgICAgICBpZiAoc2VsZWN0b3IgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCAkZWxlbSA9ICQoW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSkpXG4gICAgICAgICAgaWYgKCEkZWxlbS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVykpIHtcbiAgICAgICAgICAgICQodHJpZ2dlcikuYWRkQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFRClcbiAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldFRyYW5zaXRpb25pbmcodHJ1ZSlcblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgdGhpcy5zZXRUcmFuc2l0aW9uaW5nKGZhbHNlKVxuICAgICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgICAucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNJTkcpXG4gICAgICAgIC5hZGRDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0UpXG4gICAgICAgIC50cmlnZ2VyKEV2ZW50LkhJRERFTilcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAnJ1xuICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcblxuICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY29tcGxldGUpXG4gICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICB9XG5cbiAgc2V0VHJhbnNpdGlvbmluZyhpc1RyYW5zaXRpb25pbmcpIHtcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBpc1RyYW5zaXRpb25pbmdcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKVxuXG4gICAgdGhpcy5fY29uZmlnICAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX3BhcmVudCAgICAgICAgICA9IG51bGxcbiAgICB0aGlzLl9lbGVtZW50ICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5fdHJpZ2dlckFycmF5ICAgID0gbnVsbFxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IG51bGxcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAuLi5jb25maWdcbiAgICB9XG4gICAgY29uZmlnLnRvZ2dsZSA9IEJvb2xlYW4oY29uZmlnLnRvZ2dsZSkgLy8gQ29lcmNlIHN0cmluZyB2YWx1ZXNcbiAgICBVdGlsLnR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIERlZmF1bHRUeXBlKVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9nZXREaW1lbnNpb24oKSB7XG4gICAgY29uc3QgaGFzV2lkdGggPSAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKERpbWVuc2lvbi5XSURUSClcbiAgICByZXR1cm4gaGFzV2lkdGggPyBEaW1lbnNpb24uV0lEVEggOiBEaW1lbnNpb24uSEVJR0hUXG4gIH1cblxuICBfZ2V0UGFyZW50KCkge1xuICAgIGxldCBwYXJlbnRcblxuICAgIGlmIChVdGlsLmlzRWxlbWVudCh0aGlzLl9jb25maWcucGFyZW50KSkge1xuICAgICAgcGFyZW50ID0gdGhpcy5fY29uZmlnLnBhcmVudFxuXG4gICAgICAvLyBJdCdzIGEgalF1ZXJ5IG9iamVjdFxuICAgICAgaWYgKHR5cGVvZiB0aGlzLl9jb25maWcucGFyZW50LmpxdWVyeSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcGFyZW50ID0gdGhpcy5fY29uZmlnLnBhcmVudFswXVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuX2NvbmZpZy5wYXJlbnQpXG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0b3IgPVxuICAgICAgYFtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdW2RhdGEtcGFyZW50PVwiJHt0aGlzLl9jb25maWcucGFyZW50fVwiXWBcblxuICAgIGNvbnN0IGNoaWxkcmVuID0gW10uc2xpY2UuY2FsbChwYXJlbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpXG4gICAgJChjaGlsZHJlbikuZWFjaCgoaSwgZWxlbWVudCkgPT4ge1xuICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKFxuICAgICAgICBDb2xsYXBzZS5fZ2V0VGFyZ2V0RnJvbUVsZW1lbnQoZWxlbWVudCksXG4gICAgICAgIFtlbGVtZW50XVxuICAgICAgKVxuICAgIH0pXG5cbiAgICByZXR1cm4gcGFyZW50XG4gIH1cblxuICBfYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKGVsZW1lbnQsIHRyaWdnZXJBcnJheSkge1xuICAgIGNvbnN0IGlzT3BlbiA9ICQoZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG5cbiAgICBpZiAodHJpZ2dlckFycmF5Lmxlbmd0aCkge1xuICAgICAgJCh0cmlnZ2VyQXJyYXkpXG4gICAgICAgIC50b2dnbGVDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0VELCAhaXNPcGVuKVxuICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIGlzT3BlbilcbiAgICB9XG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2dldFRhcmdldEZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICBjb25zdCBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtZW50KVxuICAgIHJldHVybiBzZWxlY3RvciA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpIDogbnVsbFxuICB9XG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCAkdGhpcyAgID0gJCh0aGlzKVxuICAgICAgbGV0IGRhdGEgICAgICA9ICR0aGlzLmRhdGEoREFUQV9LRVkpXG4gICAgICBjb25zdCBfY29uZmlnID0ge1xuICAgICAgICAuLi5EZWZhdWx0LFxuICAgICAgICAuLi4kdGhpcy5kYXRhKCksXG4gICAgICAgIC4uLnR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9XG4gICAgICB9XG5cbiAgICAgIGlmICghZGF0YSAmJiBfY29uZmlnLnRvZ2dsZSAmJiAvc2hvd3xoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgICAgX2NvbmZpZy50b2dnbGUgPSBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBDb2xsYXBzZSh0aGlzLCBfY29uZmlnKVxuICAgICAgICAkdGhpcy5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQoZG9jdW1lbnQpLm9uKEV2ZW50LkNMSUNLX0RBVEFfQVBJLCBTZWxlY3Rvci5EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIC8vIHByZXZlbnREZWZhdWx0IG9ubHkgZm9yIDxhPiBlbGVtZW50cyAod2hpY2ggY2hhbmdlIHRoZSBVUkwpIG5vdCBpbnNpZGUgdGhlIGNvbGxhcHNpYmxlIGVsZW1lbnRcbiAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQudGFnTmFtZSA9PT0gJ0EnKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgY29uc3QgJHRyaWdnZXIgPSAkKHRoaXMpXG4gIGNvbnN0IHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KHRoaXMpXG4gIGNvbnN0IHNlbGVjdG9ycyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpXG5cbiAgJChzZWxlY3RvcnMpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0ICR0YXJnZXQgPSAkKHRoaXMpXG4gICAgY29uc3QgZGF0YSAgICA9ICR0YXJnZXQuZGF0YShEQVRBX0tFWSlcbiAgICBjb25zdCBjb25maWcgID0gZGF0YSA/ICd0b2dnbGUnIDogJHRyaWdnZXIuZGF0YSgpXG4gICAgQ29sbGFwc2UuX2pRdWVyeUludGVyZmFjZS5jYWxsKCR0YXJnZXQsIGNvbmZpZylcbiAgfSlcbn0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQuZm5bTkFNRV0gPSBDb2xsYXBzZS5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gQ29sbGFwc2VcbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gQ29sbGFwc2UuX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb2xsYXBzZVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC40LjEpOiBkcm9wZG93bi5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFBvcHBlciBmcm9tICdwb3BwZXIuanMnXG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgICAgICAgICAgICAgICAgICAgICA9ICdkcm9wZG93bidcbmNvbnN0IFZFUlNJT04gICAgICAgICAgICAgICAgICA9ICc0LjQuMSdcbmNvbnN0IERBVEFfS0VZICAgICAgICAgICAgICAgICA9ICdicy5kcm9wZG93bidcbmNvbnN0IEVWRU5UX0tFWSAgICAgICAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgICAgICAgICAgICAgPSAnLmRhdGEtYXBpJ1xuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUICAgICAgID0gJC5mbltOQU1FXVxuY29uc3QgRVNDQVBFX0tFWUNPREUgICAgICAgICAgID0gMjcgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgRXNjYXBlIChFc2MpIGtleVxuY29uc3QgU1BBQ0VfS0VZQ09ERSAgICAgICAgICAgID0gMzIgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3Igc3BhY2Uga2V5XG5jb25zdCBUQUJfS0VZQ09ERSAgICAgICAgICAgICAgPSA5IC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIHRhYiBrZXlcbmNvbnN0IEFSUk9XX1VQX0tFWUNPREUgICAgICAgICA9IDM4IC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIHVwIGFycm93IGtleVxuY29uc3QgQVJST1dfRE9XTl9LRVlDT0RFICAgICAgID0gNDAgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgZG93biBhcnJvdyBrZXlcbmNvbnN0IFJJR0hUX01PVVNFX0JVVFRPTl9XSElDSCA9IDMgLy8gTW91c2VFdmVudC53aGljaCB2YWx1ZSBmb3IgdGhlIHJpZ2h0IGJ1dHRvbiAoYXNzdW1pbmcgYSByaWdodC1oYW5kZWQgbW91c2UpXG5jb25zdCBSRUdFWFBfS0VZRE9XTiAgICAgICAgICAgPSBuZXcgUmVnRXhwKGAke0FSUk9XX1VQX0tFWUNPREV9fCR7QVJST1dfRE9XTl9LRVlDT0RFfXwke0VTQ0FQRV9LRVlDT0RFfWApXG5cbmNvbnN0IEV2ZW50ID0ge1xuICBISURFICAgICAgICAgICAgIDogYGhpZGUke0VWRU5UX0tFWX1gLFxuICBISURERU4gICAgICAgICAgIDogYGhpZGRlbiR7RVZFTlRfS0VZfWAsXG4gIFNIT1cgICAgICAgICAgICAgOiBgc2hvdyR7RVZFTlRfS0VZfWAsXG4gIFNIT1dOICAgICAgICAgICAgOiBgc2hvd24ke0VWRU5UX0tFWX1gLFxuICBDTElDSyAgICAgICAgICAgIDogYGNsaWNrJHtFVkVOVF9LRVl9YCxcbiAgQ0xJQ0tfREFUQV9BUEkgICA6IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWAsXG4gIEtFWURPV05fREFUQV9BUEkgOiBga2V5ZG93biR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWAsXG4gIEtFWVVQX0RBVEFfQVBJICAgOiBga2V5dXAke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG59XG5cbmNvbnN0IENsYXNzTmFtZSA9IHtcbiAgRElTQUJMRUQgICAgICAgIDogJ2Rpc2FibGVkJyxcbiAgU0hPVyAgICAgICAgICAgIDogJ3Nob3cnLFxuICBEUk9QVVAgICAgICAgICAgOiAnZHJvcHVwJyxcbiAgRFJPUFJJR0hUICAgICAgIDogJ2Ryb3ByaWdodCcsXG4gIERST1BMRUZUICAgICAgICA6ICdkcm9wbGVmdCcsXG4gIE1FTlVSSUdIVCAgICAgICA6ICdkcm9wZG93bi1tZW51LXJpZ2h0JyxcbiAgTUVOVUxFRlQgICAgICAgIDogJ2Ryb3Bkb3duLW1lbnUtbGVmdCcsXG4gIFBPU0lUSU9OX1NUQVRJQyA6ICdwb3NpdGlvbi1zdGF0aWMnXG59XG5cbmNvbnN0IFNlbGVjdG9yID0ge1xuICBEQVRBX1RPR0dMRSAgIDogJ1tkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJdJyxcbiAgRk9STV9DSElMRCAgICA6ICcuZHJvcGRvd24gZm9ybScsXG4gIE1FTlUgICAgICAgICAgOiAnLmRyb3Bkb3duLW1lbnUnLFxuICBOQVZCQVJfTkFWICAgIDogJy5uYXZiYXItbmF2JyxcbiAgVklTSUJMRV9JVEVNUyA6ICcuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSdcbn1cblxuY29uc3QgQXR0YWNobWVudE1hcCA9IHtcbiAgVE9QICAgICAgIDogJ3RvcC1zdGFydCcsXG4gIFRPUEVORCAgICA6ICd0b3AtZW5kJyxcbiAgQk9UVE9NICAgIDogJ2JvdHRvbS1zdGFydCcsXG4gIEJPVFRPTUVORCA6ICdib3R0b20tZW5kJyxcbiAgUklHSFQgICAgIDogJ3JpZ2h0LXN0YXJ0JyxcbiAgUklHSFRFTkQgIDogJ3JpZ2h0LWVuZCcsXG4gIExFRlQgICAgICA6ICdsZWZ0LXN0YXJ0JyxcbiAgTEVGVEVORCAgIDogJ2xlZnQtZW5kJ1xufVxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBvZmZzZXQgICAgICAgOiAwLFxuICBmbGlwICAgICAgICAgOiB0cnVlLFxuICBib3VuZGFyeSAgICAgOiAnc2Nyb2xsUGFyZW50JyxcbiAgcmVmZXJlbmNlICAgIDogJ3RvZ2dsZScsXG4gIGRpc3BsYXkgICAgICA6ICdkeW5hbWljJyxcbiAgcG9wcGVyQ29uZmlnIDogbnVsbFxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgb2Zmc2V0ICAgICAgIDogJyhudW1iZXJ8c3RyaW5nfGZ1bmN0aW9uKScsXG4gIGZsaXAgICAgICAgICA6ICdib29sZWFuJyxcbiAgYm91bmRhcnkgICAgIDogJyhzdHJpbmd8ZWxlbWVudCknLFxuICByZWZlcmVuY2UgICAgOiAnKHN0cmluZ3xlbGVtZW50KScsXG4gIGRpc3BsYXkgICAgICA6ICdzdHJpbmcnLFxuICBwb3BwZXJDb25maWcgOiAnKG51bGx8b2JqZWN0KSdcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIERyb3Bkb3duIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgdGhpcy5fZWxlbWVudCAgPSBlbGVtZW50XG4gICAgdGhpcy5fcG9wcGVyICAgPSBudWxsXG4gICAgdGhpcy5fY29uZmlnICAgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX21lbnUgICAgID0gdGhpcy5fZ2V0TWVudUVsZW1lbnQoKVxuICAgIHRoaXMuX2luTmF2YmFyID0gdGhpcy5fZGV0ZWN0TmF2YmFyKClcblxuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudC5kaXNhYmxlZCB8fCAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5ESVNBQkxFRCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGlzQWN0aXZlID0gJCh0aGlzLl9tZW51KS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVylcblxuICAgIERyb3Bkb3duLl9jbGVhck1lbnVzKClcblxuICAgIGlmIChpc0FjdGl2ZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5zaG93KHRydWUpXG4gIH1cblxuICBzaG93KHVzZVBvcHBlciA9IGZhbHNlKSB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuZGlzYWJsZWQgfHwgJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuRElTQUJMRUQpIHx8ICQodGhpcy5fbWVudSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgIH1cbiAgICBjb25zdCBzaG93RXZlbnQgPSAkLkV2ZW50KEV2ZW50LlNIT1csIHJlbGF0ZWRUYXJnZXQpXG4gICAgY29uc3QgcGFyZW50ID0gRHJvcGRvd24uX2dldFBhcmVudEZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG5cbiAgICAkKHBhcmVudCkudHJpZ2dlcihzaG93RXZlbnQpXG5cbiAgICBpZiAoc2hvd0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBEaXNhYmxlIHRvdGFsbHkgUG9wcGVyLmpzIGZvciBEcm9wZG93biBpbiBOYXZiYXJcbiAgICBpZiAoIXRoaXMuX2luTmF2YmFyICYmIHVzZVBvcHBlcikge1xuICAgICAgLyoqXG4gICAgICAgKiBDaGVjayBmb3IgUG9wcGVyIGRlcGVuZGVuY3lcbiAgICAgICAqIFBvcHBlciAtIGh0dHBzOi8vcG9wcGVyLmpzLm9yZ1xuICAgICAgICovXG4gICAgICBpZiAodHlwZW9mIFBvcHBlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9vdHN0cmFwXFwncyBkcm9wZG93bnMgcmVxdWlyZSBQb3BwZXIuanMgKGh0dHBzOi8vcG9wcGVyLmpzLm9yZy8pJylcbiAgICAgIH1cblxuICAgICAgbGV0IHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcucmVmZXJlbmNlID09PSAncGFyZW50Jykge1xuICAgICAgICByZWZlcmVuY2VFbGVtZW50ID0gcGFyZW50XG4gICAgICB9IGVsc2UgaWYgKFV0aWwuaXNFbGVtZW50KHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UpKSB7XG4gICAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9jb25maWcucmVmZXJlbmNlXG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgaXQncyBqUXVlcnkgZWxlbWVudFxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UuanF1ZXJ5ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9jb25maWcucmVmZXJlbmNlWzBdXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSWYgYm91bmRhcnkgaXMgbm90IGBzY3JvbGxQYXJlbnRgLCB0aGVuIHNldCBwb3NpdGlvbiB0byBgc3RhdGljYFxuICAgICAgLy8gdG8gYWxsb3cgdGhlIG1lbnUgdG8gXCJlc2NhcGVcIiB0aGUgc2Nyb2xsIHBhcmVudCdzIGJvdW5kYXJpZXNcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMjQyNTFcbiAgICAgIGlmICh0aGlzLl9jb25maWcuYm91bmRhcnkgIT09ICdzY3JvbGxQYXJlbnQnKSB7XG4gICAgICAgICQocGFyZW50KS5hZGRDbGFzcyhDbGFzc05hbWUuUE9TSVRJT05fU1RBVElDKVxuICAgICAgfVxuICAgICAgdGhpcy5fcG9wcGVyID0gbmV3IFBvcHBlcihyZWZlcmVuY2VFbGVtZW50LCB0aGlzLl9tZW51LCB0aGlzLl9nZXRQb3BwZXJDb25maWcoKSlcbiAgICB9XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgYWRkIGV4dHJhXG4gICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB0byB0aGUgYm9keSdzIGltbWVkaWF0ZSBjaGlsZHJlbjtcbiAgICAvLyBvbmx5IG5lZWRlZCBiZWNhdXNlIG9mIGJyb2tlbiBldmVudCBkZWxlZ2F0aW9uIG9uIGlPU1xuICAgIC8vIGh0dHBzOi8vd3d3LnF1aXJrc21vZGUub3JnL2Jsb2cvYXJjaGl2ZXMvMjAxNC8wMi9tb3VzZV9ldmVudF9idWIuaHRtbFxuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiZcbiAgICAgICAgJChwYXJlbnQpLmNsb3Nlc3QoU2VsZWN0b3IuTkFWQkFSX05BVikubGVuZ3RoID09PSAwKSB7XG4gICAgICAkKGRvY3VtZW50LmJvZHkpLmNoaWxkcmVuKCkub24oJ21vdXNlb3ZlcicsIG51bGwsICQubm9vcClcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmZvY3VzKClcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpXG5cbiAgICAkKHRoaXMuX21lbnUpLnRvZ2dsZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuICAgICQocGFyZW50KVxuICAgICAgLnRvZ2dsZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuICAgICAgLnRyaWdnZXIoJC5FdmVudChFdmVudC5TSE9XTiwgcmVsYXRlZFRhcmdldCkpXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICh0aGlzLl9lbGVtZW50LmRpc2FibGVkIHx8ICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkRJU0FCTEVEKSB8fCAhJCh0aGlzLl9tZW51KS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgfVxuICAgIGNvbnN0IGhpZGVFdmVudCA9ICQuRXZlbnQoRXZlbnQuSElERSwgcmVsYXRlZFRhcmdldClcbiAgICBjb25zdCBwYXJlbnQgPSBEcm9wZG93bi5fZ2V0UGFyZW50RnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcblxuICAgICQocGFyZW50KS50cmlnZ2VyKGhpZGVFdmVudClcblxuICAgIGlmIChoaWRlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KClcbiAgICB9XG5cbiAgICAkKHRoaXMuX21lbnUpLnRvZ2dsZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuICAgICQocGFyZW50KVxuICAgICAgLnRvZ2dsZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuICAgICAgLnRyaWdnZXIoJC5FdmVudChFdmVudC5ISURERU4sIHJlbGF0ZWRUYXJnZXQpKVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkpXG4gICAgJCh0aGlzLl9lbGVtZW50KS5vZmYoRVZFTlRfS0VZKVxuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsXG4gICAgdGhpcy5fbWVudSA9IG51bGxcbiAgICBpZiAodGhpcy5fcG9wcGVyICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpXG4gICAgICB0aGlzLl9wb3BwZXIgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuX2luTmF2YmFyID0gdGhpcy5fZGV0ZWN0TmF2YmFyKClcbiAgICBpZiAodGhpcy5fcG9wcGVyICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9wb3BwZXIuc2NoZWR1bGVVcGRhdGUoKVxuICAgIH1cbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgJCh0aGlzLl9lbGVtZW50KS5vbihFdmVudC5DTElDSywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgdGhpcy50b2dnbGUoKVxuICAgIH0pXG4gIH1cblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLnRoaXMuY29uc3RydWN0b3IuRGVmYXVsdCxcbiAgICAgIC4uLiQodGhpcy5fZWxlbWVudCkuZGF0YSgpLFxuICAgICAgLi4uY29uZmlnXG4gICAgfVxuXG4gICAgVXRpbC50eXBlQ2hlY2tDb25maWcoXG4gICAgICBOQU1FLFxuICAgICAgY29uZmlnLFxuICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0VHlwZVxuICAgIClcblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9nZXRNZW51RWxlbWVudCgpIHtcbiAgICBpZiAoIXRoaXMuX21lbnUpIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IERyb3Bkb3duLl9nZXRQYXJlbnRGcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuXG4gICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIHRoaXMuX21lbnUgPSBwYXJlbnQucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5NRU5VKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fbWVudVxuICB9XG5cbiAgX2dldFBsYWNlbWVudCgpIHtcbiAgICBjb25zdCAkcGFyZW50RHJvcGRvd24gPSAkKHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZSlcbiAgICBsZXQgcGxhY2VtZW50ID0gQXR0YWNobWVudE1hcC5CT1RUT01cblxuICAgIC8vIEhhbmRsZSBkcm9wdXBcbiAgICBpZiAoJHBhcmVudERyb3Bkb3duLmhhc0NsYXNzKENsYXNzTmFtZS5EUk9QVVApKSB7XG4gICAgICBwbGFjZW1lbnQgPSBBdHRhY2htZW50TWFwLlRPUFxuICAgICAgaWYgKCQodGhpcy5fbWVudSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLk1FTlVSSUdIVCkpIHtcbiAgICAgICAgcGxhY2VtZW50ID0gQXR0YWNobWVudE1hcC5UT1BFTkRcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCRwYXJlbnREcm9wZG93bi5oYXNDbGFzcyhDbGFzc05hbWUuRFJPUFJJR0hUKSkge1xuICAgICAgcGxhY2VtZW50ID0gQXR0YWNobWVudE1hcC5SSUdIVFxuICAgIH0gZWxzZSBpZiAoJHBhcmVudERyb3Bkb3duLmhhc0NsYXNzKENsYXNzTmFtZS5EUk9QTEVGVCkpIHtcbiAgICAgIHBsYWNlbWVudCA9IEF0dGFjaG1lbnRNYXAuTEVGVFxuICAgIH0gZWxzZSBpZiAoJCh0aGlzLl9tZW51KS5oYXNDbGFzcyhDbGFzc05hbWUuTUVOVVJJR0hUKSkge1xuICAgICAgcGxhY2VtZW50ID0gQXR0YWNobWVudE1hcC5CT1RUT01FTkRcbiAgICB9XG4gICAgcmV0dXJuIHBsYWNlbWVudFxuICB9XG5cbiAgX2RldGVjdE5hdmJhcigpIHtcbiAgICByZXR1cm4gJCh0aGlzLl9lbGVtZW50KS5jbG9zZXN0KCcubmF2YmFyJykubGVuZ3RoID4gMFxuICB9XG5cbiAgX2dldE9mZnNldCgpIHtcbiAgICBjb25zdCBvZmZzZXQgPSB7fVxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLl9jb25maWcub2Zmc2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvZmZzZXQuZm4gPSAoZGF0YSkgPT4ge1xuICAgICAgICBkYXRhLm9mZnNldHMgPSB7XG4gICAgICAgICAgLi4uZGF0YS5vZmZzZXRzLFxuICAgICAgICAgIC4uLnRoaXMuX2NvbmZpZy5vZmZzZXQoZGF0YS5vZmZzZXRzLCB0aGlzLl9lbGVtZW50KSB8fCB7fVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgb2Zmc2V0Lm9mZnNldCA9IHRoaXMuX2NvbmZpZy5vZmZzZXRcbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0XG4gIH1cblxuICBfZ2V0UG9wcGVyQ29uZmlnKCkge1xuICAgIGNvbnN0IHBvcHBlckNvbmZpZyA9IHtcbiAgICAgIHBsYWNlbWVudDogdGhpcy5fZ2V0UGxhY2VtZW50KCksXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgb2Zmc2V0OiB0aGlzLl9nZXRPZmZzZXQoKSxcbiAgICAgICAgZmxpcDoge1xuICAgICAgICAgIGVuYWJsZWQ6IHRoaXMuX2NvbmZpZy5mbGlwXG4gICAgICAgIH0sXG4gICAgICAgIHByZXZlbnRPdmVyZmxvdzoge1xuICAgICAgICAgIGJvdW5kYXJpZXNFbGVtZW50OiB0aGlzLl9jb25maWcuYm91bmRhcnlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIERpc2FibGUgUG9wcGVyLmpzIGlmIHdlIGhhdmUgYSBzdGF0aWMgZGlzcGxheVxuICAgIGlmICh0aGlzLl9jb25maWcuZGlzcGxheSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgIHBvcHBlckNvbmZpZy5tb2RpZmllcnMuYXBwbHlTdHlsZSA9IHtcbiAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4ucG9wcGVyQ29uZmlnLFxuICAgICAgLi4udGhpcy5fY29uZmlnLnBvcHBlckNvbmZpZ1xuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpXG4gICAgICBjb25zdCBfY29uZmlnID0gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgPyBjb25maWcgOiBudWxsXG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IERyb3Bkb3duKHRoaXMsIF9jb25maWcpXG4gICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgX2NsZWFyTWVudXMoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQgJiYgKGV2ZW50LndoaWNoID09PSBSSUdIVF9NT1VTRV9CVVRUT05fV0hJQ0ggfHxcbiAgICAgIGV2ZW50LnR5cGUgPT09ICdrZXl1cCcgJiYgZXZlbnQud2hpY2ggIT09IFRBQl9LRVlDT0RFKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdG9nZ2xlcyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5EQVRBX1RPR0dMRSkpXG5cbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdG9nZ2xlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY29uc3QgcGFyZW50ID0gRHJvcGRvd24uX2dldFBhcmVudEZyb21FbGVtZW50KHRvZ2dsZXNbaV0pXG4gICAgICBjb25zdCBjb250ZXh0ID0gJCh0b2dnbGVzW2ldKS5kYXRhKERBVEFfS0VZKVxuICAgICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogdG9nZ2xlc1tpXVxuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQgJiYgZXZlbnQudHlwZSA9PT0gJ2NsaWNrJykge1xuICAgICAgICByZWxhdGVkVGFyZ2V0LmNsaWNrRXZlbnQgPSBldmVudFxuICAgICAgfVxuXG4gICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgZHJvcGRvd25NZW51ID0gY29udGV4dC5fbWVudVxuICAgICAgaWYgKCEkKHBhcmVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2NsaWNrJyAmJlxuICAgICAgICAgIC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpIHx8IGV2ZW50LnR5cGUgPT09ICdrZXl1cCcgJiYgZXZlbnQud2hpY2ggPT09IFRBQl9LRVlDT0RFKSAmJlxuICAgICAgICAgICQuY29udGFpbnMocGFyZW50LCBldmVudC50YXJnZXQpKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGhpZGVFdmVudCA9ICQuRXZlbnQoRXZlbnQuSElERSwgcmVsYXRlZFRhcmdldClcbiAgICAgICQocGFyZW50KS50cmlnZ2VyKGhpZGVFdmVudClcbiAgICAgIGlmIChoaWRlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIHJlbW92ZSB0aGUgZXh0cmFcbiAgICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgd2UgYWRkZWQgZm9yIGlPUyBzdXBwb3J0XG4gICAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgICQoZG9jdW1lbnQuYm9keSkuY2hpbGRyZW4oKS5vZmYoJ21vdXNlb3ZlcicsIG51bGwsICQubm9vcClcbiAgICAgIH1cblxuICAgICAgdG9nZ2xlc1tpXS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKVxuXG4gICAgICBpZiAoY29udGV4dC5fcG9wcGVyKSB7XG4gICAgICAgIGNvbnRleHQuX3BvcHBlci5kZXN0cm95KClcbiAgICAgIH1cblxuICAgICAgJChkcm9wZG93bk1lbnUpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuICAgICAgJChwYXJlbnQpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhDbGFzc05hbWUuU0hPVylcbiAgICAgICAgLnRyaWdnZXIoJC5FdmVudChFdmVudC5ISURERU4sIHJlbGF0ZWRUYXJnZXQpKVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBfZ2V0UGFyZW50RnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgIGxldCBwYXJlbnRcbiAgICBjb25zdCBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtZW50KVxuXG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnQgfHwgZWxlbWVudC5wYXJlbnROb2RlXG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuICBzdGF0aWMgX2RhdGFBcGlLZXlkb3duSGFuZGxlcihldmVudCkge1xuICAgIC8vIElmIG5vdCBpbnB1dC90ZXh0YXJlYTpcbiAgICAvLyAgLSBBbmQgbm90IGEga2V5IGluIFJFR0VYUF9LRVlET1dOID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcbiAgICAvLyBJZiBpbnB1dC90ZXh0YXJlYTpcbiAgICAvLyAgLSBJZiBzcGFjZSBrZXkgPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuICAgIC8vICAtIElmIGtleSBpcyBvdGhlciB0aGFuIGVzY2FwZVxuICAgIC8vICAgIC0gSWYga2V5IGlzIG5vdCB1cCBvciBkb3duID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcbiAgICAvLyAgICAtIElmIHRyaWdnZXIgaW5zaWRlIHRoZSBtZW51ID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcbiAgICBpZiAoL2lucHV0fHRleHRhcmVhL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSlcbiAgICAgID8gZXZlbnQud2hpY2ggPT09IFNQQUNFX0tFWUNPREUgfHwgZXZlbnQud2hpY2ggIT09IEVTQ0FQRV9LRVlDT0RFICYmXG4gICAgICAoZXZlbnQud2hpY2ggIT09IEFSUk9XX0RPV05fS0VZQ09ERSAmJiBldmVudC53aGljaCAhPT0gQVJST1dfVVBfS0VZQ09ERSB8fFxuICAgICAgICAkKGV2ZW50LnRhcmdldCkuY2xvc2VzdChTZWxlY3Rvci5NRU5VKS5sZW5ndGgpIDogIVJFR0VYUF9LRVlET1dOLnRlc3QoZXZlbnQud2hpY2gpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkIHx8ICQodGhpcykuaGFzQ2xhc3MoQ2xhc3NOYW1lLkRJU0FCTEVEKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgcGFyZW50ICAgPSBEcm9wZG93bi5fZ2V0UGFyZW50RnJvbUVsZW1lbnQodGhpcylcbiAgICBjb25zdCBpc0FjdGl2ZSA9ICQocGFyZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVylcblxuICAgIGlmICghaXNBY3RpdmUgJiYgZXZlbnQud2hpY2ggPT09IEVTQ0FQRV9LRVlDT0RFKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIWlzQWN0aXZlIHx8IGlzQWN0aXZlICYmIChldmVudC53aGljaCA9PT0gRVNDQVBFX0tFWUNPREUgfHwgZXZlbnQud2hpY2ggPT09IFNQQUNFX0tFWUNPREUpKSB7XG4gICAgICBpZiAoZXZlbnQud2hpY2ggPT09IEVTQ0FQRV9LRVlDT0RFKSB7XG4gICAgICAgIGNvbnN0IHRvZ2dsZSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLkRBVEFfVE9HR0xFKVxuICAgICAgICAkKHRvZ2dsZSkudHJpZ2dlcignZm9jdXMnKVxuICAgICAgfVxuXG4gICAgICAkKHRoaXMpLnRyaWdnZXIoJ2NsaWNrJylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGl0ZW1zID0gW10uc2xpY2UuY2FsbChwYXJlbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5WSVNJQkxFX0lURU1TKSlcbiAgICAgIC5maWx0ZXIoKGl0ZW0pID0+ICQoaXRlbSkuaXMoJzp2aXNpYmxlJykpXG5cbiAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgaW5kZXggPSBpdGVtcy5pbmRleE9mKGV2ZW50LnRhcmdldClcblxuICAgIGlmIChldmVudC53aGljaCA9PT0gQVJST1dfVVBfS0VZQ09ERSAmJiBpbmRleCA+IDApIHsgLy8gVXBcbiAgICAgIGluZGV4LS1cbiAgICB9XG5cbiAgICBpZiAoZXZlbnQud2hpY2ggPT09IEFSUk9XX0RPV05fS0VZQ09ERSAmJiBpbmRleCA8IGl0ZW1zLmxlbmd0aCAtIDEpIHsgLy8gRG93blxuICAgICAgaW5kZXgrK1xuICAgIH1cblxuICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgIGluZGV4ID0gMFxuICAgIH1cblxuICAgIGl0ZW1zW2luZGV4XS5mb2N1cygpXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kKGRvY3VtZW50KVxuICAub24oRXZlbnQuS0VZRE9XTl9EQVRBX0FQSSwgU2VsZWN0b3IuREFUQV9UT0dHTEUsIERyb3Bkb3duLl9kYXRhQXBpS2V5ZG93bkhhbmRsZXIpXG4gIC5vbihFdmVudC5LRVlET1dOX0RBVEFfQVBJLCBTZWxlY3Rvci5NRU5VLCBEcm9wZG93bi5fZGF0YUFwaUtleWRvd25IYW5kbGVyKVxuICAub24oYCR7RXZlbnQuQ0xJQ0tfREFUQV9BUEl9ICR7RXZlbnQuS0VZVVBfREFUQV9BUEl9YCwgRHJvcGRvd24uX2NsZWFyTWVudXMpXG4gIC5vbihFdmVudC5DTElDS19EQVRBX0FQSSwgU2VsZWN0b3IuREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIERyb3Bkb3duLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRoaXMpLCAndG9nZ2xlJylcbiAgfSlcbiAgLm9uKEV2ZW50LkNMSUNLX0RBVEFfQVBJLCBTZWxlY3Rvci5GT1JNX0NISUxELCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgfSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJC5mbltOQU1FXSA9IERyb3Bkb3duLl9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBEcm9wZG93blxuJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xuICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gIHJldHVybiBEcm9wZG93bi5falF1ZXJ5SW50ZXJmYWNlXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25cbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuNC4xKTogbW9kYWwuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSAgICAgICAgICAgICAgID0gJ21vZGFsJ1xuY29uc3QgVkVSU0lPTiAgICAgICAgICAgID0gJzQuNC4xJ1xuY29uc3QgREFUQV9LRVkgICAgICAgICAgID0gJ2JzLm1vZGFsJ1xuY29uc3QgRVZFTlRfS0VZICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSAgICAgICA9ICcuZGF0YS1hcGknXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG5jb25zdCBFU0NBUEVfS0VZQ09ERSAgICAgPSAyNyAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciBFc2NhcGUgKEVzYykga2V5XG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGJhY2tkcm9wIDogdHJ1ZSxcbiAga2V5Ym9hcmQgOiB0cnVlLFxuICBmb2N1cyAgICA6IHRydWUsXG4gIHNob3cgICAgIDogdHJ1ZVxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYmFja2Ryb3AgOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gIGtleWJvYXJkIDogJ2Jvb2xlYW4nLFxuICBmb2N1cyAgICA6ICdib29sZWFuJyxcbiAgc2hvdyAgICAgOiAnYm9vbGVhbidcbn1cblxuY29uc3QgRXZlbnQgPSB7XG4gIEhJREUgICAgICAgICAgICAgIDogYGhpZGUke0VWRU5UX0tFWX1gLFxuICBISURFX1BSRVZFTlRFRCAgICA6IGBoaWRlUHJldmVudGVkJHtFVkVOVF9LRVl9YCxcbiAgSElEREVOICAgICAgICAgICAgOiBgaGlkZGVuJHtFVkVOVF9LRVl9YCxcbiAgU0hPVyAgICAgICAgICAgICAgOiBgc2hvdyR7RVZFTlRfS0VZfWAsXG4gIFNIT1dOICAgICAgICAgICAgIDogYHNob3duJHtFVkVOVF9LRVl9YCxcbiAgRk9DVVNJTiAgICAgICAgICAgOiBgZm9jdXNpbiR7RVZFTlRfS0VZfWAsXG4gIFJFU0laRSAgICAgICAgICAgIDogYHJlc2l6ZSR7RVZFTlRfS0VZfWAsXG4gIENMSUNLX0RJU01JU1MgICAgIDogYGNsaWNrLmRpc21pc3Mke0VWRU5UX0tFWX1gLFxuICBLRVlET1dOX0RJU01JU1MgICA6IGBrZXlkb3duLmRpc21pc3Mke0VWRU5UX0tFWX1gLFxuICBNT1VTRVVQX0RJU01JU1MgICA6IGBtb3VzZXVwLmRpc21pc3Mke0VWRU5UX0tFWX1gLFxuICBNT1VTRURPV05fRElTTUlTUyA6IGBtb3VzZWRvd24uZGlzbWlzcyR7RVZFTlRfS0VZfWAsXG4gIENMSUNLX0RBVEFfQVBJICAgIDogYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxufVxuXG5jb25zdCBDbGFzc05hbWUgPSB7XG4gIFNDUk9MTEFCTEUgICAgICAgICA6ICdtb2RhbC1kaWFsb2ctc2Nyb2xsYWJsZScsXG4gIFNDUk9MTEJBUl9NRUFTVVJFUiA6ICdtb2RhbC1zY3JvbGxiYXItbWVhc3VyZScsXG4gIEJBQ0tEUk9QICAgICAgICAgICA6ICdtb2RhbC1iYWNrZHJvcCcsXG4gIE9QRU4gICAgICAgICAgICAgICA6ICdtb2RhbC1vcGVuJyxcbiAgRkFERSAgICAgICAgICAgICAgIDogJ2ZhZGUnLFxuICBTSE9XICAgICAgICAgICAgICAgOiAnc2hvdycsXG4gIFNUQVRJQyAgICAgICAgICAgICA6ICdtb2RhbC1zdGF0aWMnXG59XG5cbmNvbnN0IFNlbGVjdG9yID0ge1xuICBESUFMT0cgICAgICAgICA6ICcubW9kYWwtZGlhbG9nJyxcbiAgTU9EQUxfQk9EWSAgICAgOiAnLm1vZGFsLWJvZHknLFxuICBEQVRBX1RPR0dMRSAgICA6ICdbZGF0YS10b2dnbGU9XCJtb2RhbFwiXScsXG4gIERBVEFfRElTTUlTUyAgIDogJ1tkYXRhLWRpc21pc3M9XCJtb2RhbFwiXScsXG4gIEZJWEVEX0NPTlRFTlQgIDogJy5maXhlZC10b3AsIC5maXhlZC1ib3R0b20sIC5pcy1maXhlZCwgLnN0aWNreS10b3AnLFxuICBTVElDS1lfQ09OVEVOVCA6ICcuc3RpY2t5LXRvcCdcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIE1vZGFsIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgdGhpcy5fY29uZmlnICAgICAgICAgICAgICA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5fZWxlbWVudCAgICAgICAgICAgICA9IGVsZW1lbnRcbiAgICB0aGlzLl9kaWFsb2cgICAgICAgICAgICAgID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLkRJQUxPRylcbiAgICB0aGlzLl9iYWNrZHJvcCAgICAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX2lzU2hvd24gICAgICAgICAgICAgPSBmYWxzZVxuICAgIHRoaXMuX2lzQm9keU92ZXJmbG93aW5nICAgPSBmYWxzZVxuICAgIHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSBmYWxzZVxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyAgICAgPSBmYWxzZVxuICAgIHRoaXMuX3Njcm9sbGJhcldpZHRoICAgICAgPSAwXG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHRvZ2dsZShyZWxhdGVkVGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzU2hvd24gPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdyhyZWxhdGVkVGFyZ2V0KVxuICB9XG5cbiAgc2hvdyhyZWxhdGVkVGFyZ2V0KSB7XG4gICAgaWYgKHRoaXMuX2lzU2hvd24gfHwgdGhpcy5faXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuRkFERSkpIHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWVcbiAgICB9XG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSAkLkV2ZW50KEV2ZW50LlNIT1csIHtcbiAgICAgIHJlbGF0ZWRUYXJnZXRcbiAgICB9KVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHNob3dFdmVudClcblxuICAgIGlmICh0aGlzLl9pc1Nob3duIHx8IHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5faXNTaG93biA9IHRydWVcblxuICAgIHRoaXMuX2NoZWNrU2Nyb2xsYmFyKClcbiAgICB0aGlzLl9zZXRTY3JvbGxiYXIoKVxuXG4gICAgdGhpcy5fYWRqdXN0RGlhbG9nKClcblxuICAgIHRoaXMuX3NldEVzY2FwZUV2ZW50KClcbiAgICB0aGlzLl9zZXRSZXNpemVFdmVudCgpXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKFxuICAgICAgRXZlbnQuQ0xJQ0tfRElTTUlTUyxcbiAgICAgIFNlbGVjdG9yLkRBVEFfRElTTUlTUyxcbiAgICAgIChldmVudCkgPT4gdGhpcy5oaWRlKGV2ZW50KVxuICAgIClcblxuICAgICQodGhpcy5fZGlhbG9nKS5vbihFdmVudC5NT1VTRURPV05fRElTTUlTUywgKCkgPT4ge1xuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbmUoRXZlbnQuTU9VU0VVUF9ESVNNSVNTLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKCQoZXZlbnQudGFyZ2V0KS5pcyh0aGlzLl9lbGVtZW50KSkge1xuICAgICAgICAgIHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHRoaXMuX3Nob3dCYWNrZHJvcCgoKSA9PiB0aGlzLl9zaG93RWxlbWVudChyZWxhdGVkVGFyZ2V0KSlcbiAgfVxuXG4gIGhpZGUoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2lzU2hvd24gfHwgdGhpcy5faXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSAkLkV2ZW50KEV2ZW50LkhJREUpXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoaGlkZUV2ZW50KVxuXG4gICAgaWYgKCF0aGlzLl9pc1Nob3duIHx8IGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5faXNTaG93biA9IGZhbHNlXG4gICAgY29uc3QgdHJhbnNpdGlvbiA9ICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpXG5cbiAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gdHJ1ZVxuICAgIH1cblxuICAgIHRoaXMuX3NldEVzY2FwZUV2ZW50KClcbiAgICB0aGlzLl9zZXRSZXNpemVFdmVudCgpXG5cbiAgICAkKGRvY3VtZW50KS5vZmYoRXZlbnQuRk9DVVNJTilcblxuICAgICQodGhpcy5fZWxlbWVudCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpLm9mZihFdmVudC5DTElDS19ESVNNSVNTKVxuICAgICQodGhpcy5fZGlhbG9nKS5vZmYoRXZlbnQuTU9VU0VET1dOX0RJU01JU1MpXG5cblxuICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgKGV2ZW50KSA9PiB0aGlzLl9oaWRlTW9kYWwoZXZlbnQpKVxuICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9oaWRlTW9kYWwoKVxuICAgIH1cbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgW3dpbmRvdywgdGhpcy5fZWxlbWVudCwgdGhpcy5fZGlhbG9nXVxuICAgICAgLmZvckVhY2goKGh0bWxFbGVtZW50KSA9PiAkKGh0bWxFbGVtZW50KS5vZmYoRVZFTlRfS0VZKSlcblxuICAgIC8qKlxuICAgICAqIGBkb2N1bWVudGAgaGFzIDIgZXZlbnRzIGBFdmVudC5GT0NVU0lOYCBhbmQgYEV2ZW50LkNMSUNLX0RBVEFfQVBJYFxuICAgICAqIERvIG5vdCBtb3ZlIGBkb2N1bWVudGAgaW4gYGh0bWxFbGVtZW50c2AgYXJyYXlcbiAgICAgKiBJdCB3aWxsIHJlbW92ZSBgRXZlbnQuQ0xJQ0tfREFUQV9BUElgIGV2ZW50IHRoYXQgc2hvdWxkIHJlbWFpblxuICAgICAqL1xuICAgICQoZG9jdW1lbnQpLm9mZihFdmVudC5GT0NVU0lOKVxuXG4gICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKVxuXG4gICAgdGhpcy5fY29uZmlnICAgICAgICAgICAgICA9IG51bGxcbiAgICB0aGlzLl9lbGVtZW50ICAgICAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX2RpYWxvZyAgICAgICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5fYmFja2Ryb3AgICAgICAgICAgICA9IG51bGxcbiAgICB0aGlzLl9pc1Nob3duICAgICAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX2lzQm9keU92ZXJmbG93aW5nICAgPSBudWxsXG4gICAgdGhpcy5faWdub3JlQmFja2Ryb3BDbGljayA9IG51bGxcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgICAgID0gbnVsbFxuICAgIHRoaXMuX3Njcm9sbGJhcldpZHRoICAgICAgPSBudWxsXG4gIH1cblxuICBoYW5kbGVVcGRhdGUoKSB7XG4gICAgdGhpcy5fYWRqdXN0RGlhbG9nKClcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAuLi5jb25maWdcbiAgICB9XG4gICAgVXRpbC50eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCBEZWZhdWx0VHlwZSlcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbigpIHtcbiAgICBpZiAodGhpcy5fY29uZmlnLmJhY2tkcm9wID09PSAnc3RhdGljJykge1xuICAgICAgY29uc3QgaGlkZUV2ZW50UHJldmVudGVkID0gJC5FdmVudChFdmVudC5ISURFX1BSRVZFTlRFRClcblxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKGhpZGVFdmVudFByZXZlbnRlZClcbiAgICAgIGlmIChoaWRlRXZlbnRQcmV2ZW50ZWQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENsYXNzTmFtZS5TVEFUSUMpXG5cbiAgICAgIGNvbnN0IG1vZGFsVHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDbGFzc05hbWUuU1RBVElDKVxuICAgICAgfSlcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKG1vZGFsVHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgICAgdGhpcy5fZWxlbWVudC5mb2N1cygpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZSgpXG4gICAgfVxuICB9XG5cbiAgX3Nob3dFbGVtZW50KHJlbGF0ZWRUYXJnZXQpIHtcbiAgICBjb25zdCB0cmFuc2l0aW9uID0gJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuRkFERSlcbiAgICBjb25zdCBtb2RhbEJvZHkgPSB0aGlzLl9kaWFsb2cgPyB0aGlzLl9kaWFsb2cucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5NT0RBTF9CT0RZKSA6IG51bGxcblxuICAgIGlmICghdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlIHx8XG4gICAgICAgIHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgIC8vIERvbid0IG1vdmUgbW9kYWwncyBET00gcG9zaXRpb25cbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5fZWxlbWVudClcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJylcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcsIHRydWUpXG5cbiAgICBpZiAoJCh0aGlzLl9kaWFsb2cpLmhhc0NsYXNzKENsYXNzTmFtZS5TQ1JPTExBQkxFKSAmJiBtb2RhbEJvZHkpIHtcbiAgICAgIG1vZGFsQm9keS5zY3JvbGxUb3AgPSAwXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc2Nyb2xsVG9wID0gMFxuICAgIH1cblxuICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICBVdGlsLnJlZmxvdyh0aGlzLl9lbGVtZW50KVxuICAgIH1cblxuICAgICQodGhpcy5fZWxlbWVudCkuYWRkQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmZvY3VzKSB7XG4gICAgICB0aGlzLl9lbmZvcmNlRm9jdXMoKVxuICAgIH1cblxuICAgIGNvbnN0IHNob3duRXZlbnQgPSAkLkV2ZW50KEV2ZW50LlNIT1dOLCB7XG4gICAgICByZWxhdGVkVGFyZ2V0XG4gICAgfSlcblxuICAgIGNvbnN0IHRyYW5zaXRpb25Db21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9jb25maWcuZm9jdXMpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5mb2N1cygpXG4gICAgICB9XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHNob3duRXZlbnQpXG4gICAgfVxuXG4gICAgaWYgKHRyYW5zaXRpb24pIHtcbiAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiAgPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2RpYWxvZylcblxuICAgICAgJCh0aGlzLl9kaWFsb2cpXG4gICAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgdHJhbnNpdGlvbkNvbXBsZXRlKVxuICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2l0aW9uQ29tcGxldGUoKVxuICAgIH1cbiAgfVxuXG4gIF9lbmZvcmNlRm9jdXMoKSB7XG4gICAgJChkb2N1bWVudClcbiAgICAgIC5vZmYoRXZlbnQuRk9DVVNJTikgLy8gR3VhcmQgYWdhaW5zdCBpbmZpbml0ZSBmb2N1cyBsb29wXG4gICAgICAub24oRXZlbnQuRk9DVVNJTiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChkb2N1bWVudCAhPT0gZXZlbnQudGFyZ2V0ICYmXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50ICE9PSBldmVudC50YXJnZXQgJiZcbiAgICAgICAgICAgICQodGhpcy5fZWxlbWVudCkuaGFzKGV2ZW50LnRhcmdldCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5fZWxlbWVudC5mb2N1cygpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cblxuICBfc2V0RXNjYXBlRXZlbnQoKSB7XG4gICAgaWYgKHRoaXMuX2lzU2hvd24gJiYgdGhpcy5fY29uZmlnLmtleWJvYXJkKSB7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEV2ZW50LktFWURPV05fRElTTUlTUywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC53aGljaCA9PT0gRVNDQVBFX0tFWUNPREUpIHtcbiAgICAgICAgICB0aGlzLl90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKCF0aGlzLl9pc1Nob3duKSB7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9mZihFdmVudC5LRVlET1dOX0RJU01JU1MpXG4gICAgfVxuICB9XG5cbiAgX3NldFJlc2l6ZUV2ZW50KCkge1xuICAgIGlmICh0aGlzLl9pc1Nob3duKSB7XG4gICAgICAkKHdpbmRvdykub24oRXZlbnQuUkVTSVpFLCAoZXZlbnQpID0+IHRoaXMuaGFuZGxlVXBkYXRlKGV2ZW50KSlcbiAgICB9IGVsc2Uge1xuICAgICAgJCh3aW5kb3cpLm9mZihFdmVudC5SRVNJWkUpXG4gICAgfVxuICB9XG5cbiAgX2hpZGVNb2RhbCgpIHtcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0cnVlKVxuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLW1vZGFsJylcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgIHRoaXMuX3Nob3dCYWNrZHJvcCgoKSA9PiB7XG4gICAgICAkKGRvY3VtZW50LmJvZHkpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5PUEVOKVxuICAgICAgdGhpcy5fcmVzZXRBZGp1c3RtZW50cygpXG4gICAgICB0aGlzLl9yZXNldFNjcm9sbGJhcigpXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoRXZlbnQuSElEREVOKVxuICAgIH0pXG4gIH1cblxuICBfcmVtb3ZlQmFja2Ryb3AoKSB7XG4gICAgaWYgKHRoaXMuX2JhY2tkcm9wKSB7XG4gICAgICAkKHRoaXMuX2JhY2tkcm9wKS5yZW1vdmUoKVxuICAgICAgdGhpcy5fYmFja2Ryb3AgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgX3Nob3dCYWNrZHJvcChjYWxsYmFjaykge1xuICAgIGNvbnN0IGFuaW1hdGUgPSAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5GQURFKVxuICAgICAgPyBDbGFzc05hbWUuRkFERSA6ICcnXG5cbiAgICBpZiAodGhpcy5faXNTaG93biAmJiB0aGlzLl9jb25maWcuYmFja2Ryb3ApIHtcbiAgICAgIHRoaXMuX2JhY2tkcm9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHRoaXMuX2JhY2tkcm9wLmNsYXNzTmFtZSA9IENsYXNzTmFtZS5CQUNLRFJPUFxuXG4gICAgICBpZiAoYW5pbWF0ZSkge1xuICAgICAgICB0aGlzLl9iYWNrZHJvcC5jbGFzc0xpc3QuYWRkKGFuaW1hdGUpXG4gICAgICB9XG5cbiAgICAgICQodGhpcy5fYmFja2Ryb3ApLmFwcGVuZFRvKGRvY3VtZW50LmJvZHkpXG5cbiAgICAgICQodGhpcy5fZWxlbWVudCkub24oRXZlbnQuQ0xJQ0tfRElTTUlTUywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9pZ25vcmVCYWNrZHJvcENsaWNrKSB7XG4gICAgICAgICAgdGhpcy5faWdub3JlQmFja2Ryb3BDbGljayA9IGZhbHNlXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gZXZlbnQuY3VycmVudFRhcmdldCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbigpXG4gICAgICB9KVxuXG4gICAgICBpZiAoYW5pbWF0ZSkge1xuICAgICAgICBVdGlsLnJlZmxvdyh0aGlzLl9iYWNrZHJvcClcbiAgICAgIH1cblxuICAgICAgJCh0aGlzLl9iYWNrZHJvcCkuYWRkQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG5cbiAgICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICghYW5pbWF0ZSkge1xuICAgICAgICBjYWxsYmFjaygpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fYmFja2Ryb3ApXG5cbiAgICAgICQodGhpcy5fYmFja2Ryb3ApXG4gICAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY2FsbGJhY2spXG4gICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZChiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB9IGVsc2UgaWYgKCF0aGlzLl9pc1Nob3duICYmIHRoaXMuX2JhY2tkcm9wKSB7XG4gICAgICAkKHRoaXMuX2JhY2tkcm9wKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuU0hPVylcblxuICAgICAgY29uc3QgY2FsbGJhY2tSZW1vdmUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX3JlbW92ZUJhY2tkcm9wKClcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2soKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICgkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5GQURFKSkge1xuICAgICAgICBjb25zdCBiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fYmFja2Ryb3ApXG5cbiAgICAgICAgJCh0aGlzLl9iYWNrZHJvcClcbiAgICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNhbGxiYWNrUmVtb3ZlKVxuICAgICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZChiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbGxiYWNrUmVtb3ZlKClcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjaygpXG4gICAgfVxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB0aGUgZm9sbG93aW5nIG1ldGhvZHMgYXJlIHVzZWQgdG8gaGFuZGxlIG92ZXJmbG93aW5nIG1vZGFsc1xuICAvLyB0b2RvIChmYXQpOiB0aGVzZSBzaG91bGQgcHJvYmFibHkgYmUgcmVmYWN0b3JlZCBvdXQgb2YgbW9kYWwuanNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIF9hZGp1c3REaWFsb2coKSB7XG4gICAgY29uc3QgaXNNb2RhbE92ZXJmbG93aW5nID1cbiAgICAgIHRoaXMuX2VsZW1lbnQuc2Nyb2xsSGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuXG4gICAgaWYgKCF0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyAmJiBpc01vZGFsT3ZlcmZsb3dpbmcpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ0xlZnQgPSBgJHt0aGlzLl9zY3JvbGxiYXJXaWR0aH1weGBcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcgJiYgIWlzTW9kYWxPdmVyZmxvd2luZykge1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHt0aGlzLl9zY3JvbGxiYXJXaWR0aH1weGBcbiAgICB9XG4gIH1cblxuICBfcmVzZXRBZGp1c3RtZW50cygpIHtcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdMZWZ0ID0gJydcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCA9ICcnXG4gIH1cblxuICBfY2hlY2tTY3JvbGxiYXIoKSB7XG4gICAgY29uc3QgcmVjdCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICB0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyA9IHJlY3QubGVmdCArIHJlY3QucmlnaHQgPCB3aW5kb3cuaW5uZXJXaWR0aFxuICAgIHRoaXMuX3Njcm9sbGJhcldpZHRoID0gdGhpcy5fZ2V0U2Nyb2xsYmFyV2lkdGgoKVxuICB9XG5cbiAgX3NldFNjcm9sbGJhcigpIHtcbiAgICBpZiAodGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcpIHtcbiAgICAgIC8vIE5vdGU6IERPTU5vZGUuc3R5bGUucGFkZGluZ1JpZ2h0IHJldHVybnMgdGhlIGFjdHVhbCB2YWx1ZSBvciAnJyBpZiBub3Qgc2V0XG4gICAgICAvLyAgIHdoaWxlICQoRE9NTm9kZSkuY3NzKCdwYWRkaW5nLXJpZ2h0JykgcmV0dXJucyB0aGUgY2FsY3VsYXRlZCB2YWx1ZSBvciAwIGlmIG5vdCBzZXRcbiAgICAgIGNvbnN0IGZpeGVkQ29udGVudCA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5GSVhFRF9DT05URU5UKSlcbiAgICAgIGNvbnN0IHN0aWNreUNvbnRlbnQgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuU1RJQ0tZX0NPTlRFTlQpKVxuXG4gICAgICAvLyBBZGp1c3QgZml4ZWQgY29udGVudCBwYWRkaW5nXG4gICAgICAkKGZpeGVkQ29udGVudCkuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgYWN0dWFsUGFkZGluZyA9IGVsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0XG4gICAgICAgIGNvbnN0IGNhbGN1bGF0ZWRQYWRkaW5nID0gJChlbGVtZW50KS5jc3MoJ3BhZGRpbmctcmlnaHQnKVxuICAgICAgICAkKGVsZW1lbnQpXG4gICAgICAgICAgLmRhdGEoJ3BhZGRpbmctcmlnaHQnLCBhY3R1YWxQYWRkaW5nKVxuICAgICAgICAgIC5jc3MoJ3BhZGRpbmctcmlnaHQnLCBgJHtwYXJzZUZsb2F0KGNhbGN1bGF0ZWRQYWRkaW5nKSArIHRoaXMuX3Njcm9sbGJhcldpZHRofXB4YClcbiAgICAgIH0pXG5cbiAgICAgIC8vIEFkanVzdCBzdGlja3kgY29udGVudCBtYXJnaW5cbiAgICAgICQoc3RpY2t5Q29udGVudCkuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgYWN0dWFsTWFyZ2luID0gZWxlbWVudC5zdHlsZS5tYXJnaW5SaWdodFxuICAgICAgICBjb25zdCBjYWxjdWxhdGVkTWFyZ2luID0gJChlbGVtZW50KS5jc3MoJ21hcmdpbi1yaWdodCcpXG4gICAgICAgICQoZWxlbWVudClcbiAgICAgICAgICAuZGF0YSgnbWFyZ2luLXJpZ2h0JywgYWN0dWFsTWFyZ2luKVxuICAgICAgICAgIC5jc3MoJ21hcmdpbi1yaWdodCcsIGAke3BhcnNlRmxvYXQoY2FsY3VsYXRlZE1hcmdpbikgLSB0aGlzLl9zY3JvbGxiYXJXaWR0aH1weGApXG4gICAgICB9KVxuXG4gICAgICAvLyBBZGp1c3QgYm9keSBwYWRkaW5nXG4gICAgICBjb25zdCBhY3R1YWxQYWRkaW5nID0gZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHRcbiAgICAgIGNvbnN0IGNhbGN1bGF0ZWRQYWRkaW5nID0gJChkb2N1bWVudC5ib2R5KS5jc3MoJ3BhZGRpbmctcmlnaHQnKVxuICAgICAgJChkb2N1bWVudC5ib2R5KVxuICAgICAgICAuZGF0YSgncGFkZGluZy1yaWdodCcsIGFjdHVhbFBhZGRpbmcpXG4gICAgICAgIC5jc3MoJ3BhZGRpbmctcmlnaHQnLCBgJHtwYXJzZUZsb2F0KGNhbGN1bGF0ZWRQYWRkaW5nKSArIHRoaXMuX3Njcm9sbGJhcldpZHRofXB4YClcbiAgICB9XG5cbiAgICAkKGRvY3VtZW50LmJvZHkpLmFkZENsYXNzKENsYXNzTmFtZS5PUEVOKVxuICB9XG5cbiAgX3Jlc2V0U2Nyb2xsYmFyKCkge1xuICAgIC8vIFJlc3RvcmUgZml4ZWQgY29udGVudCBwYWRkaW5nXG4gICAgY29uc3QgZml4ZWRDb250ZW50ID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLkZJWEVEX0NPTlRFTlQpKVxuICAgICQoZml4ZWRDb250ZW50KS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgcGFkZGluZyA9ICQoZWxlbWVudCkuZGF0YSgncGFkZGluZy1yaWdodCcpXG4gICAgICAkKGVsZW1lbnQpLnJlbW92ZURhdGEoJ3BhZGRpbmctcmlnaHQnKVxuICAgICAgZWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBwYWRkaW5nID8gcGFkZGluZyA6ICcnXG4gICAgfSlcblxuICAgIC8vIFJlc3RvcmUgc3RpY2t5IGNvbnRlbnRcbiAgICBjb25zdCBlbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgJHtTZWxlY3Rvci5TVElDS1lfQ09OVEVOVH1gKSlcbiAgICAkKGVsZW1lbnRzKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgbWFyZ2luID0gJChlbGVtZW50KS5kYXRhKCdtYXJnaW4tcmlnaHQnKVxuICAgICAgaWYgKHR5cGVvZiBtYXJnaW4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICQoZWxlbWVudCkuY3NzKCdtYXJnaW4tcmlnaHQnLCBtYXJnaW4pLnJlbW92ZURhdGEoJ21hcmdpbi1yaWdodCcpXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFJlc3RvcmUgYm9keSBwYWRkaW5nXG4gICAgY29uc3QgcGFkZGluZyA9ICQoZG9jdW1lbnQuYm9keSkuZGF0YSgncGFkZGluZy1yaWdodCcpXG4gICAgJChkb2N1bWVudC5ib2R5KS5yZW1vdmVEYXRhKCdwYWRkaW5nLXJpZ2h0JylcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IHBhZGRpbmcgPyBwYWRkaW5nIDogJydcbiAgfVxuXG4gIF9nZXRTY3JvbGxiYXJXaWR0aCgpIHsgLy8gdGh4IGQud2Fsc2hcbiAgICBjb25zdCBzY3JvbGxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHNjcm9sbERpdi5jbGFzc05hbWUgPSBDbGFzc05hbWUuU0NST0xMQkFSX01FQVNVUkVSXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JvbGxEaXYpXG4gICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSBzY3JvbGxEaXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLSBzY3JvbGxEaXYuY2xpZW50V2lkdGhcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNjcm9sbERpdilcbiAgICByZXR1cm4gc2Nyb2xsYmFyV2lkdGhcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZywgcmVsYXRlZFRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpXG4gICAgICBjb25zdCBfY29uZmlnID0ge1xuICAgICAgICAuLi5EZWZhdWx0LFxuICAgICAgICAuLi4kKHRoaXMpLmRhdGEoKSxcbiAgICAgICAgLi4udHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge31cbiAgICAgIH1cblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgTW9kYWwodGhpcywgX2NvbmZpZylcbiAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG4gICAgICAgIGRhdGFbY29uZmlnXShyZWxhdGVkVGFyZ2V0KVxuICAgICAgfSBlbHNlIGlmIChfY29uZmlnLnNob3cpIHtcbiAgICAgICAgZGF0YS5zaG93KHJlbGF0ZWRUYXJnZXQpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQoZG9jdW1lbnQpLm9uKEV2ZW50LkNMSUNLX0RBVEFfQVBJLCBTZWxlY3Rvci5EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGxldCB0YXJnZXRcbiAgY29uc3Qgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQodGhpcylcblxuICBpZiAoc2VsZWN0b3IpIHtcbiAgICB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICB9XG5cbiAgY29uc3QgY29uZmlnID0gJCh0YXJnZXQpLmRhdGEoREFUQV9LRVkpXG4gICAgPyAndG9nZ2xlJyA6IHtcbiAgICAgIC4uLiQodGFyZ2V0KS5kYXRhKCksXG4gICAgICAuLi4kKHRoaXMpLmRhdGEoKVxuICAgIH1cblxuICBpZiAodGhpcy50YWdOYW1lID09PSAnQScgfHwgdGhpcy50YWdOYW1lID09PSAnQVJFQScpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBjb25zdCAkdGFyZ2V0ID0gJCh0YXJnZXQpLm9uZShFdmVudC5TSE9XLCAoc2hvd0V2ZW50KSA9PiB7XG4gICAgaWYgKHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgLy8gT25seSByZWdpc3RlciBmb2N1cyByZXN0b3JlciBpZiBtb2RhbCB3aWxsIGFjdHVhbGx5IGdldCBzaG93blxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgJHRhcmdldC5vbmUoRXZlbnQuSElEREVOLCAoKSA9PiB7XG4gICAgICBpZiAoJCh0aGlzKS5pcygnOnZpc2libGUnKSkge1xuICAgICAgICB0aGlzLmZvY3VzKClcbiAgICAgIH1cbiAgICB9KVxuICB9KVxuXG4gIE1vZGFsLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRhcmdldCksIGNvbmZpZywgdGhpcylcbn0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQuZm5bTkFNRV0gPSBNb2RhbC5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gTW9kYWxcbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gTW9kYWwuX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC40LjEpOiB0b29scy9zYW5pdGl6ZXIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IHVyaUF0dHJzID0gW1xuICAnYmFja2dyb3VuZCcsXG4gICdjaXRlJyxcbiAgJ2hyZWYnLFxuICAnaXRlbXR5cGUnLFxuICAnbG9uZ2Rlc2MnLFxuICAncG9zdGVyJyxcbiAgJ3NyYycsXG4gICd4bGluazpocmVmJ1xuXVxuXG5jb25zdCBBUklBX0FUVFJJQlVURV9QQVRURVJOID0gL15hcmlhLVtcXHctXSokL2lcblxuZXhwb3J0IGNvbnN0IERlZmF1bHRXaGl0ZWxpc3QgPSB7XG4gIC8vIEdsb2JhbCBhdHRyaWJ1dGVzIGFsbG93ZWQgb24gYW55IHN1cHBsaWVkIGVsZW1lbnQgYmVsb3cuXG4gICcqJzogWydjbGFzcycsICdkaXInLCAnaWQnLCAnbGFuZycsICdyb2xlJywgQVJJQV9BVFRSSUJVVEVfUEFUVEVSTl0sXG4gIGE6IFsndGFyZ2V0JywgJ2hyZWYnLCAndGl0bGUnLCAncmVsJ10sXG4gIGFyZWE6IFtdLFxuICBiOiBbXSxcbiAgYnI6IFtdLFxuICBjb2w6IFtdLFxuICBjb2RlOiBbXSxcbiAgZGl2OiBbXSxcbiAgZW06IFtdLFxuICBocjogW10sXG4gIGgxOiBbXSxcbiAgaDI6IFtdLFxuICBoMzogW10sXG4gIGg0OiBbXSxcbiAgaDU6IFtdLFxuICBoNjogW10sXG4gIGk6IFtdLFxuICBpbWc6IFsnc3JjJywgJ2FsdCcsICd0aXRsZScsICd3aWR0aCcsICdoZWlnaHQnXSxcbiAgbGk6IFtdLFxuICBvbDogW10sXG4gIHA6IFtdLFxuICBwcmU6IFtdLFxuICBzOiBbXSxcbiAgc21hbGw6IFtdLFxuICBzcGFuOiBbXSxcbiAgc3ViOiBbXSxcbiAgc3VwOiBbXSxcbiAgc3Ryb25nOiBbXSxcbiAgdTogW10sXG4gIHVsOiBbXVxufVxuXG4vKipcbiAqIEEgcGF0dGVybiB0aGF0IHJlY29nbml6ZXMgYSBjb21tb25seSB1c2VmdWwgc3Vic2V0IG9mIFVSTHMgdGhhdCBhcmUgc2FmZS5cbiAqXG4gKiBTaG91dG91dCB0byBBbmd1bGFyIDcgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzcuMi40L3BhY2thZ2VzL2NvcmUvc3JjL3Nhbml0aXphdGlvbi91cmxfc2FuaXRpemVyLnRzXG4gKi9cbmNvbnN0IFNBRkVfVVJMX1BBVFRFUk4gPSAvXig/Oig/Omh0dHBzP3xtYWlsdG98ZnRwfHRlbHxmaWxlKTp8W14mOi8/I10qKD86Wy8/I118JCkpL2dpXG5cbi8qKlxuICogQSBwYXR0ZXJuIHRoYXQgbWF0Y2hlcyBzYWZlIGRhdGEgVVJMcy4gT25seSBtYXRjaGVzIGltYWdlLCB2aWRlbyBhbmQgYXVkaW8gdHlwZXMuXG4gKlxuICogU2hvdXRvdXQgdG8gQW5ndWxhciA3IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi83LjIuNC9wYWNrYWdlcy9jb3JlL3NyYy9zYW5pdGl6YXRpb24vdXJsX3Nhbml0aXplci50c1xuICovXG5jb25zdCBEQVRBX1VSTF9QQVRURVJOID0gL15kYXRhOig/OmltYWdlXFwvKD86Ym1wfGdpZnxqcGVnfGpwZ3xwbmd8dGlmZnx3ZWJwKXx2aWRlb1xcLyg/Om1wZWd8bXA0fG9nZ3x3ZWJtKXxhdWRpb1xcLyg/Om1wM3xvZ2F8b2dnfG9wdXMpKTtiYXNlNjQsW2EtejAtOSsvXSs9KiQvaVxuXG5mdW5jdGlvbiBhbGxvd2VkQXR0cmlidXRlKGF0dHIsIGFsbG93ZWRBdHRyaWJ1dGVMaXN0KSB7XG4gIGNvbnN0IGF0dHJOYW1lID0gYXR0ci5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXG5cbiAgaWYgKGFsbG93ZWRBdHRyaWJ1dGVMaXN0LmluZGV4T2YoYXR0ck5hbWUpICE9PSAtMSkge1xuICAgIGlmICh1cmlBdHRycy5pbmRleE9mKGF0dHJOYW1lKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKGF0dHIubm9kZVZhbHVlLm1hdGNoKFNBRkVfVVJMX1BBVFRFUk4pIHx8IGF0dHIubm9kZVZhbHVlLm1hdGNoKERBVEFfVVJMX1BBVFRFUk4pKVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBjb25zdCByZWdFeHAgPSBhbGxvd2VkQXR0cmlidXRlTGlzdC5maWx0ZXIoKGF0dHJSZWdleCkgPT4gYXR0clJlZ2V4IGluc3RhbmNlb2YgUmVnRXhwKVxuXG4gIC8vIENoZWNrIGlmIGEgcmVndWxhciBleHByZXNzaW9uIHZhbGlkYXRlcyB0aGUgYXR0cmlidXRlLlxuICBmb3IgKGxldCBpID0gMCwgbCA9IHJlZ0V4cC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAoYXR0ck5hbWUubWF0Y2gocmVnRXhwW2ldKSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhbml0aXplSHRtbCh1bnNhZmVIdG1sLCB3aGl0ZUxpc3QsIHNhbml0aXplRm4pIHtcbiAgaWYgKHVuc2FmZUh0bWwubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHVuc2FmZUh0bWxcbiAgfVxuXG4gIGlmIChzYW5pdGl6ZUZuICYmIHR5cGVvZiBzYW5pdGl6ZUZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHNhbml0aXplRm4odW5zYWZlSHRtbClcbiAgfVxuXG4gIGNvbnN0IGRvbVBhcnNlciA9IG5ldyB3aW5kb3cuRE9NUGFyc2VyKClcbiAgY29uc3QgY3JlYXRlZERvY3VtZW50ID0gZG9tUGFyc2VyLnBhcnNlRnJvbVN0cmluZyh1bnNhZmVIdG1sLCAndGV4dC9odG1sJylcbiAgY29uc3Qgd2hpdGVsaXN0S2V5cyA9IE9iamVjdC5rZXlzKHdoaXRlTGlzdClcbiAgY29uc3QgZWxlbWVudHMgPSBbXS5zbGljZS5jYWxsKGNyZWF0ZWREb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJyonKSlcblxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCBlbCA9IGVsZW1lbnRzW2ldXG4gICAgY29uc3QgZWxOYW1lID0gZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKVxuXG4gICAgaWYgKHdoaXRlbGlzdEtleXMuaW5kZXhPZihlbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKSA9PT0gLTEpIHtcbiAgICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpXG5cbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgY29uc3QgYXR0cmlidXRlTGlzdCA9IFtdLnNsaWNlLmNhbGwoZWwuYXR0cmlidXRlcylcbiAgICBjb25zdCB3aGl0ZWxpc3RlZEF0dHJpYnV0ZXMgPSBbXS5jb25jYXQod2hpdGVMaXN0WycqJ10gfHwgW10sIHdoaXRlTGlzdFtlbE5hbWVdIHx8IFtdKVxuXG4gICAgYXR0cmlidXRlTGlzdC5mb3JFYWNoKChhdHRyKSA9PiB7XG4gICAgICBpZiAoIWFsbG93ZWRBdHRyaWJ1dGUoYXR0ciwgd2hpdGVsaXN0ZWRBdHRyaWJ1dGVzKSkge1xuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoYXR0ci5ub2RlTmFtZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZWREb2N1bWVudC5ib2R5LmlubmVySFRNTFxufVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC40LjEpOiB0b29sdGlwLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQge1xuICBEZWZhdWx0V2hpdGVsaXN0LFxuICBzYW5pdGl6ZUh0bWxcbn0gZnJvbSAnLi90b29scy9zYW5pdGl6ZXInXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgUG9wcGVyIGZyb20gJ3BvcHBlci5qcydcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSAgICAgICAgICAgICAgICAgID0gJ3Rvb2x0aXAnXG5jb25zdCBWRVJTSU9OICAgICAgICAgICAgICAgPSAnNC40LjEnXG5jb25zdCBEQVRBX0tFWSAgICAgICAgICAgICAgPSAnYnMudG9vbHRpcCdcbmNvbnN0IEVWRU5UX0tFWSAgICAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgICAgPSAkLmZuW05BTUVdXG5jb25zdCBDTEFTU19QUkVGSVggICAgICAgICAgPSAnYnMtdG9vbHRpcCdcbmNvbnN0IEJTQ0xTX1BSRUZJWF9SRUdFWCAgICA9IG5ldyBSZWdFeHAoYChefFxcXFxzKSR7Q0xBU1NfUFJFRklYfVxcXFxTK2AsICdnJylcbmNvbnN0IERJU0FMTE9XRURfQVRUUklCVVRFUyA9IFsnc2FuaXRpemUnLCAnd2hpdGVMaXN0JywgJ3Nhbml0aXplRm4nXVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYW5pbWF0aW9uICAgICAgICAgOiAnYm9vbGVhbicsXG4gIHRlbXBsYXRlICAgICAgICAgIDogJ3N0cmluZycsXG4gIHRpdGxlICAgICAgICAgICAgIDogJyhzdHJpbmd8ZWxlbWVudHxmdW5jdGlvbiknLFxuICB0cmlnZ2VyICAgICAgICAgICA6ICdzdHJpbmcnLFxuICBkZWxheSAgICAgICAgICAgICA6ICcobnVtYmVyfG9iamVjdCknLFxuICBodG1sICAgICAgICAgICAgICA6ICdib29sZWFuJyxcbiAgc2VsZWN0b3IgICAgICAgICAgOiAnKHN0cmluZ3xib29sZWFuKScsXG4gIHBsYWNlbWVudCAgICAgICAgIDogJyhzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgb2Zmc2V0ICAgICAgICAgICAgOiAnKG51bWJlcnxzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgY29udGFpbmVyICAgICAgICAgOiAnKHN0cmluZ3xlbGVtZW50fGJvb2xlYW4pJyxcbiAgZmFsbGJhY2tQbGFjZW1lbnQgOiAnKHN0cmluZ3xhcnJheSknLFxuICBib3VuZGFyeSAgICAgICAgICA6ICcoc3RyaW5nfGVsZW1lbnQpJyxcbiAgc2FuaXRpemUgICAgICAgICAgOiAnYm9vbGVhbicsXG4gIHNhbml0aXplRm4gICAgICAgIDogJyhudWxsfGZ1bmN0aW9uKScsXG4gIHdoaXRlTGlzdCAgICAgICAgIDogJ29iamVjdCcsXG4gIHBvcHBlckNvbmZpZyAgICAgIDogJyhudWxsfG9iamVjdCknXG59XG5cbmNvbnN0IEF0dGFjaG1lbnRNYXAgPSB7XG4gIEFVVE8gICA6ICdhdXRvJyxcbiAgVE9QICAgIDogJ3RvcCcsXG4gIFJJR0hUICA6ICdyaWdodCcsXG4gIEJPVFRPTSA6ICdib3R0b20nLFxuICBMRUZUICAgOiAnbGVmdCdcbn1cblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYW5pbWF0aW9uICAgICAgICAgOiB0cnVlLFxuICB0ZW1wbGF0ZSAgICAgICAgICA6ICc8ZGl2IGNsYXNzPVwidG9vbHRpcFwiIHJvbGU9XCJ0b29sdGlwXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiYXJyb3dcIj48L2Rpdj4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJ0b29sdGlwLWlubmVyXCI+PC9kaXY+PC9kaXY+JyxcbiAgdHJpZ2dlciAgICAgICAgICAgOiAnaG92ZXIgZm9jdXMnLFxuICB0aXRsZSAgICAgICAgICAgICA6ICcnLFxuICBkZWxheSAgICAgICAgICAgICA6IDAsXG4gIGh0bWwgICAgICAgICAgICAgIDogZmFsc2UsXG4gIHNlbGVjdG9yICAgICAgICAgIDogZmFsc2UsXG4gIHBsYWNlbWVudCAgICAgICAgIDogJ3RvcCcsXG4gIG9mZnNldCAgICAgICAgICAgIDogMCxcbiAgY29udGFpbmVyICAgICAgICAgOiBmYWxzZSxcbiAgZmFsbGJhY2tQbGFjZW1lbnQgOiAnZmxpcCcsXG4gIGJvdW5kYXJ5ICAgICAgICAgIDogJ3Njcm9sbFBhcmVudCcsXG4gIHNhbml0aXplICAgICAgICAgIDogdHJ1ZSxcbiAgc2FuaXRpemVGbiAgICAgICAgOiBudWxsLFxuICB3aGl0ZUxpc3QgICAgICAgICA6IERlZmF1bHRXaGl0ZWxpc3QsXG4gIHBvcHBlckNvbmZpZyAgICAgIDogbnVsbFxufVxuXG5jb25zdCBIb3ZlclN0YXRlID0ge1xuICBTSE9XIDogJ3Nob3cnLFxuICBPVVQgIDogJ291dCdcbn1cblxuY29uc3QgRXZlbnQgPSB7XG4gIEhJREUgICAgICAgOiBgaGlkZSR7RVZFTlRfS0VZfWAsXG4gIEhJRERFTiAgICAgOiBgaGlkZGVuJHtFVkVOVF9LRVl9YCxcbiAgU0hPVyAgICAgICA6IGBzaG93JHtFVkVOVF9LRVl9YCxcbiAgU0hPV04gICAgICA6IGBzaG93biR7RVZFTlRfS0VZfWAsXG4gIElOU0VSVEVEICAgOiBgaW5zZXJ0ZWQke0VWRU5UX0tFWX1gLFxuICBDTElDSyAgICAgIDogYGNsaWNrJHtFVkVOVF9LRVl9YCxcbiAgRk9DVVNJTiAgICA6IGBmb2N1c2luJHtFVkVOVF9LRVl9YCxcbiAgRk9DVVNPVVQgICA6IGBmb2N1c291dCR7RVZFTlRfS0VZfWAsXG4gIE1PVVNFRU5URVIgOiBgbW91c2VlbnRlciR7RVZFTlRfS0VZfWAsXG4gIE1PVVNFTEVBVkUgOiBgbW91c2VsZWF2ZSR7RVZFTlRfS0VZfWBcbn1cblxuY29uc3QgQ2xhc3NOYW1lID0ge1xuICBGQURFIDogJ2ZhZGUnLFxuICBTSE9XIDogJ3Nob3cnXG59XG5cbmNvbnN0IFNlbGVjdG9yID0ge1xuICBUT09MVElQICAgICAgIDogJy50b29sdGlwJyxcbiAgVE9PTFRJUF9JTk5FUiA6ICcudG9vbHRpcC1pbm5lcicsXG4gIEFSUk9XICAgICAgICAgOiAnLmFycm93J1xufVxuXG5jb25zdCBUcmlnZ2VyID0ge1xuICBIT1ZFUiAgOiAnaG92ZXInLFxuICBGT0NVUyAgOiAnZm9jdXMnLFxuICBDTElDSyAgOiAnY2xpY2snLFxuICBNQU5VQUwgOiAnbWFudWFsJ1xufVxuXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBUb29sdGlwIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgaWYgKHR5cGVvZiBQb3BwZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb290c3RyYXBcXCdzIHRvb2x0aXBzIHJlcXVpcmUgUG9wcGVyLmpzIChodHRwczovL3BvcHBlci5qcy5vcmcvKScpXG4gICAgfVxuXG4gICAgLy8gcHJpdmF0ZVxuICAgIHRoaXMuX2lzRW5hYmxlZCAgICAgPSB0cnVlXG4gICAgdGhpcy5fdGltZW91dCAgICAgICA9IDBcbiAgICB0aGlzLl9ob3ZlclN0YXRlICAgID0gJydcbiAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyID0ge31cbiAgICB0aGlzLl9wb3BwZXIgICAgICAgID0gbnVsbFxuXG4gICAgLy8gUHJvdGVjdGVkXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuY29uZmlnICA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy50aXAgICAgID0gbnVsbFxuXG4gICAgdGhpcy5fc2V0TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICBzdGF0aWMgZ2V0IERBVEFfS0VZKCkge1xuICAgIHJldHVybiBEQVRBX0tFWVxuICB9XG5cbiAgc3RhdGljIGdldCBFdmVudCgpIHtcbiAgICByZXR1cm4gRXZlbnRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRVZFTlRfS0VZKCkge1xuICAgIHJldHVybiBFVkVOVF9LRVlcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICBlbmFibGUoKSB7XG4gICAgdGhpcy5faXNFbmFibGVkID0gdHJ1ZVxuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICB0aGlzLl9pc0VuYWJsZWQgPSBmYWxzZVxuICB9XG5cbiAgdG9nZ2xlRW5hYmxlZCgpIHtcbiAgICB0aGlzLl9pc0VuYWJsZWQgPSAhdGhpcy5faXNFbmFibGVkXG4gIH1cblxuICB0b2dnbGUoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuX2lzRW5hYmxlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBjb25zdCBkYXRhS2V5ID0gdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWVxuICAgICAgbGV0IGNvbnRleHQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSlcblxuICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgIGNvbnRleHQgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihcbiAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LFxuICAgICAgICAgIHRoaXMuX2dldERlbGVnYXRlQ29uZmlnKClcbiAgICAgICAgKVxuICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSwgY29udGV4dClcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5fYWN0aXZlVHJpZ2dlci5jbGljayA9ICFjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyLmNsaWNrXG5cbiAgICAgIGlmIChjb250ZXh0Ll9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkpIHtcbiAgICAgICAgY29udGV4dC5fZW50ZXIobnVsbCwgY29udGV4dClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuX2xlYXZlKG51bGwsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICgkKHRoaXMuZ2V0VGlwRWxlbWVudCgpKS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVykpIHtcbiAgICAgICAgdGhpcy5fbGVhdmUobnVsbCwgdGhpcylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2VudGVyKG51bGwsIHRoaXMpXG4gICAgfVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dClcblxuICAgICQucmVtb3ZlRGF0YSh0aGlzLmVsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVkpXG5cbiAgICAkKHRoaXMuZWxlbWVudCkub2ZmKHRoaXMuY29uc3RydWN0b3IuRVZFTlRfS0VZKVxuICAgICQodGhpcy5lbGVtZW50KS5jbG9zZXN0KCcubW9kYWwnKS5vZmYoJ2hpZGUuYnMubW9kYWwnLCB0aGlzLl9oaWRlTW9kYWxIYW5kbGVyKVxuXG4gICAgaWYgKHRoaXMudGlwKSB7XG4gICAgICAkKHRoaXMudGlwKS5yZW1vdmUoKVxuICAgIH1cblxuICAgIHRoaXMuX2lzRW5hYmxlZCAgICAgPSBudWxsXG4gICAgdGhpcy5fdGltZW91dCAgICAgICA9IG51bGxcbiAgICB0aGlzLl9ob3ZlclN0YXRlICAgID0gbnVsbFxuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXIgPSBudWxsXG4gICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIHRoaXMuX3BvcHBlciA9IG51bGxcbiAgICB0aGlzLmVsZW1lbnQgPSBudWxsXG4gICAgdGhpcy5jb25maWcgID0gbnVsbFxuICAgIHRoaXMudGlwICAgICA9IG51bGxcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgaWYgKCQodGhpcy5lbGVtZW50KS5jc3MoJ2Rpc3BsYXknKSA9PT0gJ25vbmUnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSB1c2Ugc2hvdyBvbiB2aXNpYmxlIGVsZW1lbnRzJylcbiAgICB9XG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSAkLkV2ZW50KHRoaXMuY29uc3RydWN0b3IuRXZlbnQuU0hPVylcbiAgICBpZiAodGhpcy5pc1dpdGhDb250ZW50KCkgJiYgdGhpcy5faXNFbmFibGVkKSB7XG4gICAgICAkKHRoaXMuZWxlbWVudCkudHJpZ2dlcihzaG93RXZlbnQpXG5cbiAgICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSBVdGlsLmZpbmRTaGFkb3dSb290KHRoaXMuZWxlbWVudClcbiAgICAgIGNvbnN0IGlzSW5UaGVEb20gPSAkLmNvbnRhaW5zKFxuICAgICAgICBzaGFkb3dSb290ICE9PSBudWxsID8gc2hhZG93Um9vdCA6IHRoaXMuZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcbiAgICAgICAgdGhpcy5lbGVtZW50XG4gICAgICApXG5cbiAgICAgIGlmIChzaG93RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgfHwgIWlzSW5UaGVEb20pIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRpcCAgID0gdGhpcy5nZXRUaXBFbGVtZW50KClcbiAgICAgIGNvbnN0IHRpcElkID0gVXRpbC5nZXRVSUQodGhpcy5jb25zdHJ1Y3Rvci5OQU1FKVxuXG4gICAgICB0aXAuc2V0QXR0cmlidXRlKCdpZCcsIHRpcElkKVxuICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIHRpcElkKVxuXG4gICAgICB0aGlzLnNldENvbnRlbnQoKVxuXG4gICAgICBpZiAodGhpcy5jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICAgICQodGlwKS5hZGRDbGFzcyhDbGFzc05hbWUuRkFERSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGxhY2VtZW50ICA9IHR5cGVvZiB0aGlzLmNvbmZpZy5wbGFjZW1lbnQgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyB0aGlzLmNvbmZpZy5wbGFjZW1lbnQuY2FsbCh0aGlzLCB0aXAsIHRoaXMuZWxlbWVudClcbiAgICAgICAgOiB0aGlzLmNvbmZpZy5wbGFjZW1lbnRcblxuICAgICAgY29uc3QgYXR0YWNobWVudCA9IHRoaXMuX2dldEF0dGFjaG1lbnQocGxhY2VtZW50KVxuICAgICAgdGhpcy5hZGRBdHRhY2htZW50Q2xhc3MoYXR0YWNobWVudClcblxuICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5fZ2V0Q29udGFpbmVyKClcbiAgICAgICQodGlwKS5kYXRhKHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVksIHRoaXMpXG5cbiAgICAgIGlmICghJC5jb250YWlucyh0aGlzLmVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHRoaXMudGlwKSkge1xuICAgICAgICAkKHRpcCkuYXBwZW5kVG8oY29udGFpbmVyKVxuICAgICAgfVxuXG4gICAgICAkKHRoaXMuZWxlbWVudCkudHJpZ2dlcih0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LklOU0VSVEVEKVxuXG4gICAgICB0aGlzLl9wb3BwZXIgPSBuZXcgUG9wcGVyKHRoaXMuZWxlbWVudCwgdGlwLCB0aGlzLl9nZXRQb3BwZXJDb25maWcoYXR0YWNobWVudCkpXG5cbiAgICAgICQodGlwKS5hZGRDbGFzcyhDbGFzc05hbWUuU0hPVylcblxuICAgICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIGFkZCBleHRyYVxuICAgICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB0byB0aGUgYm9keSdzIGltbWVkaWF0ZSBjaGlsZHJlbjtcbiAgICAgIC8vIG9ubHkgbmVlZGVkIGJlY2F1c2Ugb2YgYnJva2VuIGV2ZW50IGRlbGVnYXRpb24gb24gaU9TXG4gICAgICAvLyBodHRwczovL3d3dy5xdWlya3Ntb2RlLm9yZy9ibG9nL2FyY2hpdmVzLzIwMTQvMDIvbW91c2VfZXZlbnRfYnViLmh0bWxcbiAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgJChkb2N1bWVudC5ib2R5KS5jaGlsZHJlbigpLm9uKCdtb3VzZW92ZXInLCBudWxsLCAkLm5vb3ApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgdGhpcy5fZml4VHJhbnNpdGlvbigpXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJldkhvdmVyU3RhdGUgPSB0aGlzLl9ob3ZlclN0YXRlXG4gICAgICAgIHRoaXMuX2hvdmVyU3RhdGUgICAgID0gbnVsbFxuXG4gICAgICAgICQodGhpcy5lbGVtZW50KS50cmlnZ2VyKHRoaXMuY29uc3RydWN0b3IuRXZlbnQuU0hPV04pXG5cbiAgICAgICAgaWYgKHByZXZIb3ZlclN0YXRlID09PSBIb3ZlclN0YXRlLk9VVCkge1xuICAgICAgICAgIHRoaXMuX2xlYXZlKG51bGwsIHRoaXMpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCQodGhpcy50aXApLmhhc0NsYXNzKENsYXNzTmFtZS5GQURFKSkge1xuICAgICAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMudGlwKVxuXG4gICAgICAgICQodGhpcy50aXApXG4gICAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjb21wbGV0ZSlcbiAgICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcGxldGUoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhpZGUoY2FsbGJhY2spIHtcbiAgICBjb25zdCB0aXAgICAgICAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKVxuICAgIGNvbnN0IGhpZGVFdmVudCA9ICQuRXZlbnQodGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5ISURFKVxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2hvdmVyU3RhdGUgIT09IEhvdmVyU3RhdGUuU0hPVyAmJiB0aXAucGFyZW50Tm9kZSkge1xuICAgICAgICB0aXAucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aXApXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2NsZWFuVGlwQ2xhc3MoKVxuICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScpXG4gICAgICAkKHRoaXMuZWxlbWVudCkudHJpZ2dlcih0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkhJRERFTilcbiAgICAgIGlmICh0aGlzLl9wb3BwZXIgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKVxuICAgICAgfVxuXG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2soKVxuICAgICAgfVxuICAgIH1cblxuICAgICQodGhpcy5lbGVtZW50KS50cmlnZ2VyKGhpZGVFdmVudClcblxuICAgIGlmIChoaWRlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgICQodGlwKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuU0hPVylcblxuICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSByZW1vdmUgdGhlIGV4dHJhXG4gICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB3ZSBhZGRlZCBmb3IgaU9TIHN1cHBvcnRcbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAkKGRvY3VtZW50LmJvZHkpLmNoaWxkcmVuKCkub2ZmKCdtb3VzZW92ZXInLCBudWxsLCAkLm5vb3ApXG4gICAgfVxuXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUcmlnZ2VyLkNMSUNLXSA9IGZhbHNlXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUcmlnZ2VyLkZPQ1VTXSA9IGZhbHNlXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUcmlnZ2VyLkhPVkVSXSA9IGZhbHNlXG5cbiAgICBpZiAoJCh0aGlzLnRpcCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpKSB7XG4gICAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRpcClcblxuICAgICAgJCh0aXApXG4gICAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY29tcGxldGUpXG4gICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBsZXRlKClcbiAgICB9XG5cbiAgICB0aGlzLl9ob3ZlclN0YXRlID0gJydcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5fcG9wcGVyICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9wb3BwZXIuc2NoZWR1bGVVcGRhdGUoKVxuICAgIH1cbiAgfVxuXG4gIC8vIFByb3RlY3RlZFxuXG4gIGlzV2l0aENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odGhpcy5nZXRUaXRsZSgpKVxuICB9XG5cbiAgYWRkQXR0YWNobWVudENsYXNzKGF0dGFjaG1lbnQpIHtcbiAgICAkKHRoaXMuZ2V0VGlwRWxlbWVudCgpKS5hZGRDbGFzcyhgJHtDTEFTU19QUkVGSVh9LSR7YXR0YWNobWVudH1gKVxuICB9XG5cbiAgZ2V0VGlwRWxlbWVudCgpIHtcbiAgICB0aGlzLnRpcCA9IHRoaXMudGlwIHx8ICQodGhpcy5jb25maWcudGVtcGxhdGUpWzBdXG4gICAgcmV0dXJuIHRoaXMudGlwXG4gIH1cblxuICBzZXRDb250ZW50KCkge1xuICAgIGNvbnN0IHRpcCA9IHRoaXMuZ2V0VGlwRWxlbWVudCgpXG4gICAgdGhpcy5zZXRFbGVtZW50Q29udGVudCgkKHRpcC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLlRPT0xUSVBfSU5ORVIpKSwgdGhpcy5nZXRUaXRsZSgpKVxuICAgICQodGlwKS5yZW1vdmVDbGFzcyhgJHtDbGFzc05hbWUuRkFERX0gJHtDbGFzc05hbWUuU0hPV31gKVxuICB9XG5cbiAgc2V0RWxlbWVudENvbnRlbnQoJGVsZW1lbnQsIGNvbnRlbnQpIHtcbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdvYmplY3QnICYmIChjb250ZW50Lm5vZGVUeXBlIHx8IGNvbnRlbnQuanF1ZXJ5KSkge1xuICAgICAgLy8gQ29udGVudCBpcyBhIERPTSBub2RlIG9yIGEgalF1ZXJ5XG4gICAgICBpZiAodGhpcy5jb25maWcuaHRtbCkge1xuICAgICAgICBpZiAoISQoY29udGVudCkucGFyZW50KCkuaXMoJGVsZW1lbnQpKSB7XG4gICAgICAgICAgJGVsZW1lbnQuZW1wdHkoKS5hcHBlbmQoY29udGVudClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGVsZW1lbnQudGV4dCgkKGNvbnRlbnQpLnRleHQoKSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29uZmlnLmh0bWwpIHtcbiAgICAgIGlmICh0aGlzLmNvbmZpZy5zYW5pdGl6ZSkge1xuICAgICAgICBjb250ZW50ID0gc2FuaXRpemVIdG1sKGNvbnRlbnQsIHRoaXMuY29uZmlnLndoaXRlTGlzdCwgdGhpcy5jb25maWcuc2FuaXRpemVGbilcbiAgICAgIH1cblxuICAgICAgJGVsZW1lbnQuaHRtbChjb250ZW50KVxuICAgIH0gZWxzZSB7XG4gICAgICAkZWxlbWVudC50ZXh0KGNvbnRlbnQpXG4gICAgfVxuICB9XG5cbiAgZ2V0VGl0bGUoKSB7XG4gICAgbGV0IHRpdGxlID0gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vcmlnaW5hbC10aXRsZScpXG5cbiAgICBpZiAoIXRpdGxlKSB7XG4gICAgICB0aXRsZSA9IHR5cGVvZiB0aGlzLmNvbmZpZy50aXRsZSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHRoaXMuY29uZmlnLnRpdGxlLmNhbGwodGhpcy5lbGVtZW50KVxuICAgICAgICA6IHRoaXMuY29uZmlnLnRpdGxlXG4gICAgfVxuXG4gICAgcmV0dXJuIHRpdGxlXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldFBvcHBlckNvbmZpZyhhdHRhY2htZW50KSB7XG4gICAgY29uc3QgZGVmYXVsdEJzQ29uZmlnID0ge1xuICAgICAgcGxhY2VtZW50OiBhdHRhY2htZW50LFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIG9mZnNldDogdGhpcy5fZ2V0T2Zmc2V0KCksXG4gICAgICAgIGZsaXA6IHtcbiAgICAgICAgICBiZWhhdmlvcjogdGhpcy5jb25maWcuZmFsbGJhY2tQbGFjZW1lbnRcbiAgICAgICAgfSxcbiAgICAgICAgYXJyb3c6IHtcbiAgICAgICAgICBlbGVtZW50OiBTZWxlY3Rvci5BUlJPV1xuICAgICAgICB9LFxuICAgICAgICBwcmV2ZW50T3ZlcmZsb3c6IHtcbiAgICAgICAgICBib3VuZGFyaWVzRWxlbWVudDogdGhpcy5jb25maWcuYm91bmRhcnlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uQ3JlYXRlOiAoZGF0YSkgPT4ge1xuICAgICAgICBpZiAoZGF0YS5vcmlnaW5hbFBsYWNlbWVudCAhPT0gZGF0YS5wbGFjZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLl9oYW5kbGVQb3BwZXJQbGFjZW1lbnRDaGFuZ2UoZGF0YSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uVXBkYXRlOiAoZGF0YSkgPT4gdGhpcy5faGFuZGxlUG9wcGVyUGxhY2VtZW50Q2hhbmdlKGRhdGEpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmRlZmF1bHRCc0NvbmZpZyxcbiAgICAgIC4uLnRoaXMuY29uZmlnLnBvcHBlckNvbmZpZ1xuICAgIH1cbiAgfVxuXG4gIF9nZXRPZmZzZXQoKSB7XG4gICAgY29uc3Qgb2Zmc2V0ID0ge31cblxuICAgIGlmICh0eXBlb2YgdGhpcy5jb25maWcub2Zmc2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvZmZzZXQuZm4gPSAoZGF0YSkgPT4ge1xuICAgICAgICBkYXRhLm9mZnNldHMgPSB7XG4gICAgICAgICAgLi4uZGF0YS5vZmZzZXRzLFxuICAgICAgICAgIC4uLnRoaXMuY29uZmlnLm9mZnNldChkYXRhLm9mZnNldHMsIHRoaXMuZWxlbWVudCkgfHwge31cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG9mZnNldC5vZmZzZXQgPSB0aGlzLmNvbmZpZy5vZmZzZXRcbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0XG4gIH1cblxuICBfZ2V0Q29udGFpbmVyKCkge1xuICAgIGlmICh0aGlzLmNvbmZpZy5jb250YWluZXIgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuYm9keVxuICAgIH1cblxuICAgIGlmIChVdGlsLmlzRWxlbWVudCh0aGlzLmNvbmZpZy5jb250YWluZXIpKSB7XG4gICAgICByZXR1cm4gJCh0aGlzLmNvbmZpZy5jb250YWluZXIpXG4gICAgfVxuXG4gICAgcmV0dXJuICQoZG9jdW1lbnQpLmZpbmQodGhpcy5jb25maWcuY29udGFpbmVyKVxuICB9XG5cbiAgX2dldEF0dGFjaG1lbnQocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIEF0dGFjaG1lbnRNYXBbcGxhY2VtZW50LnRvVXBwZXJDYXNlKCldXG4gIH1cblxuICBfc2V0TGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IHRyaWdnZXJzID0gdGhpcy5jb25maWcudHJpZ2dlci5zcGxpdCgnICcpXG5cbiAgICB0cmlnZ2Vycy5mb3JFYWNoKCh0cmlnZ2VyKSA9PiB7XG4gICAgICBpZiAodHJpZ2dlciA9PT0gJ2NsaWNrJykge1xuICAgICAgICAkKHRoaXMuZWxlbWVudCkub24oXG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5DTElDSyxcbiAgICAgICAgICB0aGlzLmNvbmZpZy5zZWxlY3RvcixcbiAgICAgICAgICAoZXZlbnQpID0+IHRoaXMudG9nZ2xlKGV2ZW50KVxuICAgICAgICApXG4gICAgICB9IGVsc2UgaWYgKHRyaWdnZXIgIT09IFRyaWdnZXIuTUFOVUFMKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50SW4gPSB0cmlnZ2VyID09PSBUcmlnZ2VyLkhPVkVSXG4gICAgICAgICAgPyB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50Lk1PVVNFRU5URVJcbiAgICAgICAgICA6IHRoaXMuY29uc3RydWN0b3IuRXZlbnQuRk9DVVNJTlxuICAgICAgICBjb25zdCBldmVudE91dCA9IHRyaWdnZXIgPT09IFRyaWdnZXIuSE9WRVJcbiAgICAgICAgICA/IHRoaXMuY29uc3RydWN0b3IuRXZlbnQuTU9VU0VMRUFWRVxuICAgICAgICAgIDogdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5GT0NVU09VVFxuXG4gICAgICAgICQodGhpcy5lbGVtZW50KVxuICAgICAgICAgIC5vbihcbiAgICAgICAgICAgIGV2ZW50SW4sXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5zZWxlY3RvcixcbiAgICAgICAgICAgIChldmVudCkgPT4gdGhpcy5fZW50ZXIoZXZlbnQpXG4gICAgICAgICAgKVxuICAgICAgICAgIC5vbihcbiAgICAgICAgICAgIGV2ZW50T3V0LFxuICAgICAgICAgICAgdGhpcy5jb25maWcuc2VsZWN0b3IsXG4gICAgICAgICAgICAoZXZlbnQpID0+IHRoaXMuX2xlYXZlKGV2ZW50KVxuICAgICAgICAgIClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5faGlkZU1vZGFsSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5oaWRlKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAkKHRoaXMuZWxlbWVudCkuY2xvc2VzdCgnLm1vZGFsJykub24oXG4gICAgICAnaGlkZS5icy5tb2RhbCcsXG4gICAgICB0aGlzLl9oaWRlTW9kYWxIYW5kbGVyXG4gICAgKVxuXG4gICAgaWYgKHRoaXMuY29uZmlnLnNlbGVjdG9yKSB7XG4gICAgICB0aGlzLmNvbmZpZyA9IHtcbiAgICAgICAgLi4udGhpcy5jb25maWcsXG4gICAgICAgIHRyaWdnZXI6ICdtYW51YWwnLFxuICAgICAgICBzZWxlY3RvcjogJydcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZml4VGl0bGUoKVxuICAgIH1cbiAgfVxuXG4gIF9maXhUaXRsZSgpIHtcbiAgICBjb25zdCB0aXRsZVR5cGUgPSB0eXBlb2YgdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vcmlnaW5hbC10aXRsZScpXG5cbiAgICBpZiAodGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgndGl0bGUnKSB8fCB0aXRsZVR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKFxuICAgICAgICAnZGF0YS1vcmlnaW5hbC10aXRsZScsXG4gICAgICAgIHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJykgfHwgJydcbiAgICAgIClcblxuICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnJylcbiAgICB9XG4gIH1cblxuICBfZW50ZXIoZXZlbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBkYXRhS2V5ID0gdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWVxuICAgIGNvbnRleHQgPSBjb250ZXh0IHx8ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YShkYXRhS2V5KVxuXG4gICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICBjb250ZXh0ID0gbmV3IHRoaXMuY29uc3RydWN0b3IoXG4gICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQsXG4gICAgICAgIHRoaXMuX2dldERlbGVnYXRlQ29uZmlnKClcbiAgICAgIClcbiAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YShkYXRhS2V5LCBjb250ZXh0KVxuICAgIH1cblxuICAgIGlmIChldmVudCkge1xuICAgICAgY29udGV4dC5fYWN0aXZlVHJpZ2dlcltcbiAgICAgICAgZXZlbnQudHlwZSA9PT0gJ2ZvY3VzaW4nID8gVHJpZ2dlci5GT0NVUyA6IFRyaWdnZXIuSE9WRVJcbiAgICAgIF0gPSB0cnVlXG4gICAgfVxuXG4gICAgaWYgKCQoY29udGV4dC5nZXRUaXBFbGVtZW50KCkpLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKSB8fCBjb250ZXh0Ll9ob3ZlclN0YXRlID09PSBIb3ZlclN0YXRlLlNIT1cpIHtcbiAgICAgIGNvbnRleHQuX2hvdmVyU3RhdGUgPSBIb3ZlclN0YXRlLlNIT1dcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNsZWFyVGltZW91dChjb250ZXh0Ll90aW1lb3V0KVxuXG4gICAgY29udGV4dC5faG92ZXJTdGF0ZSA9IEhvdmVyU3RhdGUuU0hPV1xuXG4gICAgaWYgKCFjb250ZXh0LmNvbmZpZy5kZWxheSB8fCAhY29udGV4dC5jb25maWcuZGVsYXkuc2hvdykge1xuICAgICAgY29udGV4dC5zaG93KClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnRleHQuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChjb250ZXh0Ll9ob3ZlclN0YXRlID09PSBIb3ZlclN0YXRlLlNIT1cpIHtcbiAgICAgICAgY29udGV4dC5zaG93KClcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0LmNvbmZpZy5kZWxheS5zaG93KVxuICB9XG5cbiAgX2xlYXZlKGV2ZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgZGF0YUtleSA9IHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVlcbiAgICBjb250ZXh0ID0gY29udGV4dCB8fCAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSlcblxuICAgIGlmICghY29udGV4dCkge1xuICAgICAgY29udGV4dCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKFxuICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LFxuICAgICAgICB0aGlzLl9nZXREZWxlZ2F0ZUNvbmZpZygpXG4gICAgICApXG4gICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSwgY29udGV4dClcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbXG4gICAgICAgIGV2ZW50LnR5cGUgPT09ICdmb2N1c291dCcgPyBUcmlnZ2VyLkZPQ1VTIDogVHJpZ2dlci5IT1ZFUlxuICAgICAgXSA9IGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKGNvbnRleHQuX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY2xlYXJUaW1lb3V0KGNvbnRleHQuX3RpbWVvdXQpXG5cbiAgICBjb250ZXh0Ll9ob3ZlclN0YXRlID0gSG92ZXJTdGF0ZS5PVVRcblxuICAgIGlmICghY29udGV4dC5jb25maWcuZGVsYXkgfHwgIWNvbnRleHQuY29uZmlnLmRlbGF5LmhpZGUpIHtcbiAgICAgIGNvbnRleHQuaGlkZSgpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb250ZXh0Ll90aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoY29udGV4dC5faG92ZXJTdGF0ZSA9PT0gSG92ZXJTdGF0ZS5PVVQpIHtcbiAgICAgICAgY29udGV4dC5oaWRlKClcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0LmNvbmZpZy5kZWxheS5oaWRlKVxuICB9XG5cbiAgX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSB7XG4gICAgZm9yIChjb25zdCB0cmlnZ2VyIGluIHRoaXMuX2FjdGl2ZVRyaWdnZXIpIHtcbiAgICAgIGlmICh0aGlzLl9hY3RpdmVUcmlnZ2VyW3RyaWdnZXJdKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbnN0IGRhdGFBdHRyaWJ1dGVzID0gJCh0aGlzLmVsZW1lbnQpLmRhdGEoKVxuXG4gICAgT2JqZWN0LmtleXMoZGF0YUF0dHJpYnV0ZXMpXG4gICAgICAuZm9yRWFjaCgoZGF0YUF0dHIpID0+IHtcbiAgICAgICAgaWYgKERJU0FMTE9XRURfQVRUUklCVVRFUy5pbmRleE9mKGRhdGFBdHRyKSAhPT0gLTEpIHtcbiAgICAgICAgICBkZWxldGUgZGF0YUF0dHJpYnV0ZXNbZGF0YUF0dHJdXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICBjb25maWcgPSB7XG4gICAgICAuLi50aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHQsXG4gICAgICAuLi5kYXRhQXR0cmlidXRlcyxcbiAgICAgIC4uLnR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcuZGVsYXkgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25maWcuZGVsYXkgPSB7XG4gICAgICAgIHNob3c6IGNvbmZpZy5kZWxheSxcbiAgICAgICAgaGlkZTogY29uZmlnLmRlbGF5XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcudGl0bGUgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25maWcudGl0bGUgPSBjb25maWcudGl0bGUudG9TdHJpbmcoKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLmNvbnRlbnQgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25maWcuY29udGVudCA9IGNvbmZpZy5jb250ZW50LnRvU3RyaW5nKClcbiAgICB9XG5cbiAgICBVdGlsLnR5cGVDaGVja0NvbmZpZyhcbiAgICAgIE5BTUUsXG4gICAgICBjb25maWcsXG4gICAgICB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRUeXBlXG4gICAgKVxuXG4gICAgaWYgKGNvbmZpZy5zYW5pdGl6ZSkge1xuICAgICAgY29uZmlnLnRlbXBsYXRlID0gc2FuaXRpemVIdG1sKGNvbmZpZy50ZW1wbGF0ZSwgY29uZmlnLndoaXRlTGlzdCwgY29uZmlnLnNhbml0aXplRm4pXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2dldERlbGVnYXRlQ29uZmlnKCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IHt9XG5cbiAgICBpZiAodGhpcy5jb25maWcpIHtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuY29uZmlnKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRba2V5XSAhPT0gdGhpcy5jb25maWdba2V5XSkge1xuICAgICAgICAgIGNvbmZpZ1trZXldID0gdGhpcy5jb25maWdba2V5XVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2NsZWFuVGlwQ2xhc3MoKSB7XG4gICAgY29uc3QgJHRpcCA9ICQodGhpcy5nZXRUaXBFbGVtZW50KCkpXG4gICAgY29uc3QgdGFiQ2xhc3MgPSAkdGlwLmF0dHIoJ2NsYXNzJykubWF0Y2goQlNDTFNfUFJFRklYX1JFR0VYKVxuICAgIGlmICh0YWJDbGFzcyAhPT0gbnVsbCAmJiB0YWJDbGFzcy5sZW5ndGgpIHtcbiAgICAgICR0aXAucmVtb3ZlQ2xhc3ModGFiQ2xhc3Muam9pbignJykpXG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZVBvcHBlclBsYWNlbWVudENoYW5nZShwb3BwZXJEYXRhKSB7XG4gICAgY29uc3QgcG9wcGVySW5zdGFuY2UgPSBwb3BwZXJEYXRhLmluc3RhbmNlXG4gICAgdGhpcy50aXAgPSBwb3BwZXJJbnN0YW5jZS5wb3BwZXJcbiAgICB0aGlzLl9jbGVhblRpcENsYXNzKClcbiAgICB0aGlzLmFkZEF0dGFjaG1lbnRDbGFzcyh0aGlzLl9nZXRBdHRhY2htZW50KHBvcHBlckRhdGEucGxhY2VtZW50KSlcbiAgfVxuXG4gIF9maXhUcmFuc2l0aW9uKCkge1xuICAgIGNvbnN0IHRpcCA9IHRoaXMuZ2V0VGlwRWxlbWVudCgpXG4gICAgY29uc3QgaW5pdENvbmZpZ0FuaW1hdGlvbiA9IHRoaXMuY29uZmlnLmFuaW1hdGlvblxuXG4gICAgaWYgKHRpcC5nZXRBdHRyaWJ1dGUoJ3gtcGxhY2VtZW50JykgIT09IG51bGwpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgICQodGlwKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuRkFERSlcbiAgICB0aGlzLmNvbmZpZy5hbmltYXRpb24gPSBmYWxzZVxuICAgIHRoaXMuaGlkZSgpXG4gICAgdGhpcy5zaG93KClcbiAgICB0aGlzLmNvbmZpZy5hbmltYXRpb24gPSBpbml0Q29uZmlnQW5pbWF0aW9uXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKVxuICAgICAgY29uc3QgX2NvbmZpZyA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZ1xuXG4gICAgICBpZiAoIWRhdGEgJiYgL2Rpc3Bvc2V8aGlkZS8udGVzdChjb25maWcpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBUb29sdGlwKHRoaXMsIF9jb25maWcpXG4gICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJC5mbltOQU1FXSA9IFRvb2x0aXAuX2pRdWVyeUludGVyZmFjZVxuJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IFRvb2x0aXBcbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gVG9vbHRpcC5falF1ZXJ5SW50ZXJmYWNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXBcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuNC4xKTogcG9wb3Zlci5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi90b29sdGlwJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FICAgICAgICAgICAgICAgID0gJ3BvcG92ZXInXG5jb25zdCBWRVJTSU9OICAgICAgICAgICAgID0gJzQuNC4xJ1xuY29uc3QgREFUQV9LRVkgICAgICAgICAgICA9ICdicy5wb3BvdmVyJ1xuY29uc3QgRVZFTlRfS0VZICAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgID0gJC5mbltOQU1FXVxuY29uc3QgQ0xBU1NfUFJFRklYICAgICAgICA9ICdicy1wb3BvdmVyJ1xuY29uc3QgQlNDTFNfUFJFRklYX1JFR0VYICA9IG5ldyBSZWdFeHAoYChefFxcXFxzKSR7Q0xBU1NfUFJFRklYfVxcXFxTK2AsICdnJylcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgLi4uVG9vbHRpcC5EZWZhdWx0LFxuICBwbGFjZW1lbnQgOiAncmlnaHQnLFxuICB0cmlnZ2VyICAgOiAnY2xpY2snLFxuICBjb250ZW50ICAgOiAnJyxcbiAgdGVtcGxhdGUgIDogJzxkaXYgY2xhc3M9XCJwb3BvdmVyXCIgcm9sZT1cInRvb2x0aXBcIj4nICtcbiAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJhcnJvd1wiPjwvZGl2PicgK1xuICAgICAgICAgICAgICAnPGgzIGNsYXNzPVwicG9wb3Zlci1oZWFkZXJcIj48L2gzPicgK1xuICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInBvcG92ZXItYm9keVwiPjwvZGl2PjwvZGl2Pidcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIC4uLlRvb2x0aXAuRGVmYXVsdFR5cGUsXG4gIGNvbnRlbnQgOiAnKHN0cmluZ3xlbGVtZW50fGZ1bmN0aW9uKSdcbn1cblxuY29uc3QgQ2xhc3NOYW1lID0ge1xuICBGQURFIDogJ2ZhZGUnLFxuICBTSE9XIDogJ3Nob3cnXG59XG5cbmNvbnN0IFNlbGVjdG9yID0ge1xuICBUSVRMRSAgIDogJy5wb3BvdmVyLWhlYWRlcicsXG4gIENPTlRFTlQgOiAnLnBvcG92ZXItYm9keSdcbn1cblxuY29uc3QgRXZlbnQgPSB7XG4gIEhJREUgICAgICAgOiBgaGlkZSR7RVZFTlRfS0VZfWAsXG4gIEhJRERFTiAgICAgOiBgaGlkZGVuJHtFVkVOVF9LRVl9YCxcbiAgU0hPVyAgICAgICA6IGBzaG93JHtFVkVOVF9LRVl9YCxcbiAgU0hPV04gICAgICA6IGBzaG93biR7RVZFTlRfS0VZfWAsXG4gIElOU0VSVEVEICAgOiBgaW5zZXJ0ZWQke0VWRU5UX0tFWX1gLFxuICBDTElDSyAgICAgIDogYGNsaWNrJHtFVkVOVF9LRVl9YCxcbiAgRk9DVVNJTiAgICA6IGBmb2N1c2luJHtFVkVOVF9LRVl9YCxcbiAgRk9DVVNPVVQgICA6IGBmb2N1c291dCR7RVZFTlRfS0VZfWAsXG4gIE1PVVNFRU5URVIgOiBgbW91c2VlbnRlciR7RVZFTlRfS0VZfWAsXG4gIE1PVVNFTEVBVkUgOiBgbW91c2VsZWF2ZSR7RVZFTlRfS0VZfWBcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIFBvcG92ZXIgZXh0ZW5kcyBUb29sdGlwIHtcbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICByZXR1cm4gVkVSU0lPTlxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgREFUQV9LRVkoKSB7XG4gICAgcmV0dXJuIERBVEFfS0VZXG4gIH1cblxuICBzdGF0aWMgZ2V0IEV2ZW50KCkge1xuICAgIHJldHVybiBFdmVudFxuICB9XG5cbiAgc3RhdGljIGdldCBFVkVOVF9LRVkoKSB7XG4gICAgcmV0dXJuIEVWRU5UX0tFWVxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIC8vIE92ZXJyaWRlc1xuXG4gIGlzV2l0aENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGl0bGUoKSB8fCB0aGlzLl9nZXRDb250ZW50KClcbiAgfVxuXG4gIGFkZEF0dGFjaG1lbnRDbGFzcyhhdHRhY2htZW50KSB7XG4gICAgJCh0aGlzLmdldFRpcEVsZW1lbnQoKSkuYWRkQ2xhc3MoYCR7Q0xBU1NfUFJFRklYfS0ke2F0dGFjaG1lbnR9YClcbiAgfVxuXG4gIGdldFRpcEVsZW1lbnQoKSB7XG4gICAgdGhpcy50aXAgPSB0aGlzLnRpcCB8fCAkKHRoaXMuY29uZmlnLnRlbXBsYXRlKVswXVxuICAgIHJldHVybiB0aGlzLnRpcFxuICB9XG5cbiAgc2V0Q29udGVudCgpIHtcbiAgICBjb25zdCAkdGlwID0gJCh0aGlzLmdldFRpcEVsZW1lbnQoKSlcblxuICAgIC8vIFdlIHVzZSBhcHBlbmQgZm9yIGh0bWwgb2JqZWN0cyB0byBtYWludGFpbiBqcyBldmVudHNcbiAgICB0aGlzLnNldEVsZW1lbnRDb250ZW50KCR0aXAuZmluZChTZWxlY3Rvci5USVRMRSksIHRoaXMuZ2V0VGl0bGUoKSlcbiAgICBsZXQgY29udGVudCA9IHRoaXMuX2dldENvbnRlbnQoKVxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29udGVudCA9IGNvbnRlbnQuY2FsbCh0aGlzLmVsZW1lbnQpXG4gICAgfVxuICAgIHRoaXMuc2V0RWxlbWVudENvbnRlbnQoJHRpcC5maW5kKFNlbGVjdG9yLkNPTlRFTlQpLCBjb250ZW50KVxuXG4gICAgJHRpcC5yZW1vdmVDbGFzcyhgJHtDbGFzc05hbWUuRkFERX0gJHtDbGFzc05hbWUuU0hPV31gKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbnRlbnQnKSB8fFxuICAgICAgdGhpcy5jb25maWcuY29udGVudFxuICB9XG5cbiAgX2NsZWFuVGlwQ2xhc3MoKSB7XG4gICAgY29uc3QgJHRpcCA9ICQodGhpcy5nZXRUaXBFbGVtZW50KCkpXG4gICAgY29uc3QgdGFiQ2xhc3MgPSAkdGlwLmF0dHIoJ2NsYXNzJykubWF0Y2goQlNDTFNfUFJFRklYX1JFR0VYKVxuICAgIGlmICh0YWJDbGFzcyAhPT0gbnVsbCAmJiB0YWJDbGFzcy5sZW5ndGggPiAwKSB7XG4gICAgICAkdGlwLnJlbW92ZUNsYXNzKHRhYkNsYXNzLmpvaW4oJycpKVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpXG4gICAgICBjb25zdCBfY29uZmlnID0gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgPyBjb25maWcgOiBudWxsXG5cbiAgICAgIGlmICghZGF0YSAmJiAvZGlzcG9zZXxoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IFBvcG92ZXIodGhpcywgX2NvbmZpZylcbiAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kLmZuW05BTUVdID0gUG9wb3Zlci5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gUG9wb3ZlclxuJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xuICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gIHJldHVybiBQb3BvdmVyLl9qUXVlcnlJbnRlcmZhY2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9wb3ZlclxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC40LjEpOiBzY3JvbGxzcHkuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSAgICAgICAgICAgICAgID0gJ3Njcm9sbHNweSdcbmNvbnN0IFZFUlNJT04gICAgICAgICAgICA9ICc0LjQuMSdcbmNvbnN0IERBVEFfS0VZICAgICAgICAgICA9ICdicy5zY3JvbGxzcHknXG5jb25zdCBFVkVOVF9LRVkgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZICAgICAgID0gJy5kYXRhLWFwaSdcbmNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV1cblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgb2Zmc2V0IDogMTAsXG4gIG1ldGhvZCA6ICdhdXRvJyxcbiAgdGFyZ2V0IDogJydcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIG9mZnNldCA6ICdudW1iZXInLFxuICBtZXRob2QgOiAnc3RyaW5nJyxcbiAgdGFyZ2V0IDogJyhzdHJpbmd8ZWxlbWVudCknXG59XG5cbmNvbnN0IEV2ZW50ID0ge1xuICBBQ1RJVkFURSAgICAgIDogYGFjdGl2YXRlJHtFVkVOVF9LRVl9YCxcbiAgU0NST0xMICAgICAgICA6IGBzY3JvbGwke0VWRU5UX0tFWX1gLFxuICBMT0FEX0RBVEFfQVBJIDogYGxvYWQke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG59XG5cbmNvbnN0IENsYXNzTmFtZSA9IHtcbiAgRFJPUERPV05fSVRFTSA6ICdkcm9wZG93bi1pdGVtJyxcbiAgRFJPUERPV05fTUVOVSA6ICdkcm9wZG93bi1tZW51JyxcbiAgQUNUSVZFICAgICAgICA6ICdhY3RpdmUnXG59XG5cbmNvbnN0IFNlbGVjdG9yID0ge1xuICBEQVRBX1NQWSAgICAgICAgOiAnW2RhdGEtc3B5PVwic2Nyb2xsXCJdJyxcbiAgQUNUSVZFICAgICAgICAgIDogJy5hY3RpdmUnLFxuICBOQVZfTElTVF9HUk9VUCAgOiAnLm5hdiwgLmxpc3QtZ3JvdXAnLFxuICBOQVZfTElOS1MgICAgICAgOiAnLm5hdi1saW5rJyxcbiAgTkFWX0lURU1TICAgICAgIDogJy5uYXYtaXRlbScsXG4gIExJU1RfSVRFTVMgICAgICA6ICcubGlzdC1ncm91cC1pdGVtJyxcbiAgRFJPUERPV04gICAgICAgIDogJy5kcm9wZG93bicsXG4gIERST1BET1dOX0lURU1TICA6ICcuZHJvcGRvd24taXRlbScsXG4gIERST1BET1dOX1RPR0dMRSA6ICcuZHJvcGRvd24tdG9nZ2xlJ1xufVxuXG5jb25zdCBPZmZzZXRNZXRob2QgPSB7XG4gIE9GRlNFVCAgIDogJ29mZnNldCcsXG4gIFBPU0lUSU9OIDogJ3Bvc2l0aW9uJ1xufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgU2Nyb2xsU3B5IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgdGhpcy5fZWxlbWVudCAgICAgICA9IGVsZW1lbnRcbiAgICB0aGlzLl9zY3JvbGxFbGVtZW50ID0gZWxlbWVudC50YWdOYW1lID09PSAnQk9EWScgPyB3aW5kb3cgOiBlbGVtZW50XG4gICAgdGhpcy5fY29uZmlnICAgICAgICA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5fc2VsZWN0b3IgICAgICA9IGAke3RoaXMuX2NvbmZpZy50YXJnZXR9ICR7U2VsZWN0b3IuTkFWX0xJTktTfSxgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7dGhpcy5fY29uZmlnLnRhcmdldH0gJHtTZWxlY3Rvci5MSVNUX0lURU1TfSxgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7dGhpcy5fY29uZmlnLnRhcmdldH0gJHtTZWxlY3Rvci5EUk9QRE9XTl9JVEVNU31gXG4gICAgdGhpcy5fb2Zmc2V0cyAgICAgICA9IFtdXG4gICAgdGhpcy5fdGFyZ2V0cyAgICAgICA9IFtdXG4gICAgdGhpcy5fYWN0aXZlVGFyZ2V0ICA9IG51bGxcbiAgICB0aGlzLl9zY3JvbGxIZWlnaHQgID0gMFxuXG4gICAgJCh0aGlzLl9zY3JvbGxFbGVtZW50KS5vbihFdmVudC5TQ1JPTEwsIChldmVudCkgPT4gdGhpcy5fcHJvY2VzcyhldmVudCkpXG5cbiAgICB0aGlzLnJlZnJlc2goKVxuICAgIHRoaXMuX3Byb2Nlc3MoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICByZXR1cm4gVkVSU0lPTlxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICAvLyBQdWJsaWNcblxuICByZWZyZXNoKCkge1xuICAgIGNvbnN0IGF1dG9NZXRob2QgPSB0aGlzLl9zY3JvbGxFbGVtZW50ID09PSB0aGlzLl9zY3JvbGxFbGVtZW50LndpbmRvd1xuICAgICAgPyBPZmZzZXRNZXRob2QuT0ZGU0VUIDogT2Zmc2V0TWV0aG9kLlBPU0lUSU9OXG5cbiAgICBjb25zdCBvZmZzZXRNZXRob2QgPSB0aGlzLl9jb25maWcubWV0aG9kID09PSAnYXV0bydcbiAgICAgID8gYXV0b01ldGhvZCA6IHRoaXMuX2NvbmZpZy5tZXRob2RcblxuICAgIGNvbnN0IG9mZnNldEJhc2UgPSBvZmZzZXRNZXRob2QgPT09IE9mZnNldE1ldGhvZC5QT1NJVElPTlxuICAgICAgPyB0aGlzLl9nZXRTY3JvbGxUb3AoKSA6IDBcblxuICAgIHRoaXMuX29mZnNldHMgPSBbXVxuICAgIHRoaXMuX3RhcmdldHMgPSBbXVxuXG4gICAgdGhpcy5fc2Nyb2xsSGVpZ2h0ID0gdGhpcy5fZ2V0U2Nyb2xsSGVpZ2h0KClcblxuICAgIGNvbnN0IHRhcmdldHMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5fc2VsZWN0b3IpKVxuXG4gICAgdGFyZ2V0c1xuICAgICAgLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBsZXQgdGFyZ2V0XG4gICAgICAgIGNvbnN0IHRhcmdldFNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpXG5cbiAgICAgICAgaWYgKHRhcmdldFNlbGVjdG9yKSB7XG4gICAgICAgICAgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXRTZWxlY3RvcilcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICBjb25zdCB0YXJnZXRCQ1IgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICBpZiAodGFyZ2V0QkNSLndpZHRoIHx8IHRhcmdldEJDUi5oZWlnaHQpIHtcbiAgICAgICAgICAgIC8vIFRPRE8gKGZhdCk6IHJlbW92ZSBza2V0Y2ggcmVsaWFuY2Ugb24galF1ZXJ5IHBvc2l0aW9uL29mZnNldFxuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgJCh0YXJnZXQpW29mZnNldE1ldGhvZF0oKS50b3AgKyBvZmZzZXRCYXNlLFxuICAgICAgICAgICAgICB0YXJnZXRTZWxlY3RvclxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0pXG4gICAgICAuc29ydCgoYSwgYikgPT4gYVswXSAtIGJbMF0pXG4gICAgICAuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICB0aGlzLl9vZmZzZXRzLnB1c2goaXRlbVswXSlcbiAgICAgICAgdGhpcy5fdGFyZ2V0cy5wdXNoKGl0ZW1bMV0pXG4gICAgICB9KVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkpXG4gICAgJCh0aGlzLl9zY3JvbGxFbGVtZW50KS5vZmYoRVZFTlRfS0VZKVxuXG4gICAgdGhpcy5fZWxlbWVudCAgICAgICA9IG51bGxcbiAgICB0aGlzLl9zY3JvbGxFbGVtZW50ID0gbnVsbFxuICAgIHRoaXMuX2NvbmZpZyAgICAgICAgPSBudWxsXG4gICAgdGhpcy5fc2VsZWN0b3IgICAgICA9IG51bGxcbiAgICB0aGlzLl9vZmZzZXRzICAgICAgID0gbnVsbFxuICAgIHRoaXMuX3RhcmdldHMgICAgICAgPSBudWxsXG4gICAgdGhpcy5fYWN0aXZlVGFyZ2V0ICA9IG51bGxcbiAgICB0aGlzLl9zY3JvbGxIZWlnaHQgID0gbnVsbFxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLnR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcudGFyZ2V0ICE9PSAnc3RyaW5nJykge1xuICAgICAgbGV0IGlkID0gJChjb25maWcudGFyZ2V0KS5hdHRyKCdpZCcpXG4gICAgICBpZiAoIWlkKSB7XG4gICAgICAgIGlkID0gVXRpbC5nZXRVSUQoTkFNRSlcbiAgICAgICAgJChjb25maWcudGFyZ2V0KS5hdHRyKCdpZCcsIGlkKVxuICAgICAgfVxuICAgICAgY29uZmlnLnRhcmdldCA9IGAjJHtpZH1gXG4gICAgfVxuXG4gICAgVXRpbC50eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCBEZWZhdWx0VHlwZSlcblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9nZXRTY3JvbGxUb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbEVsZW1lbnQgPT09IHdpbmRvd1xuICAgICAgPyB0aGlzLl9zY3JvbGxFbGVtZW50LnBhZ2VZT2Zmc2V0IDogdGhpcy5fc2Nyb2xsRWxlbWVudC5zY3JvbGxUb3BcbiAgfVxuXG4gIF9nZXRTY3JvbGxIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IHx8IE1hdGgubWF4KFxuICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQsXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0XG4gICAgKVxuICB9XG5cbiAgX2dldE9mZnNldEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2Nyb2xsRWxlbWVudCA9PT0gd2luZG93XG4gICAgICA/IHdpbmRvdy5pbm5lckhlaWdodCA6IHRoaXMuX3Njcm9sbEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0XG4gIH1cblxuICBfcHJvY2VzcygpIHtcbiAgICBjb25zdCBzY3JvbGxUb3AgICAgPSB0aGlzLl9nZXRTY3JvbGxUb3AoKSArIHRoaXMuX2NvbmZpZy5vZmZzZXRcbiAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSB0aGlzLl9nZXRTY3JvbGxIZWlnaHQoKVxuICAgIGNvbnN0IG1heFNjcm9sbCAgICA9IHRoaXMuX2NvbmZpZy5vZmZzZXQgK1xuICAgICAgc2Nyb2xsSGVpZ2h0IC1cbiAgICAgIHRoaXMuX2dldE9mZnNldEhlaWdodCgpXG5cbiAgICBpZiAodGhpcy5fc2Nyb2xsSGVpZ2h0ICE9PSBzY3JvbGxIZWlnaHQpIHtcbiAgICAgIHRoaXMucmVmcmVzaCgpXG4gICAgfVxuXG4gICAgaWYgKHNjcm9sbFRvcCA+PSBtYXhTY3JvbGwpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuX3RhcmdldHNbdGhpcy5fdGFyZ2V0cy5sZW5ndGggLSAxXVxuXG4gICAgICBpZiAodGhpcy5fYWN0aXZlVGFyZ2V0ICE9PSB0YXJnZXQpIHtcbiAgICAgICAgdGhpcy5fYWN0aXZhdGUodGFyZ2V0KVxuICAgICAgfVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2FjdGl2ZVRhcmdldCAmJiBzY3JvbGxUb3AgPCB0aGlzLl9vZmZzZXRzWzBdICYmIHRoaXMuX29mZnNldHNbMF0gPiAwKSB7XG4gICAgICB0aGlzLl9hY3RpdmVUYXJnZXQgPSBudWxsXG4gICAgICB0aGlzLl9jbGVhcigpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBvZmZzZXRMZW5ndGggPSB0aGlzLl9vZmZzZXRzLmxlbmd0aFxuICAgIGZvciAobGV0IGkgPSBvZmZzZXRMZW5ndGg7IGktLTspIHtcbiAgICAgIGNvbnN0IGlzQWN0aXZlVGFyZ2V0ID0gdGhpcy5fYWN0aXZlVGFyZ2V0ICE9PSB0aGlzLl90YXJnZXRzW2ldICYmXG4gICAgICAgICAgc2Nyb2xsVG9wID49IHRoaXMuX29mZnNldHNbaV0gJiZcbiAgICAgICAgICAodHlwZW9mIHRoaXMuX29mZnNldHNbaSArIDFdID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICAgICAgICBzY3JvbGxUb3AgPCB0aGlzLl9vZmZzZXRzW2kgKyAxXSlcblxuICAgICAgaWYgKGlzQWN0aXZlVGFyZ2V0KSB7XG4gICAgICAgIHRoaXMuX2FjdGl2YXRlKHRoaXMuX3RhcmdldHNbaV0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2FjdGl2YXRlKHRhcmdldCkge1xuICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IHRhcmdldFxuXG4gICAgdGhpcy5fY2xlYXIoKVxuXG4gICAgY29uc3QgcXVlcmllcyA9IHRoaXMuX3NlbGVjdG9yXG4gICAgICAuc3BsaXQoJywnKVxuICAgICAgLm1hcCgoc2VsZWN0b3IpID0+IGAke3NlbGVjdG9yfVtkYXRhLXRhcmdldD1cIiR7dGFyZ2V0fVwiXSwke3NlbGVjdG9yfVtocmVmPVwiJHt0YXJnZXR9XCJdYClcblxuICAgIGNvbnN0ICRsaW5rID0gJChbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocXVlcmllcy5qb2luKCcsJykpKSlcblxuICAgIGlmICgkbGluay5oYXNDbGFzcyhDbGFzc05hbWUuRFJPUERPV05fSVRFTSkpIHtcbiAgICAgICRsaW5rLmNsb3Nlc3QoU2VsZWN0b3IuRFJPUERPV04pLmZpbmQoU2VsZWN0b3IuRFJPUERPV05fVE9HR0xFKS5hZGRDbGFzcyhDbGFzc05hbWUuQUNUSVZFKVxuICAgICAgJGxpbmsuYWRkQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU2V0IHRyaWdnZXJlZCBsaW5rIGFzIGFjdGl2ZVxuICAgICAgJGxpbmsuYWRkQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcbiAgICAgIC8vIFNldCB0cmlnZ2VyZWQgbGlua3MgcGFyZW50cyBhcyBhY3RpdmVcbiAgICAgIC8vIFdpdGggYm90aCA8dWw+IGFuZCA8bmF2PiBtYXJrdXAgYSBwYXJlbnQgaXMgdGhlIHByZXZpb3VzIHNpYmxpbmcgb2YgYW55IG5hdiBhbmNlc3RvclxuICAgICAgJGxpbmsucGFyZW50cyhTZWxlY3Rvci5OQVZfTElTVF9HUk9VUCkucHJldihgJHtTZWxlY3Rvci5OQVZfTElOS1N9LCAke1NlbGVjdG9yLkxJU1RfSVRFTVN9YCkuYWRkQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcbiAgICAgIC8vIEhhbmRsZSBzcGVjaWFsIGNhc2Ugd2hlbiAubmF2LWxpbmsgaXMgaW5zaWRlIC5uYXYtaXRlbVxuICAgICAgJGxpbmsucGFyZW50cyhTZWxlY3Rvci5OQVZfTElTVF9HUk9VUCkucHJldihTZWxlY3Rvci5OQVZfSVRFTVMpLmNoaWxkcmVuKFNlbGVjdG9yLk5BVl9MSU5LUykuYWRkQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcbiAgICB9XG5cbiAgICAkKHRoaXMuX3Njcm9sbEVsZW1lbnQpLnRyaWdnZXIoRXZlbnQuQUNUSVZBVEUsIHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRhcmdldFxuICAgIH0pXG4gIH1cblxuICBfY2xlYXIoKSB7XG4gICAgW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX3NlbGVjdG9yKSlcbiAgICAgIC5maWx0ZXIoKG5vZGUpID0+IG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKENsYXNzTmFtZS5BQ1RJVkUpKVxuICAgICAgLmZvckVhY2goKG5vZGUpID0+IG5vZGUuY2xhc3NMaXN0LnJlbW92ZShDbGFzc05hbWUuQUNUSVZFKSlcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpXG4gICAgICBjb25zdCBfY29uZmlnID0gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnXG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IFNjcm9sbFNweSh0aGlzLCBfY29uZmlnKVxuICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJCh3aW5kb3cpLm9uKEV2ZW50LkxPQURfREFUQV9BUEksICgpID0+IHtcbiAgY29uc3Qgc2Nyb2xsU3B5cyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5EQVRBX1NQWSkpXG4gIGNvbnN0IHNjcm9sbFNweXNMZW5ndGggPSBzY3JvbGxTcHlzLmxlbmd0aFxuXG4gIGZvciAobGV0IGkgPSBzY3JvbGxTcHlzTGVuZ3RoOyBpLS07KSB7XG4gICAgY29uc3QgJHNweSA9ICQoc2Nyb2xsU3B5c1tpXSlcbiAgICBTY3JvbGxTcHkuX2pRdWVyeUludGVyZmFjZS5jYWxsKCRzcHksICRzcHkuZGF0YSgpKVxuICB9XG59KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kLmZuW05BTUVdID0gU2Nyb2xsU3B5Ll9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBTY3JvbGxTcHlcbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gU2Nyb2xsU3B5Ll9qUXVlcnlJbnRlcmZhY2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsU3B5XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjQuMSk6IHRhYi5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FICAgICAgICAgICAgICAgPSAndGFiJ1xuY29uc3QgVkVSU0lPTiAgICAgICAgICAgID0gJzQuNC4xJ1xuY29uc3QgREFUQV9LRVkgICAgICAgICAgID0gJ2JzLnRhYidcbmNvbnN0IEVWRU5UX0tFWSAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgICAgICAgPSAnLmRhdGEtYXBpJ1xuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXVxuXG5jb25zdCBFdmVudCA9IHtcbiAgSElERSAgICAgICAgICAgOiBgaGlkZSR7RVZFTlRfS0VZfWAsXG4gIEhJRERFTiAgICAgICAgIDogYGhpZGRlbiR7RVZFTlRfS0VZfWAsXG4gIFNIT1cgICAgICAgICAgIDogYHNob3cke0VWRU5UX0tFWX1gLFxuICBTSE9XTiAgICAgICAgICA6IGBzaG93biR7RVZFTlRfS0VZfWAsXG4gIENMSUNLX0RBVEFfQVBJIDogYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxufVxuXG5jb25zdCBDbGFzc05hbWUgPSB7XG4gIERST1BET1dOX01FTlUgOiAnZHJvcGRvd24tbWVudScsXG4gIEFDVElWRSAgICAgICAgOiAnYWN0aXZlJyxcbiAgRElTQUJMRUQgICAgICA6ICdkaXNhYmxlZCcsXG4gIEZBREUgICAgICAgICAgOiAnZmFkZScsXG4gIFNIT1cgICAgICAgICAgOiAnc2hvdydcbn1cblxuY29uc3QgU2VsZWN0b3IgPSB7XG4gIERST1BET1dOICAgICAgICAgICAgICA6ICcuZHJvcGRvd24nLFxuICBOQVZfTElTVF9HUk9VUCAgICAgICAgOiAnLm5hdiwgLmxpc3QtZ3JvdXAnLFxuICBBQ1RJVkUgICAgICAgICAgICAgICAgOiAnLmFjdGl2ZScsXG4gIEFDVElWRV9VTCAgICAgICAgICAgICA6ICc+IGxpID4gLmFjdGl2ZScsXG4gIERBVEFfVE9HR0xFICAgICAgICAgICA6ICdbZGF0YS10b2dnbGU9XCJ0YWJcIl0sIFtkYXRhLXRvZ2dsZT1cInBpbGxcIl0sIFtkYXRhLXRvZ2dsZT1cImxpc3RcIl0nLFxuICBEUk9QRE9XTl9UT0dHTEUgICAgICAgOiAnLmRyb3Bkb3duLXRvZ2dsZScsXG4gIERST1BET1dOX0FDVElWRV9DSElMRCA6ICc+IC5kcm9wZG93bi1tZW51IC5hY3RpdmUnXG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBUYWIge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHNob3coKSB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZSAmJlxuICAgICAgICB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFICYmXG4gICAgICAgICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSkgfHxcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuRElTQUJMRUQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgdGFyZ2V0XG4gICAgbGV0IHByZXZpb3VzXG4gICAgY29uc3QgbGlzdEVsZW1lbnQgPSAkKHRoaXMuX2VsZW1lbnQpLmNsb3Nlc3QoU2VsZWN0b3IuTkFWX0xJU1RfR1JPVVApWzBdXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcblxuICAgIGlmIChsaXN0RWxlbWVudCkge1xuICAgICAgY29uc3QgaXRlbVNlbGVjdG9yID0gbGlzdEVsZW1lbnQubm9kZU5hbWUgPT09ICdVTCcgfHwgbGlzdEVsZW1lbnQubm9kZU5hbWUgPT09ICdPTCcgPyBTZWxlY3Rvci5BQ1RJVkVfVUwgOiBTZWxlY3Rvci5BQ1RJVkVcbiAgICAgIHByZXZpb3VzID0gJC5tYWtlQXJyYXkoJChsaXN0RWxlbWVudCkuZmluZChpdGVtU2VsZWN0b3IpKVxuICAgICAgcHJldmlvdXMgPSBwcmV2aW91c1twcmV2aW91cy5sZW5ndGggLSAxXVxuICAgIH1cblxuICAgIGNvbnN0IGhpZGVFdmVudCA9ICQuRXZlbnQoRXZlbnQuSElERSwge1xuICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgIH0pXG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSAkLkV2ZW50KEV2ZW50LlNIT1csIHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHByZXZpb3VzXG4gICAgfSlcblxuICAgIGlmIChwcmV2aW91cykge1xuICAgICAgJChwcmV2aW91cykudHJpZ2dlcihoaWRlRXZlbnQpXG4gICAgfVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHNob3dFdmVudClcblxuICAgIGlmIChzaG93RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgfHxcbiAgICAgICAgaGlkZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gICAgfVxuXG4gICAgdGhpcy5fYWN0aXZhdGUoXG4gICAgICB0aGlzLl9lbGVtZW50LFxuICAgICAgbGlzdEVsZW1lbnRcbiAgICApXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGhpZGRlbkV2ZW50ID0gJC5FdmVudChFdmVudC5ISURERU4sIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgICAgfSlcblxuICAgICAgY29uc3Qgc2hvd25FdmVudCA9ICQuRXZlbnQoRXZlbnQuU0hPV04sIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogcHJldmlvdXNcbiAgICAgIH0pXG5cbiAgICAgICQocHJldmlvdXMpLnRyaWdnZXIoaGlkZGVuRXZlbnQpXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc2hvd25FdmVudClcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0KSB7XG4gICAgICB0aGlzLl9hY3RpdmF0ZSh0YXJnZXQsIHRhcmdldC5wYXJlbnROb2RlLCBjb21wbGV0ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcGxldGUoKVxuICAgIH1cbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKVxuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2FjdGl2YXRlKGVsZW1lbnQsIGNvbnRhaW5lciwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBhY3RpdmVFbGVtZW50cyA9IGNvbnRhaW5lciAmJiAoY29udGFpbmVyLm5vZGVOYW1lID09PSAnVUwnIHx8IGNvbnRhaW5lci5ub2RlTmFtZSA9PT0gJ09MJylcbiAgICAgID8gJChjb250YWluZXIpLmZpbmQoU2VsZWN0b3IuQUNUSVZFX1VMKVxuICAgICAgOiAkKGNvbnRhaW5lcikuY2hpbGRyZW4oU2VsZWN0b3IuQUNUSVZFKVxuXG4gICAgY29uc3QgYWN0aXZlID0gYWN0aXZlRWxlbWVudHNbMF1cbiAgICBjb25zdCBpc1RyYW5zaXRpb25pbmcgPSBjYWxsYmFjayAmJiAoYWN0aXZlICYmICQoYWN0aXZlKS5oYXNDbGFzcyhDbGFzc05hbWUuRkFERSkpXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB0aGlzLl90cmFuc2l0aW9uQ29tcGxldGUoXG4gICAgICBlbGVtZW50LFxuICAgICAgYWN0aXZlLFxuICAgICAgY2FsbGJhY2tcbiAgICApXG5cbiAgICBpZiAoYWN0aXZlICYmIGlzVHJhbnNpdGlvbmluZykge1xuICAgICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudChhY3RpdmUpXG5cbiAgICAgICQoYWN0aXZlKVxuICAgICAgICAucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG4gICAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY29tcGxldGUpXG4gICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBsZXRlKClcbiAgICB9XG4gIH1cblxuICBfdHJhbnNpdGlvbkNvbXBsZXRlKGVsZW1lbnQsIGFjdGl2ZSwgY2FsbGJhY2spIHtcbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAkKGFjdGl2ZSkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcblxuICAgICAgY29uc3QgZHJvcGRvd25DaGlsZCA9ICQoYWN0aXZlLnBhcmVudE5vZGUpLmZpbmQoXG4gICAgICAgIFNlbGVjdG9yLkRST1BET1dOX0FDVElWRV9DSElMRFxuICAgICAgKVswXVxuXG4gICAgICBpZiAoZHJvcGRvd25DaGlsZCkge1xuICAgICAgICAkKGRyb3Bkb3duQ2hpbGQpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5BQ1RJVkUpXG4gICAgICB9XG5cbiAgICAgIGlmIChhY3RpdmUuZ2V0QXR0cmlidXRlKCdyb2xlJykgPT09ICd0YWInKSB7XG4gICAgICAgIGFjdGl2ZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCBmYWxzZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAkKGVsZW1lbnQpLmFkZENsYXNzKENsYXNzTmFtZS5BQ1RJVkUpXG4gICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdyb2xlJykgPT09ICd0YWInKSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIHRydWUpXG4gICAgfVxuXG4gICAgVXRpbC5yZWZsb3coZWxlbWVudClcblxuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDbGFzc05hbWUuRkFERSkpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChDbGFzc05hbWUuU0hPVylcbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlICYmICQoZWxlbWVudC5wYXJlbnROb2RlKS5oYXNDbGFzcyhDbGFzc05hbWUuRFJPUERPV05fTUVOVSkpIHtcbiAgICAgIGNvbnN0IGRyb3Bkb3duRWxlbWVudCA9ICQoZWxlbWVudCkuY2xvc2VzdChTZWxlY3Rvci5EUk9QRE9XTilbMF1cblxuICAgICAgaWYgKGRyb3Bkb3duRWxlbWVudCkge1xuICAgICAgICBjb25zdCBkcm9wZG93blRvZ2dsZUxpc3QgPSBbXS5zbGljZS5jYWxsKGRyb3Bkb3duRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLkRST1BET1dOX1RPR0dMRSkpXG5cbiAgICAgICAgJChkcm9wZG93blRvZ2dsZUxpc3QpLmFkZENsYXNzKENsYXNzTmFtZS5BQ1RJVkUpXG4gICAgICB9XG5cbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSlcbiAgICB9XG5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKClcbiAgICB9XG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKVxuICAgICAgbGV0IGRhdGEgPSAkdGhpcy5kYXRhKERBVEFfS0VZKVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBUYWIodGhpcylcbiAgICAgICAgJHRoaXMuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kKGRvY3VtZW50KVxuICAub24oRXZlbnQuQ0xJQ0tfREFUQV9BUEksIFNlbGVjdG9yLkRBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgVGFiLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRoaXMpLCAnc2hvdycpXG4gIH0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQuZm5bTkFNRV0gPSBUYWIuX2pRdWVyeUludGVyZmFjZVxuJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IFRhYlxuJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xuICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gIHJldHVybiBUYWIuX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuNC4xKTogdG9hc3QuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSAgICAgICAgICAgICAgID0gJ3RvYXN0J1xuY29uc3QgVkVSU0lPTiAgICAgICAgICAgID0gJzQuNC4xJ1xuY29uc3QgREFUQV9LRVkgICAgICAgICAgID0gJ2JzLnRvYXN0J1xuY29uc3QgRVZFTlRfS0VZICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV1cblxuY29uc3QgRXZlbnQgPSB7XG4gIENMSUNLX0RJU01JU1MgOiBgY2xpY2suZGlzbWlzcyR7RVZFTlRfS0VZfWAsXG4gIEhJREUgICAgICAgICAgOiBgaGlkZSR7RVZFTlRfS0VZfWAsXG4gIEhJRERFTiAgICAgICAgOiBgaGlkZGVuJHtFVkVOVF9LRVl9YCxcbiAgU0hPVyAgICAgICAgICA6IGBzaG93JHtFVkVOVF9LRVl9YCxcbiAgU0hPV04gICAgICAgICA6IGBzaG93biR7RVZFTlRfS0VZfWBcbn1cblxuY29uc3QgQ2xhc3NOYW1lID0ge1xuICBGQURFICAgIDogJ2ZhZGUnLFxuICBISURFICAgIDogJ2hpZGUnLFxuICBTSE9XICAgIDogJ3Nob3cnLFxuICBTSE9XSU5HIDogJ3Nob3dpbmcnXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBhbmltYXRpb24gOiAnYm9vbGVhbicsXG4gIGF1dG9oaWRlICA6ICdib29sZWFuJyxcbiAgZGVsYXkgICAgIDogJ251bWJlcidcbn1cblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYW5pbWF0aW9uIDogdHJ1ZSxcbiAgYXV0b2hpZGUgIDogdHJ1ZSxcbiAgZGVsYXkgICAgIDogNTAwXG59XG5cbmNvbnN0IFNlbGVjdG9yID0ge1xuICBEQVRBX0RJU01JU1MgOiAnW2RhdGEtZGlzbWlzcz1cInRvYXN0XCJdJ1xufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgVG9hc3Qge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuX2NvbmZpZyAgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX3RpbWVvdXQgPSBudWxsXG4gICAgdGhpcy5fc2V0TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHNob3coKSB7XG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gJC5FdmVudChFdmVudC5TSE9XKVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHNob3dFdmVudClcbiAgICBpZiAoc2hvd0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmFuaW1hdGlvbikge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENsYXNzTmFtZS5GQURFKVxuICAgIH1cblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENsYXNzTmFtZS5TSE9XSU5HKVxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoRXZlbnQuU0hPV04pXG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcuYXV0b2hpZGUpIHtcbiAgICAgICAgdGhpcy5fdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICAgIH0sIHRoaXMuX2NvbmZpZy5kZWxheSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ2xhc3NOYW1lLkhJREUpXG4gICAgVXRpbC5yZWZsb3codGhpcy5fZWxlbWVudClcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ2xhc3NOYW1lLlNIT1dJTkcpXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcblxuICAgICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKVxuICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb21wbGV0ZSgpXG4gICAgfVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENsYXNzTmFtZS5TSE9XKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gJC5FdmVudChFdmVudC5ISURFKVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKGhpZGVFdmVudClcbiAgICBpZiAoaGlkZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9jbG9zZSgpXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KVxuICAgIHRoaXMuX3RpbWVvdXQgPSBudWxsXG5cbiAgICBpZiAodGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ2xhc3NOYW1lLlNIT1cpKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ2xhc3NOYW1lLlNIT1cpXG4gICAgfVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KS5vZmYoRXZlbnQuQ0xJQ0tfRElTTUlTUylcblxuICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSlcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbFxuICAgIHRoaXMuX2NvbmZpZyAgPSBudWxsXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uJCh0aGlzLl9lbGVtZW50KS5kYXRhKCksXG4gICAgICAuLi50eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fVxuICAgIH1cblxuICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKFxuICAgICAgTkFNRSxcbiAgICAgIGNvbmZpZyxcbiAgICAgIHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFR5cGVcbiAgICApXG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfc2V0TGlzdGVuZXJzKCkge1xuICAgICQodGhpcy5fZWxlbWVudCkub24oXG4gICAgICBFdmVudC5DTElDS19ESVNNSVNTLFxuICAgICAgU2VsZWN0b3IuREFUQV9ESVNNSVNTLFxuICAgICAgKCkgPT4gdGhpcy5oaWRlKClcbiAgICApXG4gIH1cblxuICBfY2xvc2UoKSB7XG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ2xhc3NOYW1lLkhJREUpXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoRXZlbnQuSElEREVOKVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDbGFzc05hbWUuU0hPVylcbiAgICBpZiAodGhpcy5fY29uZmlnLmFuaW1hdGlvbikge1xuICAgICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY29tcGxldGUpXG4gICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBsZXRlKClcbiAgICB9XG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0ICRlbGVtZW50ID0gJCh0aGlzKVxuICAgICAgbGV0IGRhdGEgICAgICAgPSAkZWxlbWVudC5kYXRhKERBVEFfS0VZKVxuICAgICAgY29uc3QgX2NvbmZpZyAgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWdcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgVG9hc3QodGhpcywgX2NvbmZpZylcbiAgICAgICAgJGVsZW1lbnQuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY29uZmlnXSh0aGlzKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJC5mbltOQU1FXSAgICAgICAgICAgICA9IFRvYXN0Ll9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBUb2FzdFxuJC5mbltOQU1FXS5ub0NvbmZsaWN0ICA9ICgpID0+IHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gVG9hc3QuX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2FzdFxuIiwiZXhwb3J0IGRlZmF1bHQgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJztcbiIsImltcG9ydCBpc0Jyb3dzZXIgZnJvbSAnLi9pc0Jyb3dzZXInO1xuXG5jb25zdCB0aW1lb3V0RHVyYXRpb24gPSAoZnVuY3Rpb24oKXtcbiAgY29uc3QgbG9uZ2VyVGltZW91dEJyb3dzZXJzID0gWydFZGdlJywgJ1RyaWRlbnQnLCAnRmlyZWZveCddO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxvbmdlclRpbWVvdXRCcm93c2Vycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChpc0Jyb3dzZXIgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKGxvbmdlclRpbWVvdXRCcm93c2Vyc1tpXSkgPj0gMCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICB9XG4gIHJldHVybiAwO1xufSgpKTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1pY3JvdGFza0RlYm91bmNlKGZuKSB7XG4gIGxldCBjYWxsZWQgPSBmYWxzZVxuICByZXR1cm4gKCkgPT4ge1xuICAgIGlmIChjYWxsZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjYWxsZWQgPSB0cnVlXG4gICAgd2luZG93LlByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgY2FsbGVkID0gZmFsc2VcbiAgICAgIGZuKClcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0YXNrRGVib3VuY2UoZm4pIHtcbiAgbGV0IHNjaGVkdWxlZCA9IGZhbHNlO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGlmICghc2NoZWR1bGVkKSB7XG4gICAgICBzY2hlZHVsZWQgPSB0cnVlO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNjaGVkdWxlZCA9IGZhbHNlO1xuICAgICAgICBmbigpO1xuICAgICAgfSwgdGltZW91dER1cmF0aW9uKTtcbiAgICB9XG4gIH07XG59XG5cbmNvbnN0IHN1cHBvcnRzTWljcm9UYXNrcyA9IGlzQnJvd3NlciAmJiB3aW5kb3cuUHJvbWlzZVxuXG5cbi8qKlxuKiBDcmVhdGUgYSBkZWJvdW5jZWQgdmVyc2lvbiBvZiBhIG1ldGhvZCwgdGhhdCdzIGFzeW5jaHJvbm91c2x5IGRlZmVycmVkXG4qIGJ1dCBjYWxsZWQgaW4gdGhlIG1pbmltdW0gdGltZSBwb3NzaWJsZS5cbipcbiogQG1ldGhvZFxuKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4qIEBhcmd1bWVudCB7RnVuY3Rpb259IGZuXG4qIEByZXR1cm5zIHtGdW5jdGlvbn1cbiovXG5leHBvcnQgZGVmYXVsdCAoc3VwcG9ydHNNaWNyb1Rhc2tzXG4gID8gbWljcm90YXNrRGVib3VuY2VcbiAgOiB0YXNrRGVib3VuY2UpO1xuIiwiLyoqXG4gKiBDaGVjayBpZiB0aGUgZ2l2ZW4gdmFyaWFibGUgaXMgYSBmdW5jdGlvblxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtBbnl9IGZ1bmN0aW9uVG9DaGVjayAtIHZhcmlhYmxlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gYW5zd2VyIHRvOiBpcyBhIGZ1bmN0aW9uP1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0Z1bmN0aW9uKGZ1bmN0aW9uVG9DaGVjaykge1xuICBjb25zdCBnZXRUeXBlID0ge307XG4gIHJldHVybiAoXG4gICAgZnVuY3Rpb25Ub0NoZWNrICYmXG4gICAgZ2V0VHlwZS50b1N0cmluZy5jYWxsKGZ1bmN0aW9uVG9DaGVjaykgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSdcbiAgKTtcbn1cbiIsIi8qKlxuICogR2V0IENTUyBjb21wdXRlZCBwcm9wZXJ0eSBvZiB0aGUgZ2l2ZW4gZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFZW1lbnR9IGVsZW1lbnRcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBwcm9wZXJ0eVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZWxlbWVudCwgcHJvcGVydHkpIHtcbiAgaWYgKGVsZW1lbnQubm9kZVR5cGUgIT09IDEpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgLy8gTk9URTogMSBET00gYWNjZXNzIGhlcmVcbiAgY29uc3Qgd2luZG93ID0gZWxlbWVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICBjb25zdCBjc3MgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBudWxsKTtcbiAgcmV0dXJuIHByb3BlcnR5ID8gY3NzW3Byb3BlcnR5XSA6IGNzcztcbn1cbiIsIi8qKlxuICogUmV0dXJucyB0aGUgcGFyZW50Tm9kZSBvciB0aGUgaG9zdCBvZiB0aGUgZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7RWxlbWVudH0gcGFyZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFBhcmVudE5vZGUoZWxlbWVudCkge1xuICBpZiAoZWxlbWVudC5ub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnQucGFyZW50Tm9kZSB8fCBlbGVtZW50Lmhvc3Q7XG59XG4iLCJpbXBvcnQgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5IGZyb20gJy4vZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5JztcbmltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gJy4vZ2V0UGFyZW50Tm9kZSc7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgc2Nyb2xsaW5nIHBhcmVudCBvZiB0aGUgZ2l2ZW4gZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7RWxlbWVudH0gc2Nyb2xsIHBhcmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTY3JvbGxQYXJlbnQoZWxlbWVudCkge1xuICAvLyBSZXR1cm4gYm9keSwgYGdldFNjcm9sbGAgd2lsbCB0YWtlIGNhcmUgdG8gZ2V0IHRoZSBjb3JyZWN0IGBzY3JvbGxUb3BgIGZyb20gaXRcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmJvZHlcbiAgfVxuXG4gIHN3aXRjaCAoZWxlbWVudC5ub2RlTmFtZSkge1xuICAgIGNhc2UgJ0hUTUwnOlxuICAgIGNhc2UgJ0JPRFknOlxuICAgICAgcmV0dXJuIGVsZW1lbnQub3duZXJEb2N1bWVudC5ib2R5XG4gICAgY2FzZSAnI2RvY3VtZW50JzpcbiAgICAgIHJldHVybiBlbGVtZW50LmJvZHlcbiAgfVxuXG4gIC8vIEZpcmVmb3ggd2FudCB1cyB0byBjaGVjayBgLXhgIGFuZCBgLXlgIHZhcmlhdGlvbnMgYXMgd2VsbFxuICBjb25zdCB7IG92ZXJmbG93LCBvdmVyZmxvd1gsIG92ZXJmbG93WSB9ID0gZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsZW1lbnQpO1xuICBpZiAoLyhhdXRvfHNjcm9sbHxvdmVybGF5KS8udGVzdChvdmVyZmxvdyArIG92ZXJmbG93WSArIG92ZXJmbG93WCkpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiBnZXRTY3JvbGxQYXJlbnQoZ2V0UGFyZW50Tm9kZShlbGVtZW50KSk7XG59XG4iLCIvKipcbiAqIFJldHVybnMgdGhlIHJlZmVyZW5jZSBub2RlIG9mIHRoZSByZWZlcmVuY2Ugb2JqZWN0LCBvciB0aGUgcmVmZXJlbmNlIG9iamVjdCBpdHNlbGYuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge0VsZW1lbnR8T2JqZWN0fSByZWZlcmVuY2UgLSB0aGUgcmVmZXJlbmNlIGVsZW1lbnQgKHRoZSBwb3BwZXIgd2lsbCBiZSByZWxhdGl2ZSB0byB0aGlzKVxuICogQHJldHVybnMge0VsZW1lbnR9IHBhcmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRSZWZlcmVuY2VOb2RlKHJlZmVyZW5jZSkge1xuICByZXR1cm4gcmVmZXJlbmNlICYmIHJlZmVyZW5jZS5yZWZlcmVuY2VOb2RlID8gcmVmZXJlbmNlLnJlZmVyZW5jZU5vZGUgOiByZWZlcmVuY2U7XG59XG4iLCJpbXBvcnQgaXNCcm93c2VyIGZyb20gJy4vaXNCcm93c2VyJztcblxuY29uc3QgaXNJRTExID0gaXNCcm93c2VyICYmICEhKHdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiBkb2N1bWVudC5kb2N1bWVudE1vZGUpO1xuY29uc3QgaXNJRTEwID0gaXNCcm93c2VyICYmIC9NU0lFIDEwLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXG4vKipcbiAqIERldGVybWluZXMgaWYgdGhlIGJyb3dzZXIgaXMgSW50ZXJuZXQgRXhwbG9yZXJcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7TnVtYmVyfSB2ZXJzaW9uIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gaXNJRVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0lFKHZlcnNpb24pIHtcbiAgaWYgKHZlcnNpb24gPT09IDExKSB7XG4gICAgcmV0dXJuIGlzSUUxMTtcbiAgfVxuICBpZiAodmVyc2lvbiA9PT0gMTApIHtcbiAgICByZXR1cm4gaXNJRTEwO1xuICB9XG4gIHJldHVybiBpc0lFMTEgfHwgaXNJRTEwO1xufVxuIiwiaW1wb3J0IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSBmcm9tICcuL2dldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSc7XG5pbXBvcnQgaXNJRSBmcm9tICcuL2lzSUUnO1xuLyoqXG4gKiBSZXR1cm5zIHRoZSBvZmZzZXQgcGFyZW50IG9mIHRoZSBnaXZlbiBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBvZmZzZXQgcGFyZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9mZnNldFBhcmVudChlbGVtZW50KSB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIH1cblxuICBjb25zdCBub09mZnNldFBhcmVudCA9IGlzSUUoMTApID8gZG9jdW1lbnQuYm9keSA6IG51bGw7XG5cbiAgLy8gTk9URTogMSBET00gYWNjZXNzIGhlcmVcbiAgbGV0IG9mZnNldFBhcmVudCA9IGVsZW1lbnQub2Zmc2V0UGFyZW50IHx8IG51bGw7XG4gIC8vIFNraXAgaGlkZGVuIGVsZW1lbnRzIHdoaWNoIGRvbid0IGhhdmUgYW4gb2Zmc2V0UGFyZW50XG4gIHdoaWxlIChvZmZzZXRQYXJlbnQgPT09IG5vT2Zmc2V0UGFyZW50ICYmIGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nKSB7XG4gICAgb2Zmc2V0UGFyZW50ID0gKGVsZW1lbnQgPSBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZykub2Zmc2V0UGFyZW50O1xuICB9XG5cbiAgY29uc3Qgbm9kZU5hbWUgPSBvZmZzZXRQYXJlbnQgJiYgb2Zmc2V0UGFyZW50Lm5vZGVOYW1lO1xuXG4gIGlmICghbm9kZU5hbWUgfHwgbm9kZU5hbWUgPT09ICdCT0RZJyB8fCBub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQgPyBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB9XG5cbiAgLy8gLm9mZnNldFBhcmVudCB3aWxsIHJldHVybiB0aGUgY2xvc2VzdCBUSCwgVEQgb3IgVEFCTEUgaW4gY2FzZVxuICAvLyBubyBvZmZzZXRQYXJlbnQgaXMgcHJlc2VudCwgSSBoYXRlIHRoaXMgam9iLi4uXG4gIGlmIChcbiAgICBbJ1RIJywgJ1REJywgJ1RBQkxFJ10uaW5kZXhPZihvZmZzZXRQYXJlbnQubm9kZU5hbWUpICE9PSAtMSAmJlxuICAgIGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShvZmZzZXRQYXJlbnQsICdwb3NpdGlvbicpID09PSAnc3RhdGljJ1xuICApIHtcbiAgICByZXR1cm4gZ2V0T2Zmc2V0UGFyZW50KG9mZnNldFBhcmVudCk7XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0UGFyZW50O1xufVxuIiwiaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tICcuL2dldE9mZnNldFBhcmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzT2Zmc2V0Q29udGFpbmVyKGVsZW1lbnQpIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZWxlbWVudDtcbiAgaWYgKG5vZGVOYW1lID09PSAnQk9EWScpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIChcbiAgICBub2RlTmFtZSA9PT0gJ0hUTUwnIHx8IGdldE9mZnNldFBhcmVudChlbGVtZW50LmZpcnN0RWxlbWVudENoaWxkKSA9PT0gZWxlbWVudFxuICApO1xufVxuIiwiLyoqXG4gKiBGaW5kcyB0aGUgcm9vdCBub2RlIChkb2N1bWVudCwgc2hhZG93RE9NIHJvb3QpIG9mIHRoZSBnaXZlbiBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IG5vZGVcbiAqIEByZXR1cm5zIHtFbGVtZW50fSByb290IG5vZGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Um9vdChub2RlKSB7XG4gIGlmIChub2RlLnBhcmVudE5vZGUgIT09IG51bGwpIHtcbiAgICByZXR1cm4gZ2V0Um9vdChub2RlLnBhcmVudE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIG5vZGU7XG59XG4iLCJpbXBvcnQgaXNPZmZzZXRDb250YWluZXIgZnJvbSAnLi9pc09mZnNldENvbnRhaW5lcic7XG5pbXBvcnQgZ2V0Um9vdCBmcm9tICcuL2dldFJvb3QnO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tICcuL2dldE9mZnNldFBhcmVudCc7XG5cbi8qKlxuICogRmluZHMgdGhlIG9mZnNldCBwYXJlbnQgY29tbW9uIHRvIHRoZSB0d28gcHJvdmlkZWQgbm9kZXNcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudDFcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudDJcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBjb21tb24gb2Zmc2V0IHBhcmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50KGVsZW1lbnQxLCBlbGVtZW50Mikge1xuICAvLyBUaGlzIGNoZWNrIGlzIG5lZWRlZCB0byBhdm9pZCBlcnJvcnMgaW4gY2FzZSBvbmUgb2YgdGhlIGVsZW1lbnRzIGlzbid0IGRlZmluZWQgZm9yIGFueSByZWFzb25cbiAgaWYgKCFlbGVtZW50MSB8fCAhZWxlbWVudDEubm9kZVR5cGUgfHwgIWVsZW1lbnQyIHx8ICFlbGVtZW50Mi5ub2RlVHlwZSkge1xuICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIH1cblxuICAvLyBIZXJlIHdlIG1ha2Ugc3VyZSB0byBnaXZlIGFzIFwic3RhcnRcIiB0aGUgZWxlbWVudCB0aGF0IGNvbWVzIGZpcnN0IGluIHRoZSBET01cbiAgY29uc3Qgb3JkZXIgPVxuICAgIGVsZW1lbnQxLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGVsZW1lbnQyKSAmXG4gICAgTm9kZS5ET0NVTUVOVF9QT1NJVElPTl9GT0xMT1dJTkc7XG4gIGNvbnN0IHN0YXJ0ID0gb3JkZXIgPyBlbGVtZW50MSA6IGVsZW1lbnQyO1xuICBjb25zdCBlbmQgPSBvcmRlciA/IGVsZW1lbnQyIDogZWxlbWVudDE7XG5cbiAgLy8gR2V0IGNvbW1vbiBhbmNlc3RvciBjb250YWluZXJcbiAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICByYW5nZS5zZXRTdGFydChzdGFydCwgMCk7XG4gIHJhbmdlLnNldEVuZChlbmQsIDApO1xuICBjb25zdCB7IGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyIH0gPSByYW5nZTtcblxuICAvLyBCb3RoIG5vZGVzIGFyZSBpbnNpZGUgI2RvY3VtZW50XG4gIGlmIChcbiAgICAoZWxlbWVudDEgIT09IGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyICYmXG4gICAgICBlbGVtZW50MiAhPT0gY29tbW9uQW5jZXN0b3JDb250YWluZXIpIHx8XG4gICAgc3RhcnQuY29udGFpbnMoZW5kKVxuICApIHtcbiAgICBpZiAoaXNPZmZzZXRDb250YWluZXIoY29tbW9uQW5jZXN0b3JDb250YWluZXIpKSB7XG4gICAgICByZXR1cm4gY29tbW9uQW5jZXN0b3JDb250YWluZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldE9mZnNldFBhcmVudChjb21tb25BbmNlc3RvckNvbnRhaW5lcik7XG4gIH1cblxuICAvLyBvbmUgb2YgdGhlIG5vZGVzIGlzIGluc2lkZSBzaGFkb3dET00sIGZpbmQgd2hpY2ggb25lXG4gIGNvbnN0IGVsZW1lbnQxcm9vdCA9IGdldFJvb3QoZWxlbWVudDEpO1xuICBpZiAoZWxlbWVudDFyb290Lmhvc3QpIHtcbiAgICByZXR1cm4gZmluZENvbW1vbk9mZnNldFBhcmVudChlbGVtZW50MXJvb3QuaG9zdCwgZWxlbWVudDIpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50KGVsZW1lbnQxLCBnZXRSb290KGVsZW1lbnQyKS5ob3N0KTtcbiAgfVxufVxuIiwiLyoqXG4gKiBHZXRzIHRoZSBzY3JvbGwgdmFsdWUgb2YgdGhlIGdpdmVuIGVsZW1lbnQgaW4gdGhlIGdpdmVuIHNpZGUgKHRvcCBhbmQgbGVmdClcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQGFyZ3VtZW50IHtTdHJpbmd9IHNpZGUgYHRvcGAgb3IgYGxlZnRgXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBhbW91bnQgb2Ygc2Nyb2xsZWQgcGl4ZWxzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFNjcm9sbChlbGVtZW50LCBzaWRlID0gJ3RvcCcpIHtcbiAgY29uc3QgdXBwZXJTaWRlID0gc2lkZSA9PT0gJ3RvcCcgPyAnc2Nyb2xsVG9wJyA6ICdzY3JvbGxMZWZ0JztcbiAgY29uc3Qgbm9kZU5hbWUgPSBlbGVtZW50Lm5vZGVOYW1lO1xuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0JPRFknIHx8IG5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICBjb25zdCBodG1sID0gZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICBjb25zdCBzY3JvbGxpbmdFbGVtZW50ID0gZWxlbWVudC5vd25lckRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgfHwgaHRtbDtcbiAgICByZXR1cm4gc2Nyb2xsaW5nRWxlbWVudFt1cHBlclNpZGVdO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRbdXBwZXJTaWRlXTtcbn1cbiIsImltcG9ydCBnZXRTY3JvbGwgZnJvbSAnLi9nZXRTY3JvbGwnO1xuXG4vKlxuICogU3VtIG9yIHN1YnRyYWN0IHRoZSBlbGVtZW50IHNjcm9sbCB2YWx1ZXMgKGxlZnQgYW5kIHRvcCkgZnJvbSBhIGdpdmVuIHJlY3Qgb2JqZWN0XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge09iamVjdH0gcmVjdCAtIFJlY3Qgb2JqZWN0IHlvdSB3YW50IHRvIGNoYW5nZVxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIFRoZSBlbGVtZW50IGZyb20gdGhlIGZ1bmN0aW9uIHJlYWRzIHRoZSBzY3JvbGwgdmFsdWVzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHN1YnRyYWN0IC0gc2V0IHRvIHRydWUgaWYgeW91IHdhbnQgdG8gc3VidHJhY3QgdGhlIHNjcm9sbCB2YWx1ZXNcbiAqIEByZXR1cm4ge09iamVjdH0gcmVjdCAtIFRoZSBtb2RpZmllciByZWN0IG9iamVjdFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmNsdWRlU2Nyb2xsKHJlY3QsIGVsZW1lbnQsIHN1YnRyYWN0ID0gZmFsc2UpIHtcbiAgY29uc3Qgc2Nyb2xsVG9wID0gZ2V0U2Nyb2xsKGVsZW1lbnQsICd0b3AnKTtcbiAgY29uc3Qgc2Nyb2xsTGVmdCA9IGdldFNjcm9sbChlbGVtZW50LCAnbGVmdCcpO1xuICBjb25zdCBtb2RpZmllciA9IHN1YnRyYWN0ID8gLTEgOiAxO1xuICByZWN0LnRvcCArPSBzY3JvbGxUb3AgKiBtb2RpZmllcjtcbiAgcmVjdC5ib3R0b20gKz0gc2Nyb2xsVG9wICogbW9kaWZpZXI7XG4gIHJlY3QubGVmdCArPSBzY3JvbGxMZWZ0ICogbW9kaWZpZXI7XG4gIHJlY3QucmlnaHQgKz0gc2Nyb2xsTGVmdCAqIG1vZGlmaWVyO1xuICByZXR1cm4gcmVjdDtcbn1cbiIsIi8qXG4gKiBIZWxwZXIgdG8gZGV0ZWN0IGJvcmRlcnMgb2YgYSBnaXZlbiBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge0NTU1N0eWxlRGVjbGFyYXRpb259IHN0eWxlc1xuICogUmVzdWx0IG9mIGBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHlgIG9uIHRoZSBnaXZlbiBlbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gYXhpcyAtIGB4YCBvciBgeWBcbiAqIEByZXR1cm4ge251bWJlcn0gYm9yZGVycyAtIFRoZSBib3JkZXJzIHNpemUgb2YgdGhlIGdpdmVuIGF4aXNcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRCb3JkZXJzU2l6ZShzdHlsZXMsIGF4aXMpIHtcbiAgY29uc3Qgc2lkZUEgPSBheGlzID09PSAneCcgPyAnTGVmdCcgOiAnVG9wJztcbiAgY29uc3Qgc2lkZUIgPSBzaWRlQSA9PT0gJ0xlZnQnID8gJ1JpZ2h0JyA6ICdCb3R0b20nO1xuXG4gIHJldHVybiAoXG4gICAgcGFyc2VGbG9hdChzdHlsZXNbYGJvcmRlciR7c2lkZUF9V2lkdGhgXSwgMTApICtcbiAgICBwYXJzZUZsb2F0KHN0eWxlc1tgYm9yZGVyJHtzaWRlQn1XaWR0aGBdLCAxMClcbiAgKTtcbn1cbiIsImltcG9ydCBpc0lFIGZyb20gJy4vaXNJRSc7XG5cbmZ1bmN0aW9uIGdldFNpemUoYXhpcywgYm9keSwgaHRtbCwgY29tcHV0ZWRTdHlsZSkge1xuICByZXR1cm4gTWF0aC5tYXgoXG4gICAgYm9keVtgb2Zmc2V0JHtheGlzfWBdLFxuICAgIGJvZHlbYHNjcm9sbCR7YXhpc31gXSxcbiAgICBodG1sW2BjbGllbnQke2F4aXN9YF0sXG4gICAgaHRtbFtgb2Zmc2V0JHtheGlzfWBdLFxuICAgIGh0bWxbYHNjcm9sbCR7YXhpc31gXSxcbiAgICBpc0lFKDEwKVxuICAgICAgPyAocGFyc2VJbnQoaHRtbFtgb2Zmc2V0JHtheGlzfWBdKSArIFxuICAgICAgcGFyc2VJbnQoY29tcHV0ZWRTdHlsZVtgbWFyZ2luJHtheGlzID09PSAnSGVpZ2h0JyA/ICdUb3AnIDogJ0xlZnQnfWBdKSArIFxuICAgICAgcGFyc2VJbnQoY29tcHV0ZWRTdHlsZVtgbWFyZ2luJHtheGlzID09PSAnSGVpZ2h0JyA/ICdCb3R0b20nIDogJ1JpZ2h0J31gXSkpXG4gICAgOiAwIFxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXaW5kb3dTaXplcyhkb2N1bWVudCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGlzSUUoMTApICYmIGdldENvbXB1dGVkU3R5bGUoaHRtbCk7XG5cbiAgcmV0dXJuIHtcbiAgICBoZWlnaHQ6IGdldFNpemUoJ0hlaWdodCcsIGJvZHksIGh0bWwsIGNvbXB1dGVkU3R5bGUpLFxuICAgIHdpZHRoOiBnZXRTaXplKCdXaWR0aCcsIGJvZHksIGh0bWwsIGNvbXB1dGVkU3R5bGUpLFxuICB9O1xufVxuIiwiLyoqXG4gKiBHaXZlbiBlbGVtZW50IG9mZnNldHMsIGdlbmVyYXRlIGFuIG91dHB1dCBzaW1pbGFyIHRvIGdldEJvdW5kaW5nQ2xpZW50UmVjdFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IG9mZnNldHNcbiAqIEByZXR1cm5zIHtPYmplY3R9IENsaWVudFJlY3QgbGlrZSBvdXRwdXRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q2xpZW50UmVjdChvZmZzZXRzKSB7XG4gIHJldHVybiB7XG4gICAgLi4ub2Zmc2V0cyxcbiAgICByaWdodDogb2Zmc2V0cy5sZWZ0ICsgb2Zmc2V0cy53aWR0aCxcbiAgICBib3R0b206IG9mZnNldHMudG9wICsgb2Zmc2V0cy5oZWlnaHQsXG4gIH07XG59XG4iLCJpbXBvcnQgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5IGZyb20gJy4vZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5JztcbmltcG9ydCBnZXRCb3JkZXJzU2l6ZSBmcm9tICcuL2dldEJvcmRlcnNTaXplJztcbmltcG9ydCBnZXRXaW5kb3dTaXplcyBmcm9tICcuL2dldFdpbmRvd1NpemVzJztcbmltcG9ydCBnZXRTY3JvbGwgZnJvbSAnLi9nZXRTY3JvbGwnO1xuaW1wb3J0IGdldENsaWVudFJlY3QgZnJvbSAnLi9nZXRDbGllbnRSZWN0JztcbmltcG9ydCBpc0lFIGZyb20gJy4vaXNJRSc7XG5cbi8qKlxuICogR2V0IGJvdW5kaW5nIGNsaWVudCByZWN0IG9mIGdpdmVuIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm4ge09iamVjdH0gY2xpZW50IHJlY3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpIHtcbiAgbGV0IHJlY3QgPSB7fTtcblxuICAvLyBJRTEwIDEwIEZJWDogUGxlYXNlLCBkb24ndCBhc2ssIHRoZSBlbGVtZW50IGlzbid0XG4gIC8vIGNvbnNpZGVyZWQgaW4gRE9NIGluIHNvbWUgY2lyY3Vtc3RhbmNlcy4uLlxuICAvLyBUaGlzIGlzbid0IHJlcHJvZHVjaWJsZSBpbiBJRTEwIGNvbXBhdGliaWxpdHkgbW9kZSBvZiBJRTExXG4gIHRyeSB7XG4gICAgaWYgKGlzSUUoMTApKSB7XG4gICAgICByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IGdldFNjcm9sbChlbGVtZW50LCAndG9wJyk7XG4gICAgICBjb25zdCBzY3JvbGxMZWZ0ID0gZ2V0U2Nyb2xsKGVsZW1lbnQsICdsZWZ0Jyk7XG4gICAgICByZWN0LnRvcCArPSBzY3JvbGxUb3A7XG4gICAgICByZWN0LmxlZnQgKz0gc2Nyb2xsTGVmdDtcbiAgICAgIHJlY3QuYm90dG9tICs9IHNjcm9sbFRvcDtcbiAgICAgIHJlY3QucmlnaHQgKz0gc2Nyb2xsTGVmdDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB9XG4gIH1cbiAgY2F0Y2goZSl7fVxuXG4gIGNvbnN0IHJlc3VsdCA9IHtcbiAgICBsZWZ0OiByZWN0LmxlZnQsXG4gICAgdG9wOiByZWN0LnRvcCxcbiAgICB3aWR0aDogcmVjdC5yaWdodCAtIHJlY3QubGVmdCxcbiAgICBoZWlnaHQ6IHJlY3QuYm90dG9tIC0gcmVjdC50b3AsXG4gIH07XG5cbiAgLy8gc3VidHJhY3Qgc2Nyb2xsYmFyIHNpemUgZnJvbSBzaXplc1xuICBjb25zdCBzaXplcyA9IGVsZW1lbnQubm9kZU5hbWUgPT09ICdIVE1MJyA/IGdldFdpbmRvd1NpemVzKGVsZW1lbnQub3duZXJEb2N1bWVudCkgOiB7fTtcbiAgY29uc3Qgd2lkdGggPVxuICAgIHNpemVzLndpZHRoIHx8IGVsZW1lbnQuY2xpZW50V2lkdGggfHwgcmVzdWx0LndpZHRoO1xuICBjb25zdCBoZWlnaHQgPVxuICAgIHNpemVzLmhlaWdodCB8fCBlbGVtZW50LmNsaWVudEhlaWdodCB8fCByZXN1bHQuaGVpZ2h0O1xuXG4gIGxldCBob3JpelNjcm9sbGJhciA9IGVsZW1lbnQub2Zmc2V0V2lkdGggLSB3aWR0aDtcbiAgbGV0IHZlcnRTY3JvbGxiYXIgPSBlbGVtZW50Lm9mZnNldEhlaWdodCAtIGhlaWdodDtcblxuICAvLyBpZiBhbiBoeXBvdGhldGljYWwgc2Nyb2xsYmFyIGlzIGRldGVjdGVkLCB3ZSBtdXN0IGJlIHN1cmUgaXQncyBub3QgYSBgYm9yZGVyYFxuICAvLyB3ZSBtYWtlIHRoaXMgY2hlY2sgY29uZGl0aW9uYWwgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnNcbiAgaWYgKGhvcml6U2Nyb2xsYmFyIHx8IHZlcnRTY3JvbGxiYXIpIHtcbiAgICBjb25zdCBzdHlsZXMgPSBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZWxlbWVudCk7XG4gICAgaG9yaXpTY3JvbGxiYXIgLT0gZ2V0Qm9yZGVyc1NpemUoc3R5bGVzLCAneCcpO1xuICAgIHZlcnRTY3JvbGxiYXIgLT0gZ2V0Qm9yZGVyc1NpemUoc3R5bGVzLCAneScpO1xuXG4gICAgcmVzdWx0LndpZHRoIC09IGhvcml6U2Nyb2xsYmFyO1xuICAgIHJlc3VsdC5oZWlnaHQgLT0gdmVydFNjcm9sbGJhcjtcbiAgfVxuXG4gIHJldHVybiBnZXRDbGllbnRSZWN0KHJlc3VsdCk7XG59XG4iLCJpbXBvcnQgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5IGZyb20gJy4vZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5JztcbmltcG9ydCBpbmNsdWRlU2Nyb2xsIGZyb20gJy4vaW5jbHVkZVNjcm9sbCc7XG5pbXBvcnQgZ2V0U2Nyb2xsUGFyZW50IGZyb20gJy4vZ2V0U2Nyb2xsUGFyZW50JztcbmltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSAnLi9nZXRCb3VuZGluZ0NsaWVudFJlY3QnO1xuaW1wb3J0IHJ1bklzSUUgZnJvbSAnLi9pc0lFJztcbmltcG9ydCBnZXRDbGllbnRSZWN0IGZyb20gJy4vZ2V0Q2xpZW50UmVjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZShjaGlsZHJlbiwgcGFyZW50LCBmaXhlZFBvc2l0aW9uID0gZmFsc2UpIHtcbiAgY29uc3QgaXNJRTEwID0gcnVuSXNJRSgxMCk7XG4gIGNvbnN0IGlzSFRNTCA9IHBhcmVudC5ub2RlTmFtZSA9PT0gJ0hUTUwnO1xuICBjb25zdCBjaGlsZHJlblJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoY2hpbGRyZW4pO1xuICBjb25zdCBwYXJlbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHBhcmVudCk7XG4gIGNvbnN0IHNjcm9sbFBhcmVudCA9IGdldFNjcm9sbFBhcmVudChjaGlsZHJlbik7XG5cbiAgY29uc3Qgc3R5bGVzID0gZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KHBhcmVudCk7XG4gIGNvbnN0IGJvcmRlclRvcFdpZHRoID0gcGFyc2VGbG9hdChzdHlsZXMuYm9yZGVyVG9wV2lkdGgsIDEwKTtcbiAgY29uc3QgYm9yZGVyTGVmdFdpZHRoID0gcGFyc2VGbG9hdChzdHlsZXMuYm9yZGVyTGVmdFdpZHRoLCAxMCk7XG5cbiAgLy8gSW4gY2FzZXMgd2hlcmUgdGhlIHBhcmVudCBpcyBmaXhlZCwgd2UgbXVzdCBpZ25vcmUgbmVnYXRpdmUgc2Nyb2xsIGluIG9mZnNldCBjYWxjXG4gIGlmKGZpeGVkUG9zaXRpb24gJiYgaXNIVE1MKSB7XG4gICAgcGFyZW50UmVjdC50b3AgPSBNYXRoLm1heChwYXJlbnRSZWN0LnRvcCwgMCk7XG4gICAgcGFyZW50UmVjdC5sZWZ0ID0gTWF0aC5tYXgocGFyZW50UmVjdC5sZWZ0LCAwKTtcbiAgfVxuICBsZXQgb2Zmc2V0cyA9IGdldENsaWVudFJlY3Qoe1xuICAgIHRvcDogY2hpbGRyZW5SZWN0LnRvcCAtIHBhcmVudFJlY3QudG9wIC0gYm9yZGVyVG9wV2lkdGgsXG4gICAgbGVmdDogY2hpbGRyZW5SZWN0LmxlZnQgLSBwYXJlbnRSZWN0LmxlZnQgLSBib3JkZXJMZWZ0V2lkdGgsXG4gICAgd2lkdGg6IGNoaWxkcmVuUmVjdC53aWR0aCxcbiAgICBoZWlnaHQ6IGNoaWxkcmVuUmVjdC5oZWlnaHQsXG4gIH0pO1xuICBvZmZzZXRzLm1hcmdpblRvcCA9IDA7XG4gIG9mZnNldHMubWFyZ2luTGVmdCA9IDA7XG5cbiAgLy8gU3VidHJhY3QgbWFyZ2lucyBvZiBkb2N1bWVudEVsZW1lbnQgaW4gY2FzZSBpdCdzIGJlaW5nIHVzZWQgYXMgcGFyZW50XG4gIC8vIHdlIGRvIHRoaXMgb25seSBvbiBIVE1MIGJlY2F1c2UgaXQncyB0aGUgb25seSBlbGVtZW50IHRoYXQgYmVoYXZlc1xuICAvLyBkaWZmZXJlbnRseSB3aGVuIG1hcmdpbnMgYXJlIGFwcGxpZWQgdG8gaXQuIFRoZSBtYXJnaW5zIGFyZSBpbmNsdWRlZCBpblxuICAvLyB0aGUgYm94IG9mIHRoZSBkb2N1bWVudEVsZW1lbnQsIGluIHRoZSBvdGhlciBjYXNlcyBub3QuXG4gIGlmICghaXNJRTEwICYmIGlzSFRNTCkge1xuICAgIGNvbnN0IG1hcmdpblRvcCA9IHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpblRvcCwgMTApO1xuICAgIGNvbnN0IG1hcmdpbkxlZnQgPSBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5MZWZ0LCAxMCk7XG5cbiAgICBvZmZzZXRzLnRvcCAtPSBib3JkZXJUb3BXaWR0aCAtIG1hcmdpblRvcDtcbiAgICBvZmZzZXRzLmJvdHRvbSAtPSBib3JkZXJUb3BXaWR0aCAtIG1hcmdpblRvcDtcbiAgICBvZmZzZXRzLmxlZnQgLT0gYm9yZGVyTGVmdFdpZHRoIC0gbWFyZ2luTGVmdDtcbiAgICBvZmZzZXRzLnJpZ2h0IC09IGJvcmRlckxlZnRXaWR0aCAtIG1hcmdpbkxlZnQ7XG5cbiAgICAvLyBBdHRhY2ggbWFyZ2luVG9wIGFuZCBtYXJnaW5MZWZ0IGJlY2F1c2UgaW4gc29tZSBjaXJjdW1zdGFuY2VzIHdlIG1heSBuZWVkIHRoZW1cbiAgICBvZmZzZXRzLm1hcmdpblRvcCA9IG1hcmdpblRvcDtcbiAgICBvZmZzZXRzLm1hcmdpbkxlZnQgPSBtYXJnaW5MZWZ0O1xuICB9XG5cbiAgaWYgKFxuICAgIGlzSUUxMCAmJiAhZml4ZWRQb3NpdGlvblxuICAgICAgPyBwYXJlbnQuY29udGFpbnMoc2Nyb2xsUGFyZW50KVxuICAgICAgOiBwYXJlbnQgPT09IHNjcm9sbFBhcmVudCAmJiBzY3JvbGxQYXJlbnQubm9kZU5hbWUgIT09ICdCT0RZJ1xuICApIHtcbiAgICBvZmZzZXRzID0gaW5jbHVkZVNjcm9sbChvZmZzZXRzLCBwYXJlbnQpO1xuICB9XG5cbiAgcmV0dXJuIG9mZnNldHM7XG59XG4iLCJpbXBvcnQgZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlIGZyb20gJy4vZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlJztcbmltcG9ydCBnZXRTY3JvbGwgZnJvbSAnLi9nZXRTY3JvbGwnO1xuaW1wb3J0IGdldENsaWVudFJlY3QgZnJvbSAnLi9nZXRDbGllbnRSZWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Vmlld3BvcnRPZmZzZXRSZWN0UmVsYXRpdmVUb0FydGJpdHJhcnlOb2RlKGVsZW1lbnQsIGV4Y2x1ZGVTY3JvbGwgPSBmYWxzZSkge1xuICBjb25zdCBodG1sID0gZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgY29uc3QgcmVsYXRpdmVPZmZzZXQgPSBnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUoZWxlbWVudCwgaHRtbCk7XG4gIGNvbnN0IHdpZHRoID0gTWF0aC5tYXgoaHRtbC5jbGllbnRXaWR0aCwgd2luZG93LmlubmVyV2lkdGggfHwgMCk7XG4gIGNvbnN0IGhlaWdodCA9IE1hdGgubWF4KGh0bWwuY2xpZW50SGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMCk7XG5cbiAgY29uc3Qgc2Nyb2xsVG9wID0gIWV4Y2x1ZGVTY3JvbGwgPyBnZXRTY3JvbGwoaHRtbCkgOiAwO1xuICBjb25zdCBzY3JvbGxMZWZ0ID0gIWV4Y2x1ZGVTY3JvbGwgPyBnZXRTY3JvbGwoaHRtbCwgJ2xlZnQnKSA6IDA7XG5cbiAgY29uc3Qgb2Zmc2V0ID0ge1xuICAgIHRvcDogc2Nyb2xsVG9wIC0gcmVsYXRpdmVPZmZzZXQudG9wICsgcmVsYXRpdmVPZmZzZXQubWFyZ2luVG9wLFxuICAgIGxlZnQ6IHNjcm9sbExlZnQgLSByZWxhdGl2ZU9mZnNldC5sZWZ0ICsgcmVsYXRpdmVPZmZzZXQubWFyZ2luTGVmdCxcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gIH07XG5cbiAgcmV0dXJuIGdldENsaWVudFJlY3Qob2Zmc2V0KTtcbn1cbiIsImltcG9ydCBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkgZnJvbSAnLi9nZXRTdHlsZUNvbXB1dGVkUHJvcGVydHknO1xuaW1wb3J0IGdldFBhcmVudE5vZGUgZnJvbSAnLi9nZXRQYXJlbnROb2RlJztcblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgZ2l2ZW4gZWxlbWVudCBpcyBmaXhlZCBvciBpcyBpbnNpZGUgYSBmaXhlZCBwYXJlbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQGFyZ3VtZW50IHtFbGVtZW50fSBjdXN0b21Db250YWluZXJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBhbnN3ZXIgdG8gXCJpc0ZpeGVkP1wiXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRml4ZWQoZWxlbWVudCkge1xuICBjb25zdCBub2RlTmFtZSA9IGVsZW1lbnQubm9kZU5hbWU7XG4gIGlmIChub2RlTmFtZSA9PT0gJ0JPRFknIHx8IG5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShlbGVtZW50LCAncG9zaXRpb24nKSA9PT0gJ2ZpeGVkJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGNvbnN0IHBhcmVudE5vZGUgPSBnZXRQYXJlbnROb2RlKGVsZW1lbnQpO1xuICBpZiAoIXBhcmVudE5vZGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIGlzRml4ZWQocGFyZW50Tm9kZSk7XG59XG4iLCJpbXBvcnQgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5IGZyb20gJy4vZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5JztcbmltcG9ydCBpc0lFIGZyb20gJy4vaXNJRSc7XG4vKipcbiAqIEZpbmRzIHRoZSBmaXJzdCBwYXJlbnQgb2YgYW4gZWxlbWVudCB0aGF0IGhhcyBhIHRyYW5zZm9ybWVkIHByb3BlcnR5IGRlZmluZWRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybnMge0VsZW1lbnR9IGZpcnN0IHRyYW5zZm9ybWVkIHBhcmVudCBvciBkb2N1bWVudEVsZW1lbnRcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgLy8gVGhpcyBjaGVjayBpcyBuZWVkZWQgdG8gYXZvaWQgZXJyb3JzIGluIGNhc2Ugb25lIG9mIHRoZSBlbGVtZW50cyBpc24ndCBkZWZpbmVkIGZvciBhbnkgcmVhc29uXG4gICBpZiAoIWVsZW1lbnQgfHwgIWVsZW1lbnQucGFyZW50RWxlbWVudCB8fCBpc0lFKCkpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB9XG4gIGxldCBlbCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgd2hpbGUgKGVsICYmIGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShlbCwgJ3RyYW5zZm9ybScpID09PSAnbm9uZScpIHtcbiAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQ7XG4gIH1cbiAgcmV0dXJuIGVsIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxufVxuIiwiaW1wb3J0IGdldFNjcm9sbFBhcmVudCBmcm9tICcuL2dldFNjcm9sbFBhcmVudCc7XG5pbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tICcuL2dldFBhcmVudE5vZGUnO1xuaW1wb3J0IGdldFJlZmVyZW5jZU5vZGUgZnJvbSAnLi9nZXRSZWZlcmVuY2VOb2RlJztcbmltcG9ydCBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50IGZyb20gJy4vZmluZENvbW1vbk9mZnNldFBhcmVudCc7XG5pbXBvcnQgZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlIGZyb20gJy4vZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlJztcbmltcG9ydCBnZXRWaWV3cG9ydE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJ0Yml0cmFyeU5vZGUgZnJvbSAnLi9nZXRWaWV3cG9ydE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJ0Yml0cmFyeU5vZGUnO1xuaW1wb3J0IGdldFdpbmRvd1NpemVzIGZyb20gJy4vZ2V0V2luZG93U2l6ZXMnO1xuaW1wb3J0IGlzRml4ZWQgZnJvbSAnLi9pc0ZpeGVkJztcbmltcG9ydCBnZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50IGZyb20gJy4vZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudCc7XG5cbi8qKlxuICogQ29tcHV0ZWQgdGhlIGJvdW5kYXJpZXMgbGltaXRzIGFuZCByZXR1cm4gdGhlbVxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcG9wcGVyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSByZWZlcmVuY2VcbiAqIEBwYXJhbSB7bnVtYmVyfSBwYWRkaW5nXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBib3VuZGFyaWVzRWxlbWVudCAtIEVsZW1lbnQgdXNlZCB0byBkZWZpbmUgdGhlIGJvdW5kYXJpZXNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gZml4ZWRQb3NpdGlvbiAtIElzIGluIGZpeGVkIHBvc2l0aW9uIG1vZGVcbiAqIEByZXR1cm5zIHtPYmplY3R9IENvb3JkaW5hdGVzIG9mIHRoZSBib3VuZGFyaWVzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEJvdW5kYXJpZXMoXG4gIHBvcHBlcixcbiAgcmVmZXJlbmNlLFxuICBwYWRkaW5nLFxuICBib3VuZGFyaWVzRWxlbWVudCxcbiAgZml4ZWRQb3NpdGlvbiA9IGZhbHNlXG4pIHtcbiAgLy8gTk9URTogMSBET00gYWNjZXNzIGhlcmVcblxuICBsZXQgYm91bmRhcmllcyA9IHsgdG9wOiAwLCBsZWZ0OiAwIH07XG4gIGNvbnN0IG9mZnNldFBhcmVudCA9IGZpeGVkUG9zaXRpb24gPyBnZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50KHBvcHBlcikgOiBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50KHBvcHBlciwgZ2V0UmVmZXJlbmNlTm9kZShyZWZlcmVuY2UpKTtcblxuICAvLyBIYW5kbGUgdmlld3BvcnQgY2FzZVxuICBpZiAoYm91bmRhcmllc0VsZW1lbnQgPT09ICd2aWV3cG9ydCcgKSB7XG4gICAgYm91bmRhcmllcyA9IGdldFZpZXdwb3J0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcnRiaXRyYXJ5Tm9kZShvZmZzZXRQYXJlbnQsIGZpeGVkUG9zaXRpb24pO1xuICB9XG5cbiAgZWxzZSB7XG4gICAgLy8gSGFuZGxlIG90aGVyIGNhc2VzIGJhc2VkIG9uIERPTSBlbGVtZW50IHVzZWQgYXMgYm91bmRhcmllc1xuICAgIGxldCBib3VuZGFyaWVzTm9kZTtcbiAgICBpZiAoYm91bmRhcmllc0VsZW1lbnQgPT09ICdzY3JvbGxQYXJlbnQnKSB7XG4gICAgICBib3VuZGFyaWVzTm9kZSA9IGdldFNjcm9sbFBhcmVudChnZXRQYXJlbnROb2RlKHJlZmVyZW5jZSkpO1xuICAgICAgaWYgKGJvdW5kYXJpZXNOb2RlLm5vZGVOYW1lID09PSAnQk9EWScpIHtcbiAgICAgICAgYm91bmRhcmllc05vZGUgPSBwb3BwZXIub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChib3VuZGFyaWVzRWxlbWVudCA9PT0gJ3dpbmRvdycpIHtcbiAgICAgIGJvdW5kYXJpZXNOb2RlID0gcG9wcGVyLm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBib3VuZGFyaWVzTm9kZSA9IGJvdW5kYXJpZXNFbGVtZW50O1xuICAgIH1cblxuICAgIGNvbnN0IG9mZnNldHMgPSBnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUoXG4gICAgICBib3VuZGFyaWVzTm9kZSxcbiAgICAgIG9mZnNldFBhcmVudCxcbiAgICAgIGZpeGVkUG9zaXRpb25cbiAgICApO1xuXG4gICAgLy8gSW4gY2FzZSBvZiBIVE1MLCB3ZSBuZWVkIGEgZGlmZmVyZW50IGNvbXB1dGF0aW9uXG4gICAgaWYgKGJvdW5kYXJpZXNOb2RlLm5vZGVOYW1lID09PSAnSFRNTCcgJiYgIWlzRml4ZWQob2Zmc2V0UGFyZW50KSkge1xuICAgICAgY29uc3QgeyBoZWlnaHQsIHdpZHRoIH0gPSBnZXRXaW5kb3dTaXplcyhwb3BwZXIub3duZXJEb2N1bWVudCk7XG4gICAgICBib3VuZGFyaWVzLnRvcCArPSBvZmZzZXRzLnRvcCAtIG9mZnNldHMubWFyZ2luVG9wO1xuICAgICAgYm91bmRhcmllcy5ib3R0b20gPSBoZWlnaHQgKyBvZmZzZXRzLnRvcDtcbiAgICAgIGJvdW5kYXJpZXMubGVmdCArPSBvZmZzZXRzLmxlZnQgLSBvZmZzZXRzLm1hcmdpbkxlZnQ7XG4gICAgICBib3VuZGFyaWVzLnJpZ2h0ID0gd2lkdGggKyBvZmZzZXRzLmxlZnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGZvciBhbGwgdGhlIG90aGVyIERPTSBlbGVtZW50cywgdGhpcyBvbmUgaXMgZ29vZFxuICAgICAgYm91bmRhcmllcyA9IG9mZnNldHM7XG4gICAgfVxuICB9XG5cbiAgLy8gQWRkIHBhZGRpbmdzXG4gIHBhZGRpbmcgPSBwYWRkaW5nIHx8IDA7XG4gIGNvbnN0IGlzUGFkZGluZ051bWJlciA9IHR5cGVvZiBwYWRkaW5nID09PSAnbnVtYmVyJztcbiAgYm91bmRhcmllcy5sZWZ0ICs9IGlzUGFkZGluZ051bWJlciA/IHBhZGRpbmcgOiBwYWRkaW5nLmxlZnQgfHwgMDsgXG4gIGJvdW5kYXJpZXMudG9wICs9IGlzUGFkZGluZ051bWJlciA/IHBhZGRpbmcgOiBwYWRkaW5nLnRvcCB8fCAwOyBcbiAgYm91bmRhcmllcy5yaWdodCAtPSBpc1BhZGRpbmdOdW1iZXIgPyBwYWRkaW5nIDogcGFkZGluZy5yaWdodCB8fCAwOyBcbiAgYm91bmRhcmllcy5ib3R0b20gLT0gaXNQYWRkaW5nTnVtYmVyID8gcGFkZGluZyA6IHBhZGRpbmcuYm90dG9tIHx8IDA7IFxuXG4gIHJldHVybiBib3VuZGFyaWVzO1xufVxuIiwiaW1wb3J0IGdldEJvdW5kYXJpZXMgZnJvbSAnLi4vdXRpbHMvZ2V0Qm91bmRhcmllcyc7XG5cbmZ1bmN0aW9uIGdldEFyZWEoeyB3aWR0aCwgaGVpZ2h0IH0pIHtcbiAgcmV0dXJuIHdpZHRoICogaGVpZ2h0O1xufVxuXG4vKipcbiAqIFV0aWxpdHkgdXNlZCB0byB0cmFuc2Zvcm0gdGhlIGBhdXRvYCBwbGFjZW1lbnQgdG8gdGhlIHBsYWNlbWVudCB3aXRoIG1vcmVcbiAqIGF2YWlsYWJsZSBzcGFjZS5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSB1cGRhdGUgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVBdXRvUGxhY2VtZW50KFxuICBwbGFjZW1lbnQsXG4gIHJlZlJlY3QsXG4gIHBvcHBlcixcbiAgcmVmZXJlbmNlLFxuICBib3VuZGFyaWVzRWxlbWVudCxcbiAgcGFkZGluZyA9IDBcbikge1xuICBpZiAocGxhY2VtZW50LmluZGV4T2YoJ2F1dG8nKSA9PT0gLTEpIHtcbiAgICByZXR1cm4gcGxhY2VtZW50O1xuICB9XG5cbiAgY29uc3QgYm91bmRhcmllcyA9IGdldEJvdW5kYXJpZXMoXG4gICAgcG9wcGVyLFxuICAgIHJlZmVyZW5jZSxcbiAgICBwYWRkaW5nLFxuICAgIGJvdW5kYXJpZXNFbGVtZW50XG4gICk7XG5cbiAgY29uc3QgcmVjdHMgPSB7XG4gICAgdG9wOiB7XG4gICAgICB3aWR0aDogYm91bmRhcmllcy53aWR0aCxcbiAgICAgIGhlaWdodDogcmVmUmVjdC50b3AgLSBib3VuZGFyaWVzLnRvcCxcbiAgICB9LFxuICAgIHJpZ2h0OiB7XG4gICAgICB3aWR0aDogYm91bmRhcmllcy5yaWdodCAtIHJlZlJlY3QucmlnaHQsXG4gICAgICBoZWlnaHQ6IGJvdW5kYXJpZXMuaGVpZ2h0LFxuICAgIH0sXG4gICAgYm90dG9tOiB7XG4gICAgICB3aWR0aDogYm91bmRhcmllcy53aWR0aCxcbiAgICAgIGhlaWdodDogYm91bmRhcmllcy5ib3R0b20gLSByZWZSZWN0LmJvdHRvbSxcbiAgICB9LFxuICAgIGxlZnQ6IHtcbiAgICAgIHdpZHRoOiByZWZSZWN0LmxlZnQgLSBib3VuZGFyaWVzLmxlZnQsXG4gICAgICBoZWlnaHQ6IGJvdW5kYXJpZXMuaGVpZ2h0LFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3Qgc29ydGVkQXJlYXMgPSBPYmplY3Qua2V5cyhyZWN0cylcbiAgICAubWFwKGtleSA9PiAoe1xuICAgICAga2V5LFxuICAgICAgLi4ucmVjdHNba2V5XSxcbiAgICAgIGFyZWE6IGdldEFyZWEocmVjdHNba2V5XSksXG4gICAgfSkpXG4gICAgLnNvcnQoKGEsIGIpID0+IGIuYXJlYSAtIGEuYXJlYSk7XG5cbiAgY29uc3QgZmlsdGVyZWRBcmVhcyA9IHNvcnRlZEFyZWFzLmZpbHRlcihcbiAgICAoeyB3aWR0aCwgaGVpZ2h0IH0pID0+XG4gICAgICB3aWR0aCA+PSBwb3BwZXIuY2xpZW50V2lkdGggJiYgaGVpZ2h0ID49IHBvcHBlci5jbGllbnRIZWlnaHRcbiAgKTtcblxuICBjb25zdCBjb21wdXRlZFBsYWNlbWVudCA9IGZpbHRlcmVkQXJlYXMubGVuZ3RoID4gMFxuICAgID8gZmlsdGVyZWRBcmVhc1swXS5rZXlcbiAgICA6IHNvcnRlZEFyZWFzWzBdLmtleTtcblxuICBjb25zdCB2YXJpYXRpb24gPSBwbGFjZW1lbnQuc3BsaXQoJy0nKVsxXTtcblxuICByZXR1cm4gY29tcHV0ZWRQbGFjZW1lbnQgKyAodmFyaWF0aW9uID8gYC0ke3ZhcmlhdGlvbn1gIDogJycpO1xufVxuIiwiaW1wb3J0IGZpbmRDb21tb25PZmZzZXRQYXJlbnQgZnJvbSAnLi9maW5kQ29tbW9uT2Zmc2V0UGFyZW50JztcbmltcG9ydCBnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUgZnJvbSAnLi9nZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUnO1xuaW1wb3J0IGdldEZpeGVkUG9zaXRpb25PZmZzZXRQYXJlbnQgZnJvbSAnLi9nZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50JztcbmltcG9ydCBnZXRSZWZlcmVuY2VOb2RlIGZyb20gJy4vZ2V0UmVmZXJlbmNlTm9kZSc7XG5cbi8qKlxuICogR2V0IG9mZnNldHMgdG8gdGhlIHJlZmVyZW5jZSBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7RWxlbWVudH0gcG9wcGVyIC0gdGhlIHBvcHBlciBlbGVtZW50XG4gKiBAcGFyYW0ge0VsZW1lbnR9IHJlZmVyZW5jZSAtIHRoZSByZWZlcmVuY2UgZWxlbWVudCAodGhlIHBvcHBlciB3aWxsIGJlIHJlbGF0aXZlIHRvIHRoaXMpXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGZpeGVkUG9zaXRpb24gLSBpcyBpbiBmaXhlZCBwb3NpdGlvbiBtb2RlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgb2Zmc2V0cyB3aGljaCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlclxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRSZWZlcmVuY2VPZmZzZXRzKHN0YXRlLCBwb3BwZXIsIHJlZmVyZW5jZSwgZml4ZWRQb3NpdGlvbiA9IG51bGwpIHtcbiAgY29uc3QgY29tbW9uT2Zmc2V0UGFyZW50ID0gZml4ZWRQb3NpdGlvbiA/IGdldEZpeGVkUG9zaXRpb25PZmZzZXRQYXJlbnQocG9wcGVyKSA6IGZpbmRDb21tb25PZmZzZXRQYXJlbnQocG9wcGVyLCBnZXRSZWZlcmVuY2VOb2RlKHJlZmVyZW5jZSkpO1xuICByZXR1cm4gZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlKHJlZmVyZW5jZSwgY29tbW9uT2Zmc2V0UGFyZW50LCBmaXhlZFBvc2l0aW9uKTtcbn1cbiIsIi8qKlxuICogR2V0IHRoZSBvdXRlciBzaXplcyBvZiB0aGUgZ2l2ZW4gZWxlbWVudCAob2Zmc2V0IHNpemUgKyBtYXJnaW5zKVxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7T2JqZWN0fSBvYmplY3QgY29udGFpbmluZyB3aWR0aCBhbmQgaGVpZ2h0IHByb3BlcnRpZXNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T3V0ZXJTaXplcyhlbGVtZW50KSB7XG4gIGNvbnN0IHdpbmRvdyA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcbiAgY29uc3Qgc3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gIGNvbnN0IHggPSBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5Ub3AgfHwgMCkgKyBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5Cb3R0b20gfHwgMCk7XG4gIGNvbnN0IHkgPSBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5MZWZ0IHx8IDApICsgcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luUmlnaHQgfHwgMCk7XG4gIGNvbnN0IHJlc3VsdCA9IHtcbiAgICB3aWR0aDogZWxlbWVudC5vZmZzZXRXaWR0aCArIHksXG4gICAgaGVpZ2h0OiBlbGVtZW50Lm9mZnNldEhlaWdodCArIHgsXG4gIH07XG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCIvKipcbiAqIEdldCB0aGUgb3Bwb3NpdGUgcGxhY2VtZW50IG9mIHRoZSBnaXZlbiBvbmVcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBwbGFjZW1lbnRcbiAqIEByZXR1cm5zIHtTdHJpbmd9IGZsaXBwZWQgcGxhY2VtZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICBjb25zdCBoYXNoID0geyBsZWZ0OiAncmlnaHQnLCByaWdodDogJ2xlZnQnLCBib3R0b206ICd0b3AnLCB0b3A6ICdib3R0b20nIH07XG4gIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvbGVmdHxyaWdodHxib3R0b218dG9wL2csIG1hdGNoZWQgPT4gaGFzaFttYXRjaGVkXSk7XG59XG4iLCJpbXBvcnQgZ2V0T3V0ZXJTaXplcyBmcm9tICcuL2dldE91dGVyU2l6ZXMnO1xuaW1wb3J0IGdldE9wcG9zaXRlUGxhY2VtZW50IGZyb20gJy4vZ2V0T3Bwb3NpdGVQbGFjZW1lbnQnO1xuXG4vKipcbiAqIEdldCBvZmZzZXRzIHRvIHRoZSBwb3BwZXJcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBwb3NpdGlvbiAtIENTUyBwb3NpdGlvbiB0aGUgUG9wcGVyIHdpbGwgZ2V0IGFwcGxpZWRcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBvcHBlciAtIHRoZSBwb3BwZXIgZWxlbWVudFxuICogQHBhcmFtIHtPYmplY3R9IHJlZmVyZW5jZU9mZnNldHMgLSB0aGUgcmVmZXJlbmNlIG9mZnNldHMgKHRoZSBwb3BwZXIgd2lsbCBiZSByZWxhdGl2ZSB0byB0aGlzKVxuICogQHBhcmFtIHtTdHJpbmd9IHBsYWNlbWVudCAtIG9uZSBvZiB0aGUgdmFsaWQgcGxhY2VtZW50IG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IHBvcHBlck9mZnNldHMgLSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgb2Zmc2V0cyB3aGljaCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlclxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRQb3BwZXJPZmZzZXRzKHBvcHBlciwgcmVmZXJlbmNlT2Zmc2V0cywgcGxhY2VtZW50KSB7XG4gIHBsYWNlbWVudCA9IHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuXG4gIC8vIEdldCBwb3BwZXIgbm9kZSBzaXplc1xuICBjb25zdCBwb3BwZXJSZWN0ID0gZ2V0T3V0ZXJTaXplcyhwb3BwZXIpO1xuXG4gIC8vIEFkZCBwb3NpdGlvbiwgd2lkdGggYW5kIGhlaWdodCB0byBvdXIgb2Zmc2V0cyBvYmplY3RcbiAgY29uc3QgcG9wcGVyT2Zmc2V0cyA9IHtcbiAgICB3aWR0aDogcG9wcGVyUmVjdC53aWR0aCxcbiAgICBoZWlnaHQ6IHBvcHBlclJlY3QuaGVpZ2h0LFxuICB9O1xuXG4gIC8vIGRlcGVuZGluZyBieSB0aGUgcG9wcGVyIHBsYWNlbWVudCB3ZSBoYXZlIHRvIGNvbXB1dGUgaXRzIG9mZnNldHMgc2xpZ2h0bHkgZGlmZmVyZW50bHlcbiAgY29uc3QgaXNIb3JpeiA9IFsncmlnaHQnLCAnbGVmdCddLmluZGV4T2YocGxhY2VtZW50KSAhPT0gLTE7XG4gIGNvbnN0IG1haW5TaWRlID0gaXNIb3JpeiA/ICd0b3AnIDogJ2xlZnQnO1xuICBjb25zdCBzZWNvbmRhcnlTaWRlID0gaXNIb3JpeiA/ICdsZWZ0JyA6ICd0b3AnO1xuICBjb25zdCBtZWFzdXJlbWVudCA9IGlzSG9yaXogPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG4gIGNvbnN0IHNlY29uZGFyeU1lYXN1cmVtZW50ID0gIWlzSG9yaXogPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cbiAgcG9wcGVyT2Zmc2V0c1ttYWluU2lkZV0gPVxuICAgIHJlZmVyZW5jZU9mZnNldHNbbWFpblNpZGVdICtcbiAgICByZWZlcmVuY2VPZmZzZXRzW21lYXN1cmVtZW50XSAvIDIgLVxuICAgIHBvcHBlclJlY3RbbWVhc3VyZW1lbnRdIC8gMjtcbiAgaWYgKHBsYWNlbWVudCA9PT0gc2Vjb25kYXJ5U2lkZSkge1xuICAgIHBvcHBlck9mZnNldHNbc2Vjb25kYXJ5U2lkZV0gPVxuICAgICAgcmVmZXJlbmNlT2Zmc2V0c1tzZWNvbmRhcnlTaWRlXSAtIHBvcHBlclJlY3Rbc2Vjb25kYXJ5TWVhc3VyZW1lbnRdO1xuICB9IGVsc2Uge1xuICAgIHBvcHBlck9mZnNldHNbc2Vjb25kYXJ5U2lkZV0gPVxuICAgICAgcmVmZXJlbmNlT2Zmc2V0c1tnZXRPcHBvc2l0ZVBsYWNlbWVudChzZWNvbmRhcnlTaWRlKV07XG4gIH1cblxuICByZXR1cm4gcG9wcGVyT2Zmc2V0cztcbn1cbiIsIi8qKlxuICogTWltaWNzIHRoZSBgZmluZGAgbWV0aG9kIG9mIEFycmF5XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0FycmF5fSBhcnJcbiAqIEBhcmd1bWVudCBwcm9wXG4gKiBAYXJndW1lbnQgdmFsdWVcbiAqIEByZXR1cm5zIGluZGV4IG9yIC0xXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbmQoYXJyLCBjaGVjaykge1xuICAvLyB1c2UgbmF0aXZlIGZpbmQgaWYgc3VwcG9ydGVkXG4gIGlmIChBcnJheS5wcm90b3R5cGUuZmluZCkge1xuICAgIHJldHVybiBhcnIuZmluZChjaGVjayk7XG4gIH1cblxuICAvLyB1c2UgYGZpbHRlcmAgdG8gb2J0YWluIHRoZSBzYW1lIGJlaGF2aW9yIG9mIGBmaW5kYFxuICByZXR1cm4gYXJyLmZpbHRlcihjaGVjaylbMF07XG59XG4iLCJpbXBvcnQgZmluZCBmcm9tICcuL2ZpbmQnO1xuXG4vKipcbiAqIFJldHVybiB0aGUgaW5kZXggb2YgdGhlIG1hdGNoaW5nIG9iamVjdFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtBcnJheX0gYXJyXG4gKiBAYXJndW1lbnQgcHJvcFxuICogQGFyZ3VtZW50IHZhbHVlXG4gKiBAcmV0dXJucyBpbmRleCBvciAtMVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaW5kSW5kZXgoYXJyLCBwcm9wLCB2YWx1ZSkge1xuICAvLyB1c2UgbmF0aXZlIGZpbmRJbmRleCBpZiBzdXBwb3J0ZWRcbiAgaWYgKEFycmF5LnByb3RvdHlwZS5maW5kSW5kZXgpIHtcbiAgICByZXR1cm4gYXJyLmZpbmRJbmRleChjdXIgPT4gY3VyW3Byb3BdID09PSB2YWx1ZSk7XG4gIH1cblxuICAvLyB1c2UgYGZpbmRgICsgYGluZGV4T2ZgIGlmIGBmaW5kSW5kZXhgIGlzbid0IHN1cHBvcnRlZFxuICBjb25zdCBtYXRjaCA9IGZpbmQoYXJyLCBvYmogPT4gb2JqW3Byb3BdID09PSB2YWx1ZSk7XG4gIHJldHVybiBhcnIuaW5kZXhPZihtYXRjaCk7XG59XG4iLCJpbXBvcnQgaXNGdW5jdGlvbiBmcm9tICcuL2lzRnVuY3Rpb24nO1xuaW1wb3J0IGZpbmRJbmRleCBmcm9tICcuL2ZpbmRJbmRleCc7XG5pbXBvcnQgZ2V0Q2xpZW50UmVjdCBmcm9tICcuLi91dGlscy9nZXRDbGllbnRSZWN0JztcblxuLyoqXG4gKiBMb29wIHRyb3VnaCB0aGUgbGlzdCBvZiBtb2RpZmllcnMgYW5kIHJ1biB0aGVtIGluIG9yZGVyLFxuICogZWFjaCBvZiB0aGVtIHdpbGwgdGhlbiBlZGl0IHRoZSBkYXRhIG9iamVjdC5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7ZGF0YU9iamVjdH0gZGF0YVxuICogQHBhcmFtIHtBcnJheX0gbW9kaWZpZXJzXG4gKiBAcGFyYW0ge1N0cmluZ30gZW5kcyAtIE9wdGlvbmFsIG1vZGlmaWVyIG5hbWUgdXNlZCBhcyBzdG9wcGVyXG4gKiBAcmV0dXJucyB7ZGF0YU9iamVjdH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcnVuTW9kaWZpZXJzKG1vZGlmaWVycywgZGF0YSwgZW5kcykge1xuICBjb25zdCBtb2RpZmllcnNUb1J1biA9IGVuZHMgPT09IHVuZGVmaW5lZFxuICAgID8gbW9kaWZpZXJzXG4gICAgOiBtb2RpZmllcnMuc2xpY2UoMCwgZmluZEluZGV4KG1vZGlmaWVycywgJ25hbWUnLCBlbmRzKSk7XG5cbiAgbW9kaWZpZXJzVG9SdW4uZm9yRWFjaChtb2RpZmllciA9PiB7XG4gICAgaWYgKG1vZGlmaWVyWydmdW5jdGlvbiddKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4gICAgICBjb25zb2xlLndhcm4oJ2Btb2RpZmllci5mdW5jdGlvbmAgaXMgZGVwcmVjYXRlZCwgdXNlIGBtb2RpZmllci5mbmAhJyk7XG4gICAgfVxuICAgIGNvbnN0IGZuID0gbW9kaWZpZXJbJ2Z1bmN0aW9uJ10gfHwgbW9kaWZpZXIuZm47IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4gICAgaWYgKG1vZGlmaWVyLmVuYWJsZWQgJiYgaXNGdW5jdGlvbihmbikpIHtcbiAgICAgIC8vIEFkZCBwcm9wZXJ0aWVzIHRvIG9mZnNldHMgdG8gbWFrZSB0aGVtIGEgY29tcGxldGUgY2xpZW50UmVjdCBvYmplY3RcbiAgICAgIC8vIHdlIGRvIHRoaXMgYmVmb3JlIGVhY2ggbW9kaWZpZXIgdG8gbWFrZSBzdXJlIHRoZSBwcmV2aW91cyBvbmUgZG9lc24ndFxuICAgICAgLy8gbWVzcyB3aXRoIHRoZXNlIHZhbHVlc1xuICAgICAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IGdldENsaWVudFJlY3QoZGF0YS5vZmZzZXRzLnBvcHBlcik7XG4gICAgICBkYXRhLm9mZnNldHMucmVmZXJlbmNlID0gZ2V0Q2xpZW50UmVjdChkYXRhLm9mZnNldHMucmVmZXJlbmNlKTtcblxuICAgICAgZGF0YSA9IGZuKGRhdGEsIG1vZGlmaWVyKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkYXRhO1xufVxuIiwiaW1wb3J0IGNvbXB1dGVBdXRvUGxhY2VtZW50IGZyb20gJy4uL3V0aWxzL2NvbXB1dGVBdXRvUGxhY2VtZW50JztcbmltcG9ydCBnZXRSZWZlcmVuY2VPZmZzZXRzIGZyb20gJy4uL3V0aWxzL2dldFJlZmVyZW5jZU9mZnNldHMnO1xuaW1wb3J0IGdldFBvcHBlck9mZnNldHMgZnJvbSAnLi4vdXRpbHMvZ2V0UG9wcGVyT2Zmc2V0cyc7XG5pbXBvcnQgcnVuTW9kaWZpZXJzIGZyb20gJy4uL3V0aWxzL3J1bk1vZGlmaWVycyc7XG5cbi8qKlxuICogVXBkYXRlcyB0aGUgcG9zaXRpb24gb2YgdGhlIHBvcHBlciwgY29tcHV0aW5nIHRoZSBuZXcgb2Zmc2V0cyBhbmQgYXBwbHlpbmdcbiAqIHRoZSBuZXcgc3R5bGUuPGJyIC8+XG4gKiBQcmVmZXIgYHNjaGVkdWxlVXBkYXRlYCBvdmVyIGB1cGRhdGVgIGJlY2F1c2Ugb2YgcGVyZm9ybWFuY2UgcmVhc29ucy5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAvLyBpZiBwb3BwZXIgaXMgZGVzdHJveWVkLCBkb24ndCBwZXJmb3JtIGFueSBmdXJ0aGVyIHVwZGF0ZVxuICBpZiAodGhpcy5zdGF0ZS5pc0Rlc3Ryb3llZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCBkYXRhID0ge1xuICAgIGluc3RhbmNlOiB0aGlzLFxuICAgIHN0eWxlczoge30sXG4gICAgYXJyb3dTdHlsZXM6IHt9LFxuICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgIGZsaXBwZWQ6IGZhbHNlLFxuICAgIG9mZnNldHM6IHt9LFxuICB9O1xuXG4gIC8vIGNvbXB1dGUgcmVmZXJlbmNlIGVsZW1lbnQgb2Zmc2V0c1xuICBkYXRhLm9mZnNldHMucmVmZXJlbmNlID0gZ2V0UmVmZXJlbmNlT2Zmc2V0cyhcbiAgICB0aGlzLnN0YXRlLFxuICAgIHRoaXMucG9wcGVyLFxuICAgIHRoaXMucmVmZXJlbmNlLFxuICAgIHRoaXMub3B0aW9ucy5wb3NpdGlvbkZpeGVkXG4gICk7XG5cbiAgLy8gY29tcHV0ZSBhdXRvIHBsYWNlbWVudCwgc3RvcmUgcGxhY2VtZW50IGluc2lkZSB0aGUgZGF0YSBvYmplY3QsXG4gIC8vIG1vZGlmaWVycyB3aWxsIGJlIGFibGUgdG8gZWRpdCBgcGxhY2VtZW50YCBpZiBuZWVkZWRcbiAgLy8gYW5kIHJlZmVyIHRvIG9yaWdpbmFsUGxhY2VtZW50IHRvIGtub3cgdGhlIG9yaWdpbmFsIHZhbHVlXG4gIGRhdGEucGxhY2VtZW50ID0gY29tcHV0ZUF1dG9QbGFjZW1lbnQoXG4gICAgdGhpcy5vcHRpb25zLnBsYWNlbWVudCxcbiAgICBkYXRhLm9mZnNldHMucmVmZXJlbmNlLFxuICAgIHRoaXMucG9wcGVyLFxuICAgIHRoaXMucmVmZXJlbmNlLFxuICAgIHRoaXMub3B0aW9ucy5tb2RpZmllcnMuZmxpcC5ib3VuZGFyaWVzRWxlbWVudCxcbiAgICB0aGlzLm9wdGlvbnMubW9kaWZpZXJzLmZsaXAucGFkZGluZ1xuICApO1xuXG4gIC8vIHN0b3JlIHRoZSBjb21wdXRlZCBwbGFjZW1lbnQgaW5zaWRlIGBvcmlnaW5hbFBsYWNlbWVudGBcbiAgZGF0YS5vcmlnaW5hbFBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50O1xuXG4gIGRhdGEucG9zaXRpb25GaXhlZCA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbkZpeGVkO1xuXG4gIC8vIGNvbXB1dGUgdGhlIHBvcHBlciBvZmZzZXRzXG4gIGRhdGEub2Zmc2V0cy5wb3BwZXIgPSBnZXRQb3BwZXJPZmZzZXRzKFxuICAgIHRoaXMucG9wcGVyLFxuICAgIGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UsXG4gICAgZGF0YS5wbGFjZW1lbnRcbiAgKTtcblxuICBkYXRhLm9mZnNldHMucG9wcGVyLnBvc2l0aW9uID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uRml4ZWRcbiAgICA/ICdmaXhlZCdcbiAgICA6ICdhYnNvbHV0ZSc7XG5cbiAgLy8gcnVuIHRoZSBtb2RpZmllcnNcbiAgZGF0YSA9IHJ1bk1vZGlmaWVycyh0aGlzLm1vZGlmaWVycywgZGF0YSk7XG5cbiAgLy8gdGhlIGZpcnN0IGB1cGRhdGVgIHdpbGwgY2FsbCBgb25DcmVhdGVgIGNhbGxiYWNrXG4gIC8vIHRoZSBvdGhlciBvbmVzIHdpbGwgY2FsbCBgb25VcGRhdGVgIGNhbGxiYWNrXG4gIGlmICghdGhpcy5zdGF0ZS5pc0NyZWF0ZWQpIHtcbiAgICB0aGlzLnN0YXRlLmlzQ3JlYXRlZCA9IHRydWU7XG4gICAgdGhpcy5vcHRpb25zLm9uQ3JlYXRlKGRhdGEpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMub3B0aW9ucy5vblVwZGF0ZShkYXRhKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBIZWxwZXIgdXNlZCB0byBrbm93IGlmIHRoZSBnaXZlbiBtb2RpZmllciBpcyBlbmFibGVkLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHJldHVybnMge0Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzTW9kaWZpZXJFbmFibGVkKG1vZGlmaWVycywgbW9kaWZpZXJOYW1lKSB7XG4gIHJldHVybiBtb2RpZmllcnMuc29tZShcbiAgICAoeyBuYW1lLCBlbmFibGVkIH0pID0+IGVuYWJsZWQgJiYgbmFtZSA9PT0gbW9kaWZpZXJOYW1lXG4gICk7XG59XG4iLCIvKipcbiAqIEdldCB0aGUgcHJlZml4ZWQgc3VwcG9ydGVkIHByb3BlcnR5IG5hbWVcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBwcm9wZXJ0eSAoY2FtZWxDYXNlKVxuICogQHJldHVybnMge1N0cmluZ30gcHJlZml4ZWQgcHJvcGVydHkgKGNhbWVsQ2FzZSBvciBQYXNjYWxDYXNlLCBkZXBlbmRpbmcgb24gdGhlIHZlbmRvciBwcmVmaXgpXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFN1cHBvcnRlZFByb3BlcnR5TmFtZShwcm9wZXJ0eSkge1xuICBjb25zdCBwcmVmaXhlcyA9IFtmYWxzZSwgJ21zJywgJ1dlYmtpdCcsICdNb3onLCAnTyddO1xuICBjb25zdCB1cHBlclByb3AgPSBwcm9wZXJ0eS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BlcnR5LnNsaWNlKDEpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJlZml4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBwcmVmaXggPSBwcmVmaXhlc1tpXTtcbiAgICBjb25zdCB0b0NoZWNrID0gcHJlZml4ID8gYCR7cHJlZml4fSR7dXBwZXJQcm9wfWAgOiBwcm9wZXJ0eTtcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50LmJvZHkuc3R5bGVbdG9DaGVja10gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gdG9DaGVjaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG4iLCJpbXBvcnQgaXNNb2RpZmllckVuYWJsZWQgZnJvbSAnLi4vdXRpbHMvaXNNb2RpZmllckVuYWJsZWQnO1xuaW1wb3J0IGdldFN1cHBvcnRlZFByb3BlcnR5TmFtZSBmcm9tICcuLi91dGlscy9nZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUnO1xuXG4vKipcbiAqIERlc3Ryb3lzIHRoZSBwb3BwZXIuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gIHRoaXMuc3RhdGUuaXNEZXN0cm95ZWQgPSB0cnVlO1xuXG4gIC8vIHRvdWNoIERPTSBvbmx5IGlmIGBhcHBseVN0eWxlYCBtb2RpZmllciBpcyBlbmFibGVkXG4gIGlmIChpc01vZGlmaWVyRW5hYmxlZCh0aGlzLm1vZGlmaWVycywgJ2FwcGx5U3R5bGUnKSkge1xuICAgIHRoaXMucG9wcGVyLnJlbW92ZUF0dHJpYnV0ZSgneC1wbGFjZW1lbnQnKTtcbiAgICB0aGlzLnBvcHBlci5zdHlsZS5wb3NpdGlvbiA9ICcnO1xuICAgIHRoaXMucG9wcGVyLnN0eWxlLnRvcCA9ICcnO1xuICAgIHRoaXMucG9wcGVyLnN0eWxlLmxlZnQgPSAnJztcbiAgICB0aGlzLnBvcHBlci5zdHlsZS5yaWdodCA9ICcnO1xuICAgIHRoaXMucG9wcGVyLnN0eWxlLmJvdHRvbSA9ICcnO1xuICAgIHRoaXMucG9wcGVyLnN0eWxlLndpbGxDaGFuZ2UgPSAnJztcbiAgICB0aGlzLnBvcHBlci5zdHlsZVtnZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUoJ3RyYW5zZm9ybScpXSA9ICcnO1xuICB9XG5cbiAgdGhpcy5kaXNhYmxlRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAvLyByZW1vdmUgdGhlIHBvcHBlciBpZiB1c2VyIGV4cGxpY2l0bHkgYXNrZWQgZm9yIHRoZSBkZWxldGlvbiBvbiBkZXN0cm95XG4gIC8vIGRvIG5vdCB1c2UgYHJlbW92ZWAgYmVjYXVzZSBJRTExIGRvZXNuJ3Qgc3VwcG9ydCBpdFxuICBpZiAodGhpcy5vcHRpb25zLnJlbW92ZU9uRGVzdHJveSkge1xuICAgIHRoaXMucG9wcGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5wb3BwZXIpO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuIiwiLyoqXG4gKiBHZXQgdGhlIHdpbmRvdyBhc3NvY2lhdGVkIHdpdGggdGhlIGVsZW1lbnRcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybnMge1dpbmRvd31cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0V2luZG93KGVsZW1lbnQpIHtcbiAgY29uc3Qgb3duZXJEb2N1bWVudCA9IGVsZW1lbnQub3duZXJEb2N1bWVudDtcbiAgcmV0dXJuIG93bmVyRG9jdW1lbnQgPyBvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3IDogd2luZG93O1xufVxuIiwiaW1wb3J0IGdldFNjcm9sbFBhcmVudCBmcm9tICcuL2dldFNjcm9sbFBhcmVudCc7XG5pbXBvcnQgZ2V0V2luZG93IGZyb20gJy4vZ2V0V2luZG93JztcblxuZnVuY3Rpb24gYXR0YWNoVG9TY3JvbGxQYXJlbnRzKHNjcm9sbFBhcmVudCwgZXZlbnQsIGNhbGxiYWNrLCBzY3JvbGxQYXJlbnRzKSB7XG4gIGNvbnN0IGlzQm9keSA9IHNjcm9sbFBhcmVudC5ub2RlTmFtZSA9PT0gJ0JPRFknO1xuICBjb25zdCB0YXJnZXQgPSBpc0JvZHkgPyBzY3JvbGxQYXJlbnQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyA6IHNjcm9sbFBhcmVudDtcbiAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrLCB7IHBhc3NpdmU6IHRydWUgfSk7XG5cbiAgaWYgKCFpc0JvZHkpIHtcbiAgICBhdHRhY2hUb1Njcm9sbFBhcmVudHMoXG4gICAgICBnZXRTY3JvbGxQYXJlbnQodGFyZ2V0LnBhcmVudE5vZGUpLFxuICAgICAgZXZlbnQsXG4gICAgICBjYWxsYmFjayxcbiAgICAgIHNjcm9sbFBhcmVudHNcbiAgICApO1xuICB9XG4gIHNjcm9sbFBhcmVudHMucHVzaCh0YXJnZXQpO1xufVxuXG4vKipcbiAqIFNldHVwIG5lZWRlZCBldmVudCBsaXN0ZW5lcnMgdXNlZCB0byB1cGRhdGUgdGhlIHBvcHBlciBwb3NpdGlvblxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0dXBFdmVudExpc3RlbmVycyhcbiAgcmVmZXJlbmNlLFxuICBvcHRpb25zLFxuICBzdGF0ZSxcbiAgdXBkYXRlQm91bmRcbikge1xuICAvLyBSZXNpemUgZXZlbnQgbGlzdGVuZXIgb24gd2luZG93XG4gIHN0YXRlLnVwZGF0ZUJvdW5kID0gdXBkYXRlQm91bmQ7XG4gIGdldFdpbmRvdyhyZWZlcmVuY2UpLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHN0YXRlLnVwZGF0ZUJvdW5kLCB7IHBhc3NpdmU6IHRydWUgfSk7XG5cbiAgLy8gU2Nyb2xsIGV2ZW50IGxpc3RlbmVyIG9uIHNjcm9sbCBwYXJlbnRzXG4gIGNvbnN0IHNjcm9sbEVsZW1lbnQgPSBnZXRTY3JvbGxQYXJlbnQocmVmZXJlbmNlKTtcbiAgYXR0YWNoVG9TY3JvbGxQYXJlbnRzKFxuICAgIHNjcm9sbEVsZW1lbnQsXG4gICAgJ3Njcm9sbCcsXG4gICAgc3RhdGUudXBkYXRlQm91bmQsXG4gICAgc3RhdGUuc2Nyb2xsUGFyZW50c1xuICApO1xuICBzdGF0ZS5zY3JvbGxFbGVtZW50ID0gc2Nyb2xsRWxlbWVudDtcbiAgc3RhdGUuZXZlbnRzRW5hYmxlZCA9IHRydWU7XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuIiwiaW1wb3J0IHNldHVwRXZlbnRMaXN0ZW5lcnMgZnJvbSAnLi4vdXRpbHMvc2V0dXBFdmVudExpc3RlbmVycyc7XG5cbi8qKlxuICogSXQgd2lsbCBhZGQgcmVzaXplL3Njcm9sbCBldmVudHMgYW5kIHN0YXJ0IHJlY2FsY3VsYXRpbmdcbiAqIHBvc2l0aW9uIG9mIHRoZSBwb3BwZXIgZWxlbWVudCB3aGVuIHRoZXkgYXJlIHRyaWdnZXJlZC5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZW5hYmxlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gIGlmICghdGhpcy5zdGF0ZS5ldmVudHNFbmFibGVkKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHNldHVwRXZlbnRMaXN0ZW5lcnMoXG4gICAgICB0aGlzLnJlZmVyZW5jZSxcbiAgICAgIHRoaXMub3B0aW9ucyxcbiAgICAgIHRoaXMuc3RhdGUsXG4gICAgICB0aGlzLnNjaGVkdWxlVXBkYXRlXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tICcuL2dldFdpbmRvdyc7XG5cbi8qKlxuICogUmVtb3ZlIGV2ZW50IGxpc3RlbmVycyB1c2VkIHRvIHVwZGF0ZSB0aGUgcG9wcGVyIHBvc2l0aW9uXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVycyhyZWZlcmVuY2UsIHN0YXRlKSB7XG4gIC8vIFJlbW92ZSByZXNpemUgZXZlbnQgbGlzdGVuZXIgb24gd2luZG93XG4gIGdldFdpbmRvdyhyZWZlcmVuY2UpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHN0YXRlLnVwZGF0ZUJvdW5kKTtcblxuICAvLyBSZW1vdmUgc2Nyb2xsIGV2ZW50IGxpc3RlbmVyIG9uIHNjcm9sbCBwYXJlbnRzXG4gIHN0YXRlLnNjcm9sbFBhcmVudHMuZm9yRWFjaCh0YXJnZXQgPT4ge1xuICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzdGF0ZS51cGRhdGVCb3VuZCk7XG4gIH0pO1xuXG4gIC8vIFJlc2V0IHN0YXRlXG4gIHN0YXRlLnVwZGF0ZUJvdW5kID0gbnVsbDtcbiAgc3RhdGUuc2Nyb2xsUGFyZW50cyA9IFtdO1xuICBzdGF0ZS5zY3JvbGxFbGVtZW50ID0gbnVsbDtcbiAgc3RhdGUuZXZlbnRzRW5hYmxlZCA9IGZhbHNlO1xuICByZXR1cm4gc3RhdGU7XG59XG4iLCJpbXBvcnQgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMgZnJvbSAnLi4vdXRpbHMvcmVtb3ZlRXZlbnRMaXN0ZW5lcnMnO1xuXG4vKipcbiAqIEl0IHdpbGwgcmVtb3ZlIHJlc2l6ZS9zY3JvbGwgZXZlbnRzIGFuZCB3b24ndCByZWNhbGN1bGF0ZSBwb3BwZXIgcG9zaXRpb25cbiAqIHdoZW4gdGhleSBhcmUgdHJpZ2dlcmVkLiBJdCBhbHNvIHdvbid0IHRyaWdnZXIgYG9uVXBkYXRlYCBjYWxsYmFjayBhbnltb3JlLFxuICogdW5sZXNzIHlvdSBjYWxsIGB1cGRhdGVgIG1ldGhvZCBtYW51YWxseS5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzYWJsZUV2ZW50TGlzdGVuZXJzKCkge1xuICBpZiAodGhpcy5zdGF0ZS5ldmVudHNFbmFibGVkKSB7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5zY2hlZHVsZVVwZGF0ZSk7XG4gICAgdGhpcy5zdGF0ZSA9IHJlbW92ZUV2ZW50TGlzdGVuZXJzKHRoaXMucmVmZXJlbmNlLCB0aGlzLnN0YXRlKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBUZWxscyBpZiBhIGdpdmVuIGlucHV0IGlzIGEgbnVtYmVyXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0geyp9IGlucHV0IHRvIGNoZWNrXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc051bWVyaWMobikge1xuICByZXR1cm4gbiAhPT0gJycgJiYgIWlzTmFOKHBhcnNlRmxvYXQobikpICYmIGlzRmluaXRlKG4pO1xufVxuIiwiaW1wb3J0IGlzTnVtZXJpYyBmcm9tICcuL2lzTnVtZXJpYyc7XG5cbi8qKlxuICogU2V0IHRoZSBzdHlsZSB0byB0aGUgZ2l2ZW4gcG9wcGVyXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnQgLSBFbGVtZW50IHRvIGFwcGx5IHRoZSBzdHlsZSB0b1xuICogQGFyZ3VtZW50IHtPYmplY3R9IHN0eWxlc1xuICogT2JqZWN0IHdpdGggYSBsaXN0IG9mIHByb3BlcnRpZXMgYW5kIHZhbHVlcyB3aGljaCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0U3R5bGVzKGVsZW1lbnQsIHN0eWxlcykge1xuICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2gocHJvcCA9PiB7XG4gICAgbGV0IHVuaXQgPSAnJztcbiAgICAvLyBhZGQgdW5pdCBpZiB0aGUgdmFsdWUgaXMgbnVtZXJpYyBhbmQgaXMgb25lIG9mIHRoZSBmb2xsb3dpbmdcbiAgICBpZiAoXG4gICAgICBbJ3dpZHRoJywgJ2hlaWdodCcsICd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXS5pbmRleE9mKHByb3ApICE9PVxuICAgICAgICAtMSAmJlxuICAgICAgaXNOdW1lcmljKHN0eWxlc1twcm9wXSlcbiAgICApIHtcbiAgICAgIHVuaXQgPSAncHgnO1xuICAgIH1cbiAgICBlbGVtZW50LnN0eWxlW3Byb3BdID0gc3R5bGVzW3Byb3BdICsgdW5pdDtcbiAgfSk7XG59XG4iLCIvKipcbiAqIFNldCB0aGUgYXR0cmlidXRlcyB0byB0aGUgZ2l2ZW4gcG9wcGVyXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnQgLSBFbGVtZW50IHRvIGFwcGx5IHRoZSBhdHRyaWJ1dGVzIHRvXG4gKiBAYXJndW1lbnQge09iamVjdH0gc3R5bGVzXG4gKiBPYmplY3Qgd2l0aCBhIGxpc3Qgb2YgcHJvcGVydGllcyBhbmQgdmFsdWVzIHdoaWNoIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgZWxlbWVudFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpIHtcbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbihwcm9wKSB7XG4gICAgY29uc3QgdmFsdWUgPSBhdHRyaWJ1dGVzW3Byb3BdO1xuICAgIGlmICh2YWx1ZSAhPT0gZmFsc2UpIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKHByb3AsIGF0dHJpYnV0ZXNbcHJvcF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShwcm9wKTtcbiAgICB9XG4gIH0pO1xufVxuIiwiaW1wb3J0IHNldFN0eWxlcyBmcm9tICcuLi91dGlscy9zZXRTdHlsZXMnO1xuaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSAnLi4vdXRpbHMvc2V0QXR0cmlidXRlcyc7XG5pbXBvcnQgZ2V0UmVmZXJlbmNlT2Zmc2V0cyBmcm9tICcuLi91dGlscy9nZXRSZWZlcmVuY2VPZmZzZXRzJztcbmltcG9ydCBjb21wdXRlQXV0b1BsYWNlbWVudCBmcm9tICcuLi91dGlscy9jb21wdXRlQXV0b1BsYWNlbWVudCc7XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YS5zdHlsZXMgLSBMaXN0IG9mIHN0eWxlIHByb3BlcnRpZXMgLSB2YWx1ZXMgdG8gYXBwbHkgdG8gcG9wcGVyIGVsZW1lbnRcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhLmF0dHJpYnV0ZXMgLSBMaXN0IG9mIGF0dHJpYnV0ZSBwcm9wZXJ0aWVzIC0gdmFsdWVzIHRvIGFwcGx5IHRvIHBvcHBlciBlbGVtZW50XG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgc2FtZSBkYXRhIG9iamVjdFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHBseVN0eWxlKGRhdGEpIHtcbiAgLy8gYW55IHByb3BlcnR5IHByZXNlbnQgaW4gYGRhdGEuc3R5bGVzYCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlcixcbiAgLy8gaW4gdGhpcyB3YXkgd2UgY2FuIG1ha2UgdGhlIDNyZCBwYXJ0eSBtb2RpZmllcnMgYWRkIGN1c3RvbSBzdHlsZXMgdG8gaXRcbiAgLy8gQmUgYXdhcmUsIG1vZGlmaWVycyBjb3VsZCBvdmVycmlkZSB0aGUgcHJvcGVydGllcyBkZWZpbmVkIGluIHRoZSBwcmV2aW91c1xuICAvLyBsaW5lcyBvZiB0aGlzIG1vZGlmaWVyIVxuICBzZXRTdHlsZXMoZGF0YS5pbnN0YW5jZS5wb3BwZXIsIGRhdGEuc3R5bGVzKTtcblxuICAvLyBhbnkgcHJvcGVydHkgcHJlc2VudCBpbiBgZGF0YS5hdHRyaWJ1dGVzYCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlcixcbiAgLy8gdGhleSB3aWxsIGJlIHNldCBhcyBIVE1MIGF0dHJpYnV0ZXMgb2YgdGhlIGVsZW1lbnRcbiAgc2V0QXR0cmlidXRlcyhkYXRhLmluc3RhbmNlLnBvcHBlciwgZGF0YS5hdHRyaWJ1dGVzKTtcblxuICAvLyBpZiBhcnJvd0VsZW1lbnQgaXMgZGVmaW5lZCBhbmQgYXJyb3dTdHlsZXMgaGFzIHNvbWUgcHJvcGVydGllc1xuICBpZiAoZGF0YS5hcnJvd0VsZW1lbnQgJiYgT2JqZWN0LmtleXMoZGF0YS5hcnJvd1N0eWxlcykubGVuZ3RoKSB7XG4gICAgc2V0U3R5bGVzKGRhdGEuYXJyb3dFbGVtZW50LCBkYXRhLmFycm93U3R5bGVzKTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIFNldCB0aGUgeC1wbGFjZW1lbnQgYXR0cmlidXRlIGJlZm9yZSBldmVyeXRoaW5nIGVsc2UgYmVjYXVzZSBpdCBjb3VsZCBiZSB1c2VkXG4gKiB0byBhZGQgbWFyZ2lucyB0byB0aGUgcG9wcGVyIG1hcmdpbnMgbmVlZHMgdG8gYmUgY2FsY3VsYXRlZCB0byBnZXQgdGhlXG4gKiBjb3JyZWN0IHBvcHBlciBvZmZzZXRzLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5tb2RpZmllcnNcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHJlZmVyZW5jZSAtIFRoZSByZWZlcmVuY2UgZWxlbWVudCB1c2VkIHRvIHBvc2l0aW9uIHRoZSBwb3BwZXJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBvcHBlciAtIFRoZSBIVE1MIGVsZW1lbnQgdXNlZCBhcyBwb3BwZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gUG9wcGVyLmpzIG9wdGlvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5U3R5bGVPbkxvYWQoXG4gIHJlZmVyZW5jZSxcbiAgcG9wcGVyLFxuICBvcHRpb25zLFxuICBtb2RpZmllck9wdGlvbnMsXG4gIHN0YXRlXG4pIHtcbiAgLy8gY29tcHV0ZSByZWZlcmVuY2UgZWxlbWVudCBvZmZzZXRzXG4gIGNvbnN0IHJlZmVyZW5jZU9mZnNldHMgPSBnZXRSZWZlcmVuY2VPZmZzZXRzKHN0YXRlLCBwb3BwZXIsIHJlZmVyZW5jZSwgb3B0aW9ucy5wb3NpdGlvbkZpeGVkKTtcblxuICAvLyBjb21wdXRlIGF1dG8gcGxhY2VtZW50LCBzdG9yZSBwbGFjZW1lbnQgaW5zaWRlIHRoZSBkYXRhIG9iamVjdCxcbiAgLy8gbW9kaWZpZXJzIHdpbGwgYmUgYWJsZSB0byBlZGl0IGBwbGFjZW1lbnRgIGlmIG5lZWRlZFxuICAvLyBhbmQgcmVmZXIgdG8gb3JpZ2luYWxQbGFjZW1lbnQgdG8ga25vdyB0aGUgb3JpZ2luYWwgdmFsdWVcbiAgY29uc3QgcGxhY2VtZW50ID0gY29tcHV0ZUF1dG9QbGFjZW1lbnQoXG4gICAgb3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgcmVmZXJlbmNlT2Zmc2V0cyxcbiAgICBwb3BwZXIsXG4gICAgcmVmZXJlbmNlLFxuICAgIG9wdGlvbnMubW9kaWZpZXJzLmZsaXAuYm91bmRhcmllc0VsZW1lbnQsXG4gICAgb3B0aW9ucy5tb2RpZmllcnMuZmxpcC5wYWRkaW5nXG4gICk7XG5cbiAgcG9wcGVyLnNldEF0dHJpYnV0ZSgneC1wbGFjZW1lbnQnLCBwbGFjZW1lbnQpO1xuXG4gIC8vIEFwcGx5IGBwb3NpdGlvbmAgdG8gcG9wcGVyIGJlZm9yZSBhbnl0aGluZyBlbHNlIGJlY2F1c2VcbiAgLy8gd2l0aG91dCB0aGUgcG9zaXRpb24gYXBwbGllZCB3ZSBjYW4ndCBndWFyYW50ZWUgY29ycmVjdCBjb21wdXRhdGlvbnNcbiAgc2V0U3R5bGVzKHBvcHBlciwgeyBwb3NpdGlvbjogb3B0aW9ucy5wb3NpdGlvbkZpeGVkID8gJ2ZpeGVkJyA6ICdhYnNvbHV0ZScgfSk7XG5cbiAgcmV0dXJuIG9wdGlvbnM7XG59XG4iLCIvKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IGB1cGRhdGVgIG1ldGhvZFxuICogQGFyZ3VtZW50IHtCb29sZWFufSBzaG91bGRSb3VuZCAtIElmIHRoZSBvZmZzZXRzIHNob3VsZCBiZSByb3VuZGVkIGF0IGFsbFxuICogQHJldHVybnMge09iamVjdH0gVGhlIHBvcHBlcidzIHBvc2l0aW9uIG9mZnNldHMgcm91bmRlZFxuICpcbiAqIFRoZSB0YWxlIG9mIHBpeGVsLXBlcmZlY3QgcG9zaXRpb25pbmcuIEl0J3Mgc3RpbGwgbm90IDEwMCUgcGVyZmVjdCwgYnV0IGFzXG4gKiBnb29kIGFzIGl0IGNhbiBiZSB3aXRoaW4gcmVhc29uLlxuICogRGlzY3Vzc2lvbiBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vRmV6VnJhc3RhL3BvcHBlci5qcy9wdWxsLzcxNVxuICpcbiAqIExvdyBEUEkgc2NyZWVucyBjYXVzZSBhIHBvcHBlciB0byBiZSBibHVycnkgaWYgbm90IHVzaW5nIGZ1bGwgcGl4ZWxzIChTYWZhcmlcbiAqIGFzIHdlbGwgb24gSGlnaCBEUEkgc2NyZWVucykuXG4gKlxuICogRmlyZWZveCBwcmVmZXJzIG5vIHJvdW5kaW5nIGZvciBwb3NpdGlvbmluZyBhbmQgZG9lcyBub3QgaGF2ZSBibHVycmluZXNzIG9uXG4gKiBoaWdoIERQSSBzY3JlZW5zLlxuICpcbiAqIE9ubHkgaG9yaXpvbnRhbCBwbGFjZW1lbnQgYW5kIGxlZnQvcmlnaHQgdmFsdWVzIG5lZWQgdG8gYmUgY29uc2lkZXJlZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Um91bmRlZE9mZnNldHMoZGF0YSwgc2hvdWxkUm91bmQpIHtcbiAgY29uc3QgeyBwb3BwZXIsIHJlZmVyZW5jZSB9ID0gZGF0YS5vZmZzZXRzO1xuICBjb25zdCB7IHJvdW5kLCBmbG9vciB9ID0gTWF0aDtcbiAgY29uc3Qgbm9Sb3VuZCA9IHYgPT4gdjtcbiAgXG4gIGNvbnN0IHJlZmVyZW5jZVdpZHRoID0gcm91bmQocmVmZXJlbmNlLndpZHRoKTtcbiAgY29uc3QgcG9wcGVyV2lkdGggPSByb3VuZChwb3BwZXIud2lkdGgpO1xuICBcbiAgY29uc3QgaXNWZXJ0aWNhbCA9IFsnbGVmdCcsICdyaWdodCddLmluZGV4T2YoZGF0YS5wbGFjZW1lbnQpICE9PSAtMTtcbiAgY29uc3QgaXNWYXJpYXRpb24gPSBkYXRhLnBsYWNlbWVudC5pbmRleE9mKCctJykgIT09IC0xO1xuICBjb25zdCBzYW1lV2lkdGhQYXJpdHkgPSByZWZlcmVuY2VXaWR0aCAlIDIgPT09IHBvcHBlcldpZHRoICUgMjtcbiAgY29uc3QgYm90aE9kZFdpZHRoID0gcmVmZXJlbmNlV2lkdGggJSAyID09PSAxICYmIHBvcHBlcldpZHRoICUgMiA9PT0gMTtcblxuICBjb25zdCBob3Jpem9udGFsVG9JbnRlZ2VyID0gIXNob3VsZFJvdW5kXG4gICAgPyBub1JvdW5kXG4gICAgOiBpc1ZlcnRpY2FsIHx8IGlzVmFyaWF0aW9uIHx8IHNhbWVXaWR0aFBhcml0eVxuICAgID8gcm91bmRcbiAgICA6IGZsb29yO1xuICBjb25zdCB2ZXJ0aWNhbFRvSW50ZWdlciA9ICFzaG91bGRSb3VuZCA/IG5vUm91bmQgOiByb3VuZDtcblxuICByZXR1cm4ge1xuICAgIGxlZnQ6IGhvcml6b250YWxUb0ludGVnZXIoXG4gICAgICBib3RoT2RkV2lkdGggJiYgIWlzVmFyaWF0aW9uICYmIHNob3VsZFJvdW5kXG4gICAgICAgID8gcG9wcGVyLmxlZnQgLSAxXG4gICAgICAgIDogcG9wcGVyLmxlZnRcbiAgICApLFxuICAgIHRvcDogdmVydGljYWxUb0ludGVnZXIocG9wcGVyLnRvcCksXG4gICAgYm90dG9tOiB2ZXJ0aWNhbFRvSW50ZWdlcihwb3BwZXIuYm90dG9tKSxcbiAgICByaWdodDogaG9yaXpvbnRhbFRvSW50ZWdlcihwb3BwZXIucmlnaHQpLFxuICB9O1xufVxuIiwiaW1wb3J0IGdldFN1cHBvcnRlZFByb3BlcnR5TmFtZSBmcm9tICcuLi91dGlscy9nZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUnO1xuaW1wb3J0IGZpbmQgZnJvbSAnLi4vdXRpbHMvZmluZCc7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gJy4uL3V0aWxzL2dldE9mZnNldFBhcmVudCc7XG5pbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gJy4uL3V0aWxzL2dldEJvdW5kaW5nQ2xpZW50UmVjdCc7XG5pbXBvcnQgZ2V0Um91bmRlZE9mZnNldHMgZnJvbSAnLi4vdXRpbHMvZ2V0Um91bmRlZE9mZnNldHMnO1xuaW1wb3J0IGlzQnJvd3NlciBmcm9tICcuLi91dGlscy9pc0Jyb3dzZXInO1xuXG5jb25zdCBpc0ZpcmVmb3ggPSBpc0Jyb3dzZXIgJiYgL0ZpcmVmb3gvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IGB1cGRhdGVgIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlU3R5bGUoZGF0YSwgb3B0aW9ucykge1xuICBjb25zdCB7IHgsIHkgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHsgcG9wcGVyIH0gPSBkYXRhLm9mZnNldHM7XG5cbiAgLy8gUmVtb3ZlIHRoaXMgbGVnYWN5IHN1cHBvcnQgaW4gUG9wcGVyLmpzIHYyXG4gIGNvbnN0IGxlZ2FjeUdwdUFjY2VsZXJhdGlvbk9wdGlvbiA9IGZpbmQoXG4gICAgZGF0YS5pbnN0YW5jZS5tb2RpZmllcnMsXG4gICAgbW9kaWZpZXIgPT4gbW9kaWZpZXIubmFtZSA9PT0gJ2FwcGx5U3R5bGUnXG4gICkuZ3B1QWNjZWxlcmF0aW9uO1xuICBpZiAobGVnYWN5R3B1QWNjZWxlcmF0aW9uT3B0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICAnV0FSTklORzogYGdwdUFjY2VsZXJhdGlvbmAgb3B0aW9uIG1vdmVkIHRvIGBjb21wdXRlU3R5bGVgIG1vZGlmaWVyIGFuZCB3aWxsIG5vdCBiZSBzdXBwb3J0ZWQgaW4gZnV0dXJlIHZlcnNpb25zIG9mIFBvcHBlci5qcyEnXG4gICAgKTtcbiAgfVxuICBjb25zdCBncHVBY2NlbGVyYXRpb24gPVxuICAgIGxlZ2FjeUdwdUFjY2VsZXJhdGlvbk9wdGlvbiAhPT0gdW5kZWZpbmVkXG4gICAgICA/IGxlZ2FjeUdwdUFjY2VsZXJhdGlvbk9wdGlvblxuICAgICAgOiBvcHRpb25zLmdwdUFjY2VsZXJhdGlvbjtcblxuICBjb25zdCBvZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQoZGF0YS5pbnN0YW5jZS5wb3BwZXIpO1xuICBjb25zdCBvZmZzZXRQYXJlbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KG9mZnNldFBhcmVudCk7XG5cbiAgLy8gU3R5bGVzXG4gIGNvbnN0IHN0eWxlcyA9IHtcbiAgICBwb3NpdGlvbjogcG9wcGVyLnBvc2l0aW9uLFxuICB9O1xuXG4gIGNvbnN0IG9mZnNldHMgPSBnZXRSb3VuZGVkT2Zmc2V0cyhcbiAgICBkYXRhLFxuICAgIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIDwgMiB8fCAhaXNGaXJlZm94XG4gICk7XG5cbiAgY29uc3Qgc2lkZUEgPSB4ID09PSAnYm90dG9tJyA/ICd0b3AnIDogJ2JvdHRvbSc7XG4gIGNvbnN0IHNpZGVCID0geSA9PT0gJ3JpZ2h0JyA/ICdsZWZ0JyA6ICdyaWdodCc7XG5cbiAgLy8gaWYgZ3B1QWNjZWxlcmF0aW9uIGlzIHNldCB0byBgdHJ1ZWAgYW5kIHRyYW5zZm9ybSBpcyBzdXBwb3J0ZWQsXG4gIC8vICB3ZSB1c2UgYHRyYW5zbGF0ZTNkYCB0byBhcHBseSB0aGUgcG9zaXRpb24gdG8gdGhlIHBvcHBlciB3ZVxuICAvLyBhdXRvbWF0aWNhbGx5IHVzZSB0aGUgc3VwcG9ydGVkIHByZWZpeGVkIHZlcnNpb24gaWYgbmVlZGVkXG4gIGNvbnN0IHByZWZpeGVkUHJvcGVydHkgPSBnZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUoJ3RyYW5zZm9ybScpO1xuXG4gIC8vIG5vdywgbGV0J3MgbWFrZSBhIHN0ZXAgYmFjayBhbmQgbG9vayBhdCB0aGlzIGNvZGUgY2xvc2VseSAod3RmPylcbiAgLy8gSWYgdGhlIGNvbnRlbnQgb2YgdGhlIHBvcHBlciBncm93cyBvbmNlIGl0J3MgYmVlbiBwb3NpdGlvbmVkLCBpdFxuICAvLyBtYXkgaGFwcGVuIHRoYXQgdGhlIHBvcHBlciBnZXRzIG1pc3BsYWNlZCBiZWNhdXNlIG9mIHRoZSBuZXcgY29udGVudFxuICAvLyBvdmVyZmxvd2luZyBpdHMgcmVmZXJlbmNlIGVsZW1lbnRcbiAgLy8gVG8gYXZvaWQgdGhpcyBwcm9ibGVtLCB3ZSBwcm92aWRlIHR3byBvcHRpb25zICh4IGFuZCB5KSwgd2hpY2ggYWxsb3dcbiAgLy8gdGhlIGNvbnN1bWVyIHRvIGRlZmluZSB0aGUgb2Zmc2V0IG9yaWdpbi5cbiAgLy8gSWYgd2UgcG9zaXRpb24gYSBwb3BwZXIgb24gdG9wIG9mIGEgcmVmZXJlbmNlIGVsZW1lbnQsIHdlIGNhbiBzZXRcbiAgLy8gYHhgIHRvIGB0b3BgIHRvIG1ha2UgdGhlIHBvcHBlciBncm93IHRvd2FyZHMgaXRzIHRvcCBpbnN0ZWFkIG9mXG4gIC8vIGl0cyBib3R0b20uXG4gIGxldCBsZWZ0LCB0b3A7XG4gIGlmIChzaWRlQSA9PT0gJ2JvdHRvbScpIHtcbiAgICAvLyB3aGVuIG9mZnNldFBhcmVudCBpcyA8aHRtbD4gdGhlIHBvc2l0aW9uaW5nIGlzIHJlbGF0aXZlIHRvIHRoZSBib3R0b20gb2YgdGhlIHNjcmVlbiAoZXhjbHVkaW5nIHRoZSBzY3JvbGxiYXIpXG4gICAgLy8gYW5kIG5vdCB0aGUgYm90dG9tIG9mIHRoZSBodG1sIGVsZW1lbnRcbiAgICBpZiAob2Zmc2V0UGFyZW50Lm5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICAgIHRvcCA9IC1vZmZzZXRQYXJlbnQuY2xpZW50SGVpZ2h0ICsgb2Zmc2V0cy5ib3R0b207XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvcCA9IC1vZmZzZXRQYXJlbnRSZWN0LmhlaWdodCArIG9mZnNldHMuYm90dG9tO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0b3AgPSBvZmZzZXRzLnRvcDtcbiAgfVxuICBpZiAoc2lkZUIgPT09ICdyaWdodCcpIHtcbiAgICBpZiAob2Zmc2V0UGFyZW50Lm5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICAgIGxlZnQgPSAtb2Zmc2V0UGFyZW50LmNsaWVudFdpZHRoICsgb2Zmc2V0cy5yaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgbGVmdCA9IC1vZmZzZXRQYXJlbnRSZWN0LndpZHRoICsgb2Zmc2V0cy5yaWdodDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbGVmdCA9IG9mZnNldHMubGVmdDtcbiAgfVxuICBpZiAoZ3B1QWNjZWxlcmF0aW9uICYmIHByZWZpeGVkUHJvcGVydHkpIHtcbiAgICBzdHlsZXNbcHJlZml4ZWRQcm9wZXJ0eV0gPSBgdHJhbnNsYXRlM2QoJHtsZWZ0fXB4LCAke3RvcH1weCwgMClgO1xuICAgIHN0eWxlc1tzaWRlQV0gPSAwO1xuICAgIHN0eWxlc1tzaWRlQl0gPSAwO1xuICAgIHN0eWxlcy53aWxsQ2hhbmdlID0gJ3RyYW5zZm9ybSc7XG4gIH0gZWxzZSB7XG4gICAgLy8gb3Rod2VyaXNlLCB3ZSB1c2UgdGhlIHN0YW5kYXJkIGB0b3BgLCBgbGVmdGAsIGBib3R0b21gIGFuZCBgcmlnaHRgIHByb3BlcnRpZXNcbiAgICBjb25zdCBpbnZlcnRUb3AgPSBzaWRlQSA9PT0gJ2JvdHRvbScgPyAtMSA6IDE7XG4gICAgY29uc3QgaW52ZXJ0TGVmdCA9IHNpZGVCID09PSAncmlnaHQnID8gLTEgOiAxO1xuICAgIHN0eWxlc1tzaWRlQV0gPSB0b3AgKiBpbnZlcnRUb3A7XG4gICAgc3R5bGVzW3NpZGVCXSA9IGxlZnQgKiBpbnZlcnRMZWZ0O1xuICAgIHN0eWxlcy53aWxsQ2hhbmdlID0gYCR7c2lkZUF9LCAke3NpZGVCfWA7XG4gIH1cblxuICAvLyBBdHRyaWJ1dGVzXG4gIGNvbnN0IGF0dHJpYnV0ZXMgPSB7XG4gICAgJ3gtcGxhY2VtZW50JzogZGF0YS5wbGFjZW1lbnQsXG4gIH07XG5cbiAgLy8gVXBkYXRlIGBkYXRhYCBhdHRyaWJ1dGVzLCBzdHlsZXMgYW5kIGFycm93U3R5bGVzXG4gIGRhdGEuYXR0cmlidXRlcyA9IHsgLi4uYXR0cmlidXRlcywgLi4uZGF0YS5hdHRyaWJ1dGVzIH07XG4gIGRhdGEuc3R5bGVzID0geyAuLi5zdHlsZXMsIC4uLmRhdGEuc3R5bGVzIH07XG4gIGRhdGEuYXJyb3dTdHlsZXMgPSB7IC4uLmRhdGEub2Zmc2V0cy5hcnJvdywgLi4uZGF0YS5hcnJvd1N0eWxlcyB9O1xuXG4gIHJldHVybiBkYXRhO1xufVxuIiwiaW1wb3J0IGZpbmQgZnJvbSAnLi9maW5kJztcblxuLyoqXG4gKiBIZWxwZXIgdXNlZCB0byBrbm93IGlmIHRoZSBnaXZlbiBtb2RpZmllciBkZXBlbmRzIGZyb20gYW5vdGhlciBvbmUuPGJyIC8+XG4gKiBJdCBjaGVja3MgaWYgdGhlIG5lZWRlZCBtb2RpZmllciBpcyBsaXN0ZWQgYW5kIGVuYWJsZWQuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge0FycmF5fSBtb2RpZmllcnMgLSBsaXN0IG9mIG1vZGlmaWVyc1xuICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RpbmdOYW1lIC0gbmFtZSBvZiByZXF1ZXN0aW5nIG1vZGlmaWVyXG4gKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdGVkTmFtZSAtIG5hbWUgb2YgcmVxdWVzdGVkIG1vZGlmaWVyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNNb2RpZmllclJlcXVpcmVkKFxuICBtb2RpZmllcnMsXG4gIHJlcXVlc3RpbmdOYW1lLFxuICByZXF1ZXN0ZWROYW1lXG4pIHtcbiAgY29uc3QgcmVxdWVzdGluZyA9IGZpbmQobW9kaWZpZXJzLCAoeyBuYW1lIH0pID0+IG5hbWUgPT09IHJlcXVlc3RpbmdOYW1lKTtcblxuICBjb25zdCBpc1JlcXVpcmVkID1cbiAgICAhIXJlcXVlc3RpbmcgJiZcbiAgICBtb2RpZmllcnMuc29tZShtb2RpZmllciA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBtb2RpZmllci5uYW1lID09PSByZXF1ZXN0ZWROYW1lICYmXG4gICAgICAgIG1vZGlmaWVyLmVuYWJsZWQgJiZcbiAgICAgICAgbW9kaWZpZXIub3JkZXIgPCByZXF1ZXN0aW5nLm9yZGVyXG4gICAgICApO1xuICAgIH0pO1xuXG4gIGlmICghaXNSZXF1aXJlZCkge1xuICAgIGNvbnN0IHJlcXVlc3RpbmcgPSBgXFxgJHtyZXF1ZXN0aW5nTmFtZX1cXGBgO1xuICAgIGNvbnN0IHJlcXVlc3RlZCA9IGBcXGAke3JlcXVlc3RlZE5hbWV9XFxgYDtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBgJHtyZXF1ZXN0ZWR9IG1vZGlmaWVyIGlzIHJlcXVpcmVkIGJ5ICR7cmVxdWVzdGluZ30gbW9kaWZpZXIgaW4gb3JkZXIgdG8gd29yaywgYmUgc3VyZSB0byBpbmNsdWRlIGl0IGJlZm9yZSAke3JlcXVlc3Rpbmd9IWBcbiAgICApO1xuICB9XG4gIHJldHVybiBpc1JlcXVpcmVkO1xufVxuIiwiaW1wb3J0IGdldENsaWVudFJlY3QgZnJvbSAnLi4vdXRpbHMvZ2V0Q2xpZW50UmVjdCc7XG5pbXBvcnQgZ2V0T3V0ZXJTaXplcyBmcm9tICcuLi91dGlscy9nZXRPdXRlclNpemVzJztcbmltcG9ydCBpc01vZGlmaWVyUmVxdWlyZWQgZnJvbSAnLi4vdXRpbHMvaXNNb2RpZmllclJlcXVpcmVkJztcbmltcG9ydCBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkgZnJvbSAnLi4vdXRpbHMvZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5JztcblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSB1cGRhdGUgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFycm93KGRhdGEsIG9wdGlvbnMpIHtcbiAgLy8gYXJyb3cgZGVwZW5kcyBvbiBrZWVwVG9nZXRoZXIgaW4gb3JkZXIgdG8gd29ya1xuICBpZiAoIWlzTW9kaWZpZXJSZXF1aXJlZChkYXRhLmluc3RhbmNlLm1vZGlmaWVycywgJ2Fycm93JywgJ2tlZXBUb2dldGhlcicpKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBsZXQgYXJyb3dFbGVtZW50ID0gb3B0aW9ucy5lbGVtZW50O1xuXG4gIC8vIGlmIGFycm93RWxlbWVudCBpcyBhIHN0cmluZywgc3VwcG9zZSBpdCdzIGEgQ1NTIHNlbGVjdG9yXG4gIGlmICh0eXBlb2YgYXJyb3dFbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgIGFycm93RWxlbWVudCA9IGRhdGEuaW5zdGFuY2UucG9wcGVyLnF1ZXJ5U2VsZWN0b3IoYXJyb3dFbGVtZW50KTtcblxuICAgIC8vIGlmIGFycm93RWxlbWVudCBpcyBub3QgZm91bmQsIGRvbid0IHJ1biB0aGUgbW9kaWZpZXJcbiAgICBpZiAoIWFycm93RWxlbWVudCkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIGlmIHRoZSBhcnJvd0VsZW1lbnQgaXNuJ3QgYSBxdWVyeSBzZWxlY3RvciB3ZSBtdXN0IGNoZWNrIHRoYXQgdGhlXG4gICAgLy8gcHJvdmlkZWQgRE9NIG5vZGUgaXMgY2hpbGQgb2YgaXRzIHBvcHBlciBub2RlXG4gICAgaWYgKCFkYXRhLmluc3RhbmNlLnBvcHBlci5jb250YWlucyhhcnJvd0VsZW1lbnQpKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdXQVJOSU5HOiBgYXJyb3cuZWxlbWVudGAgbXVzdCBiZSBjaGlsZCBvZiBpdHMgcG9wcGVyIGVsZW1lbnQhJ1xuICAgICAgKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50LnNwbGl0KCctJylbMF07XG4gIGNvbnN0IHsgcG9wcGVyLCByZWZlcmVuY2UgfSA9IGRhdGEub2Zmc2V0cztcbiAgY29uc3QgaXNWZXJ0aWNhbCA9IFsnbGVmdCcsICdyaWdodCddLmluZGV4T2YocGxhY2VtZW50KSAhPT0gLTE7XG5cbiAgY29uc3QgbGVuID0gaXNWZXJ0aWNhbCA/ICdoZWlnaHQnIDogJ3dpZHRoJztcbiAgY29uc3Qgc2lkZUNhcGl0YWxpemVkID0gaXNWZXJ0aWNhbCA/ICdUb3AnIDogJ0xlZnQnO1xuICBjb25zdCBzaWRlID0gc2lkZUNhcGl0YWxpemVkLnRvTG93ZXJDYXNlKCk7XG4gIGNvbnN0IGFsdFNpZGUgPSBpc1ZlcnRpY2FsID8gJ2xlZnQnIDogJ3RvcCc7XG4gIGNvbnN0IG9wU2lkZSA9IGlzVmVydGljYWwgPyAnYm90dG9tJyA6ICdyaWdodCc7XG4gIGNvbnN0IGFycm93RWxlbWVudFNpemUgPSBnZXRPdXRlclNpemVzKGFycm93RWxlbWVudClbbGVuXTtcblxuICAvL1xuICAvLyBleHRlbmRzIGtlZXBUb2dldGhlciBiZWhhdmlvciBtYWtpbmcgc3VyZSB0aGUgcG9wcGVyIGFuZCBpdHNcbiAgLy8gcmVmZXJlbmNlIGhhdmUgZW5vdWdoIHBpeGVscyBpbiBjb25qdW5jdGlvblxuICAvL1xuXG4gIC8vIHRvcC9sZWZ0IHNpZGVcbiAgaWYgKHJlZmVyZW5jZVtvcFNpZGVdIC0gYXJyb3dFbGVtZW50U2l6ZSA8IHBvcHBlcltzaWRlXSkge1xuICAgIGRhdGEub2Zmc2V0cy5wb3BwZXJbc2lkZV0gLT1cbiAgICAgIHBvcHBlcltzaWRlXSAtIChyZWZlcmVuY2Vbb3BTaWRlXSAtIGFycm93RWxlbWVudFNpemUpO1xuICB9XG4gIC8vIGJvdHRvbS9yaWdodCBzaWRlXG4gIGlmIChyZWZlcmVuY2Vbc2lkZV0gKyBhcnJvd0VsZW1lbnRTaXplID4gcG9wcGVyW29wU2lkZV0pIHtcbiAgICBkYXRhLm9mZnNldHMucG9wcGVyW3NpZGVdICs9XG4gICAgICByZWZlcmVuY2Vbc2lkZV0gKyBhcnJvd0VsZW1lbnRTaXplIC0gcG9wcGVyW29wU2lkZV07XG4gIH1cbiAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IGdldENsaWVudFJlY3QoZGF0YS5vZmZzZXRzLnBvcHBlcik7XG5cbiAgLy8gY29tcHV0ZSBjZW50ZXIgb2YgdGhlIHBvcHBlclxuICBjb25zdCBjZW50ZXIgPSByZWZlcmVuY2Vbc2lkZV0gKyByZWZlcmVuY2VbbGVuXSAvIDIgLSBhcnJvd0VsZW1lbnRTaXplIC8gMjtcblxuICAvLyBDb21wdXRlIHRoZSBzaWRlVmFsdWUgdXNpbmcgdGhlIHVwZGF0ZWQgcG9wcGVyIG9mZnNldHNcbiAgLy8gdGFrZSBwb3BwZXIgbWFyZ2luIGluIGFjY291bnQgYmVjYXVzZSB3ZSBkb24ndCBoYXZlIHRoaXMgaW5mbyBhdmFpbGFibGVcbiAgY29uc3QgY3NzID0gZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGRhdGEuaW5zdGFuY2UucG9wcGVyKTtcbiAgY29uc3QgcG9wcGVyTWFyZ2luU2lkZSA9IHBhcnNlRmxvYXQoY3NzW2BtYXJnaW4ke3NpZGVDYXBpdGFsaXplZH1gXSwgMTApO1xuICBjb25zdCBwb3BwZXJCb3JkZXJTaWRlID0gcGFyc2VGbG9hdChjc3NbYGJvcmRlciR7c2lkZUNhcGl0YWxpemVkfVdpZHRoYF0sIDEwKTtcbiAgbGV0IHNpZGVWYWx1ZSA9XG4gICAgY2VudGVyIC0gZGF0YS5vZmZzZXRzLnBvcHBlcltzaWRlXSAtIHBvcHBlck1hcmdpblNpZGUgLSBwb3BwZXJCb3JkZXJTaWRlO1xuXG4gIC8vIHByZXZlbnQgYXJyb3dFbGVtZW50IGZyb20gYmVpbmcgcGxhY2VkIG5vdCBjb250aWd1b3VzbHkgdG8gaXRzIHBvcHBlclxuICBzaWRlVmFsdWUgPSBNYXRoLm1heChNYXRoLm1pbihwb3BwZXJbbGVuXSAtIGFycm93RWxlbWVudFNpemUsIHNpZGVWYWx1ZSksIDApO1xuXG4gIGRhdGEuYXJyb3dFbGVtZW50ID0gYXJyb3dFbGVtZW50O1xuICBkYXRhLm9mZnNldHMuYXJyb3cgPSB7XG4gICAgW3NpZGVdOiBNYXRoLnJvdW5kKHNpZGVWYWx1ZSksXG4gICAgW2FsdFNpZGVdOiAnJywgLy8gbWFrZSBzdXJlIHRvIHVuc2V0IGFueSBldmVudHVhbCBhbHRTaWRlIHZhbHVlIGZyb20gdGhlIERPTSBub2RlXG4gIH07XG5cbiAgcmV0dXJuIGRhdGE7XG59XG4iLCIvKipcbiAqIEdldCB0aGUgb3Bwb3NpdGUgcGxhY2VtZW50IHZhcmlhdGlvbiBvZiB0aGUgZ2l2ZW4gb25lXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge1N0cmluZ30gcGxhY2VtZW50IHZhcmlhdGlvblxuICogQHJldHVybnMge1N0cmluZ30gZmxpcHBlZCBwbGFjZW1lbnQgdmFyaWF0aW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9wcG9zaXRlVmFyaWF0aW9uKHZhcmlhdGlvbikge1xuICBpZiAodmFyaWF0aW9uID09PSAnZW5kJykge1xuICAgIHJldHVybiAnc3RhcnQnO1xuICB9IGVsc2UgaWYgKHZhcmlhdGlvbiA9PT0gJ3N0YXJ0Jykge1xuICAgIHJldHVybiAnZW5kJztcbiAgfVxuICByZXR1cm4gdmFyaWF0aW9uO1xufVxuIiwiLyoqXG4gKiBMaXN0IG9mIGFjY2VwdGVkIHBsYWNlbWVudHMgdG8gdXNlIGFzIHZhbHVlcyBvZiB0aGUgYHBsYWNlbWVudGAgb3B0aW9uLjxiciAvPlxuICogVmFsaWQgcGxhY2VtZW50cyBhcmU6XG4gKiAtIGBhdXRvYFxuICogLSBgdG9wYFxuICogLSBgcmlnaHRgXG4gKiAtIGBib3R0b21gXG4gKiAtIGBsZWZ0YFxuICpcbiAqIEVhY2ggcGxhY2VtZW50IGNhbiBoYXZlIGEgdmFyaWF0aW9uIGZyb20gdGhpcyBsaXN0OlxuICogLSBgLXN0YXJ0YFxuICogLSBgLWVuZGBcbiAqXG4gKiBWYXJpYXRpb25zIGFyZSBpbnRlcnByZXRlZCBlYXNpbHkgaWYgeW91IHRoaW5rIG9mIHRoZW0gYXMgdGhlIGxlZnQgdG8gcmlnaHRcbiAqIHdyaXR0ZW4gbGFuZ3VhZ2VzLiBIb3Jpem9udGFsbHkgKGB0b3BgIGFuZCBgYm90dG9tYCksIGBzdGFydGAgaXMgbGVmdCBhbmQgYGVuZGBcbiAqIGlzIHJpZ2h0LjxiciAvPlxuICogVmVydGljYWxseSAoYGxlZnRgIGFuZCBgcmlnaHRgKSwgYHN0YXJ0YCBpcyB0b3AgYW5kIGBlbmRgIGlzIGJvdHRvbS5cbiAqXG4gKiBTb21lIHZhbGlkIGV4YW1wbGVzIGFyZTpcbiAqIC0gYHRvcC1lbmRgIChvbiB0b3Agb2YgcmVmZXJlbmNlLCByaWdodCBhbGlnbmVkKVxuICogLSBgcmlnaHQtc3RhcnRgIChvbiByaWdodCBvZiByZWZlcmVuY2UsIHRvcCBhbGlnbmVkKVxuICogLSBgYm90dG9tYCAob24gYm90dG9tLCBjZW50ZXJlZClcbiAqIC0gYGF1dG8tZW5kYCAob24gdGhlIHNpZGUgd2l0aCBtb3JlIHNwYWNlIGF2YWlsYWJsZSwgYWxpZ25tZW50IGRlcGVuZHMgYnkgcGxhY2VtZW50KVxuICpcbiAqIEBzdGF0aWNcbiAqIEB0eXBlIHtBcnJheX1cbiAqIEBlbnVtIHtTdHJpbmd9XG4gKiBAcmVhZG9ubHlcbiAqIEBtZXRob2QgcGxhY2VtZW50c1xuICogQG1lbWJlcm9mIFBvcHBlclxuICovXG5leHBvcnQgZGVmYXVsdCBbXG4gICdhdXRvLXN0YXJ0JyxcbiAgJ2F1dG8nLFxuICAnYXV0by1lbmQnLFxuICAndG9wLXN0YXJ0JyxcbiAgJ3RvcCcsXG4gICd0b3AtZW5kJyxcbiAgJ3JpZ2h0LXN0YXJ0JyxcbiAgJ3JpZ2h0JyxcbiAgJ3JpZ2h0LWVuZCcsXG4gICdib3R0b20tZW5kJyxcbiAgJ2JvdHRvbScsXG4gICdib3R0b20tc3RhcnQnLFxuICAnbGVmdC1lbmQnLFxuICAnbGVmdCcsXG4gICdsZWZ0LXN0YXJ0Jyxcbl07XG4iLCJpbXBvcnQgcGxhY2VtZW50cyBmcm9tICcuLi9tZXRob2RzL3BsYWNlbWVudHMnO1xuXG4vLyBHZXQgcmlkIG9mIGBhdXRvYCBgYXV0by1zdGFydGAgYW5kIGBhdXRvLWVuZGBcbmNvbnN0IHZhbGlkUGxhY2VtZW50cyA9IHBsYWNlbWVudHMuc2xpY2UoMyk7XG5cbi8qKlxuICogR2l2ZW4gYW4gaW5pdGlhbCBwbGFjZW1lbnQsIHJldHVybnMgYWxsIHRoZSBzdWJzZXF1ZW50IHBsYWNlbWVudHNcbiAqIGNsb2Nrd2lzZSAob3IgY291bnRlci1jbG9ja3dpc2UpLlxuICpcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBwbGFjZW1lbnQgLSBBIHZhbGlkIHBsYWNlbWVudCAoaXQgYWNjZXB0cyB2YXJpYXRpb25zKVxuICogQGFyZ3VtZW50IHtCb29sZWFufSBjb3VudGVyIC0gU2V0IHRvIHRydWUgdG8gd2FsayB0aGUgcGxhY2VtZW50cyBjb3VudGVyY2xvY2t3aXNlXG4gKiBAcmV0dXJucyB7QXJyYXl9IHBsYWNlbWVudHMgaW5jbHVkaW5nIHRoZWlyIHZhcmlhdGlvbnNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xvY2t3aXNlKHBsYWNlbWVudCwgY291bnRlciA9IGZhbHNlKSB7XG4gIGNvbnN0IGluZGV4ID0gdmFsaWRQbGFjZW1lbnRzLmluZGV4T2YocGxhY2VtZW50KTtcbiAgY29uc3QgYXJyID0gdmFsaWRQbGFjZW1lbnRzXG4gICAgLnNsaWNlKGluZGV4ICsgMSlcbiAgICAuY29uY2F0KHZhbGlkUGxhY2VtZW50cy5zbGljZSgwLCBpbmRleCkpO1xuICByZXR1cm4gY291bnRlciA/IGFyci5yZXZlcnNlKCkgOiBhcnI7XG59XG4iLCJpbXBvcnQgZ2V0T3Bwb3NpdGVQbGFjZW1lbnQgZnJvbSAnLi4vdXRpbHMvZ2V0T3Bwb3NpdGVQbGFjZW1lbnQnO1xuaW1wb3J0IGdldE9wcG9zaXRlVmFyaWF0aW9uIGZyb20gJy4uL3V0aWxzL2dldE9wcG9zaXRlVmFyaWF0aW9uJztcbmltcG9ydCBnZXRQb3BwZXJPZmZzZXRzIGZyb20gJy4uL3V0aWxzL2dldFBvcHBlck9mZnNldHMnO1xuaW1wb3J0IHJ1bk1vZGlmaWVycyBmcm9tICcuLi91dGlscy9ydW5Nb2RpZmllcnMnO1xuaW1wb3J0IGdldEJvdW5kYXJpZXMgZnJvbSAnLi4vdXRpbHMvZ2V0Qm91bmRhcmllcyc7XG5pbXBvcnQgaXNNb2RpZmllckVuYWJsZWQgZnJvbSAnLi4vdXRpbHMvaXNNb2RpZmllckVuYWJsZWQnO1xuaW1wb3J0IGNsb2Nrd2lzZSBmcm9tICcuLi91dGlscy9jbG9ja3dpc2UnO1xuXG5jb25zdCBCRUhBVklPUlMgPSB7XG4gIEZMSVA6ICdmbGlwJyxcbiAgQ0xPQ0tXSVNFOiAnY2xvY2t3aXNlJyxcbiAgQ09VTlRFUkNMT0NLV0lTRTogJ2NvdW50ZXJjbG9ja3dpc2UnLFxufTtcblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSB1cGRhdGUgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZsaXAoZGF0YSwgb3B0aW9ucykge1xuICAvLyBpZiBgaW5uZXJgIG1vZGlmaWVyIGlzIGVuYWJsZWQsIHdlIGNhbid0IHVzZSB0aGUgYGZsaXBgIG1vZGlmaWVyXG4gIGlmIChpc01vZGlmaWVyRW5hYmxlZChkYXRhLmluc3RhbmNlLm1vZGlmaWVycywgJ2lubmVyJykpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGlmIChkYXRhLmZsaXBwZWQgJiYgZGF0YS5wbGFjZW1lbnQgPT09IGRhdGEub3JpZ2luYWxQbGFjZW1lbnQpIHtcbiAgICAvLyBzZWVtcyBsaWtlIGZsaXAgaXMgdHJ5aW5nIHRvIGxvb3AsIHByb2JhYmx5IHRoZXJlJ3Mgbm90IGVub3VnaCBzcGFjZSBvbiBhbnkgb2YgdGhlIGZsaXBwYWJsZSBzaWRlc1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgY29uc3QgYm91bmRhcmllcyA9IGdldEJvdW5kYXJpZXMoXG4gICAgZGF0YS5pbnN0YW5jZS5wb3BwZXIsXG4gICAgZGF0YS5pbnN0YW5jZS5yZWZlcmVuY2UsXG4gICAgb3B0aW9ucy5wYWRkaW5nLFxuICAgIG9wdGlvbnMuYm91bmRhcmllc0VsZW1lbnQsXG4gICAgZGF0YS5wb3NpdGlvbkZpeGVkXG4gICk7XG5cbiAgbGV0IHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50LnNwbGl0KCctJylbMF07XG4gIGxldCBwbGFjZW1lbnRPcHBvc2l0ZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gIGxldCB2YXJpYXRpb24gPSBkYXRhLnBsYWNlbWVudC5zcGxpdCgnLScpWzFdIHx8ICcnO1xuXG4gIGxldCBmbGlwT3JkZXIgPSBbXTtcblxuICBzd2l0Y2ggKG9wdGlvbnMuYmVoYXZpb3IpIHtcbiAgICBjYXNlIEJFSEFWSU9SUy5GTElQOlxuICAgICAgZmxpcE9yZGVyID0gW3BsYWNlbWVudCwgcGxhY2VtZW50T3Bwb3NpdGVdO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBCRUhBVklPUlMuQ0xPQ0tXSVNFOlxuICAgICAgZmxpcE9yZGVyID0gY2xvY2t3aXNlKHBsYWNlbWVudCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIEJFSEFWSU9SUy5DT1VOVEVSQ0xPQ0tXSVNFOlxuICAgICAgZmxpcE9yZGVyID0gY2xvY2t3aXNlKHBsYWNlbWVudCwgdHJ1ZSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgZmxpcE9yZGVyID0gb3B0aW9ucy5iZWhhdmlvcjtcbiAgfVxuXG4gIGZsaXBPcmRlci5mb3JFYWNoKChzdGVwLCBpbmRleCkgPT4ge1xuICAgIGlmIChwbGFjZW1lbnQgIT09IHN0ZXAgfHwgZmxpcE9yZGVyLmxlbmd0aCA9PT0gaW5kZXggKyAxKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuICAgIHBsYWNlbWVudE9wcG9zaXRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcblxuICAgIGNvbnN0IHBvcHBlck9mZnNldHMgPSBkYXRhLm9mZnNldHMucG9wcGVyO1xuICAgIGNvbnN0IHJlZk9mZnNldHMgPSBkYXRhLm9mZnNldHMucmVmZXJlbmNlO1xuXG4gICAgLy8gdXNpbmcgZmxvb3IgYmVjYXVzZSB0aGUgcmVmZXJlbmNlIG9mZnNldHMgbWF5IGNvbnRhaW4gZGVjaW1hbHMgd2UgYXJlIG5vdCBnb2luZyB0byBjb25zaWRlciBoZXJlXG4gICAgY29uc3QgZmxvb3IgPSBNYXRoLmZsb29yO1xuICAgIGNvbnN0IG92ZXJsYXBzUmVmID1cbiAgICAgIChwbGFjZW1lbnQgPT09ICdsZWZ0JyAmJlxuICAgICAgICBmbG9vcihwb3BwZXJPZmZzZXRzLnJpZ2h0KSA+IGZsb29yKHJlZk9mZnNldHMubGVmdCkpIHx8XG4gICAgICAocGxhY2VtZW50ID09PSAncmlnaHQnICYmXG4gICAgICAgIGZsb29yKHBvcHBlck9mZnNldHMubGVmdCkgPCBmbG9vcihyZWZPZmZzZXRzLnJpZ2h0KSkgfHxcbiAgICAgIChwbGFjZW1lbnQgPT09ICd0b3AnICYmXG4gICAgICAgIGZsb29yKHBvcHBlck9mZnNldHMuYm90dG9tKSA+IGZsb29yKHJlZk9mZnNldHMudG9wKSkgfHxcbiAgICAgIChwbGFjZW1lbnQgPT09ICdib3R0b20nICYmXG4gICAgICAgIGZsb29yKHBvcHBlck9mZnNldHMudG9wKSA8IGZsb29yKHJlZk9mZnNldHMuYm90dG9tKSk7XG5cbiAgICBjb25zdCBvdmVyZmxvd3NMZWZ0ID0gZmxvb3IocG9wcGVyT2Zmc2V0cy5sZWZ0KSA8IGZsb29yKGJvdW5kYXJpZXMubGVmdCk7XG4gICAgY29uc3Qgb3ZlcmZsb3dzUmlnaHQgPSBmbG9vcihwb3BwZXJPZmZzZXRzLnJpZ2h0KSA+IGZsb29yKGJvdW5kYXJpZXMucmlnaHQpO1xuICAgIGNvbnN0IG92ZXJmbG93c1RvcCA9IGZsb29yKHBvcHBlck9mZnNldHMudG9wKSA8IGZsb29yKGJvdW5kYXJpZXMudG9wKTtcbiAgICBjb25zdCBvdmVyZmxvd3NCb3R0b20gPVxuICAgICAgZmxvb3IocG9wcGVyT2Zmc2V0cy5ib3R0b20pID4gZmxvb3IoYm91bmRhcmllcy5ib3R0b20pO1xuXG4gICAgY29uc3Qgb3ZlcmZsb3dzQm91bmRhcmllcyA9XG4gICAgICAocGxhY2VtZW50ID09PSAnbGVmdCcgJiYgb3ZlcmZsb3dzTGVmdCkgfHxcbiAgICAgIChwbGFjZW1lbnQgPT09ICdyaWdodCcgJiYgb3ZlcmZsb3dzUmlnaHQpIHx8XG4gICAgICAocGxhY2VtZW50ID09PSAndG9wJyAmJiBvdmVyZmxvd3NUb3ApIHx8XG4gICAgICAocGxhY2VtZW50ID09PSAnYm90dG9tJyAmJiBvdmVyZmxvd3NCb3R0b20pO1xuXG4gICAgLy8gZmxpcCB0aGUgdmFyaWF0aW9uIGlmIHJlcXVpcmVkXG4gICAgY29uc3QgaXNWZXJ0aWNhbCA9IFsndG9wJywgJ2JvdHRvbSddLmluZGV4T2YocGxhY2VtZW50KSAhPT0gLTE7XG5cbiAgICAvLyBmbGlwcyB2YXJpYXRpb24gaWYgcmVmZXJlbmNlIGVsZW1lbnQgb3ZlcmZsb3dzIGJvdW5kYXJpZXNcbiAgICBjb25zdCBmbGlwcGVkVmFyaWF0aW9uQnlSZWYgPVxuICAgICAgISFvcHRpb25zLmZsaXBWYXJpYXRpb25zICYmXG4gICAgICAoKGlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnc3RhcnQnICYmIG92ZXJmbG93c0xlZnQpIHx8XG4gICAgICAgIChpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ2VuZCcgJiYgb3ZlcmZsb3dzUmlnaHQpIHx8XG4gICAgICAgICghaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdzdGFydCcgJiYgb3ZlcmZsb3dzVG9wKSB8fFxuICAgICAgICAoIWlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnZW5kJyAmJiBvdmVyZmxvd3NCb3R0b20pKTtcblxuICAgIC8vIGZsaXBzIHZhcmlhdGlvbiBpZiBwb3BwZXIgY29udGVudCBvdmVyZmxvd3MgYm91bmRhcmllc1xuICAgIGNvbnN0IGZsaXBwZWRWYXJpYXRpb25CeUNvbnRlbnQgPVxuICAgICAgISFvcHRpb25zLmZsaXBWYXJpYXRpb25zQnlDb250ZW50ICYmXG4gICAgICAoKGlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnc3RhcnQnICYmIG92ZXJmbG93c1JpZ2h0KSB8fFxuICAgICAgICAoaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdlbmQnICYmIG92ZXJmbG93c0xlZnQpIHx8XG4gICAgICAgICghaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdzdGFydCcgJiYgb3ZlcmZsb3dzQm90dG9tKSB8fFxuICAgICAgICAoIWlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnZW5kJyAmJiBvdmVyZmxvd3NUb3ApKTtcblxuICAgIGNvbnN0IGZsaXBwZWRWYXJpYXRpb24gPSBmbGlwcGVkVmFyaWF0aW9uQnlSZWYgfHwgZmxpcHBlZFZhcmlhdGlvbkJ5Q29udGVudDtcblxuICAgIGlmIChvdmVybGFwc1JlZiB8fCBvdmVyZmxvd3NCb3VuZGFyaWVzIHx8IGZsaXBwZWRWYXJpYXRpb24pIHtcbiAgICAgIC8vIHRoaXMgYm9vbGVhbiB0byBkZXRlY3QgYW55IGZsaXAgbG9vcFxuICAgICAgZGF0YS5mbGlwcGVkID0gdHJ1ZTtcblxuICAgICAgaWYgKG92ZXJsYXBzUmVmIHx8IG92ZXJmbG93c0JvdW5kYXJpZXMpIHtcbiAgICAgICAgcGxhY2VtZW50ID0gZmxpcE9yZGVyW2luZGV4ICsgMV07XG4gICAgICB9XG5cbiAgICAgIGlmIChmbGlwcGVkVmFyaWF0aW9uKSB7XG4gICAgICAgIHZhcmlhdGlvbiA9IGdldE9wcG9zaXRlVmFyaWF0aW9uKHZhcmlhdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGRhdGEucGxhY2VtZW50ID0gcGxhY2VtZW50ICsgKHZhcmlhdGlvbiA/ICctJyArIHZhcmlhdGlvbiA6ICcnKTtcblxuICAgICAgLy8gdGhpcyBvYmplY3QgY29udGFpbnMgYHBvc2l0aW9uYCwgd2Ugd2FudCB0byBwcmVzZXJ2ZSBpdCBhbG9uZyB3aXRoXG4gICAgICAvLyBhbnkgYWRkaXRpb25hbCBwcm9wZXJ0eSB3ZSBtYXkgYWRkIGluIHRoZSBmdXR1cmVcbiAgICAgIGRhdGEub2Zmc2V0cy5wb3BwZXIgPSB7XG4gICAgICAgIC4uLmRhdGEub2Zmc2V0cy5wb3BwZXIsXG4gICAgICAgIC4uLmdldFBvcHBlck9mZnNldHMoXG4gICAgICAgICAgZGF0YS5pbnN0YW5jZS5wb3BwZXIsXG4gICAgICAgICAgZGF0YS5vZmZzZXRzLnJlZmVyZW5jZSxcbiAgICAgICAgICBkYXRhLnBsYWNlbWVudFxuICAgICAgICApLFxuICAgICAgfTtcblxuICAgICAgZGF0YSA9IHJ1bk1vZGlmaWVycyhkYXRhLmluc3RhbmNlLm1vZGlmaWVycywgZGF0YSwgJ2ZsaXAnKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gZGF0YTtcbn1cbiIsIi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgdXBkYXRlIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBrZWVwVG9nZXRoZXIoZGF0YSkge1xuICBjb25zdCB7IHBvcHBlciwgcmVmZXJlbmNlIH0gPSBkYXRhLm9mZnNldHM7XG4gIGNvbnN0IHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50LnNwbGl0KCctJylbMF07XG4gIGNvbnN0IGZsb29yID0gTWF0aC5mbG9vcjtcbiAgY29uc3QgaXNWZXJ0aWNhbCA9IFsndG9wJywgJ2JvdHRvbSddLmluZGV4T2YocGxhY2VtZW50KSAhPT0gLTE7XG4gIGNvbnN0IHNpZGUgPSBpc1ZlcnRpY2FsID8gJ3JpZ2h0JyA6ICdib3R0b20nO1xuICBjb25zdCBvcFNpZGUgPSBpc1ZlcnRpY2FsID8gJ2xlZnQnIDogJ3RvcCc7XG4gIGNvbnN0IG1lYXN1cmVtZW50ID0gaXNWZXJ0aWNhbCA/ICd3aWR0aCcgOiAnaGVpZ2h0JztcblxuICBpZiAocG9wcGVyW3NpZGVdIDwgZmxvb3IocmVmZXJlbmNlW29wU2lkZV0pKSB7XG4gICAgZGF0YS5vZmZzZXRzLnBvcHBlcltvcFNpZGVdID1cbiAgICAgIGZsb29yKHJlZmVyZW5jZVtvcFNpZGVdKSAtIHBvcHBlclttZWFzdXJlbWVudF07XG4gIH1cbiAgaWYgKHBvcHBlcltvcFNpZGVdID4gZmxvb3IocmVmZXJlbmNlW3NpZGVdKSkge1xuICAgIGRhdGEub2Zmc2V0cy5wb3BwZXJbb3BTaWRlXSA9IGZsb29yKHJlZmVyZW5jZVtzaWRlXSk7XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn1cbiIsImltcG9ydCBpc051bWVyaWMgZnJvbSAnLi4vdXRpbHMvaXNOdW1lcmljJztcbmltcG9ydCBnZXRDbGllbnRSZWN0IGZyb20gJy4uL3V0aWxzL2dldENsaWVudFJlY3QnO1xuaW1wb3J0IGZpbmQgZnJvbSAnLi4vdXRpbHMvZmluZCc7XG5cbi8qKlxuICogQ29udmVydHMgYSBzdHJpbmcgY29udGFpbmluZyB2YWx1ZSArIHVuaXQgaW50byBhIHB4IHZhbHVlIG51bWJlclxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2Yge21vZGlmaWVyc35vZmZzZXR9XG4gKiBAcHJpdmF0ZVxuICogQGFyZ3VtZW50IHtTdHJpbmd9IHN0ciAtIFZhbHVlICsgdW5pdCBzdHJpbmdcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBtZWFzdXJlbWVudCAtIGBoZWlnaHRgIG9yIGB3aWR0aGBcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBwb3BwZXJPZmZzZXRzXG4gKiBAYXJndW1lbnQge09iamVjdH0gcmVmZXJlbmNlT2Zmc2V0c1xuICogQHJldHVybnMge051bWJlcnxTdHJpbmd9XG4gKiBWYWx1ZSBpbiBwaXhlbHMsIG9yIG9yaWdpbmFsIHN0cmluZyBpZiBubyB2YWx1ZXMgd2VyZSBleHRyYWN0ZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvVmFsdWUoc3RyLCBtZWFzdXJlbWVudCwgcG9wcGVyT2Zmc2V0cywgcmVmZXJlbmNlT2Zmc2V0cykge1xuICAvLyBzZXBhcmF0ZSB2YWx1ZSBmcm9tIHVuaXRcbiAgY29uc3Qgc3BsaXQgPSBzdHIubWF0Y2goLygoPzpcXC18XFwrKT9cXGQqXFwuP1xcZCopKC4qKS8pO1xuICBjb25zdCB2YWx1ZSA9ICtzcGxpdFsxXTtcbiAgY29uc3QgdW5pdCA9IHNwbGl0WzJdO1xuXG4gIC8vIElmIGl0J3Mgbm90IGEgbnVtYmVyIGl0J3MgYW4gb3BlcmF0b3IsIEkgZ3Vlc3NcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICBpZiAodW5pdC5pbmRleE9mKCclJykgPT09IDApIHtcbiAgICBsZXQgZWxlbWVudDtcbiAgICBzd2l0Y2ggKHVuaXQpIHtcbiAgICAgIGNhc2UgJyVwJzpcbiAgICAgICAgZWxlbWVudCA9IHBvcHBlck9mZnNldHM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnJSc6XG4gICAgICBjYXNlICclcic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBlbGVtZW50ID0gcmVmZXJlbmNlT2Zmc2V0cztcbiAgICB9XG5cbiAgICBjb25zdCByZWN0ID0gZ2V0Q2xpZW50UmVjdChlbGVtZW50KTtcbiAgICByZXR1cm4gcmVjdFttZWFzdXJlbWVudF0gLyAxMDAgKiB2YWx1ZTtcbiAgfSBlbHNlIGlmICh1bml0ID09PSAndmgnIHx8IHVuaXQgPT09ICd2dycpIHtcbiAgICAvLyBpZiBpcyBhIHZoIG9yIHZ3LCB3ZSBjYWxjdWxhdGUgdGhlIHNpemUgYmFzZWQgb24gdGhlIHZpZXdwb3J0XG4gICAgbGV0IHNpemU7XG4gICAgaWYgKHVuaXQgPT09ICd2aCcpIHtcbiAgICAgIHNpemUgPSBNYXRoLm1heChcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCxcbiAgICAgICAgd2luZG93LmlubmVySGVpZ2h0IHx8IDBcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNpemUgPSBNYXRoLm1heChcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLFxuICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gc2l6ZSAvIDEwMCAqIHZhbHVlO1xuICB9IGVsc2Uge1xuICAgIC8vIGlmIGlzIGFuIGV4cGxpY2l0IHBpeGVsIHVuaXQsIHdlIGdldCByaWQgb2YgdGhlIHVuaXQgYW5kIGtlZXAgdGhlIHZhbHVlXG4gICAgLy8gaWYgaXMgYW4gaW1wbGljaXQgdW5pdCwgaXQncyBweCwgYW5kIHdlIHJldHVybiBqdXN0IHRoZSB2YWx1ZVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuXG4vKipcbiAqIFBhcnNlIGFuIGBvZmZzZXRgIHN0cmluZyB0byBleHRyYXBvbGF0ZSBgeGAgYW5kIGB5YCBudW1lcmljIG9mZnNldHMuXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiB7bW9kaWZpZXJzfm9mZnNldH1cbiAqIEBwcml2YXRlXG4gKiBAYXJndW1lbnQge1N0cmluZ30gb2Zmc2V0XG4gKiBAYXJndW1lbnQge09iamVjdH0gcG9wcGVyT2Zmc2V0c1xuICogQGFyZ3VtZW50IHtPYmplY3R9IHJlZmVyZW5jZU9mZnNldHNcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBiYXNlUGxhY2VtZW50XG4gKiBAcmV0dXJucyB7QXJyYXl9IGEgdHdvIGNlbGxzIGFycmF5IHdpdGggeCBhbmQgeSBvZmZzZXRzIGluIG51bWJlcnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlT2Zmc2V0KFxuICBvZmZzZXQsXG4gIHBvcHBlck9mZnNldHMsXG4gIHJlZmVyZW5jZU9mZnNldHMsXG4gIGJhc2VQbGFjZW1lbnRcbikge1xuICBjb25zdCBvZmZzZXRzID0gWzAsIDBdO1xuXG4gIC8vIFVzZSBoZWlnaHQgaWYgcGxhY2VtZW50IGlzIGxlZnQgb3IgcmlnaHQgYW5kIGluZGV4IGlzIDAgb3RoZXJ3aXNlIHVzZSB3aWR0aFxuICAvLyBpbiB0aGlzIHdheSB0aGUgZmlyc3Qgb2Zmc2V0IHdpbGwgdXNlIGFuIGF4aXMgYW5kIHRoZSBzZWNvbmQgb25lXG4gIC8vIHdpbGwgdXNlIHRoZSBvdGhlciBvbmVcbiAgY29uc3QgdXNlSGVpZ2h0ID0gWydyaWdodCcsICdsZWZ0J10uaW5kZXhPZihiYXNlUGxhY2VtZW50KSAhPT0gLTE7XG5cbiAgLy8gU3BsaXQgdGhlIG9mZnNldCBzdHJpbmcgdG8gb2J0YWluIGEgbGlzdCBvZiB2YWx1ZXMgYW5kIG9wZXJhbmRzXG4gIC8vIFRoZSByZWdleCBhZGRyZXNzZXMgdmFsdWVzIHdpdGggdGhlIHBsdXMgb3IgbWludXMgc2lnbiBpbiBmcm9udCAoKzEwLCAtMjAsIGV0YylcbiAgY29uc3QgZnJhZ21lbnRzID0gb2Zmc2V0LnNwbGl0KC8oXFwrfFxcLSkvKS5tYXAoZnJhZyA9PiBmcmFnLnRyaW0oKSk7XG5cbiAgLy8gRGV0ZWN0IGlmIHRoZSBvZmZzZXQgc3RyaW5nIGNvbnRhaW5zIGEgcGFpciBvZiB2YWx1ZXMgb3IgYSBzaW5nbGUgb25lXG4gIC8vIHRoZXkgY291bGQgYmUgc2VwYXJhdGVkIGJ5IGNvbW1hIG9yIHNwYWNlXG4gIGNvbnN0IGRpdmlkZXIgPSBmcmFnbWVudHMuaW5kZXhPZihcbiAgICBmaW5kKGZyYWdtZW50cywgZnJhZyA9PiBmcmFnLnNlYXJjaCgvLHxcXHMvKSAhPT0gLTEpXG4gICk7XG5cbiAgaWYgKGZyYWdtZW50c1tkaXZpZGVyXSAmJiBmcmFnbWVudHNbZGl2aWRlcl0uaW5kZXhPZignLCcpID09PSAtMSkge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgICdPZmZzZXRzIHNlcGFyYXRlZCBieSB3aGl0ZSBzcGFjZShzKSBhcmUgZGVwcmVjYXRlZCwgdXNlIGEgY29tbWEgKCwpIGluc3RlYWQuJ1xuICAgICk7XG4gIH1cblxuICAvLyBJZiBkaXZpZGVyIGlzIGZvdW5kLCB3ZSBkaXZpZGUgdGhlIGxpc3Qgb2YgdmFsdWVzIGFuZCBvcGVyYW5kcyB0byBkaXZpZGVcbiAgLy8gdGhlbSBieSBvZnNldCBYIGFuZCBZLlxuICBjb25zdCBzcGxpdFJlZ2V4ID0gL1xccyosXFxzKnxcXHMrLztcbiAgbGV0IG9wcyA9IGRpdmlkZXIgIT09IC0xXG4gICAgPyBbXG4gICAgICAgIGZyYWdtZW50c1xuICAgICAgICAgIC5zbGljZSgwLCBkaXZpZGVyKVxuICAgICAgICAgIC5jb25jYXQoW2ZyYWdtZW50c1tkaXZpZGVyXS5zcGxpdChzcGxpdFJlZ2V4KVswXV0pLFxuICAgICAgICBbZnJhZ21lbnRzW2RpdmlkZXJdLnNwbGl0KHNwbGl0UmVnZXgpWzFdXS5jb25jYXQoXG4gICAgICAgICAgZnJhZ21lbnRzLnNsaWNlKGRpdmlkZXIgKyAxKVxuICAgICAgICApLFxuICAgICAgXVxuICAgIDogW2ZyYWdtZW50c107XG5cbiAgLy8gQ29udmVydCB0aGUgdmFsdWVzIHdpdGggdW5pdHMgdG8gYWJzb2x1dGUgcGl4ZWxzIHRvIGFsbG93IG91ciBjb21wdXRhdGlvbnNcbiAgb3BzID0gb3BzLm1hcCgob3AsIGluZGV4KSA9PiB7XG4gICAgLy8gTW9zdCBvZiB0aGUgdW5pdHMgcmVseSBvbiB0aGUgb3JpZW50YXRpb24gb2YgdGhlIHBvcHBlclxuICAgIGNvbnN0IG1lYXN1cmVtZW50ID0gKGluZGV4ID09PSAxID8gIXVzZUhlaWdodCA6IHVzZUhlaWdodClcbiAgICAgID8gJ2hlaWdodCdcbiAgICAgIDogJ3dpZHRoJztcbiAgICBsZXQgbWVyZ2VXaXRoUHJldmlvdXMgPSBmYWxzZTtcbiAgICByZXR1cm4gKFxuICAgICAgb3BcbiAgICAgICAgLy8gVGhpcyBhZ2dyZWdhdGVzIGFueSBgK2Agb3IgYC1gIHNpZ24gdGhhdCBhcmVuJ3QgY29uc2lkZXJlZCBvcGVyYXRvcnNcbiAgICAgICAgLy8gZS5nLjogMTAgKyArNSA9PiBbMTAsICssICs1XVxuICAgICAgICAucmVkdWNlKChhLCBiKSA9PiB7XG4gICAgICAgICAgaWYgKGFbYS5sZW5ndGggLSAxXSA9PT0gJycgJiYgWycrJywgJy0nXS5pbmRleE9mKGIpICE9PSAtMSkge1xuICAgICAgICAgICAgYVthLmxlbmd0aCAtIDFdID0gYjtcbiAgICAgICAgICAgIG1lcmdlV2l0aFByZXZpb3VzID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBhO1xuICAgICAgICAgIH0gZWxzZSBpZiAobWVyZ2VXaXRoUHJldmlvdXMpIHtcbiAgICAgICAgICAgIGFbYS5sZW5ndGggLSAxXSArPSBiO1xuICAgICAgICAgICAgbWVyZ2VXaXRoUHJldmlvdXMgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiBhO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYS5jb25jYXQoYik7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBbXSlcbiAgICAgICAgLy8gSGVyZSB3ZSBjb252ZXJ0IHRoZSBzdHJpbmcgdmFsdWVzIGludG8gbnVtYmVyIHZhbHVlcyAoaW4gcHgpXG4gICAgICAgIC5tYXAoc3RyID0+IHRvVmFsdWUoc3RyLCBtZWFzdXJlbWVudCwgcG9wcGVyT2Zmc2V0cywgcmVmZXJlbmNlT2Zmc2V0cykpXG4gICAgKTtcbiAgfSk7XG5cbiAgLy8gTG9vcCB0cm91Z2ggdGhlIG9mZnNldHMgYXJyYXlzIGFuZCBleGVjdXRlIHRoZSBvcGVyYXRpb25zXG4gIG9wcy5mb3JFYWNoKChvcCwgaW5kZXgpID0+IHtcbiAgICBvcC5mb3JFYWNoKChmcmFnLCBpbmRleDIpID0+IHtcbiAgICAgIGlmIChpc051bWVyaWMoZnJhZykpIHtcbiAgICAgICAgb2Zmc2V0c1tpbmRleF0gKz0gZnJhZyAqIChvcFtpbmRleDIgLSAxXSA9PT0gJy0nID8gLTEgOiAxKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBvZmZzZXRzO1xufVxuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IHVwZGF0ZSBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEBhcmd1bWVudCB7TnVtYmVyfFN0cmluZ30gb3B0aW9ucy5vZmZzZXQ9MFxuICogVGhlIG9mZnNldCB2YWx1ZSBhcyBkZXNjcmliZWQgaW4gdGhlIG1vZGlmaWVyIGRlc2NyaXB0aW9uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9mZnNldChkYXRhLCB7IG9mZnNldCB9KSB7XG4gIGNvbnN0IHsgcGxhY2VtZW50LCBvZmZzZXRzOiB7IHBvcHBlciwgcmVmZXJlbmNlIH0gfSA9IGRhdGE7XG4gIGNvbnN0IGJhc2VQbGFjZW1lbnQgPSBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcblxuICBsZXQgb2Zmc2V0cztcbiAgaWYgKGlzTnVtZXJpYygrb2Zmc2V0KSkge1xuICAgIG9mZnNldHMgPSBbK29mZnNldCwgMF07XG4gIH0gZWxzZSB7XG4gICAgb2Zmc2V0cyA9IHBhcnNlT2Zmc2V0KG9mZnNldCwgcG9wcGVyLCByZWZlcmVuY2UsIGJhc2VQbGFjZW1lbnQpO1xuICB9XG5cbiAgaWYgKGJhc2VQbGFjZW1lbnQgPT09ICdsZWZ0Jykge1xuICAgIHBvcHBlci50b3AgKz0gb2Zmc2V0c1swXTtcbiAgICBwb3BwZXIubGVmdCAtPSBvZmZzZXRzWzFdO1xuICB9IGVsc2UgaWYgKGJhc2VQbGFjZW1lbnQgPT09ICdyaWdodCcpIHtcbiAgICBwb3BwZXIudG9wICs9IG9mZnNldHNbMF07XG4gICAgcG9wcGVyLmxlZnQgKz0gb2Zmc2V0c1sxXTtcbiAgfSBlbHNlIGlmIChiYXNlUGxhY2VtZW50ID09PSAndG9wJykge1xuICAgIHBvcHBlci5sZWZ0ICs9IG9mZnNldHNbMF07XG4gICAgcG9wcGVyLnRvcCAtPSBvZmZzZXRzWzFdO1xuICB9IGVsc2UgaWYgKGJhc2VQbGFjZW1lbnQgPT09ICdib3R0b20nKSB7XG4gICAgcG9wcGVyLmxlZnQgKz0gb2Zmc2V0c1swXTtcbiAgICBwb3BwZXIudG9wICs9IG9mZnNldHNbMV07XG4gIH1cblxuICBkYXRhLnBvcHBlciA9IHBvcHBlcjtcbiAgcmV0dXJuIGRhdGE7XG59XG4iLCJpbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gJy4uL3V0aWxzL2dldE9mZnNldFBhcmVudCc7XG5pbXBvcnQgZ2V0Qm91bmRhcmllcyBmcm9tICcuLi91dGlscy9nZXRCb3VuZGFyaWVzJztcbmltcG9ydCBnZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUgZnJvbSAnLi4vdXRpbHMvZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lJztcblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSBgdXBkYXRlYCBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJldmVudE92ZXJmbG93KGRhdGEsIG9wdGlvbnMpIHtcbiAgbGV0IGJvdW5kYXJpZXNFbGVtZW50ID1cbiAgICBvcHRpb25zLmJvdW5kYXJpZXNFbGVtZW50IHx8IGdldE9mZnNldFBhcmVudChkYXRhLmluc3RhbmNlLnBvcHBlcik7XG5cbiAgLy8gSWYgb2Zmc2V0UGFyZW50IGlzIHRoZSByZWZlcmVuY2UgZWxlbWVudCwgd2UgcmVhbGx5IHdhbnQgdG9cbiAgLy8gZ28gb25lIHN0ZXAgdXAgYW5kIHVzZSB0aGUgbmV4dCBvZmZzZXRQYXJlbnQgYXMgcmVmZXJlbmNlIHRvXG4gIC8vIGF2b2lkIHRvIG1ha2UgdGhpcyBtb2RpZmllciBjb21wbGV0ZWx5IHVzZWxlc3MgYW5kIGxvb2sgbGlrZSBicm9rZW5cbiAgaWYgKGRhdGEuaW5zdGFuY2UucmVmZXJlbmNlID09PSBib3VuZGFyaWVzRWxlbWVudCkge1xuICAgIGJvdW5kYXJpZXNFbGVtZW50ID0gZ2V0T2Zmc2V0UGFyZW50KGJvdW5kYXJpZXNFbGVtZW50KTtcbiAgfVxuXG4gIC8vIE5PVEU6IERPTSBhY2Nlc3MgaGVyZVxuICAvLyByZXNldHMgdGhlIHBvcHBlcidzIHBvc2l0aW9uIHNvIHRoYXQgdGhlIGRvY3VtZW50IHNpemUgY2FuIGJlIGNhbGN1bGF0ZWQgZXhjbHVkaW5nXG4gIC8vIHRoZSBzaXplIG9mIHRoZSBwb3BwZXIgZWxlbWVudCBpdHNlbGZcbiAgY29uc3QgdHJhbnNmb3JtUHJvcCA9IGdldFN1cHBvcnRlZFByb3BlcnR5TmFtZSgndHJhbnNmb3JtJyk7XG4gIGNvbnN0IHBvcHBlclN0eWxlcyA9IGRhdGEuaW5zdGFuY2UucG9wcGVyLnN0eWxlOyAvLyBhc3NpZ25tZW50IHRvIGhlbHAgbWluaWZpY2F0aW9uXG4gIGNvbnN0IHsgdG9wLCBsZWZ0LCBbdHJhbnNmb3JtUHJvcF06IHRyYW5zZm9ybSB9ID0gcG9wcGVyU3R5bGVzO1xuICBwb3BwZXJTdHlsZXMudG9wID0gJyc7XG4gIHBvcHBlclN0eWxlcy5sZWZ0ID0gJyc7XG4gIHBvcHBlclN0eWxlc1t0cmFuc2Zvcm1Qcm9wXSA9ICcnO1xuXG4gIGNvbnN0IGJvdW5kYXJpZXMgPSBnZXRCb3VuZGFyaWVzKFxuICAgIGRhdGEuaW5zdGFuY2UucG9wcGVyLFxuICAgIGRhdGEuaW5zdGFuY2UucmVmZXJlbmNlLFxuICAgIG9wdGlvbnMucGFkZGluZyxcbiAgICBib3VuZGFyaWVzRWxlbWVudCxcbiAgICBkYXRhLnBvc2l0aW9uRml4ZWRcbiAgKTtcblxuICAvLyBOT1RFOiBET00gYWNjZXNzIGhlcmVcbiAgLy8gcmVzdG9yZXMgdGhlIG9yaWdpbmFsIHN0eWxlIHByb3BlcnRpZXMgYWZ0ZXIgdGhlIG9mZnNldHMgaGF2ZSBiZWVuIGNvbXB1dGVkXG4gIHBvcHBlclN0eWxlcy50b3AgPSB0b3A7XG4gIHBvcHBlclN0eWxlcy5sZWZ0ID0gbGVmdDtcbiAgcG9wcGVyU3R5bGVzW3RyYW5zZm9ybVByb3BdID0gdHJhbnNmb3JtO1xuXG4gIG9wdGlvbnMuYm91bmRhcmllcyA9IGJvdW5kYXJpZXM7XG5cbiAgY29uc3Qgb3JkZXIgPSBvcHRpb25zLnByaW9yaXR5O1xuICBsZXQgcG9wcGVyID0gZGF0YS5vZmZzZXRzLnBvcHBlcjtcblxuICBjb25zdCBjaGVjayA9IHtcbiAgICBwcmltYXJ5KHBsYWNlbWVudCkge1xuICAgICAgbGV0IHZhbHVlID0gcG9wcGVyW3BsYWNlbWVudF07XG4gICAgICBpZiAoXG4gICAgICAgIHBvcHBlcltwbGFjZW1lbnRdIDwgYm91bmRhcmllc1twbGFjZW1lbnRdICYmXG4gICAgICAgICFvcHRpb25zLmVzY2FwZVdpdGhSZWZlcmVuY2VcbiAgICAgICkge1xuICAgICAgICB2YWx1ZSA9IE1hdGgubWF4KHBvcHBlcltwbGFjZW1lbnRdLCBib3VuZGFyaWVzW3BsYWNlbWVudF0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHsgW3BsYWNlbWVudF06IHZhbHVlIH07XG4gICAgfSxcbiAgICBzZWNvbmRhcnkocGxhY2VtZW50KSB7XG4gICAgICBjb25zdCBtYWluU2lkZSA9IHBsYWNlbWVudCA9PT0gJ3JpZ2h0JyA/ICdsZWZ0JyA6ICd0b3AnO1xuICAgICAgbGV0IHZhbHVlID0gcG9wcGVyW21haW5TaWRlXTtcbiAgICAgIGlmIChcbiAgICAgICAgcG9wcGVyW3BsYWNlbWVudF0gPiBib3VuZGFyaWVzW3BsYWNlbWVudF0gJiZcbiAgICAgICAgIW9wdGlvbnMuZXNjYXBlV2l0aFJlZmVyZW5jZVxuICAgICAgKSB7XG4gICAgICAgIHZhbHVlID0gTWF0aC5taW4oXG4gICAgICAgICAgcG9wcGVyW21haW5TaWRlXSxcbiAgICAgICAgICBib3VuZGFyaWVzW3BsYWNlbWVudF0gLVxuICAgICAgICAgICAgKHBsYWNlbWVudCA9PT0gJ3JpZ2h0JyA/IHBvcHBlci53aWR0aCA6IHBvcHBlci5oZWlnaHQpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4geyBbbWFpblNpZGVdOiB2YWx1ZSB9O1xuICAgIH0sXG4gIH07XG5cbiAgb3JkZXIuZm9yRWFjaChwbGFjZW1lbnQgPT4ge1xuICAgIGNvbnN0IHNpZGUgPVxuICAgICAgWydsZWZ0JywgJ3RvcCddLmluZGV4T2YocGxhY2VtZW50KSAhPT0gLTEgPyAncHJpbWFyeScgOiAnc2Vjb25kYXJ5JztcbiAgICBwb3BwZXIgPSB7IC4uLnBvcHBlciwgLi4uY2hlY2tbc2lkZV0ocGxhY2VtZW50KSB9O1xuICB9KTtcblxuICBkYXRhLm9mZnNldHMucG9wcGVyID0gcG9wcGVyO1xuXG4gIHJldHVybiBkYXRhO1xufVxuIiwiLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSBgdXBkYXRlYCBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hpZnQoZGF0YSkge1xuICBjb25zdCBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudDtcbiAgY29uc3QgYmFzZVBsYWNlbWVudCA9IHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuICBjb25zdCBzaGlmdHZhcmlhdGlvbiA9IHBsYWNlbWVudC5zcGxpdCgnLScpWzFdO1xuXG4gIC8vIGlmIHNoaWZ0IHNoaWZ0dmFyaWF0aW9uIGlzIHNwZWNpZmllZCwgcnVuIHRoZSBtb2RpZmllclxuICBpZiAoc2hpZnR2YXJpYXRpb24pIHtcbiAgICBjb25zdCB7IHJlZmVyZW5jZSwgcG9wcGVyIH0gPSBkYXRhLm9mZnNldHM7XG4gICAgY29uc3QgaXNWZXJ0aWNhbCA9IFsnYm90dG9tJywgJ3RvcCddLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgIT09IC0xO1xuICAgIGNvbnN0IHNpZGUgPSBpc1ZlcnRpY2FsID8gJ2xlZnQnIDogJ3RvcCc7XG4gICAgY29uc3QgbWVhc3VyZW1lbnQgPSBpc1ZlcnRpY2FsID8gJ3dpZHRoJyA6ICdoZWlnaHQnO1xuXG4gICAgY29uc3Qgc2hpZnRPZmZzZXRzID0ge1xuICAgICAgc3RhcnQ6IHsgW3NpZGVdOiByZWZlcmVuY2Vbc2lkZV0gfSxcbiAgICAgIGVuZDoge1xuICAgICAgICBbc2lkZV06IHJlZmVyZW5jZVtzaWRlXSArIHJlZmVyZW5jZVttZWFzdXJlbWVudF0gLSBwb3BwZXJbbWVhc3VyZW1lbnRdLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IHsgLi4ucG9wcGVyLCAuLi5zaGlmdE9mZnNldHNbc2hpZnR2YXJpYXRpb25dIH07XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn1cbiIsImltcG9ydCBpc01vZGlmaWVyUmVxdWlyZWQgZnJvbSAnLi4vdXRpbHMvaXNNb2RpZmllclJlcXVpcmVkJztcbmltcG9ydCBmaW5kIGZyb20gJy4uL3V0aWxzL2ZpbmQnO1xuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IHVwZGF0ZSBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGlkZShkYXRhKSB7XG4gIGlmICghaXNNb2RpZmllclJlcXVpcmVkKGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLCAnaGlkZScsICdwcmV2ZW50T3ZlcmZsb3cnKSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgY29uc3QgcmVmUmVjdCA9IGRhdGEub2Zmc2V0cy5yZWZlcmVuY2U7XG4gIGNvbnN0IGJvdW5kID0gZmluZChcbiAgICBkYXRhLmluc3RhbmNlLm1vZGlmaWVycyxcbiAgICBtb2RpZmllciA9PiBtb2RpZmllci5uYW1lID09PSAncHJldmVudE92ZXJmbG93J1xuICApLmJvdW5kYXJpZXM7XG5cbiAgaWYgKFxuICAgIHJlZlJlY3QuYm90dG9tIDwgYm91bmQudG9wIHx8XG4gICAgcmVmUmVjdC5sZWZ0ID4gYm91bmQucmlnaHQgfHxcbiAgICByZWZSZWN0LnRvcCA+IGJvdW5kLmJvdHRvbSB8fFxuICAgIHJlZlJlY3QucmlnaHQgPCBib3VuZC5sZWZ0XG4gICkge1xuICAgIC8vIEF2b2lkIHVubmVjZXNzYXJ5IERPTSBhY2Nlc3MgaWYgdmlzaWJpbGl0eSBoYXNuJ3QgY2hhbmdlZFxuICAgIGlmIChkYXRhLmhpZGUgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGRhdGEuaGlkZSA9IHRydWU7XG4gICAgZGF0YS5hdHRyaWJ1dGVzWyd4LW91dC1vZi1ib3VuZGFyaWVzJ10gPSAnJztcbiAgfSBlbHNlIHtcbiAgICAvLyBBdm9pZCB1bm5lY2Vzc2FyeSBET00gYWNjZXNzIGlmIHZpc2liaWxpdHkgaGFzbid0IGNoYW5nZWRcbiAgICBpZiAoZGF0YS5oaWRlID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgZGF0YS5oaWRlID0gZmFsc2U7XG4gICAgZGF0YS5hdHRyaWJ1dGVzWyd4LW91dC1vZi1ib3VuZGFyaWVzJ10gPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuIiwiaW1wb3J0IGdldENsaWVudFJlY3QgZnJvbSAnLi4vdXRpbHMvZ2V0Q2xpZW50UmVjdCc7XG5pbXBvcnQgZ2V0T3Bwb3NpdGVQbGFjZW1lbnQgZnJvbSAnLi4vdXRpbHMvZ2V0T3Bwb3NpdGVQbGFjZW1lbnQnO1xuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IGB1cGRhdGVgIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbm5lcihkYXRhKSB7XG4gIGNvbnN0IHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50O1xuICBjb25zdCBiYXNlUGxhY2VtZW50ID0gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG4gIGNvbnN0IHsgcG9wcGVyLCByZWZlcmVuY2UgfSA9IGRhdGEub2Zmc2V0cztcbiAgY29uc3QgaXNIb3JpeiA9IFsnbGVmdCcsICdyaWdodCddLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgIT09IC0xO1xuXG4gIGNvbnN0IHN1YnRyYWN0TGVuZ3RoID0gWyd0b3AnLCAnbGVmdCddLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPT09IC0xO1xuXG4gIHBvcHBlcltpc0hvcml6ID8gJ2xlZnQnIDogJ3RvcCddID1cbiAgICByZWZlcmVuY2VbYmFzZVBsYWNlbWVudF0gLVxuICAgIChzdWJ0cmFjdExlbmd0aCA/IHBvcHBlcltpc0hvcml6ID8gJ3dpZHRoJyA6ICdoZWlnaHQnXSA6IDApO1xuXG4gIGRhdGEucGxhY2VtZW50ID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IGdldENsaWVudFJlY3QocG9wcGVyKTtcblxuICByZXR1cm4gZGF0YTtcbn1cbiIsImltcG9ydCBhcHBseVN0eWxlLCB7IGFwcGx5U3R5bGVPbkxvYWQgfSBmcm9tICcuL2FwcGx5U3R5bGUnO1xuaW1wb3J0IGNvbXB1dGVTdHlsZSBmcm9tICcuL2NvbXB1dGVTdHlsZSc7XG5pbXBvcnQgYXJyb3cgZnJvbSAnLi9hcnJvdyc7XG5pbXBvcnQgZmxpcCBmcm9tICcuL2ZsaXAnO1xuaW1wb3J0IGtlZXBUb2dldGhlciBmcm9tICcuL2tlZXBUb2dldGhlcic7XG5pbXBvcnQgb2Zmc2V0IGZyb20gJy4vb2Zmc2V0JztcbmltcG9ydCBwcmV2ZW50T3ZlcmZsb3cgZnJvbSAnLi9wcmV2ZW50T3ZlcmZsb3cnO1xuaW1wb3J0IHNoaWZ0IGZyb20gJy4vc2hpZnQnO1xuaW1wb3J0IGhpZGUgZnJvbSAnLi9oaWRlJztcbmltcG9ydCBpbm5lciBmcm9tICcuL2lubmVyJztcblxuLyoqXG4gKiBNb2RpZmllciBmdW5jdGlvbiwgZWFjaCBtb2RpZmllciBjYW4gaGF2ZSBhIGZ1bmN0aW9uIG9mIHRoaXMgdHlwZSBhc3NpZ25lZFxuICogdG8gaXRzIGBmbmAgcHJvcGVydHkuPGJyIC8+XG4gKiBUaGVzZSBmdW5jdGlvbnMgd2lsbCBiZSBjYWxsZWQgb24gZWFjaCB1cGRhdGUsIHRoaXMgbWVhbnMgdGhhdCB5b3UgbXVzdFxuICogbWFrZSBzdXJlIHRoZXkgYXJlIHBlcmZvcm1hbnQgZW5vdWdoIHRvIGF2b2lkIHBlcmZvcm1hbmNlIGJvdHRsZW5lY2tzLlxuICpcbiAqIEBmdW5jdGlvbiBNb2RpZmllckZuXG4gKiBAYXJndW1lbnQge2RhdGFPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IGB1cGRhdGVgIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge2RhdGFPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuXG4vKipcbiAqIE1vZGlmaWVycyBhcmUgcGx1Z2lucyB1c2VkIHRvIGFsdGVyIHRoZSBiZWhhdmlvciBvZiB5b3VyIHBvcHBlcnMuPGJyIC8+XG4gKiBQb3BwZXIuanMgdXNlcyBhIHNldCBvZiA5IG1vZGlmaWVycyB0byBwcm92aWRlIGFsbCB0aGUgYmFzaWMgZnVuY3Rpb25hbGl0aWVzXG4gKiBuZWVkZWQgYnkgdGhlIGxpYnJhcnkuXG4gKlxuICogVXN1YWxseSB5b3UgZG9uJ3Qgd2FudCB0byBvdmVycmlkZSB0aGUgYG9yZGVyYCwgYGZuYCBhbmQgYG9uTG9hZGAgcHJvcHMuXG4gKiBBbGwgdGhlIG90aGVyIHByb3BlcnRpZXMgYXJlIGNvbmZpZ3VyYXRpb25zIHRoYXQgY291bGQgYmUgdHdlYWtlZC5cbiAqIEBuYW1lc3BhY2UgbW9kaWZpZXJzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLyoqXG4gICAqIE1vZGlmaWVyIHVzZWQgdG8gc2hpZnQgdGhlIHBvcHBlciBvbiB0aGUgc3RhcnQgb3IgZW5kIG9mIGl0cyByZWZlcmVuY2VcbiAgICogZWxlbWVudC48YnIgLz5cbiAgICogSXQgd2lsbCByZWFkIHRoZSB2YXJpYXRpb24gb2YgdGhlIGBwbGFjZW1lbnRgIHByb3BlcnR5LjxiciAvPlxuICAgKiBJdCBjYW4gYmUgb25lIGVpdGhlciBgLWVuZGAgb3IgYC1zdGFydGAuXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBzaGlmdDoge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj0xMDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDEwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IHNoaWZ0LFxuICB9LFxuXG4gIC8qKlxuICAgKiBUaGUgYG9mZnNldGAgbW9kaWZpZXIgY2FuIHNoaWZ0IHlvdXIgcG9wcGVyIG9uIGJvdGggaXRzIGF4aXMuXG4gICAqXG4gICAqIEl0IGFjY2VwdHMgdGhlIGZvbGxvd2luZyB1bml0czpcbiAgICogLSBgcHhgIG9yIHVuaXQtbGVzcywgaW50ZXJwcmV0ZWQgYXMgcGl4ZWxzXG4gICAqIC0gYCVgIG9yIGAlcmAsIHBlcmNlbnRhZ2UgcmVsYXRpdmUgdG8gdGhlIGxlbmd0aCBvZiB0aGUgcmVmZXJlbmNlIGVsZW1lbnRcbiAgICogLSBgJXBgLCBwZXJjZW50YWdlIHJlbGF0aXZlIHRvIHRoZSBsZW5ndGggb2YgdGhlIHBvcHBlciBlbGVtZW50XG4gICAqIC0gYHZ3YCwgQ1NTIHZpZXdwb3J0IHdpZHRoIHVuaXRcbiAgICogLSBgdmhgLCBDU1Mgdmlld3BvcnQgaGVpZ2h0IHVuaXRcbiAgICpcbiAgICogRm9yIGxlbmd0aCBpcyBpbnRlbmRlZCB0aGUgbWFpbiBheGlzIHJlbGF0aXZlIHRvIHRoZSBwbGFjZW1lbnQgb2YgdGhlIHBvcHBlci48YnIgLz5cbiAgICogVGhpcyBtZWFucyB0aGF0IGlmIHRoZSBwbGFjZW1lbnQgaXMgYHRvcGAgb3IgYGJvdHRvbWAsIHRoZSBsZW5ndGggd2lsbCBiZSB0aGVcbiAgICogYHdpZHRoYC4gSW4gY2FzZSBvZiBgbGVmdGAgb3IgYHJpZ2h0YCwgaXQgd2lsbCBiZSB0aGUgYGhlaWdodGAuXG4gICAqXG4gICAqIFlvdSBjYW4gcHJvdmlkZSBhIHNpbmdsZSB2YWx1ZSAoYXMgYE51bWJlcmAgb3IgYFN0cmluZ2ApLCBvciBhIHBhaXIgb2YgdmFsdWVzXG4gICAqIGFzIGBTdHJpbmdgIGRpdmlkZWQgYnkgYSBjb21tYSBvciBvbmUgKG9yIG1vcmUpIHdoaXRlIHNwYWNlcy48YnIgLz5cbiAgICogVGhlIGxhdHRlciBpcyBhIGRlcHJlY2F0ZWQgbWV0aG9kIGJlY2F1c2UgaXQgbGVhZHMgdG8gY29uZnVzaW9uIGFuZCB3aWxsIGJlXG4gICAqIHJlbW92ZWQgaW4gdjIuPGJyIC8+XG4gICAqIEFkZGl0aW9uYWxseSwgaXQgYWNjZXB0cyBhZGRpdGlvbnMgYW5kIHN1YnRyYWN0aW9ucyBiZXR3ZWVuIGRpZmZlcmVudCB1bml0cy5cbiAgICogTm90ZSB0aGF0IG11bHRpcGxpY2F0aW9ucyBhbmQgZGl2aXNpb25zIGFyZW4ndCBzdXBwb3J0ZWQuXG4gICAqXG4gICAqIFZhbGlkIGV4YW1wbGVzIGFyZTpcbiAgICogYGBgXG4gICAqIDEwXG4gICAqICcxMCUnXG4gICAqICcxMCwgMTAnXG4gICAqICcxMCUsIDEwJ1xuICAgKiAnMTAgKyAxMCUnXG4gICAqICcxMCAtIDV2aCArIDMlJ1xuICAgKiAnLTEwcHggKyA1dmgsIDVweCAtIDYlJ1xuICAgKiBgYGBcbiAgICogPiAqKk5CKio6IElmIHlvdSBkZXNpcmUgdG8gYXBwbHkgb2Zmc2V0cyB0byB5b3VyIHBvcHBlcnMgaW4gYSB3YXkgdGhhdCBtYXkgbWFrZSB0aGVtIG92ZXJsYXBcbiAgICogPiB3aXRoIHRoZWlyIHJlZmVyZW5jZSBlbGVtZW50LCB1bmZvcnR1bmF0ZWx5LCB5b3Ugd2lsbCBoYXZlIHRvIGRpc2FibGUgdGhlIGBmbGlwYCBtb2RpZmllci5cbiAgICogPiBZb3UgY2FuIHJlYWQgbW9yZSBvbiB0aGlzIGF0IHRoaXMgW2lzc3VlXShodHRwczovL2dpdGh1Yi5jb20vRmV6VnJhc3RhL3BvcHBlci5qcy9pc3N1ZXMvMzczKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIG9mZnNldDoge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj0yMDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDIwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IG9mZnNldCxcbiAgICAvKiogQHByb3Age051bWJlcnxTdHJpbmd9IG9mZnNldD0wXG4gICAgICogVGhlIG9mZnNldCB2YWx1ZSBhcyBkZXNjcmliZWQgaW4gdGhlIG1vZGlmaWVyIGRlc2NyaXB0aW9uXG4gICAgICovXG4gICAgb2Zmc2V0OiAwLFxuICB9LFxuXG4gIC8qKlxuICAgKiBNb2RpZmllciB1c2VkIHRvIHByZXZlbnQgdGhlIHBvcHBlciBmcm9tIGJlaW5nIHBvc2l0aW9uZWQgb3V0c2lkZSB0aGUgYm91bmRhcnkuXG4gICAqXG4gICAqIEEgc2NlbmFyaW8gZXhpc3RzIHdoZXJlIHRoZSByZWZlcmVuY2UgaXRzZWxmIGlzIG5vdCB3aXRoaW4gdGhlIGJvdW5kYXJpZXMuPGJyIC8+XG4gICAqIFdlIGNhbiBzYXkgaXQgaGFzIFwiZXNjYXBlZCB0aGUgYm91bmRhcmllc1wiIOKAlCBvciBqdXN0IFwiZXNjYXBlZFwiLjxiciAvPlxuICAgKiBJbiB0aGlzIGNhc2Ugd2UgbmVlZCB0byBkZWNpZGUgd2hldGhlciB0aGUgcG9wcGVyIHNob3VsZCBlaXRoZXI6XG4gICAqXG4gICAqIC0gZGV0YWNoIGZyb20gdGhlIHJlZmVyZW5jZSBhbmQgcmVtYWluIFwidHJhcHBlZFwiIGluIHRoZSBib3VuZGFyaWVzLCBvclxuICAgKiAtIGlmIGl0IHNob3VsZCBpZ25vcmUgdGhlIGJvdW5kYXJ5IGFuZCBcImVzY2FwZSB3aXRoIGl0cyByZWZlcmVuY2VcIlxuICAgKlxuICAgKiBXaGVuIGBlc2NhcGVXaXRoUmVmZXJlbmNlYCBpcyBzZXQgdG9gdHJ1ZWAgYW5kIHJlZmVyZW5jZSBpcyBjb21wbGV0ZWx5XG4gICAqIG91dHNpZGUgaXRzIGJvdW5kYXJpZXMsIHRoZSBwb3BwZXIgd2lsbCBvdmVyZmxvdyAob3IgY29tcGxldGVseSBsZWF2ZSlcbiAgICogdGhlIGJvdW5kYXJpZXMgaW4gb3JkZXIgdG8gcmVtYWluIGF0dGFjaGVkIHRvIHRoZSBlZGdlIG9mIHRoZSByZWZlcmVuY2UuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBwcmV2ZW50T3ZlcmZsb3c6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9MzAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiAzMDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBwcmV2ZW50T3ZlcmZsb3csXG4gICAgLyoqXG4gICAgICogQHByb3Age0FycmF5fSBbcHJpb3JpdHk9WydsZWZ0JywncmlnaHQnLCd0b3AnLCdib3R0b20nXV1cbiAgICAgKiBQb3BwZXIgd2lsbCB0cnkgdG8gcHJldmVudCBvdmVyZmxvdyBmb2xsb3dpbmcgdGhlc2UgcHJpb3JpdGllcyBieSBkZWZhdWx0LFxuICAgICAqIHRoZW4sIGl0IGNvdWxkIG92ZXJmbG93IG9uIHRoZSBsZWZ0IGFuZCBvbiB0b3Agb2YgdGhlIGBib3VuZGFyaWVzRWxlbWVudGBcbiAgICAgKi9cbiAgICBwcmlvcml0eTogWydsZWZ0JywgJ3JpZ2h0JywgJ3RvcCcsICdib3R0b20nXSxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7bnVtYmVyfSBwYWRkaW5nPTVcbiAgICAgKiBBbW91bnQgb2YgcGl4ZWwgdXNlZCB0byBkZWZpbmUgYSBtaW5pbXVtIGRpc3RhbmNlIGJldHdlZW4gdGhlIGJvdW5kYXJpZXNcbiAgICAgKiBhbmQgdGhlIHBvcHBlci4gVGhpcyBtYWtlcyBzdXJlIHRoZSBwb3BwZXIgYWx3YXlzIGhhcyBhIGxpdHRsZSBwYWRkaW5nXG4gICAgICogYmV0d2VlbiB0aGUgZWRnZXMgb2YgaXRzIGNvbnRhaW5lclxuICAgICAqL1xuICAgIHBhZGRpbmc6IDUsXG4gICAgLyoqXG4gICAgICogQHByb3Age1N0cmluZ3xIVE1MRWxlbWVudH0gYm91bmRhcmllc0VsZW1lbnQ9J3Njcm9sbFBhcmVudCdcbiAgICAgKiBCb3VuZGFyaWVzIHVzZWQgYnkgdGhlIG1vZGlmaWVyLiBDYW4gYmUgYHNjcm9sbFBhcmVudGAsIGB3aW5kb3dgLFxuICAgICAqIGB2aWV3cG9ydGAgb3IgYW55IERPTSBlbGVtZW50LlxuICAgICAqL1xuICAgIGJvdW5kYXJpZXNFbGVtZW50OiAnc2Nyb2xsUGFyZW50JyxcbiAgfSxcblxuICAvKipcbiAgICogTW9kaWZpZXIgdXNlZCB0byBtYWtlIHN1cmUgdGhlIHJlZmVyZW5jZSBhbmQgaXRzIHBvcHBlciBzdGF5IG5lYXIgZWFjaCBvdGhlclxuICAgKiB3aXRob3V0IGxlYXZpbmcgYW55IGdhcCBiZXR3ZWVuIHRoZSB0d28uIEVzcGVjaWFsbHkgdXNlZnVsIHdoZW4gdGhlIGFycm93IGlzXG4gICAqIGVuYWJsZWQgYW5kIHlvdSB3YW50IHRvIGVuc3VyZSB0aGF0IGl0IHBvaW50cyB0byBpdHMgcmVmZXJlbmNlIGVsZW1lbnQuXG4gICAqIEl0IGNhcmVzIG9ubHkgYWJvdXQgdGhlIGZpcnN0IGF4aXMuIFlvdSBjYW4gc3RpbGwgaGF2ZSBwb3BwZXJzIHdpdGggbWFyZ2luXG4gICAqIGJldHdlZW4gdGhlIHBvcHBlciBhbmQgaXRzIHJlZmVyZW5jZSBlbGVtZW50LlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAga2VlcFRvZ2V0aGVyOiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTQwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogNDAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjoga2VlcFRvZ2V0aGVyLFxuICB9LFxuXG4gIC8qKlxuICAgKiBUaGlzIG1vZGlmaWVyIGlzIHVzZWQgdG8gbW92ZSB0aGUgYGFycm93RWxlbWVudGAgb2YgdGhlIHBvcHBlciB0byBtYWtlXG4gICAqIHN1cmUgaXQgaXMgcG9zaXRpb25lZCBiZXR3ZWVuIHRoZSByZWZlcmVuY2UgZWxlbWVudCBhbmQgaXRzIHBvcHBlciBlbGVtZW50LlxuICAgKiBJdCB3aWxsIHJlYWQgdGhlIG91dGVyIHNpemUgb2YgdGhlIGBhcnJvd0VsZW1lbnRgIG5vZGUgdG8gZGV0ZWN0IGhvdyBtYW55XG4gICAqIHBpeGVscyBvZiBjb25qdW5jdGlvbiBhcmUgbmVlZGVkLlxuICAgKlxuICAgKiBJdCBoYXMgbm8gZWZmZWN0IGlmIG5vIGBhcnJvd0VsZW1lbnRgIGlzIHByb3ZpZGVkLlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgYXJyb3c6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9NTAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA1MDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBhcnJvdyxcbiAgICAvKiogQHByb3Age1N0cmluZ3xIVE1MRWxlbWVudH0gZWxlbWVudD0nW3gtYXJyb3ddJyAtIFNlbGVjdG9yIG9yIG5vZGUgdXNlZCBhcyBhcnJvdyAqL1xuICAgIGVsZW1lbnQ6ICdbeC1hcnJvd10nLFxuICB9LFxuXG4gIC8qKlxuICAgKiBNb2RpZmllciB1c2VkIHRvIGZsaXAgdGhlIHBvcHBlcidzIHBsYWNlbWVudCB3aGVuIGl0IHN0YXJ0cyB0byBvdmVybGFwIGl0c1xuICAgKiByZWZlcmVuY2UgZWxlbWVudC5cbiAgICpcbiAgICogUmVxdWlyZXMgdGhlIGBwcmV2ZW50T3ZlcmZsb3dgIG1vZGlmaWVyIGJlZm9yZSBpdCBpbiBvcmRlciB0byB3b3JrLlxuICAgKlxuICAgKiAqKk5PVEU6KiogdGhpcyBtb2RpZmllciB3aWxsIGludGVycnVwdCB0aGUgY3VycmVudCB1cGRhdGUgY3ljbGUgYW5kIHdpbGxcbiAgICogcmVzdGFydCBpdCBpZiBpdCBkZXRlY3RzIHRoZSBuZWVkIHRvIGZsaXAgdGhlIHBsYWNlbWVudC5cbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIGZsaXA6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9NjAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA2MDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBmbGlwLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtTdHJpbmd8QXJyYXl9IGJlaGF2aW9yPSdmbGlwJ1xuICAgICAqIFRoZSBiZWhhdmlvciB1c2VkIHRvIGNoYW5nZSB0aGUgcG9wcGVyJ3MgcGxhY2VtZW50LiBJdCBjYW4gYmUgb25lIG9mXG4gICAgICogYGZsaXBgLCBgY2xvY2t3aXNlYCwgYGNvdW50ZXJjbG9ja3dpc2VgIG9yIGFuIGFycmF5IHdpdGggYSBsaXN0IG9mIHZhbGlkXG4gICAgICogcGxhY2VtZW50cyAod2l0aCBvcHRpb25hbCB2YXJpYXRpb25zKVxuICAgICAqL1xuICAgIGJlaGF2aW9yOiAnZmxpcCcsXG4gICAgLyoqXG4gICAgICogQHByb3Age251bWJlcn0gcGFkZGluZz01XG4gICAgICogVGhlIHBvcHBlciB3aWxsIGZsaXAgaWYgaXQgaGl0cyB0aGUgZWRnZXMgb2YgdGhlIGBib3VuZGFyaWVzRWxlbWVudGBcbiAgICAgKi9cbiAgICBwYWRkaW5nOiA1LFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtTdHJpbmd8SFRNTEVsZW1lbnR9IGJvdW5kYXJpZXNFbGVtZW50PSd2aWV3cG9ydCdcbiAgICAgKiBUaGUgZWxlbWVudCB3aGljaCB3aWxsIGRlZmluZSB0aGUgYm91bmRhcmllcyBvZiB0aGUgcG9wcGVyIHBvc2l0aW9uLlxuICAgICAqIFRoZSBwb3BwZXIgd2lsbCBuZXZlciBiZSBwbGFjZWQgb3V0c2lkZSBvZiB0aGUgZGVmaW5lZCBib3VuZGFyaWVzXG4gICAgICogKGV4Y2VwdCBpZiBga2VlcFRvZ2V0aGVyYCBpcyBlbmFibGVkKVxuICAgICAqL1xuICAgIGJvdW5kYXJpZXNFbGVtZW50OiAndmlld3BvcnQnLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtCb29sZWFufSBmbGlwVmFyaWF0aW9ucz1mYWxzZVxuICAgICAqIFRoZSBwb3BwZXIgd2lsbCBzd2l0Y2ggcGxhY2VtZW50IHZhcmlhdGlvbiBiZXR3ZWVuIGAtc3RhcnRgIGFuZCBgLWVuZGAgd2hlblxuICAgICAqIHRoZSByZWZlcmVuY2UgZWxlbWVudCBvdmVybGFwcyBpdHMgYm91bmRhcmllcy5cbiAgICAgKlxuICAgICAqIFRoZSBvcmlnaW5hbCBwbGFjZW1lbnQgc2hvdWxkIGhhdmUgYSBzZXQgdmFyaWF0aW9uLlxuICAgICAqL1xuICAgIGZsaXBWYXJpYXRpb25zOiBmYWxzZSxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7Qm9vbGVhbn0gZmxpcFZhcmlhdGlvbnNCeUNvbnRlbnQ9ZmFsc2VcbiAgICAgKiBUaGUgcG9wcGVyIHdpbGwgc3dpdGNoIHBsYWNlbWVudCB2YXJpYXRpb24gYmV0d2VlbiBgLXN0YXJ0YCBhbmQgYC1lbmRgIHdoZW5cbiAgICAgKiB0aGUgcG9wcGVyIGVsZW1lbnQgb3ZlcmxhcHMgaXRzIHJlZmVyZW5jZSBib3VuZGFyaWVzLlxuICAgICAqXG4gICAgICogVGhlIG9yaWdpbmFsIHBsYWNlbWVudCBzaG91bGQgaGF2ZSBhIHNldCB2YXJpYXRpb24uXG4gICAgICovXG4gICAgZmxpcFZhcmlhdGlvbnNCeUNvbnRlbnQ6IGZhbHNlLFxuICB9LFxuXG4gIC8qKlxuICAgKiBNb2RpZmllciB1c2VkIHRvIG1ha2UgdGhlIHBvcHBlciBmbG93IHRvd2FyZCB0aGUgaW5uZXIgb2YgdGhlIHJlZmVyZW5jZSBlbGVtZW50LlxuICAgKiBCeSBkZWZhdWx0LCB3aGVuIHRoaXMgbW9kaWZpZXIgaXMgZGlzYWJsZWQsIHRoZSBwb3BwZXIgd2lsbCBiZSBwbGFjZWQgb3V0c2lkZVxuICAgKiB0aGUgcmVmZXJlbmNlIGVsZW1lbnQuXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBpbm5lcjoge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj03MDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDcwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9ZmFsc2UgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogaW5uZXIsXG4gIH0sXG5cbiAgLyoqXG4gICAqIE1vZGlmaWVyIHVzZWQgdG8gaGlkZSB0aGUgcG9wcGVyIHdoZW4gaXRzIHJlZmVyZW5jZSBlbGVtZW50IGlzIG91dHNpZGUgb2YgdGhlXG4gICAqIHBvcHBlciBib3VuZGFyaWVzLiBJdCB3aWxsIHNldCBhIGB4LW91dC1vZi1ib3VuZGFyaWVzYCBhdHRyaWJ1dGUgd2hpY2ggY2FuXG4gICAqIGJlIHVzZWQgdG8gaGlkZSB3aXRoIGEgQ1NTIHNlbGVjdG9yIHRoZSBwb3BwZXIgd2hlbiBpdHMgcmVmZXJlbmNlIGlzXG4gICAqIG91dCBvZiBib3VuZGFyaWVzLlxuICAgKlxuICAgKiBSZXF1aXJlcyB0aGUgYHByZXZlbnRPdmVyZmxvd2AgbW9kaWZpZXIgYmVmb3JlIGl0IGluIG9yZGVyIHRvIHdvcmsuXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBoaWRlOiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTgwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogODAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogaGlkZSxcbiAgfSxcblxuICAvKipcbiAgICogQ29tcHV0ZXMgdGhlIHN0eWxlIHRoYXQgd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXIgZWxlbWVudCB0byBnZXRzXG4gICAqIHByb3Blcmx5IHBvc2l0aW9uZWQuXG4gICAqXG4gICAqIE5vdGUgdGhhdCB0aGlzIG1vZGlmaWVyIHdpbGwgbm90IHRvdWNoIHRoZSBET00sIGl0IGp1c3QgcHJlcGFyZXMgdGhlIHN0eWxlc1xuICAgKiBzbyB0aGF0IGBhcHBseVN0eWxlYCBtb2RpZmllciBjYW4gYXBwbHkgaXQuIFRoaXMgc2VwYXJhdGlvbiBpcyB1c2VmdWxcbiAgICogaW4gY2FzZSB5b3UgbmVlZCB0byByZXBsYWNlIGBhcHBseVN0eWxlYCB3aXRoIGEgY3VzdG9tIGltcGxlbWVudGF0aW9uLlxuICAgKlxuICAgKiBUaGlzIG1vZGlmaWVyIGhhcyBgODUwYCBhcyBgb3JkZXJgIHZhbHVlIHRvIG1haW50YWluIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbiAgICogd2l0aCBwcmV2aW91cyB2ZXJzaW9ucyBvZiBQb3BwZXIuanMuIEV4cGVjdCB0aGUgbW9kaWZpZXJzIG9yZGVyaW5nIG1ldGhvZFxuICAgKiB0byBjaGFuZ2UgaW4gZnV0dXJlIG1ham9yIHZlcnNpb25zIG9mIHRoZSBsaWJyYXJ5LlxuICAgKlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgY29tcHV0ZVN0eWxlOiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTg1MCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogODUwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogY29tcHV0ZVN0eWxlLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtCb29sZWFufSBncHVBY2NlbGVyYXRpb249dHJ1ZVxuICAgICAqIElmIHRydWUsIGl0IHVzZXMgdGhlIENTUyAzRCB0cmFuc2Zvcm1hdGlvbiB0byBwb3NpdGlvbiB0aGUgcG9wcGVyLlxuICAgICAqIE90aGVyd2lzZSwgaXQgd2lsbCB1c2UgdGhlIGB0b3BgIGFuZCBgbGVmdGAgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGdwdUFjY2VsZXJhdGlvbjogdHJ1ZSxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7c3RyaW5nfSBbeD0nYm90dG9tJ11cbiAgICAgKiBXaGVyZSB0byBhbmNob3IgdGhlIFggYXhpcyAoYGJvdHRvbWAgb3IgYHRvcGApLiBBS0EgWCBvZmZzZXQgb3JpZ2luLlxuICAgICAqIENoYW5nZSB0aGlzIGlmIHlvdXIgcG9wcGVyIHNob3VsZCBncm93IGluIGEgZGlyZWN0aW9uIGRpZmZlcmVudCBmcm9tIGBib3R0b21gXG4gICAgICovXG4gICAgeDogJ2JvdHRvbScsXG4gICAgLyoqXG4gICAgICogQHByb3Age3N0cmluZ30gW3g9J2xlZnQnXVxuICAgICAqIFdoZXJlIHRvIGFuY2hvciB0aGUgWSBheGlzIChgbGVmdGAgb3IgYHJpZ2h0YCkuIEFLQSBZIG9mZnNldCBvcmlnaW4uXG4gICAgICogQ2hhbmdlIHRoaXMgaWYgeW91ciBwb3BwZXIgc2hvdWxkIGdyb3cgaW4gYSBkaXJlY3Rpb24gZGlmZmVyZW50IGZyb20gYHJpZ2h0YFxuICAgICAqL1xuICAgIHk6ICdyaWdodCcsXG4gIH0sXG5cbiAgLyoqXG4gICAqIEFwcGxpZXMgdGhlIGNvbXB1dGVkIHN0eWxlcyB0byB0aGUgcG9wcGVyIGVsZW1lbnQuXG4gICAqXG4gICAqIEFsbCB0aGUgRE9NIG1hbmlwdWxhdGlvbnMgYXJlIGxpbWl0ZWQgdG8gdGhpcyBtb2RpZmllci4gVGhpcyBpcyB1c2VmdWwgaW4gY2FzZVxuICAgKiB5b3Ugd2FudCB0byBpbnRlZ3JhdGUgUG9wcGVyLmpzIGluc2lkZSBhIGZyYW1ld29yayBvciB2aWV3IGxpYnJhcnkgYW5kIHlvdVxuICAgKiB3YW50IHRvIGRlbGVnYXRlIGFsbCB0aGUgRE9NIG1hbmlwdWxhdGlvbnMgdG8gaXQuXG4gICAqXG4gICAqIE5vdGUgdGhhdCBpZiB5b3UgZGlzYWJsZSB0aGlzIG1vZGlmaWVyLCB5b3UgbXVzdCBtYWtlIHN1cmUgdGhlIHBvcHBlciBlbGVtZW50XG4gICAqIGhhcyBpdHMgcG9zaXRpb24gc2V0IHRvIGBhYnNvbHV0ZWAgYmVmb3JlIFBvcHBlci5qcyBjYW4gZG8gaXRzIHdvcmshXG4gICAqXG4gICAqIEp1c3QgZGlzYWJsZSB0aGlzIG1vZGlmaWVyIGFuZCBkZWZpbmUgeW91ciBvd24gdG8gYWNoaWV2ZSB0aGUgZGVzaXJlZCBlZmZlY3QuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBhcHBseVN0eWxlOiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTkwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogOTAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogYXBwbHlTdHlsZSxcbiAgICAvKiogQHByb3Age0Z1bmN0aW9ufSAqL1xuICAgIG9uTG9hZDogYXBwbHlTdHlsZU9uTG9hZCxcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuMTAuMCwgdGhlIHByb3BlcnR5IG1vdmVkIHRvIGBjb21wdXRlU3R5bGVgIG1vZGlmaWVyXG4gICAgICogQHByb3Age0Jvb2xlYW59IGdwdUFjY2VsZXJhdGlvbj10cnVlXG4gICAgICogSWYgdHJ1ZSwgaXQgdXNlcyB0aGUgQ1NTIDNEIHRyYW5zZm9ybWF0aW9uIHRvIHBvc2l0aW9uIHRoZSBwb3BwZXIuXG4gICAgICogT3RoZXJ3aXNlLCBpdCB3aWxsIHVzZSB0aGUgYHRvcGAgYW5kIGBsZWZ0YCBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgZ3B1QWNjZWxlcmF0aW9uOiB1bmRlZmluZWQsXG4gIH0sXG59O1xuXG4vKipcbiAqIFRoZSBgZGF0YU9iamVjdGAgaXMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIHRoZSBpbmZvcm1hdGlvbiB1c2VkIGJ5IFBvcHBlci5qcy5cbiAqIFRoaXMgb2JqZWN0IGlzIHBhc3NlZCB0byBtb2RpZmllcnMgYW5kIHRvIHRoZSBgb25DcmVhdGVgIGFuZCBgb25VcGRhdGVgIGNhbGxiYWNrcy5cbiAqIEBuYW1lIGRhdGFPYmplY3RcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLmluc3RhbmNlIFRoZSBQb3BwZXIuanMgaW5zdGFuY2VcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBkYXRhLnBsYWNlbWVudCBQbGFjZW1lbnQgYXBwbGllZCB0byBwb3BwZXJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBkYXRhLm9yaWdpbmFsUGxhY2VtZW50IFBsYWNlbWVudCBvcmlnaW5hbGx5IGRlZmluZWQgb24gaW5pdFxuICogQHByb3BlcnR5IHtCb29sZWFufSBkYXRhLmZsaXBwZWQgVHJ1ZSBpZiBwb3BwZXIgaGFzIGJlZW4gZmxpcHBlZCBieSBmbGlwIG1vZGlmaWVyXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IGRhdGEuaGlkZSBUcnVlIGlmIHRoZSByZWZlcmVuY2UgZWxlbWVudCBpcyBvdXQgb2YgYm91bmRhcmllcywgdXNlZnVsIHRvIGtub3cgd2hlbiB0byBoaWRlIHRoZSBwb3BwZXJcbiAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGRhdGEuYXJyb3dFbGVtZW50IE5vZGUgdXNlZCBhcyBhcnJvdyBieSBhcnJvdyBtb2RpZmllclxuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEuc3R5bGVzIEFueSBDU1MgcHJvcGVydHkgZGVmaW5lZCBoZXJlIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcG9wcGVyLiBJdCBleHBlY3RzIHRoZSBKYXZhU2NyaXB0IG5vbWVuY2xhdHVyZSAoZWcuIGBtYXJnaW5Cb3R0b21gKVxuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEuYXJyb3dTdHlsZXMgQW55IENTUyBwcm9wZXJ0eSBkZWZpbmVkIGhlcmUgd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXIgYXJyb3cuIEl0IGV4cGVjdHMgdGhlIEphdmFTY3JpcHQgbm9tZW5jbGF0dXJlIChlZy4gYG1hcmdpbkJvdHRvbWApXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5ib3VuZGFyaWVzIE9mZnNldHMgb2YgdGhlIHBvcHBlciBib3VuZGFyaWVzXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5vZmZzZXRzIFRoZSBtZWFzdXJlbWVudHMgb2YgcG9wcGVyLCByZWZlcmVuY2UgYW5kIGFycm93IGVsZW1lbnRzXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5vZmZzZXRzLnBvcHBlciBgdG9wYCwgYGxlZnRgLCBgd2lkdGhgLCBgaGVpZ2h0YCB2YWx1ZXNcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLm9mZnNldHMucmVmZXJlbmNlIGB0b3BgLCBgbGVmdGAsIGB3aWR0aGAsIGBoZWlnaHRgIHZhbHVlc1xuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEub2Zmc2V0cy5hcnJvd10gYHRvcGAgYW5kIGBsZWZ0YCBvZmZzZXRzLCBvbmx5IG9uZSBvZiB0aGVtIHdpbGwgYmUgZGlmZmVyZW50IGZyb20gMFxuICovXG4iLCJpbXBvcnQgbW9kaWZpZXJzIGZyb20gJy4uL21vZGlmaWVycy9pbmRleCc7XG5cbi8qKlxuICogRGVmYXVsdCBvcHRpb25zIHByb3ZpZGVkIHRvIFBvcHBlci5qcyBjb25zdHJ1Y3Rvci48YnIgLz5cbiAqIFRoZXNlIGNhbiBiZSBvdmVycmlkZGVuIHVzaW5nIHRoZSBgb3B0aW9uc2AgYXJndW1lbnQgb2YgUG9wcGVyLmpzLjxiciAvPlxuICogVG8gb3ZlcnJpZGUgYW4gb3B0aW9uLCBzaW1wbHkgcGFzcyBhbiBvYmplY3Qgd2l0aCB0aGUgc2FtZVxuICogc3RydWN0dXJlIG9mIHRoZSBgb3B0aW9uc2Agb2JqZWN0LCBhcyB0aGUgM3JkIGFyZ3VtZW50LiBGb3IgZXhhbXBsZTpcbiAqIGBgYFxuICogbmV3IFBvcHBlcihyZWYsIHBvcCwge1xuICogICBtb2RpZmllcnM6IHtcbiAqICAgICBwcmV2ZW50T3ZlcmZsb3c6IHsgZW5hYmxlZDogZmFsc2UgfVxuICogICB9XG4gKiB9KVxuICogYGBgXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHN0YXRpY1xuICogQG1lbWJlcm9mIFBvcHBlclxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIC8qKlxuICAgKiBQb3BwZXIncyBwbGFjZW1lbnQuXG4gICAqIEBwcm9wIHtQb3BwZXIucGxhY2VtZW50c30gcGxhY2VtZW50PSdib3R0b20nXG4gICAqL1xuICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuXG4gIC8qKlxuICAgKiBTZXQgdGhpcyB0byB0cnVlIGlmIHlvdSB3YW50IHBvcHBlciB0byBwb3NpdGlvbiBpdCBzZWxmIGluICdmaXhlZCcgbW9kZVxuICAgKiBAcHJvcCB7Qm9vbGVhbn0gcG9zaXRpb25GaXhlZD1mYWxzZVxuICAgKi9cbiAgcG9zaXRpb25GaXhlZDogZmFsc2UsXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgZXZlbnRzIChyZXNpemUsIHNjcm9sbCkgYXJlIGluaXRpYWxseSBlbmFibGVkLlxuICAgKiBAcHJvcCB7Qm9vbGVhbn0gZXZlbnRzRW5hYmxlZD10cnVlXG4gICAqL1xuICBldmVudHNFbmFibGVkOiB0cnVlLFxuXG4gIC8qKlxuICAgKiBTZXQgdG8gdHJ1ZSBpZiB5b3Ugd2FudCB0byBhdXRvbWF0aWNhbGx5IHJlbW92ZSB0aGUgcG9wcGVyIHdoZW5cbiAgICogeW91IGNhbGwgdGhlIGBkZXN0cm95YCBtZXRob2QuXG4gICAqIEBwcm9wIHtCb29sZWFufSByZW1vdmVPbkRlc3Ryb3k9ZmFsc2VcbiAgICovXG4gIHJlbW92ZU9uRGVzdHJveTogZmFsc2UsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGNhbGxlZCB3aGVuIHRoZSBwb3BwZXIgaXMgY3JlYXRlZC48YnIgLz5cbiAgICogQnkgZGVmYXVsdCwgaXQgaXMgc2V0IHRvIG5vLW9wLjxiciAvPlxuICAgKiBBY2Nlc3MgUG9wcGVyLmpzIGluc3RhbmNlIHdpdGggYGRhdGEuaW5zdGFuY2VgLlxuICAgKiBAcHJvcCB7b25DcmVhdGV9XG4gICAqL1xuICBvbkNyZWF0ZTogKCkgPT4ge30sXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGNhbGxlZCB3aGVuIHRoZSBwb3BwZXIgaXMgdXBkYXRlZC4gVGhpcyBjYWxsYmFjayBpcyBub3QgY2FsbGVkXG4gICAqIG9uIHRoZSBpbml0aWFsaXphdGlvbi9jcmVhdGlvbiBvZiB0aGUgcG9wcGVyLCBidXQgb25seSBvbiBzdWJzZXF1ZW50XG4gICAqIHVwZGF0ZXMuPGJyIC8+XG4gICAqIEJ5IGRlZmF1bHQsIGl0IGlzIHNldCB0byBuby1vcC48YnIgLz5cbiAgICogQWNjZXNzIFBvcHBlci5qcyBpbnN0YW5jZSB3aXRoIGBkYXRhLmluc3RhbmNlYC5cbiAgICogQHByb3Age29uVXBkYXRlfVxuICAgKi9cbiAgb25VcGRhdGU6ICgpID0+IHt9LFxuXG4gIC8qKlxuICAgKiBMaXN0IG9mIG1vZGlmaWVycyB1c2VkIHRvIG1vZGlmeSB0aGUgb2Zmc2V0cyBiZWZvcmUgdGhleSBhcmUgYXBwbGllZCB0byB0aGUgcG9wcGVyLlxuICAgKiBUaGV5IHByb3ZpZGUgbW9zdCBvZiB0aGUgZnVuY3Rpb25hbGl0aWVzIG9mIFBvcHBlci5qcy5cbiAgICogQHByb3Age21vZGlmaWVyc31cbiAgICovXG4gIG1vZGlmaWVycyxcbn07XG5cbi8qKlxuICogQGNhbGxiYWNrIG9uQ3JlYXRlXG4gKiBAcGFyYW0ge2RhdGFPYmplY3R9IGRhdGFcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBvblVwZGF0ZVxuICogQHBhcmFtIHtkYXRhT2JqZWN0fSBkYXRhXG4gKi9cbiIsIi8vIFV0aWxzXG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnLi91dGlscy9kZWJvdW5jZSc7XG5pbXBvcnQgaXNGdW5jdGlvbiBmcm9tICcuL3V0aWxzL2lzRnVuY3Rpb24nO1xuXG4vLyBNZXRob2RzXG5pbXBvcnQgdXBkYXRlIGZyb20gJy4vbWV0aG9kcy91cGRhdGUnO1xuaW1wb3J0IGRlc3Ryb3kgZnJvbSAnLi9tZXRob2RzL2Rlc3Ryb3knO1xuaW1wb3J0IGVuYWJsZUV2ZW50TGlzdGVuZXJzIGZyb20gJy4vbWV0aG9kcy9lbmFibGVFdmVudExpc3RlbmVycyc7XG5pbXBvcnQgZGlzYWJsZUV2ZW50TGlzdGVuZXJzIGZyb20gJy4vbWV0aG9kcy9kaXNhYmxlRXZlbnRMaXN0ZW5lcnMnO1xuaW1wb3J0IERlZmF1bHRzIGZyb20gJy4vbWV0aG9kcy9kZWZhdWx0cyc7XG5pbXBvcnQgcGxhY2VtZW50cyBmcm9tICcuL21ldGhvZHMvcGxhY2VtZW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHBlciB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IFBvcHBlci5qcyBpbnN0YW5jZS5cbiAgICogQGNsYXNzIFBvcHBlclxuICAgKiBAcGFyYW0ge0VsZW1lbnR8cmVmZXJlbmNlT2JqZWN0fSByZWZlcmVuY2UgLSBUaGUgcmVmZXJlbmNlIGVsZW1lbnQgdXNlZCB0byBwb3NpdGlvbiB0aGUgcG9wcGVyXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gcG9wcGVyIC0gVGhlIEhUTUwgLyBYTUwgZWxlbWVudCB1c2VkIGFzIHRoZSBwb3BwZXJcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBZb3VyIGN1c3RvbSBvcHRpb25zIHRvIG92ZXJyaWRlIHRoZSBvbmVzIGRlZmluZWQgaW4gW0RlZmF1bHRzXSgjZGVmYXVsdHMpXG4gICAqIEByZXR1cm4ge09iamVjdH0gaW5zdGFuY2UgLSBUaGUgZ2VuZXJhdGVkIFBvcHBlci5qcyBpbnN0YW5jZVxuICAgKi9cbiAgY29uc3RydWN0b3IocmVmZXJlbmNlLCBwb3BwZXIsIG9wdGlvbnMgPSB7fSkge1xuICAgIC8vIG1ha2UgdXBkYXRlKCkgZGVib3VuY2VkLCBzbyB0aGF0IGl0IG9ubHkgcnVucyBhdCBtb3N0IG9uY2UtcGVyLXRpY2tcbiAgICB0aGlzLnVwZGF0ZSA9IGRlYm91bmNlKHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuXG4gICAgLy8gd2l0aCB7fSB3ZSBjcmVhdGUgYSBuZXcgb2JqZWN0IHdpdGggdGhlIG9wdGlvbnMgaW5zaWRlIGl0XG4gICAgdGhpcy5vcHRpb25zID0geyAuLi5Qb3BwZXIuRGVmYXVsdHMsIC4uLm9wdGlvbnMgfTtcblxuICAgIC8vIGluaXQgc3RhdGVcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNEZXN0cm95ZWQ6IGZhbHNlLFxuICAgICAgaXNDcmVhdGVkOiBmYWxzZSxcbiAgICAgIHNjcm9sbFBhcmVudHM6IFtdLFxuICAgIH07XG5cbiAgICAvLyBnZXQgcmVmZXJlbmNlIGFuZCBwb3BwZXIgZWxlbWVudHMgKGFsbG93IGpRdWVyeSB3cmFwcGVycylcbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZSAmJiByZWZlcmVuY2UuanF1ZXJ5ID8gcmVmZXJlbmNlWzBdIDogcmVmZXJlbmNlO1xuICAgIHRoaXMucG9wcGVyID0gcG9wcGVyICYmIHBvcHBlci5qcXVlcnkgPyBwb3BwZXJbMF0gOiBwb3BwZXI7XG5cbiAgICAvLyBEZWVwIG1lcmdlIG1vZGlmaWVycyBvcHRpb25zXG4gICAgdGhpcy5vcHRpb25zLm1vZGlmaWVycyA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHtcbiAgICAgIC4uLlBvcHBlci5EZWZhdWx0cy5tb2RpZmllcnMsXG4gICAgICAuLi5vcHRpb25zLm1vZGlmaWVycyxcbiAgICB9KS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgdGhpcy5vcHRpb25zLm1vZGlmaWVyc1tuYW1lXSA9IHtcbiAgICAgICAgLy8gSWYgaXQncyBhIGJ1aWx0LWluIG1vZGlmaWVyLCB1c2UgaXQgYXMgYmFzZVxuICAgICAgICAuLi4oUG9wcGVyLkRlZmF1bHRzLm1vZGlmaWVyc1tuYW1lXSB8fCB7fSksXG4gICAgICAgIC8vIElmIHRoZXJlIGFyZSBjdXN0b20gb3B0aW9ucywgb3ZlcnJpZGUgYW5kIG1lcmdlIHdpdGggZGVmYXVsdCBvbmVzXG4gICAgICAgIC4uLihvcHRpb25zLm1vZGlmaWVycyA/IG9wdGlvbnMubW9kaWZpZXJzW25hbWVdIDoge30pLFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIC8vIFJlZmFjdG9yaW5nIG1vZGlmaWVycycgbGlzdCAoT2JqZWN0ID0+IEFycmF5KVxuICAgIHRoaXMubW9kaWZpZXJzID0gT2JqZWN0LmtleXModGhpcy5vcHRpb25zLm1vZGlmaWVycylcbiAgICAgIC5tYXAobmFtZSA9PiAoe1xuICAgICAgICBuYW1lLFxuICAgICAgICAuLi50aGlzLm9wdGlvbnMubW9kaWZpZXJzW25hbWVdLFxuICAgICAgfSkpXG4gICAgICAvLyBzb3J0IHRoZSBtb2RpZmllcnMgYnkgb3JkZXJcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIC0gYi5vcmRlcik7XG5cbiAgICAvLyBtb2RpZmllcnMgaGF2ZSB0aGUgYWJpbGl0eSB0byBleGVjdXRlIGFyYml0cmFyeSBjb2RlIHdoZW4gUG9wcGVyLmpzIGdldCBpbml0ZWRcbiAgICAvLyBzdWNoIGNvZGUgaXMgZXhlY3V0ZWQgaW4gdGhlIHNhbWUgb3JkZXIgb2YgaXRzIG1vZGlmaWVyXG4gICAgLy8gdGhleSBjb3VsZCBhZGQgbmV3IHByb3BlcnRpZXMgdG8gdGhlaXIgb3B0aW9ucyBjb25maWd1cmF0aW9uXG4gICAgLy8gQkUgQVdBUkU6IGRvbid0IGFkZCBvcHRpb25zIHRvIGBvcHRpb25zLm1vZGlmaWVycy5uYW1lYCBidXQgdG8gYG1vZGlmaWVyT3B0aW9uc2AhXG4gICAgdGhpcy5tb2RpZmllcnMuZm9yRWFjaChtb2RpZmllck9wdGlvbnMgPT4ge1xuICAgICAgaWYgKG1vZGlmaWVyT3B0aW9ucy5lbmFibGVkICYmIGlzRnVuY3Rpb24obW9kaWZpZXJPcHRpb25zLm9uTG9hZCkpIHtcbiAgICAgICAgbW9kaWZpZXJPcHRpb25zLm9uTG9hZChcbiAgICAgICAgICB0aGlzLnJlZmVyZW5jZSxcbiAgICAgICAgICB0aGlzLnBvcHBlcixcbiAgICAgICAgICB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgbW9kaWZpZXJPcHRpb25zLFxuICAgICAgICAgIHRoaXMuc3RhdGVcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGZpcmUgdGhlIGZpcnN0IHVwZGF0ZSB0byBwb3NpdGlvbiB0aGUgcG9wcGVyIGluIHRoZSByaWdodCBwbGFjZVxuICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICBjb25zdCBldmVudHNFbmFibGVkID0gdGhpcy5vcHRpb25zLmV2ZW50c0VuYWJsZWQ7XG4gICAgaWYgKGV2ZW50c0VuYWJsZWQpIHtcbiAgICAgIC8vIHNldHVwIGV2ZW50IGxpc3RlbmVycywgdGhleSB3aWxsIHRha2UgY2FyZSBvZiB1cGRhdGUgdGhlIHBvc2l0aW9uIGluIHNwZWNpZmljIHNpdHVhdGlvbnNcbiAgICAgIHRoaXMuZW5hYmxlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlLmV2ZW50c0VuYWJsZWQgPSBldmVudHNFbmFibGVkO1xuICB9XG5cbiAgLy8gV2UgY2FuJ3QgdXNlIGNsYXNzIHByb3BlcnRpZXMgYmVjYXVzZSB0aGV5IGRvbid0IGdldCBsaXN0ZWQgaW4gdGhlXG4gIC8vIGNsYXNzIHByb3RvdHlwZSBhbmQgYnJlYWsgc3R1ZmYgbGlrZSBTaW5vbiBzdHVic1xuICB1cGRhdGUoKSB7XG4gICAgcmV0dXJuIHVwZGF0ZS5jYWxsKHRoaXMpO1xuICB9XG4gIGRlc3Ryb3koKSB7XG4gICAgcmV0dXJuIGRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgfVxuICBlbmFibGVFdmVudExpc3RlbmVycygpIHtcbiAgICByZXR1cm4gZW5hYmxlRXZlbnRMaXN0ZW5lcnMuY2FsbCh0aGlzKTtcbiAgfVxuICBkaXNhYmxlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgcmV0dXJuIGRpc2FibGVFdmVudExpc3RlbmVycy5jYWxsKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNjaGVkdWxlcyBhbiB1cGRhdGUuIEl0IHdpbGwgcnVuIG9uIHRoZSBuZXh0IFVJIHVwZGF0ZSBhdmFpbGFibGUuXG4gICAqIEBtZXRob2Qgc2NoZWR1bGVVcGRhdGVcbiAgICogQG1lbWJlcm9mIFBvcHBlclxuICAgKi9cbiAgc2NoZWR1bGVVcGRhdGUgPSAoKSA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUpO1xuXG4gIC8qKlxuICAgKiBDb2xsZWN0aW9uIG9mIHV0aWxpdGllcyB1c2VmdWwgd2hlbiB3cml0aW5nIGN1c3RvbSBtb2RpZmllcnMuXG4gICAqIFN0YXJ0aW5nIGZyb20gdmVyc2lvbiAxLjcsIHRoaXMgbWV0aG9kIGlzIGF2YWlsYWJsZSBvbmx5IGlmIHlvdVxuICAgKiBpbmNsdWRlIGBwb3BwZXItdXRpbHMuanNgIGJlZm9yZSBgcG9wcGVyLmpzYC5cbiAgICpcbiAgICogKipERVBSRUNBVElPTioqOiBUaGlzIHdheSB0byBhY2Nlc3MgUG9wcGVyVXRpbHMgaXMgZGVwcmVjYXRlZFxuICAgKiBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHYyISBVc2UgdGhlIFBvcHBlclV0aWxzIG1vZHVsZSBkaXJlY3RseSBpbnN0ZWFkLlxuICAgKiBEdWUgdG8gdGhlIGhpZ2ggaW5zdGFiaWxpdHkgb2YgdGhlIG1ldGhvZHMgY29udGFpbmVkIGluIFV0aWxzLCB3ZSBjYW4ndFxuICAgKiBndWFyYW50ZWUgdGhlbSB0byBmb2xsb3cgc2VtdmVyLiBVc2UgdGhlbSBhdCB5b3VyIG93biByaXNrIVxuICAgKiBAc3RhdGljXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS44XG4gICAqIEBtZW1iZXIgVXRpbHNcbiAgICogQG1lbWJlcm9mIFBvcHBlclxuICAgKi9cbiAgc3RhdGljIFV0aWxzID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogZ2xvYmFsKS5Qb3BwZXJVdGlscztcblxuICBzdGF0aWMgcGxhY2VtZW50cyA9IHBsYWNlbWVudHM7XG5cbiAgc3RhdGljIERlZmF1bHRzID0gRGVmYXVsdHM7XG59XG5cbi8qKlxuICogVGhlIGByZWZlcmVuY2VPYmplY3RgIGlzIGFuIG9iamVjdCB0aGF0IHByb3ZpZGVzIGFuIGludGVyZmFjZSBjb21wYXRpYmxlIHdpdGggUG9wcGVyLmpzXG4gKiBhbmQgbGV0cyB5b3UgdXNlIGl0IGFzIHJlcGxhY2VtZW50IG9mIGEgcmVhbCBET00gbm9kZS48YnIgLz5cbiAqIFlvdSBjYW4gdXNlIHRoaXMgbWV0aG9kIHRvIHBvc2l0aW9uIGEgcG9wcGVyIHJlbGF0aXZlbHkgdG8gYSBzZXQgb2YgY29vcmRpbmF0ZXNcbiAqIGluIGNhc2UgeW91IGRvbid0IGhhdmUgYSBET00gbm9kZSB0byB1c2UgYXMgcmVmZXJlbmNlLlxuICpcbiAqIGBgYFxuICogbmV3IFBvcHBlcihyZWZlcmVuY2VPYmplY3QsIHBvcHBlck5vZGUpO1xuICogYGBgXG4gKlxuICogTkI6IFRoaXMgZmVhdHVyZSBpc24ndCBzdXBwb3J0ZWQgaW4gSW50ZXJuZXQgRXhwbG9yZXIgMTAuXG4gKiBAbmFtZSByZWZlcmVuY2VPYmplY3RcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGRhdGEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0XG4gKiBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIHNldCBvZiBjb29yZGluYXRlcyBjb21wYXRpYmxlIHdpdGggdGhlIG5hdGl2ZSBgZ2V0Qm91bmRpbmdDbGllbnRSZWN0YCBtZXRob2QuXG4gKiBAcHJvcGVydHkge251bWJlcn0gZGF0YS5jbGllbnRXaWR0aFxuICogQW4gRVM2IGdldHRlciB0aGF0IHdpbGwgcmV0dXJuIHRoZSB3aWR0aCBvZiB0aGUgdmlydHVhbCByZWZlcmVuY2UgZWxlbWVudC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBkYXRhLmNsaWVudEhlaWdodFxuICogQW4gRVM2IGdldHRlciB0aGF0IHdpbGwgcmV0dXJuIHRoZSBoZWlnaHQgb2YgdGhlIHZpcnR1YWwgcmVmZXJlbmNlIGVsZW1lbnQuXG4gKi9cbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgJ2Jvb3RzdHJhcCc7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXG4gICAgLy8gQ2Fyb3VzZWxcbiAgICAkKFwiLmNhcm91c2VsLXBvc3RzXCIpLm93bENhcm91c2VsKHtcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgbWFyZ2luOiAzMCxcbiAgICAgICAgbmF2OiB0cnVlLFxuICAgICAgICBuYXZUZXh0OiBbJzxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtbGVmdCBmYS0zeFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4nLCAnPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1yaWdodCBmYS0zeFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4nXSxcbiAgICAgICAgcmVzcG9uc2l2ZToge1xuICAgICAgICAgICAgMDoge1xuICAgICAgICAgICAgICAgIGl0ZW1zOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgNzY4OiB7XG4gICAgICAgICAgICAgICAgaXRlbXM6IDJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA5OTI6IHtcbiAgICAgICAgICAgICAgICBpdGVtczogM1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cblxuXG59KTsiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwic291cmNlUm9vdCI6IiJ9