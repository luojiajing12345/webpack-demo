'use strict';

window.Controller = function (options) {
    var _init = options.init;
    var object = {
        view: null,
        model: null,
        init: function init(view, model) {
            this.view = view;
            //这个this是对象controller
            this.model = model;
            this.model.init();
            _init.call(this, view, model);
            this.bindEvents.call(this);
        }
    };
    for (var key in options) {
        if (key !== 'init') {
            object[key] = options[key];
        }
    }
    return object;
};