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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createType = exports.zodDiscriminatedUnion = exports.zodUnion = void 0;
var zod_1 = require("zod");
var zodUnion = function (zods) {
    return zods.length === 1
        ? zods[0]
        : zod_1.z.union(__spreadArray([zods[0], zods[1]], zods.slice(2), true));
};
exports.zodUnion = zodUnion;
var zodDiscriminatedUnion = function (zods) {
    return zods.length === 1
        ? zods[0]
        : zod_1.z.discriminatedUnion("_type", __spreadArray([
            zods[0],
            zods[1]
        ], zods.slice(2), true));
};
exports.zodDiscriminatedUnion = zodDiscriminatedUnion;
var createMocker = function (mockFn) {
    var fakers = {};
    return function (faker, path) {
        if (path === void 0) { path = ""; }
        // @ts-expect-error -- We need faker to not be bundled with the library while getting both the class to create new instances and faker.locales.
        var FakerClass = faker.constructor;
        if (!(path in fakers)) {
            // eslint-disable-next-line fp/no-mutation -- Need to set fakers
            fakers[path] = new FakerClass({ locales: faker.locales });
            fakers[path].seed(Array.from(path).reduce(
            // eslint-disable-next-line no-bitwise -- copied from somewhere
            function (s, c) { return (Math.imul(31, s) + c.charCodeAt(0)) | 0; }, 0));
        }
        return mockFn(fakers[path], path);
    };
};
// TODO createType tests
var createType = function (_a) {
    var mock = _a.mock, zod = _a.zod, _b = _a.zodResolved, zodResolved = _b === void 0 ? zod : _b, _c = _a.parse, parse = _c === void 0 ? zod.parse.bind(zod) : _c, _d = _a.resolve, resolve = _d === void 0 ? zodResolved.parse.bind(zodResolved) : _d, def = __rest(_a, ["mock", "zod", "zodResolved", "parse", "resolve"]);
    return (__assign(__assign({}, def), { mock: createMocker(mock), parse: parse, resolve: resolve, zod: zod, zodResolved: zodResolved }));
};
exports.createType = createType;
//# sourceMappingURL=types.js.map