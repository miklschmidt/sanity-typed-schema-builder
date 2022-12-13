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
exports.datetime = void 0;
var fp_1 = require("lodash/fp");
var zod_1 = require("zod");
var types_1 = require("../types");
var datetime = function (_a) {
    if (_a === void 0) { _a = {}; }
    var max = _a.max, min = _a.min, validation = _a.validation, _b = _a.mock, mock = _b === void 0 ? function (faker) {
        return faker.date
            .between(min !== null && min !== void 0 ? min : "2021-06-03T03:24:55.395Z", max !== null && max !== void 0 ? max : "2022-06-04T18:50:36.539Z")
            .toISOString();
    } : _b, _c = _a.zod, zodFn = _c === void 0 ? function (zod) {
        return zod
            .transform(function (value) { return new Date(value); })
            .refine(function (date) { return date.toString() !== "Invalid Date"; }, {
            message: "Invalid Date",
        });
    } : _c, zodResolved = _a.zodResolved, def = __rest(_a, ["max", "min", "validation", "mock", "zod", "zodResolved"]);
    var zod = (0, fp_1.flow)(function (zod) {
        return !min
            ? zod
            : zod.refine(function (date) { return new Date(min) <= new Date(date); }, {
                message: "Greater than ".concat(min),
            });
    }, function (zod) {
        return !max
            ? zod
            : zod.refine(function (date) { return new Date(date) <= new Date(max); }, {
                message: "Less than ".concat(max),
            });
    })(zod_1.z.string());
    return (0, types_1.createType)({
        mock: mock,
        schema: function () { return (__assign(__assign({}, def), { type: "datetime", validation: (0, fp_1.flow)(function (rule) {
                return !min ? rule : rule.min(min);
            }, function (rule) { return (!max ? rule : rule.max(max)); }, function (rule) { var _a; return (_a = validation === null || validation === void 0 ? void 0 : validation(rule)) !== null && _a !== void 0 ? _a : rule; }) })); },
        zod: zodFn(zod),
        zodResolved: zodResolved === null || zodResolved === void 0 ? void 0 : zodResolved(zod),
    });
};
exports.datetime = datetime;
//# sourceMappingURL=index.js.map