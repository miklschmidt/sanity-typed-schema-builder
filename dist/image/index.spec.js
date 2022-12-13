"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker_1 = require("@faker-js/faker");
var globals_1 = require("@jest/globals");
var boolean_1 = require("../boolean");
var string_1 = require("../string");
var test_utils_1 = require("../test-utils");
var _1 = require(".");
(0, globals_1.describe)("image", function () {
    (0, globals_1.it)("builds a sanity config", function () {
        return (0, globals_1.expect)((0, _1.image)().schema()).toEqual({
            type: "image",
            options: {
                hotspot: false,
            },
        });
    });
    (0, globals_1.it)("passes through schema values", function () {
        return (0, globals_1.expect)((0, _1.image)({ hidden: false }).schema()).toHaveProperty("hidden", false);
    });
    (0, globals_1.it)("parses into an image", function () {
        var type = (0, _1.image)();
        var value = {
            _type: "image",
            asset: {
                _type: "reference",
                _ref: "image-S2od0Kd5mpOa4Y0Wlku8RvXE",
            },
        };
        var parsedValue = type.parse(value);
        (0, globals_1.expect)(parsedValue).toEqual(value);
    });
    (0, globals_1.it)("adds hotspot", function () {
        var type = (0, _1.image)({ hotspot: true });
        var value = {
            _type: "image",
            asset: {
                _type: "reference",
                _ref: "image-S2od0Kd5mpOa4Y0Wlku8RvXE",
            },
            crop: {
                top: 0.028131868131868132,
                bottom: 0.15003663003663004,
                left: 0.01875,
                right: 0.009375000000000022,
            },
            hotspot: {
                x: 0.812500000000001,
                y: 0.27963369963369955,
                height: 0.3248351648351647,
                width: 0.28124999999999994,
            },
        };
        var parsedValue = type.parse(value);
        (0, globals_1.expect)(parsedValue).toEqual(value);
    });
    (0, globals_1.it)("allows undefined hotspot and crop on new images", function () {
        var type = (0, _1.image)({ hotspot: true });
        var value = {
            _type: "image",
            asset: {
                _type: "reference",
                _ref: "image-S2od0Kd5mpOa4Y0Wlku8RvXE",
            },
        };
        var parsedValue = type.parse(value);
        (0, globals_1.expect)(parsedValue).toEqual(value);
    });
    (0, globals_1.it)("passes through hotspot to options object", function () {
        var type = (0, _1.image)({ hotspot: true });
        (0, globals_1.expect)(type.schema()).toHaveProperty("options");
        (0, globals_1.expect)(type.schema().options).toHaveProperty("hotspot", true);
    });
    (0, globals_1.it)("adds fields", function () {
        var type = (0, _1.image)({
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
            _type: "image",
            asset: {
                _type: "reference",
                _ref: "image-S2od0Kd5mpOa4Y0Wlku8RvXE",
            },
        };
        var parsedValue = type.parse(value);
        (0, globals_1.expect)(parsedValue).toEqual(value);
    });
    (0, globals_1.it)("mocks the field values", function () {
        return (0, globals_1.expect)((0, _1.image)({
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
            _type: "image",
            bar: globals_1.expect.any(String),
            foo: globals_1.expect.any(Boolean),
            asset: {
                _type: "reference",
                _ref: globals_1.expect.stringMatching(/^image-\w+-\d+x\d+-\w+$/),
            },
        });
    });
    (0, globals_1.it)("mocks the same value with the same path", function () {
        (0, globals_1.expect)((0, _1.image)().mock(faker_1.faker)).toEqual((0, _1.image)().mock(faker_1.faker));
        (0, globals_1.expect)((0, _1.image)().mock(faker_1.faker, ".foo")).toEqual((0, _1.image)().mock(faker_1.faker, ".foo"));
        (0, globals_1.expect)((0, _1.image)().mock(faker_1.faker, ".foo")).not.toEqual((0, _1.image)().mock(faker_1.faker));
        (0, globals_1.expect)((0, _1.image)().mock(faker_1.faker)).not.toEqual((0, _1.image)().mock(faker_1.faker, ".foo"));
    });
    (0, globals_1.it)("allows defining the mocks", function () {
        return (0, globals_1.expect)([
            {
                _type: "image",
                asset: {
                    _type: "reference",
                    _ref: "image-S2od0Kd5mpOa4Y0Wlku8RvXE",
                },
                foo: true,
                bar: "foo",
            },
            {
                _type: "image",
                asset: {
                    _type: "reference",
                    _ref: "image-S2od0Kd5mpOa4Y0Wlku8RvXE",
                },
                foo: false,
                bar: "bar",
            },
        ]).toContainEqual((0, _1.image)({
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
                        _type: "image",
                        asset: {
                            _type: "reference",
                            _ref: "image-S2od0Kd5mpOa4Y0Wlku8RvXE",
                        },
                        foo: true,
                        bar: "foo",
                    },
                    {
                        _type: "image",
                        asset: {
                            _type: "reference",
                            _ref: "image-S2od0Kd5mpOa4Y0Wlku8RvXE",
                        },
                        foo: false,
                        bar: "bar",
                    },
                ]);
            },
        }).mock(faker_1.faker));
    });
    (0, globals_1.it)("allows defining the zod", function () {
        var type = (0, _1.image)({
            zod: function (zod) { return zod.transform(function (value) { return Object.entries(value); }); },
        });
        var parsedValue = type.parse({
            _type: "image",
            asset: {
                _type: "reference",
                _ref: "image-S2od0Kd5mpOa4Y0Wlku8RvXE",
            },
        });
        (0, globals_1.expect)(parsedValue).toEqual(globals_1.expect.arrayContaining([
            ["_type", "image"],
            [
                "asset",
                {
                    _type: "reference",
                    _ref: "image-S2od0Kd5mpOa4Y0Wlku8RvXE",
                },
            ],
        ]));
    });
    (0, globals_1.it)("types custom validation", function () {
        var _a, _b;
        var type = (0, _1.image)({
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