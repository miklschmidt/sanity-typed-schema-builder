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
exports.block = void 0;
var zod_1 = require("zod");
var types_1 = require("../types");
var zod = function () {
    return zod_1.z.object({
        _key: zod_1.z.optional(zod_1.z.string()),
        _type: zod_1.z.string(),
        level: zod_1.z.optional(zod_1.z.number()),
        listItem: zod_1.z.optional(zod_1.z.string()),
        style: zod_1.z.optional(zod_1.z.string()),
        children: zod_1.z.array(zod_1.z
            .object({
            _type: zod_1.z.string(),
            _key: zod_1.z.optional(zod_1.z.string()),
        })
            .catchall(zod_1.z.unknown())),
        markDefs: zod_1.z.optional(zod_1.z.array(zod_1.z
            .object({
            _type: zod_1.z.string(),
            _key: zod_1.z.string(),
        })
            .catchall(zod_1.z.unknown()))),
    });
};
var block = function (_a) {
    if (_a === void 0) { _a = {}; }
    var _b = _a.mock, mock = _b === void 0 ? function (faker) { return ({
        style: "normal",
        _type: "block",
        markDefs: [],
        children: [
            {
                _type: "span",
                text: faker.lorem.paragraph(),
                marks: [],
            },
        ],
    }); } : _b, _c = _a.zod, zodFn = _c === void 0 ? function (zod) {
        return zod;
    } : _c, zodResolved = _a.zodResolved, def = __rest(_a, ["mock", "zod", "zodResolved"]);
    return (0, types_1.createType)({
        mock: mock,
        schema: function () { return (__assign(__assign({}, def), { type: "block" })); },
        zod: zodFn(zod()),
        zodResolved: zodResolved === null || zodResolved === void 0 ? void 0 : zodResolved(zod()),
    });
};
exports.block = block;
//# sourceMappingURL=index.js.map