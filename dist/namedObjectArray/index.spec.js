"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var globals_1 = require("@jest/globals");
var zod_1 = require("zod");
var boolean_1 = require("../boolean");
var objectNamed_1 = require("../objectNamed");
var test_utils_1 = require("../test-utils");
var _1 = require(".");
var dummyObj = (0, objectNamed_1.objectNamed)({
    name: "dummy",
    fields: [
        {
            name: "foo",
            type: (0, boolean_1.boolean)(),
        },
    ],
});
var dummyObj2 = (0, objectNamed_1.objectNamed)({
    name: "movie",
    fields: [
        {
            name: "bar",
            type: (0, boolean_1.boolean)(),
        },
    ],
});
var dummyObj3 = (0, objectNamed_1.objectNamed)({
    name: "actor",
    fields: [
        {
            name: "baz",
            type: (0, boolean_1.boolean)(),
        },
    ],
});
(0, globals_1.describe)("array", function () {
    (0, globals_1.it)("builds a sanity config", function () {
        return (0, globals_1.expect)((0, _1.namedObjectArray)({ of: [dummyObj] }).schema()).toEqual({
            type: "array",
            of: [
                {
                    type: "object",
                    name: "dummy",
                    fields: [
                        {
                            name: "foo",
                            type: "boolean",
                            validation: globals_1.expect.any(Function),
                        },
                    ],
                    preview: undefined,
                },
            ],
            validation: globals_1.expect.any(Function),
        });
    });
    (0, globals_1.it)("passes through schema values", function () {
        return (0, globals_1.expect)((0, _1.namedObjectArray)({ of: [dummyObj], hidden: false }).schema()).toHaveProperty("hidden", false);
    });
    (0, globals_1.it)("adds document types", function () {
        var type = (0, _1.namedObjectArray)({ of: [dummyObj] });
        var value = [
            {
                _type: "dummy",
                _key: "a",
                foo: true,
            },
        ];
        var parsedValue = type.parse(value);
        (0, globals_1.expect)(parsedValue).toEqual(value);
    });
    (0, globals_1.it)("creates union with multiple named objects", function () {
        var type = (0, _1.namedObjectArray)({
            of: [dummyObj, dummyObj2, dummyObj3],
        });
        var schema = type.schema();
        (0, globals_1.expect)(schema).toHaveProperty("of", [
            {
                type: "object",
                name: "dummy",
                preview: undefined,
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
                name: "movie",
                preview: undefined,
                fields: [
                    {
                        name: "bar",
                        type: "boolean",
                        validation: globals_1.expect.any(Function),
                    },
                ],
            },
            {
                type: "object",
                name: "actor",
                preview: undefined,
                fields: [
                    {
                        name: "baz",
                        type: "boolean",
                        validation: globals_1.expect.any(Function),
                    },
                ],
            },
        ]);
        var value = [
            { _type: "dummy", _key: "a", foo: true },
            { _type: "movie", _key: "b", bar: true },
            { _type: "actor", _key: "c", baz: true },
        ];
        var parsedValue = type.parse(value);
        (0, globals_1.expect)(parsedValue).toEqual(value);
    });
    (0, globals_1.it)("resolves into an array of objects", function () {
        var type = (0, _1.namedObjectArray)({
            of: [
                (0, objectNamed_1.objectNamed)({
                    name: "foo",
                    fields: [
                        {
                            name: "foo",
                            type: (0, boolean_1.boolean)({
                                zodResolved: function (zod) { return zod.transform(function () { return "foo"; }); },
                            }),
                        },
                    ],
                }),
            ],
        });
        var value = [
            {
                _type: "foo",
                foo: true,
                _key: "a",
            },
        ];
        var resolvedValue = type.resolve(value);
        (0, globals_1.expect)(resolvedValue).toEqual([{ _type: "foo", foo: "foo", _key: "a" }]);
    });
    (0, globals_1.it)("sets min", function () {
        var type = (0, _1.namedObjectArray)({ min: 2, of: [dummyObj] });
        var rule = (0, test_utils_1.mockRule)();
        type.schema().validation(rule);
        (0, globals_1.expect)(rule.min).toHaveBeenCalledWith(2);
        var value = [
            { _type: "dummy", foo: true, _key: "a" },
            { _type: "dummy", foo: false, _key: "b" },
        ];
        var parsedValue = type.parse(value);
        (0, globals_1.expect)(parsedValue).toEqual(value);
        (0, globals_1.expect)(function () {
            type.parse([{ _type: "dummy", foo: true, _key: "a" }]);
        }).toThrow(zod_1.z.ZodError);
    });
    (0, globals_1.it)("sets max", function () {
        var type = (0, _1.namedObjectArray)({ max: 3, of: [dummyObj] });
        var rule = (0, test_utils_1.mockRule)();
        type.schema().validation(rule);
        (0, globals_1.expect)(rule.max).toHaveBeenCalledWith(3);
        var value = [
            { _type: "dummy", foo: true, _key: "a" },
            { _type: "dummy", foo: false, _key: "a" },
            { _type: "dummy", foo: true, _key: "a" },
        ];
        var parsedValue = type.parse(value);
        (0, globals_1.expect)(parsedValue).toEqual(value);
        (0, globals_1.expect)(function () {
            type.parse([
                { _type: "dummy", foo: true, _key: "a" },
                { _type: "dummy", foo: false, _key: "a" },
                { _type: "dummy", foo: true, _key: "a" },
                { _type: "dummy", foo: false, _key: "a" },
            ]);
        }).toThrow(zod_1.z.ZodError);
    });
    (0, globals_1.it)("sets length", function () {
        var type = (0, _1.namedObjectArray)({ length: 2, of: [dummyObj] });
        var rule = (0, test_utils_1.mockRule)();
        type.schema().validation(rule);
        (0, globals_1.expect)(rule.length).toHaveBeenCalledWith(2);
        var value = [
            { _type: "dummy", foo: true, _key: "a" },
            { _type: "dummy", foo: false, _key: "a" },
        ];
        var parsedValue = type.parse(value);
        (0, globals_1.expect)(parsedValue).toEqual(value);
        (0, globals_1.expect)(function () {
            type.parse([{ _type: "dummy", foo: true, _key: "a" }]);
        }).toThrow(zod_1.z.ZodError);
        (0, globals_1.expect)(function () {
            type.parse([
                { _type: "dummy", foo: true, _key: "a" },
                { _type: "dummy", foo: false, _key: "a" },
                { _type: "dummy", foo: true, _key: "a" },
            ]);
        }).toThrow(zod_1.z.ZodError);
    });
    (0, globals_1.it)("allows defining the zod", function () {
        var type = (0, _1.namedObjectArray)({
            of: [
                (0, objectNamed_1.objectNamed)({
                    name: "dummy",
                    fields: [
                        {
                            name: "foo",
                            type: (0, boolean_1.boolean)({
                                zod: function (zod) { return zod.transform(function (value) { return (value ? 1 : 0); }); },
                            }),
                        },
                    ],
                }),
            ],
            zod: function (zod) {
                return zod.transform(function (values) {
                    return values.reduce(function (sum, val) { return sum + val.foo; }, 0);
                });
            },
        });
        var parsedValue = type.parse([
            { _type: "dummy", foo: true, _key: "a" },
            { _type: "dummy", foo: false, _key: "a" },
        ]);
        (0, globals_1.expect)(parsedValue).toEqual(1);
    });
    (0, globals_1.it)("types custom validation", function () {
        var type = (0, _1.namedObjectArray)({
            of: [dummyObj, dummyObj2],
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