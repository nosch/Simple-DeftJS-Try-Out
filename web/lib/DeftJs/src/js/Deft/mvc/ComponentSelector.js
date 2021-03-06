// Generated by CoffeeScript 1.4.0
/*
Copyright (c) 2012 [DeftJS Framework Contributors](http://deftjs.org)
Open source under the [MIT License](http://en.wikipedia.org/wiki/MIT_License).
*/

/**
* Models a component selector used by Deft.mvc.ViewController to locate view components and attach event listeners.
*/

Ext.define('Deft.mvc.ComponentSelector', {
  requires: ['Ext.ComponentQuery', 'Deft.log.Logger', 'Deft.mvc.ComponentSelectorListener'],
  constructor: function(config) {
    var eventName, fn, listener, options, scope, _ref;
    Ext.apply(this, config);
    if (!this.live) {
      this.components = this.selector != null ? Ext.ComponentQuery.query(this.selector, this.view) : [this.view];
    }
    this.selectorListeners = [];
    if (Ext.isObject(this.listeners)) {
      _ref = this.listeners;
      for (eventName in _ref) {
        listener = _ref[eventName];
        fn = listener;
        scope = this.scope;
        options = null;
        if (Ext.isObject(listener)) {
          options = Ext.apply({}, listener);
          if (options.fn != null) {
            fn = options.fn;
            delete options.fn;
          }
          if (options.scope != null) {
            scope = options.scope;
            delete options.scope;
          }
        }
        if (Ext.isString(fn) && Ext.isFunction(scope[fn])) {
          fn = scope[fn];
        }
        if (!Ext.isFunction(fn)) {
          Ext.Error.raise({
            msg: "Error adding '" + eventName + "' listener: the specified handler '" + fn + "' is not a Function or does not exist."
          });
        }
        this.addListener(eventName, fn, scope, options);
      }
    }
    return this;
  },
  destroy: function() {
    var selectorListener, _i, _len, _ref;
    _ref = this.selectorListeners;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      selectorListener = _ref[_i];
      selectorListener.destroy();
    }
    this.selectorListeners = [];
  },
  /**
  	Add an event listener to this component selector.
  */

  addListener: function(eventName, fn, scope, options) {
    var selectorListener;
    if (this.findListener(eventName, fn, scope) != null) {
      Ext.Error.raise({
        msg: "Error adding '" + eventName + "' listener: an existing listener for the specified function was already registered for '" + this.selector + "."
      });
    }
    Deft.Logger.log("Adding '" + eventName + "' listener to '" + this.selector + "'.");
    selectorListener = Ext.create('Deft.mvc.ComponentSelectorListener', {
      componentSelector: this,
      eventName: eventName,
      fn: fn,
      scope: scope,
      options: options
    });
    this.selectorListeners.push(selectorListener);
  },
  /**
  	Remove an event listener from this component selector.
  */

  removeListener: function(eventName, fn, scope) {
    var selectorListener;
    selectorListener = this.findListener(eventName, fn, scope);
    if (selectorListener != null) {
      Deft.Logger.log("Removing '" + eventName + "' listener from '" + this.selector + "'.");
      selectorListener.destroy();
      Ext.Array.remove(this.selectorListeners, selectorListener);
    }
  },
  findListener: function(eventName, fn, scope) {
    var selectorListener, _i, _len, _ref;
    _ref = this.selectorListeners;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      selectorListener = _ref[_i];
      if (selectorListener.eventName === eventName && selectorListener.fn === fn && selectorListener.scope === scope) {
        return selectorListener;
      }
    }
    return null;
  }
});
