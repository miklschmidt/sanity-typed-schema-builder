"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker_1 = require("@faker-js/faker");
var globals_1 = require("@jest/globals");
var zod_1 = require("zod");
var test_utils_1 = require("../test-utils");
var _1 = require(".");
(0, globals_1.describe)("text", function () {
    (0, globals_1.it)("builds a sanity config", function () {
        return (0, globals_1.expect)((0, _1.text)().schema()).toEqual({
            type: "text",
            validation: globals_1.expect.any(Function),
        });
    });
    (0, globals_1.it)("passes through schema values", function () {
        return (0, globals_1.expect)((0, _1.text)({ hidden: false }).schema()).toHaveProperty("hidden", false);
    });
    (0, globals_1.it)("parses into a string", function () {
        var type = (0, _1.text)();
        var value = "foo";
        var parsedValue = type.parse(value);
        (0, globals_1.expect)(parsedValue).toEqual(value);
    });
    (0, globals_1.it)("resolves into a string", function () {
        var type = (0, _1.text)();
        var value = "foo";
        var resolvedValue = type.resolve(value);
        (0, globals_1.expect)(resolvedValue).toEqual(value);
    });
    (0, globals_1.it)("sets min", function () {
        var type = (0, _1.text)({ min: 3 });
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
        var type = (0, _1.text)({ max: 4 });
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
        var type = (0, _1.text)({ length: 3 });
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
        var type = (0, _1.text)({ regex: /^foo$/ });
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
    (0, globals_1.it)("mocks some paragraphs", function () {
        return (0, globals_1.expect)((0, _1.text)().mock(faker_1.faker)).toEqual(globals_1.expect.any(String));
    });
    (0, globals_1.it)("mocks the same value with the same path", function () {
        (0, globals_1.expect)((0, _1.text)().mock(faker_1.faker)).toEqual((0, _1.text)().mock(faker_1.faker));
        (0, globals_1.expect)((0, _1.text)().mock(faker_1.faker, ".foo")).toEqual((0, _1.text)().mock(faker_1.faker, ".foo"));
        (0, globals_1.expect)((0, _1.text)().mock(faker_1.faker, ".foo")).not.toEqual((0, _1.text)().mock(faker_1.faker));
        (0, globals_1.expect)((0, _1.text)().mock(faker_1.faker)).not.toEqual((0, _1.text)().mock(faker_1.faker, ".foo"));
    });
    (0, globals_1.it)("allows defining the mocks", function () {
        return (0, globals_1.expect)(["Option 1", "Option 2"]).toContainEqual((0, _1.text)({
            mock: function (faker) { return faker.helpers.arrayElement(["Option 1", "Option 2"]); },
        }).mock(faker_1.faker));
    });
    (0, globals_1.it)("allows defining the zod", function () {
        var type = (0, _1.text)({
            zod: function (zod) { return zod.transform(function (value) { return value.length; }); },
        });
        var parsedValue = type.parse("Test string");
        (0, globals_1.expect)(parsedValue).toEqual(11);
    });
    (0, globals_1.it)("types custom validation", function () {
        var type = (0, _1.text)({
            validation: function (Rule) {
                return Rule.custom(function (value) {
                    var text = value;
                    return text.length > 50 || "Needs to be 50 characters";
                });
            },
        });
        var rule = (0, test_utils_1.mockRule)();
        type.schema().validation(rule);
        (0, globals_1.expect)(rule.custom).toHaveBeenCalledWith(globals_1.expect.any(Function));
    });
});
//# sourceMappingURL=index.spec.js.map