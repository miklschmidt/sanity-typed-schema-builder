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
exports.reference = exports.referenceZod = void 0;
var zod_1 = require("zod");
var types_1 = require("../types");
var referenceZod = function (weak) {
    return zod_1.z.object({
        _key: zod_1.z.string().optional(),
        _ref: zod_1.z.string(),
        _strengthenOnPublish: zod_1.z
            .object({
            template: zod_1.z
                .object({
                id: zod_1.z.string(),
                params: zod_1.z
                    .object({})
                    .catchall(zod_1.z.union([zod_1.z.string(), zod_1.z.number(), zod_1.z.boolean()])),
            })
                .optional(),
            type: zod_1.z.string(),
            weak: zod_1.z.boolean().optional(),
        })
            .optional(),
        _type: zod_1.z.literal("reference"),
        _weak: weak ? zod_1.z.literal(true) : zod_1.z.boolean().optional(),
    });
};
exports.referenceZod = referenceZod;
var reference = function (_a) {
    var weak = _a.weak, documents = _a.to, _b = _a.zod, zodFn = _b === void 0 ? function (zod) {
        return zod;
    } : _b, _c = _a.zodResolved, zodResolved = _c === void 0 ? function (zod) {
        return zod.transform(function (_a) {
            var _b;
            var _ref = _a._ref;
            return ((_b = documents
                .map(function (_a) {
                var getMockById = _a.getMockById, resolve = _a.resolve;
                var mock = getMockById(_ref);
                return !mock
                    ? null
                    : resolve(mock);
            })
                .find(function (mock) { return mock; })) !== null && _b !== void 0 ? _b : null);
        });
    } : _c, defRaw = __rest(_a, ["weak", "to", "zod", "zodResolved"]);
    // eslint-disable-next-line fp/no-let -- Need side effects
    var counter = 0;
    var _d = defRaw.mock, mock = _d === void 0 ? function (faker) {
        // eslint-disable-next-line fp/no-mutation -- Need side effects
        counter += 1;
        var ref = faker.helpers.arrayElement(documents.map(function (_a) {
            var getNthMock = _a.getNthMock;
            return getNthMock(faker, counter);
        }))._id;
        var isBrokenRef = faker.datatype.boolean();
        var brokenRef = faker.datatype.uuid();
        var mock = {
            _ref: weak && isBrokenRef ? brokenRef : ref,
            _type: "reference",
        };
        return (!weak
            ? mock
            : __assign(__assign({}, mock), { _weak: true }));
    } : _d, def = __rest(defRaw, ["mock"]);
    return (0, types_1.createType)({
        mock: mock,
        schema: function () { return (__assign(__assign({}, def), { weak: weak, type: "reference", to: documents.map(function (_a) {
                var type = _a.name;
                return ({ type: type });
            }) })); },
        zod: zodFn((0, exports.referenceZod)(weak)),
        zodResolved: zodResolved((0, exports.referenceZod)(weak)),
    });
};
exports.reference = reference;
//# sourceMappingURL=index.js.map