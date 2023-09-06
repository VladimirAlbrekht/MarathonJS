/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/ansi-html-community/index.js":
/*!***************************************************!*\
  !*** ./node_modules/ansi-html-community/index.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nmodule.exports = ansiHTML;\n\n// Reference to https://github.com/sindresorhus/ansi-regex\nvar _regANSI = /(?:(?:\\u001b\\[)|\\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\\u001b[A-M]/;\nvar _defColors = {\n  reset: ['fff', '000'],\n  // [FOREGROUD_COLOR, BACKGROUND_COLOR]\n  black: '000',\n  red: 'ff0000',\n  green: '209805',\n  yellow: 'e8bf03',\n  blue: '0000ff',\n  magenta: 'ff00ff',\n  cyan: '00ffee',\n  lightgrey: 'f0f0f0',\n  darkgrey: '888'\n};\nvar _styles = {\n  30: 'black',\n  31: 'red',\n  32: 'green',\n  33: 'yellow',\n  34: 'blue',\n  35: 'magenta',\n  36: 'cyan',\n  37: 'lightgrey'\n};\nvar _openTags = {\n  '1': 'font-weight:bold',\n  // bold\n  '2': 'opacity:0.5',\n  // dim\n  '3': '<i>',\n  // italic\n  '4': '<u>',\n  // underscore\n  '8': 'display:none',\n  // hidden\n  '9': '<del>' // delete\n};\n\nvar _closeTags = {\n  '23': '</i>',\n  // reset italic\n  '24': '</u>',\n  // reset underscore\n  '29': '</del>' // reset delete\n};\n\n[0, 21, 22, 27, 28, 39, 49].forEach(function (n) {\n  _closeTags[n] = '</span>';\n});\n\n/**\n * Converts text with ANSI color codes to HTML markup.\n * @param {String} text\n * @returns {*}\n */\nfunction ansiHTML(text) {\n  // Returns the text if the string has no ANSI escape code.\n  if (!_regANSI.test(text)) {\n    return text;\n  }\n\n  // Cache opened sequence.\n  var ansiCodes = [];\n  // Replace with markup.\n  var ret = text.replace(/\\033\\[(\\d+)m/g, function (match, seq) {\n    var ot = _openTags[seq];\n    if (ot) {\n      // If current sequence has been opened, close it.\n      if (!!~ansiCodes.indexOf(seq)) {\n        // eslint-disable-line no-extra-boolean-cast\n        ansiCodes.pop();\n        return '</span>';\n      }\n      // Open tag.\n      ansiCodes.push(seq);\n      return ot[0] === '<' ? ot : '<span style=\"' + ot + ';\">';\n    }\n    var ct = _closeTags[seq];\n    if (ct) {\n      // Pop sequence\n      ansiCodes.pop();\n      return ct;\n    }\n    return '';\n  });\n\n  // Make sure tags are closed.\n  var l = ansiCodes.length;\n  l > 0 && (ret += Array(l + 1).join('</span>'));\n  return ret;\n}\n\n/**\n * Customize colors.\n * @param {Object} colors reference to _defColors\n */\nansiHTML.setColors = function (colors) {\n  if (_typeof(colors) !== 'object') {\n    throw new Error('`colors` parameter must be an Object.');\n  }\n  var _finalColors = {};\n  for (var key in _defColors) {\n    var hex = colors.hasOwnProperty(key) ? colors[key] : null;\n    if (!hex) {\n      _finalColors[key] = _defColors[key];\n      continue;\n    }\n    if ('reset' === key) {\n      if (typeof hex === 'string') {\n        hex = [hex];\n      }\n      if (!Array.isArray(hex) || hex.length === 0 || hex.some(function (h) {\n        return typeof h !== 'string';\n      })) {\n        throw new Error('The value of `' + key + '` property must be an Array and each item could only be a hex string, e.g.: FF0000');\n      }\n      var defHexColor = _defColors[key];\n      if (!hex[0]) {\n        hex[0] = defHexColor[0];\n      }\n      if (hex.length === 1 || !hex[1]) {\n        hex = [hex[0]];\n        hex.push(defHexColor[1]);\n      }\n      hex = hex.slice(0, 2);\n    } else if (typeof hex !== 'string') {\n      throw new Error('The value of `' + key + '` property must be a hex string, e.g.: FF0000');\n    }\n    _finalColors[key] = hex;\n  }\n  _setTags(_finalColors);\n};\n\n/**\n * Reset colors.\n */\nansiHTML.reset = function () {\n  _setTags(_defColors);\n};\n\n/**\n * Expose tags, including open and close.\n * @type {Object}\n */\nansiHTML.tags = {};\nif (Object.defineProperty) {\n  Object.defineProperty(ansiHTML.tags, 'open', {\n    get: function get() {\n      return _openTags;\n    }\n  });\n  Object.defineProperty(ansiHTML.tags, 'close', {\n    get: function get() {\n      return _closeTags;\n    }\n  });\n} else {\n  ansiHTML.tags.open = _openTags;\n  ansiHTML.tags.close = _closeTags;\n}\nfunction _setTags(colors) {\n  // reset all\n  _openTags['0'] = 'font-weight:normal;opacity:1;color:#' + colors.reset[0] + ';background:#' + colors.reset[1];\n  // inverse\n  _openTags['7'] = 'color:#' + colors.reset[1] + ';background:#' + colors.reset[0];\n  // dark grey\n  _openTags['90'] = 'color:#' + colors.darkgrey;\n  for (var code in _styles) {\n    var color = _styles[code];\n    var oriColor = colors[color] || '000';\n    _openTags[code] = 'color:#' + oriColor;\n    code = parseInt(code);\n    _openTags[(code + 10).toString()] = 'background:#' + oriColor;\n  }\n}\nansiHTML.reset();\n\n//# sourceURL=webpack://albrecht-photo/./node_modules/ansi-html-community/index.js?");

/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/***/ ((module) => {

"use strict";
eval("// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nvar R = (typeof Reflect === \"undefined\" ? \"undefined\" : _typeof(Reflect)) === 'object' ? Reflect : null;\nvar ReflectApply = R && typeof R.apply === 'function' ? R.apply : function ReflectApply(target, receiver, args) {\n  return Function.prototype.apply.call(target, receiver, args);\n};\nvar ReflectOwnKeys;\nif (R && typeof R.ownKeys === 'function') {\n  ReflectOwnKeys = R.ownKeys;\n} else if (Object.getOwnPropertySymbols) {\n  ReflectOwnKeys = function ReflectOwnKeys(target) {\n    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));\n  };\n} else {\n  ReflectOwnKeys = function ReflectOwnKeys(target) {\n    return Object.getOwnPropertyNames(target);\n  };\n}\nfunction ProcessEmitWarning(warning) {\n  if (console && console.warn) console.warn(warning);\n}\nvar NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {\n  return value !== value;\n};\nfunction EventEmitter() {\n  EventEmitter.init.call(this);\n}\nmodule.exports = EventEmitter;\nmodule.exports.once = once;\n\n// Backwards-compat with node 0.10.x\nEventEmitter.EventEmitter = EventEmitter;\nEventEmitter.prototype._events = undefined;\nEventEmitter.prototype._eventsCount = 0;\nEventEmitter.prototype._maxListeners = undefined;\n\n// By default EventEmitters will print a warning if more than 10 listeners are\n// added to it. This is a useful default which helps finding memory leaks.\nvar defaultMaxListeners = 10;\nfunction checkListener(listener) {\n  if (typeof listener !== 'function') {\n    throw new TypeError('The \"listener\" argument must be of type Function. Received type ' + _typeof(listener));\n  }\n}\nObject.defineProperty(EventEmitter, 'defaultMaxListeners', {\n  enumerable: true,\n  get: function get() {\n    return defaultMaxListeners;\n  },\n  set: function set(arg) {\n    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {\n      throw new RangeError('The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received ' + arg + '.');\n    }\n    defaultMaxListeners = arg;\n  }\n});\nEventEmitter.init = function () {\n  if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {\n    this._events = Object.create(null);\n    this._eventsCount = 0;\n  }\n  this._maxListeners = this._maxListeners || undefined;\n};\n\n// Obviously not all Emitters should be limited to 10. This function allows\n// that to be increased. Set to zero for unlimited.\nEventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {\n  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {\n    throw new RangeError('The value of \"n\" is out of range. It must be a non-negative number. Received ' + n + '.');\n  }\n  this._maxListeners = n;\n  return this;\n};\nfunction _getMaxListeners(that) {\n  if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;\n  return that._maxListeners;\n}\nEventEmitter.prototype.getMaxListeners = function getMaxListeners() {\n  return _getMaxListeners(this);\n};\nEventEmitter.prototype.emit = function emit(type) {\n  var args = [];\n  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);\n  var doError = type === 'error';\n  var events = this._events;\n  if (events !== undefined) doError = doError && events.error === undefined;else if (!doError) return false;\n\n  // If there is no 'error' event listener then throw.\n  if (doError) {\n    var er;\n    if (args.length > 0) er = args[0];\n    if (er instanceof Error) {\n      // Note: The comments on the `throw` lines are intentional, they show\n      // up in Node's output if this results in an unhandled exception.\n      throw er; // Unhandled 'error' event\n    }\n    // At least give some kind of context to the user\n    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));\n    err.context = er;\n    throw err; // Unhandled 'error' event\n  }\n\n  var handler = events[type];\n  if (handler === undefined) return false;\n  if (typeof handler === 'function') {\n    ReflectApply(handler, this, args);\n  } else {\n    var len = handler.length;\n    var listeners = arrayClone(handler, len);\n    for (var i = 0; i < len; ++i) ReflectApply(listeners[i], this, args);\n  }\n  return true;\n};\nfunction _addListener(target, type, listener, prepend) {\n  var m;\n  var events;\n  var existing;\n  checkListener(listener);\n  events = target._events;\n  if (events === undefined) {\n    events = target._events = Object.create(null);\n    target._eventsCount = 0;\n  } else {\n    // To avoid recursion in the case that type === \"newListener\"! Before\n    // adding it to the listeners, first emit \"newListener\".\n    if (events.newListener !== undefined) {\n      target.emit('newListener', type, listener.listener ? listener.listener : listener);\n\n      // Re-assign `events` because a newListener handler could have caused the\n      // this._events to be assigned to a new object\n      events = target._events;\n    }\n    existing = events[type];\n  }\n  if (existing === undefined) {\n    // Optimize the case of one listener. Don't need the extra array object.\n    existing = events[type] = listener;\n    ++target._eventsCount;\n  } else {\n    if (typeof existing === 'function') {\n      // Adding the second element, need to change to array.\n      existing = events[type] = prepend ? [listener, existing] : [existing, listener];\n      // If we've already got an array, just append.\n    } else if (prepend) {\n      existing.unshift(listener);\n    } else {\n      existing.push(listener);\n    }\n\n    // Check for listener leak\n    m = _getMaxListeners(target);\n    if (m > 0 && existing.length > m && !existing.warned) {\n      existing.warned = true;\n      // No error code for this since it is a Warning\n      // eslint-disable-next-line no-restricted-syntax\n      var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + String(type) + ' listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit');\n      w.name = 'MaxListenersExceededWarning';\n      w.emitter = target;\n      w.type = type;\n      w.count = existing.length;\n      ProcessEmitWarning(w);\n    }\n  }\n  return target;\n}\nEventEmitter.prototype.addListener = function addListener(type, listener) {\n  return _addListener(this, type, listener, false);\n};\nEventEmitter.prototype.on = EventEmitter.prototype.addListener;\nEventEmitter.prototype.prependListener = function prependListener(type, listener) {\n  return _addListener(this, type, listener, true);\n};\nfunction onceWrapper() {\n  if (!this.fired) {\n    this.target.removeListener(this.type, this.wrapFn);\n    this.fired = true;\n    if (arguments.length === 0) return this.listener.call(this.target);\n    return this.listener.apply(this.target, arguments);\n  }\n}\nfunction _onceWrap(target, type, listener) {\n  var state = {\n    fired: false,\n    wrapFn: undefined,\n    target: target,\n    type: type,\n    listener: listener\n  };\n  var wrapped = onceWrapper.bind(state);\n  wrapped.listener = listener;\n  state.wrapFn = wrapped;\n  return wrapped;\n}\nEventEmitter.prototype.once = function once(type, listener) {\n  checkListener(listener);\n  this.on(type, _onceWrap(this, type, listener));\n  return this;\n};\nEventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {\n  checkListener(listener);\n  this.prependListener(type, _onceWrap(this, type, listener));\n  return this;\n};\n\n// Emits a 'removeListener' event if and only if the listener was removed.\nEventEmitter.prototype.removeListener = function removeListener(type, listener) {\n  var list, events, position, i, originalListener;\n  checkListener(listener);\n  events = this._events;\n  if (events === undefined) return this;\n  list = events[type];\n  if (list === undefined) return this;\n  if (list === listener || list.listener === listener) {\n    if (--this._eventsCount === 0) this._events = Object.create(null);else {\n      delete events[type];\n      if (events.removeListener) this.emit('removeListener', type, list.listener || listener);\n    }\n  } else if (typeof list !== 'function') {\n    position = -1;\n    for (i = list.length - 1; i >= 0; i--) {\n      if (list[i] === listener || list[i].listener === listener) {\n        originalListener = list[i].listener;\n        position = i;\n        break;\n      }\n    }\n    if (position < 0) return this;\n    if (position === 0) list.shift();else {\n      spliceOne(list, position);\n    }\n    if (list.length === 1) events[type] = list[0];\n    if (events.removeListener !== undefined) this.emit('removeListener', type, originalListener || listener);\n  }\n  return this;\n};\nEventEmitter.prototype.off = EventEmitter.prototype.removeListener;\nEventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {\n  var listeners, events, i;\n  events = this._events;\n  if (events === undefined) return this;\n\n  // not listening for removeListener, no need to emit\n  if (events.removeListener === undefined) {\n    if (arguments.length === 0) {\n      this._events = Object.create(null);\n      this._eventsCount = 0;\n    } else if (events[type] !== undefined) {\n      if (--this._eventsCount === 0) this._events = Object.create(null);else delete events[type];\n    }\n    return this;\n  }\n\n  // emit removeListener for all listeners on all events\n  if (arguments.length === 0) {\n    var keys = Object.keys(events);\n    var key;\n    for (i = 0; i < keys.length; ++i) {\n      key = keys[i];\n      if (key === 'removeListener') continue;\n      this.removeAllListeners(key);\n    }\n    this.removeAllListeners('removeListener');\n    this._events = Object.create(null);\n    this._eventsCount = 0;\n    return this;\n  }\n  listeners = events[type];\n  if (typeof listeners === 'function') {\n    this.removeListener(type, listeners);\n  } else if (listeners !== undefined) {\n    // LIFO order\n    for (i = listeners.length - 1; i >= 0; i--) {\n      this.removeListener(type, listeners[i]);\n    }\n  }\n  return this;\n};\nfunction _listeners(target, type, unwrap) {\n  var events = target._events;\n  if (events === undefined) return [];\n  var evlistener = events[type];\n  if (evlistener === undefined) return [];\n  if (typeof evlistener === 'function') return unwrap ? [evlistener.listener || evlistener] : [evlistener];\n  return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);\n}\nEventEmitter.prototype.listeners = function listeners(type) {\n  return _listeners(this, type, true);\n};\nEventEmitter.prototype.rawListeners = function rawListeners(type) {\n  return _listeners(this, type, false);\n};\nEventEmitter.listenerCount = function (emitter, type) {\n  if (typeof emitter.listenerCount === 'function') {\n    return emitter.listenerCount(type);\n  } else {\n    return listenerCount.call(emitter, type);\n  }\n};\nEventEmitter.prototype.listenerCount = listenerCount;\nfunction listenerCount(type) {\n  var events = this._events;\n  if (events !== undefined) {\n    var evlistener = events[type];\n    if (typeof evlistener === 'function') {\n      return 1;\n    } else if (evlistener !== undefined) {\n      return evlistener.length;\n    }\n  }\n  return 0;\n}\nEventEmitter.prototype.eventNames = function eventNames() {\n  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];\n};\nfunction arrayClone(arr, n) {\n  var copy = new Array(n);\n  for (var i = 0; i < n; ++i) copy[i] = arr[i];\n  return copy;\n}\nfunction spliceOne(list, index) {\n  for (; index + 1 < list.length; index++) list[index] = list[index + 1];\n  list.pop();\n}\nfunction unwrapListeners(arr) {\n  var ret = new Array(arr.length);\n  for (var i = 0; i < ret.length; ++i) {\n    ret[i] = arr[i].listener || arr[i];\n  }\n  return ret;\n}\nfunction once(emitter, name) {\n  return new Promise(function (resolve, reject) {\n    function errorListener(err) {\n      emitter.removeListener(name, resolver);\n      reject(err);\n    }\n    function resolver() {\n      if (typeof emitter.removeListener === 'function') {\n        emitter.removeListener('error', errorListener);\n      }\n      resolve([].slice.call(arguments));\n    }\n    ;\n    eventTargetAgnosticAddListener(emitter, name, resolver, {\n      once: true\n    });\n    if (name !== 'error') {\n      addErrorHandlerIfEventEmitter(emitter, errorListener, {\n        once: true\n      });\n    }\n  });\n}\nfunction addErrorHandlerIfEventEmitter(emitter, handler, flags) {\n  if (typeof emitter.on === 'function') {\n    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);\n  }\n}\nfunction eventTargetAgnosticAddListener(emitter, name, listener, flags) {\n  if (typeof emitter.on === 'function') {\n    if (flags.once) {\n      emitter.once(name, listener);\n    } else {\n      emitter.on(name, listener);\n    }\n  } else if (typeof emitter.addEventListener === 'function') {\n    // EventTarget does not have `error` event semantics like Node\n    // EventEmitters, we do not listen for `error` events here.\n    emitter.addEventListener(name, function wrapListener(arg) {\n      // IE does not have builtin `{ once: true }` support so we\n      // have to do it manually.\n      if (flags.once) {\n        emitter.removeEventListener(name, wrapListener);\n      }\n      listener(arg);\n    });\n  } else {\n    throw new TypeError('The \"emitter\" argument must be of type EventEmitter. Received type ' + _typeof(emitter));\n  }\n}\n\n//# sourceURL=webpack://albrecht-photo/./node_modules/events/events.js?");

/***/ }),

/***/ "./node_modules/html-entities/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/html-entities/lib/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __assign = this && this.__assign || function () {\n  __assign = Object.assign || function (t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n      s = arguments[i];\n      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\n    }\n    return t;\n  };\n  return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nvar named_references_1 = __webpack_require__(/*! ./named-references */ \"./node_modules/html-entities/lib/named-references.js\");\nvar numeric_unicode_map_1 = __webpack_require__(/*! ./numeric-unicode-map */ \"./node_modules/html-entities/lib/numeric-unicode-map.js\");\nvar surrogate_pairs_1 = __webpack_require__(/*! ./surrogate-pairs */ \"./node_modules/html-entities/lib/surrogate-pairs.js\");\nvar allNamedReferences = __assign(__assign({}, named_references_1.namedReferences), {\n  all: named_references_1.namedReferences.html5\n});\nvar encodeRegExps = {\n  specialChars: /[<>'\"&]/g,\n  nonAscii: /[<>'\"&\\u0080-\\uD7FF\\uE000-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF]/g,\n  nonAsciiPrintable: /[<>'\"&\\x01-\\x08\\x11-\\x15\\x17-\\x1F\\x7f-\\uD7FF\\uE000-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF]/g,\n  nonAsciiPrintableOnly: /[\\x01-\\x08\\x11-\\x15\\x17-\\x1F\\x7f-\\uD7FF\\uE000-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF]/g,\n  extensive: /[\\x01-\\x0c\\x0e-\\x1f\\x21-\\x2c\\x2e-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\x7d\\x7f-\\uD7FF\\uE000-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF]/g\n};\nvar defaultEncodeOptions = {\n  mode: 'specialChars',\n  level: 'all',\n  numeric: 'decimal'\n};\n/** Encodes all the necessary (specified by `level`) characters in the text */\nfunction encode(text, _a) {\n  var _b = _a === void 0 ? defaultEncodeOptions : _a,\n    _c = _b.mode,\n    mode = _c === void 0 ? 'specialChars' : _c,\n    _d = _b.numeric,\n    numeric = _d === void 0 ? 'decimal' : _d,\n    _e = _b.level,\n    level = _e === void 0 ? 'all' : _e;\n  if (!text) {\n    return '';\n  }\n  var encodeRegExp = encodeRegExps[mode];\n  var references = allNamedReferences[level].characters;\n  var isHex = numeric === 'hexadecimal';\n  encodeRegExp.lastIndex = 0;\n  var _b = encodeRegExp.exec(text);\n  var _c;\n  if (_b) {\n    _c = '';\n    var _d = 0;\n    do {\n      if (_d !== _b.index) {\n        _c += text.substring(_d, _b.index);\n      }\n      var _e = _b[0];\n      var result_1 = references[_e];\n      if (!result_1) {\n        var code_1 = _e.length > 1 ? surrogate_pairs_1.getCodePoint(_e, 0) : _e.charCodeAt(0);\n        result_1 = (isHex ? '&#x' + code_1.toString(16) : '&#' + code_1) + ';';\n      }\n      _c += result_1;\n      _d = _b.index + _e.length;\n    } while (_b = encodeRegExp.exec(text));\n    if (_d !== text.length) {\n      _c += text.substring(_d);\n    }\n  } else {\n    _c = text;\n  }\n  return _c;\n}\nexports.encode = encode;\nvar defaultDecodeOptions = {\n  scope: 'body',\n  level: 'all'\n};\nvar strict = /&(?:#\\d+|#[xX][\\da-fA-F]+|[0-9a-zA-Z]+);/g;\nvar attribute = /&(?:#\\d+|#[xX][\\da-fA-F]+|[0-9a-zA-Z]+)[;=]?/g;\nvar baseDecodeRegExps = {\n  xml: {\n    strict: strict,\n    attribute: attribute,\n    body: named_references_1.bodyRegExps.xml\n  },\n  html4: {\n    strict: strict,\n    attribute: attribute,\n    body: named_references_1.bodyRegExps.html4\n  },\n  html5: {\n    strict: strict,\n    attribute: attribute,\n    body: named_references_1.bodyRegExps.html5\n  }\n};\nvar decodeRegExps = __assign(__assign({}, baseDecodeRegExps), {\n  all: baseDecodeRegExps.html5\n});\nvar fromCharCode = String.fromCharCode;\nvar outOfBoundsChar = fromCharCode(65533);\nvar defaultDecodeEntityOptions = {\n  level: 'all'\n};\n/** Decodes a single entity */\nfunction decodeEntity(entity, _a) {\n  var _b = (_a === void 0 ? defaultDecodeEntityOptions : _a).level,\n    level = _b === void 0 ? 'all' : _b;\n  if (!entity) {\n    return '';\n  }\n  var _b = entity;\n  var decodeEntityLastChar_1 = entity[entity.length - 1];\n  if (false) {} else if (false) {} else {\n    var decodeResultByReference_1 = allNamedReferences[level].entities[entity];\n    if (decodeResultByReference_1) {\n      _b = decodeResultByReference_1;\n    } else if (entity[0] === '&' && entity[1] === '#') {\n      var decodeSecondChar_1 = entity[2];\n      var decodeCode_1 = decodeSecondChar_1 == 'x' || decodeSecondChar_1 == 'X' ? parseInt(entity.substr(3), 16) : parseInt(entity.substr(2));\n      _b = decodeCode_1 >= 0x10ffff ? outOfBoundsChar : decodeCode_1 > 65535 ? surrogate_pairs_1.fromCodePoint(decodeCode_1) : fromCharCode(numeric_unicode_map_1.numericUnicodeMap[decodeCode_1] || decodeCode_1);\n    }\n  }\n  return _b;\n}\nexports.decodeEntity = decodeEntity;\n/** Decodes all entities in the text */\nfunction decode(text, _a) {\n  var decodeSecondChar_1 = _a === void 0 ? defaultDecodeOptions : _a,\n    decodeCode_1 = decodeSecondChar_1.level,\n    level = decodeCode_1 === void 0 ? 'all' : decodeCode_1,\n    _b = decodeSecondChar_1.scope,\n    scope = _b === void 0 ? level === 'xml' ? 'strict' : 'body' : _b;\n  if (!text) {\n    return '';\n  }\n  var decodeRegExp = decodeRegExps[level][scope];\n  var references = allNamedReferences[level].entities;\n  var isAttribute = scope === 'attribute';\n  var isStrict = scope === 'strict';\n  decodeRegExp.lastIndex = 0;\n  var replaceMatch_1 = decodeRegExp.exec(text);\n  var replaceResult_1;\n  if (replaceMatch_1) {\n    replaceResult_1 = '';\n    var replaceLastIndex_1 = 0;\n    do {\n      if (replaceLastIndex_1 !== replaceMatch_1.index) {\n        replaceResult_1 += text.substring(replaceLastIndex_1, replaceMatch_1.index);\n      }\n      var replaceInput_1 = replaceMatch_1[0];\n      var decodeResult_1 = replaceInput_1;\n      var decodeEntityLastChar_2 = replaceInput_1[replaceInput_1.length - 1];\n      if (isAttribute && decodeEntityLastChar_2 === '=') {\n        decodeResult_1 = replaceInput_1;\n      } else if (isStrict && decodeEntityLastChar_2 !== ';') {\n        decodeResult_1 = replaceInput_1;\n      } else {\n        var decodeResultByReference_2 = references[replaceInput_1];\n        if (decodeResultByReference_2) {\n          decodeResult_1 = decodeResultByReference_2;\n        } else if (replaceInput_1[0] === '&' && replaceInput_1[1] === '#') {\n          var decodeSecondChar_2 = replaceInput_1[2];\n          var decodeCode_2 = decodeSecondChar_2 == 'x' || decodeSecondChar_2 == 'X' ? parseInt(replaceInput_1.substr(3), 16) : parseInt(replaceInput_1.substr(2));\n          decodeResult_1 = decodeCode_2 >= 0x10ffff ? outOfBoundsChar : decodeCode_2 > 65535 ? surrogate_pairs_1.fromCodePoint(decodeCode_2) : fromCharCode(numeric_unicode_map_1.numericUnicodeMap[decodeCode_2] || decodeCode_2);\n        }\n      }\n      replaceResult_1 += decodeResult_1;\n      replaceLastIndex_1 = replaceMatch_1.index + replaceInput_1.length;\n    } while (replaceMatch_1 = decodeRegExp.exec(text));\n    if (replaceLastIndex_1 !== text.length) {\n      replaceResult_1 += text.substring(replaceLastIndex_1);\n    }\n  } else {\n    replaceResult_1 = text;\n  }\n  return replaceResult_1;\n}\nexports.decode = decode;\n\n//# sourceURL=webpack://albrecht-photo/./node_modules/html-entities/lib/index.js?");

/***/ }),

/***/ "./node_modules/html-entities/lib/named-references.js":
/*!************************************************************!*\
  !*** ./node_modules/html-entities/lib/named-references.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.bodyRegExps = {\n  xml: /&(?:#\\d+|#[xX][\\da-fA-F]+|[0-9a-zA-Z]+);?/g,\n  html4: /&notin;|&(?:nbsp|iexcl|cent|pound|curren|yen|brvbar|sect|uml|copy|ordf|laquo|not|shy|reg|macr|deg|plusmn|sup2|sup3|acute|micro|para|middot|cedil|sup1|ordm|raquo|frac14|frac12|frac34|iquest|Agrave|Aacute|Acirc|Atilde|Auml|Aring|AElig|Ccedil|Egrave|Eacute|Ecirc|Euml|Igrave|Iacute|Icirc|Iuml|ETH|Ntilde|Ograve|Oacute|Ocirc|Otilde|Ouml|times|Oslash|Ugrave|Uacute|Ucirc|Uuml|Yacute|THORN|szlig|agrave|aacute|acirc|atilde|auml|aring|aelig|ccedil|egrave|eacute|ecirc|euml|igrave|iacute|icirc|iuml|eth|ntilde|ograve|oacute|ocirc|otilde|ouml|divide|oslash|ugrave|uacute|ucirc|uuml|yacute|thorn|yuml|quot|amp|lt|gt|#\\d+|#[xX][\\da-fA-F]+|[0-9a-zA-Z]+);?/g,\n  html5: /&centerdot;|&copysr;|&divideontimes;|&gtcc;|&gtcir;|&gtdot;|&gtlPar;|&gtquest;|&gtrapprox;|&gtrarr;|&gtrdot;|&gtreqless;|&gtreqqless;|&gtrless;|&gtrsim;|&ltcc;|&ltcir;|&ltdot;|&lthree;|&ltimes;|&ltlarr;|&ltquest;|&ltrPar;|&ltri;|&ltrie;|&ltrif;|&notin;|&notinE;|&notindot;|&notinva;|&notinvb;|&notinvc;|&notni;|&notniva;|&notnivb;|&notnivc;|&parallel;|&timesb;|&timesbar;|&timesd;|&(?:AElig|AMP|Aacute|Acirc|Agrave|Aring|Atilde|Auml|COPY|Ccedil|ETH|Eacute|Ecirc|Egrave|Euml|GT|Iacute|Icirc|Igrave|Iuml|LT|Ntilde|Oacute|Ocirc|Ograve|Oslash|Otilde|Ouml|QUOT|REG|THORN|Uacute|Ucirc|Ugrave|Uuml|Yacute|aacute|acirc|acute|aelig|agrave|amp|aring|atilde|auml|brvbar|ccedil|cedil|cent|copy|curren|deg|divide|eacute|ecirc|egrave|eth|euml|frac12|frac14|frac34|gt|iacute|icirc|iexcl|igrave|iquest|iuml|laquo|lt|macr|micro|middot|nbsp|not|ntilde|oacute|ocirc|ograve|ordf|ordm|oslash|otilde|ouml|para|plusmn|pound|quot|raquo|reg|sect|shy|sup1|sup2|sup3|szlig|thorn|times|uacute|ucirc|ugrave|uml|uuml|yacute|yen|yuml|#\\d+|#[xX][\\da-fA-F]+|[0-9a-zA-Z]+);?/g\n};\nexports.namedReferences = {\n  xml: {\n    entities: {\n      \"&lt;\": \"<\",\n      \"&gt;\": \">\",\n      \"&quot;\": '\"',\n      \"&apos;\": \"'\",\n      \"&amp;\": \"&\"\n    },\n    characters: {\n      \"<\": \"&lt;\",\n      \">\": \"&gt;\",\n      '\"': \"&quot;\",\n      \"'\": \"&apos;\",\n      \"&\": \"&amp;\"\n    }\n  },\n  html4: {\n    entities: {\n      \"&apos;\": \"'\",\n      \"&nbsp\": \" \",\n      \"&nbsp;\": \" \",\n      \"&iexcl\": \"¡\",\n      \"&iexcl;\": \"¡\",\n      \"&cent\": \"¢\",\n      \"&cent;\": \"¢\",\n      \"&pound\": \"£\",\n      \"&pound;\": \"£\",\n      \"&curren\": \"¤\",\n      \"&curren;\": \"¤\",\n      \"&yen\": \"¥\",\n      \"&yen;\": \"¥\",\n      \"&brvbar\": \"¦\",\n      \"&brvbar;\": \"¦\",\n      \"&sect\": \"§\",\n      \"&sect;\": \"§\",\n      \"&uml\": \"¨\",\n      \"&uml;\": \"¨\",\n      \"&copy\": \"©\",\n      \"&copy;\": \"©\",\n      \"&ordf\": \"ª\",\n      \"&ordf;\": \"ª\",\n      \"&laquo\": \"«\",\n      \"&laquo;\": \"«\",\n      \"&not\": \"¬\",\n      \"&not;\": \"¬\",\n      \"&shy\": \"­\",\n      \"&shy;\": \"­\",\n      \"&reg\": \"®\",\n      \"&reg;\": \"®\",\n      \"&macr\": \"¯\",\n      \"&macr;\": \"¯\",\n      \"&deg\": \"°\",\n      \"&deg;\": \"°\",\n      \"&plusmn\": \"±\",\n      \"&plusmn;\": \"±\",\n      \"&sup2\": \"²\",\n      \"&sup2;\": \"²\",\n      \"&sup3\": \"³\",\n      \"&sup3;\": \"³\",\n      \"&acute\": \"´\",\n      \"&acute;\": \"´\",\n      \"&micro\": \"µ\",\n      \"&micro;\": \"µ\",\n      \"&para\": \"¶\",\n      \"&para;\": \"¶\",\n      \"&middot\": \"·\",\n      \"&middot;\": \"·\",\n      \"&cedil\": \"¸\",\n      \"&cedil;\": \"¸\",\n      \"&sup1\": \"¹\",\n      \"&sup1;\": \"¹\",\n      \"&ordm\": \"º\",\n      \"&ordm;\": \"º\",\n      \"&raquo\": \"»\",\n      \"&raquo;\": \"»\",\n      \"&frac14\": \"¼\",\n      \"&frac14;\": \"¼\",\n      \"&frac12\": \"½\",\n      \"&frac12;\": \"½\",\n      \"&frac34\": \"¾\",\n      \"&frac34;\": \"¾\",\n      \"&iquest\": \"¿\",\n      \"&iquest;\": \"¿\",\n      \"&Agrave\": \"À\",\n      \"&Agrave;\": \"À\",\n      \"&Aacute\": \"Á\",\n      \"&Aacute;\": \"Á\",\n      \"&Acirc\": \"Â\",\n      \"&Acirc;\": \"Â\",\n      \"&Atilde\": \"Ã\",\n      \"&Atilde;\": \"Ã\",\n      \"&Auml\": \"Ä\",\n      \"&Auml;\": \"Ä\",\n      \"&Aring\": \"Å\",\n      \"&Aring;\": \"Å\",\n      \"&AElig\": \"Æ\",\n      \"&AElig;\": \"Æ\",\n      \"&Ccedil\": \"Ç\",\n      \"&Ccedil;\": \"Ç\",\n      \"&Egrave\": \"È\",\n      \"&Egrave;\": \"È\",\n      \"&Eacute\": \"É\",\n      \"&Eacute;\": \"É\",\n      \"&Ecirc\": \"Ê\",\n      \"&Ecirc;\": \"Ê\",\n      \"&Euml\": \"Ë\",\n      \"&Euml;\": \"Ë\",\n      \"&Igrave\": \"Ì\",\n      \"&Igrave;\": \"Ì\",\n      \"&Iacute\": \"Í\",\n      \"&Iacute;\": \"Í\",\n      \"&Icirc\": \"Î\",\n      \"&Icirc;\": \"Î\",\n      \"&Iuml\": \"Ï\",\n      \"&Iuml;\": \"Ï\",\n      \"&ETH\": \"Ð\",\n      \"&ETH;\": \"Ð\",\n      \"&Ntilde\": \"Ñ\",\n      \"&Ntilde;\": \"Ñ\",\n      \"&Ograve\": \"Ò\",\n      \"&Ograve;\": \"Ò\",\n      \"&Oacute\": \"Ó\",\n      \"&Oacute;\": \"Ó\",\n      \"&Ocirc\": \"Ô\",\n      \"&Ocirc;\": \"Ô\",\n      \"&Otilde\": \"Õ\",\n      \"&Otilde;\": \"Õ\",\n      \"&Ouml\": \"Ö\",\n      \"&Ouml;\": \"Ö\",\n      \"&times\": \"×\",\n      \"&times;\": \"×\",\n      \"&Oslash\": \"Ø\",\n      \"&Oslash;\": \"Ø\",\n      \"&Ugrave\": \"Ù\",\n      \"&Ugrave;\": \"Ù\",\n      \"&Uacute\": \"Ú\",\n      \"&Uacute;\": \"Ú\",\n      \"&Ucirc\": \"Û\",\n      \"&Ucirc;\": \"Û\",\n      \"&Uuml\": \"Ü\",\n      \"&Uuml;\": \"Ü\",\n      \"&Yacute\": \"Ý\",\n      \"&Yacute;\": \"Ý\",\n      \"&THORN\": \"Þ\",\n      \"&THORN;\": \"Þ\",\n      \"&szlig\": \"ß\",\n      \"&szlig;\": \"ß\",\n      \"&agrave\": \"à\",\n      \"&agrave;\": \"à\",\n      \"&aacute\": \"á\",\n      \"&aacute;\": \"á\",\n      \"&acirc\": \"â\",\n      \"&acirc;\": \"â\",\n      \"&atilde\": \"ã\",\n      \"&atilde;\": \"ã\",\n      \"&auml\": \"ä\",\n      \"&auml;\": \"ä\",\n      \"&aring\": \"å\",\n      \"&aring;\": \"å\",\n      \"&aelig\": \"æ\",\n      \"&aelig;\": \"æ\",\n      \"&ccedil\": \"ç\",\n      \"&ccedil;\": \"ç\",\n      \"&egrave\": \"è\",\n      \"&egrave;\": \"è\",\n      \"&eacute\": \"é\",\n      \"&eacute;\": \"é\",\n      \"&ecirc\": \"ê\",\n      \"&ecirc;\": \"ê\",\n      \"&euml\": \"ë\",\n      \"&euml;\": \"ë\",\n      \"&igrave\": \"ì\",\n      \"&igrave;\": \"ì\",\n      \"&iacute\": \"í\",\n      \"&iacute;\": \"í\",\n      \"&icirc\": \"î\",\n      \"&icirc;\": \"î\",\n      \"&iuml\": \"ï\",\n      \"&iuml;\": \"ï\",\n      \"&eth\": \"ð\",\n      \"&eth;\": \"ð\",\n      \"&ntilde\": \"ñ\",\n      \"&ntilde;\": \"ñ\",\n      \"&ograve\": \"ò\",\n      \"&ograve;\": \"ò\",\n      \"&oacute\": \"ó\",\n      \"&oacute;\": \"ó\",\n      \"&ocirc\": \"ô\",\n      \"&ocirc;\": \"ô\",\n      \"&otilde\": \"õ\",\n      \"&otilde;\": \"õ\",\n      \"&ouml\": \"ö\",\n      \"&ouml;\": \"ö\",\n      \"&divide\": \"÷\",\n      \"&divide;\": \"÷\",\n      \"&oslash\": \"ø\",\n      \"&oslash;\": \"ø\",\n      \"&ugrave\": \"ù\",\n      \"&ugrave;\": \"ù\",\n      \"&uacute\": \"ú\",\n      \"&uacute;\": \"ú\",\n      \"&ucirc\": \"û\",\n      \"&ucirc;\": \"û\",\n      \"&uuml\": \"ü\",\n      \"&uuml;\": \"ü\",\n      \"&yacute\": \"ý\",\n      \"&yacute;\": \"ý\",\n      \"&thorn\": \"þ\",\n      \"&thorn;\": \"þ\",\n      \"&yuml\": \"ÿ\",\n      \"&yuml;\": \"ÿ\",\n      \"&quot\": '\"',\n      \"&quot;\": '\"',\n      \"&amp\": \"&\",\n      \"&amp;\": \"&\",\n      \"&lt\": \"<\",\n      \"&lt;\": \"<\",\n      \"&gt\": \">\",\n      \"&gt;\": \">\",\n      \"&OElig;\": \"Œ\",\n      \"&oelig;\": \"œ\",\n      \"&Scaron;\": \"Š\",\n      \"&scaron;\": \"š\",\n      \"&Yuml;\": \"Ÿ\",\n      \"&circ;\": \"ˆ\",\n      \"&tilde;\": \"˜\",\n      \"&ensp;\": \" \",\n      \"&emsp;\": \" \",\n      \"&thinsp;\": \" \",\n      \"&zwnj;\": \"‌\",\n      \"&zwj;\": \"‍\",\n      \"&lrm;\": \"‎\",\n      \"&rlm;\": \"‏\",\n      \"&ndash;\": \"–\",\n      \"&mdash;\": \"—\",\n      \"&lsquo;\": \"‘\",\n      \"&rsquo;\": \"’\",\n      \"&sbquo;\": \"‚\",\n      \"&ldquo;\": \"“\",\n      \"&rdquo;\": \"”\",\n      \"&bdquo;\": \"„\",\n      \"&dagger;\": \"†\",\n      \"&Dagger;\": \"‡\",\n      \"&permil;\": \"‰\",\n      \"&lsaquo;\": \"‹\",\n      \"&rsaquo;\": \"›\",\n      \"&euro;\": \"€\",\n      \"&fnof;\": \"ƒ\",\n      \"&Alpha;\": \"Α\",\n      \"&Beta;\": \"Β\",\n      \"&Gamma;\": \"Γ\",\n      \"&Delta;\": \"Δ\",\n      \"&Epsilon;\": \"Ε\",\n      \"&Zeta;\": \"Ζ\",\n      \"&Eta;\": \"Η\",\n      \"&Theta;\": \"Θ\",\n      \"&Iota;\": \"Ι\",\n      \"&Kappa;\": \"Κ\",\n      \"&Lambda;\": \"Λ\",\n      \"&Mu;\": \"Μ\",\n      \"&Nu;\": \"Ν\",\n      \"&Xi;\": \"Ξ\",\n      \"&Omicron;\": \"Ο\",\n      \"&Pi;\": \"Π\",\n      \"&Rho;\": \"Ρ\",\n      \"&Sigma;\": \"Σ\",\n      \"&Tau;\": \"Τ\",\n      \"&Upsilon;\": \"Υ\",\n      \"&Phi;\": \"Φ\",\n      \"&Chi;\": \"Χ\",\n      \"&Psi;\": \"Ψ\",\n      \"&Omega;\": \"Ω\",\n      \"&alpha;\": \"α\",\n      \"&beta;\": \"β\",\n      \"&gamma;\": \"γ\",\n      \"&delta;\": \"δ\",\n      \"&epsilon;\": \"ε\",\n      \"&zeta;\": \"ζ\",\n      \"&eta;\": \"η\",\n      \"&theta;\": \"θ\",\n      \"&iota;\": \"ι\",\n      \"&kappa;\": \"κ\",\n      \"&lambda;\": \"λ\",\n      \"&mu;\": \"μ\",\n      \"&nu;\": \"ν\",\n      \"&xi;\": \"ξ\",\n      \"&omicron;\": \"ο\",\n      \"&pi;\": \"π\",\n      \"&rho;\": \"ρ\",\n      \"&sigmaf;\": \"ς\",\n      \"&sigma;\": \"σ\",\n      \"&tau;\": \"τ\",\n      \"&upsilon;\": \"υ\",\n      \"&phi;\": \"φ\",\n      \"&chi;\": \"χ\",\n      \"&psi;\": \"ψ\",\n      \"&omega;\": \"ω\",\n      \"&thetasym;\": \"ϑ\",\n      \"&upsih;\": \"ϒ\",\n      \"&piv;\": \"ϖ\",\n      \"&bull;\": \"•\",\n      \"&hellip;\": \"…\",\n      \"&prime;\": \"′\",\n      \"&Prime;\": \"″\",\n      \"&oline;\": \"‾\",\n      \"&frasl;\": \"⁄\",\n      \"&weierp;\": \"℘\",\n      \"&image;\": \"ℑ\",\n      \"&real;\": \"ℜ\",\n      \"&trade;\": \"™\",\n      \"&alefsym;\": \"ℵ\",\n      \"&larr;\": \"←\",\n      \"&uarr;\": \"↑\",\n      \"&rarr;\": \"→\",\n      \"&darr;\": \"↓\",\n      \"&harr;\": \"↔\",\n      \"&crarr;\": \"↵\",\n      \"&lArr;\": \"⇐\",\n      \"&uArr;\": \"⇑\",\n      \"&rArr;\": \"⇒\",\n      \"&dArr;\": \"⇓\",\n      \"&hArr;\": \"⇔\",\n      \"&forall;\": \"∀\",\n      \"&part;\": \"∂\",\n      \"&exist;\": \"∃\",\n      \"&empty;\": \"∅\",\n      \"&nabla;\": \"∇\",\n      \"&isin;\": \"∈\",\n      \"&notin;\": \"∉\",\n      \"&ni;\": \"∋\",\n      \"&prod;\": \"∏\",\n      \"&sum;\": \"∑\",\n      \"&minus;\": \"−\",\n      \"&lowast;\": \"∗\",\n      \"&radic;\": \"√\",\n      \"&prop;\": \"∝\",\n      \"&infin;\": \"∞\",\n      \"&ang;\": \"∠\",\n      \"&and;\": \"∧\",\n      \"&or;\": \"∨\",\n      \"&cap;\": \"∩\",\n      \"&cup;\": \"∪\",\n      \"&int;\": \"∫\",\n      \"&there4;\": \"∴\",\n      \"&sim;\": \"∼\",\n      \"&cong;\": \"≅\",\n      \"&asymp;\": \"≈\",\n      \"&ne;\": \"≠\",\n      \"&equiv;\": \"≡\",\n      \"&le;\": \"≤\",\n      \"&ge;\": \"≥\",\n      \"&sub;\": \"⊂\",\n      \"&sup;\": \"⊃\",\n      \"&nsub;\": \"⊄\",\n      \"&sube;\": \"⊆\",\n      \"&supe;\": \"⊇\",\n      \"&oplus;\": \"⊕\",\n      \"&otimes;\": \"⊗\",\n      \"&perp;\": \"⊥\",\n      \"&sdot;\": \"⋅\",\n      \"&lceil;\": \"⌈\",\n      \"&rceil;\": \"⌉\",\n      \"&lfloor;\": \"⌊\",\n      \"&rfloor;\": \"⌋\",\n      \"&lang;\": \"〈\",\n      \"&rang;\": \"〉\",\n      \"&loz;\": \"◊\",\n      \"&spades;\": \"♠\",\n      \"&clubs;\": \"♣\",\n      \"&hearts;\": \"♥\",\n      \"&diams;\": \"♦\"\n    },\n    characters: {\n      \"'\": \"&apos;\",\n      \" \": \"&nbsp;\",\n      \"¡\": \"&iexcl;\",\n      \"¢\": \"&cent;\",\n      \"£\": \"&pound;\",\n      \"¤\": \"&curren;\",\n      \"¥\": \"&yen;\",\n      \"¦\": \"&brvbar;\",\n      \"§\": \"&sect;\",\n      \"¨\": \"&uml;\",\n      \"©\": \"&copy;\",\n      \"ª\": \"&ordf;\",\n      \"«\": \"&laquo;\",\n      \"¬\": \"&not;\",\n      \"­\": \"&shy;\",\n      \"®\": \"&reg;\",\n      \"¯\": \"&macr;\",\n      \"°\": \"&deg;\",\n      \"±\": \"&plusmn;\",\n      \"²\": \"&sup2;\",\n      \"³\": \"&sup3;\",\n      \"´\": \"&acute;\",\n      \"µ\": \"&micro;\",\n      \"¶\": \"&para;\",\n      \"·\": \"&middot;\",\n      \"¸\": \"&cedil;\",\n      \"¹\": \"&sup1;\",\n      \"º\": \"&ordm;\",\n      \"»\": \"&raquo;\",\n      \"¼\": \"&frac14;\",\n      \"½\": \"&frac12;\",\n      \"¾\": \"&frac34;\",\n      \"¿\": \"&iquest;\",\n      \"À\": \"&Agrave;\",\n      \"Á\": \"&Aacute;\",\n      \"Â\": \"&Acirc;\",\n      \"Ã\": \"&Atilde;\",\n      \"Ä\": \"&Auml;\",\n      \"Å\": \"&Aring;\",\n      \"Æ\": \"&AElig;\",\n      \"Ç\": \"&Ccedil;\",\n      \"È\": \"&Egrave;\",\n      \"É\": \"&Eacute;\",\n      \"Ê\": \"&Ecirc;\",\n      \"Ë\": \"&Euml;\",\n      \"Ì\": \"&Igrave;\",\n      \"Í\": \"&Iacute;\",\n      \"Î\": \"&Icirc;\",\n      \"Ï\": \"&Iuml;\",\n      \"Ð\": \"&ETH;\",\n      \"Ñ\": \"&Ntilde;\",\n      \"Ò\": \"&Ograve;\",\n      \"Ó\": \"&Oacute;\",\n      \"Ô\": \"&Ocirc;\",\n      \"Õ\": \"&Otilde;\",\n      \"Ö\": \"&Ouml;\",\n      \"×\": \"&times;\",\n      \"Ø\": \"&Oslash;\",\n      \"Ù\": \"&Ugrave;\",\n      \"Ú\": \"&Uacute;\",\n      \"Û\": \"&Ucirc;\",\n      \"Ü\": \"&Uuml;\",\n      \"Ý\": \"&Yacute;\",\n      \"Þ\": \"&THORN;\",\n      \"ß\": \"&szlig;\",\n      \"à\": \"&agrave;\",\n      \"á\": \"&aacute;\",\n      \"â\": \"&acirc;\",\n      \"ã\": \"&atilde;\",\n      \"ä\": \"&auml;\",\n      \"å\": \"&aring;\",\n      \"æ\": \"&aelig;\",\n      \"ç\": \"&ccedil;\",\n      \"è\": \"&egrave;\",\n      \"é\": \"&eacute;\",\n      \"ê\": \"&ecirc;\",\n      \"ë\": \"&euml;\",\n      \"ì\": \"&igrave;\",\n      \"í\": \"&iacute;\",\n      \"î\": \"&icirc;\",\n      \"ï\": \"&iuml;\",\n      \"ð\": \"&eth;\",\n      \"ñ\": \"&ntilde;\",\n      \"ò\": \"&ograve;\",\n      \"ó\": \"&oacute;\",\n      \"ô\": \"&ocirc;\",\n      \"õ\": \"&otilde;\",\n      \"ö\": \"&ouml;\",\n      \"÷\": \"&divide;\",\n      \"ø\": \"&oslash;\",\n      \"ù\": \"&ugrave;\",\n      \"ú\": \"&uacute;\",\n      \"û\": \"&ucirc;\",\n      \"ü\": \"&uuml;\",\n      \"ý\": \"&yacute;\",\n      \"þ\": \"&thorn;\",\n      \"ÿ\": \"&yuml;\",\n      '\"': \"&quot;\",\n      \"&\": \"&amp;\",\n      \"<\": \"&lt;\",\n      \">\": \"&gt;\",\n      \"Œ\": \"&OElig;\",\n      \"œ\": \"&oelig;\",\n      \"Š\": \"&Scaron;\",\n      \"š\": \"&scaron;\",\n      \"Ÿ\": \"&Yuml;\",\n      \"ˆ\": \"&circ;\",\n      \"˜\": \"&tilde;\",\n      \" \": \"&ensp;\",\n      \" \": \"&emsp;\",\n      \" \": \"&thinsp;\",\n      \"‌\": \"&zwnj;\",\n      \"‍\": \"&zwj;\",\n      \"‎\": \"&lrm;\",\n      \"‏\": \"&rlm;\",\n      \"–\": \"&ndash;\",\n      \"—\": \"&mdash;\",\n      \"‘\": \"&lsquo;\",\n      \"’\": \"&rsquo;\",\n      \"‚\": \"&sbquo;\",\n      \"“\": \"&ldquo;\",\n      \"”\": \"&rdquo;\",\n      \"„\": \"&bdquo;\",\n      \"†\": \"&dagger;\",\n      \"‡\": \"&Dagger;\",\n      \"‰\": \"&permil;\",\n      \"‹\": \"&lsaquo;\",\n      \"›\": \"&rsaquo;\",\n      \"€\": \"&euro;\",\n      \"ƒ\": \"&fnof;\",\n      \"Α\": \"&Alpha;\",\n      \"Β\": \"&Beta;\",\n      \"Γ\": \"&Gamma;\",\n      \"Δ\": \"&Delta;\",\n      \"Ε\": \"&Epsilon;\",\n      \"Ζ\": \"&Zeta;\",\n      \"Η\": \"&Eta;\",\n      \"Θ\": \"&Theta;\",\n      \"Ι\": \"&Iota;\",\n      \"Κ\": \"&Kappa;\",\n      \"Λ\": \"&Lambda;\",\n      \"Μ\": \"&Mu;\",\n      \"Ν\": \"&Nu;\",\n      \"Ξ\": \"&Xi;\",\n      \"Ο\": \"&Omicron;\",\n      \"Π\": \"&Pi;\",\n      \"Ρ\": \"&Rho;\",\n      \"Σ\": \"&Sigma;\",\n      \"Τ\": \"&Tau;\",\n      \"Υ\": \"&Upsilon;\",\n      \"Φ\": \"&Phi;\",\n      \"Χ\": \"&Chi;\",\n      \"Ψ\": \"&Psi;\",\n      \"Ω\": \"&Omega;\",\n      \"α\": \"&alpha;\",\n      \"β\": \"&beta;\",\n      \"γ\": \"&gamma;\",\n      \"δ\": \"&delta;\",\n      \"ε\": \"&epsilon;\",\n      \"ζ\": \"&zeta;\",\n      \"η\": \"&eta;\",\n      \"θ\": \"&theta;\",\n      \"ι\": \"&iota;\",\n      \"κ\": \"&kappa;\",\n      \"λ\": \"&lambda;\",\n      \"μ\": \"&mu;\",\n      \"ν\": \"&nu;\",\n      \"ξ\": \"&xi;\",\n      \"ο\": \"&omicron;\",\n      \"π\": \"&pi;\",\n      \"ρ\": \"&rho;\",\n      \"ς\": \"&sigmaf;\",\n      \"σ\": \"&sigma;\",\n      \"τ\": \"&tau;\",\n      \"υ\": \"&upsilon;\",\n      \"φ\": \"&phi;\",\n      \"χ\": \"&chi;\",\n      \"ψ\": \"&psi;\",\n      \"ω\": \"&omega;\",\n      \"ϑ\": \"&thetasym;\",\n      \"ϒ\": \"&upsih;\",\n      \"ϖ\": \"&piv;\",\n      \"•\": \"&bull;\",\n      \"…\": \"&hellip;\",\n      \"′\": \"&prime;\",\n      \"″\": \"&Prime;\",\n      \"‾\": \"&oline;\",\n      \"⁄\": \"&frasl;\",\n      \"℘\": \"&weierp;\",\n      \"ℑ\": \"&image;\",\n      \"ℜ\": \"&real;\",\n      \"™\": \"&trade;\",\n      \"ℵ\": \"&alefsym;\",\n      \"←\": \"&larr;\",\n      \"↑\": \"&uarr;\",\n      \"→\": \"&rarr;\",\n      \"↓\": \"&darr;\",\n      \"↔\": \"&harr;\",\n      \"↵\": \"&crarr;\",\n      \"⇐\": \"&lArr;\",\n      \"⇑\": \"&uArr;\",\n      \"⇒\": \"&rArr;\",\n      \"⇓\": \"&dArr;\",\n      \"⇔\": \"&hArr;\",\n      \"∀\": \"&forall;\",\n      \"∂\": \"&part;\",\n      \"∃\": \"&exist;\",\n      \"∅\": \"&empty;\",\n      \"∇\": \"&nabla;\",\n      \"∈\": \"&isin;\",\n      \"∉\": \"&notin;\",\n      \"∋\": \"&ni;\",\n      \"∏\": \"&prod;\",\n      \"∑\": \"&sum;\",\n      \"−\": \"&minus;\",\n      \"∗\": \"&lowast;\",\n      \"√\": \"&radic;\",\n      \"∝\": \"&prop;\",\n      \"∞\": \"&infin;\",\n      \"∠\": \"&ang;\",\n      \"∧\": \"&and;\",\n      \"∨\": \"&or;\",\n      \"∩\": \"&cap;\",\n      \"∪\": \"&cup;\",\n      \"∫\": \"&int;\",\n      \"∴\": \"&there4;\",\n      \"∼\": \"&sim;\",\n      \"≅\": \"&cong;\",\n      \"≈\": \"&asymp;\",\n      \"≠\": \"&ne;\",\n      \"≡\": \"&equiv;\",\n      \"≤\": \"&le;\",\n      \"≥\": \"&ge;\",\n      \"⊂\": \"&sub;\",\n      \"⊃\": \"&sup;\",\n      \"⊄\": \"&nsub;\",\n      \"⊆\": \"&sube;\",\n      \"⊇\": \"&supe;\",\n      \"⊕\": \"&oplus;\",\n      \"⊗\": \"&otimes;\",\n      \"⊥\": \"&perp;\",\n      \"⋅\": \"&sdot;\",\n      \"⌈\": \"&lceil;\",\n      \"⌉\": \"&rceil;\",\n      \"⌊\": \"&lfloor;\",\n      \"⌋\": \"&rfloor;\",\n      \"〈\": \"&lang;\",\n      \"〉\": \"&rang;\",\n      \"◊\": \"&loz;\",\n      \"♠\": \"&spades;\",\n      \"♣\": \"&clubs;\",\n      \"♥\": \"&hearts;\",\n      \"♦\": \"&diams;\"\n    }\n  },\n  html5: {\n    entities: {\n      \"&AElig\": \"Æ\",\n      \"&AElig;\": \"Æ\",\n      \"&AMP\": \"&\",\n      \"&AMP;\": \"&\",\n      \"&Aacute\": \"Á\",\n      \"&Aacute;\": \"Á\",\n      \"&Abreve;\": \"Ă\",\n      \"&Acirc\": \"Â\",\n      \"&Acirc;\": \"Â\",\n      \"&Acy;\": \"А\",\n      \"&Afr;\": \"𝔄\",\n      \"&Agrave\": \"À\",\n      \"&Agrave;\": \"À\",\n      \"&Alpha;\": \"Α\",\n      \"&Amacr;\": \"Ā\",\n      \"&And;\": \"⩓\",\n      \"&Aogon;\": \"Ą\",\n      \"&Aopf;\": \"𝔸\",\n      \"&ApplyFunction;\": \"⁡\",\n      \"&Aring\": \"Å\",\n      \"&Aring;\": \"Å\",\n      \"&Ascr;\": \"𝒜\",\n      \"&Assign;\": \"≔\",\n      \"&Atilde\": \"Ã\",\n      \"&Atilde;\": \"Ã\",\n      \"&Auml\": \"Ä\",\n      \"&Auml;\": \"Ä\",\n      \"&Backslash;\": \"∖\",\n      \"&Barv;\": \"⫧\",\n      \"&Barwed;\": \"⌆\",\n      \"&Bcy;\": \"Б\",\n      \"&Because;\": \"∵\",\n      \"&Bernoullis;\": \"ℬ\",\n      \"&Beta;\": \"Β\",\n      \"&Bfr;\": \"𝔅\",\n      \"&Bopf;\": \"𝔹\",\n      \"&Breve;\": \"˘\",\n      \"&Bscr;\": \"ℬ\",\n      \"&Bumpeq;\": \"≎\",\n      \"&CHcy;\": \"Ч\",\n      \"&COPY\": \"©\",\n      \"&COPY;\": \"©\",\n      \"&Cacute;\": \"Ć\",\n      \"&Cap;\": \"⋒\",\n      \"&CapitalDifferentialD;\": \"ⅅ\",\n      \"&Cayleys;\": \"ℭ\",\n      \"&Ccaron;\": \"Č\",\n      \"&Ccedil\": \"Ç\",\n      \"&Ccedil;\": \"Ç\",\n      \"&Ccirc;\": \"Ĉ\",\n      \"&Cconint;\": \"∰\",\n      \"&Cdot;\": \"Ċ\",\n      \"&Cedilla;\": \"¸\",\n      \"&CenterDot;\": \"·\",\n      \"&Cfr;\": \"ℭ\",\n      \"&Chi;\": \"Χ\",\n      \"&CircleDot;\": \"⊙\",\n      \"&CircleMinus;\": \"⊖\",\n      \"&CirclePlus;\": \"⊕\",\n      \"&CircleTimes;\": \"⊗\",\n      \"&ClockwiseContourIntegral;\": \"∲\",\n      \"&CloseCurlyDoubleQuote;\": \"”\",\n      \"&CloseCurlyQuote;\": \"’\",\n      \"&Colon;\": \"∷\",\n      \"&Colone;\": \"⩴\",\n      \"&Congruent;\": \"≡\",\n      \"&Conint;\": \"∯\",\n      \"&ContourIntegral;\": \"∮\",\n      \"&Copf;\": \"ℂ\",\n      \"&Coproduct;\": \"∐\",\n      \"&CounterClockwiseContourIntegral;\": \"∳\",\n      \"&Cross;\": \"⨯\",\n      \"&Cscr;\": \"𝒞\",\n      \"&Cup;\": \"⋓\",\n      \"&CupCap;\": \"≍\",\n      \"&DD;\": \"ⅅ\",\n      \"&DDotrahd;\": \"⤑\",\n      \"&DJcy;\": \"Ђ\",\n      \"&DScy;\": \"Ѕ\",\n      \"&DZcy;\": \"Џ\",\n      \"&Dagger;\": \"‡\",\n      \"&Darr;\": \"↡\",\n      \"&Dashv;\": \"⫤\",\n      \"&Dcaron;\": \"Ď\",\n      \"&Dcy;\": \"Д\",\n      \"&Del;\": \"∇\",\n      \"&Delta;\": \"Δ\",\n      \"&Dfr;\": \"𝔇\",\n      \"&DiacriticalAcute;\": \"´\",\n      \"&DiacriticalDot;\": \"˙\",\n      \"&DiacriticalDoubleAcute;\": \"˝\",\n      \"&DiacriticalGrave;\": \"`\",\n      \"&DiacriticalTilde;\": \"˜\",\n      \"&Diamond;\": \"⋄\",\n      \"&DifferentialD;\": \"ⅆ\",\n      \"&Dopf;\": \"𝔻\",\n      \"&Dot;\": \"¨\",\n      \"&DotDot;\": \"⃜\",\n      \"&DotEqual;\": \"≐\",\n      \"&DoubleContourIntegral;\": \"∯\",\n      \"&DoubleDot;\": \"¨\",\n      \"&DoubleDownArrow;\": \"⇓\",\n      \"&DoubleLeftArrow;\": \"⇐\",\n      \"&DoubleLeftRightArrow;\": \"⇔\",\n      \"&DoubleLeftTee;\": \"⫤\",\n      \"&DoubleLongLeftArrow;\": \"⟸\",\n      \"&DoubleLongLeftRightArrow;\": \"⟺\",\n      \"&DoubleLongRightArrow;\": \"⟹\",\n      \"&DoubleRightArrow;\": \"⇒\",\n      \"&DoubleRightTee;\": \"⊨\",\n      \"&DoubleUpArrow;\": \"⇑\",\n      \"&DoubleUpDownArrow;\": \"⇕\",\n      \"&DoubleVerticalBar;\": \"∥\",\n      \"&DownArrow;\": \"↓\",\n      \"&DownArrowBar;\": \"⤓\",\n      \"&DownArrowUpArrow;\": \"⇵\",\n      \"&DownBreve;\": \"̑\",\n      \"&DownLeftRightVector;\": \"⥐\",\n      \"&DownLeftTeeVector;\": \"⥞\",\n      \"&DownLeftVector;\": \"↽\",\n      \"&DownLeftVectorBar;\": \"⥖\",\n      \"&DownRightTeeVector;\": \"⥟\",\n      \"&DownRightVector;\": \"⇁\",\n      \"&DownRightVectorBar;\": \"⥗\",\n      \"&DownTee;\": \"⊤\",\n      \"&DownTeeArrow;\": \"↧\",\n      \"&Downarrow;\": \"⇓\",\n      \"&Dscr;\": \"𝒟\",\n      \"&Dstrok;\": \"Đ\",\n      \"&ENG;\": \"Ŋ\",\n      \"&ETH\": \"Ð\",\n      \"&ETH;\": \"Ð\",\n      \"&Eacute\": \"É\",\n      \"&Eacute;\": \"É\",\n      \"&Ecaron;\": \"Ě\",\n      \"&Ecirc\": \"Ê\",\n      \"&Ecirc;\": \"Ê\",\n      \"&Ecy;\": \"Э\",\n      \"&Edot;\": \"Ė\",\n      \"&Efr;\": \"𝔈\",\n      \"&Egrave\": \"È\",\n      \"&Egrave;\": \"È\",\n      \"&Element;\": \"∈\",\n      \"&Emacr;\": \"Ē\",\n      \"&EmptySmallSquare;\": \"◻\",\n      \"&EmptyVerySmallSquare;\": \"▫\",\n      \"&Eogon;\": \"Ę\",\n      \"&Eopf;\": \"𝔼\",\n      \"&Epsilon;\": \"Ε\",\n      \"&Equal;\": \"⩵\",\n      \"&EqualTilde;\": \"≂\",\n      \"&Equilibrium;\": \"⇌\",\n      \"&Escr;\": \"ℰ\",\n      \"&Esim;\": \"⩳\",\n      \"&Eta;\": \"Η\",\n      \"&Euml\": \"Ë\",\n      \"&Euml;\": \"Ë\",\n      \"&Exists;\": \"∃\",\n      \"&ExponentialE;\": \"ⅇ\",\n      \"&Fcy;\": \"Ф\",\n      \"&Ffr;\": \"𝔉\",\n      \"&FilledSmallSquare;\": \"◼\",\n      \"&FilledVerySmallSquare;\": \"▪\",\n      \"&Fopf;\": \"𝔽\",\n      \"&ForAll;\": \"∀\",\n      \"&Fouriertrf;\": \"ℱ\",\n      \"&Fscr;\": \"ℱ\",\n      \"&GJcy;\": \"Ѓ\",\n      \"&GT\": \">\",\n      \"&GT;\": \">\",\n      \"&Gamma;\": \"Γ\",\n      \"&Gammad;\": \"Ϝ\",\n      \"&Gbreve;\": \"Ğ\",\n      \"&Gcedil;\": \"Ģ\",\n      \"&Gcirc;\": \"Ĝ\",\n      \"&Gcy;\": \"Г\",\n      \"&Gdot;\": \"Ġ\",\n      \"&Gfr;\": \"𝔊\",\n      \"&Gg;\": \"⋙\",\n      \"&Gopf;\": \"𝔾\",\n      \"&GreaterEqual;\": \"≥\",\n      \"&GreaterEqualLess;\": \"⋛\",\n      \"&GreaterFullEqual;\": \"≧\",\n      \"&GreaterGreater;\": \"⪢\",\n      \"&GreaterLess;\": \"≷\",\n      \"&GreaterSlantEqual;\": \"⩾\",\n      \"&GreaterTilde;\": \"≳\",\n      \"&Gscr;\": \"𝒢\",\n      \"&Gt;\": \"≫\",\n      \"&HARDcy;\": \"Ъ\",\n      \"&Hacek;\": \"ˇ\",\n      \"&Hat;\": \"^\",\n      \"&Hcirc;\": \"Ĥ\",\n      \"&Hfr;\": \"ℌ\",\n      \"&HilbertSpace;\": \"ℋ\",\n      \"&Hopf;\": \"ℍ\",\n      \"&HorizontalLine;\": \"─\",\n      \"&Hscr;\": \"ℋ\",\n      \"&Hstrok;\": \"Ħ\",\n      \"&HumpDownHump;\": \"≎\",\n      \"&HumpEqual;\": \"≏\",\n      \"&IEcy;\": \"Е\",\n      \"&IJlig;\": \"Ĳ\",\n      \"&IOcy;\": \"Ё\",\n      \"&Iacute\": \"Í\",\n      \"&Iacute;\": \"Í\",\n      \"&Icirc\": \"Î\",\n      \"&Icirc;\": \"Î\",\n      \"&Icy;\": \"И\",\n      \"&Idot;\": \"İ\",\n      \"&Ifr;\": \"ℑ\",\n      \"&Igrave\": \"Ì\",\n      \"&Igrave;\": \"Ì\",\n      \"&Im;\": \"ℑ\",\n      \"&Imacr;\": \"Ī\",\n      \"&ImaginaryI;\": \"ⅈ\",\n      \"&Implies;\": \"⇒\",\n      \"&Int;\": \"∬\",\n      \"&Integral;\": \"∫\",\n      \"&Intersection;\": \"⋂\",\n      \"&InvisibleComma;\": \"⁣\",\n      \"&InvisibleTimes;\": \"⁢\",\n      \"&Iogon;\": \"Į\",\n      \"&Iopf;\": \"𝕀\",\n      \"&Iota;\": \"Ι\",\n      \"&Iscr;\": \"ℐ\",\n      \"&Itilde;\": \"Ĩ\",\n      \"&Iukcy;\": \"І\",\n      \"&Iuml\": \"Ï\",\n      \"&Iuml;\": \"Ï\",\n      \"&Jcirc;\": \"Ĵ\",\n      \"&Jcy;\": \"Й\",\n      \"&Jfr;\": \"𝔍\",\n      \"&Jopf;\": \"𝕁\",\n      \"&Jscr;\": \"𝒥\",\n      \"&Jsercy;\": \"Ј\",\n      \"&Jukcy;\": \"Є\",\n      \"&KHcy;\": \"Х\",\n      \"&KJcy;\": \"Ќ\",\n      \"&Kappa;\": \"Κ\",\n      \"&Kcedil;\": \"Ķ\",\n      \"&Kcy;\": \"К\",\n      \"&Kfr;\": \"𝔎\",\n      \"&Kopf;\": \"𝕂\",\n      \"&Kscr;\": \"𝒦\",\n      \"&LJcy;\": \"Љ\",\n      \"&LT\": \"<\",\n      \"&LT;\": \"<\",\n      \"&Lacute;\": \"Ĺ\",\n      \"&Lambda;\": \"Λ\",\n      \"&Lang;\": \"⟪\",\n      \"&Laplacetrf;\": \"ℒ\",\n      \"&Larr;\": \"↞\",\n      \"&Lcaron;\": \"Ľ\",\n      \"&Lcedil;\": \"Ļ\",\n      \"&Lcy;\": \"Л\",\n      \"&LeftAngleBracket;\": \"⟨\",\n      \"&LeftArrow;\": \"←\",\n      \"&LeftArrowBar;\": \"⇤\",\n      \"&LeftArrowRightArrow;\": \"⇆\",\n      \"&LeftCeiling;\": \"⌈\",\n      \"&LeftDoubleBracket;\": \"⟦\",\n      \"&LeftDownTeeVector;\": \"⥡\",\n      \"&LeftDownVector;\": \"⇃\",\n      \"&LeftDownVectorBar;\": \"⥙\",\n      \"&LeftFloor;\": \"⌊\",\n      \"&LeftRightArrow;\": \"↔\",\n      \"&LeftRightVector;\": \"⥎\",\n      \"&LeftTee;\": \"⊣\",\n      \"&LeftTeeArrow;\": \"↤\",\n      \"&LeftTeeVector;\": \"⥚\",\n      \"&LeftTriangle;\": \"⊲\",\n      \"&LeftTriangleBar;\": \"⧏\",\n      \"&LeftTriangleEqual;\": \"⊴\",\n      \"&LeftUpDownVector;\": \"⥑\",\n      \"&LeftUpTeeVector;\": \"⥠\",\n      \"&LeftUpVector;\": \"↿\",\n      \"&LeftUpVectorBar;\": \"⥘\",\n      \"&LeftVector;\": \"↼\",\n      \"&LeftVectorBar;\": \"⥒\",\n      \"&Leftarrow;\": \"⇐\",\n      \"&Leftrightarrow;\": \"⇔\",\n      \"&LessEqualGreater;\": \"⋚\",\n      \"&LessFullEqual;\": \"≦\",\n      \"&LessGreater;\": \"≶\",\n      \"&LessLess;\": \"⪡\",\n      \"&LessSlantEqual;\": \"⩽\",\n      \"&LessTilde;\": \"≲\",\n      \"&Lfr;\": \"𝔏\",\n      \"&Ll;\": \"⋘\",\n      \"&Lleftarrow;\": \"⇚\",\n      \"&Lmidot;\": \"Ŀ\",\n      \"&LongLeftArrow;\": \"⟵\",\n      \"&LongLeftRightArrow;\": \"⟷\",\n      \"&LongRightArrow;\": \"⟶\",\n      \"&Longleftarrow;\": \"⟸\",\n      \"&Longleftrightarrow;\": \"⟺\",\n      \"&Longrightarrow;\": \"⟹\",\n      \"&Lopf;\": \"𝕃\",\n      \"&LowerLeftArrow;\": \"↙\",\n      \"&LowerRightArrow;\": \"↘\",\n      \"&Lscr;\": \"ℒ\",\n      \"&Lsh;\": \"↰\",\n      \"&Lstrok;\": \"Ł\",\n      \"&Lt;\": \"≪\",\n      \"&Map;\": \"⤅\",\n      \"&Mcy;\": \"М\",\n      \"&MediumSpace;\": \" \",\n      \"&Mellintrf;\": \"ℳ\",\n      \"&Mfr;\": \"𝔐\",\n      \"&MinusPlus;\": \"∓\",\n      \"&Mopf;\": \"𝕄\",\n      \"&Mscr;\": \"ℳ\",\n      \"&Mu;\": \"Μ\",\n      \"&NJcy;\": \"Њ\",\n      \"&Nacute;\": \"Ń\",\n      \"&Ncaron;\": \"Ň\",\n      \"&Ncedil;\": \"Ņ\",\n      \"&Ncy;\": \"Н\",\n      \"&NegativeMediumSpace;\": \"​\",\n      \"&NegativeThickSpace;\": \"​\",\n      \"&NegativeThinSpace;\": \"​\",\n      \"&NegativeVeryThinSpace;\": \"​\",\n      \"&NestedGreaterGreater;\": \"≫\",\n      \"&NestedLessLess;\": \"≪\",\n      \"&NewLine;\": \"\\n\",\n      \"&Nfr;\": \"𝔑\",\n      \"&NoBreak;\": \"⁠\",\n      \"&NonBreakingSpace;\": \" \",\n      \"&Nopf;\": \"ℕ\",\n      \"&Not;\": \"⫬\",\n      \"&NotCongruent;\": \"≢\",\n      \"&NotCupCap;\": \"≭\",\n      \"&NotDoubleVerticalBar;\": \"∦\",\n      \"&NotElement;\": \"∉\",\n      \"&NotEqual;\": \"≠\",\n      \"&NotEqualTilde;\": \"≂̸\",\n      \"&NotExists;\": \"∄\",\n      \"&NotGreater;\": \"≯\",\n      \"&NotGreaterEqual;\": \"≱\",\n      \"&NotGreaterFullEqual;\": \"≧̸\",\n      \"&NotGreaterGreater;\": \"≫̸\",\n      \"&NotGreaterLess;\": \"≹\",\n      \"&NotGreaterSlantEqual;\": \"⩾̸\",\n      \"&NotGreaterTilde;\": \"≵\",\n      \"&NotHumpDownHump;\": \"≎̸\",\n      \"&NotHumpEqual;\": \"≏̸\",\n      \"&NotLeftTriangle;\": \"⋪\",\n      \"&NotLeftTriangleBar;\": \"⧏̸\",\n      \"&NotLeftTriangleEqual;\": \"⋬\",\n      \"&NotLess;\": \"≮\",\n      \"&NotLessEqual;\": \"≰\",\n      \"&NotLessGreater;\": \"≸\",\n      \"&NotLessLess;\": \"≪̸\",\n      \"&NotLessSlantEqual;\": \"⩽̸\",\n      \"&NotLessTilde;\": \"≴\",\n      \"&NotNestedGreaterGreater;\": \"⪢̸\",\n      \"&NotNestedLessLess;\": \"⪡̸\",\n      \"&NotPrecedes;\": \"⊀\",\n      \"&NotPrecedesEqual;\": \"⪯̸\",\n      \"&NotPrecedesSlantEqual;\": \"⋠\",\n      \"&NotReverseElement;\": \"∌\",\n      \"&NotRightTriangle;\": \"⋫\",\n      \"&NotRightTriangleBar;\": \"⧐̸\",\n      \"&NotRightTriangleEqual;\": \"⋭\",\n      \"&NotSquareSubset;\": \"⊏̸\",\n      \"&NotSquareSubsetEqual;\": \"⋢\",\n      \"&NotSquareSuperset;\": \"⊐̸\",\n      \"&NotSquareSupersetEqual;\": \"⋣\",\n      \"&NotSubset;\": \"⊂⃒\",\n      \"&NotSubsetEqual;\": \"⊈\",\n      \"&NotSucceeds;\": \"⊁\",\n      \"&NotSucceedsEqual;\": \"⪰̸\",\n      \"&NotSucceedsSlantEqual;\": \"⋡\",\n      \"&NotSucceedsTilde;\": \"≿̸\",\n      \"&NotSuperset;\": \"⊃⃒\",\n      \"&NotSupersetEqual;\": \"⊉\",\n      \"&NotTilde;\": \"≁\",\n      \"&NotTildeEqual;\": \"≄\",\n      \"&NotTildeFullEqual;\": \"≇\",\n      \"&NotTildeTilde;\": \"≉\",\n      \"&NotVerticalBar;\": \"∤\",\n      \"&Nscr;\": \"𝒩\",\n      \"&Ntilde\": \"Ñ\",\n      \"&Ntilde;\": \"Ñ\",\n      \"&Nu;\": \"Ν\",\n      \"&OElig;\": \"Œ\",\n      \"&Oacute\": \"Ó\",\n      \"&Oacute;\": \"Ó\",\n      \"&Ocirc\": \"Ô\",\n      \"&Ocirc;\": \"Ô\",\n      \"&Ocy;\": \"О\",\n      \"&Odblac;\": \"Ő\",\n      \"&Ofr;\": \"𝔒\",\n      \"&Ograve\": \"Ò\",\n      \"&Ograve;\": \"Ò\",\n      \"&Omacr;\": \"Ō\",\n      \"&Omega;\": \"Ω\",\n      \"&Omicron;\": \"Ο\",\n      \"&Oopf;\": \"𝕆\",\n      \"&OpenCurlyDoubleQuote;\": \"“\",\n      \"&OpenCurlyQuote;\": \"‘\",\n      \"&Or;\": \"⩔\",\n      \"&Oscr;\": \"𝒪\",\n      \"&Oslash\": \"Ø\",\n      \"&Oslash;\": \"Ø\",\n      \"&Otilde\": \"Õ\",\n      \"&Otilde;\": \"Õ\",\n      \"&Otimes;\": \"⨷\",\n      \"&Ouml\": \"Ö\",\n      \"&Ouml;\": \"Ö\",\n      \"&OverBar;\": \"‾\",\n      \"&OverBrace;\": \"⏞\",\n      \"&OverBracket;\": \"⎴\",\n      \"&OverParenthesis;\": \"⏜\",\n      \"&PartialD;\": \"∂\",\n      \"&Pcy;\": \"П\",\n      \"&Pfr;\": \"𝔓\",\n      \"&Phi;\": \"Φ\",\n      \"&Pi;\": \"Π\",\n      \"&PlusMinus;\": \"±\",\n      \"&Poincareplane;\": \"ℌ\",\n      \"&Popf;\": \"ℙ\",\n      \"&Pr;\": \"⪻\",\n      \"&Precedes;\": \"≺\",\n      \"&PrecedesEqual;\": \"⪯\",\n      \"&PrecedesSlantEqual;\": \"≼\",\n      \"&PrecedesTilde;\": \"≾\",\n      \"&Prime;\": \"″\",\n      \"&Product;\": \"∏\",\n      \"&Proportion;\": \"∷\",\n      \"&Proportional;\": \"∝\",\n      \"&Pscr;\": \"𝒫\",\n      \"&Psi;\": \"Ψ\",\n      \"&QUOT\": '\"',\n      \"&QUOT;\": '\"',\n      \"&Qfr;\": \"𝔔\",\n      \"&Qopf;\": \"ℚ\",\n      \"&Qscr;\": \"𝒬\",\n      \"&RBarr;\": \"⤐\",\n      \"&REG\": \"®\",\n      \"&REG;\": \"®\",\n      \"&Racute;\": \"Ŕ\",\n      \"&Rang;\": \"⟫\",\n      \"&Rarr;\": \"↠\",\n      \"&Rarrtl;\": \"⤖\",\n      \"&Rcaron;\": \"Ř\",\n      \"&Rcedil;\": \"Ŗ\",\n      \"&Rcy;\": \"Р\",\n      \"&Re;\": \"ℜ\",\n      \"&ReverseElement;\": \"∋\",\n      \"&ReverseEquilibrium;\": \"⇋\",\n      \"&ReverseUpEquilibrium;\": \"⥯\",\n      \"&Rfr;\": \"ℜ\",\n      \"&Rho;\": \"Ρ\",\n      \"&RightAngleBracket;\": \"⟩\",\n      \"&RightArrow;\": \"→\",\n      \"&RightArrowBar;\": \"⇥\",\n      \"&RightArrowLeftArrow;\": \"⇄\",\n      \"&RightCeiling;\": \"⌉\",\n      \"&RightDoubleBracket;\": \"⟧\",\n      \"&RightDownTeeVector;\": \"⥝\",\n      \"&RightDownVector;\": \"⇂\",\n      \"&RightDownVectorBar;\": \"⥕\",\n      \"&RightFloor;\": \"⌋\",\n      \"&RightTee;\": \"⊢\",\n      \"&RightTeeArrow;\": \"↦\",\n      \"&RightTeeVector;\": \"⥛\",\n      \"&RightTriangle;\": \"⊳\",\n      \"&RightTriangleBar;\": \"⧐\",\n      \"&RightTriangleEqual;\": \"⊵\",\n      \"&RightUpDownVector;\": \"⥏\",\n      \"&RightUpTeeVector;\": \"⥜\",\n      \"&RightUpVector;\": \"↾\",\n      \"&RightUpVectorBar;\": \"⥔\",\n      \"&RightVector;\": \"⇀\",\n      \"&RightVectorBar;\": \"⥓\",\n      \"&Rightarrow;\": \"⇒\",\n      \"&Ropf;\": \"ℝ\",\n      \"&RoundImplies;\": \"⥰\",\n      \"&Rrightarrow;\": \"⇛\",\n      \"&Rscr;\": \"ℛ\",\n      \"&Rsh;\": \"↱\",\n      \"&RuleDelayed;\": \"⧴\",\n      \"&SHCHcy;\": \"Щ\",\n      \"&SHcy;\": \"Ш\",\n      \"&SOFTcy;\": \"Ь\",\n      \"&Sacute;\": \"Ś\",\n      \"&Sc;\": \"⪼\",\n      \"&Scaron;\": \"Š\",\n      \"&Scedil;\": \"Ş\",\n      \"&Scirc;\": \"Ŝ\",\n      \"&Scy;\": \"С\",\n      \"&Sfr;\": \"𝔖\",\n      \"&ShortDownArrow;\": \"↓\",\n      \"&ShortLeftArrow;\": \"←\",\n      \"&ShortRightArrow;\": \"→\",\n      \"&ShortUpArrow;\": \"↑\",\n      \"&Sigma;\": \"Σ\",\n      \"&SmallCircle;\": \"∘\",\n      \"&Sopf;\": \"𝕊\",\n      \"&Sqrt;\": \"√\",\n      \"&Square;\": \"□\",\n      \"&SquareIntersection;\": \"⊓\",\n      \"&SquareSubset;\": \"⊏\",\n      \"&SquareSubsetEqual;\": \"⊑\",\n      \"&SquareSuperset;\": \"⊐\",\n      \"&SquareSupersetEqual;\": \"⊒\",\n      \"&SquareUnion;\": \"⊔\",\n      \"&Sscr;\": \"𝒮\",\n      \"&Star;\": \"⋆\",\n      \"&Sub;\": \"⋐\",\n      \"&Subset;\": \"⋐\",\n      \"&SubsetEqual;\": \"⊆\",\n      \"&Succeeds;\": \"≻\",\n      \"&SucceedsEqual;\": \"⪰\",\n      \"&SucceedsSlantEqual;\": \"≽\",\n      \"&SucceedsTilde;\": \"≿\",\n      \"&SuchThat;\": \"∋\",\n      \"&Sum;\": \"∑\",\n      \"&Sup;\": \"⋑\",\n      \"&Superset;\": \"⊃\",\n      \"&SupersetEqual;\": \"⊇\",\n      \"&Supset;\": \"⋑\",\n      \"&THORN\": \"Þ\",\n      \"&THORN;\": \"Þ\",\n      \"&TRADE;\": \"™\",\n      \"&TSHcy;\": \"Ћ\",\n      \"&TScy;\": \"Ц\",\n      \"&Tab;\": \"\\t\",\n      \"&Tau;\": \"Τ\",\n      \"&Tcaron;\": \"Ť\",\n      \"&Tcedil;\": \"Ţ\",\n      \"&Tcy;\": \"Т\",\n      \"&Tfr;\": \"𝔗\",\n      \"&Therefore;\": \"∴\",\n      \"&Theta;\": \"Θ\",\n      \"&ThickSpace;\": \"  \",\n      \"&ThinSpace;\": \" \",\n      \"&Tilde;\": \"∼\",\n      \"&TildeEqual;\": \"≃\",\n      \"&TildeFullEqual;\": \"≅\",\n      \"&TildeTilde;\": \"≈\",\n      \"&Topf;\": \"𝕋\",\n      \"&TripleDot;\": \"⃛\",\n      \"&Tscr;\": \"𝒯\",\n      \"&Tstrok;\": \"Ŧ\",\n      \"&Uacute\": \"Ú\",\n      \"&Uacute;\": \"Ú\",\n      \"&Uarr;\": \"↟\",\n      \"&Uarrocir;\": \"⥉\",\n      \"&Ubrcy;\": \"Ў\",\n      \"&Ubreve;\": \"Ŭ\",\n      \"&Ucirc\": \"Û\",\n      \"&Ucirc;\": \"Û\",\n      \"&Ucy;\": \"У\",\n      \"&Udblac;\": \"Ű\",\n      \"&Ufr;\": \"𝔘\",\n      \"&Ugrave\": \"Ù\",\n      \"&Ugrave;\": \"Ù\",\n      \"&Umacr;\": \"Ū\",\n      \"&UnderBar;\": \"_\",\n      \"&UnderBrace;\": \"⏟\",\n      \"&UnderBracket;\": \"⎵\",\n      \"&UnderParenthesis;\": \"⏝\",\n      \"&Union;\": \"⋃\",\n      \"&UnionPlus;\": \"⊎\",\n      \"&Uogon;\": \"Ų\",\n      \"&Uopf;\": \"𝕌\",\n      \"&UpArrow;\": \"↑\",\n      \"&UpArrowBar;\": \"⤒\",\n      \"&UpArrowDownArrow;\": \"⇅\",\n      \"&UpDownArrow;\": \"↕\",\n      \"&UpEquilibrium;\": \"⥮\",\n      \"&UpTee;\": \"⊥\",\n      \"&UpTeeArrow;\": \"↥\",\n      \"&Uparrow;\": \"⇑\",\n      \"&Updownarrow;\": \"⇕\",\n      \"&UpperLeftArrow;\": \"↖\",\n      \"&UpperRightArrow;\": \"↗\",\n      \"&Upsi;\": \"ϒ\",\n      \"&Upsilon;\": \"Υ\",\n      \"&Uring;\": \"Ů\",\n      \"&Uscr;\": \"𝒰\",\n      \"&Utilde;\": \"Ũ\",\n      \"&Uuml\": \"Ü\",\n      \"&Uuml;\": \"Ü\",\n      \"&VDash;\": \"⊫\",\n      \"&Vbar;\": \"⫫\",\n      \"&Vcy;\": \"В\",\n      \"&Vdash;\": \"⊩\",\n      \"&Vdashl;\": \"⫦\",\n      \"&Vee;\": \"⋁\",\n      \"&Verbar;\": \"‖\",\n      \"&Vert;\": \"‖\",\n      \"&VerticalBar;\": \"∣\",\n      \"&VerticalLine;\": \"|\",\n      \"&VerticalSeparator;\": \"❘\",\n      \"&VerticalTilde;\": \"≀\",\n      \"&VeryThinSpace;\": \" \",\n      \"&Vfr;\": \"𝔙\",\n      \"&Vopf;\": \"𝕍\",\n      \"&Vscr;\": \"𝒱\",\n      \"&Vvdash;\": \"⊪\",\n      \"&Wcirc;\": \"Ŵ\",\n      \"&Wedge;\": \"⋀\",\n      \"&Wfr;\": \"𝔚\",\n      \"&Wopf;\": \"𝕎\",\n      \"&Wscr;\": \"𝒲\",\n      \"&Xfr;\": \"𝔛\",\n      \"&Xi;\": \"Ξ\",\n      \"&Xopf;\": \"𝕏\",\n      \"&Xscr;\": \"𝒳\",\n      \"&YAcy;\": \"Я\",\n      \"&YIcy;\": \"Ї\",\n      \"&YUcy;\": \"Ю\",\n      \"&Yacute\": \"Ý\",\n      \"&Yacute;\": \"Ý\",\n      \"&Ycirc;\": \"Ŷ\",\n      \"&Ycy;\": \"Ы\",\n      \"&Yfr;\": \"𝔜\",\n      \"&Yopf;\": \"𝕐\",\n      \"&Yscr;\": \"𝒴\",\n      \"&Yuml;\": \"Ÿ\",\n      \"&ZHcy;\": \"Ж\",\n      \"&Zacute;\": \"Ź\",\n      \"&Zcaron;\": \"Ž\",\n      \"&Zcy;\": \"З\",\n      \"&Zdot;\": \"Ż\",\n      \"&ZeroWidthSpace;\": \"​\",\n      \"&Zeta;\": \"Ζ\",\n      \"&Zfr;\": \"ℨ\",\n      \"&Zopf;\": \"ℤ\",\n      \"&Zscr;\": \"𝒵\",\n      \"&aacute\": \"á\",\n      \"&aacute;\": \"á\",\n      \"&abreve;\": \"ă\",\n      \"&ac;\": \"∾\",\n      \"&acE;\": \"∾̳\",\n      \"&acd;\": \"∿\",\n      \"&acirc\": \"â\",\n      \"&acirc;\": \"â\",\n      \"&acute\": \"´\",\n      \"&acute;\": \"´\",\n      \"&acy;\": \"а\",\n      \"&aelig\": \"æ\",\n      \"&aelig;\": \"æ\",\n      \"&af;\": \"⁡\",\n      \"&afr;\": \"𝔞\",\n      \"&agrave\": \"à\",\n      \"&agrave;\": \"à\",\n      \"&alefsym;\": \"ℵ\",\n      \"&aleph;\": \"ℵ\",\n      \"&alpha;\": \"α\",\n      \"&amacr;\": \"ā\",\n      \"&amalg;\": \"⨿\",\n      \"&amp\": \"&\",\n      \"&amp;\": \"&\",\n      \"&and;\": \"∧\",\n      \"&andand;\": \"⩕\",\n      \"&andd;\": \"⩜\",\n      \"&andslope;\": \"⩘\",\n      \"&andv;\": \"⩚\",\n      \"&ang;\": \"∠\",\n      \"&ange;\": \"⦤\",\n      \"&angle;\": \"∠\",\n      \"&angmsd;\": \"∡\",\n      \"&angmsdaa;\": \"⦨\",\n      \"&angmsdab;\": \"⦩\",\n      \"&angmsdac;\": \"⦪\",\n      \"&angmsdad;\": \"⦫\",\n      \"&angmsdae;\": \"⦬\",\n      \"&angmsdaf;\": \"⦭\",\n      \"&angmsdag;\": \"⦮\",\n      \"&angmsdah;\": \"⦯\",\n      \"&angrt;\": \"∟\",\n      \"&angrtvb;\": \"⊾\",\n      \"&angrtvbd;\": \"⦝\",\n      \"&angsph;\": \"∢\",\n      \"&angst;\": \"Å\",\n      \"&angzarr;\": \"⍼\",\n      \"&aogon;\": \"ą\",\n      \"&aopf;\": \"𝕒\",\n      \"&ap;\": \"≈\",\n      \"&apE;\": \"⩰\",\n      \"&apacir;\": \"⩯\",\n      \"&ape;\": \"≊\",\n      \"&apid;\": \"≋\",\n      \"&apos;\": \"'\",\n      \"&approx;\": \"≈\",\n      \"&approxeq;\": \"≊\",\n      \"&aring\": \"å\",\n      \"&aring;\": \"å\",\n      \"&ascr;\": \"𝒶\",\n      \"&ast;\": \"*\",\n      \"&asymp;\": \"≈\",\n      \"&asympeq;\": \"≍\",\n      \"&atilde\": \"ã\",\n      \"&atilde;\": \"ã\",\n      \"&auml\": \"ä\",\n      \"&auml;\": \"ä\",\n      \"&awconint;\": \"∳\",\n      \"&awint;\": \"⨑\",\n      \"&bNot;\": \"⫭\",\n      \"&backcong;\": \"≌\",\n      \"&backepsilon;\": \"϶\",\n      \"&backprime;\": \"‵\",\n      \"&backsim;\": \"∽\",\n      \"&backsimeq;\": \"⋍\",\n      \"&barvee;\": \"⊽\",\n      \"&barwed;\": \"⌅\",\n      \"&barwedge;\": \"⌅\",\n      \"&bbrk;\": \"⎵\",\n      \"&bbrktbrk;\": \"⎶\",\n      \"&bcong;\": \"≌\",\n      \"&bcy;\": \"б\",\n      \"&bdquo;\": \"„\",\n      \"&becaus;\": \"∵\",\n      \"&because;\": \"∵\",\n      \"&bemptyv;\": \"⦰\",\n      \"&bepsi;\": \"϶\",\n      \"&bernou;\": \"ℬ\",\n      \"&beta;\": \"β\",\n      \"&beth;\": \"ℶ\",\n      \"&between;\": \"≬\",\n      \"&bfr;\": \"𝔟\",\n      \"&bigcap;\": \"⋂\",\n      \"&bigcirc;\": \"◯\",\n      \"&bigcup;\": \"⋃\",\n      \"&bigodot;\": \"⨀\",\n      \"&bigoplus;\": \"⨁\",\n      \"&bigotimes;\": \"⨂\",\n      \"&bigsqcup;\": \"⨆\",\n      \"&bigstar;\": \"★\",\n      \"&bigtriangledown;\": \"▽\",\n      \"&bigtriangleup;\": \"△\",\n      \"&biguplus;\": \"⨄\",\n      \"&bigvee;\": \"⋁\",\n      \"&bigwedge;\": \"⋀\",\n      \"&bkarow;\": \"⤍\",\n      \"&blacklozenge;\": \"⧫\",\n      \"&blacksquare;\": \"▪\",\n      \"&blacktriangle;\": \"▴\",\n      \"&blacktriangledown;\": \"▾\",\n      \"&blacktriangleleft;\": \"◂\",\n      \"&blacktriangleright;\": \"▸\",\n      \"&blank;\": \"␣\",\n      \"&blk12;\": \"▒\",\n      \"&blk14;\": \"░\",\n      \"&blk34;\": \"▓\",\n      \"&block;\": \"█\",\n      \"&bne;\": \"=⃥\",\n      \"&bnequiv;\": \"≡⃥\",\n      \"&bnot;\": \"⌐\",\n      \"&bopf;\": \"𝕓\",\n      \"&bot;\": \"⊥\",\n      \"&bottom;\": \"⊥\",\n      \"&bowtie;\": \"⋈\",\n      \"&boxDL;\": \"╗\",\n      \"&boxDR;\": \"╔\",\n      \"&boxDl;\": \"╖\",\n      \"&boxDr;\": \"╓\",\n      \"&boxH;\": \"═\",\n      \"&boxHD;\": \"╦\",\n      \"&boxHU;\": \"╩\",\n      \"&boxHd;\": \"╤\",\n      \"&boxHu;\": \"╧\",\n      \"&boxUL;\": \"╝\",\n      \"&boxUR;\": \"╚\",\n      \"&boxUl;\": \"╜\",\n      \"&boxUr;\": \"╙\",\n      \"&boxV;\": \"║\",\n      \"&boxVH;\": \"╬\",\n      \"&boxVL;\": \"╣\",\n      \"&boxVR;\": \"╠\",\n      \"&boxVh;\": \"╫\",\n      \"&boxVl;\": \"╢\",\n      \"&boxVr;\": \"╟\",\n      \"&boxbox;\": \"⧉\",\n      \"&boxdL;\": \"╕\",\n      \"&boxdR;\": \"╒\",\n      \"&boxdl;\": \"┐\",\n      \"&boxdr;\": \"┌\",\n      \"&boxh;\": \"─\",\n      \"&boxhD;\": \"╥\",\n      \"&boxhU;\": \"╨\",\n      \"&boxhd;\": \"┬\",\n      \"&boxhu;\": \"┴\",\n      \"&boxminus;\": \"⊟\",\n      \"&boxplus;\": \"⊞\",\n      \"&boxtimes;\": \"⊠\",\n      \"&boxuL;\": \"╛\",\n      \"&boxuR;\": \"╘\",\n      \"&boxul;\": \"┘\",\n      \"&boxur;\": \"└\",\n      \"&boxv;\": \"│\",\n      \"&boxvH;\": \"╪\",\n      \"&boxvL;\": \"╡\",\n      \"&boxvR;\": \"╞\",\n      \"&boxvh;\": \"┼\",\n      \"&boxvl;\": \"┤\",\n      \"&boxvr;\": \"├\",\n      \"&bprime;\": \"‵\",\n      \"&breve;\": \"˘\",\n      \"&brvbar\": \"¦\",\n      \"&brvbar;\": \"¦\",\n      \"&bscr;\": \"𝒷\",\n      \"&bsemi;\": \"⁏\",\n      \"&bsim;\": \"∽\",\n      \"&bsime;\": \"⋍\",\n      \"&bsol;\": \"\\\\\",\n      \"&bsolb;\": \"⧅\",\n      \"&bsolhsub;\": \"⟈\",\n      \"&bull;\": \"•\",\n      \"&bullet;\": \"•\",\n      \"&bump;\": \"≎\",\n      \"&bumpE;\": \"⪮\",\n      \"&bumpe;\": \"≏\",\n      \"&bumpeq;\": \"≏\",\n      \"&cacute;\": \"ć\",\n      \"&cap;\": \"∩\",\n      \"&capand;\": \"⩄\",\n      \"&capbrcup;\": \"⩉\",\n      \"&capcap;\": \"⩋\",\n      \"&capcup;\": \"⩇\",\n      \"&capdot;\": \"⩀\",\n      \"&caps;\": \"∩︀\",\n      \"&caret;\": \"⁁\",\n      \"&caron;\": \"ˇ\",\n      \"&ccaps;\": \"⩍\",\n      \"&ccaron;\": \"č\",\n      \"&ccedil\": \"ç\",\n      \"&ccedil;\": \"ç\",\n      \"&ccirc;\": \"ĉ\",\n      \"&ccups;\": \"⩌\",\n      \"&ccupssm;\": \"⩐\",\n      \"&cdot;\": \"ċ\",\n      \"&cedil\": \"¸\",\n      \"&cedil;\": \"¸\",\n      \"&cemptyv;\": \"⦲\",\n      \"&cent\": \"¢\",\n      \"&cent;\": \"¢\",\n      \"&centerdot;\": \"·\",\n      \"&cfr;\": \"𝔠\",\n      \"&chcy;\": \"ч\",\n      \"&check;\": \"✓\",\n      \"&checkmark;\": \"✓\",\n      \"&chi;\": \"χ\",\n      \"&cir;\": \"○\",\n      \"&cirE;\": \"⧃\",\n      \"&circ;\": \"ˆ\",\n      \"&circeq;\": \"≗\",\n      \"&circlearrowleft;\": \"↺\",\n      \"&circlearrowright;\": \"↻\",\n      \"&circledR;\": \"®\",\n      \"&circledS;\": \"Ⓢ\",\n      \"&circledast;\": \"⊛\",\n      \"&circledcirc;\": \"⊚\",\n      \"&circleddash;\": \"⊝\",\n      \"&cire;\": \"≗\",\n      \"&cirfnint;\": \"⨐\",\n      \"&cirmid;\": \"⫯\",\n      \"&cirscir;\": \"⧂\",\n      \"&clubs;\": \"♣\",\n      \"&clubsuit;\": \"♣\",\n      \"&colon;\": \":\",\n      \"&colone;\": \"≔\",\n      \"&coloneq;\": \"≔\",\n      \"&comma;\": \",\",\n      \"&commat;\": \"@\",\n      \"&comp;\": \"∁\",\n      \"&compfn;\": \"∘\",\n      \"&complement;\": \"∁\",\n      \"&complexes;\": \"ℂ\",\n      \"&cong;\": \"≅\",\n      \"&congdot;\": \"⩭\",\n      \"&conint;\": \"∮\",\n      \"&copf;\": \"𝕔\",\n      \"&coprod;\": \"∐\",\n      \"&copy\": \"©\",\n      \"&copy;\": \"©\",\n      \"&copysr;\": \"℗\",\n      \"&crarr;\": \"↵\",\n      \"&cross;\": \"✗\",\n      \"&cscr;\": \"𝒸\",\n      \"&csub;\": \"⫏\",\n      \"&csube;\": \"⫑\",\n      \"&csup;\": \"⫐\",\n      \"&csupe;\": \"⫒\",\n      \"&ctdot;\": \"⋯\",\n      \"&cudarrl;\": \"⤸\",\n      \"&cudarrr;\": \"⤵\",\n      \"&cuepr;\": \"⋞\",\n      \"&cuesc;\": \"⋟\",\n      \"&cularr;\": \"↶\",\n      \"&cularrp;\": \"⤽\",\n      \"&cup;\": \"∪\",\n      \"&cupbrcap;\": \"⩈\",\n      \"&cupcap;\": \"⩆\",\n      \"&cupcup;\": \"⩊\",\n      \"&cupdot;\": \"⊍\",\n      \"&cupor;\": \"⩅\",\n      \"&cups;\": \"∪︀\",\n      \"&curarr;\": \"↷\",\n      \"&curarrm;\": \"⤼\",\n      \"&curlyeqprec;\": \"⋞\",\n      \"&curlyeqsucc;\": \"⋟\",\n      \"&curlyvee;\": \"⋎\",\n      \"&curlywedge;\": \"⋏\",\n      \"&curren\": \"¤\",\n      \"&curren;\": \"¤\",\n      \"&curvearrowleft;\": \"↶\",\n      \"&curvearrowright;\": \"↷\",\n      \"&cuvee;\": \"⋎\",\n      \"&cuwed;\": \"⋏\",\n      \"&cwconint;\": \"∲\",\n      \"&cwint;\": \"∱\",\n      \"&cylcty;\": \"⌭\",\n      \"&dArr;\": \"⇓\",\n      \"&dHar;\": \"⥥\",\n      \"&dagger;\": \"†\",\n      \"&daleth;\": \"ℸ\",\n      \"&darr;\": \"↓\",\n      \"&dash;\": \"‐\",\n      \"&dashv;\": \"⊣\",\n      \"&dbkarow;\": \"⤏\",\n      \"&dblac;\": \"˝\",\n      \"&dcaron;\": \"ď\",\n      \"&dcy;\": \"д\",\n      \"&dd;\": \"ⅆ\",\n      \"&ddagger;\": \"‡\",\n      \"&ddarr;\": \"⇊\",\n      \"&ddotseq;\": \"⩷\",\n      \"&deg\": \"°\",\n      \"&deg;\": \"°\",\n      \"&delta;\": \"δ\",\n      \"&demptyv;\": \"⦱\",\n      \"&dfisht;\": \"⥿\",\n      \"&dfr;\": \"𝔡\",\n      \"&dharl;\": \"⇃\",\n      \"&dharr;\": \"⇂\",\n      \"&diam;\": \"⋄\",\n      \"&diamond;\": \"⋄\",\n      \"&diamondsuit;\": \"♦\",\n      \"&diams;\": \"♦\",\n      \"&die;\": \"¨\",\n      \"&digamma;\": \"ϝ\",\n      \"&disin;\": \"⋲\",\n      \"&div;\": \"÷\",\n      \"&divide\": \"÷\",\n      \"&divide;\": \"÷\",\n      \"&divideontimes;\": \"⋇\",\n      \"&divonx;\": \"⋇\",\n      \"&djcy;\": \"ђ\",\n      \"&dlcorn;\": \"⌞\",\n      \"&dlcrop;\": \"⌍\",\n      \"&dollar;\": \"$\",\n      \"&dopf;\": \"𝕕\",\n      \"&dot;\": \"˙\",\n      \"&doteq;\": \"≐\",\n      \"&doteqdot;\": \"≑\",\n      \"&dotminus;\": \"∸\",\n      \"&dotplus;\": \"∔\",\n      \"&dotsquare;\": \"⊡\",\n      \"&doublebarwedge;\": \"⌆\",\n      \"&downarrow;\": \"↓\",\n      \"&downdownarrows;\": \"⇊\",\n      \"&downharpoonleft;\": \"⇃\",\n      \"&downharpoonright;\": \"⇂\",\n      \"&drbkarow;\": \"⤐\",\n      \"&drcorn;\": \"⌟\",\n      \"&drcrop;\": \"⌌\",\n      \"&dscr;\": \"𝒹\",\n      \"&dscy;\": \"ѕ\",\n      \"&dsol;\": \"⧶\",\n      \"&dstrok;\": \"đ\",\n      \"&dtdot;\": \"⋱\",\n      \"&dtri;\": \"▿\",\n      \"&dtrif;\": \"▾\",\n      \"&duarr;\": \"⇵\",\n      \"&duhar;\": \"⥯\",\n      \"&dwangle;\": \"⦦\",\n      \"&dzcy;\": \"џ\",\n      \"&dzigrarr;\": \"⟿\",\n      \"&eDDot;\": \"⩷\",\n      \"&eDot;\": \"≑\",\n      \"&eacute\": \"é\",\n      \"&eacute;\": \"é\",\n      \"&easter;\": \"⩮\",\n      \"&ecaron;\": \"ě\",\n      \"&ecir;\": \"≖\",\n      \"&ecirc\": \"ê\",\n      \"&ecirc;\": \"ê\",\n      \"&ecolon;\": \"≕\",\n      \"&ecy;\": \"э\",\n      \"&edot;\": \"ė\",\n      \"&ee;\": \"ⅇ\",\n      \"&efDot;\": \"≒\",\n      \"&efr;\": \"𝔢\",\n      \"&eg;\": \"⪚\",\n      \"&egrave\": \"è\",\n      \"&egrave;\": \"è\",\n      \"&egs;\": \"⪖\",\n      \"&egsdot;\": \"⪘\",\n      \"&el;\": \"⪙\",\n      \"&elinters;\": \"⏧\",\n      \"&ell;\": \"ℓ\",\n      \"&els;\": \"⪕\",\n      \"&elsdot;\": \"⪗\",\n      \"&emacr;\": \"ē\",\n      \"&empty;\": \"∅\",\n      \"&emptyset;\": \"∅\",\n      \"&emptyv;\": \"∅\",\n      \"&emsp13;\": \" \",\n      \"&emsp14;\": \" \",\n      \"&emsp;\": \" \",\n      \"&eng;\": \"ŋ\",\n      \"&ensp;\": \" \",\n      \"&eogon;\": \"ę\",\n      \"&eopf;\": \"𝕖\",\n      \"&epar;\": \"⋕\",\n      \"&eparsl;\": \"⧣\",\n      \"&eplus;\": \"⩱\",\n      \"&epsi;\": \"ε\",\n      \"&epsilon;\": \"ε\",\n      \"&epsiv;\": \"ϵ\",\n      \"&eqcirc;\": \"≖\",\n      \"&eqcolon;\": \"≕\",\n      \"&eqsim;\": \"≂\",\n      \"&eqslantgtr;\": \"⪖\",\n      \"&eqslantless;\": \"⪕\",\n      \"&equals;\": \"=\",\n      \"&equest;\": \"≟\",\n      \"&equiv;\": \"≡\",\n      \"&equivDD;\": \"⩸\",\n      \"&eqvparsl;\": \"⧥\",\n      \"&erDot;\": \"≓\",\n      \"&erarr;\": \"⥱\",\n      \"&escr;\": \"ℯ\",\n      \"&esdot;\": \"≐\",\n      \"&esim;\": \"≂\",\n      \"&eta;\": \"η\",\n      \"&eth\": \"ð\",\n      \"&eth;\": \"ð\",\n      \"&euml\": \"ë\",\n      \"&euml;\": \"ë\",\n      \"&euro;\": \"€\",\n      \"&excl;\": \"!\",\n      \"&exist;\": \"∃\",\n      \"&expectation;\": \"ℰ\",\n      \"&exponentiale;\": \"ⅇ\",\n      \"&fallingdotseq;\": \"≒\",\n      \"&fcy;\": \"ф\",\n      \"&female;\": \"♀\",\n      \"&ffilig;\": \"ﬃ\",\n      \"&fflig;\": \"ﬀ\",\n      \"&ffllig;\": \"ﬄ\",\n      \"&ffr;\": \"𝔣\",\n      \"&filig;\": \"ﬁ\",\n      \"&fjlig;\": \"fj\",\n      \"&flat;\": \"♭\",\n      \"&fllig;\": \"ﬂ\",\n      \"&fltns;\": \"▱\",\n      \"&fnof;\": \"ƒ\",\n      \"&fopf;\": \"𝕗\",\n      \"&forall;\": \"∀\",\n      \"&fork;\": \"⋔\",\n      \"&forkv;\": \"⫙\",\n      \"&fpartint;\": \"⨍\",\n      \"&frac12\": \"½\",\n      \"&frac12;\": \"½\",\n      \"&frac13;\": \"⅓\",\n      \"&frac14\": \"¼\",\n      \"&frac14;\": \"¼\",\n      \"&frac15;\": \"⅕\",\n      \"&frac16;\": \"⅙\",\n      \"&frac18;\": \"⅛\",\n      \"&frac23;\": \"⅔\",\n      \"&frac25;\": \"⅖\",\n      \"&frac34\": \"¾\",\n      \"&frac34;\": \"¾\",\n      \"&frac35;\": \"⅗\",\n      \"&frac38;\": \"⅜\",\n      \"&frac45;\": \"⅘\",\n      \"&frac56;\": \"⅚\",\n      \"&frac58;\": \"⅝\",\n      \"&frac78;\": \"⅞\",\n      \"&frasl;\": \"⁄\",\n      \"&frown;\": \"⌢\",\n      \"&fscr;\": \"𝒻\",\n      \"&gE;\": \"≧\",\n      \"&gEl;\": \"⪌\",\n      \"&gacute;\": \"ǵ\",\n      \"&gamma;\": \"γ\",\n      \"&gammad;\": \"ϝ\",\n      \"&gap;\": \"⪆\",\n      \"&gbreve;\": \"ğ\",\n      \"&gcirc;\": \"ĝ\",\n      \"&gcy;\": \"г\",\n      \"&gdot;\": \"ġ\",\n      \"&ge;\": \"≥\",\n      \"&gel;\": \"⋛\",\n      \"&geq;\": \"≥\",\n      \"&geqq;\": \"≧\",\n      \"&geqslant;\": \"⩾\",\n      \"&ges;\": \"⩾\",\n      \"&gescc;\": \"⪩\",\n      \"&gesdot;\": \"⪀\",\n      \"&gesdoto;\": \"⪂\",\n      \"&gesdotol;\": \"⪄\",\n      \"&gesl;\": \"⋛︀\",\n      \"&gesles;\": \"⪔\",\n      \"&gfr;\": \"𝔤\",\n      \"&gg;\": \"≫\",\n      \"&ggg;\": \"⋙\",\n      \"&gimel;\": \"ℷ\",\n      \"&gjcy;\": \"ѓ\",\n      \"&gl;\": \"≷\",\n      \"&glE;\": \"⪒\",\n      \"&gla;\": \"⪥\",\n      \"&glj;\": \"⪤\",\n      \"&gnE;\": \"≩\",\n      \"&gnap;\": \"⪊\",\n      \"&gnapprox;\": \"⪊\",\n      \"&gne;\": \"⪈\",\n      \"&gneq;\": \"⪈\",\n      \"&gneqq;\": \"≩\",\n      \"&gnsim;\": \"⋧\",\n      \"&gopf;\": \"𝕘\",\n      \"&grave;\": \"`\",\n      \"&gscr;\": \"ℊ\",\n      \"&gsim;\": \"≳\",\n      \"&gsime;\": \"⪎\",\n      \"&gsiml;\": \"⪐\",\n      \"&gt\": \">\",\n      \"&gt;\": \">\",\n      \"&gtcc;\": \"⪧\",\n      \"&gtcir;\": \"⩺\",\n      \"&gtdot;\": \"⋗\",\n      \"&gtlPar;\": \"⦕\",\n      \"&gtquest;\": \"⩼\",\n      \"&gtrapprox;\": \"⪆\",\n      \"&gtrarr;\": \"⥸\",\n      \"&gtrdot;\": \"⋗\",\n      \"&gtreqless;\": \"⋛\",\n      \"&gtreqqless;\": \"⪌\",\n      \"&gtrless;\": \"≷\",\n      \"&gtrsim;\": \"≳\",\n      \"&gvertneqq;\": \"≩︀\",\n      \"&gvnE;\": \"≩︀\",\n      \"&hArr;\": \"⇔\",\n      \"&hairsp;\": \" \",\n      \"&half;\": \"½\",\n      \"&hamilt;\": \"ℋ\",\n      \"&hardcy;\": \"ъ\",\n      \"&harr;\": \"↔\",\n      \"&harrcir;\": \"⥈\",\n      \"&harrw;\": \"↭\",\n      \"&hbar;\": \"ℏ\",\n      \"&hcirc;\": \"ĥ\",\n      \"&hearts;\": \"♥\",\n      \"&heartsuit;\": \"♥\",\n      \"&hellip;\": \"…\",\n      \"&hercon;\": \"⊹\",\n      \"&hfr;\": \"𝔥\",\n      \"&hksearow;\": \"⤥\",\n      \"&hkswarow;\": \"⤦\",\n      \"&hoarr;\": \"⇿\",\n      \"&homtht;\": \"∻\",\n      \"&hookleftarrow;\": \"↩\",\n      \"&hookrightarrow;\": \"↪\",\n      \"&hopf;\": \"𝕙\",\n      \"&horbar;\": \"―\",\n      \"&hscr;\": \"𝒽\",\n      \"&hslash;\": \"ℏ\",\n      \"&hstrok;\": \"ħ\",\n      \"&hybull;\": \"⁃\",\n      \"&hyphen;\": \"‐\",\n      \"&iacute\": \"í\",\n      \"&iacute;\": \"í\",\n      \"&ic;\": \"⁣\",\n      \"&icirc\": \"î\",\n      \"&icirc;\": \"î\",\n      \"&icy;\": \"и\",\n      \"&iecy;\": \"е\",\n      \"&iexcl\": \"¡\",\n      \"&iexcl;\": \"¡\",\n      \"&iff;\": \"⇔\",\n      \"&ifr;\": \"𝔦\",\n      \"&igrave\": \"ì\",\n      \"&igrave;\": \"ì\",\n      \"&ii;\": \"ⅈ\",\n      \"&iiiint;\": \"⨌\",\n      \"&iiint;\": \"∭\",\n      \"&iinfin;\": \"⧜\",\n      \"&iiota;\": \"℩\",\n      \"&ijlig;\": \"ĳ\",\n      \"&imacr;\": \"ī\",\n      \"&image;\": \"ℑ\",\n      \"&imagline;\": \"ℐ\",\n      \"&imagpart;\": \"ℑ\",\n      \"&imath;\": \"ı\",\n      \"&imof;\": \"⊷\",\n      \"&imped;\": \"Ƶ\",\n      \"&in;\": \"∈\",\n      \"&incare;\": \"℅\",\n      \"&infin;\": \"∞\",\n      \"&infintie;\": \"⧝\",\n      \"&inodot;\": \"ı\",\n      \"&int;\": \"∫\",\n      \"&intcal;\": \"⊺\",\n      \"&integers;\": \"ℤ\",\n      \"&intercal;\": \"⊺\",\n      \"&intlarhk;\": \"⨗\",\n      \"&intprod;\": \"⨼\",\n      \"&iocy;\": \"ё\",\n      \"&iogon;\": \"į\",\n      \"&iopf;\": \"𝕚\",\n      \"&iota;\": \"ι\",\n      \"&iprod;\": \"⨼\",\n      \"&iquest\": \"¿\",\n      \"&iquest;\": \"¿\",\n      \"&iscr;\": \"𝒾\",\n      \"&isin;\": \"∈\",\n      \"&isinE;\": \"⋹\",\n      \"&isindot;\": \"⋵\",\n      \"&isins;\": \"⋴\",\n      \"&isinsv;\": \"⋳\",\n      \"&isinv;\": \"∈\",\n      \"&it;\": \"⁢\",\n      \"&itilde;\": \"ĩ\",\n      \"&iukcy;\": \"і\",\n      \"&iuml\": \"ï\",\n      \"&iuml;\": \"ï\",\n      \"&jcirc;\": \"ĵ\",\n      \"&jcy;\": \"й\",\n      \"&jfr;\": \"𝔧\",\n      \"&jmath;\": \"ȷ\",\n      \"&jopf;\": \"𝕛\",\n      \"&jscr;\": \"𝒿\",\n      \"&jsercy;\": \"ј\",\n      \"&jukcy;\": \"є\",\n      \"&kappa;\": \"κ\",\n      \"&kappav;\": \"ϰ\",\n      \"&kcedil;\": \"ķ\",\n      \"&kcy;\": \"к\",\n      \"&kfr;\": \"𝔨\",\n      \"&kgreen;\": \"ĸ\",\n      \"&khcy;\": \"х\",\n      \"&kjcy;\": \"ќ\",\n      \"&kopf;\": \"𝕜\",\n      \"&kscr;\": \"𝓀\",\n      \"&lAarr;\": \"⇚\",\n      \"&lArr;\": \"⇐\",\n      \"&lAtail;\": \"⤛\",\n      \"&lBarr;\": \"⤎\",\n      \"&lE;\": \"≦\",\n      \"&lEg;\": \"⪋\",\n      \"&lHar;\": \"⥢\",\n      \"&lacute;\": \"ĺ\",\n      \"&laemptyv;\": \"⦴\",\n      \"&lagran;\": \"ℒ\",\n      \"&lambda;\": \"λ\",\n      \"&lang;\": \"⟨\",\n      \"&langd;\": \"⦑\",\n      \"&langle;\": \"⟨\",\n      \"&lap;\": \"⪅\",\n      \"&laquo\": \"«\",\n      \"&laquo;\": \"«\",\n      \"&larr;\": \"←\",\n      \"&larrb;\": \"⇤\",\n      \"&larrbfs;\": \"⤟\",\n      \"&larrfs;\": \"⤝\",\n      \"&larrhk;\": \"↩\",\n      \"&larrlp;\": \"↫\",\n      \"&larrpl;\": \"⤹\",\n      \"&larrsim;\": \"⥳\",\n      \"&larrtl;\": \"↢\",\n      \"&lat;\": \"⪫\",\n      \"&latail;\": \"⤙\",\n      \"&late;\": \"⪭\",\n      \"&lates;\": \"⪭︀\",\n      \"&lbarr;\": \"⤌\",\n      \"&lbbrk;\": \"❲\",\n      \"&lbrace;\": \"{\",\n      \"&lbrack;\": \"[\",\n      \"&lbrke;\": \"⦋\",\n      \"&lbrksld;\": \"⦏\",\n      \"&lbrkslu;\": \"⦍\",\n      \"&lcaron;\": \"ľ\",\n      \"&lcedil;\": \"ļ\",\n      \"&lceil;\": \"⌈\",\n      \"&lcub;\": \"{\",\n      \"&lcy;\": \"л\",\n      \"&ldca;\": \"⤶\",\n      \"&ldquo;\": \"“\",\n      \"&ldquor;\": \"„\",\n      \"&ldrdhar;\": \"⥧\",\n      \"&ldrushar;\": \"⥋\",\n      \"&ldsh;\": \"↲\",\n      \"&le;\": \"≤\",\n      \"&leftarrow;\": \"←\",\n      \"&leftarrowtail;\": \"↢\",\n      \"&leftharpoondown;\": \"↽\",\n      \"&leftharpoonup;\": \"↼\",\n      \"&leftleftarrows;\": \"⇇\",\n      \"&leftrightarrow;\": \"↔\",\n      \"&leftrightarrows;\": \"⇆\",\n      \"&leftrightharpoons;\": \"⇋\",\n      \"&leftrightsquigarrow;\": \"↭\",\n      \"&leftthreetimes;\": \"⋋\",\n      \"&leg;\": \"⋚\",\n      \"&leq;\": \"≤\",\n      \"&leqq;\": \"≦\",\n      \"&leqslant;\": \"⩽\",\n      \"&les;\": \"⩽\",\n      \"&lescc;\": \"⪨\",\n      \"&lesdot;\": \"⩿\",\n      \"&lesdoto;\": \"⪁\",\n      \"&lesdotor;\": \"⪃\",\n      \"&lesg;\": \"⋚︀\",\n      \"&lesges;\": \"⪓\",\n      \"&lessapprox;\": \"⪅\",\n      \"&lessdot;\": \"⋖\",\n      \"&lesseqgtr;\": \"⋚\",\n      \"&lesseqqgtr;\": \"⪋\",\n      \"&lessgtr;\": \"≶\",\n      \"&lesssim;\": \"≲\",\n      \"&lfisht;\": \"⥼\",\n      \"&lfloor;\": \"⌊\",\n      \"&lfr;\": \"𝔩\",\n      \"&lg;\": \"≶\",\n      \"&lgE;\": \"⪑\",\n      \"&lhard;\": \"↽\",\n      \"&lharu;\": \"↼\",\n      \"&lharul;\": \"⥪\",\n      \"&lhblk;\": \"▄\",\n      \"&ljcy;\": \"љ\",\n      \"&ll;\": \"≪\",\n      \"&llarr;\": \"⇇\",\n      \"&llcorner;\": \"⌞\",\n      \"&llhard;\": \"⥫\",\n      \"&lltri;\": \"◺\",\n      \"&lmidot;\": \"ŀ\",\n      \"&lmoust;\": \"⎰\",\n      \"&lmoustache;\": \"⎰\",\n      \"&lnE;\": \"≨\",\n      \"&lnap;\": \"⪉\",\n      \"&lnapprox;\": \"⪉\",\n      \"&lne;\": \"⪇\",\n      \"&lneq;\": \"⪇\",\n      \"&lneqq;\": \"≨\",\n      \"&lnsim;\": \"⋦\",\n      \"&loang;\": \"⟬\",\n      \"&loarr;\": \"⇽\",\n      \"&lobrk;\": \"⟦\",\n      \"&longleftarrow;\": \"⟵\",\n      \"&longleftrightarrow;\": \"⟷\",\n      \"&longmapsto;\": \"⟼\",\n      \"&longrightarrow;\": \"⟶\",\n      \"&looparrowleft;\": \"↫\",\n      \"&looparrowright;\": \"↬\",\n      \"&lopar;\": \"⦅\",\n      \"&lopf;\": \"𝕝\",\n      \"&loplus;\": \"⨭\",\n      \"&lotimes;\": \"⨴\",\n      \"&lowast;\": \"∗\",\n      \"&lowbar;\": \"_\",\n      \"&loz;\": \"◊\",\n      \"&lozenge;\": \"◊\",\n      \"&lozf;\": \"⧫\",\n      \"&lpar;\": \"(\",\n      \"&lparlt;\": \"⦓\",\n      \"&lrarr;\": \"⇆\",\n      \"&lrcorner;\": \"⌟\",\n      \"&lrhar;\": \"⇋\",\n      \"&lrhard;\": \"⥭\",\n      \"&lrm;\": \"‎\",\n      \"&lrtri;\": \"⊿\",\n      \"&lsaquo;\": \"‹\",\n      \"&lscr;\": \"𝓁\",\n      \"&lsh;\": \"↰\",\n      \"&lsim;\": \"≲\",\n      \"&lsime;\": \"⪍\",\n      \"&lsimg;\": \"⪏\",\n      \"&lsqb;\": \"[\",\n      \"&lsquo;\": \"‘\",\n      \"&lsquor;\": \"‚\",\n      \"&lstrok;\": \"ł\",\n      \"&lt\": \"<\",\n      \"&lt;\": \"<\",\n      \"&ltcc;\": \"⪦\",\n      \"&ltcir;\": \"⩹\",\n      \"&ltdot;\": \"⋖\",\n      \"&lthree;\": \"⋋\",\n      \"&ltimes;\": \"⋉\",\n      \"&ltlarr;\": \"⥶\",\n      \"&ltquest;\": \"⩻\",\n      \"&ltrPar;\": \"⦖\",\n      \"&ltri;\": \"◃\",\n      \"&ltrie;\": \"⊴\",\n      \"&ltrif;\": \"◂\",\n      \"&lurdshar;\": \"⥊\",\n      \"&luruhar;\": \"⥦\",\n      \"&lvertneqq;\": \"≨︀\",\n      \"&lvnE;\": \"≨︀\",\n      \"&mDDot;\": \"∺\",\n      \"&macr\": \"¯\",\n      \"&macr;\": \"¯\",\n      \"&male;\": \"♂\",\n      \"&malt;\": \"✠\",\n      \"&maltese;\": \"✠\",\n      \"&map;\": \"↦\",\n      \"&mapsto;\": \"↦\",\n      \"&mapstodown;\": \"↧\",\n      \"&mapstoleft;\": \"↤\",\n      \"&mapstoup;\": \"↥\",\n      \"&marker;\": \"▮\",\n      \"&mcomma;\": \"⨩\",\n      \"&mcy;\": \"м\",\n      \"&mdash;\": \"—\",\n      \"&measuredangle;\": \"∡\",\n      \"&mfr;\": \"𝔪\",\n      \"&mho;\": \"℧\",\n      \"&micro\": \"µ\",\n      \"&micro;\": \"µ\",\n      \"&mid;\": \"∣\",\n      \"&midast;\": \"*\",\n      \"&midcir;\": \"⫰\",\n      \"&middot\": \"·\",\n      \"&middot;\": \"·\",\n      \"&minus;\": \"−\",\n      \"&minusb;\": \"⊟\",\n      \"&minusd;\": \"∸\",\n      \"&minusdu;\": \"⨪\",\n      \"&mlcp;\": \"⫛\",\n      \"&mldr;\": \"…\",\n      \"&mnplus;\": \"∓\",\n      \"&models;\": \"⊧\",\n      \"&mopf;\": \"𝕞\",\n      \"&mp;\": \"∓\",\n      \"&mscr;\": \"𝓂\",\n      \"&mstpos;\": \"∾\",\n      \"&mu;\": \"μ\",\n      \"&multimap;\": \"⊸\",\n      \"&mumap;\": \"⊸\",\n      \"&nGg;\": \"⋙̸\",\n      \"&nGt;\": \"≫⃒\",\n      \"&nGtv;\": \"≫̸\",\n      \"&nLeftarrow;\": \"⇍\",\n      \"&nLeftrightarrow;\": \"⇎\",\n      \"&nLl;\": \"⋘̸\",\n      \"&nLt;\": \"≪⃒\",\n      \"&nLtv;\": \"≪̸\",\n      \"&nRightarrow;\": \"⇏\",\n      \"&nVDash;\": \"⊯\",\n      \"&nVdash;\": \"⊮\",\n      \"&nabla;\": \"∇\",\n      \"&nacute;\": \"ń\",\n      \"&nang;\": \"∠⃒\",\n      \"&nap;\": \"≉\",\n      \"&napE;\": \"⩰̸\",\n      \"&napid;\": \"≋̸\",\n      \"&napos;\": \"ŉ\",\n      \"&napprox;\": \"≉\",\n      \"&natur;\": \"♮\",\n      \"&natural;\": \"♮\",\n      \"&naturals;\": \"ℕ\",\n      \"&nbsp\": \" \",\n      \"&nbsp;\": \" \",\n      \"&nbump;\": \"≎̸\",\n      \"&nbumpe;\": \"≏̸\",\n      \"&ncap;\": \"⩃\",\n      \"&ncaron;\": \"ň\",\n      \"&ncedil;\": \"ņ\",\n      \"&ncong;\": \"≇\",\n      \"&ncongdot;\": \"⩭̸\",\n      \"&ncup;\": \"⩂\",\n      \"&ncy;\": \"н\",\n      \"&ndash;\": \"–\",\n      \"&ne;\": \"≠\",\n      \"&neArr;\": \"⇗\",\n      \"&nearhk;\": \"⤤\",\n      \"&nearr;\": \"↗\",\n      \"&nearrow;\": \"↗\",\n      \"&nedot;\": \"≐̸\",\n      \"&nequiv;\": \"≢\",\n      \"&nesear;\": \"⤨\",\n      \"&nesim;\": \"≂̸\",\n      \"&nexist;\": \"∄\",\n      \"&nexists;\": \"∄\",\n      \"&nfr;\": \"𝔫\",\n      \"&ngE;\": \"≧̸\",\n      \"&nge;\": \"≱\",\n      \"&ngeq;\": \"≱\",\n      \"&ngeqq;\": \"≧̸\",\n      \"&ngeqslant;\": \"⩾̸\",\n      \"&nges;\": \"⩾̸\",\n      \"&ngsim;\": \"≵\",\n      \"&ngt;\": \"≯\",\n      \"&ngtr;\": \"≯\",\n      \"&nhArr;\": \"⇎\",\n      \"&nharr;\": \"↮\",\n      \"&nhpar;\": \"⫲\",\n      \"&ni;\": \"∋\",\n      \"&nis;\": \"⋼\",\n      \"&nisd;\": \"⋺\",\n      \"&niv;\": \"∋\",\n      \"&njcy;\": \"њ\",\n      \"&nlArr;\": \"⇍\",\n      \"&nlE;\": \"≦̸\",\n      \"&nlarr;\": \"↚\",\n      \"&nldr;\": \"‥\",\n      \"&nle;\": \"≰\",\n      \"&nleftarrow;\": \"↚\",\n      \"&nleftrightarrow;\": \"↮\",\n      \"&nleq;\": \"≰\",\n      \"&nleqq;\": \"≦̸\",\n      \"&nleqslant;\": \"⩽̸\",\n      \"&nles;\": \"⩽̸\",\n      \"&nless;\": \"≮\",\n      \"&nlsim;\": \"≴\",\n      \"&nlt;\": \"≮\",\n      \"&nltri;\": \"⋪\",\n      \"&nltrie;\": \"⋬\",\n      \"&nmid;\": \"∤\",\n      \"&nopf;\": \"𝕟\",\n      \"&not\": \"¬\",\n      \"&not;\": \"¬\",\n      \"&notin;\": \"∉\",\n      \"&notinE;\": \"⋹̸\",\n      \"&notindot;\": \"⋵̸\",\n      \"&notinva;\": \"∉\",\n      \"&notinvb;\": \"⋷\",\n      \"&notinvc;\": \"⋶\",\n      \"&notni;\": \"∌\",\n      \"&notniva;\": \"∌\",\n      \"&notnivb;\": \"⋾\",\n      \"&notnivc;\": \"⋽\",\n      \"&npar;\": \"∦\",\n      \"&nparallel;\": \"∦\",\n      \"&nparsl;\": \"⫽⃥\",\n      \"&npart;\": \"∂̸\",\n      \"&npolint;\": \"⨔\",\n      \"&npr;\": \"⊀\",\n      \"&nprcue;\": \"⋠\",\n      \"&npre;\": \"⪯̸\",\n      \"&nprec;\": \"⊀\",\n      \"&npreceq;\": \"⪯̸\",\n      \"&nrArr;\": \"⇏\",\n      \"&nrarr;\": \"↛\",\n      \"&nrarrc;\": \"⤳̸\",\n      \"&nrarrw;\": \"↝̸\",\n      \"&nrightarrow;\": \"↛\",\n      \"&nrtri;\": \"⋫\",\n      \"&nrtrie;\": \"⋭\",\n      \"&nsc;\": \"⊁\",\n      \"&nsccue;\": \"⋡\",\n      \"&nsce;\": \"⪰̸\",\n      \"&nscr;\": \"𝓃\",\n      \"&nshortmid;\": \"∤\",\n      \"&nshortparallel;\": \"∦\",\n      \"&nsim;\": \"≁\",\n      \"&nsime;\": \"≄\",\n      \"&nsimeq;\": \"≄\",\n      \"&nsmid;\": \"∤\",\n      \"&nspar;\": \"∦\",\n      \"&nsqsube;\": \"⋢\",\n      \"&nsqsupe;\": \"⋣\",\n      \"&nsub;\": \"⊄\",\n      \"&nsubE;\": \"⫅̸\",\n      \"&nsube;\": \"⊈\",\n      \"&nsubset;\": \"⊂⃒\",\n      \"&nsubseteq;\": \"⊈\",\n      \"&nsubseteqq;\": \"⫅̸\",\n      \"&nsucc;\": \"⊁\",\n      \"&nsucceq;\": \"⪰̸\",\n      \"&nsup;\": \"⊅\",\n      \"&nsupE;\": \"⫆̸\",\n      \"&nsupe;\": \"⊉\",\n      \"&nsupset;\": \"⊃⃒\",\n      \"&nsupseteq;\": \"⊉\",\n      \"&nsupseteqq;\": \"⫆̸\",\n      \"&ntgl;\": \"≹\",\n      \"&ntilde\": \"ñ\",\n      \"&ntilde;\": \"ñ\",\n      \"&ntlg;\": \"≸\",\n      \"&ntriangleleft;\": \"⋪\",\n      \"&ntrianglelefteq;\": \"⋬\",\n      \"&ntriangleright;\": \"⋫\",\n      \"&ntrianglerighteq;\": \"⋭\",\n      \"&nu;\": \"ν\",\n      \"&num;\": \"#\",\n      \"&numero;\": \"№\",\n      \"&numsp;\": \" \",\n      \"&nvDash;\": \"⊭\",\n      \"&nvHarr;\": \"⤄\",\n      \"&nvap;\": \"≍⃒\",\n      \"&nvdash;\": \"⊬\",\n      \"&nvge;\": \"≥⃒\",\n      \"&nvgt;\": \">⃒\",\n      \"&nvinfin;\": \"⧞\",\n      \"&nvlArr;\": \"⤂\",\n      \"&nvle;\": \"≤⃒\",\n      \"&nvlt;\": \"<⃒\",\n      \"&nvltrie;\": \"⊴⃒\",\n      \"&nvrArr;\": \"⤃\",\n      \"&nvrtrie;\": \"⊵⃒\",\n      \"&nvsim;\": \"∼⃒\",\n      \"&nwArr;\": \"⇖\",\n      \"&nwarhk;\": \"⤣\",\n      \"&nwarr;\": \"↖\",\n      \"&nwarrow;\": \"↖\",\n      \"&nwnear;\": \"⤧\",\n      \"&oS;\": \"Ⓢ\",\n      \"&oacute\": \"ó\",\n      \"&oacute;\": \"ó\",\n      \"&oast;\": \"⊛\",\n      \"&ocir;\": \"⊚\",\n      \"&ocirc\": \"ô\",\n      \"&ocirc;\": \"ô\",\n      \"&ocy;\": \"о\",\n      \"&odash;\": \"⊝\",\n      \"&odblac;\": \"ő\",\n      \"&odiv;\": \"⨸\",\n      \"&odot;\": \"⊙\",\n      \"&odsold;\": \"⦼\",\n      \"&oelig;\": \"œ\",\n      \"&ofcir;\": \"⦿\",\n      \"&ofr;\": \"𝔬\",\n      \"&ogon;\": \"˛\",\n      \"&ograve\": \"ò\",\n      \"&ograve;\": \"ò\",\n      \"&ogt;\": \"⧁\",\n      \"&ohbar;\": \"⦵\",\n      \"&ohm;\": \"Ω\",\n      \"&oint;\": \"∮\",\n      \"&olarr;\": \"↺\",\n      \"&olcir;\": \"⦾\",\n      \"&olcross;\": \"⦻\",\n      \"&oline;\": \"‾\",\n      \"&olt;\": \"⧀\",\n      \"&omacr;\": \"ō\",\n      \"&omega;\": \"ω\",\n      \"&omicron;\": \"ο\",\n      \"&omid;\": \"⦶\",\n      \"&ominus;\": \"⊖\",\n      \"&oopf;\": \"𝕠\",\n      \"&opar;\": \"⦷\",\n      \"&operp;\": \"⦹\",\n      \"&oplus;\": \"⊕\",\n      \"&or;\": \"∨\",\n      \"&orarr;\": \"↻\",\n      \"&ord;\": \"⩝\",\n      \"&order;\": \"ℴ\",\n      \"&orderof;\": \"ℴ\",\n      \"&ordf\": \"ª\",\n      \"&ordf;\": \"ª\",\n      \"&ordm\": \"º\",\n      \"&ordm;\": \"º\",\n      \"&origof;\": \"⊶\",\n      \"&oror;\": \"⩖\",\n      \"&orslope;\": \"⩗\",\n      \"&orv;\": \"⩛\",\n      \"&oscr;\": \"ℴ\",\n      \"&oslash\": \"ø\",\n      \"&oslash;\": \"ø\",\n      \"&osol;\": \"⊘\",\n      \"&otilde\": \"õ\",\n      \"&otilde;\": \"õ\",\n      \"&otimes;\": \"⊗\",\n      \"&otimesas;\": \"⨶\",\n      \"&ouml\": \"ö\",\n      \"&ouml;\": \"ö\",\n      \"&ovbar;\": \"⌽\",\n      \"&par;\": \"∥\",\n      \"&para\": \"¶\",\n      \"&para;\": \"¶\",\n      \"&parallel;\": \"∥\",\n      \"&parsim;\": \"⫳\",\n      \"&parsl;\": \"⫽\",\n      \"&part;\": \"∂\",\n      \"&pcy;\": \"п\",\n      \"&percnt;\": \"%\",\n      \"&period;\": \".\",\n      \"&permil;\": \"‰\",\n      \"&perp;\": \"⊥\",\n      \"&pertenk;\": \"‱\",\n      \"&pfr;\": \"𝔭\",\n      \"&phi;\": \"φ\",\n      \"&phiv;\": \"ϕ\",\n      \"&phmmat;\": \"ℳ\",\n      \"&phone;\": \"☎\",\n      \"&pi;\": \"π\",\n      \"&pitchfork;\": \"⋔\",\n      \"&piv;\": \"ϖ\",\n      \"&planck;\": \"ℏ\",\n      \"&planckh;\": \"ℎ\",\n      \"&plankv;\": \"ℏ\",\n      \"&plus;\": \"+\",\n      \"&plusacir;\": \"⨣\",\n      \"&plusb;\": \"⊞\",\n      \"&pluscir;\": \"⨢\",\n      \"&plusdo;\": \"∔\",\n      \"&plusdu;\": \"⨥\",\n      \"&pluse;\": \"⩲\",\n      \"&plusmn\": \"±\",\n      \"&plusmn;\": \"±\",\n      \"&plussim;\": \"⨦\",\n      \"&plustwo;\": \"⨧\",\n      \"&pm;\": \"±\",\n      \"&pointint;\": \"⨕\",\n      \"&popf;\": \"𝕡\",\n      \"&pound\": \"£\",\n      \"&pound;\": \"£\",\n      \"&pr;\": \"≺\",\n      \"&prE;\": \"⪳\",\n      \"&prap;\": \"⪷\",\n      \"&prcue;\": \"≼\",\n      \"&pre;\": \"⪯\",\n      \"&prec;\": \"≺\",\n      \"&precapprox;\": \"⪷\",\n      \"&preccurlyeq;\": \"≼\",\n      \"&preceq;\": \"⪯\",\n      \"&precnapprox;\": \"⪹\",\n      \"&precneqq;\": \"⪵\",\n      \"&precnsim;\": \"⋨\",\n      \"&precsim;\": \"≾\",\n      \"&prime;\": \"′\",\n      \"&primes;\": \"ℙ\",\n      \"&prnE;\": \"⪵\",\n      \"&prnap;\": \"⪹\",\n      \"&prnsim;\": \"⋨\",\n      \"&prod;\": \"∏\",\n      \"&profalar;\": \"⌮\",\n      \"&profline;\": \"⌒\",\n      \"&profsurf;\": \"⌓\",\n      \"&prop;\": \"∝\",\n      \"&propto;\": \"∝\",\n      \"&prsim;\": \"≾\",\n      \"&prurel;\": \"⊰\",\n      \"&pscr;\": \"𝓅\",\n      \"&psi;\": \"ψ\",\n      \"&puncsp;\": \" \",\n      \"&qfr;\": \"𝔮\",\n      \"&qint;\": \"⨌\",\n      \"&qopf;\": \"𝕢\",\n      \"&qprime;\": \"⁗\",\n      \"&qscr;\": \"𝓆\",\n      \"&quaternions;\": \"ℍ\",\n      \"&quatint;\": \"⨖\",\n      \"&quest;\": \"?\",\n      \"&questeq;\": \"≟\",\n      \"&quot\": '\"',\n      \"&quot;\": '\"',\n      \"&rAarr;\": \"⇛\",\n      \"&rArr;\": \"⇒\",\n      \"&rAtail;\": \"⤜\",\n      \"&rBarr;\": \"⤏\",\n      \"&rHar;\": \"⥤\",\n      \"&race;\": \"∽̱\",\n      \"&racute;\": \"ŕ\",\n      \"&radic;\": \"√\",\n      \"&raemptyv;\": \"⦳\",\n      \"&rang;\": \"⟩\",\n      \"&rangd;\": \"⦒\",\n      \"&range;\": \"⦥\",\n      \"&rangle;\": \"⟩\",\n      \"&raquo\": \"»\",\n      \"&raquo;\": \"»\",\n      \"&rarr;\": \"→\",\n      \"&rarrap;\": \"⥵\",\n      \"&rarrb;\": \"⇥\",\n      \"&rarrbfs;\": \"⤠\",\n      \"&rarrc;\": \"⤳\",\n      \"&rarrfs;\": \"⤞\",\n      \"&rarrhk;\": \"↪\",\n      \"&rarrlp;\": \"↬\",\n      \"&rarrpl;\": \"⥅\",\n      \"&rarrsim;\": \"⥴\",\n      \"&rarrtl;\": \"↣\",\n      \"&rarrw;\": \"↝\",\n      \"&ratail;\": \"⤚\",\n      \"&ratio;\": \"∶\",\n      \"&rationals;\": \"ℚ\",\n      \"&rbarr;\": \"⤍\",\n      \"&rbbrk;\": \"❳\",\n      \"&rbrace;\": \"}\",\n      \"&rbrack;\": \"]\",\n      \"&rbrke;\": \"⦌\",\n      \"&rbrksld;\": \"⦎\",\n      \"&rbrkslu;\": \"⦐\",\n      \"&rcaron;\": \"ř\",\n      \"&rcedil;\": \"ŗ\",\n      \"&rceil;\": \"⌉\",\n      \"&rcub;\": \"}\",\n      \"&rcy;\": \"р\",\n      \"&rdca;\": \"⤷\",\n      \"&rdldhar;\": \"⥩\",\n      \"&rdquo;\": \"”\",\n      \"&rdquor;\": \"”\",\n      \"&rdsh;\": \"↳\",\n      \"&real;\": \"ℜ\",\n      \"&realine;\": \"ℛ\",\n      \"&realpart;\": \"ℜ\",\n      \"&reals;\": \"ℝ\",\n      \"&rect;\": \"▭\",\n      \"&reg\": \"®\",\n      \"&reg;\": \"®\",\n      \"&rfisht;\": \"⥽\",\n      \"&rfloor;\": \"⌋\",\n      \"&rfr;\": \"𝔯\",\n      \"&rhard;\": \"⇁\",\n      \"&rharu;\": \"⇀\",\n      \"&rharul;\": \"⥬\",\n      \"&rho;\": \"ρ\",\n      \"&rhov;\": \"ϱ\",\n      \"&rightarrow;\": \"→\",\n      \"&rightarrowtail;\": \"↣\",\n      \"&rightharpoondown;\": \"⇁\",\n      \"&rightharpoonup;\": \"⇀\",\n      \"&rightleftarrows;\": \"⇄\",\n      \"&rightleftharpoons;\": \"⇌\",\n      \"&rightrightarrows;\": \"⇉\",\n      \"&rightsquigarrow;\": \"↝\",\n      \"&rightthreetimes;\": \"⋌\",\n      \"&ring;\": \"˚\",\n      \"&risingdotseq;\": \"≓\",\n      \"&rlarr;\": \"⇄\",\n      \"&rlhar;\": \"⇌\",\n      \"&rlm;\": \"‏\",\n      \"&rmoust;\": \"⎱\",\n      \"&rmoustache;\": \"⎱\",\n      \"&rnmid;\": \"⫮\",\n      \"&roang;\": \"⟭\",\n      \"&roarr;\": \"⇾\",\n      \"&robrk;\": \"⟧\",\n      \"&ropar;\": \"⦆\",\n      \"&ropf;\": \"𝕣\",\n      \"&roplus;\": \"⨮\",\n      \"&rotimes;\": \"⨵\",\n      \"&rpar;\": \")\",\n      \"&rpargt;\": \"⦔\",\n      \"&rppolint;\": \"⨒\",\n      \"&rrarr;\": \"⇉\",\n      \"&rsaquo;\": \"›\",\n      \"&rscr;\": \"𝓇\",\n      \"&rsh;\": \"↱\",\n      \"&rsqb;\": \"]\",\n      \"&rsquo;\": \"’\",\n      \"&rsquor;\": \"’\",\n      \"&rthree;\": \"⋌\",\n      \"&rtimes;\": \"⋊\",\n      \"&rtri;\": \"▹\",\n      \"&rtrie;\": \"⊵\",\n      \"&rtrif;\": \"▸\",\n      \"&rtriltri;\": \"⧎\",\n      \"&ruluhar;\": \"⥨\",\n      \"&rx;\": \"℞\",\n      \"&sacute;\": \"ś\",\n      \"&sbquo;\": \"‚\",\n      \"&sc;\": \"≻\",\n      \"&scE;\": \"⪴\",\n      \"&scap;\": \"⪸\",\n      \"&scaron;\": \"š\",\n      \"&sccue;\": \"≽\",\n      \"&sce;\": \"⪰\",\n      \"&scedil;\": \"ş\",\n      \"&scirc;\": \"ŝ\",\n      \"&scnE;\": \"⪶\",\n      \"&scnap;\": \"⪺\",\n      \"&scnsim;\": \"⋩\",\n      \"&scpolint;\": \"⨓\",\n      \"&scsim;\": \"≿\",\n      \"&scy;\": \"с\",\n      \"&sdot;\": \"⋅\",\n      \"&sdotb;\": \"⊡\",\n      \"&sdote;\": \"⩦\",\n      \"&seArr;\": \"⇘\",\n      \"&searhk;\": \"⤥\",\n      \"&searr;\": \"↘\",\n      \"&searrow;\": \"↘\",\n      \"&sect\": \"§\",\n      \"&sect;\": \"§\",\n      \"&semi;\": \";\",\n      \"&seswar;\": \"⤩\",\n      \"&setminus;\": \"∖\",\n      \"&setmn;\": \"∖\",\n      \"&sext;\": \"✶\",\n      \"&sfr;\": \"𝔰\",\n      \"&sfrown;\": \"⌢\",\n      \"&sharp;\": \"♯\",\n      \"&shchcy;\": \"щ\",\n      \"&shcy;\": \"ш\",\n      \"&shortmid;\": \"∣\",\n      \"&shortparallel;\": \"∥\",\n      \"&shy\": \"­\",\n      \"&shy;\": \"­\",\n      \"&sigma;\": \"σ\",\n      \"&sigmaf;\": \"ς\",\n      \"&sigmav;\": \"ς\",\n      \"&sim;\": \"∼\",\n      \"&simdot;\": \"⩪\",\n      \"&sime;\": \"≃\",\n      \"&simeq;\": \"≃\",\n      \"&simg;\": \"⪞\",\n      \"&simgE;\": \"⪠\",\n      \"&siml;\": \"⪝\",\n      \"&simlE;\": \"⪟\",\n      \"&simne;\": \"≆\",\n      \"&simplus;\": \"⨤\",\n      \"&simrarr;\": \"⥲\",\n      \"&slarr;\": \"←\",\n      \"&smallsetminus;\": \"∖\",\n      \"&smashp;\": \"⨳\",\n      \"&smeparsl;\": \"⧤\",\n      \"&smid;\": \"∣\",\n      \"&smile;\": \"⌣\",\n      \"&smt;\": \"⪪\",\n      \"&smte;\": \"⪬\",\n      \"&smtes;\": \"⪬︀\",\n      \"&softcy;\": \"ь\",\n      \"&sol;\": \"/\",\n      \"&solb;\": \"⧄\",\n      \"&solbar;\": \"⌿\",\n      \"&sopf;\": \"𝕤\",\n      \"&spades;\": \"♠\",\n      \"&spadesuit;\": \"♠\",\n      \"&spar;\": \"∥\",\n      \"&sqcap;\": \"⊓\",\n      \"&sqcaps;\": \"⊓︀\",\n      \"&sqcup;\": \"⊔\",\n      \"&sqcups;\": \"⊔︀\",\n      \"&sqsub;\": \"⊏\",\n      \"&sqsube;\": \"⊑\",\n      \"&sqsubset;\": \"⊏\",\n      \"&sqsubseteq;\": \"⊑\",\n      \"&sqsup;\": \"⊐\",\n      \"&sqsupe;\": \"⊒\",\n      \"&sqsupset;\": \"⊐\",\n      \"&sqsupseteq;\": \"⊒\",\n      \"&squ;\": \"□\",\n      \"&square;\": \"□\",\n      \"&squarf;\": \"▪\",\n      \"&squf;\": \"▪\",\n      \"&srarr;\": \"→\",\n      \"&sscr;\": \"𝓈\",\n      \"&ssetmn;\": \"∖\",\n      \"&ssmile;\": \"⌣\",\n      \"&sstarf;\": \"⋆\",\n      \"&star;\": \"☆\",\n      \"&starf;\": \"★\",\n      \"&straightepsilon;\": \"ϵ\",\n      \"&straightphi;\": \"ϕ\",\n      \"&strns;\": \"¯\",\n      \"&sub;\": \"⊂\",\n      \"&subE;\": \"⫅\",\n      \"&subdot;\": \"⪽\",\n      \"&sube;\": \"⊆\",\n      \"&subedot;\": \"⫃\",\n      \"&submult;\": \"⫁\",\n      \"&subnE;\": \"⫋\",\n      \"&subne;\": \"⊊\",\n      \"&subplus;\": \"⪿\",\n      \"&subrarr;\": \"⥹\",\n      \"&subset;\": \"⊂\",\n      \"&subseteq;\": \"⊆\",\n      \"&subseteqq;\": \"⫅\",\n      \"&subsetneq;\": \"⊊\",\n      \"&subsetneqq;\": \"⫋\",\n      \"&subsim;\": \"⫇\",\n      \"&subsub;\": \"⫕\",\n      \"&subsup;\": \"⫓\",\n      \"&succ;\": \"≻\",\n      \"&succapprox;\": \"⪸\",\n      \"&succcurlyeq;\": \"≽\",\n      \"&succeq;\": \"⪰\",\n      \"&succnapprox;\": \"⪺\",\n      \"&succneqq;\": \"⪶\",\n      \"&succnsim;\": \"⋩\",\n      \"&succsim;\": \"≿\",\n      \"&sum;\": \"∑\",\n      \"&sung;\": \"♪\",\n      \"&sup1\": \"¹\",\n      \"&sup1;\": \"¹\",\n      \"&sup2\": \"²\",\n      \"&sup2;\": \"²\",\n      \"&sup3\": \"³\",\n      \"&sup3;\": \"³\",\n      \"&sup;\": \"⊃\",\n      \"&supE;\": \"⫆\",\n      \"&supdot;\": \"⪾\",\n      \"&supdsub;\": \"⫘\",\n      \"&supe;\": \"⊇\",\n      \"&supedot;\": \"⫄\",\n      \"&suphsol;\": \"⟉\",\n      \"&suphsub;\": \"⫗\",\n      \"&suplarr;\": \"⥻\",\n      \"&supmult;\": \"⫂\",\n      \"&supnE;\": \"⫌\",\n      \"&supne;\": \"⊋\",\n      \"&supplus;\": \"⫀\",\n      \"&supset;\": \"⊃\",\n      \"&supseteq;\": \"⊇\",\n      \"&supseteqq;\": \"⫆\",\n      \"&supsetneq;\": \"⊋\",\n      \"&supsetneqq;\": \"⫌\",\n      \"&supsim;\": \"⫈\",\n      \"&supsub;\": \"⫔\",\n      \"&supsup;\": \"⫖\",\n      \"&swArr;\": \"⇙\",\n      \"&swarhk;\": \"⤦\",\n      \"&swarr;\": \"↙\",\n      \"&swarrow;\": \"↙\",\n      \"&swnwar;\": \"⤪\",\n      \"&szlig\": \"ß\",\n      \"&szlig;\": \"ß\",\n      \"&target;\": \"⌖\",\n      \"&tau;\": \"τ\",\n      \"&tbrk;\": \"⎴\",\n      \"&tcaron;\": \"ť\",\n      \"&tcedil;\": \"ţ\",\n      \"&tcy;\": \"т\",\n      \"&tdot;\": \"⃛\",\n      \"&telrec;\": \"⌕\",\n      \"&tfr;\": \"𝔱\",\n      \"&there4;\": \"∴\",\n      \"&therefore;\": \"∴\",\n      \"&theta;\": \"θ\",\n      \"&thetasym;\": \"ϑ\",\n      \"&thetav;\": \"ϑ\",\n      \"&thickapprox;\": \"≈\",\n      \"&thicksim;\": \"∼\",\n      \"&thinsp;\": \" \",\n      \"&thkap;\": \"≈\",\n      \"&thksim;\": \"∼\",\n      \"&thorn\": \"þ\",\n      \"&thorn;\": \"þ\",\n      \"&tilde;\": \"˜\",\n      \"&times\": \"×\",\n      \"&times;\": \"×\",\n      \"&timesb;\": \"⊠\",\n      \"&timesbar;\": \"⨱\",\n      \"&timesd;\": \"⨰\",\n      \"&tint;\": \"∭\",\n      \"&toea;\": \"⤨\",\n      \"&top;\": \"⊤\",\n      \"&topbot;\": \"⌶\",\n      \"&topcir;\": \"⫱\",\n      \"&topf;\": \"𝕥\",\n      \"&topfork;\": \"⫚\",\n      \"&tosa;\": \"⤩\",\n      \"&tprime;\": \"‴\",\n      \"&trade;\": \"™\",\n      \"&triangle;\": \"▵\",\n      \"&triangledown;\": \"▿\",\n      \"&triangleleft;\": \"◃\",\n      \"&trianglelefteq;\": \"⊴\",\n      \"&triangleq;\": \"≜\",\n      \"&triangleright;\": \"▹\",\n      \"&trianglerighteq;\": \"⊵\",\n      \"&tridot;\": \"◬\",\n      \"&trie;\": \"≜\",\n      \"&triminus;\": \"⨺\",\n      \"&triplus;\": \"⨹\",\n      \"&trisb;\": \"⧍\",\n      \"&tritime;\": \"⨻\",\n      \"&trpezium;\": \"⏢\",\n      \"&tscr;\": \"𝓉\",\n      \"&tscy;\": \"ц\",\n      \"&tshcy;\": \"ћ\",\n      \"&tstrok;\": \"ŧ\",\n      \"&twixt;\": \"≬\",\n      \"&twoheadleftarrow;\": \"↞\",\n      \"&twoheadrightarrow;\": \"↠\",\n      \"&uArr;\": \"⇑\",\n      \"&uHar;\": \"⥣\",\n      \"&uacute\": \"ú\",\n      \"&uacute;\": \"ú\",\n      \"&uarr;\": \"↑\",\n      \"&ubrcy;\": \"ў\",\n      \"&ubreve;\": \"ŭ\",\n      \"&ucirc\": \"û\",\n      \"&ucirc;\": \"û\",\n      \"&ucy;\": \"у\",\n      \"&udarr;\": \"⇅\",\n      \"&udblac;\": \"ű\",\n      \"&udhar;\": \"⥮\",\n      \"&ufisht;\": \"⥾\",\n      \"&ufr;\": \"𝔲\",\n      \"&ugrave\": \"ù\",\n      \"&ugrave;\": \"ù\",\n      \"&uharl;\": \"↿\",\n      \"&uharr;\": \"↾\",\n      \"&uhblk;\": \"▀\",\n      \"&ulcorn;\": \"⌜\",\n      \"&ulcorner;\": \"⌜\",\n      \"&ulcrop;\": \"⌏\",\n      \"&ultri;\": \"◸\",\n      \"&umacr;\": \"ū\",\n      \"&uml\": \"¨\",\n      \"&uml;\": \"¨\",\n      \"&uogon;\": \"ų\",\n      \"&uopf;\": \"𝕦\",\n      \"&uparrow;\": \"↑\",\n      \"&updownarrow;\": \"↕\",\n      \"&upharpoonleft;\": \"↿\",\n      \"&upharpoonright;\": \"↾\",\n      \"&uplus;\": \"⊎\",\n      \"&upsi;\": \"υ\",\n      \"&upsih;\": \"ϒ\",\n      \"&upsilon;\": \"υ\",\n      \"&upuparrows;\": \"⇈\",\n      \"&urcorn;\": \"⌝\",\n      \"&urcorner;\": \"⌝\",\n      \"&urcrop;\": \"⌎\",\n      \"&uring;\": \"ů\",\n      \"&urtri;\": \"◹\",\n      \"&uscr;\": \"𝓊\",\n      \"&utdot;\": \"⋰\",\n      \"&utilde;\": \"ũ\",\n      \"&utri;\": \"▵\",\n      \"&utrif;\": \"▴\",\n      \"&uuarr;\": \"⇈\",\n      \"&uuml\": \"ü\",\n      \"&uuml;\": \"ü\",\n      \"&uwangle;\": \"⦧\",\n      \"&vArr;\": \"⇕\",\n      \"&vBar;\": \"⫨\",\n      \"&vBarv;\": \"⫩\",\n      \"&vDash;\": \"⊨\",\n      \"&vangrt;\": \"⦜\",\n      \"&varepsilon;\": \"ϵ\",\n      \"&varkappa;\": \"ϰ\",\n      \"&varnothing;\": \"∅\",\n      \"&varphi;\": \"ϕ\",\n      \"&varpi;\": \"ϖ\",\n      \"&varpropto;\": \"∝\",\n      \"&varr;\": \"↕\",\n      \"&varrho;\": \"ϱ\",\n      \"&varsigma;\": \"ς\",\n      \"&varsubsetneq;\": \"⊊︀\",\n      \"&varsubsetneqq;\": \"⫋︀\",\n      \"&varsupsetneq;\": \"⊋︀\",\n      \"&varsupsetneqq;\": \"⫌︀\",\n      \"&vartheta;\": \"ϑ\",\n      \"&vartriangleleft;\": \"⊲\",\n      \"&vartriangleright;\": \"⊳\",\n      \"&vcy;\": \"в\",\n      \"&vdash;\": \"⊢\",\n      \"&vee;\": \"∨\",\n      \"&veebar;\": \"⊻\",\n      \"&veeeq;\": \"≚\",\n      \"&vellip;\": \"⋮\",\n      \"&verbar;\": \"|\",\n      \"&vert;\": \"|\",\n      \"&vfr;\": \"𝔳\",\n      \"&vltri;\": \"⊲\",\n      \"&vnsub;\": \"⊂⃒\",\n      \"&vnsup;\": \"⊃⃒\",\n      \"&vopf;\": \"𝕧\",\n      \"&vprop;\": \"∝\",\n      \"&vrtri;\": \"⊳\",\n      \"&vscr;\": \"𝓋\",\n      \"&vsubnE;\": \"⫋︀\",\n      \"&vsubne;\": \"⊊︀\",\n      \"&vsupnE;\": \"⫌︀\",\n      \"&vsupne;\": \"⊋︀\",\n      \"&vzigzag;\": \"⦚\",\n      \"&wcirc;\": \"ŵ\",\n      \"&wedbar;\": \"⩟\",\n      \"&wedge;\": \"∧\",\n      \"&wedgeq;\": \"≙\",\n      \"&weierp;\": \"℘\",\n      \"&wfr;\": \"𝔴\",\n      \"&wopf;\": \"𝕨\",\n      \"&wp;\": \"℘\",\n      \"&wr;\": \"≀\",\n      \"&wreath;\": \"≀\",\n      \"&wscr;\": \"𝓌\",\n      \"&xcap;\": \"⋂\",\n      \"&xcirc;\": \"◯\",\n      \"&xcup;\": \"⋃\",\n      \"&xdtri;\": \"▽\",\n      \"&xfr;\": \"𝔵\",\n      \"&xhArr;\": \"⟺\",\n      \"&xharr;\": \"⟷\",\n      \"&xi;\": \"ξ\",\n      \"&xlArr;\": \"⟸\",\n      \"&xlarr;\": \"⟵\",\n      \"&xmap;\": \"⟼\",\n      \"&xnis;\": \"⋻\",\n      \"&xodot;\": \"⨀\",\n      \"&xopf;\": \"𝕩\",\n      \"&xoplus;\": \"⨁\",\n      \"&xotime;\": \"⨂\",\n      \"&xrArr;\": \"⟹\",\n      \"&xrarr;\": \"⟶\",\n      \"&xscr;\": \"𝓍\",\n      \"&xsqcup;\": \"⨆\",\n      \"&xuplus;\": \"⨄\",\n      \"&xutri;\": \"△\",\n      \"&xvee;\": \"⋁\",\n      \"&xwedge;\": \"⋀\",\n      \"&yacute\": \"ý\",\n      \"&yacute;\": \"ý\",\n      \"&yacy;\": \"я\",\n      \"&ycirc;\": \"ŷ\",\n      \"&ycy;\": \"ы\",\n      \"&yen\": \"¥\",\n      \"&yen;\": \"¥\",\n      \"&yfr;\": \"𝔶\",\n      \"&yicy;\": \"ї\",\n      \"&yopf;\": \"𝕪\",\n      \"&yscr;\": \"𝓎\",\n      \"&yucy;\": \"ю\",\n      \"&yuml\": \"ÿ\",\n      \"&yuml;\": \"ÿ\",\n      \"&zacute;\": \"ź\",\n      \"&zcaron;\": \"ž\",\n      \"&zcy;\": \"з\",\n      \"&zdot;\": \"ż\",\n      \"&zeetrf;\": \"ℨ\",\n      \"&zeta;\": \"ζ\",\n      \"&zfr;\": \"𝔷\",\n      \"&zhcy;\": \"ж\",\n      \"&zigrarr;\": \"⇝\",\n      \"&zopf;\": \"𝕫\",\n      \"&zscr;\": \"𝓏\",\n      \"&zwj;\": \"‍\",\n      \"&zwnj;\": \"‌\"\n    },\n    characters: {\n      \"Æ\": \"&AElig;\",\n      \"&\": \"&amp;\",\n      \"Á\": \"&Aacute;\",\n      \"Ă\": \"&Abreve;\",\n      \"Â\": \"&Acirc;\",\n      \"А\": \"&Acy;\",\n      \"𝔄\": \"&Afr;\",\n      \"À\": \"&Agrave;\",\n      \"Α\": \"&Alpha;\",\n      \"Ā\": \"&Amacr;\",\n      \"⩓\": \"&And;\",\n      \"Ą\": \"&Aogon;\",\n      \"𝔸\": \"&Aopf;\",\n      \"⁡\": \"&af;\",\n      \"Å\": \"&angst;\",\n      \"𝒜\": \"&Ascr;\",\n      \"≔\": \"&coloneq;\",\n      \"Ã\": \"&Atilde;\",\n      \"Ä\": \"&Auml;\",\n      \"∖\": \"&ssetmn;\",\n      \"⫧\": \"&Barv;\",\n      \"⌆\": \"&doublebarwedge;\",\n      \"Б\": \"&Bcy;\",\n      \"∵\": \"&because;\",\n      \"ℬ\": \"&bernou;\",\n      \"Β\": \"&Beta;\",\n      \"𝔅\": \"&Bfr;\",\n      \"𝔹\": \"&Bopf;\",\n      \"˘\": \"&breve;\",\n      \"≎\": \"&bump;\",\n      \"Ч\": \"&CHcy;\",\n      \"©\": \"&copy;\",\n      \"Ć\": \"&Cacute;\",\n      \"⋒\": \"&Cap;\",\n      \"ⅅ\": \"&DD;\",\n      \"ℭ\": \"&Cfr;\",\n      \"Č\": \"&Ccaron;\",\n      \"Ç\": \"&Ccedil;\",\n      \"Ĉ\": \"&Ccirc;\",\n      \"∰\": \"&Cconint;\",\n      \"Ċ\": \"&Cdot;\",\n      \"¸\": \"&cedil;\",\n      \"·\": \"&middot;\",\n      \"Χ\": \"&Chi;\",\n      \"⊙\": \"&odot;\",\n      \"⊖\": \"&ominus;\",\n      \"⊕\": \"&oplus;\",\n      \"⊗\": \"&otimes;\",\n      \"∲\": \"&cwconint;\",\n      \"”\": \"&rdquor;\",\n      \"’\": \"&rsquor;\",\n      \"∷\": \"&Proportion;\",\n      \"⩴\": \"&Colone;\",\n      \"≡\": \"&equiv;\",\n      \"∯\": \"&DoubleContourIntegral;\",\n      \"∮\": \"&oint;\",\n      \"ℂ\": \"&complexes;\",\n      \"∐\": \"&coprod;\",\n      \"∳\": \"&awconint;\",\n      \"⨯\": \"&Cross;\",\n      \"𝒞\": \"&Cscr;\",\n      \"⋓\": \"&Cup;\",\n      \"≍\": \"&asympeq;\",\n      \"⤑\": \"&DDotrahd;\",\n      \"Ђ\": \"&DJcy;\",\n      \"Ѕ\": \"&DScy;\",\n      \"Џ\": \"&DZcy;\",\n      \"‡\": \"&ddagger;\",\n      \"↡\": \"&Darr;\",\n      \"⫤\": \"&DoubleLeftTee;\",\n      \"Ď\": \"&Dcaron;\",\n      \"Д\": \"&Dcy;\",\n      \"∇\": \"&nabla;\",\n      \"Δ\": \"&Delta;\",\n      \"𝔇\": \"&Dfr;\",\n      \"´\": \"&acute;\",\n      \"˙\": \"&dot;\",\n      \"˝\": \"&dblac;\",\n      \"`\": \"&grave;\",\n      \"˜\": \"&tilde;\",\n      \"⋄\": \"&diamond;\",\n      \"ⅆ\": \"&dd;\",\n      \"𝔻\": \"&Dopf;\",\n      \"¨\": \"&uml;\",\n      \"⃜\": \"&DotDot;\",\n      \"≐\": \"&esdot;\",\n      \"⇓\": \"&dArr;\",\n      \"⇐\": \"&lArr;\",\n      \"⇔\": \"&iff;\",\n      \"⟸\": \"&xlArr;\",\n      \"⟺\": \"&xhArr;\",\n      \"⟹\": \"&xrArr;\",\n      \"⇒\": \"&rArr;\",\n      \"⊨\": \"&vDash;\",\n      \"⇑\": \"&uArr;\",\n      \"⇕\": \"&vArr;\",\n      \"∥\": \"&spar;\",\n      \"↓\": \"&downarrow;\",\n      \"⤓\": \"&DownArrowBar;\",\n      \"⇵\": \"&duarr;\",\n      \"̑\": \"&DownBreve;\",\n      \"⥐\": \"&DownLeftRightVector;\",\n      \"⥞\": \"&DownLeftTeeVector;\",\n      \"↽\": \"&lhard;\",\n      \"⥖\": \"&DownLeftVectorBar;\",\n      \"⥟\": \"&DownRightTeeVector;\",\n      \"⇁\": \"&rightharpoondown;\",\n      \"⥗\": \"&DownRightVectorBar;\",\n      \"⊤\": \"&top;\",\n      \"↧\": \"&mapstodown;\",\n      \"𝒟\": \"&Dscr;\",\n      \"Đ\": \"&Dstrok;\",\n      \"Ŋ\": \"&ENG;\",\n      \"Ð\": \"&ETH;\",\n      \"É\": \"&Eacute;\",\n      \"Ě\": \"&Ecaron;\",\n      \"Ê\": \"&Ecirc;\",\n      \"Э\": \"&Ecy;\",\n      \"Ė\": \"&Edot;\",\n      \"𝔈\": \"&Efr;\",\n      \"È\": \"&Egrave;\",\n      \"∈\": \"&isinv;\",\n      \"Ē\": \"&Emacr;\",\n      \"◻\": \"&EmptySmallSquare;\",\n      \"▫\": \"&EmptyVerySmallSquare;\",\n      \"Ę\": \"&Eogon;\",\n      \"𝔼\": \"&Eopf;\",\n      \"Ε\": \"&Epsilon;\",\n      \"⩵\": \"&Equal;\",\n      \"≂\": \"&esim;\",\n      \"⇌\": \"&rlhar;\",\n      \"ℰ\": \"&expectation;\",\n      \"⩳\": \"&Esim;\",\n      \"Η\": \"&Eta;\",\n      \"Ë\": \"&Euml;\",\n      \"∃\": \"&exist;\",\n      \"ⅇ\": \"&exponentiale;\",\n      \"Ф\": \"&Fcy;\",\n      \"𝔉\": \"&Ffr;\",\n      \"◼\": \"&FilledSmallSquare;\",\n      \"▪\": \"&squf;\",\n      \"𝔽\": \"&Fopf;\",\n      \"∀\": \"&forall;\",\n      \"ℱ\": \"&Fscr;\",\n      \"Ѓ\": \"&GJcy;\",\n      \">\": \"&gt;\",\n      \"Γ\": \"&Gamma;\",\n      \"Ϝ\": \"&Gammad;\",\n      \"Ğ\": \"&Gbreve;\",\n      \"Ģ\": \"&Gcedil;\",\n      \"Ĝ\": \"&Gcirc;\",\n      \"Г\": \"&Gcy;\",\n      \"Ġ\": \"&Gdot;\",\n      \"𝔊\": \"&Gfr;\",\n      \"⋙\": \"&ggg;\",\n      \"𝔾\": \"&Gopf;\",\n      \"≥\": \"&geq;\",\n      \"⋛\": \"&gtreqless;\",\n      \"≧\": \"&geqq;\",\n      \"⪢\": \"&GreaterGreater;\",\n      \"≷\": \"&gtrless;\",\n      \"⩾\": \"&ges;\",\n      \"≳\": \"&gtrsim;\",\n      \"𝒢\": \"&Gscr;\",\n      \"≫\": \"&gg;\",\n      \"Ъ\": \"&HARDcy;\",\n      \"ˇ\": \"&caron;\",\n      \"^\": \"&Hat;\",\n      \"Ĥ\": \"&Hcirc;\",\n      \"ℌ\": \"&Poincareplane;\",\n      \"ℋ\": \"&hamilt;\",\n      \"ℍ\": \"&quaternions;\",\n      \"─\": \"&boxh;\",\n      \"Ħ\": \"&Hstrok;\",\n      \"≏\": \"&bumpeq;\",\n      \"Е\": \"&IEcy;\",\n      \"Ĳ\": \"&IJlig;\",\n      \"Ё\": \"&IOcy;\",\n      \"Í\": \"&Iacute;\",\n      \"Î\": \"&Icirc;\",\n      \"И\": \"&Icy;\",\n      \"İ\": \"&Idot;\",\n      \"ℑ\": \"&imagpart;\",\n      \"Ì\": \"&Igrave;\",\n      \"Ī\": \"&Imacr;\",\n      \"ⅈ\": \"&ii;\",\n      \"∬\": \"&Int;\",\n      \"∫\": \"&int;\",\n      \"⋂\": \"&xcap;\",\n      \"⁣\": \"&ic;\",\n      \"⁢\": \"&it;\",\n      \"Į\": \"&Iogon;\",\n      \"𝕀\": \"&Iopf;\",\n      \"Ι\": \"&Iota;\",\n      \"ℐ\": \"&imagline;\",\n      \"Ĩ\": \"&Itilde;\",\n      \"І\": \"&Iukcy;\",\n      \"Ï\": \"&Iuml;\",\n      \"Ĵ\": \"&Jcirc;\",\n      \"Й\": \"&Jcy;\",\n      \"𝔍\": \"&Jfr;\",\n      \"𝕁\": \"&Jopf;\",\n      \"𝒥\": \"&Jscr;\",\n      \"Ј\": \"&Jsercy;\",\n      \"Є\": \"&Jukcy;\",\n      \"Х\": \"&KHcy;\",\n      \"Ќ\": \"&KJcy;\",\n      \"Κ\": \"&Kappa;\",\n      \"Ķ\": \"&Kcedil;\",\n      \"К\": \"&Kcy;\",\n      \"𝔎\": \"&Kfr;\",\n      \"𝕂\": \"&Kopf;\",\n      \"𝒦\": \"&Kscr;\",\n      \"Љ\": \"&LJcy;\",\n      \"<\": \"&lt;\",\n      \"Ĺ\": \"&Lacute;\",\n      \"Λ\": \"&Lambda;\",\n      \"⟪\": \"&Lang;\",\n      \"ℒ\": \"&lagran;\",\n      \"↞\": \"&twoheadleftarrow;\",\n      \"Ľ\": \"&Lcaron;\",\n      \"Ļ\": \"&Lcedil;\",\n      \"Л\": \"&Lcy;\",\n      \"⟨\": \"&langle;\",\n      \"←\": \"&slarr;\",\n      \"⇤\": \"&larrb;\",\n      \"⇆\": \"&lrarr;\",\n      \"⌈\": \"&lceil;\",\n      \"⟦\": \"&lobrk;\",\n      \"⥡\": \"&LeftDownTeeVector;\",\n      \"⇃\": \"&downharpoonleft;\",\n      \"⥙\": \"&LeftDownVectorBar;\",\n      \"⌊\": \"&lfloor;\",\n      \"↔\": \"&leftrightarrow;\",\n      \"⥎\": \"&LeftRightVector;\",\n      \"⊣\": \"&dashv;\",\n      \"↤\": \"&mapstoleft;\",\n      \"⥚\": \"&LeftTeeVector;\",\n      \"⊲\": \"&vltri;\",\n      \"⧏\": \"&LeftTriangleBar;\",\n      \"⊴\": \"&trianglelefteq;\",\n      \"⥑\": \"&LeftUpDownVector;\",\n      \"⥠\": \"&LeftUpTeeVector;\",\n      \"↿\": \"&upharpoonleft;\",\n      \"⥘\": \"&LeftUpVectorBar;\",\n      \"↼\": \"&lharu;\",\n      \"⥒\": \"&LeftVectorBar;\",\n      \"⋚\": \"&lesseqgtr;\",\n      \"≦\": \"&leqq;\",\n      \"≶\": \"&lg;\",\n      \"⪡\": \"&LessLess;\",\n      \"⩽\": \"&les;\",\n      \"≲\": \"&lsim;\",\n      \"𝔏\": \"&Lfr;\",\n      \"⋘\": \"&Ll;\",\n      \"⇚\": \"&lAarr;\",\n      \"Ŀ\": \"&Lmidot;\",\n      \"⟵\": \"&xlarr;\",\n      \"⟷\": \"&xharr;\",\n      \"⟶\": \"&xrarr;\",\n      \"𝕃\": \"&Lopf;\",\n      \"↙\": \"&swarrow;\",\n      \"↘\": \"&searrow;\",\n      \"↰\": \"&lsh;\",\n      \"Ł\": \"&Lstrok;\",\n      \"≪\": \"&ll;\",\n      \"⤅\": \"&Map;\",\n      \"М\": \"&Mcy;\",\n      \" \": \"&MediumSpace;\",\n      \"ℳ\": \"&phmmat;\",\n      \"𝔐\": \"&Mfr;\",\n      \"∓\": \"&mp;\",\n      \"𝕄\": \"&Mopf;\",\n      \"Μ\": \"&Mu;\",\n      \"Њ\": \"&NJcy;\",\n      \"Ń\": \"&Nacute;\",\n      \"Ň\": \"&Ncaron;\",\n      \"Ņ\": \"&Ncedil;\",\n      \"Н\": \"&Ncy;\",\n      \"​\": \"&ZeroWidthSpace;\",\n      \"\\n\": \"&NewLine;\",\n      \"𝔑\": \"&Nfr;\",\n      \"⁠\": \"&NoBreak;\",\n      \" \": \"&nbsp;\",\n      \"ℕ\": \"&naturals;\",\n      \"⫬\": \"&Not;\",\n      \"≢\": \"&nequiv;\",\n      \"≭\": \"&NotCupCap;\",\n      \"∦\": \"&nspar;\",\n      \"∉\": \"&notinva;\",\n      \"≠\": \"&ne;\",\n      \"≂̸\": \"&nesim;\",\n      \"∄\": \"&nexists;\",\n      \"≯\": \"&ngtr;\",\n      \"≱\": \"&ngeq;\",\n      \"≧̸\": \"&ngeqq;\",\n      \"≫̸\": \"&nGtv;\",\n      \"≹\": \"&ntgl;\",\n      \"⩾̸\": \"&nges;\",\n      \"≵\": \"&ngsim;\",\n      \"≎̸\": \"&nbump;\",\n      \"≏̸\": \"&nbumpe;\",\n      \"⋪\": \"&ntriangleleft;\",\n      \"⧏̸\": \"&NotLeftTriangleBar;\",\n      \"⋬\": \"&ntrianglelefteq;\",\n      \"≮\": \"&nlt;\",\n      \"≰\": \"&nleq;\",\n      \"≸\": \"&ntlg;\",\n      \"≪̸\": \"&nLtv;\",\n      \"⩽̸\": \"&nles;\",\n      \"≴\": \"&nlsim;\",\n      \"⪢̸\": \"&NotNestedGreaterGreater;\",\n      \"⪡̸\": \"&NotNestedLessLess;\",\n      \"⊀\": \"&nprec;\",\n      \"⪯̸\": \"&npreceq;\",\n      \"⋠\": \"&nprcue;\",\n      \"∌\": \"&notniva;\",\n      \"⋫\": \"&ntriangleright;\",\n      \"⧐̸\": \"&NotRightTriangleBar;\",\n      \"⋭\": \"&ntrianglerighteq;\",\n      \"⊏̸\": \"&NotSquareSubset;\",\n      \"⋢\": \"&nsqsube;\",\n      \"⊐̸\": \"&NotSquareSuperset;\",\n      \"⋣\": \"&nsqsupe;\",\n      \"⊂⃒\": \"&vnsub;\",\n      \"⊈\": \"&nsubseteq;\",\n      \"⊁\": \"&nsucc;\",\n      \"⪰̸\": \"&nsucceq;\",\n      \"⋡\": \"&nsccue;\",\n      \"≿̸\": \"&NotSucceedsTilde;\",\n      \"⊃⃒\": \"&vnsup;\",\n      \"⊉\": \"&nsupseteq;\",\n      \"≁\": \"&nsim;\",\n      \"≄\": \"&nsimeq;\",\n      \"≇\": \"&ncong;\",\n      \"≉\": \"&napprox;\",\n      \"∤\": \"&nsmid;\",\n      \"𝒩\": \"&Nscr;\",\n      \"Ñ\": \"&Ntilde;\",\n      \"Ν\": \"&Nu;\",\n      \"Œ\": \"&OElig;\",\n      \"Ó\": \"&Oacute;\",\n      \"Ô\": \"&Ocirc;\",\n      \"О\": \"&Ocy;\",\n      \"Ő\": \"&Odblac;\",\n      \"𝔒\": \"&Ofr;\",\n      \"Ò\": \"&Ograve;\",\n      \"Ō\": \"&Omacr;\",\n      \"Ω\": \"&ohm;\",\n      \"Ο\": \"&Omicron;\",\n      \"𝕆\": \"&Oopf;\",\n      \"“\": \"&ldquo;\",\n      \"‘\": \"&lsquo;\",\n      \"⩔\": \"&Or;\",\n      \"𝒪\": \"&Oscr;\",\n      \"Ø\": \"&Oslash;\",\n      \"Õ\": \"&Otilde;\",\n      \"⨷\": \"&Otimes;\",\n      \"Ö\": \"&Ouml;\",\n      \"‾\": \"&oline;\",\n      \"⏞\": \"&OverBrace;\",\n      \"⎴\": \"&tbrk;\",\n      \"⏜\": \"&OverParenthesis;\",\n      \"∂\": \"&part;\",\n      \"П\": \"&Pcy;\",\n      \"𝔓\": \"&Pfr;\",\n      \"Φ\": \"&Phi;\",\n      \"Π\": \"&Pi;\",\n      \"±\": \"&pm;\",\n      \"ℙ\": \"&primes;\",\n      \"⪻\": \"&Pr;\",\n      \"≺\": \"&prec;\",\n      \"⪯\": \"&preceq;\",\n      \"≼\": \"&preccurlyeq;\",\n      \"≾\": \"&prsim;\",\n      \"″\": \"&Prime;\",\n      \"∏\": \"&prod;\",\n      \"∝\": \"&vprop;\",\n      \"𝒫\": \"&Pscr;\",\n      \"Ψ\": \"&Psi;\",\n      '\"': \"&quot;\",\n      \"𝔔\": \"&Qfr;\",\n      \"ℚ\": \"&rationals;\",\n      \"𝒬\": \"&Qscr;\",\n      \"⤐\": \"&drbkarow;\",\n      \"®\": \"&reg;\",\n      \"Ŕ\": \"&Racute;\",\n      \"⟫\": \"&Rang;\",\n      \"↠\": \"&twoheadrightarrow;\",\n      \"⤖\": \"&Rarrtl;\",\n      \"Ř\": \"&Rcaron;\",\n      \"Ŗ\": \"&Rcedil;\",\n      \"Р\": \"&Rcy;\",\n      \"ℜ\": \"&realpart;\",\n      \"∋\": \"&niv;\",\n      \"⇋\": \"&lrhar;\",\n      \"⥯\": \"&duhar;\",\n      \"Ρ\": \"&Rho;\",\n      \"⟩\": \"&rangle;\",\n      \"→\": \"&srarr;\",\n      \"⇥\": \"&rarrb;\",\n      \"⇄\": \"&rlarr;\",\n      \"⌉\": \"&rceil;\",\n      \"⟧\": \"&robrk;\",\n      \"⥝\": \"&RightDownTeeVector;\",\n      \"⇂\": \"&downharpoonright;\",\n      \"⥕\": \"&RightDownVectorBar;\",\n      \"⌋\": \"&rfloor;\",\n      \"⊢\": \"&vdash;\",\n      \"↦\": \"&mapsto;\",\n      \"⥛\": \"&RightTeeVector;\",\n      \"⊳\": \"&vrtri;\",\n      \"⧐\": \"&RightTriangleBar;\",\n      \"⊵\": \"&trianglerighteq;\",\n      \"⥏\": \"&RightUpDownVector;\",\n      \"⥜\": \"&RightUpTeeVector;\",\n      \"↾\": \"&upharpoonright;\",\n      \"⥔\": \"&RightUpVectorBar;\",\n      \"⇀\": \"&rightharpoonup;\",\n      \"⥓\": \"&RightVectorBar;\",\n      \"ℝ\": \"&reals;\",\n      \"⥰\": \"&RoundImplies;\",\n      \"⇛\": \"&rAarr;\",\n      \"ℛ\": \"&realine;\",\n      \"↱\": \"&rsh;\",\n      \"⧴\": \"&RuleDelayed;\",\n      \"Щ\": \"&SHCHcy;\",\n      \"Ш\": \"&SHcy;\",\n      \"Ь\": \"&SOFTcy;\",\n      \"Ś\": \"&Sacute;\",\n      \"⪼\": \"&Sc;\",\n      \"Š\": \"&Scaron;\",\n      \"Ş\": \"&Scedil;\",\n      \"Ŝ\": \"&Scirc;\",\n      \"С\": \"&Scy;\",\n      \"𝔖\": \"&Sfr;\",\n      \"↑\": \"&uparrow;\",\n      \"Σ\": \"&Sigma;\",\n      \"∘\": \"&compfn;\",\n      \"𝕊\": \"&Sopf;\",\n      \"√\": \"&radic;\",\n      \"□\": \"&square;\",\n      \"⊓\": \"&sqcap;\",\n      \"⊏\": \"&sqsubset;\",\n      \"⊑\": \"&sqsubseteq;\",\n      \"⊐\": \"&sqsupset;\",\n      \"⊒\": \"&sqsupseteq;\",\n      \"⊔\": \"&sqcup;\",\n      \"𝒮\": \"&Sscr;\",\n      \"⋆\": \"&sstarf;\",\n      \"⋐\": \"&Subset;\",\n      \"⊆\": \"&subseteq;\",\n      \"≻\": \"&succ;\",\n      \"⪰\": \"&succeq;\",\n      \"≽\": \"&succcurlyeq;\",\n      \"≿\": \"&succsim;\",\n      \"∑\": \"&sum;\",\n      \"⋑\": \"&Supset;\",\n      \"⊃\": \"&supset;\",\n      \"⊇\": \"&supseteq;\",\n      \"Þ\": \"&THORN;\",\n      \"™\": \"&trade;\",\n      \"Ћ\": \"&TSHcy;\",\n      \"Ц\": \"&TScy;\",\n      \"\\t\": \"&Tab;\",\n      \"Τ\": \"&Tau;\",\n      \"Ť\": \"&Tcaron;\",\n      \"Ţ\": \"&Tcedil;\",\n      \"Т\": \"&Tcy;\",\n      \"𝔗\": \"&Tfr;\",\n      \"∴\": \"&therefore;\",\n      \"Θ\": \"&Theta;\",\n      \"  \": \"&ThickSpace;\",\n      \" \": \"&thinsp;\",\n      \"∼\": \"&thksim;\",\n      \"≃\": \"&simeq;\",\n      \"≅\": \"&cong;\",\n      \"≈\": \"&thkap;\",\n      \"𝕋\": \"&Topf;\",\n      \"⃛\": \"&tdot;\",\n      \"𝒯\": \"&Tscr;\",\n      \"Ŧ\": \"&Tstrok;\",\n      \"Ú\": \"&Uacute;\",\n      \"↟\": \"&Uarr;\",\n      \"⥉\": \"&Uarrocir;\",\n      \"Ў\": \"&Ubrcy;\",\n      \"Ŭ\": \"&Ubreve;\",\n      \"Û\": \"&Ucirc;\",\n      \"У\": \"&Ucy;\",\n      \"Ű\": \"&Udblac;\",\n      \"𝔘\": \"&Ufr;\",\n      \"Ù\": \"&Ugrave;\",\n      \"Ū\": \"&Umacr;\",\n      _: \"&lowbar;\",\n      \"⏟\": \"&UnderBrace;\",\n      \"⎵\": \"&bbrk;\",\n      \"⏝\": \"&UnderParenthesis;\",\n      \"⋃\": \"&xcup;\",\n      \"⊎\": \"&uplus;\",\n      \"Ų\": \"&Uogon;\",\n      \"𝕌\": \"&Uopf;\",\n      \"⤒\": \"&UpArrowBar;\",\n      \"⇅\": \"&udarr;\",\n      \"↕\": \"&varr;\",\n      \"⥮\": \"&udhar;\",\n      \"⊥\": \"&perp;\",\n      \"↥\": \"&mapstoup;\",\n      \"↖\": \"&nwarrow;\",\n      \"↗\": \"&nearrow;\",\n      \"ϒ\": \"&upsih;\",\n      \"Υ\": \"&Upsilon;\",\n      \"Ů\": \"&Uring;\",\n      \"𝒰\": \"&Uscr;\",\n      \"Ũ\": \"&Utilde;\",\n      \"Ü\": \"&Uuml;\",\n      \"⊫\": \"&VDash;\",\n      \"⫫\": \"&Vbar;\",\n      \"В\": \"&Vcy;\",\n      \"⊩\": \"&Vdash;\",\n      \"⫦\": \"&Vdashl;\",\n      \"⋁\": \"&xvee;\",\n      \"‖\": \"&Vert;\",\n      \"∣\": \"&smid;\",\n      \"|\": \"&vert;\",\n      \"❘\": \"&VerticalSeparator;\",\n      \"≀\": \"&wreath;\",\n      \" \": \"&hairsp;\",\n      \"𝔙\": \"&Vfr;\",\n      \"𝕍\": \"&Vopf;\",\n      \"𝒱\": \"&Vscr;\",\n      \"⊪\": \"&Vvdash;\",\n      \"Ŵ\": \"&Wcirc;\",\n      \"⋀\": \"&xwedge;\",\n      \"𝔚\": \"&Wfr;\",\n      \"𝕎\": \"&Wopf;\",\n      \"𝒲\": \"&Wscr;\",\n      \"𝔛\": \"&Xfr;\",\n      \"Ξ\": \"&Xi;\",\n      \"𝕏\": \"&Xopf;\",\n      \"𝒳\": \"&Xscr;\",\n      \"Я\": \"&YAcy;\",\n      \"Ї\": \"&YIcy;\",\n      \"Ю\": \"&YUcy;\",\n      \"Ý\": \"&Yacute;\",\n      \"Ŷ\": \"&Ycirc;\",\n      \"Ы\": \"&Ycy;\",\n      \"𝔜\": \"&Yfr;\",\n      \"𝕐\": \"&Yopf;\",\n      \"𝒴\": \"&Yscr;\",\n      \"Ÿ\": \"&Yuml;\",\n      \"Ж\": \"&ZHcy;\",\n      \"Ź\": \"&Zacute;\",\n      \"Ž\": \"&Zcaron;\",\n      \"З\": \"&Zcy;\",\n      \"Ż\": \"&Zdot;\",\n      \"Ζ\": \"&Zeta;\",\n      \"ℨ\": \"&zeetrf;\",\n      \"ℤ\": \"&integers;\",\n      \"𝒵\": \"&Zscr;\",\n      \"á\": \"&aacute;\",\n      \"ă\": \"&abreve;\",\n      \"∾\": \"&mstpos;\",\n      \"∾̳\": \"&acE;\",\n      \"∿\": \"&acd;\",\n      \"â\": \"&acirc;\",\n      \"а\": \"&acy;\",\n      \"æ\": \"&aelig;\",\n      \"𝔞\": \"&afr;\",\n      \"à\": \"&agrave;\",\n      \"ℵ\": \"&aleph;\",\n      \"α\": \"&alpha;\",\n      \"ā\": \"&amacr;\",\n      \"⨿\": \"&amalg;\",\n      \"∧\": \"&wedge;\",\n      \"⩕\": \"&andand;\",\n      \"⩜\": \"&andd;\",\n      \"⩘\": \"&andslope;\",\n      \"⩚\": \"&andv;\",\n      \"∠\": \"&angle;\",\n      \"⦤\": \"&ange;\",\n      \"∡\": \"&measuredangle;\",\n      \"⦨\": \"&angmsdaa;\",\n      \"⦩\": \"&angmsdab;\",\n      \"⦪\": \"&angmsdac;\",\n      \"⦫\": \"&angmsdad;\",\n      \"⦬\": \"&angmsdae;\",\n      \"⦭\": \"&angmsdaf;\",\n      \"⦮\": \"&angmsdag;\",\n      \"⦯\": \"&angmsdah;\",\n      \"∟\": \"&angrt;\",\n      \"⊾\": \"&angrtvb;\",\n      \"⦝\": \"&angrtvbd;\",\n      \"∢\": \"&angsph;\",\n      \"⍼\": \"&angzarr;\",\n      \"ą\": \"&aogon;\",\n      \"𝕒\": \"&aopf;\",\n      \"⩰\": \"&apE;\",\n      \"⩯\": \"&apacir;\",\n      \"≊\": \"&approxeq;\",\n      \"≋\": \"&apid;\",\n      \"'\": \"&apos;\",\n      \"å\": \"&aring;\",\n      \"𝒶\": \"&ascr;\",\n      \"*\": \"&midast;\",\n      \"ã\": \"&atilde;\",\n      \"ä\": \"&auml;\",\n      \"⨑\": \"&awint;\",\n      \"⫭\": \"&bNot;\",\n      \"≌\": \"&bcong;\",\n      \"϶\": \"&bepsi;\",\n      \"‵\": \"&bprime;\",\n      \"∽\": \"&bsim;\",\n      \"⋍\": \"&bsime;\",\n      \"⊽\": \"&barvee;\",\n      \"⌅\": \"&barwedge;\",\n      \"⎶\": \"&bbrktbrk;\",\n      \"б\": \"&bcy;\",\n      \"„\": \"&ldquor;\",\n      \"⦰\": \"&bemptyv;\",\n      \"β\": \"&beta;\",\n      \"ℶ\": \"&beth;\",\n      \"≬\": \"&twixt;\",\n      \"𝔟\": \"&bfr;\",\n      \"◯\": \"&xcirc;\",\n      \"⨀\": \"&xodot;\",\n      \"⨁\": \"&xoplus;\",\n      \"⨂\": \"&xotime;\",\n      \"⨆\": \"&xsqcup;\",\n      \"★\": \"&starf;\",\n      \"▽\": \"&xdtri;\",\n      \"△\": \"&xutri;\",\n      \"⨄\": \"&xuplus;\",\n      \"⤍\": \"&rbarr;\",\n      \"⧫\": \"&lozf;\",\n      \"▴\": \"&utrif;\",\n      \"▾\": \"&dtrif;\",\n      \"◂\": \"&ltrif;\",\n      \"▸\": \"&rtrif;\",\n      \"␣\": \"&blank;\",\n      \"▒\": \"&blk12;\",\n      \"░\": \"&blk14;\",\n      \"▓\": \"&blk34;\",\n      \"█\": \"&block;\",\n      \"=⃥\": \"&bne;\",\n      \"≡⃥\": \"&bnequiv;\",\n      \"⌐\": \"&bnot;\",\n      \"𝕓\": \"&bopf;\",\n      \"⋈\": \"&bowtie;\",\n      \"╗\": \"&boxDL;\",\n      \"╔\": \"&boxDR;\",\n      \"╖\": \"&boxDl;\",\n      \"╓\": \"&boxDr;\",\n      \"═\": \"&boxH;\",\n      \"╦\": \"&boxHD;\",\n      \"╩\": \"&boxHU;\",\n      \"╤\": \"&boxHd;\",\n      \"╧\": \"&boxHu;\",\n      \"╝\": \"&boxUL;\",\n      \"╚\": \"&boxUR;\",\n      \"╜\": \"&boxUl;\",\n      \"╙\": \"&boxUr;\",\n      \"║\": \"&boxV;\",\n      \"╬\": \"&boxVH;\",\n      \"╣\": \"&boxVL;\",\n      \"╠\": \"&boxVR;\",\n      \"╫\": \"&boxVh;\",\n      \"╢\": \"&boxVl;\",\n      \"╟\": \"&boxVr;\",\n      \"⧉\": \"&boxbox;\",\n      \"╕\": \"&boxdL;\",\n      \"╒\": \"&boxdR;\",\n      \"┐\": \"&boxdl;\",\n      \"┌\": \"&boxdr;\",\n      \"╥\": \"&boxhD;\",\n      \"╨\": \"&boxhU;\",\n      \"┬\": \"&boxhd;\",\n      \"┴\": \"&boxhu;\",\n      \"⊟\": \"&minusb;\",\n      \"⊞\": \"&plusb;\",\n      \"⊠\": \"&timesb;\",\n      \"╛\": \"&boxuL;\",\n      \"╘\": \"&boxuR;\",\n      \"┘\": \"&boxul;\",\n      \"└\": \"&boxur;\",\n      \"│\": \"&boxv;\",\n      \"╪\": \"&boxvH;\",\n      \"╡\": \"&boxvL;\",\n      \"╞\": \"&boxvR;\",\n      \"┼\": \"&boxvh;\",\n      \"┤\": \"&boxvl;\",\n      \"├\": \"&boxvr;\",\n      \"¦\": \"&brvbar;\",\n      \"𝒷\": \"&bscr;\",\n      \"⁏\": \"&bsemi;\",\n      \"\\\\\": \"&bsol;\",\n      \"⧅\": \"&bsolb;\",\n      \"⟈\": \"&bsolhsub;\",\n      \"•\": \"&bullet;\",\n      \"⪮\": \"&bumpE;\",\n      \"ć\": \"&cacute;\",\n      \"∩\": \"&cap;\",\n      \"⩄\": \"&capand;\",\n      \"⩉\": \"&capbrcup;\",\n      \"⩋\": \"&capcap;\",\n      \"⩇\": \"&capcup;\",\n      \"⩀\": \"&capdot;\",\n      \"∩︀\": \"&caps;\",\n      \"⁁\": \"&caret;\",\n      \"⩍\": \"&ccaps;\",\n      \"č\": \"&ccaron;\",\n      \"ç\": \"&ccedil;\",\n      \"ĉ\": \"&ccirc;\",\n      \"⩌\": \"&ccups;\",\n      \"⩐\": \"&ccupssm;\",\n      \"ċ\": \"&cdot;\",\n      \"⦲\": \"&cemptyv;\",\n      \"¢\": \"&cent;\",\n      \"𝔠\": \"&cfr;\",\n      \"ч\": \"&chcy;\",\n      \"✓\": \"&checkmark;\",\n      \"χ\": \"&chi;\",\n      \"○\": \"&cir;\",\n      \"⧃\": \"&cirE;\",\n      \"ˆ\": \"&circ;\",\n      \"≗\": \"&cire;\",\n      \"↺\": \"&olarr;\",\n      \"↻\": \"&orarr;\",\n      \"Ⓢ\": \"&oS;\",\n      \"⊛\": \"&oast;\",\n      \"⊚\": \"&ocir;\",\n      \"⊝\": \"&odash;\",\n      \"⨐\": \"&cirfnint;\",\n      \"⫯\": \"&cirmid;\",\n      \"⧂\": \"&cirscir;\",\n      \"♣\": \"&clubsuit;\",\n      \":\": \"&colon;\",\n      \",\": \"&comma;\",\n      \"@\": \"&commat;\",\n      \"∁\": \"&complement;\",\n      \"⩭\": \"&congdot;\",\n      \"𝕔\": \"&copf;\",\n      \"℗\": \"&copysr;\",\n      \"↵\": \"&crarr;\",\n      \"✗\": \"&cross;\",\n      \"𝒸\": \"&cscr;\",\n      \"⫏\": \"&csub;\",\n      \"⫑\": \"&csube;\",\n      \"⫐\": \"&csup;\",\n      \"⫒\": \"&csupe;\",\n      \"⋯\": \"&ctdot;\",\n      \"⤸\": \"&cudarrl;\",\n      \"⤵\": \"&cudarrr;\",\n      \"⋞\": \"&curlyeqprec;\",\n      \"⋟\": \"&curlyeqsucc;\",\n      \"↶\": \"&curvearrowleft;\",\n      \"⤽\": \"&cularrp;\",\n      \"∪\": \"&cup;\",\n      \"⩈\": \"&cupbrcap;\",\n      \"⩆\": \"&cupcap;\",\n      \"⩊\": \"&cupcup;\",\n      \"⊍\": \"&cupdot;\",\n      \"⩅\": \"&cupor;\",\n      \"∪︀\": \"&cups;\",\n      \"↷\": \"&curvearrowright;\",\n      \"⤼\": \"&curarrm;\",\n      \"⋎\": \"&cuvee;\",\n      \"⋏\": \"&cuwed;\",\n      \"¤\": \"&curren;\",\n      \"∱\": \"&cwint;\",\n      \"⌭\": \"&cylcty;\",\n      \"⥥\": \"&dHar;\",\n      \"†\": \"&dagger;\",\n      \"ℸ\": \"&daleth;\",\n      \"‐\": \"&hyphen;\",\n      \"⤏\": \"&rBarr;\",\n      \"ď\": \"&dcaron;\",\n      \"д\": \"&dcy;\",\n      \"⇊\": \"&downdownarrows;\",\n      \"⩷\": \"&eDDot;\",\n      \"°\": \"&deg;\",\n      \"δ\": \"&delta;\",\n      \"⦱\": \"&demptyv;\",\n      \"⥿\": \"&dfisht;\",\n      \"𝔡\": \"&dfr;\",\n      \"♦\": \"&diams;\",\n      \"ϝ\": \"&gammad;\",\n      \"⋲\": \"&disin;\",\n      \"÷\": \"&divide;\",\n      \"⋇\": \"&divonx;\",\n      \"ђ\": \"&djcy;\",\n      \"⌞\": \"&llcorner;\",\n      \"⌍\": \"&dlcrop;\",\n      $: \"&dollar;\",\n      \"𝕕\": \"&dopf;\",\n      \"≑\": \"&eDot;\",\n      \"∸\": \"&minusd;\",\n      \"∔\": \"&plusdo;\",\n      \"⊡\": \"&sdotb;\",\n      \"⌟\": \"&lrcorner;\",\n      \"⌌\": \"&drcrop;\",\n      \"𝒹\": \"&dscr;\",\n      \"ѕ\": \"&dscy;\",\n      \"⧶\": \"&dsol;\",\n      \"đ\": \"&dstrok;\",\n      \"⋱\": \"&dtdot;\",\n      \"▿\": \"&triangledown;\",\n      \"⦦\": \"&dwangle;\",\n      \"џ\": \"&dzcy;\",\n      \"⟿\": \"&dzigrarr;\",\n      \"é\": \"&eacute;\",\n      \"⩮\": \"&easter;\",\n      \"ě\": \"&ecaron;\",\n      \"≖\": \"&eqcirc;\",\n      \"ê\": \"&ecirc;\",\n      \"≕\": \"&eqcolon;\",\n      \"э\": \"&ecy;\",\n      \"ė\": \"&edot;\",\n      \"≒\": \"&fallingdotseq;\",\n      \"𝔢\": \"&efr;\",\n      \"⪚\": \"&eg;\",\n      \"è\": \"&egrave;\",\n      \"⪖\": \"&eqslantgtr;\",\n      \"⪘\": \"&egsdot;\",\n      \"⪙\": \"&el;\",\n      \"⏧\": \"&elinters;\",\n      \"ℓ\": \"&ell;\",\n      \"⪕\": \"&eqslantless;\",\n      \"⪗\": \"&elsdot;\",\n      \"ē\": \"&emacr;\",\n      \"∅\": \"&varnothing;\",\n      \" \": \"&emsp13;\",\n      \" \": \"&emsp14;\",\n      \" \": \"&emsp;\",\n      \"ŋ\": \"&eng;\",\n      \" \": \"&ensp;\",\n      \"ę\": \"&eogon;\",\n      \"𝕖\": \"&eopf;\",\n      \"⋕\": \"&epar;\",\n      \"⧣\": \"&eparsl;\",\n      \"⩱\": \"&eplus;\",\n      \"ε\": \"&epsilon;\",\n      \"ϵ\": \"&varepsilon;\",\n      \"=\": \"&equals;\",\n      \"≟\": \"&questeq;\",\n      \"⩸\": \"&equivDD;\",\n      \"⧥\": \"&eqvparsl;\",\n      \"≓\": \"&risingdotseq;\",\n      \"⥱\": \"&erarr;\",\n      \"ℯ\": \"&escr;\",\n      \"η\": \"&eta;\",\n      \"ð\": \"&eth;\",\n      \"ë\": \"&euml;\",\n      \"€\": \"&euro;\",\n      \"!\": \"&excl;\",\n      \"ф\": \"&fcy;\",\n      \"♀\": \"&female;\",\n      \"ﬃ\": \"&ffilig;\",\n      \"ﬀ\": \"&fflig;\",\n      \"ﬄ\": \"&ffllig;\",\n      \"𝔣\": \"&ffr;\",\n      \"ﬁ\": \"&filig;\",\n      fj: \"&fjlig;\",\n      \"♭\": \"&flat;\",\n      \"ﬂ\": \"&fllig;\",\n      \"▱\": \"&fltns;\",\n      \"ƒ\": \"&fnof;\",\n      \"𝕗\": \"&fopf;\",\n      \"⋔\": \"&pitchfork;\",\n      \"⫙\": \"&forkv;\",\n      \"⨍\": \"&fpartint;\",\n      \"½\": \"&half;\",\n      \"⅓\": \"&frac13;\",\n      \"¼\": \"&frac14;\",\n      \"⅕\": \"&frac15;\",\n      \"⅙\": \"&frac16;\",\n      \"⅛\": \"&frac18;\",\n      \"⅔\": \"&frac23;\",\n      \"⅖\": \"&frac25;\",\n      \"¾\": \"&frac34;\",\n      \"⅗\": \"&frac35;\",\n      \"⅜\": \"&frac38;\",\n      \"⅘\": \"&frac45;\",\n      \"⅚\": \"&frac56;\",\n      \"⅝\": \"&frac58;\",\n      \"⅞\": \"&frac78;\",\n      \"⁄\": \"&frasl;\",\n      \"⌢\": \"&sfrown;\",\n      \"𝒻\": \"&fscr;\",\n      \"⪌\": \"&gtreqqless;\",\n      \"ǵ\": \"&gacute;\",\n      \"γ\": \"&gamma;\",\n      \"⪆\": \"&gtrapprox;\",\n      \"ğ\": \"&gbreve;\",\n      \"ĝ\": \"&gcirc;\",\n      \"г\": \"&gcy;\",\n      \"ġ\": \"&gdot;\",\n      \"⪩\": \"&gescc;\",\n      \"⪀\": \"&gesdot;\",\n      \"⪂\": \"&gesdoto;\",\n      \"⪄\": \"&gesdotol;\",\n      \"⋛︀\": \"&gesl;\",\n      \"⪔\": \"&gesles;\",\n      \"𝔤\": \"&gfr;\",\n      \"ℷ\": \"&gimel;\",\n      \"ѓ\": \"&gjcy;\",\n      \"⪒\": \"&glE;\",\n      \"⪥\": \"&gla;\",\n      \"⪤\": \"&glj;\",\n      \"≩\": \"&gneqq;\",\n      \"⪊\": \"&gnapprox;\",\n      \"⪈\": \"&gneq;\",\n      \"⋧\": \"&gnsim;\",\n      \"𝕘\": \"&gopf;\",\n      \"ℊ\": \"&gscr;\",\n      \"⪎\": \"&gsime;\",\n      \"⪐\": \"&gsiml;\",\n      \"⪧\": \"&gtcc;\",\n      \"⩺\": \"&gtcir;\",\n      \"⋗\": \"&gtrdot;\",\n      \"⦕\": \"&gtlPar;\",\n      \"⩼\": \"&gtquest;\",\n      \"⥸\": \"&gtrarr;\",\n      \"≩︀\": \"&gvnE;\",\n      \"ъ\": \"&hardcy;\",\n      \"⥈\": \"&harrcir;\",\n      \"↭\": \"&leftrightsquigarrow;\",\n      \"ℏ\": \"&plankv;\",\n      \"ĥ\": \"&hcirc;\",\n      \"♥\": \"&heartsuit;\",\n      \"…\": \"&mldr;\",\n      \"⊹\": \"&hercon;\",\n      \"𝔥\": \"&hfr;\",\n      \"⤥\": \"&searhk;\",\n      \"⤦\": \"&swarhk;\",\n      \"⇿\": \"&hoarr;\",\n      \"∻\": \"&homtht;\",\n      \"↩\": \"&larrhk;\",\n      \"↪\": \"&rarrhk;\",\n      \"𝕙\": \"&hopf;\",\n      \"―\": \"&horbar;\",\n      \"𝒽\": \"&hscr;\",\n      \"ħ\": \"&hstrok;\",\n      \"⁃\": \"&hybull;\",\n      \"í\": \"&iacute;\",\n      \"î\": \"&icirc;\",\n      \"и\": \"&icy;\",\n      \"е\": \"&iecy;\",\n      \"¡\": \"&iexcl;\",\n      \"𝔦\": \"&ifr;\",\n      \"ì\": \"&igrave;\",\n      \"⨌\": \"&qint;\",\n      \"∭\": \"&tint;\",\n      \"⧜\": \"&iinfin;\",\n      \"℩\": \"&iiota;\",\n      \"ĳ\": \"&ijlig;\",\n      \"ī\": \"&imacr;\",\n      \"ı\": \"&inodot;\",\n      \"⊷\": \"&imof;\",\n      \"Ƶ\": \"&imped;\",\n      \"℅\": \"&incare;\",\n      \"∞\": \"&infin;\",\n      \"⧝\": \"&infintie;\",\n      \"⊺\": \"&intercal;\",\n      \"⨗\": \"&intlarhk;\",\n      \"⨼\": \"&iprod;\",\n      \"ё\": \"&iocy;\",\n      \"į\": \"&iogon;\",\n      \"𝕚\": \"&iopf;\",\n      \"ι\": \"&iota;\",\n      \"¿\": \"&iquest;\",\n      \"𝒾\": \"&iscr;\",\n      \"⋹\": \"&isinE;\",\n      \"⋵\": \"&isindot;\",\n      \"⋴\": \"&isins;\",\n      \"⋳\": \"&isinsv;\",\n      \"ĩ\": \"&itilde;\",\n      \"і\": \"&iukcy;\",\n      \"ï\": \"&iuml;\",\n      \"ĵ\": \"&jcirc;\",\n      \"й\": \"&jcy;\",\n      \"𝔧\": \"&jfr;\",\n      \"ȷ\": \"&jmath;\",\n      \"𝕛\": \"&jopf;\",\n      \"𝒿\": \"&jscr;\",\n      \"ј\": \"&jsercy;\",\n      \"є\": \"&jukcy;\",\n      \"κ\": \"&kappa;\",\n      \"ϰ\": \"&varkappa;\",\n      \"ķ\": \"&kcedil;\",\n      \"к\": \"&kcy;\",\n      \"𝔨\": \"&kfr;\",\n      \"ĸ\": \"&kgreen;\",\n      \"х\": \"&khcy;\",\n      \"ќ\": \"&kjcy;\",\n      \"𝕜\": \"&kopf;\",\n      \"𝓀\": \"&kscr;\",\n      \"⤛\": \"&lAtail;\",\n      \"⤎\": \"&lBarr;\",\n      \"⪋\": \"&lesseqqgtr;\",\n      \"⥢\": \"&lHar;\",\n      \"ĺ\": \"&lacute;\",\n      \"⦴\": \"&laemptyv;\",\n      \"λ\": \"&lambda;\",\n      \"⦑\": \"&langd;\",\n      \"⪅\": \"&lessapprox;\",\n      \"«\": \"&laquo;\",\n      \"⤟\": \"&larrbfs;\",\n      \"⤝\": \"&larrfs;\",\n      \"↫\": \"&looparrowleft;\",\n      \"⤹\": \"&larrpl;\",\n      \"⥳\": \"&larrsim;\",\n      \"↢\": \"&leftarrowtail;\",\n      \"⪫\": \"&lat;\",\n      \"⤙\": \"&latail;\",\n      \"⪭\": \"&late;\",\n      \"⪭︀\": \"&lates;\",\n      \"⤌\": \"&lbarr;\",\n      \"❲\": \"&lbbrk;\",\n      \"{\": \"&lcub;\",\n      \"[\": \"&lsqb;\",\n      \"⦋\": \"&lbrke;\",\n      \"⦏\": \"&lbrksld;\",\n      \"⦍\": \"&lbrkslu;\",\n      \"ľ\": \"&lcaron;\",\n      \"ļ\": \"&lcedil;\",\n      \"л\": \"&lcy;\",\n      \"⤶\": \"&ldca;\",\n      \"⥧\": \"&ldrdhar;\",\n      \"⥋\": \"&ldrushar;\",\n      \"↲\": \"&ldsh;\",\n      \"≤\": \"&leq;\",\n      \"⇇\": \"&llarr;\",\n      \"⋋\": \"&lthree;\",\n      \"⪨\": \"&lescc;\",\n      \"⩿\": \"&lesdot;\",\n      \"⪁\": \"&lesdoto;\",\n      \"⪃\": \"&lesdotor;\",\n      \"⋚︀\": \"&lesg;\",\n      \"⪓\": \"&lesges;\",\n      \"⋖\": \"&ltdot;\",\n      \"⥼\": \"&lfisht;\",\n      \"𝔩\": \"&lfr;\",\n      \"⪑\": \"&lgE;\",\n      \"⥪\": \"&lharul;\",\n      \"▄\": \"&lhblk;\",\n      \"љ\": \"&ljcy;\",\n      \"⥫\": \"&llhard;\",\n      \"◺\": \"&lltri;\",\n      \"ŀ\": \"&lmidot;\",\n      \"⎰\": \"&lmoustache;\",\n      \"≨\": \"&lneqq;\",\n      \"⪉\": \"&lnapprox;\",\n      \"⪇\": \"&lneq;\",\n      \"⋦\": \"&lnsim;\",\n      \"⟬\": \"&loang;\",\n      \"⇽\": \"&loarr;\",\n      \"⟼\": \"&xmap;\",\n      \"↬\": \"&rarrlp;\",\n      \"⦅\": \"&lopar;\",\n      \"𝕝\": \"&lopf;\",\n      \"⨭\": \"&loplus;\",\n      \"⨴\": \"&lotimes;\",\n      \"∗\": \"&lowast;\",\n      \"◊\": \"&lozenge;\",\n      \"(\": \"&lpar;\",\n      \"⦓\": \"&lparlt;\",\n      \"⥭\": \"&lrhard;\",\n      \"‎\": \"&lrm;\",\n      \"⊿\": \"&lrtri;\",\n      \"‹\": \"&lsaquo;\",\n      \"𝓁\": \"&lscr;\",\n      \"⪍\": \"&lsime;\",\n      \"⪏\": \"&lsimg;\",\n      \"‚\": \"&sbquo;\",\n      \"ł\": \"&lstrok;\",\n      \"⪦\": \"&ltcc;\",\n      \"⩹\": \"&ltcir;\",\n      \"⋉\": \"&ltimes;\",\n      \"⥶\": \"&ltlarr;\",\n      \"⩻\": \"&ltquest;\",\n      \"⦖\": \"&ltrPar;\",\n      \"◃\": \"&triangleleft;\",\n      \"⥊\": \"&lurdshar;\",\n      \"⥦\": \"&luruhar;\",\n      \"≨︀\": \"&lvnE;\",\n      \"∺\": \"&mDDot;\",\n      \"¯\": \"&strns;\",\n      \"♂\": \"&male;\",\n      \"✠\": \"&maltese;\",\n      \"▮\": \"&marker;\",\n      \"⨩\": \"&mcomma;\",\n      \"м\": \"&mcy;\",\n      \"—\": \"&mdash;\",\n      \"𝔪\": \"&mfr;\",\n      \"℧\": \"&mho;\",\n      \"µ\": \"&micro;\",\n      \"⫰\": \"&midcir;\",\n      \"−\": \"&minus;\",\n      \"⨪\": \"&minusdu;\",\n      \"⫛\": \"&mlcp;\",\n      \"⊧\": \"&models;\",\n      \"𝕞\": \"&mopf;\",\n      \"𝓂\": \"&mscr;\",\n      \"μ\": \"&mu;\",\n      \"⊸\": \"&mumap;\",\n      \"⋙̸\": \"&nGg;\",\n      \"≫⃒\": \"&nGt;\",\n      \"⇍\": \"&nlArr;\",\n      \"⇎\": \"&nhArr;\",\n      \"⋘̸\": \"&nLl;\",\n      \"≪⃒\": \"&nLt;\",\n      \"⇏\": \"&nrArr;\",\n      \"⊯\": \"&nVDash;\",\n      \"⊮\": \"&nVdash;\",\n      \"ń\": \"&nacute;\",\n      \"∠⃒\": \"&nang;\",\n      \"⩰̸\": \"&napE;\",\n      \"≋̸\": \"&napid;\",\n      \"ŉ\": \"&napos;\",\n      \"♮\": \"&natural;\",\n      \"⩃\": \"&ncap;\",\n      \"ň\": \"&ncaron;\",\n      \"ņ\": \"&ncedil;\",\n      \"⩭̸\": \"&ncongdot;\",\n      \"⩂\": \"&ncup;\",\n      \"н\": \"&ncy;\",\n      \"–\": \"&ndash;\",\n      \"⇗\": \"&neArr;\",\n      \"⤤\": \"&nearhk;\",\n      \"≐̸\": \"&nedot;\",\n      \"⤨\": \"&toea;\",\n      \"𝔫\": \"&nfr;\",\n      \"↮\": \"&nleftrightarrow;\",\n      \"⫲\": \"&nhpar;\",\n      \"⋼\": \"&nis;\",\n      \"⋺\": \"&nisd;\",\n      \"њ\": \"&njcy;\",\n      \"≦̸\": \"&nleqq;\",\n      \"↚\": \"&nleftarrow;\",\n      \"‥\": \"&nldr;\",\n      \"𝕟\": \"&nopf;\",\n      \"¬\": \"&not;\",\n      \"⋹̸\": \"&notinE;\",\n      \"⋵̸\": \"&notindot;\",\n      \"⋷\": \"&notinvb;\",\n      \"⋶\": \"&notinvc;\",\n      \"⋾\": \"&notnivb;\",\n      \"⋽\": \"&notnivc;\",\n      \"⫽⃥\": \"&nparsl;\",\n      \"∂̸\": \"&npart;\",\n      \"⨔\": \"&npolint;\",\n      \"↛\": \"&nrightarrow;\",\n      \"⤳̸\": \"&nrarrc;\",\n      \"↝̸\": \"&nrarrw;\",\n      \"𝓃\": \"&nscr;\",\n      \"⊄\": \"&nsub;\",\n      \"⫅̸\": \"&nsubseteqq;\",\n      \"⊅\": \"&nsup;\",\n      \"⫆̸\": \"&nsupseteqq;\",\n      \"ñ\": \"&ntilde;\",\n      \"ν\": \"&nu;\",\n      \"#\": \"&num;\",\n      \"№\": \"&numero;\",\n      \" \": \"&numsp;\",\n      \"⊭\": \"&nvDash;\",\n      \"⤄\": \"&nvHarr;\",\n      \"≍⃒\": \"&nvap;\",\n      \"⊬\": \"&nvdash;\",\n      \"≥⃒\": \"&nvge;\",\n      \">⃒\": \"&nvgt;\",\n      \"⧞\": \"&nvinfin;\",\n      \"⤂\": \"&nvlArr;\",\n      \"≤⃒\": \"&nvle;\",\n      \"<⃒\": \"&nvlt;\",\n      \"⊴⃒\": \"&nvltrie;\",\n      \"⤃\": \"&nvrArr;\",\n      \"⊵⃒\": \"&nvrtrie;\",\n      \"∼⃒\": \"&nvsim;\",\n      \"⇖\": \"&nwArr;\",\n      \"⤣\": \"&nwarhk;\",\n      \"⤧\": \"&nwnear;\",\n      \"ó\": \"&oacute;\",\n      \"ô\": \"&ocirc;\",\n      \"о\": \"&ocy;\",\n      \"ő\": \"&odblac;\",\n      \"⨸\": \"&odiv;\",\n      \"⦼\": \"&odsold;\",\n      \"œ\": \"&oelig;\",\n      \"⦿\": \"&ofcir;\",\n      \"𝔬\": \"&ofr;\",\n      \"˛\": \"&ogon;\",\n      \"ò\": \"&ograve;\",\n      \"⧁\": \"&ogt;\",\n      \"⦵\": \"&ohbar;\",\n      \"⦾\": \"&olcir;\",\n      \"⦻\": \"&olcross;\",\n      \"⧀\": \"&olt;\",\n      \"ō\": \"&omacr;\",\n      \"ω\": \"&omega;\",\n      \"ο\": \"&omicron;\",\n      \"⦶\": \"&omid;\",\n      \"𝕠\": \"&oopf;\",\n      \"⦷\": \"&opar;\",\n      \"⦹\": \"&operp;\",\n      \"∨\": \"&vee;\",\n      \"⩝\": \"&ord;\",\n      \"ℴ\": \"&oscr;\",\n      \"ª\": \"&ordf;\",\n      \"º\": \"&ordm;\",\n      \"⊶\": \"&origof;\",\n      \"⩖\": \"&oror;\",\n      \"⩗\": \"&orslope;\",\n      \"⩛\": \"&orv;\",\n      \"ø\": \"&oslash;\",\n      \"⊘\": \"&osol;\",\n      \"õ\": \"&otilde;\",\n      \"⨶\": \"&otimesas;\",\n      \"ö\": \"&ouml;\",\n      \"⌽\": \"&ovbar;\",\n      \"¶\": \"&para;\",\n      \"⫳\": \"&parsim;\",\n      \"⫽\": \"&parsl;\",\n      \"п\": \"&pcy;\",\n      \"%\": \"&percnt;\",\n      \".\": \"&period;\",\n      \"‰\": \"&permil;\",\n      \"‱\": \"&pertenk;\",\n      \"𝔭\": \"&pfr;\",\n      \"φ\": \"&phi;\",\n      \"ϕ\": \"&varphi;\",\n      \"☎\": \"&phone;\",\n      \"π\": \"&pi;\",\n      \"ϖ\": \"&varpi;\",\n      \"ℎ\": \"&planckh;\",\n      \"+\": \"&plus;\",\n      \"⨣\": \"&plusacir;\",\n      \"⨢\": \"&pluscir;\",\n      \"⨥\": \"&plusdu;\",\n      \"⩲\": \"&pluse;\",\n      \"⨦\": \"&plussim;\",\n      \"⨧\": \"&plustwo;\",\n      \"⨕\": \"&pointint;\",\n      \"𝕡\": \"&popf;\",\n      \"£\": \"&pound;\",\n      \"⪳\": \"&prE;\",\n      \"⪷\": \"&precapprox;\",\n      \"⪹\": \"&prnap;\",\n      \"⪵\": \"&prnE;\",\n      \"⋨\": \"&prnsim;\",\n      \"′\": \"&prime;\",\n      \"⌮\": \"&profalar;\",\n      \"⌒\": \"&profline;\",\n      \"⌓\": \"&profsurf;\",\n      \"⊰\": \"&prurel;\",\n      \"𝓅\": \"&pscr;\",\n      \"ψ\": \"&psi;\",\n      \" \": \"&puncsp;\",\n      \"𝔮\": \"&qfr;\",\n      \"𝕢\": \"&qopf;\",\n      \"⁗\": \"&qprime;\",\n      \"𝓆\": \"&qscr;\",\n      \"⨖\": \"&quatint;\",\n      \"?\": \"&quest;\",\n      \"⤜\": \"&rAtail;\",\n      \"⥤\": \"&rHar;\",\n      \"∽̱\": \"&race;\",\n      \"ŕ\": \"&racute;\",\n      \"⦳\": \"&raemptyv;\",\n      \"⦒\": \"&rangd;\",\n      \"⦥\": \"&range;\",\n      \"»\": \"&raquo;\",\n      \"⥵\": \"&rarrap;\",\n      \"⤠\": \"&rarrbfs;\",\n      \"⤳\": \"&rarrc;\",\n      \"⤞\": \"&rarrfs;\",\n      \"⥅\": \"&rarrpl;\",\n      \"⥴\": \"&rarrsim;\",\n      \"↣\": \"&rightarrowtail;\",\n      \"↝\": \"&rightsquigarrow;\",\n      \"⤚\": \"&ratail;\",\n      \"∶\": \"&ratio;\",\n      \"❳\": \"&rbbrk;\",\n      \"}\": \"&rcub;\",\n      \"]\": \"&rsqb;\",\n      \"⦌\": \"&rbrke;\",\n      \"⦎\": \"&rbrksld;\",\n      \"⦐\": \"&rbrkslu;\",\n      \"ř\": \"&rcaron;\",\n      \"ŗ\": \"&rcedil;\",\n      \"р\": \"&rcy;\",\n      \"⤷\": \"&rdca;\",\n      \"⥩\": \"&rdldhar;\",\n      \"↳\": \"&rdsh;\",\n      \"▭\": \"&rect;\",\n      \"⥽\": \"&rfisht;\",\n      \"𝔯\": \"&rfr;\",\n      \"⥬\": \"&rharul;\",\n      \"ρ\": \"&rho;\",\n      \"ϱ\": \"&varrho;\",\n      \"⇉\": \"&rrarr;\",\n      \"⋌\": \"&rthree;\",\n      \"˚\": \"&ring;\",\n      \"‏\": \"&rlm;\",\n      \"⎱\": \"&rmoustache;\",\n      \"⫮\": \"&rnmid;\",\n      \"⟭\": \"&roang;\",\n      \"⇾\": \"&roarr;\",\n      \"⦆\": \"&ropar;\",\n      \"𝕣\": \"&ropf;\",\n      \"⨮\": \"&roplus;\",\n      \"⨵\": \"&rotimes;\",\n      \")\": \"&rpar;\",\n      \"⦔\": \"&rpargt;\",\n      \"⨒\": \"&rppolint;\",\n      \"›\": \"&rsaquo;\",\n      \"𝓇\": \"&rscr;\",\n      \"⋊\": \"&rtimes;\",\n      \"▹\": \"&triangleright;\",\n      \"⧎\": \"&rtriltri;\",\n      \"⥨\": \"&ruluhar;\",\n      \"℞\": \"&rx;\",\n      \"ś\": \"&sacute;\",\n      \"⪴\": \"&scE;\",\n      \"⪸\": \"&succapprox;\",\n      \"š\": \"&scaron;\",\n      \"ş\": \"&scedil;\",\n      \"ŝ\": \"&scirc;\",\n      \"⪶\": \"&succneqq;\",\n      \"⪺\": \"&succnapprox;\",\n      \"⋩\": \"&succnsim;\",\n      \"⨓\": \"&scpolint;\",\n      \"с\": \"&scy;\",\n      \"⋅\": \"&sdot;\",\n      \"⩦\": \"&sdote;\",\n      \"⇘\": \"&seArr;\",\n      \"§\": \"&sect;\",\n      \";\": \"&semi;\",\n      \"⤩\": \"&tosa;\",\n      \"✶\": \"&sext;\",\n      \"𝔰\": \"&sfr;\",\n      \"♯\": \"&sharp;\",\n      \"щ\": \"&shchcy;\",\n      \"ш\": \"&shcy;\",\n      \"­\": \"&shy;\",\n      \"σ\": \"&sigma;\",\n      \"ς\": \"&varsigma;\",\n      \"⩪\": \"&simdot;\",\n      \"⪞\": \"&simg;\",\n      \"⪠\": \"&simgE;\",\n      \"⪝\": \"&siml;\",\n      \"⪟\": \"&simlE;\",\n      \"≆\": \"&simne;\",\n      \"⨤\": \"&simplus;\",\n      \"⥲\": \"&simrarr;\",\n      \"⨳\": \"&smashp;\",\n      \"⧤\": \"&smeparsl;\",\n      \"⌣\": \"&ssmile;\",\n      \"⪪\": \"&smt;\",\n      \"⪬\": \"&smte;\",\n      \"⪬︀\": \"&smtes;\",\n      \"ь\": \"&softcy;\",\n      \"/\": \"&sol;\",\n      \"⧄\": \"&solb;\",\n      \"⌿\": \"&solbar;\",\n      \"𝕤\": \"&sopf;\",\n      \"♠\": \"&spadesuit;\",\n      \"⊓︀\": \"&sqcaps;\",\n      \"⊔︀\": \"&sqcups;\",\n      \"𝓈\": \"&sscr;\",\n      \"☆\": \"&star;\",\n      \"⊂\": \"&subset;\",\n      \"⫅\": \"&subseteqq;\",\n      \"⪽\": \"&subdot;\",\n      \"⫃\": \"&subedot;\",\n      \"⫁\": \"&submult;\",\n      \"⫋\": \"&subsetneqq;\",\n      \"⊊\": \"&subsetneq;\",\n      \"⪿\": \"&subplus;\",\n      \"⥹\": \"&subrarr;\",\n      \"⫇\": \"&subsim;\",\n      \"⫕\": \"&subsub;\",\n      \"⫓\": \"&subsup;\",\n      \"♪\": \"&sung;\",\n      \"¹\": \"&sup1;\",\n      \"²\": \"&sup2;\",\n      \"³\": \"&sup3;\",\n      \"⫆\": \"&supseteqq;\",\n      \"⪾\": \"&supdot;\",\n      \"⫘\": \"&supdsub;\",\n      \"⫄\": \"&supedot;\",\n      \"⟉\": \"&suphsol;\",\n      \"⫗\": \"&suphsub;\",\n      \"⥻\": \"&suplarr;\",\n      \"⫂\": \"&supmult;\",\n      \"⫌\": \"&supsetneqq;\",\n      \"⊋\": \"&supsetneq;\",\n      \"⫀\": \"&supplus;\",\n      \"⫈\": \"&supsim;\",\n      \"⫔\": \"&supsub;\",\n      \"⫖\": \"&supsup;\",\n      \"⇙\": \"&swArr;\",\n      \"⤪\": \"&swnwar;\",\n      \"ß\": \"&szlig;\",\n      \"⌖\": \"&target;\",\n      \"τ\": \"&tau;\",\n      \"ť\": \"&tcaron;\",\n      \"ţ\": \"&tcedil;\",\n      \"т\": \"&tcy;\",\n      \"⌕\": \"&telrec;\",\n      \"𝔱\": \"&tfr;\",\n      \"θ\": \"&theta;\",\n      \"ϑ\": \"&vartheta;\",\n      \"þ\": \"&thorn;\",\n      \"×\": \"&times;\",\n      \"⨱\": \"&timesbar;\",\n      \"⨰\": \"&timesd;\",\n      \"⌶\": \"&topbot;\",\n      \"⫱\": \"&topcir;\",\n      \"𝕥\": \"&topf;\",\n      \"⫚\": \"&topfork;\",\n      \"‴\": \"&tprime;\",\n      \"▵\": \"&utri;\",\n      \"≜\": \"&trie;\",\n      \"◬\": \"&tridot;\",\n      \"⨺\": \"&triminus;\",\n      \"⨹\": \"&triplus;\",\n      \"⧍\": \"&trisb;\",\n      \"⨻\": \"&tritime;\",\n      \"⏢\": \"&trpezium;\",\n      \"𝓉\": \"&tscr;\",\n      \"ц\": \"&tscy;\",\n      \"ћ\": \"&tshcy;\",\n      \"ŧ\": \"&tstrok;\",\n      \"⥣\": \"&uHar;\",\n      \"ú\": \"&uacute;\",\n      \"ў\": \"&ubrcy;\",\n      \"ŭ\": \"&ubreve;\",\n      \"û\": \"&ucirc;\",\n      \"у\": \"&ucy;\",\n      \"ű\": \"&udblac;\",\n      \"⥾\": \"&ufisht;\",\n      \"𝔲\": \"&ufr;\",\n      \"ù\": \"&ugrave;\",\n      \"▀\": \"&uhblk;\",\n      \"⌜\": \"&ulcorner;\",\n      \"⌏\": \"&ulcrop;\",\n      \"◸\": \"&ultri;\",\n      \"ū\": \"&umacr;\",\n      \"ų\": \"&uogon;\",\n      \"𝕦\": \"&uopf;\",\n      \"υ\": \"&upsilon;\",\n      \"⇈\": \"&uuarr;\",\n      \"⌝\": \"&urcorner;\",\n      \"⌎\": \"&urcrop;\",\n      \"ů\": \"&uring;\",\n      \"◹\": \"&urtri;\",\n      \"𝓊\": \"&uscr;\",\n      \"⋰\": \"&utdot;\",\n      \"ũ\": \"&utilde;\",\n      \"ü\": \"&uuml;\",\n      \"⦧\": \"&uwangle;\",\n      \"⫨\": \"&vBar;\",\n      \"⫩\": \"&vBarv;\",\n      \"⦜\": \"&vangrt;\",\n      \"⊊︀\": \"&vsubne;\",\n      \"⫋︀\": \"&vsubnE;\",\n      \"⊋︀\": \"&vsupne;\",\n      \"⫌︀\": \"&vsupnE;\",\n      \"в\": \"&vcy;\",\n      \"⊻\": \"&veebar;\",\n      \"≚\": \"&veeeq;\",\n      \"⋮\": \"&vellip;\",\n      \"𝔳\": \"&vfr;\",\n      \"𝕧\": \"&vopf;\",\n      \"𝓋\": \"&vscr;\",\n      \"⦚\": \"&vzigzag;\",\n      \"ŵ\": \"&wcirc;\",\n      \"⩟\": \"&wedbar;\",\n      \"≙\": \"&wedgeq;\",\n      \"℘\": \"&wp;\",\n      \"𝔴\": \"&wfr;\",\n      \"𝕨\": \"&wopf;\",\n      \"𝓌\": \"&wscr;\",\n      \"𝔵\": \"&xfr;\",\n      \"ξ\": \"&xi;\",\n      \"⋻\": \"&xnis;\",\n      \"𝕩\": \"&xopf;\",\n      \"𝓍\": \"&xscr;\",\n      \"ý\": \"&yacute;\",\n      \"я\": \"&yacy;\",\n      \"ŷ\": \"&ycirc;\",\n      \"ы\": \"&ycy;\",\n      \"¥\": \"&yen;\",\n      \"𝔶\": \"&yfr;\",\n      \"ї\": \"&yicy;\",\n      \"𝕪\": \"&yopf;\",\n      \"𝓎\": \"&yscr;\",\n      \"ю\": \"&yucy;\",\n      \"ÿ\": \"&yuml;\",\n      \"ź\": \"&zacute;\",\n      \"ž\": \"&zcaron;\",\n      \"з\": \"&zcy;\",\n      \"ż\": \"&zdot;\",\n      \"ζ\": \"&zeta;\",\n      \"𝔷\": \"&zfr;\",\n      \"ж\": \"&zhcy;\",\n      \"⇝\": \"&zigrarr;\",\n      \"𝕫\": \"&zopf;\",\n      \"𝓏\": \"&zscr;\",\n      \"‍\": \"&zwj;\",\n      \"‌\": \"&zwnj;\"\n    }\n  }\n};\n\n//# sourceURL=webpack://albrecht-photo/./node_modules/html-entities/lib/named-references.js?");

/***/ }),

/***/ "./node_modules/html-entities/lib/numeric-unicode-map.js":
/*!***************************************************************!*\
  !*** ./node_modules/html-entities/lib/numeric-unicode-map.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.numericUnicodeMap = {\n  0: 65533,\n  128: 8364,\n  130: 8218,\n  131: 402,\n  132: 8222,\n  133: 8230,\n  134: 8224,\n  135: 8225,\n  136: 710,\n  137: 8240,\n  138: 352,\n  139: 8249,\n  140: 338,\n  142: 381,\n  145: 8216,\n  146: 8217,\n  147: 8220,\n  148: 8221,\n  149: 8226,\n  150: 8211,\n  151: 8212,\n  152: 732,\n  153: 8482,\n  154: 353,\n  155: 8250,\n  156: 339,\n  158: 382,\n  159: 376\n};\n\n//# sourceURL=webpack://albrecht-photo/./node_modules/html-entities/lib/numeric-unicode-map.js?");

/***/ }),

/***/ "./node_modules/html-entities/lib/surrogate-pairs.js":
/*!***********************************************************!*\
  !*** ./node_modules/html-entities/lib/surrogate-pairs.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.fromCodePoint = String.fromCodePoint || function (astralCodePoint) {\n  return String.fromCharCode(Math.floor((astralCodePoint - 65536) / 1024) + 55296, (astralCodePoint - 65536) % 1024 + 56320);\n};\nexports.getCodePoint = String.prototype.codePointAt ? function (input, position) {\n  return input.codePointAt(position);\n} : function (input, position) {\n  return (input.charCodeAt(position) - 55296) * 1024 + input.charCodeAt(position + 1) - 56320 + 65536;\n};\nexports.highSurrogateFrom = 55296;\nexports.highSurrogateTo = 56319;\n\n//# sourceURL=webpack://albrecht-photo/./node_modules/html-entities/lib/surrogate-pairs.js?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* eslint-env browser */\n/*\n  eslint-disable\n  no-console,\n  func-names\n*/\n\n/** @typedef {any} TODO */\nvar normalizeUrl = __webpack_require__(/*! ./normalize-url */ \"./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js\");\nvar srcByModuleId = Object.create(null);\nvar noDocument = typeof document === \"undefined\";\nvar forEach = Array.prototype.forEach;\n\n/**\n * @param {function} fn\n * @param {number} time\n * @returns {(function(): void)|*}\n */\nfunction debounce(fn, time) {\n  var timeout = 0;\n  return function () {\n    // @ts-ignore\n    var self = this;\n    // eslint-disable-next-line prefer-rest-params\n    var args = arguments;\n    var functionCall = function functionCall() {\n      return fn.apply(self, args);\n    };\n    clearTimeout(timeout);\n\n    // @ts-ignore\n    timeout = setTimeout(functionCall, time);\n  };\n}\nfunction noop() {}\n\n/**\n * @param {TODO} moduleId\n * @returns {TODO}\n */\nfunction getCurrentScriptUrl(moduleId) {\n  var src = srcByModuleId[moduleId];\n  if (!src) {\n    if (document.currentScript) {\n      src = /** @type {HTMLScriptElement} */document.currentScript.src;\n    } else {\n      var scripts = document.getElementsByTagName(\"script\");\n      var lastScriptTag = scripts[scripts.length - 1];\n      if (lastScriptTag) {\n        src = lastScriptTag.src;\n      }\n    }\n    srcByModuleId[moduleId] = src;\n  }\n\n  /**\n   * @param {string} fileMap\n   * @returns {null | string[]}\n   */\n  return function (fileMap) {\n    if (!src) {\n      return null;\n    }\n    var splitResult = src.split(/([^\\\\/]+)\\.js$/);\n    var filename = splitResult && splitResult[1];\n    if (!filename) {\n      return [src.replace(\".js\", \".css\")];\n    }\n    if (!fileMap) {\n      return [src.replace(\".js\", \".css\")];\n    }\n    return fileMap.split(\",\").map(function (mapRule) {\n      var reg = new RegExp(\"\".concat(filename, \"\\\\.js$\"), \"g\");\n      return normalizeUrl(src.replace(reg, \"\".concat(mapRule.replace(/{fileName}/g, filename), \".css\")));\n    });\n  };\n}\n\n/**\n * @param {TODO} el\n * @param {string} [url]\n */\nfunction updateCss(el, url) {\n  if (!url) {\n    if (!el.href) {\n      return;\n    }\n\n    // eslint-disable-next-line\n    url = el.href.split(\"?\")[0];\n  }\n  if (!isUrlRequest( /** @type {string} */url)) {\n    return;\n  }\n  if (el.isLoaded === false) {\n    // We seem to be about to replace a css link that hasn't loaded yet.\n    // We're probably changing the same file more than once.\n    return;\n  }\n  if (!url || !(url.indexOf(\".css\") > -1)) {\n    return;\n  }\n\n  // eslint-disable-next-line no-param-reassign\n  el.visited = true;\n  var newEl = el.cloneNode();\n  newEl.isLoaded = false;\n  newEl.addEventListener(\"load\", function () {\n    if (newEl.isLoaded) {\n      return;\n    }\n    newEl.isLoaded = true;\n    el.parentNode.removeChild(el);\n  });\n  newEl.addEventListener(\"error\", function () {\n    if (newEl.isLoaded) {\n      return;\n    }\n    newEl.isLoaded = true;\n    el.parentNode.removeChild(el);\n  });\n  newEl.href = \"\".concat(url, \"?\").concat(Date.now());\n  if (el.nextSibling) {\n    el.parentNode.insertBefore(newEl, el.nextSibling);\n  } else {\n    el.parentNode.appendChild(newEl);\n  }\n}\n\n/**\n * @param {string} href\n * @param {TODO} src\n * @returns {TODO}\n */\nfunction getReloadUrl(href, src) {\n  var ret;\n\n  // eslint-disable-next-line no-param-reassign\n  href = normalizeUrl(href);\n  src.some(\n  /**\n   * @param {string} url\n   */\n  // eslint-disable-next-line array-callback-return\n  function (url) {\n    if (href.indexOf(src) > -1) {\n      ret = url;\n    }\n  });\n  return ret;\n}\n\n/**\n * @param {string} [src]\n * @returns {boolean}\n */\nfunction reloadStyle(src) {\n  if (!src) {\n    return false;\n  }\n  var elements = document.querySelectorAll(\"link\");\n  var loaded = false;\n  forEach.call(elements, function (el) {\n    if (!el.href) {\n      return;\n    }\n    var url = getReloadUrl(el.href, src);\n    if (!isUrlRequest(url)) {\n      return;\n    }\n    if (el.visited === true) {\n      return;\n    }\n    if (url) {\n      updateCss(el, url);\n      loaded = true;\n    }\n  });\n  return loaded;\n}\nfunction reloadAll() {\n  var elements = document.querySelectorAll(\"link\");\n  forEach.call(elements, function (el) {\n    if (el.visited === true) {\n      return;\n    }\n    updateCss(el);\n  });\n}\n\n/**\n * @param {string} url\n * @returns {boolean}\n */\nfunction isUrlRequest(url) {\n  // An URL is not an request if\n\n  // It is not http or https\n  if (!/^[a-zA-Z][a-zA-Z\\d+\\-.]*:/.test(url)) {\n    return false;\n  }\n  return true;\n}\n\n/**\n * @param {TODO} moduleId\n * @param {TODO} options\n * @returns {TODO}\n */\nmodule.exports = function (moduleId, options) {\n  if (noDocument) {\n    console.log(\"no window.document found, will not HMR CSS\");\n    return noop;\n  }\n  var getScriptSrc = getCurrentScriptUrl(moduleId);\n  function update() {\n    var src = getScriptSrc(options.filename);\n    var reloaded = reloadStyle(src);\n    if (options.locals) {\n      console.log(\"[HMR] Detected local css modules. Reload all css\");\n      reloadAll();\n      return;\n    }\n    if (reloaded) {\n      console.log(\"[HMR] css reload %s\", src.join(\" \"));\n    } else {\n      console.log(\"[HMR] Reload all css\");\n      reloadAll();\n    }\n  }\n  return debounce(update, 50);\n};\n\n//# sourceURL=webpack://albrecht-photo/./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js":
/*!************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* eslint-disable */\n\n/**\n * @param {string[]} pathComponents\n * @returns {string}\n */\nfunction normalizeUrl(pathComponents) {\n  return pathComponents.reduce(function (accumulator, item) {\n    switch (item) {\n      case \"..\":\n        accumulator.pop();\n        break;\n      case \".\":\n        break;\n      default:\n        accumulator.push(item);\n    }\n    return accumulator;\n  }, /** @type {string[]} */[]).join(\"/\");\n}\n\n/**\n * @param {string} urlString\n * @returns {string}\n */\nmodule.exports = function (urlString) {\n  urlString = urlString.trim();\n  if (/^data:/i.test(urlString)) {\n    return urlString;\n  }\n  var protocol = urlString.indexOf(\"//\") !== -1 ? urlString.split(\"//\")[0] + \"//\" : \"\";\n  var components = urlString.replace(new RegExp(protocol, \"i\"), \"\").split(\"/\");\n  var host = components[0].toLowerCase().replace(/\\.$/, \"\");\n  components[0] = \"\";\n  var path = normalizeUrl(components);\n  return protocol + host + path;\n};\n\n//# sourceURL=webpack://albrecht-photo/./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/clients/WebSocketClient.js":
/*!***************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/clients/WebSocketClient.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ WebSocketClient)\n/* harmony export */ });\n/* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/log.js */ \"./node_modules/webpack-dev-server/client/utils/log.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);\n  }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  Object.defineProperty(Constructor, \"prototype\", {\n    writable: false\n  });\n  return Constructor;\n}\nfunction _toPropertyKey(arg) {\n  var key = _toPrimitive(arg, \"string\");\n  return _typeof(key) === \"symbol\" ? key : String(key);\n}\nfunction _toPrimitive(input, hint) {\n  if (_typeof(input) !== \"object\" || input === null) return input;\n  var prim = input[Symbol.toPrimitive];\n  if (prim !== undefined) {\n    var res = prim.call(input, hint || \"default\");\n    if (_typeof(res) !== \"object\") return res;\n    throw new TypeError(\"@@toPrimitive must return a primitive value.\");\n  }\n  return (hint === \"string\" ? String : Number)(input);\n}\n\nvar WebSocketClient = /*#__PURE__*/function () {\n  /**\n   * @param {string} url\n   */\n  function WebSocketClient(url) {\n    _classCallCheck(this, WebSocketClient);\n    this.client = new WebSocket(url);\n    this.client.onerror = function (error) {\n      _utils_log_js__WEBPACK_IMPORTED_MODULE_0__.log.error(error);\n    };\n  }\n\n  /**\n   * @param {(...args: any[]) => void} f\n   */\n  _createClass(WebSocketClient, [{\n    key: \"onOpen\",\n    value: function onOpen(f) {\n      this.client.onopen = f;\n    }\n\n    /**\n     * @param {(...args: any[]) => void} f\n     */\n  }, {\n    key: \"onClose\",\n    value: function onClose(f) {\n      this.client.onclose = f;\n    }\n\n    // call f with the message string as the first argument\n    /**\n     * @param {(...args: any[]) => void} f\n     */\n  }, {\n    key: \"onMessage\",\n    value: function onMessage(f) {\n      this.client.onmessage = function (e) {\n        f(e.data);\n      };\n    }\n  }]);\n  return WebSocketClient;\n}();\n\n\n//# sourceURL=webpack://albrecht-photo/./node_modules/webpack-dev-server/client/clients/WebSocketClient.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8080&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8080&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true ***!
  \***********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("var __resourceQuery = \"?protocol=ws%3A&hostname=0.0.0.0&port=8080&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack/hot/log.js */ \"./node_modules/webpack/hot/log.js\");\n/* harmony import */ var webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_stripAnsi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/stripAnsi.js */ \"./node_modules/webpack-dev-server/client/utils/stripAnsi.js\");\n/* harmony import */ var _utils_parseURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/parseURL.js */ \"./node_modules/webpack-dev-server/client/utils/parseURL.js\");\n/* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./socket.js */ \"./node_modules/webpack-dev-server/client/socket.js\");\n/* harmony import */ var _overlay_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overlay.js */ \"./node_modules/webpack-dev-server/client/overlay.js\");\n/* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/log.js */ \"./node_modules/webpack-dev-server/client/utils/log.js\");\n/* harmony import */ var _utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/sendMessage.js */ \"./node_modules/webpack-dev-server/client/utils/sendMessage.js\");\n/* harmony import */ var _utils_reloadApp_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/reloadApp.js */ \"./node_modules/webpack-dev-server/client/utils/reloadApp.js\");\n/* harmony import */ var _utils_createSocketURL_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/createSocketURL.js */ \"./node_modules/webpack-dev-server/client/utils/createSocketURL.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction ownKeys(object, enumerableOnly) {\n  var keys = Object.keys(object);\n  if (Object.getOwnPropertySymbols) {\n    var symbols = Object.getOwnPropertySymbols(object);\n    enumerableOnly && (symbols = symbols.filter(function (sym) {\n      return Object.getOwnPropertyDescriptor(object, sym).enumerable;\n    })), keys.push.apply(keys, symbols);\n  }\n  return keys;\n}\nfunction _objectSpread(target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = null != arguments[i] ? arguments[i] : {};\n    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {\n      _defineProperty(target, key, source[key]);\n    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {\n      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));\n    });\n  }\n  return target;\n}\nfunction _defineProperty(obj, key, value) {\n  key = _toPropertyKey(key);\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n  return obj;\n}\nfunction _toPropertyKey(arg) {\n  var key = _toPrimitive(arg, \"string\");\n  return _typeof(key) === \"symbol\" ? key : String(key);\n}\nfunction _toPrimitive(input, hint) {\n  if (_typeof(input) !== \"object\" || input === null) return input;\n  var prim = input[Symbol.toPrimitive];\n  if (prim !== undefined) {\n    var res = prim.call(input, hint || \"default\");\n    if (_typeof(res) !== \"object\") return res;\n    throw new TypeError(\"@@toPrimitive must return a primitive value.\");\n  }\n  return (hint === \"string\" ? String : Number)(input);\n}\n/* global __resourceQuery, __webpack_hash__ */\n/// <reference types=\"webpack/module\" />\n\n\n\n\n\n\n\n\n\n\n/**\n * @typedef {Object} OverlayOptions\n * @property {boolean | (error: Error) => boolean} [warnings]\n * @property {boolean | (error: Error) => boolean} [errors]\n * @property {boolean | (error: Error) => boolean} [runtimeErrors]\n * @property {string} [trustedTypesPolicyName]\n */\n\n/**\n * @typedef {Object} Options\n * @property {boolean} hot\n * @property {boolean} liveReload\n * @property {boolean} progress\n * @property {boolean | OverlayOptions} overlay\n * @property {string} [logging]\n * @property {number} [reconnect]\n */\n\n/**\n * @typedef {Object} Status\n * @property {boolean} isUnloading\n * @property {string} currentHash\n * @property {string} [previousHash]\n */\n\n/**\n * @param {boolean | { warnings?: boolean | string; errors?: boolean | string; runtimeErrors?: boolean | string; }} overlayOptions\n */\nvar decodeOverlayOptions = function decodeOverlayOptions(overlayOptions) {\n  if (_typeof(overlayOptions) === \"object\") {\n    [\"warnings\", \"errors\", \"runtimeErrors\"].forEach(function (property) {\n      if (typeof overlayOptions[property] === \"string\") {\n        var overlayFilterFunctionString = decodeURIComponent(overlayOptions[property]);\n\n        // eslint-disable-next-line no-new-func\n        var overlayFilterFunction = new Function(\"message\", \"var callback = \".concat(overlayFilterFunctionString, \"\\n        return callback(message)\"));\n        overlayOptions[property] = overlayFilterFunction;\n      }\n    });\n  }\n};\n\n/**\n * @type {Status}\n */\nvar status = {\n  isUnloading: false,\n  // TODO Workaround for webpack v4, `__webpack_hash__` is not replaced without HotModuleReplacement\n  // eslint-disable-next-line camelcase\n  currentHash:  true ? __webpack_require__.h() : 0\n};\n\n/** @type {Options} */\nvar options = {\n  hot: false,\n  liveReload: false,\n  progress: false,\n  overlay: false\n};\nvar parsedResourceQuery = (0,_utils_parseURL_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(__resourceQuery);\nvar enabledFeatures = {\n  \"Hot Module Replacement\": false,\n  \"Live Reloading\": false,\n  Progress: false,\n  Overlay: false\n};\nif (parsedResourceQuery.hot === \"true\") {\n  options.hot = true;\n  enabledFeatures[\"Hot Module Replacement\"] = true;\n}\nif (parsedResourceQuery[\"live-reload\"] === \"true\") {\n  options.liveReload = true;\n  enabledFeatures[\"Live Reloading\"] = true;\n}\nif (parsedResourceQuery.progress === \"true\") {\n  options.progress = true;\n  enabledFeatures.Progress = true;\n}\nif (parsedResourceQuery.overlay) {\n  try {\n    options.overlay = JSON.parse(parsedResourceQuery.overlay);\n  } catch (e) {\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.error(\"Error parsing overlay options from resource query:\", e);\n  }\n\n  // Fill in default \"true\" params for partially-specified objects.\n  if (_typeof(options.overlay) === \"object\") {\n    options.overlay = _objectSpread({\n      errors: true,\n      warnings: true,\n      runtimeErrors: true\n    }, options.overlay);\n    decodeOverlayOptions(options.overlay);\n  }\n  enabledFeatures.Overlay = true;\n}\nif (parsedResourceQuery.logging) {\n  options.logging = parsedResourceQuery.logging;\n}\nif (typeof parsedResourceQuery.reconnect !== \"undefined\") {\n  options.reconnect = Number(parsedResourceQuery.reconnect);\n}\n\n/**\n * @param {string} level\n */\nfunction setAllLogLevel(level) {\n  // This is needed because the HMR logger operate separately from dev server logger\n  webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0___default().setLogLevel(level === \"verbose\" || level === \"log\" ? \"info\" : level);\n  (0,_utils_log_js__WEBPACK_IMPORTED_MODULE_5__.setLogLevel)(level);\n}\nif (options.logging) {\n  setAllLogLevel(options.logging);\n}\n(0,_utils_log_js__WEBPACK_IMPORTED_MODULE_5__.logEnabledFeatures)(enabledFeatures);\nself.addEventListener(\"beforeunload\", function () {\n  status.isUnloading = true;\n});\nvar overlay = typeof window !== \"undefined\" ? (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.createOverlay)(_typeof(options.overlay) === \"object\" ? {\n  trustedTypesPolicyName: options.overlay.trustedTypesPolicyName,\n  catchRuntimeError: options.overlay.runtimeErrors\n} : {\n  trustedTypesPolicyName: false,\n  catchRuntimeError: options.overlay\n}) : {\n  send: function send() {}\n};\nvar onSocketMessage = {\n  hot: function hot() {\n    if (parsedResourceQuery.hot === \"false\") {\n      return;\n    }\n    options.hot = true;\n  },\n  liveReload: function liveReload() {\n    if (parsedResourceQuery[\"live-reload\"] === \"false\") {\n      return;\n    }\n    options.liveReload = true;\n  },\n  invalid: function invalid() {\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info(\"App updated. Recompiling...\");\n\n    // Fixes #1042. overlay doesn't clear if errors are fixed but warnings remain.\n    if (options.overlay) {\n      overlay.send({\n        type: \"DISMISS\"\n      });\n    }\n    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"Invalid\");\n  },\n  /**\n   * @param {string} hash\n   */\n  hash: function hash(_hash) {\n    status.previousHash = status.currentHash;\n    status.currentHash = _hash;\n  },\n  logging: setAllLogLevel,\n  /**\n   * @param {boolean} value\n   */\n  overlay: function overlay(value) {\n    if (typeof document === \"undefined\") {\n      return;\n    }\n    options.overlay = value;\n    decodeOverlayOptions(options.overlay);\n  },\n  /**\n   * @param {number} value\n   */\n  reconnect: function reconnect(value) {\n    if (parsedResourceQuery.reconnect === \"false\") {\n      return;\n    }\n    options.reconnect = value;\n  },\n  /**\n   * @param {boolean} value\n   */\n  progress: function progress(value) {\n    options.progress = value;\n  },\n  /**\n   * @param {{ pluginName?: string, percent: number, msg: string }} data\n   */\n  \"progress-update\": function progressUpdate(data) {\n    if (options.progress) {\n      _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info(\"\".concat(data.pluginName ? \"[\".concat(data.pluginName, \"] \") : \"\").concat(data.percent, \"% - \").concat(data.msg, \".\"));\n    }\n    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"Progress\", data);\n  },\n  \"still-ok\": function stillOk() {\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info(\"Nothing changed.\");\n    if (options.overlay) {\n      overlay.send({\n        type: \"DISMISS\"\n      });\n    }\n    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"StillOk\");\n  },\n  ok: function ok() {\n    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"Ok\");\n    if (options.overlay) {\n      overlay.send({\n        type: \"DISMISS\"\n      });\n    }\n    (0,_utils_reloadApp_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(options, status);\n  },\n  // TODO: remove in v5 in favor of 'static-changed'\n  /**\n   * @param {string} file\n   */\n  \"content-changed\": function contentChanged(file) {\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info(\"\".concat(file ? \"\\\"\".concat(file, \"\\\"\") : \"Content\", \" from static directory was changed. Reloading...\"));\n    self.location.reload();\n  },\n  /**\n   * @param {string} file\n   */\n  \"static-changed\": function staticChanged(file) {\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info(\"\".concat(file ? \"\\\"\".concat(file, \"\\\"\") : \"Content\", \" from static directory was changed. Reloading...\"));\n    self.location.reload();\n  },\n  /**\n   * @param {Error[]} warnings\n   * @param {any} params\n   */\n  warnings: function warnings(_warnings, params) {\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.warn(\"Warnings while compiling.\");\n    var printableWarnings = _warnings.map(function (error) {\n      var _formatProblem = (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.formatProblem)(\"warning\", error),\n        header = _formatProblem.header,\n        body = _formatProblem.body;\n      return \"\".concat(header, \"\\n\").concat((0,_utils_stripAnsi_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(body));\n    });\n    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"Warnings\", printableWarnings);\n    for (var i = 0; i < printableWarnings.length; i++) {\n      _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.warn(printableWarnings[i]);\n    }\n    var overlayWarningsSetting = typeof options.overlay === \"boolean\" ? options.overlay : options.overlay && options.overlay.warnings;\n    if (overlayWarningsSetting) {\n      var warningsToDisplay = typeof overlayWarningsSetting === \"function\" ? _warnings.filter(overlayWarningsSetting) : _warnings;\n      if (warningsToDisplay.length) {\n        overlay.send({\n          type: \"BUILD_ERROR\",\n          level: \"warning\",\n          messages: _warnings\n        });\n      }\n    }\n    if (params && params.preventReloading) {\n      return;\n    }\n    (0,_utils_reloadApp_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(options, status);\n  },\n  /**\n   * @param {Error[]} errors\n   */\n  errors: function errors(_errors) {\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.error(\"Errors while compiling. Reload prevented.\");\n    var printableErrors = _errors.map(function (error) {\n      var _formatProblem2 = (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.formatProblem)(\"error\", error),\n        header = _formatProblem2.header,\n        body = _formatProblem2.body;\n      return \"\".concat(header, \"\\n\").concat((0,_utils_stripAnsi_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(body));\n    });\n    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"Errors\", printableErrors);\n    for (var i = 0; i < printableErrors.length; i++) {\n      _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.error(printableErrors[i]);\n    }\n    var overlayErrorsSettings = typeof options.overlay === \"boolean\" ? options.overlay : options.overlay && options.overlay.errors;\n    if (overlayErrorsSettings) {\n      var errorsToDisplay = typeof overlayErrorsSettings === \"function\" ? _errors.filter(overlayErrorsSettings) : _errors;\n      if (errorsToDisplay.length) {\n        overlay.send({\n          type: \"BUILD_ERROR\",\n          level: \"error\",\n          messages: _errors\n        });\n      }\n    }\n  },\n  /**\n   * @param {Error} error\n   */\n  error: function error(_error) {\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.error(_error);\n  },\n  close: function close() {\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info(\"Disconnected!\");\n    if (options.overlay) {\n      overlay.send({\n        type: \"DISMISS\"\n      });\n    }\n    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"Close\");\n  }\n};\nvar socketURL = (0,_utils_createSocketURL_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(parsedResourceQuery);\n(0,_socket_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(socketURL, onSocketMessage, options.reconnect);\n\n//# sourceURL=webpack://albrecht-photo/./node_modules/webpack-dev-server/client/index.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/modules/logger/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/modules/logger/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n/******/(function () {\n  // webpackBootstrap\n  /******/\n  \"use strict\";\n\n  /******/\n  var __webpack_modules__ = {\n    /***/\"./client-src/modules/logger/SyncBailHookFake.js\":\n    /*!*******************************************************!*\\\n      !*** ./client-src/modules/logger/SyncBailHookFake.js ***!\n      \\*******************************************************/\n    /***/\n    function clientSrcModulesLoggerSyncBailHookFakeJs(module) {\n      /**\n       * Client stub for tapable SyncBailHook\n       */\n      module.exports = function clientTapableSyncBailHook() {\n        return {\n          call: function call() {}\n        };\n      };\n\n      /***/\n    },\n\n    /***/\"./node_modules/webpack/lib/logging/Logger.js\":\n    /*!****************************************************!*\\\n      !*** ./node_modules/webpack/lib/logging/Logger.js ***!\n      \\****************************************************/\n    /***/\n    function node_modulesWebpackLibLoggingLoggerJs(__unused_webpack_module, exports) {\n      /*\n      \tMIT License http://www.opensource.org/licenses/mit-license.php\n      \tAuthor Tobias Koppers @sokra\n      */\n\n      function _toConsumableArray(arr) {\n        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n      }\n      function _nonIterableSpread() {\n        throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n      }\n      function _unsupportedIterableToArray(o, minLen) {\n        if (!o) return;\n        if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n        var n = Object.prototype.toString.call(o).slice(8, -1);\n        if (n === \"Object\" && o.constructor) n = o.constructor.name;\n        if (n === \"Map\" || n === \"Set\") return Array.from(o);\n        if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n      }\n      function _iterableToArray(iter) {\n        if (typeof (typeof Symbol !== \"undefined\" ? Symbol : function (i) {\n          return i;\n        }) !== \"undefined\" && iter[(typeof Symbol !== \"undefined\" ? Symbol : function (i) {\n          return i;\n        }).iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n      }\n      function _arrayWithoutHoles(arr) {\n        if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n      }\n      function _arrayLikeToArray(arr, len) {\n        if (len == null || len > arr.length) len = arr.length;\n        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];\n        return arr2;\n      }\n      function _classCallCheck(instance, Constructor) {\n        if (!(instance instanceof Constructor)) {\n          throw new TypeError(\"Cannot call a class as a function\");\n        }\n      }\n      function _defineProperties(target, props) {\n        for (var i = 0; i < props.length; i++) {\n          var descriptor = props[i];\n          descriptor.enumerable = descriptor.enumerable || false;\n          descriptor.configurable = true;\n          if (\"value\" in descriptor) descriptor.writable = true;\n          Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);\n        }\n      }\n      function _createClass(Constructor, protoProps, staticProps) {\n        if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n        if (staticProps) _defineProperties(Constructor, staticProps);\n        Object.defineProperty(Constructor, \"prototype\", {\n          writable: false\n        });\n        return Constructor;\n      }\n      function _toPropertyKey(arg) {\n        var key = _toPrimitive(arg, \"string\");\n        return _typeof(key) === \"symbol\" ? key : String(key);\n      }\n      function _toPrimitive(input, hint) {\n        if (_typeof(input) !== \"object\" || input === null) return input;\n        var prim = input[(typeof Symbol !== \"undefined\" ? Symbol : function (i) {\n          return i;\n        }).toPrimitive];\n        if (prim !== undefined) {\n          var res = prim.call(input, hint || \"default\");\n          if (_typeof(res) !== \"object\") return res;\n          throw new TypeError(\"@@toPrimitive must return a primitive value.\");\n        }\n        return (hint === \"string\" ? String : Number)(input);\n      }\n      var LogType = Object.freeze({\n        error: /** @type {\"error\"} */\"error\",\n        // message, c style arguments\n        warn: /** @type {\"warn\"} */\"warn\",\n        // message, c style arguments\n        info: /** @type {\"info\"} */\"info\",\n        // message, c style arguments\n        log: /** @type {\"log\"} */\"log\",\n        // message, c style arguments\n        debug: /** @type {\"debug\"} */\"debug\",\n        // message, c style arguments\n\n        trace: /** @type {\"trace\"} */\"trace\",\n        // no arguments\n\n        group: /** @type {\"group\"} */\"group\",\n        // [label]\n        groupCollapsed: /** @type {\"groupCollapsed\"} */\"groupCollapsed\",\n        // [label]\n        groupEnd: /** @type {\"groupEnd\"} */\"groupEnd\",\n        // [label]\n\n        profile: /** @type {\"profile\"} */\"profile\",\n        // [profileName]\n        profileEnd: /** @type {\"profileEnd\"} */\"profileEnd\",\n        // [profileName]\n\n        time: /** @type {\"time\"} */\"time\",\n        // name, time as [seconds, nanoseconds]\n\n        clear: /** @type {\"clear\"} */\"clear\",\n        // no arguments\n        status: /** @type {\"status\"} */\"status\" // message, arguments\n      });\n\n      exports.LogType = LogType;\n\n      /** @typedef {typeof LogType[keyof typeof LogType]} LogTypeEnum */\n\n      var LOG_SYMBOL = (typeof Symbol !== \"undefined\" ? Symbol : function (i) {\n        return i;\n      })(\"webpack logger raw log method\");\n      var TIMERS_SYMBOL = (typeof Symbol !== \"undefined\" ? Symbol : function (i) {\n        return i;\n      })(\"webpack logger times\");\n      var TIMERS_AGGREGATES_SYMBOL = (typeof Symbol !== \"undefined\" ? Symbol : function (i) {\n        return i;\n      })(\"webpack logger aggregated times\");\n      var WebpackLogger = /*#__PURE__*/function () {\n        /**\n         * @param {function(LogTypeEnum, any[]=): void} log log function\n         * @param {function(string | function(): string): WebpackLogger} getChildLogger function to create child logger\n         */\n        function WebpackLogger(log, getChildLogger) {\n          _classCallCheck(this, WebpackLogger);\n          this[LOG_SYMBOL] = log;\n          this.getChildLogger = getChildLogger;\n        }\n        _createClass(WebpackLogger, [{\n          key: \"error\",\n          value: function error() {\n            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n              args[_key] = arguments[_key];\n            }\n            this[LOG_SYMBOL](LogType.error, args);\n          }\n        }, {\n          key: \"warn\",\n          value: function warn() {\n            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n              args[_key2] = arguments[_key2];\n            }\n            this[LOG_SYMBOL](LogType.warn, args);\n          }\n        }, {\n          key: \"info\",\n          value: function info() {\n            for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {\n              args[_key3] = arguments[_key3];\n            }\n            this[LOG_SYMBOL](LogType.info, args);\n          }\n        }, {\n          key: \"log\",\n          value: function log() {\n            for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {\n              args[_key4] = arguments[_key4];\n            }\n            this[LOG_SYMBOL](LogType.log, args);\n          }\n        }, {\n          key: \"debug\",\n          value: function debug() {\n            for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {\n              args[_key5] = arguments[_key5];\n            }\n            this[LOG_SYMBOL](LogType.debug, args);\n          }\n        }, {\n          key: \"assert\",\n          value: function assert(assertion) {\n            if (!assertion) {\n              for (var _len6 = arguments.length, args = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {\n                args[_key6 - 1] = arguments[_key6];\n              }\n              this[LOG_SYMBOL](LogType.error, args);\n            }\n          }\n        }, {\n          key: \"trace\",\n          value: function trace() {\n            this[LOG_SYMBOL](LogType.trace, [\"Trace\"]);\n          }\n        }, {\n          key: \"clear\",\n          value: function clear() {\n            this[LOG_SYMBOL](LogType.clear);\n          }\n        }, {\n          key: \"status\",\n          value: function status() {\n            for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {\n              args[_key7] = arguments[_key7];\n            }\n            this[LOG_SYMBOL](LogType.status, args);\n          }\n        }, {\n          key: \"group\",\n          value: function group() {\n            for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {\n              args[_key8] = arguments[_key8];\n            }\n            this[LOG_SYMBOL](LogType.group, args);\n          }\n        }, {\n          key: \"groupCollapsed\",\n          value: function groupCollapsed() {\n            for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {\n              args[_key9] = arguments[_key9];\n            }\n            this[LOG_SYMBOL](LogType.groupCollapsed, args);\n          }\n        }, {\n          key: \"groupEnd\",\n          value: function groupEnd() {\n            for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {\n              args[_key10] = arguments[_key10];\n            }\n            this[LOG_SYMBOL](LogType.groupEnd, args);\n          }\n        }, {\n          key: \"profile\",\n          value: function profile(label) {\n            this[LOG_SYMBOL](LogType.profile, [label]);\n          }\n        }, {\n          key: \"profileEnd\",\n          value: function profileEnd(label) {\n            this[LOG_SYMBOL](LogType.profileEnd, [label]);\n          }\n        }, {\n          key: \"time\",\n          value: function time(label) {\n            this[TIMERS_SYMBOL] = this[TIMERS_SYMBOL] || new Map();\n            this[TIMERS_SYMBOL].set(label, process.hrtime());\n          }\n        }, {\n          key: \"timeLog\",\n          value: function timeLog(label) {\n            var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);\n            if (!prev) {\n              throw new Error(\"No such label '\".concat(label, \"' for WebpackLogger.timeLog()\"));\n            }\n            var time = process.hrtime(prev);\n            this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));\n          }\n        }, {\n          key: \"timeEnd\",\n          value: function timeEnd(label) {\n            var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);\n            if (!prev) {\n              throw new Error(\"No such label '\".concat(label, \"' for WebpackLogger.timeEnd()\"));\n            }\n            var time = process.hrtime(prev);\n            this[TIMERS_SYMBOL].delete(label);\n            this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));\n          }\n        }, {\n          key: \"timeAggregate\",\n          value: function timeAggregate(label) {\n            var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);\n            if (!prev) {\n              throw new Error(\"No such label '\".concat(label, \"' for WebpackLogger.timeAggregate()\"));\n            }\n            var time = process.hrtime(prev);\n            this[TIMERS_SYMBOL].delete(label);\n            this[TIMERS_AGGREGATES_SYMBOL] = this[TIMERS_AGGREGATES_SYMBOL] || new Map();\n            var current = this[TIMERS_AGGREGATES_SYMBOL].get(label);\n            if (current !== undefined) {\n              if (time[1] + current[1] > 1e9) {\n                time[0] += current[0] + 1;\n                time[1] = time[1] - 1e9 + current[1];\n              } else {\n                time[0] += current[0];\n                time[1] += current[1];\n              }\n            }\n            this[TIMERS_AGGREGATES_SYMBOL].set(label, time);\n          }\n        }, {\n          key: \"timeAggregateEnd\",\n          value: function timeAggregateEnd(label) {\n            if (this[TIMERS_AGGREGATES_SYMBOL] === undefined) return;\n            var time = this[TIMERS_AGGREGATES_SYMBOL].get(label);\n            if (time === undefined) return;\n            this[TIMERS_AGGREGATES_SYMBOL].delete(label);\n            this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));\n          }\n        }]);\n        return WebpackLogger;\n      }();\n      exports.Logger = WebpackLogger;\n\n      /***/\n    },\n\n    /***/\"./node_modules/webpack/lib/logging/createConsoleLogger.js\":\n    /*!*****************************************************************!*\\\n      !*** ./node_modules/webpack/lib/logging/createConsoleLogger.js ***!\n      \\*****************************************************************/\n    /***/\n    function node_modulesWebpackLibLoggingCreateConsoleLoggerJs(module, __unused_webpack_exports, __nested_webpack_require_13625__) {\n      /*\n      \tMIT License http://www.opensource.org/licenses/mit-license.php\n      \tAuthor Tobias Koppers @sokra\n      */\n\n      function _toConsumableArray(arr) {\n        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n      }\n      function _nonIterableSpread() {\n        throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n      }\n      function _unsupportedIterableToArray(o, minLen) {\n        if (!o) return;\n        if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n        var n = Object.prototype.toString.call(o).slice(8, -1);\n        if (n === \"Object\" && o.constructor) n = o.constructor.name;\n        if (n === \"Map\" || n === \"Set\") return Array.from(o);\n        if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n      }\n      function _iterableToArray(iter) {\n        if (typeof (typeof Symbol !== \"undefined\" ? Symbol : function (i) {\n          return i;\n        }) !== \"undefined\" && iter[(typeof Symbol !== \"undefined\" ? Symbol : function (i) {\n          return i;\n        }).iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n      }\n      function _arrayWithoutHoles(arr) {\n        if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n      }\n      function _arrayLikeToArray(arr, len) {\n        if (len == null || len > arr.length) len = arr.length;\n        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];\n        return arr2;\n      }\n      var _require = __nested_webpack_require_13625__( /*! ./Logger */\"./node_modules/webpack/lib/logging/Logger.js\"),\n        LogType = _require.LogType;\n\n      /** @typedef {import(\"../../declarations/WebpackOptions\").FilterItemTypes} FilterItemTypes */\n      /** @typedef {import(\"../../declarations/WebpackOptions\").FilterTypes} FilterTypes */\n      /** @typedef {import(\"./Logger\").LogTypeEnum} LogTypeEnum */\n\n      /** @typedef {function(string): boolean} FilterFunction */\n\n      /**\n       * @typedef {Object} LoggerConsole\n       * @property {function(): void} clear\n       * @property {function(): void} trace\n       * @property {(...args: any[]) => void} info\n       * @property {(...args: any[]) => void} log\n       * @property {(...args: any[]) => void} warn\n       * @property {(...args: any[]) => void} error\n       * @property {(...args: any[]) => void=} debug\n       * @property {(...args: any[]) => void=} group\n       * @property {(...args: any[]) => void=} groupCollapsed\n       * @property {(...args: any[]) => void=} groupEnd\n       * @property {(...args: any[]) => void=} status\n       * @property {(...args: any[]) => void=} profile\n       * @property {(...args: any[]) => void=} profileEnd\n       * @property {(...args: any[]) => void=} logTime\n       */\n\n      /**\n       * @typedef {Object} LoggerOptions\n       * @property {false|true|\"none\"|\"error\"|\"warn\"|\"info\"|\"log\"|\"verbose\"} level loglevel\n       * @property {FilterTypes|boolean} debug filter for debug logging\n       * @property {LoggerConsole} console the console to log to\n       */\n\n      /**\n       * @param {FilterItemTypes} item an input item\n       * @returns {FilterFunction} filter function\n       */\n      var filterToFunction = function filterToFunction(item) {\n        if (typeof item === \"string\") {\n          var regExp = new RegExp(\"[\\\\\\\\/]\".concat(item.replace(\n          // eslint-disable-next-line no-useless-escape\n          /[-[\\]{}()*+?.\\\\^$|]/g, \"\\\\$&\"), \"([\\\\\\\\/]|$|!|\\\\?)\"));\n          return function (ident) {\n            return regExp.test(ident);\n          };\n        }\n        if (item && _typeof(item) === \"object\" && typeof item.test === \"function\") {\n          return function (ident) {\n            return item.test(ident);\n          };\n        }\n        if (typeof item === \"function\") {\n          return item;\n        }\n        if (typeof item === \"boolean\") {\n          return function () {\n            return item;\n          };\n        }\n      };\n\n      /**\n       * @enum {number}\n       */\n      var LogLevel = {\n        none: 6,\n        false: 6,\n        error: 5,\n        warn: 4,\n        info: 3,\n        log: 2,\n        true: 2,\n        verbose: 1\n      };\n\n      /**\n       * @param {LoggerOptions} options options object\n       * @returns {function(string, LogTypeEnum, any[]): void} logging function\n       */\n      module.exports = function (_ref) {\n        var _ref$level = _ref.level,\n          level = _ref$level === void 0 ? \"info\" : _ref$level,\n          _ref$debug = _ref.debug,\n          debug = _ref$debug === void 0 ? false : _ref$debug,\n          console = _ref.console;\n        var debugFilters = typeof debug === \"boolean\" ? [function () {\n          return debug;\n        }] : /** @type {FilterItemTypes[]} */[].concat(debug).map(filterToFunction);\n        /** @type {number} */\n        var loglevel = LogLevel[\"\".concat(level)] || 0;\n\n        /**\n         * @param {string} name name of the logger\n         * @param {LogTypeEnum} type type of the log entry\n         * @param {any[]} args arguments of the log entry\n         * @returns {void}\n         */\n        var logger = function logger(name, type, args) {\n          var labeledArgs = function labeledArgs() {\n            if (Array.isArray(args)) {\n              if (args.length > 0 && typeof args[0] === \"string\") {\n                return [\"[\".concat(name, \"] \").concat(args[0])].concat(_toConsumableArray(args.slice(1)));\n              } else {\n                return [\"[\".concat(name, \"]\")].concat(_toConsumableArray(args));\n              }\n            } else {\n              return [];\n            }\n          };\n          var debug = debugFilters.some(function (f) {\n            return f(name);\n          });\n          switch (type) {\n            case LogType.debug:\n              if (!debug) return;\n              // eslint-disable-next-line node/no-unsupported-features/node-builtins\n              if (typeof console.debug === \"function\") {\n                // eslint-disable-next-line node/no-unsupported-features/node-builtins\n                console.debug.apply(console, _toConsumableArray(labeledArgs()));\n              } else {\n                console.log.apply(console, _toConsumableArray(labeledArgs()));\n              }\n              break;\n            case LogType.log:\n              if (!debug && loglevel > LogLevel.log) return;\n              console.log.apply(console, _toConsumableArray(labeledArgs()));\n              break;\n            case LogType.info:\n              if (!debug && loglevel > LogLevel.info) return;\n              console.info.apply(console, _toConsumableArray(labeledArgs()));\n              break;\n            case LogType.warn:\n              if (!debug && loglevel > LogLevel.warn) return;\n              console.warn.apply(console, _toConsumableArray(labeledArgs()));\n              break;\n            case LogType.error:\n              if (!debug && loglevel > LogLevel.error) return;\n              console.error.apply(console, _toConsumableArray(labeledArgs()));\n              break;\n            case LogType.trace:\n              if (!debug) return;\n              console.trace();\n              break;\n            case LogType.groupCollapsed:\n              if (!debug && loglevel > LogLevel.log) return;\n              if (!debug && loglevel > LogLevel.verbose) {\n                // eslint-disable-next-line node/no-unsupported-features/node-builtins\n                if (typeof console.groupCollapsed === \"function\") {\n                  // eslint-disable-next-line node/no-unsupported-features/node-builtins\n                  console.groupCollapsed.apply(console, _toConsumableArray(labeledArgs()));\n                } else {\n                  console.log.apply(console, _toConsumableArray(labeledArgs()));\n                }\n                break;\n              }\n            // falls through\n            case LogType.group:\n              if (!debug && loglevel > LogLevel.log) return;\n              // eslint-disable-next-line node/no-unsupported-features/node-builtins\n              if (typeof console.group === \"function\") {\n                // eslint-disable-next-line node/no-unsupported-features/node-builtins\n                console.group.apply(console, _toConsumableArray(labeledArgs()));\n              } else {\n                console.log.apply(console, _toConsumableArray(labeledArgs()));\n              }\n              break;\n            case LogType.groupEnd:\n              if (!debug && loglevel > LogLevel.log) return;\n              // eslint-disable-next-line node/no-unsupported-features/node-builtins\n              if (typeof console.groupEnd === \"function\") {\n                // eslint-disable-next-line node/no-unsupported-features/node-builtins\n                console.groupEnd();\n              }\n              break;\n            case LogType.time:\n              {\n                if (!debug && loglevel > LogLevel.log) return;\n                var ms = args[1] * 1000 + args[2] / 1000000;\n                var msg = \"[\".concat(name, \"] \").concat(args[0], \": \").concat(ms, \" ms\");\n                if (typeof console.logTime === \"function\") {\n                  console.logTime(msg);\n                } else {\n                  console.log(msg);\n                }\n                break;\n              }\n            case LogType.profile:\n              // eslint-disable-next-line node/no-unsupported-features/node-builtins\n              if (typeof console.profile === \"function\") {\n                // eslint-disable-next-line node/no-unsupported-features/node-builtins\n                console.profile.apply(console, _toConsumableArray(labeledArgs()));\n              }\n              break;\n            case LogType.profileEnd:\n              // eslint-disable-next-line node/no-unsupported-features/node-builtins\n              if (typeof console.profileEnd === \"function\") {\n                // eslint-disable-next-line node/no-unsupported-features/node-builtins\n                console.profileEnd.apply(console, _toConsumableArray(labeledArgs()));\n              }\n              break;\n            case LogType.clear:\n              if (!debug && loglevel > LogLevel.log) return;\n              // eslint-disable-next-line node/no-unsupported-features/node-builtins\n              if (typeof console.clear === \"function\") {\n                // eslint-disable-next-line node/no-unsupported-features/node-builtins\n                console.clear();\n              }\n              break;\n            case LogType.status:\n              if (!debug && loglevel > LogLevel.info) return;\n              if (typeof console.status === \"function\") {\n                if (args.length === 0) {\n                  console.status();\n                } else {\n                  console.status.apply(console, _toConsumableArray(labeledArgs()));\n                }\n              } else {\n                if (args.length !== 0) {\n                  console.info.apply(console, _toConsumableArray(labeledArgs()));\n                }\n              }\n              break;\n            default:\n              throw new Error(\"Unexpected LogType \".concat(type));\n          }\n        };\n        return logger;\n      };\n\n      /***/\n    },\n\n    /***/\"./node_modules/webpack/lib/logging/runtime.js\":\n    /*!*****************************************************!*\\\n      !*** ./node_modules/webpack/lib/logging/runtime.js ***!\n      \\*****************************************************/\n    /***/\n    function node_modulesWebpackLibLoggingRuntimeJs(__unused_webpack_module, exports, __nested_webpack_require_25279__) {\n      /*\n      \tMIT License http://www.opensource.org/licenses/mit-license.php\n      \tAuthor Tobias Koppers @sokra\n      */\n\n      function _extends() {\n        _extends = Object.assign ? Object.assign.bind() : function (target) {\n          for (var i = 1; i < arguments.length; i++) {\n            var source = arguments[i];\n            for (var key in source) {\n              if (Object.prototype.hasOwnProperty.call(source, key)) {\n                target[key] = source[key];\n              }\n            }\n          }\n          return target;\n        };\n        return _extends.apply(this, arguments);\n      }\n      var SyncBailHook = __nested_webpack_require_25279__( /*! tapable/lib/SyncBailHook */\"./client-src/modules/logger/SyncBailHookFake.js\");\n      var _require = __nested_webpack_require_25279__( /*! ./Logger */\"./node_modules/webpack/lib/logging/Logger.js\"),\n        Logger = _require.Logger;\n      var createConsoleLogger = __nested_webpack_require_25279__( /*! ./createConsoleLogger */\"./node_modules/webpack/lib/logging/createConsoleLogger.js\");\n\n      /** @type {createConsoleLogger.LoggerOptions} */\n      var currentDefaultLoggerOptions = {\n        level: \"info\",\n        debug: false,\n        console: console\n      };\n      var currentDefaultLogger = createConsoleLogger(currentDefaultLoggerOptions);\n\n      /**\n       * @param {string} name name of the logger\n       * @returns {Logger} a logger\n       */\n      exports.getLogger = function (name) {\n        return new Logger(function (type, args) {\n          if (exports.hooks.log.call(name, type, args) === undefined) {\n            currentDefaultLogger(name, type, args);\n          }\n        }, function (childName) {\n          return exports.getLogger(\"\".concat(name, \"/\").concat(childName));\n        });\n      };\n\n      /**\n       * @param {createConsoleLogger.LoggerOptions} options new options, merge with old options\n       * @returns {void}\n       */\n      exports.configureDefaultLogger = function (options) {\n        _extends(currentDefaultLoggerOptions, options);\n        currentDefaultLogger = createConsoleLogger(currentDefaultLoggerOptions);\n      };\n      exports.hooks = {\n        log: new SyncBailHook([\"origin\", \"type\", \"args\"])\n      };\n\n      /***/\n    }\n\n    /******/\n  };\n  /************************************************************************/\n  /******/ // The module cache\n  /******/\n  var __webpack_module_cache__ = {};\n  /******/\n  /******/ // The require function\n  /******/\n  function __nested_webpack_require_27744__(moduleId) {\n    /******/ // Check if module is in cache\n    /******/var cachedModule = __webpack_module_cache__[moduleId];\n    /******/\n    if (cachedModule !== undefined) {\n      /******/return cachedModule.exports;\n      /******/\n    }\n    /******/ // Create a new module (and put it into the cache)\n    /******/\n    var module = __webpack_module_cache__[moduleId] = {\n      /******/ // no module.id needed\n      /******/ // no module.loaded needed\n      /******/exports: {}\n      /******/\n    };\n    /******/\n    /******/ // Execute the module function\n    /******/\n    __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_27744__);\n    /******/\n    /******/ // Return the exports of the module\n    /******/\n    return module.exports;\n    /******/\n  }\n  /******/\n  /************************************************************************/\n  /******/ /* webpack/runtime/define property getters */\n  /******/\n  !function () {\n    /******/ // define getter functions for harmony exports\n    /******/__nested_webpack_require_27744__.d = function (exports, definition) {\n      /******/for (var key in definition) {\n        /******/if (__nested_webpack_require_27744__.o(definition, key) && !__nested_webpack_require_27744__.o(exports, key)) {\n          /******/Object.defineProperty(exports, key, {\n            enumerable: true,\n            get: definition[key]\n          });\n          /******/\n        }\n        /******/\n      }\n      /******/\n    };\n    /******/\n  }();\n  /******/\n  /******/ /* webpack/runtime/hasOwnProperty shorthand */\n  /******/\n  !function () {\n    /******/__nested_webpack_require_27744__.o = function (obj, prop) {\n      return Object.prototype.hasOwnProperty.call(obj, prop);\n    };\n    /******/\n  }();\n  /******/\n  /******/ /* webpack/runtime/make namespace object */\n  /******/\n  !function () {\n    /******/ // define __esModule on exports\n    /******/__nested_webpack_require_27744__.r = function (exports) {\n      /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {\n        /******/Object.defineProperty(exports, Symbol.toStringTag, {\n          value: 'Module'\n        });\n        /******/\n      }\n      /******/\n      Object.defineProperty(exports, '__esModule', {\n        value: true\n      });\n      /******/\n    };\n    /******/\n  }();\n  /******/\n  /************************************************************************/\n  var __nested_webpack_exports__ = {};\n  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.\n  !function () {\n    /*!********************************************!*\\\n      !*** ./client-src/modules/logger/index.js ***!\n      \\********************************************/\n    __nested_webpack_require_27744__.r(__nested_webpack_exports__);\n    /* harmony export */\n    __nested_webpack_require_27744__.d(__nested_webpack_exports__, {\n      /* harmony export */\"default\": function _default() {\n        return (/* reexport default export from named module */webpack_lib_logging_runtime_js__WEBPACK_IMPORTED_MODULE_0__\n        );\n      }\n      /* harmony export */\n    });\n    /* harmony import */\n    var webpack_lib_logging_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_27744__( /*! webpack/lib/logging/runtime.js */\"./node_modules/webpack/lib/logging/runtime.js\");\n  }();\n  var __webpack_export_target__ = exports;\n  for (var i in __nested_webpack_exports__) __webpack_export_target__[i] = __nested_webpack_exports__[i];\n  if (__nested_webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, \"__esModule\", {\n    value: true\n  });\n  /******/\n})();\n\n//# sourceURL=webpack://albrecht-photo/./node_modules/webpack-dev-server/client/modules/logger/index.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/overlay.js":
/*!***********************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/overlay.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createOverlay: () => (/* binding */ createOverlay),\n/* harmony export */   formatProblem: () => (/* binding */ formatProblem)\n/* harmony export */ });\n/* harmony import */ var ansi_html_community__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ansi-html-community */ \"./node_modules/ansi-html-community/index.js\");\n/* harmony import */ var ansi_html_community__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ansi_html_community__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var html_entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! html-entities */ \"./node_modules/html-entities/lib/index.js\");\n/* harmony import */ var html_entities__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(html_entities__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _overlay_runtime_error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./overlay/runtime-error.js */ \"./node_modules/webpack-dev-server/client/overlay/runtime-error.js\");\n/* harmony import */ var _overlay_state_machine_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./overlay/state-machine.js */ \"./node_modules/webpack-dev-server/client/overlay/state-machine.js\");\n/* harmony import */ var _overlay_styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overlay/styles.js */ \"./node_modules/webpack-dev-server/client/overlay/styles.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction ownKeys(object, enumerableOnly) {\n  var keys = Object.keys(object);\n  if (Object.getOwnPropertySymbols) {\n    var symbols = Object.getOwnPropertySymbols(object);\n    enumerableOnly && (symbols = symbols.filter(function (sym) {\n      return Object.getOwnPropertyDescriptor(object, sym).enumerable;\n    })), keys.push.apply(keys, symbols);\n  }\n  return keys;\n}\nfunction _objectSpread(target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = null != arguments[i] ? arguments[i] : {};\n    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {\n      _defineProperty(target, key, source[key]);\n    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {\n      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));\n    });\n  }\n  return target;\n}\nfunction _defineProperty(obj, key, value) {\n  key = _toPropertyKey(key);\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n  return obj;\n}\nfunction _toPropertyKey(arg) {\n  var key = _toPrimitive(arg, \"string\");\n  return _typeof(key) === \"symbol\" ? key : String(key);\n}\nfunction _toPrimitive(input, hint) {\n  if (_typeof(input) !== \"object\" || input === null) return input;\n  var prim = input[Symbol.toPrimitive];\n  if (prim !== undefined) {\n    var res = prim.call(input, hint || \"default\");\n    if (_typeof(res) !== \"object\") return res;\n    throw new TypeError(\"@@toPrimitive must return a primitive value.\");\n  }\n  return (hint === \"string\" ? String : Number)(input);\n}\n// The error overlay is inspired (and mostly copied) from Create React App (https://github.com/facebookincubator/create-react-app)\n// They, in turn, got inspired by webpack-hot-middleware (https://github.com/glenjamin/webpack-hot-middleware).\n\n\n\n\n\n\nvar colors = {\n  reset: [\"transparent\", \"transparent\"],\n  black: \"181818\",\n  red: \"E36049\",\n  green: \"B3CB74\",\n  yellow: \"FFD080\",\n  blue: \"7CAFC2\",\n  magenta: \"7FACCA\",\n  cyan: \"C3C2EF\",\n  lightgrey: \"EBE7E3\",\n  darkgrey: \"6D7891\"\n};\nansi_html_community__WEBPACK_IMPORTED_MODULE_0___default().setColors(colors);\n\n/**\n * @param {string} type\n * @param {string  | { file?: string, moduleName?: string, loc?: string, message?: string; stack?: string[] }} item\n * @returns {{ header: string, body: string }}\n */\nfunction formatProblem(type, item) {\n  var header = type === \"warning\" ? \"WARNING\" : \"ERROR\";\n  var body = \"\";\n  if (typeof item === \"string\") {\n    body += item;\n  } else {\n    var file = item.file || \"\";\n    // eslint-disable-next-line no-nested-ternary\n    var moduleName = item.moduleName ? item.moduleName.indexOf(\"!\") !== -1 ? \"\".concat(item.moduleName.replace(/^(\\s|\\S)*!/, \"\"), \" (\").concat(item.moduleName, \")\") : \"\".concat(item.moduleName) : \"\";\n    var loc = item.loc;\n    header += \"\".concat(moduleName || file ? \" in \".concat(moduleName ? \"\".concat(moduleName).concat(file ? \" (\".concat(file, \")\") : \"\") : file).concat(loc ? \" \".concat(loc) : \"\") : \"\");\n    body += item.message || \"\";\n  }\n  if (Array.isArray(item.stack)) {\n    item.stack.forEach(function (stack) {\n      if (typeof stack === \"string\") {\n        body += \"\\r\\n\".concat(stack);\n      }\n    });\n  }\n  return {\n    header: header,\n    body: body\n  };\n}\n\n/**\n * @typedef {Object} CreateOverlayOptions\n * @property {string | null} trustedTypesPolicyName\n * @property {boolean | (error: Error) => void} [catchRuntimeError]\n */\n\n/**\n *\n * @param {CreateOverlayOptions} options\n */\nvar createOverlay = function createOverlay(options) {\n  /** @type {HTMLIFrameElement | null | undefined} */\n  var iframeContainerElement;\n  /** @type {HTMLDivElement | null | undefined} */\n  var containerElement;\n  /** @type {HTMLDivElement | null | undefined} */\n  var headerElement;\n  /** @type {Array<(element: HTMLDivElement) => void>} */\n  var onLoadQueue = [];\n  /** @type {TrustedTypePolicy | undefined} */\n  var overlayTrustedTypesPolicy;\n\n  /**\n   *\n   * @param {HTMLElement} element\n   * @param {CSSStyleDeclaration} style\n   */\n  function applyStyle(element, style) {\n    Object.keys(style).forEach(function (prop) {\n      element.style[prop] = style[prop];\n    });\n  }\n\n  /**\n   * @param {string | null} trustedTypesPolicyName\n   */\n  function createContainer(trustedTypesPolicyName) {\n    // Enable Trusted Types if they are available in the current browser.\n    if (window.trustedTypes) {\n      overlayTrustedTypesPolicy = window.trustedTypes.createPolicy(trustedTypesPolicyName || \"webpack-dev-server#overlay\", {\n        createHTML: function createHTML(value) {\n          return value;\n        }\n      });\n    }\n    iframeContainerElement = document.createElement(\"iframe\");\n    iframeContainerElement.id = \"webpack-dev-server-client-overlay\";\n    iframeContainerElement.src = \"about:blank\";\n    applyStyle(iframeContainerElement, _overlay_styles_js__WEBPACK_IMPORTED_MODULE_3__.iframeStyle);\n    iframeContainerElement.onload = function () {\n      var contentElement = /** @type {Document} */\n      /** @type {HTMLIFrameElement} */\n      iframeContainerElement.contentDocument.createElement(\"div\");\n      containerElement = /** @type {Document} */\n      /** @type {HTMLIFrameElement} */\n      iframeContainerElement.contentDocument.createElement(\"div\");\n      contentElement.id = \"webpack-dev-server-client-overlay-div\";\n      applyStyle(contentElement, _overlay_styles_js__WEBPACK_IMPORTED_MODULE_3__.containerStyle);\n      headerElement = document.createElement(\"div\");\n      headerElement.innerText = \"Compiled with problems:\";\n      applyStyle(headerElement, _overlay_styles_js__WEBPACK_IMPORTED_MODULE_3__.headerStyle);\n      var closeButtonElement = document.createElement(\"button\");\n      applyStyle(closeButtonElement, _overlay_styles_js__WEBPACK_IMPORTED_MODULE_3__.dismissButtonStyle);\n      closeButtonElement.innerText = \"×\";\n      closeButtonElement.ariaLabel = \"Dismiss\";\n      closeButtonElement.addEventListener(\"click\", function () {\n        // eslint-disable-next-line no-use-before-define\n        overlayService.send({\n          type: \"DISMISS\"\n        });\n      });\n      contentElement.appendChild(headerElement);\n      contentElement.appendChild(closeButtonElement);\n      contentElement.appendChild(containerElement);\n\n      /** @type {Document} */\n      /** @type {HTMLIFrameElement} */\n      iframeContainerElement.contentDocument.body.appendChild(contentElement);\n      onLoadQueue.forEach(function (onLoad) {\n        onLoad( /** @type {HTMLDivElement} */contentElement);\n      });\n      onLoadQueue = [];\n\n      /** @type {HTMLIFrameElement} */\n      iframeContainerElement.onload = null;\n    };\n    document.body.appendChild(iframeContainerElement);\n  }\n\n  /**\n   * @param {(element: HTMLDivElement) => void} callback\n   * @param {string | null} trustedTypesPolicyName\n   */\n  function ensureOverlayExists(callback, trustedTypesPolicyName) {\n    if (containerElement) {\n      containerElement.innerHTML = \"\";\n      // Everything is ready, call the callback right away.\n      callback(containerElement);\n      return;\n    }\n    onLoadQueue.push(callback);\n    if (iframeContainerElement) {\n      return;\n    }\n    createContainer(trustedTypesPolicyName);\n  }\n\n  // Successful compilation.\n  function hide() {\n    if (!iframeContainerElement) {\n      return;\n    }\n\n    // Clean up and reset internal state.\n    document.body.removeChild(iframeContainerElement);\n    iframeContainerElement = null;\n    containerElement = null;\n  }\n\n  // Compilation with errors (e.g. syntax error or missing modules).\n  /**\n   * @param {string} type\n   * @param {Array<string  | { moduleIdentifier?: string, moduleName?: string, loc?: string, message?: string }>} messages\n   * @param {string | null} trustedTypesPolicyName\n   * @param {'build' | 'runtime'} messageSource\n   */\n  function show(type, messages, trustedTypesPolicyName, messageSource) {\n    ensureOverlayExists(function () {\n      headerElement.innerText = messageSource === \"runtime\" ? \"Uncaught runtime errors:\" : \"Compiled with problems:\";\n      messages.forEach(function (message) {\n        var entryElement = document.createElement(\"div\");\n        var msgStyle = type === \"warning\" ? _overlay_styles_js__WEBPACK_IMPORTED_MODULE_3__.msgStyles.warning : _overlay_styles_js__WEBPACK_IMPORTED_MODULE_3__.msgStyles.error;\n        applyStyle(entryElement, _objectSpread(_objectSpread({}, msgStyle), {}, {\n          padding: \"1rem 1rem 1.5rem 1rem\"\n        }));\n        var typeElement = document.createElement(\"div\");\n        var _formatProblem = formatProblem(type, message),\n          header = _formatProblem.header,\n          body = _formatProblem.body;\n        typeElement.innerText = header;\n        applyStyle(typeElement, _overlay_styles_js__WEBPACK_IMPORTED_MODULE_3__.msgTypeStyle);\n        if (message.moduleIdentifier) {\n          applyStyle(typeElement, {\n            cursor: \"pointer\"\n          });\n          // element.dataset not supported in IE\n          typeElement.setAttribute(\"data-can-open\", true);\n          typeElement.addEventListener(\"click\", function () {\n            fetch(\"/webpack-dev-server/open-editor?fileName=\".concat(message.moduleIdentifier));\n          });\n        }\n\n        // Make it look similar to our terminal.\n        var text = ansi_html_community__WEBPACK_IMPORTED_MODULE_0___default()((0,html_entities__WEBPACK_IMPORTED_MODULE_4__.encode)(body));\n        var messageTextNode = document.createElement(\"div\");\n        applyStyle(messageTextNode, _overlay_styles_js__WEBPACK_IMPORTED_MODULE_3__.msgTextStyle);\n        messageTextNode.innerHTML = overlayTrustedTypesPolicy ? overlayTrustedTypesPolicy.createHTML(text) : text;\n        entryElement.appendChild(typeElement);\n        entryElement.appendChild(messageTextNode);\n\n        /** @type {HTMLDivElement} */\n        containerElement.appendChild(entryElement);\n      });\n    }, trustedTypesPolicyName);\n  }\n  var overlayService = (0,_overlay_state_machine_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n    showOverlay: function showOverlay(_ref) {\n      var _ref$level = _ref.level,\n        level = _ref$level === void 0 ? \"error\" : _ref$level,\n        messages = _ref.messages,\n        messageSource = _ref.messageSource;\n      return show(level, messages, options.trustedTypesPolicyName, messageSource);\n    },\n    hideOverlay: hide\n  });\n  if (options.catchRuntimeError) {\n    /**\n     * @param {Error | undefined} error\n     * @param {string} fallbackMessage\n     */\n    var handleError = function handleError(error, fallbackMessage) {\n      var errorObject = error instanceof Error ? error : new Error(error || fallbackMessage);\n      var shouldDisplay = typeof options.catchRuntimeError === \"function\" ? options.catchRuntimeError(errorObject) : true;\n      if (shouldDisplay) {\n        overlayService.send({\n          type: \"RUNTIME_ERROR\",\n          messages: [{\n            message: errorObject.message,\n            stack: (0,_overlay_runtime_error_js__WEBPACK_IMPORTED_MODULE_1__.parseErrorToStacks)(errorObject)\n          }]\n        });\n      }\n    };\n    (0,_overlay_runtime_error_js__WEBPACK_IMPORTED_MODULE_1__.listenToRuntimeError)(function (errorEvent) {\n      // error property may be empty in older browser like IE\n      var error = errorEvent.error,\n        message = errorEvent.message;\n      if (!error && !message) {\n        return;\n      }\n      handleError(error, message);\n    });\n    (0,_overlay_runtime_error_js__WEBPACK_IMPORTED_MODULE_1__.listenToUnhandledRejection)(function (promiseRejectionEvent) {\n      var reason = promiseRejectionEvent.reason;\n      handleError(reason, \"Unknown promise rejection reason\");\n    });\n  }\n  return overlayService;\n};\n\n\n//# sourceURL=webpack://albrecht-photo/./node_modules/webpack-dev-server/client/overlay.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/overlay/fsm.js":
/*!***************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/overlay/fsm.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction ownKeys(object, enumerableOnly) {\n  var keys = Object.keys(object);\n  if (Object.getOwnPropertySymbols) {\n    var symbols = Object.getOwnPropertySymbols(object);\n    enumerableOnly && (symbols = symbols.filter(function (sym) {\n      return Object.getOwnPropertyDescriptor(object, sym).enumerable;\n    })), keys.push.apply(keys, symbols);\n  }\n  return keys;\n}\nfunction _objectSpread(target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = null != arguments[i] ? arguments[i] : {};\n    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {\n      _defineProperty(target, key, source[key]);\n    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {\n      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));\n    });\n  }\n  return target;\n}\nfunction _defineProperty(obj, key, value) {\n  key = _toPropertyKey(key);\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n  return obj;\n}\nfunction _toPropertyKey(arg) {\n  var key = _toPrimitive(arg, \"string\");\n  return _typeof(key) === \"symbol\" ? key : String(key);\n}\nfunction _toPrimitive(input, hint) {\n  if (_typeof(input) !== \"object\" || input === null) return input;\n  var prim = input[Symbol.toPrimitive];\n  if (prim !== undefined) {\n    var res = prim.call(input, hint || \"default\");\n    if (_typeof(res) !== \"object\") return res;\n    throw new TypeError(\"@@toPrimitive must return a primitive value.\");\n  }\n  return (hint === \"string\" ? String : Number)(input);\n}\n/**\n * @typedef {Object} StateDefinitions\n * @property {{[event: string]: { target: string; actions?: Array<string> }}} [on]\n */\n\n/**\n * @typedef {Object} Options\n * @property {{[state: string]: StateDefinitions}} states\n * @property {object} context;\n * @property {string} initial\n */\n\n/**\n * @typedef {Object} Implementation\n * @property {{[actionName: string]: (ctx: object, event: any) => object}} actions\n */\n\n/**\n * A simplified `createMachine` from `@xstate/fsm` with the following differences:\n *\n *  - the returned machine is technically a \"service\". No `interpret(machine).start()` is needed.\n *  - the state definition only support `on` and target must be declared with { target: 'nextState', actions: [] } explicitly.\n *  - event passed to `send` must be an object with `type` property.\n *  - actions implementation will be [assign action](https://xstate.js.org/docs/guides/context.html#assign-action) if you return any value.\n *  Do not return anything if you just want to invoke side effect.\n *\n * The goal of this custom function is to avoid installing the entire `'xstate/fsm'` package, while enabling modeling using\n * state machine. You can copy the first parameter into the editor at https://stately.ai/viz to visualize the state machine.\n *\n * @param {Options} options\n * @param {Implementation} implementation\n */\nfunction createMachine(_ref, _ref2) {\n  var states = _ref.states,\n    context = _ref.context,\n    initial = _ref.initial;\n  var actions = _ref2.actions;\n  var currentState = initial;\n  var currentContext = context;\n  return {\n    send: function send(event) {\n      var currentStateOn = states[currentState].on;\n      var transitionConfig = currentStateOn && currentStateOn[event.type];\n      if (transitionConfig) {\n        currentState = transitionConfig.target;\n        if (transitionConfig.actions) {\n          transitionConfig.actions.forEach(function (actName) {\n            var actionImpl = actions[actName];\n            var nextContextValue = actionImpl && actionImpl(currentContext, event);\n            if (nextContextValue) {\n              currentContext = _objectSpread(_objectSpread({}, currentContext), nextContextValue);\n            }\n          });\n        }\n      }\n    }\n  };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMachine);\n\n//# sourceURL=webpack://albrecht-photo/./node_modules/webpack-dev-server/client/overlay/fsm.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/overlay/runtime-error.js":
/*!*************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/overlay/runtime-error.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   listenToRuntimeError: () => (/* binding */ listenToRuntimeError),\n/* harmony export */   listenToUnhandledRejection: () => (/* binding */ listenToUnhandledRejection),\n/* harmony export */   parseErrorToStacks: () => (/* binding */ parseErrorToStacks)\n/* harmony export */ });\n/**\n *\n * @param {Error} error\n */\nfunction parseErrorToStacks(error) {\n  if (!error || !(error instanceof Error)) {\n    throw new Error(\"parseErrorToStacks expects Error object\");\n  }\n  if (typeof error.stack === \"string\") {\n    return error.stack.split(\"\\n\").filter(function (stack) {\n      return stack !== \"Error: \".concat(error.message);\n    });\n  }\n}\n\n/**\n * @callback ErrorCallback\n * @param {ErrorEvent} error\n * @returns {void}\n */\n\n/**\n * @param {ErrorCallback} callback\n */\nfunction listenToRuntimeError(callback) {\n  window.addEventListener(\"error\", callback);\n  return function cleanup() {\n    window.removeEventListener(\"error\", callback);\n  };\n}\n\n/**\n * @callback UnhandledRejectionCallback\n * @param {PromiseRejectionEvent} rejectionEvent\n * @returns {void}\n */\n\n/**\n * @param {UnhandledRejectionCallback} callback\n */\nfunction listenToUnhandledRejection(callback) {\n  window.addEventListener(\"unhandledrejection\", callback);\n  return function cleanup() {\n    window.removeEventListener(\"unhandledrejection\", callback);\n  };\n}\n\n\n//# sourceURL=webpack://albrecht-photo/./node_modules/webpack-dev-server/client/overlay/runtime-error.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/overlay/state-machine.js":
/*!*************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/overlay/state-machine.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fsm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fsm.js */ \"./node_modules/webpack-dev-server/client/overlay/fsm.js\");\n\n\n/**\n * @typedef {Object} ShowOverlayData\n * @property {'warning' | 'error'} level\n * @property {Array<string  | { moduleIdentifier?: string, moduleName?: string, loc?: string, message?: string }>} messages\n * @property {'build' | 'runtime'} messageSource\n */\n\n/**\n * @typedef {Object} CreateOverlayMachineOptions\n * @property {(data: ShowOverlayData) => void} showOverlay\n * @property {() => void} hideOverlay\n */\n\n/**\n * @param {CreateOverlayMachineOptions} options\n */\nvar createOverlayMachine = function createOverlayMachine(options) {\n  var hideOverlay = options.hideOverlay,\n    showOverlay = options.showOverlay;\n  var overlayMachine = (0,_fsm_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    initial: \"hidden\",\n    context: {\n      level: \"error\",\n      messages: [],\n      messageSource: \"build\"\n    },\n    states: {\n      hidden: {\n        on: {\n          BUILD_ERROR: {\n            target: \"displayBuildError\",\n            actions: [\"setMessages\", \"showOverlay\"]\n          },\n          RUNTIME_ERROR: {\n            target: \"displayRuntimeError\",\n            actions: [\"setMessages\", \"showOverlay\"]\n          }\n        }\n      },\n      displayBuildError: {\n        on: {\n          DISMISS: {\n            target: \"hidden\",\n            actions: [\"dismissMessages\", \"hideOverlay\"]\n          },\n          BUILD_ERROR: {\n            target: \"displayBuildError\",\n            actions: [\"appendMessages\", \"showOverlay\"]\n          }\n        }\n      },\n      displayRuntimeError: {\n        on: {\n          DISMISS: {\n            target: \"hidden\",\n            actions: [\"dismissMessages\", \"hideOverlay\"]\n          },\n          RUNTIME_ERROR: {\n            target: \"displayRuntimeError\",\n            actions: [\"appendMessages\", \"showOverlay\"]\n          },\n          BUILD_ERROR: {\n            target: \"displayBuildError\",\n            actions: [\"setMessages\", \"showOverlay\"]\n          }\n        }\n      }\n    }\n  }, {\n    actions: {\n      dismissMessages: function dismissMessages() {\n        return {\n          messages: [],\n          level: \"error\",\n          messageSource: \"build\"\n        };\n      },\n      appendMessages: function appendMessages(context, event) {\n        return {\n          messages: context.messages.concat(event.messages),\n          level: event.level || context.level,\n          messageSource: event.type === \"RUNTIME_ERROR\" ? \"runtime\" : \"build\"\n        };\n      },\n      setMessages: function setMessages(context, event) {\n        return {\n          messages: event.messages,\n          level: event.level || context.level,\n          messageSource: event.type === \"RUNTIME_ERROR\" ? \"runtime\" : \"build\"\n        };\n      },\n      hideOverlay: hideOverlay,\n      showOverlay: showOverlay\n    }\n  });\n  return overlayMachine;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createOverlayMachine);\n\n//# sourceURL=webpack://albrecht-photo/./node_modules/webpack-dev-server/client/overlay/state-machine.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/overlay/styles.js":
/*!******************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/overlay/styles.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   containerStyle: () => (/* binding */ containerStyle),\n/* harmony export */   dismissButtonStyle: () => (/* binding */ dismissButtonStyle),\n/* harmony export */   headerStyle: () => (/* binding */ headerStyle),\n/* harmony export */   iframeStyle: () => (/* binding */ iframeStyle),\n/* harmony export */   msgStyles: () => (/* binding */ msgStyles),\n/* harmony export */   msgTextStyle: () => (/* binding */ msgTextStyle),\n/* harmony export */   msgTypeStyle: () => (/* binding */ msgTypeStyle)\n/* harmony export */ });\n// styles are inspired by `react-error-overlay`\n\nvar msgStyles = {\n  error: {\n    backgroundColor: \"rgba(206, 17, 38, 0.1)\",\n    color: \"#fccfcf\"\n  },\n  warning: {\n    backgroundColor: \"rgba(251, 245, 180, 0.1)\",\n    color: \"#fbf5b4\"\n  }\n};\nvar iframeStyle = {\n  position: \"fixed\",\n  top: 0,\n  left: 0,\n  right: 0,\n  bottom: 0,\n  width: \"100vw\",\n  height: \"100vh\",\n  border: \"none\",\n  \"z-index\": 9999999999\n};\nvar containerStyle = {\n  position: \"fixed\",\n  boxSizing: \"border-box\",\n  left: 0,\n  top: 0,\n  right: 0,\n  bottom: 0,\n  width: \"100vw\",\n  height: \"100vh\",\n  fontSize: \"large\",\n  padding: \"2rem 2rem 4rem 2rem\",\n  lineHeight: \"1.2\",\n  whiteSpace: \"pre-wrap\",\n  overflow: \"auto\",\n  backgroundColor: \"rgba(0, 0, 0, 0.9)\",\n  color: \"white\"\n};\nvar headerStyle = {\n  color: \"#e83b46\",\n  fontSize: \"2em\",\n  whiteSpace: \"pre-wrap\",\n  fontFamily: \"sans-serif\",\n  margin: \"0 2rem 2rem 0\",\n  flex: \"0 0 auto\",\n  maxHeight: \"50%\",\n  overflow: \"auto\"\n};\nvar dismissButtonStyle = {\n  color: \"#ffffff\",\n  lineHeight: \"1rem\",\n  fontSize: \"1.5rem\",\n  padding: \"1rem\",\n  cursor: \"pointer\",\n  position: \"absolute\",\n  right: 0,\n  top: 0,\n  backgroundColor: \"transparent\",\n  border: \"none\"\n};\nvar msgTypeStyle = {\n  color: \"#e83b46\",\n  fontSize: \"1.2em\",\n  marginBottom: \"1rem\",\n  fontFamily: \"sans-serif\"\n};\nvar msgTextStyle = {\n  lineHeight: \"1.5\",\n  fontSize: \"1rem\",\n  fontFamily: \"Menlo, Consolas, monospace\"\n};\n\n\n//# sourceURL=webpack://albrecht-photo/./node_modules/webpack-dev-server/client/overlay/styles.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/socket.js":
/*!**********************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/socket.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   client: () => (/* binding */ client),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _clients_WebSocketClient_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clients/WebSocketClient.js */ \"./node_modules/webpack-dev-server/client/clients/WebSocketClient.js\");\n/* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/log.js */ \"./node_modules/webpack-dev-server/client/utils/log.js\");\n/* provided dependency */ var __webpack_dev_server_client__ = __webpack_require__(/*! ./node_modules/webpack-dev-server/client/clients/WebSocketClient.js */ \"./node_modules/webpack-dev-server/client/clients/WebSocketClient.js\");\n/* global __webpack_dev_server_client__ */\n\n\n\n\n// this WebsocketClient is here as a default fallback, in case the client is not injected\n/* eslint-disable camelcase */\nvar Client =\n// eslint-disable-next-line no-nested-ternary\ntypeof __webpack_dev_server_client__ !== \"undefined\" ? typeof __webpack_dev_server_client__.default !== \"undefined\" ? __webpack_dev_server_client__.default : __webpack_dev_server_client__ : _clients_WebSocketClient_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n/* eslint-enable camelcase */\n\nvar retries = 0;\nvar maxRetries = 10;\n\n// Initialized client is exported so external consumers can utilize the same instance\n// It is mutable to enforce singleton\n// eslint-disable-next-line import/no-mutable-exports\nvar client = null;\n\n/**\n * @param {string} url\n * @param {{ [handler: string]: (data?: any, params?: any) => any }} handlers\n * @param {number} [reconnect]\n */\nvar socket = function initSocket(url, handlers, reconnect) {\n  client = new Client(url);\n  client.onOpen(function () {\n    retries = 0;\n    if (typeof reconnect !== \"undefined\") {\n      maxRetries = reconnect;\n    }\n  });\n  client.onClose(function () {\n    if (retries === 0) {\n      handlers.close();\n    }\n\n    // Try to reconnect.\n    client = null;\n\n    // After 10 retries stop trying, to prevent logspam.\n    if (retries < maxRetries) {\n      // Exponentially increase timeout to reconnect.\n      // Respectfully copied from the package `got`.\n      // eslint-disable-next-line no-restricted-properties\n      var retryInMs = 1000 * Math.pow(2, retries) + Math.random() * 100;\n      retries += 1;\n      _utils_log_js__WEBPACK_IMPORTED_MODULE_1__.log.info(\"Trying to reconnect...\");\n      setTimeout(function () {\n        socket(url, handlers, reconnect);\n      }, retryInMs);\n    }\n  });\n  client.onMessage(\n  /**\n   * @param {any} data\n   */\n  function (data) {\n    var message = JSON.parse(data);\n    if (handlers[message.type]) {\n      handlers[message.type](message.data, message.params);\n    }\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (socket);\n\n//# sourceURL=webpack://albrecht-photo/./node_modules/webpack-dev-server/client/socket.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/createSocketURL.js":
/*!*************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/createSocketURL.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * @param {{ protocol?: string, auth?: string, hostname?: string, port?: string, pathname?: string, search?: string, hash?: string, slashes?: boolean }} objURL\n * @returns {string}\n */\nfunction format(objURL) {\n  var protocol = objURL.protocol || \"\";\n  if (protocol && protocol.substr(-1) !== \":\") {\n    protocol += \":\";\n  }\n  var auth = objURL.auth || \"\";\n  if (auth) {\n    auth = encodeURIComponent(auth);\n    auth = auth.replace(/%3A/i, \":\");\n    auth += \"@\";\n  }\n  var host = \"\";\n  if (objURL.hostname) {\n    host = auth + (objURL.hostname.indexOf(\":\") === -1 ? objURL.hostname : \"[\".concat(objURL.hostname, \"]\"));\n    if (objURL.port) {\n      host += \":\".concat(objURL.port);\n    }\n  }\n  var pathname = objURL.pathname || \"\";\n  if (objURL.slashes) {\n    host = \"//\".concat(host || \"\");\n    if (pathname && pathname.charAt(0) !== \"/\") {\n      pathname = \"/\".concat(pathname);\n    }\n  } else if (!host) {\n    host = \"\";\n  }\n  var search = objURL.search || \"\";\n  if (search && search.charAt(0) !== \"?\") {\n    search = \"?\".concat(search);\n  }\n  var hash = objURL.hash || \"\";\n  if (hash && hash.charAt(0) !== \"#\") {\n    hash = \"#\".concat(hash);\n  }\n  pathname = pathname.replace(/[?#]/g,\n  /**\n   * @param {string} match\n   * @returns {string}\n   */\n  function (match) {\n    return encodeURIComponent(match);\n  });\n  search = search.replace(\"#\", \"%23\");\n  return \"\".concat(protocol).concat(host).concat(pathname).concat(search).concat(hash);\n}\n\n/**\n * @param {URL & { fromCurrentScript?: boolean }} parsedURL\n * @returns {string}\n */\nfunction createSocketURL(parsedURL) {\n  var hostname = parsedURL.hostname;\n\n  // Node.js module parses it as `::`\n  // `new URL(urlString, [baseURLString])` parses it as '[::]'\n  var isInAddrAny = hostname === \"0.0.0.0\" || hostname === \"::\" || hostname === \"[::]\";\n\n  // why do we need this check?\n  // hostname n/a for file protocol (example, when using electron, ionic)\n  // see: https://github.com/webpack/webpack-dev-server/pull/384\n  if (isInAddrAny && self.location.hostname && self.location.protocol.indexOf(\"http\") === 0) {\n    hostname = self.location.hostname;\n  }\n  var socketURLProtocol = parsedURL.protocol || self.location.protocol;\n\n  // When https is used in the app, secure web sockets are always necessary because the browser doesn't accept non-secure web sockets.\n  if (socketURLProtocol === \"auto:\" || hostname && isInAddrAny && self.location.protocol === \"https:\") {\n    socketURLProtocol = self.location.protocol;\n  }\n  socketURLProtocol = socketURLProtocol.replace(/^(?:http|.+-extension|file)/i, \"ws\");\n  var socketURLAuth = \"\";\n\n  // `new URL(urlString, [baseURLstring])` doesn't have `auth` property\n  // Parse authentication credentials in case we need them\n  if (parsedURL.username) {\n    socketURLAuth = parsedURL.username;\n\n    // Since HTTP basic authentication does not allow empty username,\n    // we only include password if the username is not empty.\n    if (parsedURL.password) {\n      // Result: <username>:<password>\n      socketURLAuth = socketURLAuth.concat(\":\", parsedURL.password);\n    }\n  }\n\n  // In case the host is a raw IPv6 address, it can be enclosed in\n  // the brackets as the brackets are needed in the final URL string.\n  // Need to remove those as url.format blindly adds its own set of brackets\n  // if the host string contains colons. That would lead to non-working\n  // double brackets (e.g. [[::]]) host\n  //\n  // All of these web socket url params are optionally passed in through resourceQuery,\n  // so we need to fall back to the default if they are not provided\n  var socketURLHostname = (hostname || self.location.hostname || \"localhost\").replace(/^\\[(.*)\\]$/, \"$1\");\n  var socketURLPort = parsedURL.port;\n  if (!socketURLPort || socketURLPort === \"0\") {\n    socketURLPort = self.location.port;\n  }\n\n  // If path is provided it'll be passed in via the resourceQuery as a\n  // query param so it has to be parsed out of the querystring in order for the\n  // client to open the socket to the correct location.\n  var socketURLPathname = \"/ws\";\n  if (parsedURL.pathname && !parsedURL.fromCurrentScript) {\n    socketURLPathname = parsedURL.pathname;\n  }\n  return format({\n    protocol: socketURLProtocol,\n    auth: socketURLAuth,\n    hostname: socketURLHostname,\n    port: socketURLPort,\n    pathname: socketURLPathname,\n    slashes: true\n  });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createSocketURL);\n\n//# sourceURL=webpack://albrecht-photo/./node_modules/webpack-dev-server/client/utils/createSocketURL.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/getCurrentScriptSource.js":
/*!********************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/getCurrentScriptSource.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * @returns {string}\n */\nfunction getCurrentScriptSource() {\n  // `document.currentScript` is the most accurate way to find the current script,\n  // but is not supported in all browsers.\n  if (document.currentScript) {\n    return document.currentScript.getAttribute(\"src\");\n  }\n\n  // Fallback to getting all scripts running in the document.\n  var scriptElements = document.scripts || [];\n  var scriptElementsWithSrc = Array.prototype.filter.call(scriptElements, function (element) {\n    return element.getAttribute(\"src\");\n  });\n  if (scriptElementsWithSrc.length > 0) {\n    var currentScript = scriptElementsWithSrc[scriptElementsWithSrc.length - 1];\n    return currentScript.getAttribute(\"src\");\n  }\n\n  // Fail as there was no script to use.\n  throw new Error(\"[webpack-dev-server] Failed to get current script source.\");\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCurrentScriptSource);\n\n//# sourceURL=webpack://albrecht-photo/./node_modules/webpack-dev-server/client/utils/getCurrentScriptSource.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/log.js":
/*!*************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/log.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   log: () => (/* binding */ log),\n/* harmony export */   logEnabledFeatures: () => (/* binding */ logEnabledFeatures),\n/* harmony export */   setLogLevel: () => (/* binding */ setLogLevel)\n/* harmony export */ });\n/* harmony import */ var _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/logger/index.js */ \"./node_modules/webpack-dev-server/client/modules/logger/index.js\");\n/* harmony import */ var _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0__);\n\nvar name = \"webpack-dev-server\";\n// default level is set on the client side, so it does not need\n// to be set by the CLI or API\nvar defaultLevel = \"info\";\n\n// options new options, merge with old options\n/**\n * @param {false | true | \"none\" | \"error\" | \"warn\" | \"info\" | \"log\" | \"verbose\"} level\n * @returns {void}\n */\nfunction setLogLevel(level) {\n  _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default().configureDefaultLogger({\n    level: level\n  });\n}\nsetLogLevel(defaultLevel);\nvar log = _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default().getLogger(name);\nvar logEnabledFeatures = function logEnabledFeatures(features) {\n  var enabledFeatures = Object.keys(features);\n  if (!features || enabledFeatures.length === 0) {\n    return;\n  }\n  var logString = \"Server started:\";\n\n  // Server started: Hot Module Replacement enabled, Live Reloading enabled, Overlay disabled.\n  for (var i = 0; i < enabledFeatures.length; i++) {\n    var key = enabledFeatures[i];\n    logString += \" \".concat(key, \" \").concat(features[key] ? \"enabled\" : \"disabled\", \",\");\n  }\n  // replace last comma with a period\n  logString = logString.slice(0, -1).concat(\".\");\n  log.info(logString);\n};\n\n\n//# sourceURL=webpack://albrecht-photo/./node_modules/webpack-dev-server/client/utils/log.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/parseURL.js":
/*!******************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/parseURL.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getCurrentScriptSource_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCurrentScriptSource.js */ \"./node_modules/webpack-dev-server/client/utils/getCurrentScriptSource.js\");\n\n\n/**\n * @param {string} resourceQuery\n * @returns {{ [key: string]: string | boolean }}\n */\nfunction parseURL(resourceQuery) {\n  /** @type {{ [key: string]: string }} */\n  var options = {};\n  if (typeof resourceQuery === \"string\" && resourceQuery !== \"\") {\n    var searchParams = resourceQuery.slice(1).split(\"&\");\n    for (var i = 0; i < searchParams.length; i++) {\n      var pair = searchParams[i].split(\"=\");\n      options[pair[0]] = decodeURIComponent(pair[1]);\n    }\n  } else {\n    // Else, get the url from the <script> this file was called with.\n    var scriptSource = (0,_getCurrentScriptSource_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    var scriptSourceURL;\n    try {\n      // The placeholder `baseURL` with `window.location.href`,\n      // is to allow parsing of path-relative or protocol-relative URLs,\n      // and will have no effect if `scriptSource` is a fully valid URL.\n      scriptSourceURL = new URL(scriptSource, self.location.href);\n    } catch (error) {\n      // URL parsing failed, do nothing.\n      // We will still proceed to see if we can recover using `resourceQuery`\n    }\n    if (scriptSourceURL) {\n      options = scriptSourceURL;\n      options.fromCurrentScript = true;\n    }\n  }\n  return options;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parseURL);\n\n//# sourceURL=webpack://albrecht-photo/./node_modules/webpack-dev-server/client/utils/parseURL.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/reloadApp.js":
/*!*******************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/reloadApp.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack/hot/emitter.js */ \"./node_modules/webpack/hot/emitter.js\");\n/* harmony import */ var webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log.js */ \"./node_modules/webpack-dev-server/client/utils/log.js\");\n\n\n\n/** @typedef {import(\"../index\").Options} Options\n/** @typedef {import(\"../index\").Status} Status\n\n/**\n * @param {Options} options\n * @param {Status} status\n */\nfunction reloadApp(_ref, status) {\n  var hot = _ref.hot,\n    liveReload = _ref.liveReload;\n  if (status.isUnloading) {\n    return;\n  }\n  var currentHash = status.currentHash,\n    previousHash = status.previousHash;\n  var isInitial = currentHash.indexOf( /** @type {string} */previousHash) >= 0;\n  if (isInitial) {\n    return;\n  }\n\n  /**\n   * @param {Window} rootWindow\n   * @param {number} intervalId\n   */\n  function applyReload(rootWindow, intervalId) {\n    clearInterval(intervalId);\n    _log_js__WEBPACK_IMPORTED_MODULE_1__.log.info(\"App updated. Reloading...\");\n    rootWindow.location.reload();\n  }\n  var search = self.location.search.toLowerCase();\n  var allowToHot = search.indexOf(\"webpack-dev-server-hot=false\") === -1;\n  var allowToLiveReload = search.indexOf(\"webpack-dev-server-live-reload=false\") === -1;\n  if (hot && allowToHot) {\n    _log_js__WEBPACK_IMPORTED_MODULE_1__.log.info(\"App hot update...\");\n    webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0___default().emit(\"webpackHotUpdate\", status.currentHash);\n    if (typeof self !== \"undefined\" && self.window) {\n      // broadcast update to window\n      self.postMessage(\"webpackHotUpdate\".concat(status.currentHash), \"*\");\n    }\n  }\n  // allow refreshing the page only if liveReload isn't disabled\n  else if (liveReload && allowToLiveReload) {\n    var rootWindow = self;\n\n    // use parent window for reload (in case we're in an iframe with no valid src)\n    var intervalId = self.setInterval(function () {\n      if (rootWindow.location.protocol !== \"about:\") {\n        // reload immediately if protocol is valid\n        applyReload(rootWindow, intervalId);\n      } else {\n        rootWindow = rootWindow.parent;\n        if (rootWindow.parent === rootWindow) {\n          // if parent equals current window we've reached the root which would continue forever, so trigger a reload anyways\n          applyReload(rootWindow, intervalId);\n        }\n      }\n    });\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reloadApp);\n\n//# sourceURL=webpack://albrecht-photo/./node_modules/webpack-dev-server/client/utils/reloadApp.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/sendMessage.js":
/*!*********************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/sendMessage.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* global __resourceQuery WorkerGlobalScope */\n\n// Send messages to the outside, so plugins can consume it.\n/**\n * @param {string} type\n * @param {any} [data]\n */\nfunction sendMsg(type, data) {\n  if (typeof self !== \"undefined\" && (typeof WorkerGlobalScope === \"undefined\" || !(self instanceof WorkerGlobalScope))) {\n    self.postMessage({\n      type: \"webpack\".concat(type),\n      data: data\n    }, \"*\");\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendMsg);\n\n//# sourceURL=webpack://albrecht-photo/./node_modules/webpack-dev-server/client/utils/sendMessage.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/stripAnsi.js":
/*!*******************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/stripAnsi.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nvar ansiRegex = new RegExp([\"[\\\\u001B\\\\u009B][[\\\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\\\d\\\\/#&.:=?%@~_]+)*|[a-zA-Z\\\\d]+(?:;[-a-zA-Z\\\\d\\\\/#&.:=?%@~_]*)*)?\\\\u0007)\", \"(?:(?:\\\\d{1,4}(?:;\\\\d{0,4})*)?[\\\\dA-PR-TZcf-nq-uy=><~]))\"].join(\"|\"), \"g\");\n\n/**\n *\n * Strip [ANSI escape codes](https://en.wikipedia.org/wiki/ANSI_escape_code) from a string.\n * Adapted from code originally released by Sindre Sorhus\n * Licensed the MIT License\n *\n * @param {string} string\n * @return {string}\n */\nfunction stripAnsi(string) {\n  if (typeof string !== \"string\") {\n    throw new TypeError(\"Expected a `string`, got `\".concat(_typeof(string), \"`\"));\n  }\n  return string.replace(ansiRegex, \"\");\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stripAnsi);\n\n//# sourceURL=webpack://albrecht-photo/./node_modules/webpack-dev-server/client/utils/stripAnsi.js?");

/***/ }),

/***/ "./node_modules/webpack/hot/dev-server.js":
/*!************************************************!*\
  !*** ./node_modules/webpack/hot/dev-server.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n/* globals __webpack_hash__ */\nif (true) {\n  /** @type {undefined|string} */\n  var lastHash;\n  var upToDate = function upToDate() {\n    return (/** @type {string} */lastHash.indexOf(__webpack_require__.h()) >= 0\n    );\n  };\n  var log = __webpack_require__(/*! ./log */ \"./node_modules/webpack/hot/log.js\");\n  var check = function check() {\n    module.hot.check(true).then(function (updatedModules) {\n      if (!updatedModules) {\n        log(\"warning\", \"[HMR] Cannot find update. \" + (typeof window !== \"undefined\" ? \"Need to do a full reload!\" : \"Please reload manually!\"));\n        log(\"warning\", \"[HMR] (Probably because of restarting the webpack-dev-server)\");\n        if (typeof window !== \"undefined\") {\n          window.location.reload();\n        }\n        return;\n      }\n      if (!upToDate()) {\n        check();\n      }\n      __webpack_require__(/*! ./log-apply-result */ \"./node_modules/webpack/hot/log-apply-result.js\")(updatedModules, updatedModules);\n      if (upToDate()) {\n        log(\"info\", \"[HMR] App is up to date.\");\n      }\n    }).catch(function (err) {\n      var status = module.hot.status();\n      if ([\"abort\", \"fail\"].indexOf(status) >= 0) {\n        log(\"warning\", \"[HMR] Cannot apply update. \" + (typeof window !== \"undefined\" ? \"Need to do a full reload!\" : \"Please reload manually!\"));\n        log(\"warning\", \"[HMR] \" + log.formatError(err));\n        if (typeof window !== \"undefined\") {\n          window.location.reload();\n        }\n      } else {\n        log(\"warning\", \"[HMR] Update failed: \" + log.formatError(err));\n      }\n    });\n  };\n  var hotEmitter = __webpack_require__(/*! ./emitter */ \"./node_modules/webpack/hot/emitter.js\");\n  hotEmitter.on(\"webpackHotUpdate\", function (currentHash) {\n    lastHash = currentHash;\n    if (!upToDate() && module.hot.status() === \"idle\") {\n      log(\"info\", \"[HMR] Checking for updates on the server...\");\n      check();\n    }\n  });\n  log(\"info\", \"[HMR] Waiting for update signal from WDS...\");\n} else {}\n\n//# sourceURL=webpack://albrecht-photo/./node_modules/webpack/hot/dev-server.js?");

/***/ }),

/***/ "./node_modules/webpack/hot/emitter.js":
/*!*********************************************!*\
  !*** ./node_modules/webpack/hot/emitter.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var EventEmitter = __webpack_require__(/*! events */ \"./node_modules/events/events.js\");\nmodule.exports = new EventEmitter();\n\n//# sourceURL=webpack://albrecht-photo/./node_modules/webpack/hot/emitter.js?");

/***/ }),

/***/ "./node_modules/webpack/hot/log-apply-result.js":
/*!******************************************************!*\
  !*** ./node_modules/webpack/hot/log-apply-result.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\n/**\n * @param {(string | number)[]} updatedModules updated modules\n * @param {(string | number)[] | null} renewedModules renewed modules\n */\nmodule.exports = function (updatedModules, renewedModules) {\n  var unacceptedModules = updatedModules.filter(function (moduleId) {\n    return renewedModules && renewedModules.indexOf(moduleId) < 0;\n  });\n  var log = __webpack_require__(/*! ./log */ \"./node_modules/webpack/hot/log.js\");\n  if (unacceptedModules.length > 0) {\n    log(\"warning\", \"[HMR] The following modules couldn't be hot updated: (They would need a full reload!)\");\n    unacceptedModules.forEach(function (moduleId) {\n      log(\"warning\", \"[HMR]  - \" + moduleId);\n    });\n  }\n  if (!renewedModules || renewedModules.length === 0) {\n    log(\"info\", \"[HMR] Nothing hot updated.\");\n  } else {\n    log(\"info\", \"[HMR] Updated modules:\");\n    renewedModules.forEach(function (moduleId) {\n      if (typeof moduleId === \"string\" && moduleId.indexOf(\"!\") !== -1) {\n        var parts = moduleId.split(\"!\");\n        log.groupCollapsed(\"info\", \"[HMR]  - \" + parts.pop());\n        log(\"info\", \"[HMR]  - \" + moduleId);\n        log.groupEnd(\"info\");\n      } else {\n        log(\"info\", \"[HMR]  - \" + moduleId);\n      }\n    });\n    var numberIds = renewedModules.every(function (moduleId) {\n      return typeof moduleId === \"number\";\n    });\n    if (numberIds) log(\"info\", '[HMR] Consider using the optimization.moduleIds: \"named\" for module names.');\n  }\n};\n\n//# sourceURL=webpack://albrecht-photo/./node_modules/webpack/hot/log-apply-result.js?");

/***/ }),

/***/ "./node_modules/webpack/hot/log.js":
/*!*****************************************!*\
  !*** ./node_modules/webpack/hot/log.js ***!
  \*****************************************/
/***/ ((module) => {

eval("/** @typedef {\"info\" | \"warning\" | \"error\"} LogLevel */\n\n/** @type {LogLevel} */\nvar logLevel = \"info\";\nfunction dummy() {}\n\n/**\n * @param {LogLevel} level log level\n * @returns {boolean} true, if should log\n */\nfunction shouldLog(level) {\n  var shouldLog = logLevel === \"info\" && level === \"info\" || [\"info\", \"warning\"].indexOf(logLevel) >= 0 && level === \"warning\" || [\"info\", \"warning\", \"error\"].indexOf(logLevel) >= 0 && level === \"error\";\n  return shouldLog;\n}\n\n/**\n * @param {(msg?: string) => void} logFn log function\n * @returns {(level: LogLevel, msg?: string) => void} function that logs when log level is sufficient\n */\nfunction logGroup(logFn) {\n  return function (level, msg) {\n    if (shouldLog(level)) {\n      logFn(msg);\n    }\n  };\n}\n\n/**\n * @param {LogLevel} level log level\n * @param {string|Error} msg message\n */\nmodule.exports = function (level, msg) {\n  if (shouldLog(level)) {\n    if (level === \"info\") {\n      console.log(msg);\n    } else if (level === \"warning\") {\n      console.warn(msg);\n    } else if (level === \"error\") {\n      console.error(msg);\n    }\n  }\n};\n\n/* eslint-disable node/no-unsupported-features/node-builtins */\nvar group = console.group || dummy;\nvar groupCollapsed = console.groupCollapsed || dummy;\nvar groupEnd = console.groupEnd || dummy;\n/* eslint-enable node/no-unsupported-features/node-builtins */\n\nmodule.exports.group = logGroup(group);\nmodule.exports.groupCollapsed = logGroup(groupCollapsed);\nmodule.exports.groupEnd = logGroup(groupEnd);\n\n/**\n * @param {LogLevel} level log level\n */\nmodule.exports.setLogLevel = function (level) {\n  logLevel = level;\n};\n\n/**\n * @param {Error} err error\n * @returns {string} formatted error\n */\nmodule.exports.formatError = function (err) {\n  var message = err.message;\n  var stack = err.stack;\n  if (!stack) {\n    return message;\n  } else if (stack.indexOf(message) < 0) {\n    return message + \"\\n\" + stack;\n  } else {\n    return stack;\n  }\n};\n\n//# sourceURL=webpack://albrecht-photo/./node_modules/webpack/hot/log.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.css */ \"./src/styles/index.css\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n\nvar christmasImageOne = new URL(/* asset import */ __webpack_require__(/*! ./images/christmas-project/christmas-1.jpg */ \"./src/images/christmas-project/christmas-1.jpg\"), __webpack_require__.b);\nvar christmasImageTwo = new URL(/* asset import */ __webpack_require__(/*! ./images/christmas-project/christmas-2.jpg */ \"./src/images/christmas-project/christmas-2.jpg\"), __webpack_require__.b);\nvar christmasImageThree = new URL(/* asset import */ __webpack_require__(/*! ./images/christmas-project/christmas-3.jpg */ \"./src/images/christmas-project/christmas-3.jpg\"), __webpack_require__.b);\nvar christmasImageFour = new URL(/* asset import */ __webpack_require__(/*! ./images/christmas-project/christmas-4.jpg */ \"./src/images/christmas-project/christmas-4.jpg\"), __webpack_require__.b);\nvar christmasImageFive = new URL(/* asset import */ __webpack_require__(/*! ./images/christmas-project/christmas-5.jpg */ \"./src/images/christmas-project/christmas-5.jpg\"), __webpack_require__.b);\nvar woodenProjectImageOne = new URL(/* asset import */ __webpack_require__(/*! ./images/wooden-project/wooden-1.jpg */ \"./src/images/wooden-project/wooden-1.jpg\"), __webpack_require__.b);\nvar woodenProjectImageTwo = new URL(/* asset import */ __webpack_require__(/*! ./images/wooden-project/wooden-2.jpg */ \"./src/images/wooden-project/wooden-2.jpg\"), __webpack_require__.b);\nvar woodenProjectImageThree = new URL(/* asset import */ __webpack_require__(/*! ./images/wooden-project/wooden-3.jpg */ \"./src/images/wooden-project/wooden-3.jpg\"), __webpack_require__.b);\nvar woodenProjectImageFour = new URL(/* asset import */ __webpack_require__(/*! ./images/wooden-project/wooden-4.jpg */ \"./src/images/wooden-project/wooden-4.jpg\"), __webpack_require__.b);\nvar woodenProjectImageFive = new URL(/* asset import */ __webpack_require__(/*! ./images/wooden-project/wooden-5.jpg */ \"./src/images/wooden-project/wooden-5.jpg\"), __webpack_require__.b);\nvar sacuraImageOne = new URL(/* asset import */ __webpack_require__(/*! ./images/sacura-project/sacura-1.jpg */ \"./src/images/sacura-project/sacura-1.jpg\"), __webpack_require__.b);\nvar sacuraImageTwo = new URL(/* asset import */ __webpack_require__(/*! ./images/sacura-project/sacura-2.jpg */ \"./src/images/sacura-project/sacura-2.jpg\"), __webpack_require__.b);\nvar sacuraImageThree = new URL(/* asset import */ __webpack_require__(/*! ./images/sacura-project/sacura-3.jpg */ \"./src/images/sacura-project/sacura-3.jpg\"), __webpack_require__.b);\nvar sacuraImageFour = new URL(/* asset import */ __webpack_require__(/*! ./images/sacura-project/sacura-4.jpg */ \"./src/images/sacura-project/sacura-4.jpg\"), __webpack_require__.b);\nvar sacuraImageFive = new URL(/* asset import */ __webpack_require__(/*! ./images/sacura-project/sacura-5.jpg */ \"./src/images/sacura-project/sacura-5.jpg\"), __webpack_require__.b);\nvar parkImageOne = new URL(/* asset import */ __webpack_require__(/*! ./images/park-project/park-1.jpg */ \"./src/images/park-project/park-1.jpg\"), __webpack_require__.b);\nvar parkImageTwo = new URL(/* asset import */ __webpack_require__(/*! ./images/park-project/park-2.jpg */ \"./src/images/park-project/park-2.jpg\"), __webpack_require__.b);\nvar parkImageThree = new URL(/* asset import */ __webpack_require__(/*! ./images/park-project/park-3.jpg */ \"./src/images/park-project/park-3.jpg\"), __webpack_require__.b);\nvar parkImageFour = new URL(/* asset import */ __webpack_require__(/*! ./images/park-project/park-4.jpg */ \"./src/images/park-project/park-4.jpg\"), __webpack_require__.b);\nvar parkImageFive = new URL(/* asset import */ __webpack_require__(/*! ./images/park-project/park-5.jpg */ \"./src/images/park-project/park-5.jpg\"), __webpack_require__.b);\nvar softImageOne = new URL(/* asset import */ __webpack_require__(/*! ./images/soft-project/soft-1.jpg */ \"./src/images/soft-project/soft-1.jpg\"), __webpack_require__.b);\nvar softImageTwo = new URL(/* asset import */ __webpack_require__(/*! ./images/soft-project/soft-2.jpg */ \"./src/images/soft-project/soft-2.jpg\"), __webpack_require__.b);\nvar softImageThree = new URL(/* asset import */ __webpack_require__(/*! ./images/soft-project/soft-3.jpg */ \"./src/images/soft-project/soft-3.jpg\"), __webpack_require__.b);\nvar softImageFour = new URL(/* asset import */ __webpack_require__(/*! ./images/soft-project/soft-4.jpg */ \"./src/images/soft-project/soft-4.jpg\"), __webpack_require__.b);\nvar softImageFive = new URL(/* asset import */ __webpack_require__(/*! ./images/soft-project/soft-5.jpg */ \"./src/images/soft-project/soft-5.jpg\"), __webpack_require__.b);\nvar menuBurger = document.querySelector('.header__burger');\nvar headerBlock = document.querySelector('.header');\nvar container = document.querySelector('.container');\nmenuBurger.addEventListener('click', function () {\n  headerBlock.classList.toggle('header_active');\n  menuBurger.classList.toggle('header__burger_active');\n  container.classList.toggle('container_active');\n});\nvar pastEvents = [{\n  id: 1,\n  title: 'Рождественские фотопроекты',\n  demoImage: christmasImageOne,\n  image: [christmasImageOne, christmasImageTwo, christmasImageThree, christmasImageFour, christmasImageFive],\n  description: \"\\u0412\\u043E\\u043B\\u0448\\u0435\\u0431\\u0441\\u0442\\u0432\\u043E \\u0420\\u043E\\u0436\\u0434\\u0435\\u0441\\u0442\\u0432\\u0430 \\u043E\\u0436\\u0438\\u0432\\u0430\\u0435\\u0442 \\u043D\\u0430 \\u043C\\u043E\\u0438\\u0445 \\u0444\\u043E\\u0442\\u043E\\u043F\\u0440\\u043E\\u0435\\u043A\\u0442\\u0430\\u0445, \\u0433\\u0434\\u0435 \\u0441\\u043E\\u0437\\u0434\\u0430\\u0435\\u0442\\u0441\\u044F \\u0443\\u044E\\u0442\\u043D\\u0430\\u044F \\u0430\\u0442\\u043C\\u043E\\u0441\\u0444\\u0435\\u0440\\u0430 \\u0441\\u0435\\u043C\\u0435\\u0439\\u043D\\u043E\\u0433\\u043E \\u043F\\u0440\\u0430\\u0437\\u0434\\u043D\\u0438\\u043A\\u0430. \\u0412\\u0435\\u043B\\u0438\\u043A\\u043E\\u043B\\u0435\\u043F\\u043D\\u043E\\u0435 \\u0440\\u043E\\u0436\\u0434\\u0435\\u0441\\u0442\\u0432\\u0435\\u043D\\u0441\\u043A\\u043E\\u0435 \\u0443\\u0431\\u0440\\u0430\\u043D\\u0441\\u0442\\u0432\\u043E \\u0441\\u0442\\u0430\\u043D\\u043E\\u0432\\u0438\\u0442\\u0441\\u044F \\u0438\\u0434\\u0435\\u0430\\u043B\\u044C\\u043D\\u044B\\u043C \\u0444\\u043E\\u043D\\u043E\\u043C \\u0434\\u043B\\u044F \\u0441\\u044A\\u0435\\u043C\\u043E\\u043A, \\u0430 \\u0430\\u0440\\u043E\\u043C\\u0430\\u0442 \\u0433\\u043E\\u0440\\u044F\\u0447\\u0435\\u0433\\u043E \\u0448\\u043E\\u043A\\u043E\\u043B\\u0430\\u0434\\u0430 \\u0441 \\u043C\\u0430\\u0440\\u0448\\u043C\\u0435\\u043B\\u043B\\u043E\\u0443 \\u043F\\u0440\\u043E\\u043D\\u0438\\u0437\\u044B\\u0432\\u0430\\u0435\\u0442 \\u0432\\u043E\\u0437\\u0434\\u0443\\u0445, \\u043F\\u043E\\u0434\\u0441\\u0442\\u0435\\u0433\\u0438\\u0432\\u0430\\u044F \\u043F\\u0440\\u0435\\u0434\\u0432\\u043A\\u0443\\u0448\\u0435\\u043D\\u0438\\u0435 \\u043F\\u0440\\u0430\\u0437\\u0434\\u043D\\u0438\\u043A\\u0430.\",\n  link: 'wfolio.com'\n}, {\n  id: 2,\n  title: 'Краски детства',\n  demoImage: woodenProjectImageOne,\n  image: [woodenProjectImageOne, woodenProjectImageTwo, woodenProjectImageThree, woodenProjectImageFour, woodenProjectImageFive],\n  description: 'Проект был потрясающим сотрудничеством с производителем деревянных игрушек ручной работы. Детки наслаждались игрой, а я ловила счастливые моменты из их знакомства с новыми игрушками.',\n  link: 'wfolio.com'\n}, {\n  id: 3,\n  title: 'В цветах сакуры',\n  demoImage: sacuraImageOne,\n  image: [sacuraImageOne, sacuraImageTwo, sacuraImageThree, sacuraImageFour, sacuraImageFive],\n  description: 'Проекты в Пекине привнесли волшебство с весенним цветением сакуры, которая наполнила город невероятной красотой. Вдохновляющий взрыв розового цвета подарил мне идею красивых и нежных кадров, которые я осуществила в своем проекте.',\n  link: 'wfolio.com'\n}, {\n  id: 4,\n  title: 'Фото в парках',\n  demoImage: parkImageOne,\n  image: [parkImageOne, parkImageTwo, parkImageThree, parkImageFour, parkImageFive],\n  description: 'Зелень природы, аромат цветов и прохлада воды создали особую атмосферу проектов в парках. Мы провели множество съемок в самых красивых и уединенных местах, чтобы передать всю прелесть природы.',\n  link: 'wfolio.com'\n}, {\n  id: 5,\n  title: 'Мягкое счастье',\n  demoImage: softImageOne,\n  image: [softImageOne, softImageTwo, softImageThree, softImageFour, softImageFive],\n  description: 'Совместный проект с мастерицей, создающей самые красивые и облачно-воздушные комплекты одеял для деток, оказался нежным и мягким. Мы создали множество трогательных снимков, передавая всю нежность и радость, которые эти одеяла приносят детям.',\n  link: 'wfolio.com'\n}];\ndocument.addEventListener('DOMContentLoaded', function () {\n  // Весь ваш код здесь\n  var tabsList = document.querySelectorAll('.gallery__link');\n  var contentList = document.querySelectorAll('.gallery__item');\n  var galleryList = document.querySelectorAll('.gallery__image');\n  var popupGallery = document.querySelector('.popup-gallery');\n  var popupProject = document.querySelector('.popup-project');\n  var pastEventList = document.querySelectorAll('.past-event');\n  var currentGalleryList;\n  var currentIndex = 0; // Индекс текущего открытого изображения в попапе\n  var allDetails = document.querySelectorAll('.faq__question-list');\n  var container = document.querySelector('.container');\n  pastEventList.forEach(function (item) {\n    var pastEventButton = item.querySelector('.past-event__link');\n    pastEventButton.addEventListener('click', function () {\n      popupProject.classList.add('popup_openned');\n    });\n  });\n\n  // Функция открытия попапа\n  function openPopup(popup) {\n    popup.classList.add('popup_openned');\n  }\n  function updatePopupGallery(popup, event) {\n    var popupImage = popup.querySelector('.popup__image');\n    popupImage.src = event.src;\n    currentGalleryList = Array.from(document.querySelectorAll('.gallery__item.gallery__item_active .gallery__image'));\n    currentIndex = currentGalleryList.findIndex(function (image) {\n      return image.src === event.src;\n    });\n  }\n\n  //Фукция закрытия попапа\n  function closePopup(popup) {\n    popup.classList.remove('popup_openned');\n  }\n\n  // Добавление обработчика события на кнопку закрытия попапа\n  var closePopupButton = document.querySelectorAll('.popup__close');\n  closePopupButton.forEach(function (btn) {\n    btn.addEventListener('click', function () {\n      closePopup(popupGallery);\n      closePopup(popupProject);\n    });\n  });\n\n  //Функция открытия следующей картинки\n  function openNextImage() {\n    currentIndex++; // Увеличиваем индекс текущего изображения\n    if (currentIndex >= currentGalleryList.length) {\n      currentIndex = 0; // Вернуться к первому изображению, если достигнут конец списка\n    }\n\n    updatePopupImage();\n  }\n\n  //Функция открытия предыдущей картинки\n  function openPreviousImage() {\n    currentIndex--; // Уменьшаем индекс текущего изображения\n    if (currentIndex < 0) {\n      currentIndex = currentGalleryList.length - 1; // Перейти к последнему изображению, если достигнуто начало списка\n    }\n\n    updatePopupImage();\n  }\n\n  //Функция обновления изображения\n  function updatePopupImage() {\n    var popupImage = popupGallery.querySelector('.popup__image');\n    var imageSrc = currentGalleryList[currentIndex].src; // Получаем src следующего/предыдущего изображения\n    popupImage.src = imageSrc; // Обновляем src в попапе\n  }\n\n  // Обработчик нажатия клавиш\n  function handleKeyPress(event) {\n    if (event.key === 'ArrowRight') {\n      openNextImage();\n    } else if (event.key === 'ArrowLeft') {\n      openPreviousImage();\n    } else if (event.key === 'Escape') {\n      closePopup(popupGallery);\n      closePopup(popupProject);\n    }\n  }\n\n  // Добавление обработчика событий на нажатие клавиш стрелок и Esc\n  document.addEventListener('keydown', handleKeyPress);\n  galleryList.forEach(function (image, index) {\n    image.addEventListener('click', function (e) {\n      openPopup(popupGallery);\n      updatePopupGallery(popupGallery, e.target);\n      var rightArrow = popupGallery.querySelector('.popup__arrow-right');\n      rightArrow.addEventListener('click', openNextImage);\n      rightArrow.addEventListener('click', openNextImage);\n      var leftArrow = popupGallery.querySelector('.popup__arrow-left');\n      leftArrow.addEventListener('click', openPreviousImage);\n      rightArrow.addEventListener('click', openNextImage);\n    });\n  });\n  tabsList.forEach(function (tab, index) {\n    tab.addEventListener('click', function (e) {\n      tabsList.forEach(function (tab) {\n        tab.classList.remove('gallery__link_active');\n      });\n      e.target.classList.add('gallery__link_active');\n      contentList.forEach(function (content) {\n        content.classList.remove('gallery__item_active');\n      });\n      contentList[index].classList.add('gallery__item_active');\n    });\n  });\n\n  // Автоматическое закрытие предыдущих ответов в FAQ\n  allDetails.forEach(function (item) {\n    item.addEventListener('toggle', toggleOpenOneOnly);\n  });\n  function toggleOpenOneOnly(event) {\n    var _this = this;\n    if (this.open) {\n      allDetails.forEach(function (item) {\n        if (item != _this && item.open) item.open = false;\n      });\n    }\n  }\n\n  // Создаем карточки с прошедшими\n  var templatePastEvent = document.querySelector('#past-event-template').content;\n  var pastEventContainer = document.querySelector('.events__past-events');\n  pastEvents.forEach(function (item) {\n    var newEvent = templatePastEvent.querySelector('.past-event').cloneNode(true);\n    var imageEvent = newEvent.querySelector('.past-event__image');\n    var titleEvent = newEvent.querySelector('.past-event__title');\n    var descriptionEvent = newEvent.querySelector('.past-event__description');\n    var linkEvent = newEvent.querySelector('.past-event__button');\n    imageEvent.src = item.demoImage;\n    titleEvent.textContent = item.title;\n    descriptionEvent.textContent = item.description;\n    linkEvent.addEventListener('click', function (event) {\n      openPopup(popupProject);\n      updateProjectPopupInfo(item);\n    });\n    pastEventContainer.appendChild(newEvent);\n  });\n\n  // Добавляем новые прошедние события\n\n  function updateProjectPopupInfo(item) {\n    var dateProjectPopup = popupProject.querySelector('.popup-project__date');\n    var titleProjectPopup = popupProject.querySelector('.popup-project__title');\n    var descriptionProjectPopup = popupProject.querySelector('.popup-project__description');\n    var linkProjectPopup = popupProject.querySelector('.popup-project__link');\n    var imageOne = popupProject.querySelector('.popup-project__image_1');\n    var imageTwo = popupProject.querySelector('.popup-project__image_2');\n    var imageThree = popupProject.querySelector('.popup-project__image_3');\n    var imageFour = popupProject.querySelector('.popup-project__image_4');\n    var imageFive = popupProject.querySelector('.popup-project__image_5');\n    dateProjectPopup.textContent = item.date;\n    titleProjectPopup.textContent = item.title;\n    descriptionProjectPopup.textContent = item.description;\n    linkProjectPopup.href = item.link;\n    imageOne.src = item.image[0];\n    imageTwo.src = item.image[1];\n    imageThree.src = item.image[2];\n    imageFour.src = item.image[3];\n    imageFive.src = item.image[4];\n  }\n});\nvar linksNav = document.querySelectorAll('.header__link');\nlinksNav.forEach(function (link) {\n  link.addEventListener('click', function (event) {\n    linksNav.forEach(function (link) {\n      link.classList.remove('header__link_active');\n    });\n    event.target.classList.add('header__link_active');\n  });\n  link.addEventListener('click', function (event) {\n    event.preventDefault();\n    var targetId = link.getAttribute('href');\n    var targetSection = document.querySelector(targetId);\n    targetSection.scrollIntoView({\n      behavior: 'smooth'\n    });\n  });\n});\nvar slides = document.querySelectorAll('.slide');\nvar _iterator = _createForOfIteratorHelper(slides),\n  _step;\ntry {\n  var _loop = function _loop() {\n    var slide = _step.value;\n    slide.addEventListener('click', function () {\n      removeClass();\n      slide.classList.add('slide_active');\n    });\n  };\n  for (_iterator.s(); !(_step = _iterator.n()).done;) {\n    _loop();\n  }\n} catch (err) {\n  _iterator.e(err);\n} finally {\n  _iterator.f();\n}\nfunction removeClass() {\n  slides.forEach(function (slide) {\n    slide.classList.remove('slide_active');\n  });\n}\n\n//# sourceURL=webpack://albrecht-photo/./src/index.js?");

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1693923065159\n      var cssReload = __webpack_require__(/*! ../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n\n//# sourceURL=webpack://albrecht-photo/./src/styles/index.css?");

/***/ }),

/***/ "./src/images/christmas-project/christmas-1.jpg":
/*!******************************************************!*\
  !*** ./src/images/christmas-project/christmas-1.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"db5f2d40303803ecfe6a.jpg\";\n\n//# sourceURL=webpack://albrecht-photo/./src/images/christmas-project/christmas-1.jpg?");

/***/ }),

/***/ "./src/images/christmas-project/christmas-2.jpg":
/*!******************************************************!*\
  !*** ./src/images/christmas-project/christmas-2.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"74de3a2801c38ee9212c.jpg\";\n\n//# sourceURL=webpack://albrecht-photo/./src/images/christmas-project/christmas-2.jpg?");

/***/ }),

/***/ "./src/images/christmas-project/christmas-3.jpg":
/*!******************************************************!*\
  !*** ./src/images/christmas-project/christmas-3.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"ee133de9a46874c9750a.jpg\";\n\n//# sourceURL=webpack://albrecht-photo/./src/images/christmas-project/christmas-3.jpg?");

/***/ }),

/***/ "./src/images/christmas-project/christmas-4.jpg":
/*!******************************************************!*\
  !*** ./src/images/christmas-project/christmas-4.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"a953691e1977be28e15c.jpg\";\n\n//# sourceURL=webpack://albrecht-photo/./src/images/christmas-project/christmas-4.jpg?");

/***/ }),

/***/ "./src/images/christmas-project/christmas-5.jpg":
/*!******************************************************!*\
  !*** ./src/images/christmas-project/christmas-5.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b36bfc80c25434450faa.jpg\";\n\n//# sourceURL=webpack://albrecht-photo/./src/images/christmas-project/christmas-5.jpg?");

/***/ }),

/***/ "./src/images/park-project/park-1.jpg":
/*!********************************************!*\
  !*** ./src/images/park-project/park-1.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"d586d8733c08a01ebf53.jpg\";\n\n//# sourceURL=webpack://albrecht-photo/./src/images/park-project/park-1.jpg?");

/***/ }),

/***/ "./src/images/park-project/park-2.jpg":
/*!********************************************!*\
  !*** ./src/images/park-project/park-2.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"65d4bb61a250989ced79.jpg\";\n\n//# sourceURL=webpack://albrecht-photo/./src/images/park-project/park-2.jpg?");

/***/ }),

/***/ "./src/images/park-project/park-3.jpg":
/*!********************************************!*\
  !*** ./src/images/park-project/park-3.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"6d404e66a8ccb27e6a1e.jpg\";\n\n//# sourceURL=webpack://albrecht-photo/./src/images/park-project/park-3.jpg?");

/***/ }),

/***/ "./src/images/park-project/park-4.jpg":
/*!********************************************!*\
  !*** ./src/images/park-project/park-4.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"2d9b1124d1edaa84c2d4.jpg\";\n\n//# sourceURL=webpack://albrecht-photo/./src/images/park-project/park-4.jpg?");

/***/ }),

/***/ "./src/images/park-project/park-5.jpg":
/*!********************************************!*\
  !*** ./src/images/park-project/park-5.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"1fb1fbcb006cf5b6d875.jpg\";\n\n//# sourceURL=webpack://albrecht-photo/./src/images/park-project/park-5.jpg?");

/***/ }),

/***/ "./src/images/sacura-project/sacura-1.jpg":
/*!************************************************!*\
  !*** ./src/images/sacura-project/sacura-1.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"51d8df9ca50287315fd0.jpg\";\n\n//# sourceURL=webpack://albrecht-photo/./src/images/sacura-project/sacura-1.jpg?");

/***/ }),

/***/ "./src/images/sacura-project/sacura-2.jpg":
/*!************************************************!*\
  !*** ./src/images/sacura-project/sacura-2.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"2f59cfc8722bfaf7a435.jpg\";\n\n//# sourceURL=webpack://albrecht-photo/./src/images/sacura-project/sacura-2.jpg?");

/***/ }),

/***/ "./src/images/sacura-project/sacura-3.jpg":
/*!************************************************!*\
  !*** ./src/images/sacura-project/sacura-3.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"0668a536bf7c65c7bc15.jpg\";\n\n//# sourceURL=webpack://albrecht-photo/./src/images/sacura-project/sacura-3.jpg?");

/***/ }),

/***/ "./src/images/sacura-project/sacura-4.jpg":
/*!************************************************!*\
  !*** ./src/images/sacura-project/sacura-4.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"658e71da62696dedd783.jpg\";\n\n//# sourceURL=webpack://albrecht-photo/./src/images/sacura-project/sacura-4.jpg?");

/***/ }),

/***/ "./src/images/sacura-project/sacura-5.jpg":
/*!************************************************!*\
  !*** ./src/images/sacura-project/sacura-5.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"7da624ca14fd5178ef18.jpg\";\n\n//# sourceURL=webpack://albrecht-photo/./src/images/sacura-project/sacura-5.jpg?");

/***/ }),

/***/ "./src/images/soft-project/soft-1.jpg":
/*!********************************************!*\
  !*** ./src/images/soft-project/soft-1.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"c03281f44480e5c20e96.jpg\";\n\n//# sourceURL=webpack://albrecht-photo/./src/images/soft-project/soft-1.jpg?");

/***/ }),

/***/ "./src/images/soft-project/soft-2.jpg":
/*!********************************************!*\
  !*** ./src/images/soft-project/soft-2.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"0c8b866894ee7ff201b1.jpg\";\n\n//# sourceURL=webpack://albrecht-photo/./src/images/soft-project/soft-2.jpg?");

/***/ }),

/***/ "./src/images/soft-project/soft-3.jpg":
/*!********************************************!*\
  !*** ./src/images/soft-project/soft-3.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"df3045bcc4d5cee4f2ac.jpg\";\n\n//# sourceURL=webpack://albrecht-photo/./src/images/soft-project/soft-3.jpg?");

/***/ }),

/***/ "./src/images/soft-project/soft-4.jpg":
/*!********************************************!*\
  !*** ./src/images/soft-project/soft-4.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"df19d7433277a74182c8.jpg\";\n\n//# sourceURL=webpack://albrecht-photo/./src/images/soft-project/soft-4.jpg?");

/***/ }),

/***/ "./src/images/soft-project/soft-5.jpg":
/*!********************************************!*\
  !*** ./src/images/soft-project/soft-5.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"25aa7d529b9118059afd.jpg\";\n\n//# sourceURL=webpack://albrecht-photo/./src/images/soft-project/soft-5.jpg?");

/***/ }),

/***/ "./src/images/wooden-project/wooden-1.jpg":
/*!************************************************!*\
  !*** ./src/images/wooden-project/wooden-1.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"7ab72955ea32e9e03aa6.jpg\";\n\n//# sourceURL=webpack://albrecht-photo/./src/images/wooden-project/wooden-1.jpg?");

/***/ }),

/***/ "./src/images/wooden-project/wooden-2.jpg":
/*!************************************************!*\
  !*** ./src/images/wooden-project/wooden-2.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"65474d961a25d9b8a92f.jpg\";\n\n//# sourceURL=webpack://albrecht-photo/./src/images/wooden-project/wooden-2.jpg?");

/***/ }),

/***/ "./src/images/wooden-project/wooden-3.jpg":
/*!************************************************!*\
  !*** ./src/images/wooden-project/wooden-3.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"6e2906a5d6b19ec9febb.jpg\";\n\n//# sourceURL=webpack://albrecht-photo/./src/images/wooden-project/wooden-3.jpg?");

/***/ }),

/***/ "./src/images/wooden-project/wooden-4.jpg":
/*!************************************************!*\
  !*** ./src/images/wooden-project/wooden-4.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"3c1fe03fd0d050c7c054.jpg\";\n\n//# sourceURL=webpack://albrecht-photo/./src/images/wooden-project/wooden-4.jpg?");

/***/ }),

/***/ "./src/images/wooden-project/wooden-5.jpg":
/*!************************************************!*\
  !*** ./src/images/wooden-project/wooden-5.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"103a75c415bdc3ce6bad.jpg\";\n\n//# sourceURL=webpack://albrecht-photo/./src/images/wooden-project/wooden-5.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("f34bdf75d4e29dd557d9")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "albrecht-photo:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		if (typeof document === "undefined") return;
/******/ 		var createStylesheet = (chunkId, fullhref, oldTag, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					if (linkTag.parentNode) linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			if (oldTag) {
/******/ 				oldTag.parentNode.insertBefore(linkTag, oldTag.nextSibling);
/******/ 			} else {
/******/ 				document.head.appendChild(linkTag);
/******/ 			}
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, null, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// no chunk loading
/******/ 		
/******/ 		var oldTags = [];
/******/ 		var newTags = [];
/******/ 		var applyHandler = (options) => {
/******/ 			return { dispose: () => {
/******/ 				for(var i = 0; i < oldTags.length; i++) {
/******/ 					var oldTag = oldTags[i];
/******/ 					if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
/******/ 				}
/******/ 				oldTags.length = 0;
/******/ 			}, apply: () => {
/******/ 				for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/ 				newTags.length = 0;
/******/ 			} };
/******/ 		}
/******/ 		__webpack_require__.hmrC.miniCss = (chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) => {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			chunkIds.forEach((chunkId) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var oldTag = findStylesheet(href, fullhref);
/******/ 				if(!oldTag) return;
/******/ 				promises.push(new Promise((resolve, reject) => {
/******/ 					var tag = createStylesheet(chunkId, fullhref, oldTag, () => {
/******/ 						tag.as = "style";
/******/ 						tag.rel = "preload";
/******/ 						resolve();
/******/ 					}, reject);
/******/ 					oldTags.push(oldTag);
/******/ 					newTags.push(tag);
/******/ 				}));
/******/ 			});
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatealbrecht_photo"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8080&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true");
/******/ 	__webpack_require__("./node_modules/webpack/hot/dev-server.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;