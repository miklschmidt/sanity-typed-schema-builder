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
exports.fieldsSchema = exports.fieldsMock = exports.fieldsZodResolvedObject = exports.fieldsZodObject = void 0;
var fp_1 = require("lodash/fp");
var zod_1 = require("zod");
var fieldsZodObject = function (fields) {
    return (0, fp_1.fromPairs)(fields.map(function (_a) {
        var name = _a.name, optional = _a.optional, zod = _a.type.zod;
        return [
            name,
            optional ? zod_1.z.optional(zod) : zod,
        ];
    }));
};
exports.fieldsZodObject = fieldsZodObject;
var fieldsZodResolvedObject = function (fields) {
    return (0, fp_1.fromPairs)(fields.map(function (_a) {
        var name = _a.name, optional = _a.optional, zodResolved = _a.type.zodResolved;
        return [
            name,
            optional ? zod_1.z.optional(zodResolved) : zodResolved,
        ];
    }));
};
exports.fieldsZodResolvedObject = fieldsZodResolvedObject;
var fieldsMock = function (fields) {
    return function (faker, path) {
        if (path === void 0) { path = ""; }
        return (0, fp_1.fromPairs)(fields.map(function (_a) {
            var name = _a.name, mock = _a.type.mock;
            return [
                name,
                mock(faker, "".concat(path, ".").concat(name)),
            ];
        }));
    };
};
exports.fieldsMock = fieldsMock;
var fieldsSchema = function (fields, previewDef) {
    var preview = !previewDef
        ? undefined
        : !("prepare" in previewDef)
            ? previewDef
            : __assign(__assign({}, previewDef), { select: __assign(__assign({}, (0, fp_1.fromPairs)(fields.map(function (_a) {
                    var name = _a.name;
                    return [name, name];
                }))), previewDef.select) });
    return {
        preview: preview,
        fields: fields.map(function (_a) {
            var name = _a.name, type = _a.type, optional = _a.optional, props = __rest(_a, ["name", "type", "optional"]);
            var schema = type.schema();
            var validation = schema.validation;
            return __assign(__assign(__assign({}, schema), props), { name: name, validation: (0, fp_1.flow)(function (rule) { return (optional ? rule : rule.required()); }, function (rule) { var _a; return (_a = validation === null || validation === void 0 ? void 0 : validation(rule)) !== null && _a !== void 0 ? _a : rule; }) });
        }),
    };
};
exports.fieldsSchema = fieldsSchema;
//# sourceMappingURL=index.js.map