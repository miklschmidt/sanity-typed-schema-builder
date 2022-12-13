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
exports.image = void 0;
var zod_1 = require("zod");
var field_1 = require("../field");
var reference_1 = require("../reference");
var types_1 = require("../types");
var extraZodFields = function (hotspot) {
    return (__assign({ _type: zod_1.z.literal("image"), asset: (0, reference_1.referenceZod)(false) }, (!hotspot
        ? {}
        : {
            crop: zod_1.z
                .object({
                _type: zod_1.z.literal("sanity.imageCrop").optional(),
                bottom: zod_1.z.number(),
                left: zod_1.z.number(),
                right: zod_1.z.number(),
                top: zod_1.z.number(),
            })
                .optional(),
            hotspot: zod_1.z
                .object({
                _type: zod_1.z.literal("sanity.imageHotspot").optional(),
                height: zod_1.z.number(),
                width: zod_1.z.number(),
                x: zod_1.z.number(),
                y: zod_1.z.number(),
            })
                .optional(),
        })));
};
var zeroToOne = function (faker) {
    return faker.datatype.number({
        min: 0,
        max: 1,
        precision: 1 / Math.pow(10, 15),
    });
};
var image = function (_a) {
    if (_a === void 0) { _a = {}; }
    var hotspot = _a.hotspot, fields = _a.fields, _b = _a.mock, mock = _b === void 0 ? function (faker, path) {
        return (__assign(__assign(__assign({}, (fields && (0, field_1.fieldsMock)(fields)(faker, path))), { _type: "image", asset: {
                _type: "reference",
                _ref: "image-".concat(faker.random.alphaNumeric(24), "-").concat(faker.datatype.number({
                    min: 900,
                    max: 3000,
                }), "x").concat(faker.datatype.number({
                    min: 900,
                    max: 3000,
                }), "-").concat(faker.helpers.arrayElement([
                    "bmp",
                    "gif",
                    "jpeg",
                    "jpg",
                    "png",
                    "svg",
                    "tif",
                    "tiff",
                ])),
            } }), (!hotspot
            ? {}
            : {
                crop: {
                    top: zeroToOne(faker),
                    bottom: zeroToOne(faker),
                    left: zeroToOne(faker),
                    right: zeroToOne(faker),
                },
                hotspot: {
                    x: zeroToOne(faker),
                    y: zeroToOne(faker),
                    height: zeroToOne(faker),
                    width: zeroToOne(faker),
                },
            })));
    } : _b, _c = _a.zod, zodFn = _c === void 0 ? function (zod) {
        return zod;
    } : _c, _d = _a.zodResolved, zodResolved = _d === void 0 ? function (zod) {
        return zod;
    } : _d, options = _a.options, def = __rest(_a, ["hotspot", "fields", "mock", "zod", "zodResolved", "options"]);
    return (0, types_1.createType)({
        mock: mock,
        schema: function () { return (__assign(__assign(__assign({}, def), (fields && (0, field_1.fieldsSchema)(fields))), { options: __assign(__assign({}, options), { hotspot: Boolean(hotspot) }), type: "image" })); },
        zod: zodFn(zod_1.z.object(__assign(__assign({}, (fields && (0, field_1.fieldsZodObject)(fields))), extraZodFields(hotspot)))),
        zodResolved: zodResolved(zod_1.z.object(__assign(__assign({}, (fields && (0, field_1.fieldsZodResolvedObject)(fields))), extraZodFields(hotspot)))),
    });
};
exports.image = image;
//# sourceMappingURL=index.js.map