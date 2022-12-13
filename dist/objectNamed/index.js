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
exports.objectNamed = void 0;
var zod_1 = require("zod");
var field_1 = require("../field");
var types_1 = require("../types");
var objectNamed = function (_a) {
    var name = _a.name, fields = _a.fields, previewDef = _a.preview, _b = _a.mock, mock = _b === void 0 ? function (faker, path) {
        if (path === void 0) { path = ""; }
        return (__assign(__assign({}, (0, field_1.fieldsMock)(fields)(faker, "".concat(path, ".").concat(name))), { _type: name }));
    } : _b, _c = _a.zod, zodFn = _c === void 0 ? function (zod) {
        return zod;
    } : _c, _d = _a.zodResolved, zodResolved = _d === void 0 ? function (zod) {
        return zod;
    } : _d, def = __rest(_a, ["name", "fields", "preview", "mock", "zod", "zodResolved"]);
    var typeDef = {
        mock: mock,
        zod: zodFn(zod_1.z.object(__assign(__assign({}, (0, field_1.fieldsZodObject)(fields)), { _type: zod_1.z.literal(name) }))),
        zodResolved: zodResolved(zod_1.z.object(__assign(__assign({}, (0, field_1.fieldsZodResolvedObject)(fields)), { _type: zod_1.z.literal(name) }))),
    };
    return __assign(__assign({}, (0, types_1.createType)(__assign(__assign({}, typeDef), { schema: function () { return (__assign(__assign(__assign({}, def), (0, field_1.fieldsSchema)(fields, previewDef)), { name: name, type: "object" })); } }))), { ref: function () {
            return (0, types_1.createType)(__assign(__assign({}, typeDef), { schema: function () { return ({ type: name }); } }));
        } });
};
exports.objectNamed = objectNamed;
//# sourceMappingURL=index.js.map