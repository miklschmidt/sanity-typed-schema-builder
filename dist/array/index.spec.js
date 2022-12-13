"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var globals_1 = require("@jest/globals");
var zod_1 = require("zod");
var boolean_1 = require("../boolean");
var object_1 = require("../object");
var test_utils_1 = require("../test-utils");
var _1 = require(".");
(0, globals_1.describe)("array", function () {
    (0, globals_1.it)("builds a sanity config", function () {
        return (0, globals_1.expect)((0, _1.array)({ of: [(0, boolean_1.boolean)()] }).schema()).toEqual({
            type: "array",
            of: [{ type: "boolean" }],
            validation: globals_1.expect.any(Function),
        });
    });
    (0, globals_1.it)("passes through schema values", function () {
        return (0, globals_1.expect)((0, _1.array)({ of: [(0, boolean_1.boolean)()], hidden: false }).schema()).toHaveProperty("hidden", false);
    });
    (0, globals_1.it)("adds primitive types", function () {
        var type = (0, _1.array)({ of: [(0, boolean_1.boolean)()] });
        var value = [];
        var parsedValue = type.parse(value);
        (0, globals_1.expect)(parsedValue).toEqual(value);
    });
    (0, globals_1.it)("adds keyed nonprimitive types", function () {
        var type = (0, _1.array)({
            of: [
                (0, object_1.object)({
                    fields: [
                        {
                            name: "foo",
                            type: (0, boolean_1.boolean)(),
                        },
                    ],
                }),
            ],
        });
        var schema = type.schema();
        (0, globals_1.expect)(schema).toHaveProperty("of", [
            {
                type: "object",
                fields: [
                    {
                        name: "foo",
                        type: "boolean",
                        validation: globals_1.expect.any(Function),
                    },
                ],
            },
        ]);
        var value = [
            { _key: "a", foo: true },
            { _key: "b", foo: false },
        ];
        var parsedValue = type.parse(value);
        (0, globals_1.expect)(parsedValue).toEqual(value);
    });
    (0, globals_1.it)("creates union with multiple types", function () {
        var type = (0, _1.array)({
            of: [
                (0, object_1.object)({
                    fields: [
                        {
                            name: "foo",
                            type: (0, boolean_1.boolean)(),
                        },
                    ],
                }),
                (0, object_1.object)({
                    fields: [
                        {
                            name: "bar",
                            type: (0, boolean_1.boolean)(),
                        },
                    ],
                }),
            ],
        });
        var schema = type.schema();
        (0, globals_1.expect)(schema).toHaveProperty("of", [
            {
                type: "object",
                fields: [
                    {
                        name: "foo",
                        type: "boolean",
                        validation: globals_1.expect.any(Function),
                    },
                ],
            },
            {
                type: "object",
                fields: [
                    {
                        name: "bar",
                        type: "boolean",
                        validation: globals_1.expect.any(Function),
                    },
                ],
            },
        ]);
        var value = [
            { _key: "a", foo: true },
            { _key: "b", bar: true },
        ];
        var parsedValue = type.parse(value);
        (0, globals_1.expect)(parsedValue).toEqual(value);
    });
    (0, globals_1.it)("resolves into an array", function () {
        var type = (0, _1.array)({
            of: [
                (0, boolean_1.boolean)({
                    zodResolved: function (zod) { return zod.transform(function () { return "foo"; }); },
                }),
            ],
        });
        var value = [true];
        var resolvedValue = type.resolve(value);
        (0, globals_1.expect)(resolvedValue).toEqual(["foo"]);
    });
    (0, globals_1.it)("sets min", function () {
        var type = (0, _1.array)({ min: 2, of: [(0, boolean_1.boolean)()] });
        var rule = (0, test_utils_1.mockRule)();
        type.schema().validation(rule);
        (0, globals_1.expect)(rule.min).toHaveBeenCalledWith(2);
        var value = [true, false];
        var parsedValue = type.parse(value);
        (0, globals_1.expect)(parsedValue).toEqual(value);
        (0, globals_1.expect)(function () {
            type.parse([true]);
        }).toThrow(zod_1.z.ZodError);
    });
    (0, globals_1.it)("sets max", function () {
        var type = (0, _1.array)({ max: 3, of: [(0, boolean_1.boolean)()] });
        var rule = (0, test_utils_1.mockRule)();
        type.schema().validation(rule);
        (0, globals_1.expect)(rule.max).toHaveBeenCalledWith(3);
        var value = [true, false, true];
        var parsedValue = type.parse(value);
        (0, globals_1.expect)(parsedValue).toEqual(value);
        (0, globals_1.expect)(function () {
            type.parse([true, false, true, false]);
        }).toThrow(zod_1.z.ZodError);
    });
    (0, globals_1.it)("sets length", function () {
        var type = (0, _1.array)({ length: 2, of: [(0, boolean_1.boolean)()] });
        var rule = (0, test_utils_1.mockRule)();
        type.schema().validation(rule);
        (0, globals_1.expect)(rule.length).toHaveBeenCalledWith(2);
        var value = [
            true,
            false,
        ];
        var parsedValue = type.parse(value);
        (0, globals_1.expect)(parsedValue).toEqual(value);
        (0, globals_1.expect)(function () {
            type.parse([true]);
        }).toThrow(zod_1.z.ZodError);
        (0, globals_1.expect)(function () {
            type.parse([true, false, true]);
        }).toThrow(zod_1.z.ZodError);
    });
    (0, globals_1.it)("allows defining the zod", function () {
        var type = (0, _1.array)({
            of: [
                (0, boolean_1.boolean)({ zod: function (zod) { return zod.transform(function (value) { return (value ? 1 : 0); }); } }),
            ],
            zod: function (zod) {
                return zod.transform(function (values) {
                    return values.reduce(function (sum, val) { return sum + val; }, 0);
                });
            },
        });
        var parsedValue = type.parse([true, false]);
        (0, globals_1.expect)(parsedValue).toEqual(1);
    });
    (0, globals_1.it)("types custom validation", function () {
        var type = (0, _1.array)({
            of: [
                (0, object_1.object)({
                    fields: [
                        {
                            name: "foo",
                            type: (0, boolean_1.boolean)(),
                        },
                    ],
                }),
                (0, object_1.object)({
                    fields: [
                        {
                            name: "bar",
                            type: (0, boolean_1.boolean)(),
                        },
                    ],
                }),
            ],
            validation: function (Rule) {
                return Rule.custom(function (value) {
                    var elements = value;
                    return elements.length > 50 || "Needs to be 50 characters";
                });
            },
        });
        var rule = (0, test_utils_1.mockRule)();
        type.schema().validation(rule);
        (0, globals_1.expect)(rule.custom).toHaveBeenCalledWith(globals_1.expect.any(Function));
    });
});
//# sourceMappingURL=index.spec.js.map