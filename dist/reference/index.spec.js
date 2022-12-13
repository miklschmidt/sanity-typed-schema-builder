"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker_1 = require("@faker-js/faker");
var globals_1 = require("@jest/globals");
var boolean_1 = require("../boolean");
var document_1 = require("../document");
var test_utils_1 = require("../test-utils");
var _1 = require(".");
(0, globals_1.describe)("reference", function () {
    (0, globals_1.it)("builds a sanity config", function () {
        return (0, globals_1.expect)((0, _1.reference)({
            to: [
                (0, document_1.document)({
                    name: "foo",
                    fields: [
                        {
                            name: "foo",
                            type: (0, boolean_1.boolean)(),
                        },
                    ],
                }),
            ],
        }).schema()).toEqual({
            type: "reference",
            to: [{ type: "foo" }],
        });
    });
    (0, globals_1.it)("passes through schema values", function () {
        return (0, globals_1.expect)((0, _1.reference)({
            to: [
                (0, document_1.document)({
                    name: "foo",
                    fields: [
                        {
                            name: "foo",
                            type: (0, boolean_1.boolean)(),
                        },
                    ],
                }),
            ],
            hidden: false,
        }).schema()).toHaveProperty("hidden", false);
    });
    (0, globals_1.it)("parses into a reference", function () {
        var type = (0, _1.reference)({
            to: [
                (0, document_1.document)({
                    name: "foo",
                    fields: [
                        {
                            name: "foo",
                            type: (0, boolean_1.boolean)(),
                        },
                    ],
                }),
            ],
        });
        var value = {
            _type: "reference",
            _ref: "somereference",
        };
        var parsedValue = type.parse(value);
        (0, globals_1.expect)(parsedValue).toEqual(value);
    });
    (0, globals_1.it)("resolves into a document mock", function () {
        var docType = (0, document_1.document)({
            name: "foo",
            fields: [
                {
                    name: "foo",
                    type: (0, boolean_1.boolean)({}),
                },
            ],
        });
        var type = (0, _1.reference)({
            to: [docType],
        });
        var docMock = docType.resolve(docType.mock(faker_1.faker));
        var value = {
            _type: "reference",
            _ref: docMock._id,
        };
        var resolvedValue = type.resolve(value);
        (0, globals_1.expect)(resolvedValue).toEqual(docMock);
    });
    (0, globals_1.it)("mocks a reference to a document mock", function () {
        var docType = (0, document_1.document)({
            name: "foo",
            fields: [
                {
                    name: "foo",
                    type: (0, boolean_1.boolean)(),
                },
            ],
        });
        var type = (0, _1.reference)({
            to: [docType],
        });
        (0, globals_1.expect)(type.mock(faker_1.faker)).toEqual({
            _ref: docType.mock(faker_1.faker)._id,
            _type: "reference",
        });
        // eslint-disable-next-line no-underscore-dangle -- references have a _ref property
        (0, globals_1.expect)(docType.mock(faker_1.faker)._id).toEqual(type.mock(faker_1.faker)._ref);
    });
    (0, globals_1.it)("adds weak", function () {
        var docType = (0, document_1.document)({
            name: "foo",
            fields: [
                {
                    name: "foo",
                    type: (0, boolean_1.boolean)({}),
                },
            ],
        });
        var type = (0, _1.reference)({
            weak: true,
            to: [docType],
        });
        var value = type.mock(faker_1.faker);
        var parsedValue = type.parse(value);
        (0, globals_1.expect)(parsedValue).toEqual(value);
        var resolvedValue = type.resolve(value);
        var docMock = docType.resolve(docType.mock(faker_1.faker));
        (0, globals_1.expect)([docMock, null]).toContainEqual(resolvedValue);
    });
    (0, globals_1.it)("allows defining the mocks", function () {
        return (0, globals_1.expect)([
            {
                _ref: "ffda9bed-b959-4100-abeb-9f1e241e9445",
                _type: "reference",
            },
            {
                _ref: "93f3af18-337a-4df7-a8de-fbaa6609fd0a",
                _type: "reference",
            },
        ]).toContainEqual((0, _1.reference)({
            to: [
                (0, document_1.document)({
                    name: "foo",
                    fields: [
                        {
                            name: "foo",
                            type: (0, boolean_1.boolean)(),
                        },
                    ],
                }),
            ],
            mock: function (faker) {
                return faker.helpers.arrayElement([
                    {
                        _ref: "ffda9bed-b959-4100-abeb-9f1e241e9445",
                        _type: "reference",
                    },
                    {
                        _ref: "93f3af18-337a-4df7-a8de-fbaa6609fd0a",
                        _type: "reference",
                    },
                ]);
            },
        }).mock(faker_1.faker));
    });
    (0, globals_1.it)("allows defining the zod", function () {
        var type = (0, _1.reference)({
            to: [
                (0, document_1.document)({
                    name: "foo",
                    fields: [
                        {
                            name: "foo",
                            type: (0, boolean_1.boolean)(),
                        },
                    ],
                }),
            ],
            zod: function (zod) { return zod.transform(function (_a) {
                var _ref = _a._ref;
                return _ref;
            }); },
        });
        var parsedValue = type.parse({
            _ref: "ffda9bed-b959-4100-abeb-9f1e241e9445",
            _type: "reference",
        });
        (0, globals_1.expect)(parsedValue).toEqual("ffda9bed-b959-4100-abeb-9f1e241e9445");
    });
    (0, globals_1.it)("types custom validation", function () {
        var _a, _b;
        var type = (0, _1.reference)({
            to: [
                (0, document_1.document)({
                    name: "foo",
                    fields: [
                        {
                            name: "foo",
                            type: (0, boolean_1.boolean)(),
                        },
                    ],
                }),
            ],
            validation: function (Rule) {
                return Rule.custom(function (value) {
                    var _a;
                    var _ref = value._ref;
                    return ((_a = _ref === null || _ref === void 0 ? void 0 : _ref.length) !== null && _a !== void 0 ? _a : 0) > 50 || "Needs to be 50 characters";
                });
            },
        });
        var rule = (0, test_utils_1.mockRule)();
        (_b = (_a = type.schema()).validation) === null || _b === void 0 ? void 0 : _b.call(_a, rule);
        (0, globals_1.expect)(rule.custom).toHaveBeenCalledWith(globals_1.expect.any(Function));
    });
});
//# sourceMappingURL=index.spec.js.map