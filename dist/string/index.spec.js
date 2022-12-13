"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker_1 = require("@faker-js/faker");
var globals_1 = require("@jest/globals");
var zod_1 = require("zod");
var test_utils_1 = require("../test-utils");
var _1 = require(".");
(0, globals_1.describe)("string", function () {
    (0, globals_1.it)("builds a sanity config", function () {
        return (0, globals_1.expect)((0, _1.string)().schema()).toEqual({
            type: "string",
            validation: globals_1.expect.any(Function),
        });
    });
    (0, globals_1.it)("passes through schema values", function () {
        return (0, globals_1.expect)((0, _1.string)({ hidden: false }).schema()).toHaveProperty("hidden", false);
    });
    (0, globals_1.it)("parses into a string", function () {
        var type = (0, _1.string)();
        var value = "foo";
        var parsedValue = type.parse(value);
        (0, globals_1.expect)(parsedValue).toEqual(value);
    });
    (0, globals_1.it)("resolves into a string", function () {
        var type = (0, _1.string)();
        var value = "foo";
        var resolvedValue = type.resolve(value);
        (0, globals_1.expect)(resolvedValue).toEqual(value);
    });
    (0, globals_1.it)("sets min", function () {
        var type = (0, _1.string)({ min: 3 });
        var rule = (0, test_utils_1.mockRule)();
        type.schema().validation(rule);
        (0, globals_1.expect)(rule.min).toHaveBeenCalledWith(3);
        var value = "foo";
        var parsedValue = type.parse(value);
        (0, globals_1.expect)(parsedValue).toEqual(value);
        (0, globals_1.expect)(function () {
            type.parse("fo");
        }).toThrow(zod_1.z.ZodError);
    });
    (0, globals_1.it)("sets max", function () {
        var type = (0, _1.string)({ max: 4 });
        var rule = (0, test_utils_1.mockRule)();
        type.schema().validation(rule);
        (0, globals_1.expect)(rule.max).toHaveBeenCalledWith(4);
        var value = "foo";
        var parsedValue = type.parse(value);
        (0, globals_1.expect)(parsedValue).toEqual(value);
        (0, globals_1.expect)(function () {
            type.parse("foobar");
        }).toThrow(zod_1.z.ZodError);
    });
    (0, globals_1.it)("sets length", function () {
        var type = (0, _1.string)({ length: 3 });
        var rule = (0, test_utils_1.mockRule)();
        type.schema().validation(rule);
        (0, globals_1.expect)(rule.length).toHaveBeenCalledWith(3);
        var value = "foo";
        var parsedValue = type.parse(value);
        (0, globals_1.expect)(parsedValue).toEqual(value);
        (0, globals_1.expect)(function () {
            type.parse("fooo");
        }).toThrow(zod_1.z.ZodError);
    });
    (0, globals_1.it)("sets regex", function () {
        var type = (0, _1.string)({ regex: /^foo$/ });
        var rule = (0, test_utils_1.mockRule)();
        type.schema().validation(rule);
        (0, globals_1.expect)(rule.regex).toHaveBeenCalledWith(/^foo$/);
        var value = "foo";
        var parsedValue = type.parse(value);
        (0, globals_1.expect)(parsedValue).toEqual(value);
        (0, globals_1.expect)(function () {
            type.parse("bar");
        }).toThrow(zod_1.z.ZodError);
    });
    (0, globals_1.it)("mocks a word", function () {
        return (0, globals_1.expect)((0, _1.string)().mock(faker_1.faker)).toEqual(globals_1.expect.any(String));
    });
    (0, globals_1.it)("mocks the same value with the same path", function () {
        (0, globals_1.expect)((0, _1.string)().mock(faker_1.faker)).toEqual((0, _1.string)().mock(faker_1.faker));
        (0, globals_1.expect)((0, _1.string)().mock(faker_1.faker, ".foo")).toEqual((0, _1.string)().mock(faker_1.faker, ".foo"));
        (0, globals_1.expect)((0, _1.string)().mock(faker_1.faker, ".foo")).not.toEqual((0, _1.string)().mock(faker_1.faker));
        (0, globals_1.expect)((0, _1.string)().mock(faker_1.faker)).not.toEqual((0, _1.string)().mock(faker_1.faker, ".foo"));
    });
    (0, globals_1.it)("allows defining the mocks", function () {
        return (0, globals_1.expect)(["Option 1", "Option 2"]).toContainEqual((0, _1.string)({
            mock: function (faker) { return faker.helpers.arrayElement(["Option 1", "Option 2"]); },
        }).mock(faker_1.faker));
    });
    (0, globals_1.it)("types custom validation", function () {
        var type = (0, _1.string)({
            validation: function (Rule) {
                return Rule.custom(function (string) { return string.length > 50 || "Needs to be 50 characters"; });
            },
        });
        var rule = (0, test_utils_1.mockRule)();
        type.schema().validation(rule);
        (0, globals_1.expect)(rule.custom).toHaveBeenCalledWith(globals_1.expect.any(Function));
    });
    (0, globals_1.it)("allows defining the zod", function () {
        var type = (0, _1.string)({
            zod: function (zod) { return zod.transform(function (value) { return value.length; }); },
        });
        var parsedValue = type.parse("Test string");
        (0, globals_1.expect)(parsedValue).toEqual(11);
    });
    (0, globals_1.it)("types custom validation", function () {
        var type = (0, _1.string)({
            validation: function (Rule) {
                return Rule.custom(function (value) {
                    var string = value;
                    return string.length > 50 || "Needs to be 50 characters";
                });
            },
        });
        var rule = (0, test_utils_1.mockRule)();
        type.schema().validation(rule);
        (0, globals_1.expect)(rule.custom).toHaveBeenCalledWith(globals_1.expect.any(Function));
    });
    (0, globals_1.it)("types values from list", function () {
        var type = (0, _1.string)({
            options: {
                list: ["foo", { title: "Bar", value: "bar" }],
            },
        });
        var value = "foo";
        var parsedValue = type.parse(value);
        (0, globals_1.expect)(parsedValue).toEqual(value);
        (0, globals_1.expect)(["foo", "bar"]).toContain(type.mock(faker_1.faker));
        (0, globals_1.expect)(function () {
            type.parse("fo");
        }).toThrow(zod_1.z.ZodError);
    });
});
//# sourceMappingURL=index.spec.js.map