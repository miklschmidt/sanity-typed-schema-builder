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
exports.document = void 0;
var fp_1 = require("lodash/fp");
var zod_1 = require("zod");
var field_1 = require("../field");
var types_1 = require("../types");
var extraZodFields = function (name) { return ({
    _createdAt: zod_1.z.string().transform(function (v) { return new Date(v); }),
    _id: zod_1.z.string(),
    _rev: zod_1.z.string(),
    _type: zod_1.z.literal(name),
    _updatedAt: zod_1.z.string().transform(function (v) { return new Date(v); }),
}); };
var document = function (_a) {
    var name = _a.name, fields = _a.fields, previewDef = _a.preview, _b = _a.mock, mock = _b === void 0 ? function (faker) {
        var createdAt = faker.date
            .between("2021-06-03T03:24:55.395Z", "2022-06-04T18:50:36.539Z")
            .toISOString();
        return __assign(__assign({}, (0, field_1.fieldsMock)(fields)(faker, name)), { _id: faker.datatype.uuid(), _createdAt: createdAt, _rev: faker.datatype.string(23), _type: name, _updatedAt: faker.date
                .between(createdAt, "2022-06-05T18:50:36.539Z")
                .toISOString() });
    } : _b, _c = _a.zod, zodFn = _c === void 0 ? function (zod) {
        return zod;
    } : _c, _d = _a.zodResolved, zodResolved = _d === void 0 ? function (zod) {
        return zod;
    } : _d, def = __rest(_a, ["name", "fields", "preview", "mock", "zod", "zodResolved"]);
    /* eslint-disable fp/no-let -- Need side effects */
    var counter = 0;
    var mocks = [];
    var mocksById = {};
    /* eslint-enable fp/no-let */
    var getNthMock = function (faker, n) {
        var newMocks = new Array(Math.max(0, n + 1 - mocks.length))
            .fill("test")
            .map(function () { return mock(faker, ""); });
        if (newMocks.length) {
            /* eslint-disable fp/no-mutation -- Need side effects */
            mocks = __spreadArray(__spreadArray([], mocks, true), newMocks, true);
            mocksById = __assign(__assign({}, mocksById), (0, fp_1.keyBy)(function (doc) { return doc._id; }, newMocks));
            /* eslint-enable fp/no-mutation */
        }
        return mocks[n];
    };
    return __assign({ getMockById: function (id) { return mocksById[id]; }, getNthMock: getNthMock, name: name }, (0, types_1.createType)({
        mock: function (faker) {
            // eslint-disable-next-line fp/no-mutation -- Need side effects
            counter += 1;
            return getNthMock(faker, counter);
        },
        schema: function () { return (__assign(__assign(__assign({}, def), (0, field_1.fieldsSchema)(fields, previewDef)), { name: name, type: "document" })); },
        zod: zodFn(zod_1.z.object(__assign(__assign({}, (0, field_1.fieldsZodObject)(fields)), extraZodFields(name)))),
        zodResolved: zodResolved(zod_1.z.object(__assign(__assign({}, (0, field_1.fieldsZodResolvedObject)(fields)), extraZodFields(name)))),
    }));
};
exports.document = document;
//# sourceMappingURL=index.js.map