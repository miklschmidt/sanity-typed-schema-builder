"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.string = void 0;
var fp_1 = require("lodash/fp");
var zod_1 = require("zod");
var list_1 = require("../list");
var types_1 = require("../types");
var string = function (_a) {
    if (_a === void 0) { _a = {}; }
    var length = _a.length, max = _a.max, min = _a.min, options = _a.options, regex = _a.regex, validation = _a.validation, _b = _a.options, _c = _b === void 0 ? {} : _b, list = _c.list, _d = _a.mock, mock = _d === void 0 ? !list
        ? function (faker) { return faker.random.word(); }
        : (0, list_1.listMock)(list) : _d, _e = _a.zod, zodFn = _e === void 0 ? function (zod) {
        return zod;
    } : _e, zodResolved = _a.zodResolved, def = __rest(_a, ["length", "max", "min", "options", "regex", "validation", "options", "mock", "zod", "zodResolved"]);
    var zod = !list
        ? (0, fp_1.flow)(function (zod) { return (!min ? zod : zod.min(min)); }, function (zod) { return (!max ? zod : zod.max(max)); }, function (zod) { return (!length ? zod : zod.length(length)); }, function (zod) { return (!regex ? zod : zod.regex(regex)); }, function (zod) {
            return zod;
        })(zod_1.z.string())
        : (0, fp_1.flow)(function (value) { return value; }, (0, fp_1.map)((0, fp_1.flow)(list_1.listValueToValue, zod_1.z.literal)), types_1.zodUnion)(list);
    return (0, types_1.createType)({
        mock: mock,
        schema: function () { return (__assign(__assign({}, def), { options: options, type: "string", validation: (0, fp_1.flow)(function (rule) { return (!min ? rule : rule.min(min)); }, function (rule) { return (!max ? rule : rule.max(max)); }, function (rule) { return (!length ? rule : rule.length(length)); }, function (rule) { return (!regex ? rule : rule.regex(regex)); }, function (rule) { var _a; return (_a = validation === null || validation === void 0 ? void 0 : validation(rule)) !== null && _a !== void 0 ? _a : rule; }) })); },
        zod: zodFn(zod),
        zodResolved: zodResolved === null || zodResolved === void 0 ? void 0 : zodResolved(zod),
    });
};
exports.string = string;
//# sourceMappingURL=index.js.map