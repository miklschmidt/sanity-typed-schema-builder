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
exports.object = void 0;
var zod_1 = require("zod");
var field_1 = require("../field");
var types_1 = require("../types");
var object = function (_a) {
    var fields = _a.fields, previewDef = _a.preview, _b = _a.mock, mock = _b === void 0 ? (0, field_1.fieldsMock)(fields) : _b, _c = _a.zod, zodFn = _c === void 0 ? function (zod) {
        return zod;
    } : _c, _d = _a.zodResolved, zodResolved = _d === void 0 ? function (zod) {
        return zod;
    } : _d, def = __rest(_a, ["fields", "preview", "mock", "zod", "zodResolved"]);
    return (0, types_1.createType)({
        mock: mock,
        schema: function () { return (__assign(__assign(__assign({}, def), (0, field_1.fieldsSchema)(fields, previewDef)), { type: "object" })); },
        zod: zodFn(zod_1.z.object((0, field_1.fieldsZodObject)(fields))),
        zodResolved: zodResolved(zod_1.z.object((0, field_1.fieldsZodResolvedObject)(fields))),
    });
};
exports.object = object;
//# sourceMappingURL=index.js.map