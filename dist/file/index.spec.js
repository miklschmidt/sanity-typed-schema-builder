"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker_1 = require("@faker-js/faker");
var globals_1 = require("@jest/globals");
var boolean_1 = require("../boolean");
var string_1 = require("../string");
var test_utils_1 = require("../test-utils");
var _1 = require(".");
(0, globals_1.describe)("file", function () {
    (0, globals_1.it)("builds a sanity config", function () {
        return (0, globals_1.expect)((0, _1.file)().schema()).toEqual({
            type: "file",
        });
    });
    (0, globals_1.it)("passes through schema values", function () {
        return (0, globals_1.expect)((0, _1.file)({ hidden: false }).schema()).toHaveProperty("hidden", false);
    });
    (0, globals_1.it)("parses into an file", function () {
        var type = (0, _1.file)();
        var value = {
            _type: "file",
            asset: {
                _type: "reference",
                _ref: "file-5igDD9UuXffIucwZpyVthr0c",
            },
        };
        var parsedValue = type.parse(value);
        (0, globals_1.expect)(parsedValue).toEqual(value);
    });
    (0, globals_1.it)("resolves into an file", function () {
        var type = (0, _1.file)();
        var value = {
            _type: "file",
            asset: {
                _type: "reference",
                _ref: "file-5igDD9UuXffIucwZpyVthr0c",
            },
        };
        var resolvedValue = type.resolve(value);
        (0, globals_1.expect)(resolvedValue).toEqual(value);
    });
    (0, globals_1.it)("adds fields", function () {
        var type = (0, _1.file)({
            fields: [
                {
                    name: "foo",
                    type: (0, boolean_1.boolean)(),
                },
                {
                    name: "bar",
                    optional: true,
                    type: (0, boolean_1.boolean)(),
                },
            ],
        });
        var schema = type.schema();
        (0, globals_1.expect)(schema).toHaveProperty("fields", [
            {
                name: "foo",
                type: "boolean",
                validation: globals_1.expect.any(Function),
            },
            {
                name: "bar",
                type: "boolean",
                validation: globals_1.expect.any(Function),
            },
        ]);
        var value = {
            foo: true,
            _type: "file",
            asset: {
                _type: "reference",
                _ref: "file-5igDD9UuXffIucwZpyVthr0c",
            },
        };
        var parsedValue = type.parse(value);
        (0, globals_1.expect)(parsedValue).toEqual(value);
    });
    (0, globals_1.it)("mocks the field values", function () {
        return (0, globals_1.expect)((0, _1.file)({
            fields: [
                {
                    name: "foo",
                    type: (0, boolean_1.boolean)(),
                },
                {
                    name: "bar",
                    type: (0, string_1.string)(),
                },
            ],
        }).mock(faker_1.faker)).toEqual({
            _type: "file",
            bar: globals_1.expect.any(String),
            foo: globals_1.expect.any(Boolean),
            asset: {
                _type: "reference",
                _ref: globals_1.expect.any(String),
            },
        });
    });
    (0, globals_1.it)("mocks the same value with the same path", function () {
        (0, globals_1.expect)((0, _1.file)().mock(faker_1.faker)).toEqual((0, _1.file)().mock(faker_1.faker));
        (0, globals_1.expect)((0, _1.file)().mock(faker_1.faker, ".foo")).toEqual((0, _1.file)().mock(faker_1.faker, ".foo"));
        (0, globals_1.expect)((0, _1.file)().mock(faker_1.faker, ".foo")).not.toEqual((0, _1.file)().mock(faker_1.faker));
        (0, globals_1.expect)((0, _1.file)().mock(faker_1.faker)).not.toEqual((0, _1.file)().mock(faker_1.faker, ".foo"));
    });
    (0, globals_1.it)("allows defining the mocks", function () {
        return (0, globals_1.expect)([
            {
                _type: "file",
                asset: {
                    _type: "reference",
                    _ref: "file-5igDD9UuXffIucwZpyVthr0c",
                },
                foo: true,
                bar: "foo",
            },
            {
                _type: "file",
                asset: {
                    _type: "reference",
                    _ref: "file-5igDD9UuXffIucwZpyVthr0c",
                },
                foo: false,
                bar: "bar",
            },
        ]).toContainEqual((0, _1.file)({
            fields: [
                {
                    name: "foo",
                    type: (0, boolean_1.boolean)(),
                },
                {
                    name: "bar",
                    type: (0, string_1.string)(),
                },
            ],
            mock: function (faker) {
                return faker.helpers.arrayElement([
                    {
                        _type: "file",
                        asset: {
                            _type: "reference",
                            _ref: "file-5igDD9UuXffIucwZpyVthr0c",
                        },
                        foo: true,
                        bar: "foo",
                    },
                    {
                        _type: "file",
                        asset: {
                            _type: "reference",
                            _ref: "file-5igDD9UuXffIucwZpyVthr0c",
                        },
                        foo: false,
                        bar: "bar",
                    },
                ]);
            },
        }).mock(faker_1.faker));
    });
    (0, globals_1.it)("allows defining the zod", function () {
        var type = (0, _1.file)({
            zod: function (zod) { return zod.transform(function (value) { return Object.entries(value); }); },
        });
        var parsedValue = type.parse({
            _type: "file",
            asset: {
                _type: "reference",
                _ref: "file-5igDD9UuXffIucwZpyVthr0c",
            },
        });
        (0, globals_1.expect)(parsedValue).toEqual(globals_1.expect.arrayContaining([
            ["_type", "file"],
            [
                "asset",
                {
                    _type: "reference",
                    _ref: "file-5igDD9UuXffIucwZpyVthr0c",
                },
            ],
        ]));
    });
    (0, globals_1.it)("types custom validation", function () {
        var _a, _b;
        var type = (0, _1.file)({
            fields: [
                {
                    name: "foo",
                    optional: true,
                    type: (0, boolean_1.boolean)(),
                },
                {
                    name: "bar",
                    type: (0, string_1.string)(),
                },
            ],
            validation: function (Rule) {
                return Rule.custom(function (value) {
                    var bar = value.bar;
                    return !bar || "Needs an empty bar";
                });
            },
        });
        var rule = (0, test_utils_1.mockRule)();
        (_b = (_a = type.schema()).validation) === null || _b === void 0 ? void 0 : _b.call(_a, rule);
        (0, globals_1.expect)(rule.custom).toHaveBeenCalledWith(globals_1.expect.any(Function));
    });
});
//# sourceMappingURL=index.spec.js.map