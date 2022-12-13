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
exports.array = void 0;
var fp_1 = require("lodash/fp");
var zod_1 = require("zod");
var types_1 = require("../types");
var addKeyToZod = function (zod) {
    return !(zod instanceof zod_1.z.ZodObject)
        ? zod
        : zod.extend({
            _key: zod_1.z.string(),
        });
};
var zodArrayOfLength = function (_a) {
    var length = _a.length, max = _a.max, min = _a.min;
    return function (zods) {
        return (0, fp_1.flow)((0, fp_1.flow)(function (value) { return value; }, (0, fp_1.map)(addKeyToZod), types_1.zodUnion, zod_1.z.array, function (zod) { return (!min ? zod : zod.min(min)); }, function (zod) { return (!max ? zod : zod.max(max)); }, function (zod) { return (length === undefined ? zod : zod.length(length)); }), function (zod) {
            return zod;
        })(zods);
    };
};
var array = function (_a) {
    var length = _a.length, max = _a.max, min = _a.min, validation = _a.validation, items = _a.of, 
    // FIXME Mock the array element types. Not sure how to allow an override, since the function has to be defined before we know the element types.
    _b = _a.mock, 
    // FIXME Mock the array element types. Not sure how to allow an override, since the function has to be defined before we know the element types.
    mock = _b === void 0 ? function () { return []; } : _b, _c = _a.zod, zodFn = _c === void 0 ? function (zod) { return zod; } : _c, _d = _a.zodResolved, zodResolved = _d === void 0 ? function (zod) { return zod; } : _d, def = __rest(_a, ["length", "max", "min", "validation", "of", "mock", "zod", "zodResolved"]);
    return (0, types_1.createType)({
        mock: mock,
        zod: zodFn((0, fp_1.flow)(function (value) { return value; }, (0, fp_1.map)(function (_a) {
            var zod = _a.zod;
            return zod;
        }), zodArrayOfLength({ length: length, max: max, min: min }), function (value) {
            return value;
        })(items)),
        zodResolved: zodResolved((0, fp_1.flow)(function (value) { return value; }, (0, fp_1.map)(function (_a) {
            var zodResolved = _a.zodResolved;
            return zodResolved;
        }), zodArrayOfLength({ length: length, max: max, min: min }), function (value) {
            return value;
        })(items)),
        schema: function () { return (__assign(__assign({}, def), { type: "array", of: items.map(function (_a) {
                var schema = _a.schema;
                return schema();
            }), validation: (0, fp_1.flow)(function (rule) { return (!min ? rule : rule.min(min)); }, function (rule) { return (!max ? rule : rule.max(max)); }, function (rule) { return (length === undefined ? rule : rule.length(length)); }, function (rule) { var _a; return (_a = validation === null || validation === void 0 ? void 0 : validation(rule)) !== null && _a !== void 0 ? _a : rule; }) })); },
    });
};
exports.array = array;
//# sourceMappingURL=index.js.map