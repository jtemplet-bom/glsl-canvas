"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.log = function () {
        var datas = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            datas[_i] = arguments[_i];
        }
        if (Logger.enabled) {
            console.log.apply(console, datas);
        }
    };
    Logger.warn = function () {
        var datas = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            datas[_i] = arguments[_i];
        }
        if (Logger.enabled) {
            console.warn.apply(console, datas);
        }
    };
    Logger.error = function () {
        var datas = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            datas[_i] = arguments[_i];
        }
        if (Logger.enabled) {
            console.error.apply(console, datas);
        }
    };
    Logger.enabled = false;
    return Logger;
}());
exports.default = Logger;
